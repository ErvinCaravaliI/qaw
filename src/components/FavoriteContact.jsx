import './FavoriteContact.css'

const FavoriteContact = ({ contactName, onAdd, onFavorite, onBlock, onClose }) => {
  return (
    <div className="favorite-contact-overlay" onClick={onClose}>
      <div className="favorite-contact-modal" onClick={(e) => e.stopPropagation()}>
        <div className="favorite-header">
          <div className="favorite-bubble">
            <span className="favorite-label">Agregar</span>
            <div className="favorite-name-badge">{contactName}</div>
          </div>
          <div className="favorite-actions">
            <button className="favorite-action-btn" onClick={onFavorite}>
              Favorito
            </button>
            <button className="favorite-action-btn" onClick={onBlock}>
              Bloquear
            </button>
          </div>
        </div>

        <div className="favorite-buttons">
          <button className="favorite-icon-btn file-btn">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M8 4V2M16 4V2M4 10h16" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>

          <button className="favorite-icon-btn menu-btn-fav">
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

export default FavoriteContact
