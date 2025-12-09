'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, CheckCircle, Clock, Play, Award } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import { getRoadmapContent } from '../../services/progressService';
import { RoadmapContent } from '../../types/progress';
import './roadmap-detail.css';

export default function RoadmapDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [content, setContent] = useState<RoadmapContent | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    if (params.roadmapId) {
      const data = getRoadmapContent(params.roadmapId as string);
      setContent(data);
    }
  }, [params.roadmapId]);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    if (!quizSubmitted) {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: answerIndex
      });
    }
  };

  const handleQuizSubmit = () => {
    if (!content) return;
    
    let correct = 0;
    content.quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    
    setQuizScore(correct);
    setQuizSubmitted(true);
  };

  if (!content) {
    return (
      <div className="roadmap-detail-page">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  const passPercentage = (quizScore / content.quiz.questions.length) * 100;
  const hasPassed = passPercentage >= 70;

  return (
    <div className="roadmap-detail-page">
      {/* Header */}
      <div className="detail-header">
        <button className="back-button" onClick={() => router.push('/user/progress')}>
          <ArrowLeft size={20} />
          <span>Back to Progress</span>
        </button>
        
        <div className="header-info">
          <h1 className="detail-title">{content.title}</h1>
          <p className="detail-subtitle">{content.description}</p>
        </div>

        <div className="progress-indicator">
          <div className="progress-text">
            <span>Lesson Progress</span>
            <strong>{content.progress}%</strong>
          </div>
          <div className="progress-bar-small">
            <div 
              className="progress-fill-small"
              style={{ width: `${content.progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="content-container">
        <div className="lesson-card">
          <div className="lesson-header">
            <div className="lesson-icon">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="lesson-title">{content.lesson.title}</h2>
              <div className="lesson-meta">
                <span>
                  <Clock size={14} />
                  {content.lesson.duration}
                </span>
                <span className="lesson-status">
                  <CheckCircle size={14} />
                  In Progress
                </span>
              </div>
            </div>
          </div>

          <div className="lesson-content">
            {content.lesson.sections.map((section, index) => (
              <div key={index} className="content-section">
                <h3 className="section-title">{section.title}</h3>
                <div className="section-text">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
                {section.codeExample && (
                  <div className="code-block">
                    <div className="code-header">
                      <span className="code-label">Example Code</span>
                    </div>
                    <pre><code>{section.codeExample}</code></pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="key-points">
            <h3 className="points-title">Key Takeaways</h3>
            <ul className="points-list">
              {content.lesson.keyPoints.map((point, index) => (
                <li key={index}>
                  <CheckCircle size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quiz Section */}
        <div className="quiz-card">
          <div className="quiz-header">
            <div className="quiz-icon">
              <Award size={24} />
            </div>
            <div>
              <h2 className="quiz-title">{content.quiz.title}</h2>
              <p className="quiz-description">
                Complete this assessment to finish the lesson
              </p>
            </div>
          </div>

          {!quizSubmitted ? (
            <>
              <div className="quiz-questions">
                {content.quiz.questions.map((question, qIndex) => (
                  <div key={qIndex} className="question-card">
                    <h4 className="question-text">
                      {qIndex + 1}. {question.question}
                    </h4>
                    <div className="answers-list">
                      {question.answers.map((answer, aIndex) => (
                        <button
                          key={aIndex}
                          className={`answer-button ${
                            selectedAnswers[qIndex] === aIndex ? 'selected' : ''
                          }`}
                          onClick={() => handleAnswerSelect(qIndex, aIndex)}
                        >
                          <div className="answer-radio">
                            {selectedAnswers[qIndex] === aIndex && (
                              <div className="answer-radio-dot"></div>
                            )}
                          </div>
                          <span>{answer}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button 
                className="submit-button"
                onClick={handleQuizSubmit}
                disabled={Object.keys(selectedAnswers).length !== content.quiz.questions.length}
              >
                Submit Assessment
              </button>
            </>
          ) : (
            <div className="quiz-results">
              <div className={`result-card ${hasPassed ? 'passed' : 'failed'}`}>
                <div className="result-icon">
                  {hasPassed ? <CheckCircle size={48} /> : <Award size={48} />}
                </div>
                <h3 className="result-title">
                  {hasPassed ? 'Congratulations!' : 'Keep Learning!'}
                </h3>
                <p className="result-score">
                  You scored {quizScore} out of {content.quiz.questions.length}
                </p>
                <p className="result-percentage">
                  {passPercentage.toFixed(0)}%
                </p>
                <p className="result-message">
                  {hasPassed 
                    ? 'You have successfully completed this lesson!' 
                    : 'You need 70% to pass. Review the lesson and try again.'}
                </p>
                <div className="result-actions">
                  {hasPassed ? (
                    <button className="action-button primary" onClick={() => router.push('/progress')}>
                      Continue Learning
                    </button>
                  ) : (
                    <button className="action-button secondary" onClick={() => {
                      setQuizSubmitted(false);
                      setSelectedAnswers({});
                      setQuizScore(0);
                    }}>
                      Retry Assessment
                    </button>
                  )}
                </div>
              </div>

              <div className="answers-review">
                <h3 className="review-title">Review Answers</h3>
                {content.quiz.questions.map((question, qIndex) => {
                  const userAnswer = selectedAnswers[qIndex];
                  const isCorrect = userAnswer === question.correctAnswer;
                  return (
                    <div key={qIndex} className={`review-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                      <div className="review-question">
                        <span className="review-number">{qIndex + 1}</span>
                        <p>{question.question}</p>
                      </div>
                      <div className="review-answer">
                        <p className="your-answer">
                          Your answer: <strong>{question.answers[userAnswer]}</strong>
                        </p>
                        {!isCorrect && (
                          <p className="correct-answer">
                            Correct answer: <strong>{question.answers[question.correctAnswer]}</strong>
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}