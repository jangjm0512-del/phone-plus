
import React, { useState } from 'react';
// Added ShieldCheck and Clock to imports
import { Smartphone, CheckCircle2, Truck, Wallet, ClipboardCheck, Loader2, ChevronRight, ShieldCheck, Clock } from 'lucide-react';

const Sell: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model: '',
    condition: 'A급 (깨끗함)',
    comment: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/mojwagqk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          '성함': formData.name,
          '연락처': formData.phone,
          '기종명': formData.model,
          '제품상태': formData.condition,
          '특이사항': formData.comment,
          '_subject': `[폰플러스 신규 매입신청] ${formData.name}님 - ${formData.model}`
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          model: '',
          condition: 'A급 (깨끗함)',
          comment: ''
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => setSubmitted(false), 8000);
      } else {
        const data = await response.json();
        if (data && Object.prototype.hasOwnProperty.call(data, 'errors')) {
          setError(data['errors'].map((error: any) => error['message']).join(', '));
        } else {
          setError('서버 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }
      }
    } catch (err) {
      setError('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { icon: <ClipboardCheck />, title: "매입 신청", desc: "웹사이트에서 간편하게 정보를 입력합니다." },
    { icon: <Truck />, title: "택배 발송", desc: "우체국/편의점 무료 택배를 이용하세요." },
    { icon: <Smartphone />, title: "전문 검수", desc: "도착 즉시 전문가가 꼼꼼하게 검수합니다." },
    { icon: <Wallet />, title: "당일 입금", desc: "검수 후 10분 내로 지정 계좌로 송금됩니다." },
  ];

  return (
    <div className="py-16 md:py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-20 animate-reveal">
          <span className="inline-block bg-[#C80000]/5 text-[#C80000] text-[10px] font-black uppercase tracking-[0.4em] px-4 py-1.5 mb-6 rounded-full border border-[#C80000]/10">
            Easy Trade-in Process
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">단 1분이면 신청 완료</h1>
          <p className="text-gray-400 text-lg font-bold">복잡한 절차 없이, 최고가 견적을 받아보세요.</p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 animate-reveal" style={{ animationDelay: '0.2s' }}>
          {steps.map((step, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-[2rem] text-center border border-gray-100 hover:border-[#C80000]/20 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-white text-[#C80000] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-[#C80000] group-hover:text-white transition-all transform group-hover:-translate-y-1">
                {React.cloneElement(step.icon as React.ReactElement<any>, { size: 28 })}
              </div>
              <h3 className="font-black text-lg mb-3">{step.title}</h3>
              <p className="text-[13px] text-gray-400 font-bold leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 animate-reveal" style={{ animationDelay: '0.4s' }}>
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                <CheckCircle2 size={56} />
              </div>
              <h2 className="text-3xl font-black mb-6 tracking-tighter">신청이 정상적으로 접수되었습니다!</h2>
              <p className="text-gray-400 font-bold text-lg mb-10 leading-relaxed">
                담당자가 확인 후 입력하신 연락처로<br/>
                신속하게 예상 견적과 절차를 안내해드리겠습니다.
              </p>
              <button 
                onClick={() => setSubmitted(false)} 
                className="bg-gray-900 text-white px-10 py-4 rounded-xl font-black text-base hover:bg-black transition-all shadow-xl"
              >
                메인으로 돌아가기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-[13px] font-black text-gray-400 uppercase tracking-widest ml-1">성함</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="홍길동"
                    className="w-full px-6 py-5 rounded-2xl border-2 border-gray-50 bg-gray-50 focus:bg-white focus:border-[#C80000] outline-none transition-all font-bold shadow-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-[13px] font-black text-gray-400 uppercase tracking-widest ml-1">연락처</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="010-0000-0000"
                    className="w-full px-6 py-5 rounded-2xl border-2 border-gray-50 bg-gray-50 focus:bg-white focus:border-[#C80000] outline-none transition-all font-bold shadow-sm"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-[13px] font-black text-gray-400 uppercase tracking-widest ml-1">매입 기종 및 용량</label>
                <input 
                  type="text" 
                  name="model"
                  required
                  placeholder="예: 아이폰 15 프로 256GB 내추럴 티타늄"
                  className="w-full px-6 py-5 rounded-2xl border-2 border-gray-50 bg-gray-50 focus:bg-white focus:border-[#C80000] outline-none transition-all font-bold shadow-sm"
                  value={formData.model}
                  onChange={(e) => setFormData({...formData, model: e.target.value})}
                />
              </div>

              <div className="space-y-4">
                <label className="block text-[13px] font-black text-gray-400 uppercase tracking-widest ml-1">기기 상태 (외관 및 기능)</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['S급 (미개봉)', 'A급 (깨끗함)', 'B급 (생활기스)', 'C급 (파손)'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setFormData({...formData, condition: c})}
                      className={`py-4 rounded-xl font-black transition-all border-2 text-[13px] ${formData.condition === c ? 'bg-[#C80000] border-[#C80000] text-white shadow-xl scale-[1.02]' : 'bg-gray-50 border-transparent text-gray-400 hover:bg-white hover:border-gray-100 hover:text-gray-600'}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-[13px] font-black text-gray-400 uppercase tracking-widest ml-1">상세 상태 설명 (선택)</label>
                <textarea 
                  name="comment"
                  rows={4}
                  placeholder="액정 파손 유무, 기능 불량, 배터리 성능 등 상세한 상태를 적어주시면 정확한 가견적 산출이 가능합니다."
                  className="w-full px-6 py-5 rounded-2xl border-2 border-gray-50 bg-gray-50 focus:bg-white focus:border-[#C80000] outline-none transition-all font-bold resize-none shadow-sm"
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                ></textarea>
              </div>

              {error && (
                <div className="p-5 bg-red-50 text-red-600 rounded-2xl text-[14px] font-black border border-red-100 flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                  {error}
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C80000] text-white py-6 rounded-2xl font-black text-xl hover:bg-black disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-2xl flex items-center justify-center gap-4 group btn-glow"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={24} />
                    전송 중...
                  </>
                ) : (
                  <>
                    실시간 최고가 견적 받기 <ChevronRight size={24} className="group-hover:translate-x-1.5 transition-transform" />
                  </>
                )}
              </button>
              
              <div className="pt-6 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xs">
                  {/* Fixed missing ShieldCheck import */}
                  <ShieldCheck size={14} className="text-gray-300" /> 개인정보 암호화 전송
                </div>
                <div className="w-px h-3 bg-gray-200"></div>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xs">
                  {/* Fixed missing Clock import */}
                  <Clock size={14} className="text-gray-300" /> 평균 15분 내 답변
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sell;
