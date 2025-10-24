'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import './auth.css'

interface FormData {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

interface FieldErrors {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

type FormMode = 'login' | 'register'

export default function PathDevLogin() {
  const [formMode, setFormMode] = useState<FormMode>('login')
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setFieldErrors(prev => ({ ...prev, [field]: '' }))
  }

  const handleModeChange = (mode: FormMode) => {
    setFormMode(mode)
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    setFieldErrors({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    setShowPassword(false)
    setShowConfirmPassword(false)
  }

  const validateForm = (): boolean => {
    const errors: FieldErrors = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
    let isValid = true

    if (formMode === 'register') {
      if (!formData.fullName.trim()) {
        errors.fullName = 'Full name is required'
        isValid = false
      }
      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match'
        isValid = false
      }
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid'
      isValid = false
    }

    if (!formData.password) {
      errors.password = 'Password is required'
      isValid = false
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
      isValid = false
    }

    setFieldErrors(errors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      
      if (formMode === 'register') {
        alert('Registration successful! Redirecting to login...')
        handleModeChange('login')
      } else {
        alert('Login successful! Redirecting to dashboard...')
        window.location.href = '/user/dashboard'
      }
    }, 1500)
  }

  return (
    <div className="pathdev-container">
      <div className="pathdev-card">
        <div className="pathdev-header">
          <div className="pathdev-logo"> 
            <span>pathDev</span>
          </div>
          
          <h2 className="pathdev-title">Welcome</h2>
          <p className="pathdev-subtitle">
            Sign in to continue your tech career journey
          </p>
        </div>

        <div className="pathdev-mode-toggle">
          <button
            onClick={() => handleModeChange('login')}
            className={`pathdev-mode-btn ${formMode === 'login' ? 'active' : ''}`}
          >
            Login
          </button>
          <button
            onClick={() => handleModeChange('register')}
            className={`pathdev-mode-btn ${formMode === 'register' ? 'active' : ''}`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="pathdev-form">
          {formMode === 'register' && (
            <div className="pathdev-form-group">
              <label className="pathdev-label">Full Name</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="John Smith"
                className={`pathdev-input ${fieldErrors.fullName ? 'error' : ''}`}
                disabled={isLoading}
              />
              {fieldErrors.fullName && (
                <div className="pathdev-error">{fieldErrors.fullName}</div>
              )}
            </div>
          )}

          <div className="pathdev-form-group">
            <label className="pathdev-label">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="@gordoncollege.edu.ph"
              className={`pathdev-input ${fieldErrors.email ? 'error' : ''}`}
              disabled={isLoading}
            />
            {fieldErrors.email && (
              <div className="pathdev-error">{fieldErrors.email}</div>
            )}
          </div>

          <div className="pathdev-form-group">
            <label className="pathdev-label">Password</label>
            <div className="pathdev-password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="Password"
                className={`pathdev-input ${fieldErrors.password ? 'error' : ''}`}
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="pathdev-eye-button"
                disabled={isLoading}
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            {fieldErrors.password && (
              <div className="pathdev-error">{fieldErrors.password}</div>
            )}
          </div>

          {formMode === 'register' && (
            <div className="pathdev-form-group">
              <label className="pathdev-label">Confirm Password</label>
              <div className="pathdev-password-wrapper">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  placeholder="Password"
                  className={`pathdev-input ${fieldErrors.confirmPassword ? 'error' : ''}`}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="pathdev-eye-button"
                  disabled={isLoading}
                >
                  {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
              {fieldErrors.confirmPassword && (
                <div className="pathdev-error">{fieldErrors.confirmPassword}</div>
              )}
            </div>
          )}

          <button
            type="submit"
            className="pathdev-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Please wait...' : formMode === 'login' ? 'Sign In' : 'Create Account'}
          </button>

          {formMode === 'login' && (
            <div className="pathdev-footer">
              Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); handleModeChange('register'); }}>Register here</a>
            </div>
          )}

          {formMode === 'register' && (
            <div className="pathdev-footer">
              Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); handleModeChange('login'); }}>Login here</a>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}