import './ContactActions.css'

const ContactActions = ({ contactName, onBlock, onClose, showToast }) => {
  const handleFavorite = () => {
    showToast && showToast('Agregado a favoritos', 'success')
    onClose()
  }

  const handleViewOnline = () => {
    showToast && showToast('Abriendo lista de usuarios...', 'success', 2000)
  }

  const handleClearChat = () => {
    showToast && showToast('Chat limpiado', 'success')
    onClose()
  }

  return (
    <div className="contact-actions-overlay" onClick={onClose}>
      <div className="contact-actions-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <div className="sheet-handle"></div>
          <h3 className="sheet-title">Opciones de chat</h3>
        </div>

        <div className="sheet-content">
          <button className="action-item" onClick={handleViewOnline}>
            <div className="action-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
              </svg>
            </div>
            <div className="action-content">
              <span className="action-title">Ver usuarios en línea</span>
              <span className="action-subtitle">0 usuarios conectados</span>
            </div>
          </button>

          <button className="action-item" onClick={handleFavorite}>
            <div className="action-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="action-content">
              <span className="action-title">Marcar como favorito</span>
              <span className="action-subtitle">Acceso rápido a este contacto</span>
            </div>
          </button>

          <button className="action-item" onClick={handleClearChat}>
            <div className="action-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18M8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2m3 0v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6h14z"
                      stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="action-content">
              <span className="action-title">Limpiar mensajes</span>
              <span className="action-subtitle">Eliminar historial del chat</span>
            </div>
          </button>

          <div className="divider"></div>

          <button className="action-item danger" onClick={onBlock}>
            <div className="action-icon danger">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M4.93 4.93l14.14 14.14" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="action-content">
              <span className="action-title">Bloquear contacto</span>
              <span className="action-subtitle">Ya no podrás recibir mensajes</span>
            </div>
          </button>
        </div>

        <button className="sheet-cancel" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  )
}

export default ContactActions
