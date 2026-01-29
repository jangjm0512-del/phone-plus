
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
          systemInstruction: `당신은 부산 동래구에 위치한 중고폰 매입/판매 및 통신 전문점 '폰플러스'의 수석 AI 컨설턴트입니다. 
          
          상담 가능 전문 분야:
          1. 중고폰 매입 및 판매 (부산대중고폰, 서면중고폰, 동래중고폰 관련 정보 포함)
          2. 부산선불폰 및 부산알뜰폰 당일 개통 상담
          3. 가개통폰, 미개봉폰 매입 및 파손폰/폐폰 가치 분석
          
          답변 가이드라인:
          - 'Thinking Mode'를 활용하여 사용자의 복잡한 질문에 대해 매우 깊이 있는 분석 결과를 제공하세요.
          - 예를 들어, 사용자가 파손 상태를 설명하면 해당 파손이 메인보드나 액정 패널 시세에 주는 영향을 전문가 수준으로 설명하세요.
          - 부산대, 서면 등 부산 주요 지역 거주자들에게 친근하고 전문적인 어조로 답변하세요.
          - 항상 답변 끝에는 '동래역 2번 출구 정면 폰플러스 매장' 방문 시 더 정확한 검수와 혜택을 받을 수 있음을 강조하세요.`
        },
      });

      const aiText = response.text || "죄송합니다. 현재 상담량이 많아 답변이 지연되고 있습니다. 010-4885-1544로 전화주시면 즉시 상담 가능합니다.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "상담량이 많아 잠시 후 다시 시도해 주세요. 급하신 문의는 전화 상담을 이용해 주세요." }]);
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
        <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Sparkles size={24} className="text-yellow-400 animate-pulse" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-28 md:right-6 md:w-[420px] md:h-[650px] bg-white z-[110] md:rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.2)] flex flex-col border border-gray-100 overflow-hidden animate-reveal">
          {/* Header */}
          <div className="bg-gray-900 p-6 flex items-center justify-between text-white relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                <Bot size={28} className="text-yellow-400" />
              </div>
              <div>
                <h3 className="font-black text-base">폰플러스 AI 컨설턴트</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Thinking Mode Active</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors relative z-10">
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-gray-50/30 no-scrollbar">
            {messages.length === 0 && (
              <div className="text-center py-12 px-4">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl border border-gray-50">
                  <MessageSquare size={32} className="text-[#C80000]" />
                </div>
                <p className="text-gray-900 font-black text-xl mb-3 tracking-tighter">안녕하세요! 무엇을 도와드릴까요?</p>
                <p className="text-gray-400 font-bold text-[13px] leading-relaxed mb-8">
                  "부산대 근처인데 매입가 얼마인가요?"<br/>
                  "서면에서 선불폰 개통하고 싶어요."
                </p>
                <div className="grid grid-cols-1 gap-2">
                   {["아이폰 15 프로 매입가 문의", "부산 선불폰 무제한 요금제"].map((q, idx) => (
                     <button key={idx} onClick={() => { setInput(q); }} className="text-[12px] font-bold text-gray-500 bg-white border border-gray-100 py-3 px-4 rounded-xl hover:border-[#C80000] hover:text-[#C80000] transition-all text-left">
                       {q}
                     </button>
                   ))}
                </div>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-5 rounded-3xl font-bold text-[14px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-gray-900 text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                }`}>
                  {msg.text.split('\n').map((line, idx) => (
                    <p key={idx} className={idx > 0 ? 'mt-2' : ''}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-3xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-3">
                  <Loader2 size={18} className="animate-spin text-[#C80000]" />
                  <span className="text-[11px] font-black text-[#C80000] uppercase tracking-[0.2em]">Deep Thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="상태나 궁금한 점을 적어주세요..."
                className="w-full pl-6 pr-14 py-5 bg-gray-50 rounded-[1.5rem] border-2 border-transparent focus:border-[#C80000] focus:bg-white outline-none font-bold text-[15px] transition-all shadow-inner"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-2 p-3.5 bg-gray-900 text-white rounded-2xl hover:bg-[#C80000] disabled:opacity-30 transition-all shadow-lg active:scale-95"
              >
                <Send size={20} />
              </button>
            </div>
             <p className="mt-4 text-[10px] text-center text-gray-300 font-bold uppercase tracking-widest">
              powered by gemini 3 pro
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;
