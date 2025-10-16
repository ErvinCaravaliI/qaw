import React from 'react';
import './Message.css';

const Message = ({ message }) => {
  const isMe = message.sender === 'me';
  const isSystem = message.isSystem;

  return (
    <div className={`message-container ${isMe ? 'message-right' : 'message-left'} ${isSystem ? 'message-system' : ''}`}>
      {!isSystem && !isMe && <div className="message-sender">{message.sender}</div>}
      <div className={`message-bubble ${isMe ? 'message-mine' : 'message-other'}`}>
        <p className="message-text">{message.text}</p>
        <span className="message-time">{message.time}</span>
      </div>
    </div>
  );
};

export default Message;