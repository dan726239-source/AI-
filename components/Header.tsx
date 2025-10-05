
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 p-4 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
         <div className="w-10 h-10 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
            D
         </div>
         <div>
            <h1 className="text-xl font-bold text-white">Dan Chat AI</h1>
            <p className="text-sm text-cyan-300">Your friendly AI companion</p>
         </div>
      </div>
    </header>
  );
};

export default Header;
