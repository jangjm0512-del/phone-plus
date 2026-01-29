
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageSquare, X, Send, Sparkles, Loader2, Bot, User, ChevronDown } from 'lucide-react';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: userMessage,
        config: {
          thinkingConfig: { thinkingBudget: 32768 },
          systemInstruction: `당신은 부산 동래구에 위치한 중고폰 매입 전문점 '폰플러스'의 수석 상담사입니다. 
          사용자가 자신의 휴대폰 상태(기종, 외관 파손, 배터리 성능, 잔상 등)를 설명하면, 중고차나 중고폰 매입 전문가처럼 아주 깊게 생각하여 예상 매입가를 분석해주세요.
          답변 시 반드시 다음 사항을 포함하세요:
          1. 사용자의 기종에 대한 현재 시장 선호도 분석
          2. 설명된 결함 사항이 실제 매입가에 미치는 구체적인 영향 (Thinking Mode를 활용한 깊은 분석)
          3. 동래역 2번 출구 앞 폰플러스 매장 방문 시 받을 수 있는 혜택 안내
          항상 친절하고 전문적인 어조를 유지하세요.`
        },
      });

      const aiText = response.text || "죄송합니다. 상세 분석 중 오류가 발생했습니다. 매장으로 전화주시면 더 정확한 상담이 가능합니다.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "상담량이 많아 잠시 후 다시 시도해 주세요." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-[100] bg-gray-900 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Sparkles size={24} className="text-yellow-400 animate-pulse" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-28 md:right-6 md:w-[400px] md:h-[600px] bg-white z-[110] md:rounded-[2.5rem] shadow-2xl flex flex-col border border-gray-100 overflow-hidden animate-reveal">
          {/* Header */}
          <div className="bg-gray-900 p-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Bot size={24} className="text-yellow-400" />
              </div>
              <div>
                <h3 className="font-black text-sm">AI 스마트 시세 분석</h3>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Thinking Mode Active</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 bg-gray-50/50 no-scrollbar">
            {messages.length === 0 && (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <MessageSquare size={24} className="text-[#C80000]" />
                </div>
                <p className="text-gray-900 font-black text-lg mb-2 tracking-tighter">무엇이든 물어보세요!</p>
                <p className="text-gray-400 font-bold text-xs leading-relaxed">
                  "아이폰 14 프로 배터리 85%인데 얼마일까요?"<br/>
                  "액정 잔상이 있는데 매입 가능한가요?"
                </p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl font-bold text-[13px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-[#C80000] text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-3">
                  <Loader2 size={16} className="animate-spin text-gray-400" />
                  <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">AI가 심층 분석 중...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="상태를 설명해 주세요..."
                className="w-full pl-6 pr-14 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-[#C80000] focus:bg-white outline-none font-bold text-[14px] transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-2 p-3 bg-gray-900 text-white rounded-xl hover:bg-[#C80000] disabled:opacity-30 transition-all shadow-lg"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="mt-3 text-[10px] text-center text-gray-300 font-bold uppercase tracking-tighter">
              powered by gemini 3 pro
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;
