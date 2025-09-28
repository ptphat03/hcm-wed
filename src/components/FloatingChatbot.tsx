"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import ChatbotPopup from './ChatbotPopup';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleChat = () => {
    if (isOpen) {
      setIsOpen(false);
      setIsMinimized(false);
    } else {
      setIsOpen(true);
      setIsMinimized(false);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Floating Button - chỉ hiển thị khi chat đóng */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.button
              onClick={toggleChat}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={24} className="animate-pulse" />
              
              {/* Badge notification */}
              <motion.div
                className="absolute -top-1 -right-1 bg-yellow-400 text-red-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                AI
              </motion.div>
              
              {/* Pulse effect */}
              <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20"></div>
              
              {/* Tooltip */}
              <motion.div
                className="absolute bottom-full right-0 mb-2 bg-black text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                Trò chuyện với AI
                <div className="absolute -bottom-1 right-3 w-2 h-2 bg-black rotate-45"></div>
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot Popup */}
      <ChatbotPopup
        isOpen={isOpen}
        onClose={closeChat}
        onMinimize={minimizeChat}
        isMinimized={isMinimized}
      />
    </>
  );
}