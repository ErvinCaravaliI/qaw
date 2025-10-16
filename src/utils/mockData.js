export const mockUsers = [
  { id: 1, name: 'anon64', status: 'online', distance: '5m' },
  { id: 2, name: 'user123', status: 'online', distance: '10m' },
  { id: 3, name: 'cryptoChat', status: 'offline', distance: '15m' },
  { id: 4, name: 'privacyFirst', status: 'online', distance: '20m' }
];

export const mockMessages = [
  {
    id: 1,
    text: 'get people around you to download bitchat and chat with them here!',
    time: '11:50:39',
    isSystem: true
  }
];

export const generateRandomReply = () => {
  const replies = [
    'Hey there! How are you?',
    'That\'s interesting!',
    'I\'m nearby, want to meet up?',
    'Have you tried the new features?',
    'Thanks for the message!',
    'Cool! Let\'s chat more about that'
  ];
  return replies[Math.floor(Math.random() * replies.length)];
};