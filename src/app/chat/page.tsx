"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Xin chào! Tôi là trợ lý AI được hỗ trợ bởi Google Gemini. Tôi có thể giúp bạn trả lời câu hỏi về bất kỳ chủ đề nào. Bạn muốn hỏi gì?',
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
    scrollToBottom();
  }, [messages]);

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
        text: 'Xin chào! Tôi là trợ lý AI được hỗ trợ bởi Google Gemini. Tôi có thể giúp bạn trả lời câu hỏi về bất kỳ chủ đề nào. Bạn muốn hỏi gì?',
        sender: 'ai',
        timestamp: new Date().toISOString(),
      }
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-[80vh] flex flex-col shadow-2xl border-2 border-blue-200">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">AI Chat Assistant</CardTitle>
                    <p className="text-blue-100 text-sm">Được hỗ trợ bởi Google Gemini</p>
                  </div>
                </div>
                <Button 
                  onClick={clearChat}
                  variant="outline" 
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  🗑️ Xóa chat
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${
                          message.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                              : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border border-gray-300'
                          }`}
                        >
                          <div className="flex items-start space-x-2">
                            <span className="text-lg">
                              {message.sender === 'user' ? '👤' : '🤖'}
                            </span>
                            <div className="flex-1">
                              <p className="whitespace-pre-wrap break-words">
                                {message.text}
                              </p>
                              <p
                                className={`text-xs mt-1 ${
                                  message.sender === 'user'
                                    ? 'text-blue-200'
                                    : 'text-gray-500'
                                }`}
                              >
                                {new Date(message.timestamp).toLocaleTimeString('vi-VN')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl px-4 py-3 border border-gray-300">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">🤖</span>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span className="text-gray-600 text-sm">Đang suy nghĩ...</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Nhập tin nhắn của bạn..."
                    disabled={isLoading}
                    className="flex-1 border-2 border-blue-200 focus:border-blue-500 rounded-xl"
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={isLoading || !inputMessage.trim()}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 rounded-xl"
                  >
                    {isLoading ? '⏳' : '📤'} Gửi
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Nhấn Enter để gửi tin nhắn
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}