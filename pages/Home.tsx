
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../AppContext.tsx';
import { 
  ChevronRight, 
  Smartphone, 
  Star, 
  MessageSquare, 
  Navigation, 
  Apple, 
  Zap, 
  CheckCircle2, 
  PhoneCall, 
  ExternalLink,
  ArrowUpRight,
  TrendingUp,
  Clock
} from 'lucide-react';

const Home: React.FC = () => {
  const { prices, config } = useAppContext();
  const [isVisible, setIsVisible] = useState(false);
  const [activePriceIdx, setActivePriceIdx] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setActivePriceIdx((prev) => (prev + 1));
    }, 2500);
    return () => clearInterval(timer);
  }, []);
  
  const applePrices = prices.filter(p => p.brand === 'Apple');
  const samsungPrices = prices.filter(p => p.brand === 'Samsung');

  const naverPlaceUrl = "https://naver.me/xcnayRi3";
  const naverTalkTalkUrl = "https://talk.naver.com/W5IQBE";
  const naverReviewUrl = "https://naver.me/FvQD86Sc";

  const reviews = [
    { author: "쑤빙96", model: "아이폰 15 프로", content: "사장님 진짜 친절하세요... 딴데보다 10만원은 더 잘 쳐주신 듯 ㅠㅠ 설명도 완전 꼼꼼하시고 검수도 투명하게 눈앞에서 다 보여주셔서 믿음이 확 가네요!!", date: "2025.01.10" },
    { author: "안3199", model: "갤럭시 S24 울트라", content: "선불폰 개통하러 왔는데 사장님이 요금제 추천도 잘해주시고 세팅까지 다 해주셔서 너무 편하게 하고 갑니다. 동래역 바로 앞이라 찾기도 쉬워요.", date: "2025.01.20" },
    { author: "ssun***", model: "아이폰 14", content: "당근에서 스트레스 받으면서 시간 낭비하지 말고 그냥 여기 오세요. 감가도 거의 없고 입금도 그 자리에서 쏴주십니다. 최고!!", date: "2025.01.25" },
    { author: "박*훈", model: "갤럭시 Z 플립 5", content: "액정 기스가 좀 있어서 걱정했는데 사장님이 양심적으로 가격 잘 맞춰주셨어요. 부산 중고폰 성지라더니 이유가 있네요.", date: "2025.01.28" },
    { author: "행복한하루", model: "아이폰 13 미니", content: "폰 바꿀 때마다 여기만 와요. 사장님 변함없이 친절하시고 가격 장난 안 쳐서 주변 지인들한테도 다 추천했습니다.", date: "2025.02.08" },
    { author: "지니지니", model: "아이폰 15", content: "매번 당근 거래만 하다가 사기 걱정돼서 왔는데 진짜 깔끔하게 매입해주시네요. 입금 5분컷 실화인가요 ㄷㄷ", date: "2025.02.12" },
    { author: "동래시민", model: "갤럭시 S23", content: "동래역 출구 바로 앞이라 가기 너무 편해요. 선불폰 상담도 친절하게 해주셔서 서브폰 하나 개통하고 갑니다~", date: "2025.02.14" },
    { author: "민트초코", model: "아이폰 12 프로", content: "다른데서 말도 안되게 깎으려고 해서 기분 상했는데 여기 사장님은 시원시원하게 가격 주시네요. 기분 좋게 팔고 갑니다.", date: "2025.02.15" },
    { author: "아이폰매니아", model: "아이폰 14 프로맥스", content: "아이폰 고질병인 잔상 부분도 과하게 감가 안하시고 최대한 가격 맞춰주려는 모습에 감동.. 중고폰 팔 땐 무조건 여기에요.", date: "2025.02.16" }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-12 pb-16 lg:pt-20 lg:pb-28">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] bg-red-50 rounded-full blur-[100px] opacity-60"></div>

        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className={`lg:col-span-7 text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="inline-flex items-center gap-2 bg-[#C80000]/10 text-[#C80000] text-[11px] font-black uppercase tracking-[0.3em] px-4 py-2 mb-8 rounded-full border border-[#C80000]/20">
                <TrendingUp size={14} /> Best Price Guaranteed
              </span>
              <h1 className="text-4xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tighter">
                가장 정직한 곳,<br/>
                <span className="text-[#C80000] relative">
                  폰플러스
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#C80000]/10 rounded-full"></span>
                </span>에서<br/>
                가치를 증명하세요.
              </h1>
              <p className="text-gray-400 font-bold text-lg lg:text-2xl mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0">
                눈앞에서 투명하게 검수하고<br/>
                업계 최고가로 즉시 현금 입금해드립니다.
              </p>
              
              <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
                <Link to="/prices" className="bg-[#C80000] hover:bg-black text-white px-10 py-5 font-black text-xl shadow-2xl transition-all flex items-center justify-center gap-3 group rounded-2xl btn-glow">
                  내 폰 시세 확인 <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <div className="grid grid-cols-3 gap-3">
                  <a href="https://open.kakao.com/o/sEKLRvQh" target="_blank" rel="noreferrer" className="bg-[#FEE500] text-black py-4 rounded-2xl font-black text-[12px] flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-all border border-black/5">
                    <MessageSquare size={20} fill="black" />
                    <span>카톡상담</span>
                  </a>
                  <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="bg-[#03C75A] text-white py-4 rounded-2xl font-black text-[12px] flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-all">
                    <span className="font-black text-xl leading-none">N</span>
                    <span>톡톡상담</span>
                  </a>
                  <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="bg-white text-black border border-gray-100 py-4 rounded-2xl font-black text-[12px] flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-all">
                    <Navigation size={20} className="text-[#03C75A]" fill="#03C75A" />
                    <span>길찾기</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className={`lg:col-span-5 relative hidden lg:flex flex-col items-center transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
               {/* 그래픽 사이즈 축소 및 디자인 개선 */}
               <div className="w-[340px] h-[340px] bg-gradient-to-br from-gray-50 to-white p-10 rounded-[4rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-white flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <div className="bg-[#C80000] p-10 shadow-2xl border-b-[8px] border-black/20 flex items-center justify-center gap-2 font-black tracking-tighter w-full floating rounded-3xl relative z-10">
                    <div className="flex flex-col">
                      <span className="text-white text-4xl leading-none">Phone</span>
                      <div className="w-full h-1.5 bg-white/80 mt-1.5"></div>
                    </div>
                    <div className="bg-white px-2 py-1 ml-1">
                      <span className="text-[#C80000] text-4xl leading-none uppercase">Plus</span>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-20 bg-gray-50/50 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-[#C80000] font-black mb-6 uppercase tracking-widest text-[12px] bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
                 <Zap size={18} fill="#C80000" /> Hot Promotion
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">
                약정 없는 <span className="text-[#C80000]">무제한 선불폰</span><br/>
                누구나 <span className="bg-gray-900 text-white px-3 py-1 rounded-sm">당일 즉시</span> 개통
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                 {[ "신용불량·연체 OK", "본인명의 100%", "위약금 제로" ].map((text, i) => (
                   <span key={i} className="flex items-center gap-2 text-gray-500 font-bold text-sm bg-gray-100 px-4 py-2 rounded-xl">
                     <CheckCircle2 className="text-[#C80000]" size={18}/> {text}
                   </span>
                 ))}
              </div>
            </div>

            <div className="w-full lg:w-[360px]">
               <div className="bg-gray-900 p-10 text-center flex flex-col items-center rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                  <p className="text-gray-400 font-black text-[11px] mb-3 uppercase tracking-widest">개통비 포함 파격가</p>
                  <p className="text-6xl font-black text-white mb-10 tracking-tighter italic">
                    10,000<span className="text-xl not-italic text-gray-500 ml-1 uppercase">won</span>
                  </p>
                  <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="w-full bg-[#03C75A] text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-[#02b351] transition-all flex items-center justify-center gap-3">
                     <span className="font-black text-2xl">N</span> 톡톡 실시간 상담
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section (9 items) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter">실제 고객님들의 목소리</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-[#FEE500] text-[#FEE500]" />)}
              </div>
              <span className="text-2xl font-black text-gray-900 tracking-tighter">평점 4.9 / 5.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center font-black text-gray-300 group-hover:bg-red-50 group-hover:text-[#C80000] transition-colors uppercase">
                      {rev.author[0]}
                    </div>
                    <div>
                      <p className="font-black text-gray-900 text-sm leading-none mb-1.5">{rev.author}</p>
                      <span className="bg-[#03C75A]/10 text-[#03C75A] text-[10px] px-2.5 py-1 rounded-full font-bold uppercase">Verified Visit</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-gray-300 font-bold">{rev.date}</span>
                </div>
                <p className="text-gray-500 font-medium leading-relaxed text-[15px] mb-8 flex-grow">"{rev.content}"</p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                   <p className="text-[12px] text-gray-400 font-black uppercase tracking-widest">{rev.model} 매입</p>
                   <ArrowUpRight size={18} className="text-gray-200 group-hover:text-[#C80000] transition-colors" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a 
              href={naverReviewUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-4 bg-white border-2 border-gray-900 text-gray-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-900 hover:text-white transition-all shadow-xl"
            >
              <span className="bg-[#03C75A] text-white w-6 h-6 flex items-center justify-center rounded-md text-[13px] font-black">N</span>
              네이버 방문자리뷰 더보기 <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Price Section (Animated Ticker) */}
      <section className="py-24 bg-[#111827] text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">실시간 매입 시세</h2>
              <p className="text-gray-400 font-bold text-xl">데이터 추가 시 자동으로 실시간 업데이트됩니다.</p>
            </div>
            <div className="flex justify-center lg:justify-end gap-2">
               <span className="flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-full text-[13px] font-black animate-pulse">
                 <Clock size={16} /> LIVE TICKER ACTIVE
               </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Apple Ticker */}
            <div className="bg-gray-800/50 rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden h-[500px] flex flex-col relative">
              <div className="p-10 border-b border-white/5 flex items-center justify-between relative z-10 bg-gray-800/80 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <Apple size={32} fill="white" />
                  <h3 className="text-2xl font-black uppercase tracking-widest">Apple</h3>
                </div>
                <span className="text-[11px] font-black text-gray-500">{applePrices.length} Items</span>
              </div>
              <div className="flex-grow overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col transition-transform duration-1000 ease-in-out" style={{ transform: `translateY(-${(activePriceIdx % Math.max(1, applePrices.length)) * 100}px)` }}>
                  {[...applePrices, ...applePrices].map((item, i) => (
                    <div key={`${item.id}-${i}`} className="h-[100px] p-8 flex justify-between items-center border-b border-white/5 shrink-0">
                      <div>
                        <p className="text-xl font-black text-white leading-tight">{item.model}</p>
                        <p className="text-[12px] font-black text-gray-500 uppercase mt-2">{item.capacity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] text-red-500 font-black mb-1.5 uppercase">Max Quote</p>
                        <p className="text-3xl font-black text-white tracking-tighter">{item.maxPrice.toLocaleString()}원</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Samsung Ticker */}
            <div className="bg-blue-900/10 rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden h-[500px] flex flex-col relative">
              <div className="p-10 border-b border-white/5 flex items-center justify-between relative z-10 bg-[#0a1122]/80 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <Smartphone size={32} />
                  <h3 className="text-2xl font-black uppercase tracking-widest">Samsung</h3>
                </div>
                <span className="text-[11px] font-black text-gray-500">{samsungPrices.length} Items</span>
              </div>
              <div className="flex-grow overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col transition-transform duration-1000 ease-in-out" style={{ transform: `translateY(-${((activePriceIdx + 1) % Math.max(1, samsungPrices.length)) * 100}px)` }}>
                  {[...samsungPrices, ...samsungPrices].map((item, i) => (
                    <div key={`${item.id}-${i}`} className="h-[100px] p-8 flex justify-between items-center border-b border-white/5 shrink-0">
                      <div>
                        <p className="text-xl font-black text-white leading-tight">{item.model}</p>
                        <p className="text-[12px] font-black text-gray-500 uppercase mt-2">{item.capacity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] text-blue-400 font-black mb-1.5 uppercase tracking-widest">Max Quote</p>
                        <p className="text-3xl font-black text-white tracking-tighter">{item.maxPrice.toLocaleString()}원</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 pt-12 border-t border-white/10">
            <Link to="/prices" className="group flex items-center gap-4 text-white font-black hover:text-red-500 transition-all text-sm uppercase tracking-widest">
              전체 시세표 상세 보기 <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-6">오시는 길 안내</h2>
             <p className="text-gray-400 font-bold text-xl">동래역 2번 출구 바로 앞, 도보 1분 거리에 위치합니다.</p>
          </div>

          <div className="bg-gray-900 p-12 md:p-20 rounded-[4rem] flex flex-col lg:flex-row items-center justify-between gap-16 shadow-2xl relative overflow-hidden">
            <div className="text-center lg:text-left relative z-10 flex-1">
              <span className="text-red-500 font-black mb-6 tracking-[0.5em] uppercase text-[12px] block">Location Detail</span>
              <h4 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tighter mb-8">
                부산광역시 동래구 온천천로 165<br/>
                롯데캐슬 퀸 상가 102동 2층 207호
              </h4>
              <div className="space-y-4 text-gray-400 font-medium text-lg">
                <p className="flex items-center gap-3 justify-center lg:justify-start"><Clock size={20} className="text-red-500" /> 평일 10:00 - 20:00 / 토요일 11:00 - 20:00</p>
                <p className="flex items-center gap-3 justify-center lg:justify-start"><Navigation size={20} className="text-red-500" /> 동래역 2번 출구 앞 헌혈의 집 옆 매장</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 w-full lg:w-[320px] relative z-10">
              <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="bg-[#03C75A] text-white p-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl">
                <Navigation size={24} fill="white" /> 네이버 지도
              </a>
              <a href={`tel:${config.contactNumber}`} className="bg-white text-gray-900 p-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl border-b-8 border-gray-200">
                <PhoneCall size={24} /> 전화 상담
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
         <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="w-16 h-16 bg-[#03C75A] text-white rounded-[2rem] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group">
            <span className="font-black text-3xl">N</span>
         </a>
         <a href="https://open.kakao.com/o/sEKLRvQh" target="_blank" rel="noreferrer" className="w-16 h-16 bg-[#FEE500] text-black rounded-[2rem] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
            <MessageSquare size={32} fill="black" />
         </a>
      </div>
    </div>
  );
};

export default Home;
