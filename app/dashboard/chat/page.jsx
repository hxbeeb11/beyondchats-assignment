'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/app/components/Button';
import { FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm your AI assistant. How can I help you today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        role: 'assistant',
        content: 'Thank you for your message! This is a demo response. In a real implementation, this would be connected to your trained AI model.',
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Chat Header */}
          <div className="bg-indigo-600 px-6 py-4 flex items-center">
            <FaRobot className="h-6 w-6 text-white" />
            <h1 className="ml-3 text-xl font-semibold text-white">
              Test Your Chatbot
            </h1>
          </div>

          {/* Chat Messages */}
          <div className="h-[600px] overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div
                    className={`flex-shrink-0 rounded-full p-2 ${
                      message.role === 'user'
                        ? 'bg-indigo-100'
                        : 'bg-gray-100'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <FaUser className="h-4 w-4 text-indigo-600" />
                    ) : (
                      <FaRobot className="h-4 w-4 text-gray-600" />
                    )}
                  </div>
                  <div
                    className={`rounded-lg px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 px-6 py-4">
            <form onSubmit={handleSendMessage} className="flex space-x-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Button
                type="submit"
                disabled={!inputMessage.trim() || isTyping}
                className="flex items-center"
              >
                <FaPaperPlane className="h-4 w-4 mr-2" />
                Send
              </Button>
            </form>
          </div>
        </div>

        {/* Quick Test Suggestions */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Quick Test Questions
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              'What services do you offer?',
              'How can I contact support?',
              'Tell me about your pricing',
              'What are your business hours?',
            ].map((question) => (
              <button
                key={question}
                onClick={() => setInputMessage(question)}
                className="text-sm bg-white border border-gray-300 rounded-full px-4 py-1 hover:bg-gray-50"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 