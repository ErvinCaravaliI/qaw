import { useState } from 'react'
import './ClearMessages.css'

const ClearMessages = ({ onConfirm, onCancel }) => {
  const [inputValue, setInputValue] = useState('')

  const handleConfirm = () => {
    if (inputValue.toLowerCase() === 'clear') {
      onConfirm()
    }
  }

  return (
    <div className="clear-messages-overlay">
      <div className="clear-messages-modal">
        <div className="modal-header">
          <h2 className="modal-title">Pantalla limpiada.</h2>
          <button className="undo-btn" onClick={onCancel}>
            [Deshacer]
          </button>
        </div>

        <div className="command-info">
          <div className="command-label">Comando: /clear — Limpiar mensajes</div>
          <div className="command-input-display">
            <span className="command-prompt">/clear</span>
            <span className="command-hint">clear chat messages</span>
          </div>
        </div>

        <div className="confirmation-section">
          <input
            type="text"
            className="confirmation-input"
            placeholder='"clear"'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleConfirm()}
          />
          <div className="confirmation-hint">
            Presiona el ícono para limpiar la pantalla de mensajes
          </div>
        </div>

        <button
          className="confirm-clear-btn"
          onClick={handleConfirm}
          disabled={inputValue.toLowerCase() !== 'clear'}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>

        <button className="menu-btn" onClick={onCancel}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="18" r="1.5" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ClearMessages
