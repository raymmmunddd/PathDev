'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Upload, BookOpen } from 'lucide-react';
import './chat.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your PathDev AI Tutor. I can help explain concepts, solve problems, and quiz you on any subject. You can also upload PDF or Word documents for me to read and reference. What would you like to learn about today?",
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header-content">
            <div className="chat-header-icon">
              <BookOpen size={24} />
            </div>
            <div>
              <h1 className="chat-title">AI Tutor</h1>
              <p className="chat-subtitle">Ask me anything about your lessons</p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message-wrapper ${message.sender}`}>
              <div className="message-bubble">
                <div className="message-header">
                  <span className="message-sender">
                    {message.sender === 'ai' ? 'AI Tutor' : 'You'}
                  </span>
                  <span className="message-time">{message.timestamp}</span>
                </div>
                <p className="message-text">{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="chat-input-container">
          <div className="chat-input-wrapper">
            <button className="upload-button" title="Upload PDF or Word files">
              <Upload size={20} />
            </button>
            <input
              type="text"
              className="chat-input"
              placeholder="Type your question here or upload a document..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className="send-button" 
              onClick={handleSend}
              disabled={inputText.trim() === ''}
            >
              <Send size={20} />
            </button>
          </div>
          <p className="chat-input-hint">
            Press Enter to send, Shift+Enter for new line • Upload PDF or Word files
          </p>
        </div>
      </div>
    </div>
  );
}