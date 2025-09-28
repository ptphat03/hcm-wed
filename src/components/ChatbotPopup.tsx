"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, MessageCircle, Send, Minimize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

interface ChatbotPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  isMinimized: boolean;
}

export default function ChatbotPopup({ isOpen, onClose, onMinimize, isMinimized }: ChatbotPopupProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Xin chào! Tôi là trợ lý AI của Bảo tàng Tư tưởng Hồ Chí Minh. Tôi có thể giúp bạn tìm hiểu về tư tưởng đoàn kết quốc tế và trả lời các câu hỏi liên quan. Bạn muốn hỏi gì?',
      sender: 'ai',
      timestamp: new Date().toISOString(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Chuẩn bị lịch sử hội thoại
      const conversationHistory = messages.slice(-10).map(msg => 
        `${msg.sender === 'user' ? 'Người dùng' : 'AI'}: ${msg.text}`
      );

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          conversationHistory,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Có lỗi xảy ra');
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        sender: 'ai',
        timestamp: data.timestamp,
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.',
        sender: 'ai',
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: 'Xin chào! Tôi là trợ lý AI của Bảo tàng Tư tưởng Hồ Chí Minh. Tôi có thể giúp bạn tìm hiểu về tư tưởng đoàn kết quốc tế và trả lời các câu hỏi liên quan. Bạn muốn hỏi gì?',
        sender: 'ai',
        timestamp: new Date().toISOString(),
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed z-50 ${isMinimized ? 'bottom-4 right-4' : 'bottom-4 right-4'}`}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            width: isMinimized ? '300px' : '400px',
            height: isMinimized ? '60px' : '600px'
          }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
        >
          <Card className="h-full flex flex-col shadow-2xl border-2 border-blue-200 bg-white">
            {/* Header */}
            <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg p-3 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">🤖</span>
                  </div>
                  <div>
                    <CardTitle className="text-sm font-semibold">
                      Trợ lý AI Hồ Chí Minh
                    </CardTitle>
                    {!isMinimized && (
                      <p className="text-red-100 text-xs">
                        Hỗ trợ bởi Google Gemini
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Button
                    onClick={onMinimize}
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-white hover:bg-white/20"
                  >
                    <Minimize2 size={12} />
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-white hover:bg-white/20"
                  >
                    <X size={12} />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {/* Content - chỉ hiển thị khi không minimize */}
            {!isMinimized && (
              <>
                {/* Messages */}
                <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
                  <div className="flex items-center justify-between p-2 border-b bg-gray-50">
                    <span className="text-xs text-gray-600">
                      💬 {messages.length - 1} tin nhắn
                    </span>
                    <Button
                      onClick={clearChat}
                      variant="ghost"
                      size="sm"
                      className="h-6 px-2 text-xs text-gray-600 hover:bg-gray-200"
                    >
                      🗑️ Xóa
                    </Button>
                  </div>

                  <ScrollArea className="flex-1 p-3">
                    <div className="space-y-3">
                      <AnimatePresence>
                        {messages.map((message) => (
                          <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className={`flex ${
                              message.sender === 'user' ? 'justify-end' : 'justify-start'
                            }`}
                          >
                            <div
                              className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                                message.sender === 'user'
                                  ? 'bg-blue-600 text-white ml-4'
                                  : 'bg-gray-100 text-gray-800 mr-4 border border-gray-200'
                              }`}
                            >
                              <div className="flex items-start space-x-2">
                                <span className="text-xs">
                                  {message.sender === 'user' ? '👤' : '🤖'}
                                </span>
                                <div className="flex-1">
                                  <p className="whitespace-pre-wrap break-words leading-relaxed">
                                    {message.text}
                                  </p>
                                  <p
                                    className={`text-xs mt-1 ${
                                      message.sender === 'user'
                                        ? 'text-blue-200'
                                        : 'text-gray-500'
                                    }`}
                                  >
                                    {new Date(message.timestamp).toLocaleTimeString('vi-VN', {
                                      hour: '2-digit',
                                      minute: '2-digit'
                                    })}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                      
                      {isLoading && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex justify-start"
                        >
                          <div className="bg-gray-100 rounded-2xl px-3 py-2 border border-gray-200 mr-4">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs">🤖</span>
                              <div className="flex space-x-1">
                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              </div>
                              <span className="text-gray-600 text-xs">Đang trả lời...</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                    <div ref={messagesEndRef} />
                  </ScrollArea>

                  {/* Input */}
                  <div className="border-t bg-white p-3 flex-shrink-0">
                    <div className="flex space-x-2">
                      <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Nhập câu hỏi của bạn..."
                        disabled={isLoading}
                        className="flex-1 text-sm border-gray-300 focus:border-red-500 rounded-lg"
                      />
                      <Button
                        onClick={sendMessage}
                        disabled={isLoading || !inputMessage.trim()}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 rounded-lg flex-shrink-0"
                        size="sm"
                      >
                        <Send size={14} />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-center">
                      Enter để gửi • AI có thể mắc lỗi
                    </p>
                  </div>
                </CardContent>
              </>
            )}
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}