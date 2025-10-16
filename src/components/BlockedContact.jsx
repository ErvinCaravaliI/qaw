import './BlockedContact.css'

const BlockedContact = ({ contactName, onUnblock, onClose }) => {
  return (
    <div className="blocked-contact-overlay" onClick={onClose}>
      <div className="blocked-contact-modal" onClick={(e) => e.stopPropagation()}>
        <div className="blocked-header">
          <button className="unblock-action-btn" onClick={onUnblock}>
            Desbloquear
          </button>

          <div className="blocked-info-bubble">
            <span className="blocked-label">Contacto Bloqueado</span>
            <div className="blocked-name-badge">{contactName}</div>
          </div>

          <div className="blocked-secondary-actions">
            <button className="blocked-action-btn" onClick={() => {}}>
              Usuarios Online (w)
            </button>
            <button className="blocked-action-btn" onClick={() => {}}>
              Favorito
            </button>
            <button className="blocked-action-btn disabled-btn">
              Bloquear
            </button>
          </div>
        </div>

        <div className="blocked-buttons">
          <button className="blocked-icon-btn file-btn">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M8 4V2M16 4V2M4 10h16" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>

          <button className="blocked-icon-btn menu-btn-blocked">
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

export default BlockedContact
