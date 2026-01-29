
import React, { useState } from 'react';
import { Smartphone, CheckCircle2, Truck, Wallet, ClipboardCheck, Loader2 } from 'lucide-react';

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
        // 5초 후 메시지 초기화
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        // Use a more compatible way to check for property existence than Object.hasOwn
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
    { icon: <Truck />, title: "택배 발송", desc: "편의점 택배나 우체국을 통해 발송하세요. (배송비 무료)" },
    { icon: <Smartphone />, title: "전문 검수", desc: "도착 즉시 전문 엔지니어가 꼼꼼하게 검수합니다." },
    { icon: <Wallet />, title: "즉시 입금", desc: "최종 가격 안내 후 10분 내로 지정 계좌로 송금됩니다." },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black mb-6">간편 매입 신청</h1>
            <p className="text-gray-500 text-lg font-medium">간단한 정보 입력만으로 최고가 매입을 시작하세요.</p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {steps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 bg-[#FEE500] text-black rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-100 relative z-10">
                  {/* Fix: Cast icon to React.ReactElement<any> to allow 'size' prop in cloneElement */}
                  {React.cloneElement(step.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-gray-100 -z-0"></div>
                )}
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 font-medium">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 shadow-inner border border-gray-100">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-black mb-4">신청이 완료되었습니다!</h2>
                <p className="text-gray-500 font-medium">담당자가 확인 후 빠르게 연락드리겠습니다. 감사합니다.</p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all"
                >
                  추가 신청하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">성함</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="홍길동"
                      className="w-full px-6 py-4 rounded-xl border-2 border-transparent focus:border-[#C80000] outline-none transition-all bg-white font-medium shadow-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="010-0000-0000"
                      className="w-full px-6 py-4 rounded-xl border-2 border-transparent focus:border-[#C80000] outline-none transition-all bg-white font-medium shadow-sm"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">기종명 (모델명)</label>
                  <input 
                    type="text" 
                    name="model"
                    required
                    placeholder="예: 아이폰 15 프로 256GB 블랙"
                    className="w-full px-6 py-4 rounded-xl border-2 border-transparent focus:border-[#C80000] outline-none transition-all bg-white font-medium shadow-sm"
                    value={formData.model}
                    onChange={(e) => setFormData({...formData, model: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">제품 상태</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {['S급 (미개봉)', 'A급 (깨끗함)', 'B급 (생활기스)', 'C급 (파손)'].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setFormData({...formData, condition: c})}
                        className={`py-4 rounded-xl font-bold transition-all border-2 text-sm ${formData.condition === c ? 'bg-[#C80000] border-[#C80000] text-white shadow-md' : 'bg-white border-transparent text-gray-500 hover:border-gray-200'}`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">특이사항 (기타문의)</label>
                  <textarea 
                    name="comment"
                    rows={4}
                    placeholder="액정 파손 유무, 기능 불량 등 상세한 상태를 적어주시면 더 정확한 견적이 가능합니다."
                    className="w-full px-6 py-4 rounded-xl border-2 border-transparent focus:border-[#C80000] outline-none transition-all bg-white font-medium resize-none shadow-sm"
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  ></textarea>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold border border-red-100">
                    {error}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C80000] text-white py-6 rounded-2xl font-black text-xl hover:bg-[#A00000] disabled:opacity-70 disabled:cursor-not-allowed transition-all transform hover:scale-[1.01] shadow-xl flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={24} />
                      전송 중...
                    </>
                  ) : (
                    '최고가 견적 신청하기'
                  )}
                </button>
                <p className="text-center text-xs text-gray-400 font-medium">
                  본 신청 정보는 Formspree를 통해 안전하게 전송됩니다.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
