import './ContactActions.css'

const ContactActions = ({ contactName, onBlock, onClose }) => {
  return (
    <div className="contact-actions-overlay" onClick={onClose}>
      <div className="contact-actions-modal" onClick={(e) => e.stopPropagation()}>
        <div className="contact-actions-header">
          <div className="contact-bubble">
            <span className="contact-label">Contacto</span>
            <div className="contact-name-badge">{contactName}</div>
          </div>
          <button className="action-option block-option" onClick={onBlock}>
            Bloquear
          </button>
        </div>

        <div className="action-buttons">
          <button className="icon-btn file-btn">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M8 4V2M16 4V2M4 10h16" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>

          <button className="icon-btn menu-btn-action">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
              <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
              <circle cx="12" cy="18" r="1.5" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactActions
