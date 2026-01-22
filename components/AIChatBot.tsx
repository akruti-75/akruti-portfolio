import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { createChatSession } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Chat } from '@google/genai';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hi! I'm Akruti's AI assistant. Ask me anything about her projects, experience, or skills.",
      timestamp: Date.now(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chat session on mount
    chatSessionRef.current = createChatSession();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) {
        // Fallback or retry initialization
        chatSessionRef.current = createChatSession();
      }

      if (chatSessionRef.current) {
        const result = await chatSessionRef.current.sendMessage({ message: userMsg.text });
        const text = result.text || "I'm having trouble thinking right now. Please try again.";

        const botMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'model',
          text: text,
          timestamp: Date.now(),
        };
        setMessages(prev => [...prev, botMsg]);
      } else {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: 'model',
          text: "My AI brain isn't connected right now (API Key missing). Please check the configuration.",
          timestamp: Date.now()
        }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "Sorry, I encountered an error connecting to the AI service.",
        timestamp: Date.now()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div
        className={`pointer-events-auto bg-surface border border-border rounded-2xl shadow-2xl w-80 sm:w-96 overflow-hidden transition-all duration-300 origin-bottom-right transform mb-4 ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none h-0'
          }`}
      >
        {/* Header */}
        <div className="bg-surface/90 backdrop-blur-md p-4 flex justify-between items-center border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary text-background rounded-xl">
              <Bot size={20} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="font-bold text-sm text-primary leading-tight">Portfolio Assistant</h3>
              <p className="text-[10px] text-secondary flex items-center mt-0.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                Powered by Google Gemini
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-secondary hover:text-primary transition-colors p-1.5 hover:bg-primary/5 rounded-lg"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4 bg-background/30">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm transition-all ${msg.role === 'user'
                  ? 'bg-primary text-background rounded-br-none'
                  : 'bg-surface border border-border text-primary rounded-bl-none'
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-surface border border-border rounded-2xl rounded-bl-none px-4 py-3 flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-surface border-t border-border">
          <div className="flex items-center space-x-2 bg-background/50 rounded-xl border border-border px-3 py-2.5 focus-within:border-primary/30 focus-within:ring-4 focus-within:ring-primary/5 transition-all">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-sm text-primary placeholder-secondary/50 focus:outline-none"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className={`p-1.5 rounded-lg transition-all ${inputValue.trim() && !isLoading
                ? 'bg-primary text-background hover:scale-105'
                : 'bg-secondary/10 text-secondary/40 cursor-not-allowed'
                }`}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto group relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-500 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-primary overflow-hidden ${isOpen ? 'bg-neutral-800 text-white rotate-90' : 'bg-primary text-background'
          }`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {isOpen ? (
          <X size={24} className="relative z-10" />
        ) : (
          <div className="relative z-10 flex items-center justify-center">
            <Bot size={28} strokeWidth={2.5} className="drop-shadow-sm" />
          </div>
        )}

        {!isOpen && (
          <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-primary animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
        )}
      </button>
    </div>
  );
};

export default AIChatBot;