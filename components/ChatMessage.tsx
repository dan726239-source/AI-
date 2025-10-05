
import React from 'react';
import { ChatMessage, MessageAuthor } from '../types';

interface ChatMessageProps {
  message: ChatMessage;
}

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
);

const AIIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v.5a1.5 1.5 0 01-3 0v-.5a1 1 0 00-1-1H6a1 1 0 01-1-1v-3a1 1 0 011-1h.5a1.5 1.5 0 000-3H6a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
    </svg>
);

const ChatMessageComponent: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.author === MessageAuthor.USER;

  const wrapperClasses = `flex items-start gap-3 my-4 ${isUser ? 'justify-end' : 'justify-start'}`;
  const messageClasses = `max-w-md lg:max-w-xl p-4 rounded-2xl shadow-md text-white ${
    isUser
      ? 'bg-blue-600 rounded-br-none'
      : 'bg-gray-700 rounded-bl-none'
  }`;
   const iconClasses = `flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${isUser ? 'bg-gray-600' : 'bg-gradient-to-tr from-cyan-400 to-blue-600'}`;

  return (
    <div className={wrapperClasses}>
      {!isUser && (
         <div className={iconClasses}>
            <AIIcon />
         </div>
      )}
      <div className={messageClasses}>
        <p className="whitespace-pre-wrap">{message.text}</p>
      </div>
       {isUser && (
         <div className={iconClasses}>
            <UserIcon />
         </div>
      )}
    </div>
  );
};

export default ChatMessageComponent;
