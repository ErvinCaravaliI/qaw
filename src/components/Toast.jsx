import { useEffect } from 'react'
import './Toast.css'

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="var(--success-bg)" stroke="var(--success-color)" strokeWidth="2"/>
            <path d="M9 12l2 2 4-4" stroke="var(--success-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 'error':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="var(--error-bg)" stroke="var(--error-color)" strokeWidth="2"/>
            <path d="M15 9l-6 6M9 9l6 6" stroke="var(--error-color)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      case 'warning':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 20h20L12 2z" fill="var(--warning-bg)" stroke="var(--warning-color)" strokeWidth="2"/>
            <path d="M12 9v4M12 17h.01" stroke="var(--warning-color)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-icon">
        {getIcon()}
      </div>
      <span className="toast-message">{message}</span>
    </div>
  )
}

export default Toast
