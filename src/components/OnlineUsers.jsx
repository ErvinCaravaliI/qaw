import './OnlineUsers.css'

const OnlineUsers = ({ users, onUserSelect, onFavorite, onBlock, onClose }) => {
  const defaultUsers = users || [
    { id: 1, name: 'Anon64' },
    { id: 2, name: 'Usuario 1' },
    { id: 3, name: 'Usuario 5' }
  ]

  return (
    <div className="online-users-overlay" onClick={onClose}>
      <div className="online-users-modal" onClick={(e) => e.stopPropagation()}>
        <div className="online-header">
          <div className="users-list-bubble">
            {defaultUsers.map((user) => (
              <div key={user.id} className="user-item">• {user.name}</div>
            ))}
          </div>
          <button className="online-action-btn" onClick={onFavorite}>
            Usuarios Online (w)
          </button>
          <button className="online-action-btn" onClick={onFavorite}>
            Favorito
          </button>
          <button className="online-action-btn" onClick={onBlock}>
            Bloquear
          </button>
        </div>

        <div className="online-buttons">
          <button className="online-icon-btn file-btn">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M8 4V2M16 4V2M4 10h16" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>

          <button className="online-icon-btn menu-btn-online">
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

export default OnlineUsers
