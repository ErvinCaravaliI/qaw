import { useState } from 'react'
import './LocationChannels.css'

const LocationChannels = ({ onClose, showToast }) => {
  const [activeChannels, setActiveChannels] = useState(['mesh'])
  const handleJoinChannel = (channelName) => {
    if (!activeChannels.includes(channelName)) {
      setActiveChannels([...activeChannels, channelName])
      showToast && showToast(`Te uniste a #${channelName}`, 'success')
    }
  }

  const channels = [
    {
      id: 1,
      name: 'mesh',
      type: 'mesh',
      count: 0,
      range: '~5-20 m',
      icon: '✓'
    },
    {
      id: 2,
      name: 'bluetooth',
      type: 'bluetooth',
      count: 10,
      range: '~5-20 m',
      icon: '📶'
    },
    {
      id: 3,
      name: 'block',
      type: 'blocked',
      count: 0,
      location: '~0.2 km • Ciudad Modelo',
      icon: '🚫'
    },
    {
      id: 4,
      name: 'neighborhood',
      type: 'neighborhood',
      count: 0,
      hash: '#d29e6ve',
      location: '~0.2 km • Ciudad Modelo',
      icon: '👥'
    }
  ]

  return (
    <div className="location-channels">
      <div className="channels-overlay" onClick={onClose}></div>

      <div className="channels-panel">
        <div className="channels-header">
          <div className="location-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    stroke="var(--accent-primary)"
                    strokeWidth="2"
                    fill="none"/>
              <circle cx="12" cy="9" r="2.5" stroke="var(--accent-primary)" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <h2 className="channels-title">location channels</h2>
          <button className="close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="privacy-notice">
          <p>
            chat with people near you using geohash channels. only a coarse geohash is shared,
            never exact gps. <strong>do not screenshot or share this screen to protect your privacy.</strong>
          </p>
        </div>

        <div className="channels-list">
          {channels.map((channel) => (
            <div key={channel.id} className={`channel-item ${channel.type}`}>
              <div className="channel-main">
                <div className="channel-info">
                  {channel.type === 'bluetooth' && (
                    <svg className="channel-type-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29z"
                            fill="#4A90E2"/>
                    </svg>
                  )}
                  <div className="channel-details">
                    <div className="channel-name-row">
                      <span className="channel-name">{channel.name}</span>
                      {channel.hash && <span className="channel-hash">{channel.hash}</span>}
                    </div>
                    <div className="channel-meta">
                      <span className="channel-count">
                        {channel.count} {channel.count === 1 ? 'person' : 'people'}
                      </span>
                      {channel.range && (
                        <>
                          <span className="meta-separator">•</span>
                          <span className="channel-range">{channel.range}</span>
                        </>
                      )}
                      {channel.location && (
                        <>
                          <span className="meta-separator">•</span>
                          <span className="channel-location">{channel.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="channel-actions">
                  {activeChannels.includes(channel.name) ? (
                    <div className="active-indicator">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                              fill="var(--accent-primary)"/>
                      </svg>
                    </div>
                  ) : (
                    <button className="join-btn" onClick={() => handleJoinChannel(channel.name)}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="var(--text-secondary)"/>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="channels-footer">
          <div className="distance-indicator">
            <span className="distance-text">~1.2 km</span>
            <span className="distance-separator">•</span>
            <span className="location-name">Ciudad Modelo</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationChannels
