import { useState, useEffect } from 'react'
import './ChatScreen.css'
import ClearMessages from './ClearMessages'
import ContactActions from './ContactActions'
import FavoriteContact from './FavoriteContact'
import OnlineUsers from './OnlineUsers'
import BlockedContact from './BlockedContact'
import { mockUsers, mockMessages, generateRandomReply } from '../utils/mockData'

const ChatScreen = ({ onOpenCommands, onOpenChannels, onOpenNetwork, showToast }) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState(mockMessages)
  const [contacts, setContacts] = useState(mockUsers)
  const [showClearMessages, setShowClearMessages] = useState(false)
  const [showContactActions, setShowContactActions] = useState(false)
  const [showFavoriteContact, setShowFavoriteContact] = useState(false)
  const [showOnlineUsers, setShowOnlineUsers] = useState(false)
  const [showBlockedContact, setShowBlockedContact] = useState(false)
  const [selectedContact, setSelectedContact] = useState('anon64')

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message.trim(),
        time: new Date().toLocaleTimeString(),
        sender: 'me'
      }
      setMessages(prev => [...prev, newMessage])
      setMessage('')
      showToast && showToast('Mensaje enviado', 'success', 2000)

      setTimeout(() => {
        const reply = {
          id: messages.length + 2,
          text: generateRandomReply(),
          time: new Date().toLocaleTimeString(),
          sender: selectedContact
        }
        setMessages(prev => [...prev, reply])
      }, 1000)
    }
  }

  const handleAddAttachment = () => {
    setShowContactActions(true)
  }

  const handleClearMessages = () => {
    setShowClearMessages(false)
    setMessages([])
    showToast && showToast('Mensajes eliminados', 'success')
  }

  const handleBlockContact = () => {
    setShowContactActions(false)
    setShowFavoriteContact(false)
    setShowOnlineUsers(false)
    setShowBlockedContact(true)
    showToast && showToast('Contacto bloqueado', 'warning')
  }

  const handleUnblockContact = () => {
    setShowBlockedContact(false)
    showToast && showToast('Contacto desbloqueado', 'success')
  }

  const handleFavoriteContact = () => {
    showToast && showToast('Agregado a favoritos', 'success')
  }

return (
    <>
    <div className="chat-screen">
      <div className="chat-header">
        <div className="header-left">
          <h1 className="chat-title">bitchat</h1>
          <span className="user-name">/@anon9680</span>
        </div>

        <div className="header-right">
          <button className="header-btn" onClick={onOpenChannels}>
            <span className="mesh-label">#mesh</span>
          </button>
          <button className="header-btn" onClick={onOpenNetwork}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                    fill="var(--text-secondary)"/>
            </svg>
            <span className="peer-count">0</span>
          </button>
          <button className="header-btn menu-dots-btn" onClick={() => setShowContactActions(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="6" r="2" fill="var(--text-secondary)"/>
              <circle cx="12" cy="12" r="2" fill="var(--text-secondary)"/>
              <circle cx="12" cy="18" r="2" fill="var(--text-secondary)"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.isSystem ? 'system-message' : ''}`}>
            <span className="message-text">{msg.text}</span>
            <span className="message-time">[{msg.time}]</span>
          </div>
        ))}
      </div>


      <div className="chat-input-container">
        <div className="input-wrapper">
          <button className="attach-btn" onClick={handleAddAttachment}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>

          <input
            type="text"
            className="message-input"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            onFocus={onOpenCommands}
            onKeyDown={(e) => {
              if (e.key === '/') {
                e.preventDefault()
                onOpenCommands()
              }
            }}
          />

          <button className="send-btn" onClick={handleSendMessage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" fill="var(--accent-primary)"/>
            </svg>
          </button>
        </div>

        <div className="input-hint">
          type a message...
        </div>
      </div>
    </div>

    {showClearMessages && (
      <ClearMessages
        onConfirm={handleClearMessages}
        onCancel={() => setShowClearMessages(false)}
      />
    )}

    {showContactActions && (
      <ContactActions
        contactName={selectedContact}
        onBlock={handleBlockContact}
        onClose={() => setShowContactActions(false)}
        showToast={showToast}
      />
    )}

    {showFavoriteContact && (
      <FavoriteContact
        contactName={selectedContact}
        onAdd={() => console.log('Added')}
        onFavorite={handleFavoriteContact}
        onBlock={handleBlockContact}
        onClose={() => setShowFavoriteContact(false)}
      />
    )}

    {showOnlineUsers && (
      <OnlineUsers
        onUserSelect={(user) => setSelectedContact(user)}
        onFavorite={handleFavoriteContact}
        onBlock={handleBlockContact}
        onClose={() => setShowOnlineUsers(false)}
      />
    )}

    {showBlockedContact && (
      <BlockedContact
        contactName={selectedContact}
        onUnblock={handleUnblockContact}
        onClose={() => setShowBlockedContact(false)}
      />
    )}
    </>
  )
}

export default ChatScreen
