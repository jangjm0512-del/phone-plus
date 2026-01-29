
import React, { useEffect, useState } from 'react';
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
  Clock,
  Sparkles,
  Phone
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

  const mapSteps = [
    { id: '01', title: '동래역 2번 출구', color: 'bg-[#FEE500]', text: '1호선 동래역 2번 출구 정면 롯데캐슬 퀸 상가 건물입니다.' },
    { id: '02', title: '상가 2층 이동', color: 'bg-gray-900 text-white', text: '상가 측면 엘리베이터를 이용하여 2층으로 편하게 올라오세요.' },
    { id: '03', title: '매장 방문', color: 'bg-[#C80000] text-white', text: '2층 헌혈의 집 바로 옆 매장에 폰플러스가 있습니다.' }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-10 pb-14 lg:pt-16 lg:pb-24">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[300px] h-[300px] bg-red-50 rounded-full blur-[80px] opacity-60"></div>

        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className={`lg:col-span-7 text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="inline-flex items-center gap-2 bg-[#C80000]/10 text-[#C80000] text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1.5 mb-6 rounded-full border border-[#C80000]/20 shadow-sm">
                <TrendingUp size={12} /> Best Price Guaranteed
              </span>
              <h1 className="text-3xl lg:text-5xl font-black text-gray-900 leading-[1.15] mb-6 tracking-tighter">
                가장 정직한 곳,<br/>
                <span className="text-[#C80000] relative px-1">
                  폰플러스
                  <span className="absolute -bottom-1.5 left-0 w-full h-2 bg-[#C80000]/10 rounded-full -z-10"></span>
                </span>에서<br/>
                가치를 증명하세요.
              </h1>
              <p className="text-gray-400 font-bold text-base lg:text-lg mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                눈앞에서 투명하게 검수하고<br/>
                업계 최고가로 즉시 현금 입금해드립니다.
              </p>
              
              <div className="flex flex-col gap-3 max-w-md mx-auto lg:mx-0">
                <Link to="/prices" className="bg-[#C80000] hover:bg-black text-white px-8 py-4 font-black text-lg shadow-2xl transition-all flex items-center justify-center gap-3 group rounded-xl btn-glow active:scale-[0.98]">
                  내 폰 시세 확인 <ChevronRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <div className="grid grid-cols-3 gap-2.5">
                  <a href="https://open.kakao.com/o/sEKLRvQh" target="_blank" rel="noreferrer" className="bg-[#FEE500] text-black py-3 rounded-xl font-black text-[11px] flex flex-col items-center justify-center gap-1.5 hover:shadow-lg transition-all border border-black/5 active:scale-95">
                    <MessageSquare size={18} fill="black" />
                    <span>카톡상담</span>
                  </a>
                  <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="bg-[#03C75A] text-white py-3 rounded-xl font-black text-[11px] flex flex-col items-center justify-center gap-1.5 hover:shadow-lg transition-all active:scale-95">
                    <span className="font-black text-lg leading-none">N</span>
                    <span>톡톡상담</span>
                  </a>
                  <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="bg-white text-black border border-gray-100 py-3 rounded-xl font-black text-[11px] flex flex-col items-center justify-center gap-1.5 hover:shadow-lg transition-all active:scale-95">
                    <Navigation size={18} className="text-[#03C75A]" fill="#03C75A" />
                    <span>길찾기</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className={`lg:col-span-5 relative hidden lg:flex flex-col items-center transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
               <div className="w-[280px] h-[280px] bg-gradient-to-br from-gray-50 to-white p-8 rounded-[3rem] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.08)] border border-white/50 flex items-center justify-center relative overflow-hidden group">
                 <div className="bg-[#C80000] p-8 shadow-2xl border-b-[6px] border-black/15 flex items-center justify-center gap-2 font-black tracking-tighter w-full floating rounded-2xl relative z-10 transition-transform group-hover:scale-[1.05]">
                    <div className="flex flex-col">
                      <span className="text-white text-3xl leading-none">Phone</span>
                      <div className="w-full h-1 bg-white/70 mt-1"></div>
                    </div>
                    <div className="bg-white px-1.5 py-0.5 ml-1">
                      <span className="text-[#C80000] text-3xl leading-none uppercase">Plus</span>
                    </div>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#C80000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-16 bg-gray-50/30 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden group">
            <div className="flex-1 text-center lg:text-left transition-all group-hover:translate-x-1">
              <div className="inline-flex items-center gap-2 text-[#C80000] font-black mb-5 uppercase tracking-widest text-[11px] bg-red-50 px-3 py-1 rounded-full border border-red-100 shadow-sm">
                 <Zap size={14} fill="#C80000" /> Hot Promotion
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 leading-tight tracking-tighter">
                약정 없는 <span className="text-[#C80000]">무제한 선불폰</span><br/>
                누구나 <span className="bg-gray-900 text-white px-2 py-0.5 rounded-sm">당일 즉시</span> 개통
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                 {[ "신용불량·연체 OK", "본인명의 100%", "위약금 제로" ].map((text, i) => (
                   <span key={i} className="flex items-center gap-2 text-gray-500 font-bold text-[13px] bg-gray-50 px-3 py-1.5 rounded-lg border border-transparent hover:border-gray-200 hover:bg-white transition-all">
                     <CheckCircle2 className="text-[#C80000]" size={16}/> {text}
                   </span>
                 ))}
              </div>
            </div>

            <div className="w-full lg:w-[320px]">
               <div className="bg-gray-900 p-8 text-center flex flex-col items-center rounded-3xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl"></div>
                  <p className="text-gray-400 font-black text-[10px] mb-2 uppercase tracking-widest">개통비 포함 파격가</p>
                  <p className="text-5xl font-black text-white mb-8 tracking-tighter italic transition-all hover:scale-105">
                    10,000<span className="text-lg not-italic text-gray-500 ml-1 uppercase">won</span>
                  </p>
                  <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="w-full bg-[#03C75A] text-white px-6 py-4 rounded-xl font-black text-base hover:bg-[#02b351] transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95">
                     <span className="font-black text-xl">N</span> 톡톡 실시간 상담
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tighter">실제 고객님들의 목소리</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-[#FEE500] text-[#FEE500]" />)}
              </div>
              <span className="text-xl font-black text-gray-900 tracking-tighter">평점 4.9 / 5.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#C80000] group-hover:h-full transition-all duration-500"></div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center font-black text-gray-300 group-hover:bg-red-50 group-hover:text-[#C80000] transition-colors uppercase text-xs">
                      {rev.author[0]}
                    </div>
                    <div>
                      <p className="font-black text-gray-900 text-[13px] leading-none mb-1">{rev.author}</p>
                      <span className="bg-[#03C75A]/10 text-[#03C75A] text-[9px] px-2 py-0.5 rounded-full font-bold uppercase">Verified Visit</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-300 font-bold">{rev.date}</span>
                </div>
                <p className="text-gray-500 font-medium leading-relaxed text-[14px] mb-6 flex-grow italic">"{rev.content}"</p>
                <div className="flex items-center justify-between pt-5 border-t border-gray-50">
                   <p className="text-[11px] text-gray-400 font-black uppercase tracking-widest">{rev.model} 매입</p>
                   <ArrowUpRight size={16} className="text-gray-200 group-hover:text-[#C80000] transition-colors" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a 
              href={naverReviewUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-3 bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-black text-base hover:bg-gray-900 hover:text-white transition-all shadow-xl active:scale-95"
            >
              <span className="bg-[#03C75A] text-white w-5 h-5 flex items-center justify-center rounded-sm text-[11px] font-black">N</span>
              네이버 방문자리뷰 더보기 <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-20 bg-[#111827] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#111827] to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#111827] to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-[11px] font-black mb-4 uppercase tracking-widest border border-red-500/20">
                <Sparkles size={14} className="animate-pulse" /> Live Market Data
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter italic">실시간 매입 시세</h2>
              <p className="text-gray-400 font-bold text-lg">기종 추가 시 자동으로 실시간 업데이트됩니다.</p>
            </div>
            <div className="flex justify-center lg:justify-end gap-2">
               <span className="flex items-center gap-2 bg-white/5 text-gray-300 px-4 py-2 rounded-full text-[12px] font-black border border-white/10">
                 <Clock size={14} /> {new Date().toLocaleTimeString()} 기준
               </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800/40 rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden h-[400px] flex flex-col relative group">
              <div className="p-8 border-b border-white/5 flex items-center justify-between relative z-30 bg-gray-800/90 backdrop-blur-md transition-all group-hover:bg-gray-800">
                <div className="flex items-center gap-3">
                  <Apple size={24} fill="white" className="transition-transform group-hover:rotate-12" />
                  <h3 className="text-xl font-black uppercase tracking-widest">Apple</h3>
                </div>
                <span className="text-[10px] font-black text-gray-500 tracking-tighter uppercase">{applePrices.length} Items Listed</span>
              </div>
              <div className="flex-grow overflow-hidden relative z-20">
                <div className="absolute inset-0 flex flex-col transition-transform duration-1000 ease-in-out" style={{ transform: `translateY(-${(activePriceIdx % Math.max(1, applePrices.length)) * 80}px)` }}>
                  {[...applePrices, ...applePrices].map((item, i) => (
                    <div key={`${item.id}-${i}`} className="h-[80px] p-6 flex justify-between items-center border-b border-white/5 shrink-0 hover:bg-white/5 transition-colors cursor-default">
                      <div>
                        <p className="text-lg font-black text-white leading-tight">{item.model}</p>
                        <p className="text-[11px] font-black text-gray-500 uppercase mt-1.5">{item.capacity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-red-500 font-black mb-1 uppercase tracking-tighter">Buy-In Max</p>
                        <p className="text-2xl font-black text-white tracking-tighter">{item.maxPrice.toLocaleString()}원</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-blue-900/10 rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden h-[400px] flex flex-col relative group">
              <div className="p-8 border-b border-white/5 flex items-center justify-between relative z-30 bg-[#0a1122]/90 backdrop-blur-md transition-all group-hover:bg-[#0a1122]">
                <div className="flex items-center gap-3">
                  <Smartphone size={24} className="transition-transform group-hover:-rotate-12" />
                  <h3 className="text-xl font-black uppercase tracking-widest">Samsung</h3>
                </div>
                <span className="text-[10px] font-black text-gray-500 tracking-tighter uppercase">{samsungPrices.length} Items Listed</span>
              </div>
              <div className="flex-grow overflow-hidden relative z-20">
                <div className="absolute inset-0 flex flex-col transition-transform duration-1000 ease-in-out" style={{ transform: `translateY(-${((activePriceIdx + 1) % Math.max(1, samsungPrices.length)) * 80}px)` }}>
                  {[...samsungPrices, ...samsungPrices].map((item, i) => (
                    <div key={`${item.id}-${i}`} className="h-[80px] p-6 flex justify-between items-center border-b border-white/5 shrink-0 hover:bg-white/5 transition-colors cursor-default">
                      <div>
                        <p className="text-lg font-black text-white leading-tight">{item.model}</p>
                        <p className="text-[11px] font-black text-gray-500 uppercase mt-1.5">{item.capacity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-blue-400 font-black mb-1 uppercase tracking-tighter">Buy-In Max</p>
                        <p className="text-2xl font-black text-white tracking-tighter">{item.maxPrice.toLocaleString()}원</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 border-t border-white/10">
            <Link to="/prices" className="group flex items-center gap-3 text-white font-black hover:text-red-500 transition-all text-[13px] uppercase tracking-widest">
              전체 시세표 상세 보기 <ChevronRight size={18} className="group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Way to Visit Steps */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
             <span className="text-[#C80000] font-black text-[11px] uppercase tracking-[0.4em] mb-4 block">Store Guide</span>
             <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter mb-6">오시는 길 안내</h2>
             <p className="text-gray-400 font-bold text-lg md:text-xl">동래역 2번 출구 바로 앞, 가장 편리한 위치에 있습니다.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {mapSteps.map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col">
                 <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-all transform group-hover:-rotate-12 group-hover:scale-150">
                   {i === 0 ? <Navigation size={120} /> : i === 1 ? <ArrowUpRight size={120} /> : <CheckCircle2 size={120} />}
                 </div>
                 <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center font-black text-2xl mb-8 shadow-xl transition-transform group-hover:scale-110 group-hover:rotate-3`}>{step.id}</div>
                 <h3 className="text-xl font-black text-gray-900 mb-4 transition-colors group-hover:text-[#C80000]">{step.title}</h3>
                 <p className="text-gray-400 font-bold text-[14px] leading-relaxed flex-grow">{step.text}</p>
                 <div className="w-10 h-1.5 bg-gray-100 mt-8 rounded-full transition-all group-hover:w-20 group-hover:bg-[#C80000]"></div>
              </div>
            ))}
            <div className="hidden lg:block absolute top-1/2 left-[30%] w-[5%] border-t-2 border-dashed border-gray-100 -translate-y-1/2"></div>
            <div className="hidden lg:block absolute top-1/2 left-[64%] w-[5%] border-t-2 border-dashed border-gray-100 -translate-y-1/2"></div>
          </div>
        </div>
      </section>

      {/* Map Information Card */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-gray-900 p-10 md:p-16 rounded-[4rem] flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-center lg:text-left relative z-10 flex-1">
              <span className="text-red-500 font-black mb-5 tracking-[0.5em] uppercase text-[12px] block">Contact & Location</span>
              <h4 className="text-2xl md:text-4xl font-black text-white leading-tight tracking-tighter mb-8">
                부산광역시 동래구 온천천로 165<br/>
                롯데캐슬 퀸 상가 102동 2층 207호
              </h4>
              <div className="space-y-4 text-gray-400 font-bold text-base md:text-lg">
                <p className="flex items-center gap-3 justify-center lg:justify-start group/line">
                  <Clock size={20} className="text-red-500 transition-transform group-hover/line:rotate-12" /> 평일 10:00 - 20:00 / 토요일 11:00 - 20:00
                </p>
                <p className="flex items-center gap-3 justify-center lg:justify-start group/line">
                  <Navigation size={20} className="text-red-500 transition-transform group-hover/line:-translate-y-1" /> 동래역 2번 출구 정면 헌혈의 집 옆
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 w-full lg:w-[300px] relative z-10">
              <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="bg-[#03C75A] text-white p-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 hover:scale-[1.05] transition-all shadow-xl active:scale-95 group/btn">
                <Navigation size={24} fill="white" className="group-hover/btn:animate-bounce" /> 네이버 지도
              </a>
              <a href={`tel:${config.contactNumber}`} className="bg-white text-gray-900 p-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 hover:scale-[1.05] transition-all shadow-xl active:scale-95 group/btn">
                <PhoneCall size={24} className="group-hover/btn:animate-pulse" /> 전화 상담
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section (Restored & Polished) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="bg-[#C80000]/5 rounded-[3rem] p-12 md:p-20 border border-[#C80000]/10 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-[0.05] transform translate-x-10 -translate-y-10 group-hover:scale-125 transition-transform duration-1000">
               <Smartphone size={200} className="text-[#C80000]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter mb-8 leading-[1.2]">
              믿고 맡기는 <span className="text-[#C80000]">동래 폰플러스</span>,<br/>
              지금 바로 <span className="relative">최고가 견적<span className="absolute bottom-1 left-0 w-full h-3 bg-[#C80000]/10 -z-10"></span></span>을 무료로 확인하세요.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10">
              <Link 
                to="/sell" 
                className="w-full sm:w-auto bg-[#C80000] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-2xl flex items-center justify-center gap-3 btn-glow group/btn"
              >
                <Smartphone size={24} /> 내 폰 매입 신청하기 <ArrowUpRight size={24} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Link>
              <a 
                href={`tel:${config.contactNumber}`} 
                className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-900 hover:text-white transition-all shadow-lg flex items-center justify-center gap-3"
              >
                전화로 즉시 견적 문의
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Floating Action Buttons */}
      <div className="fixed bottom-8 right-6 z-[100] flex flex-col gap-4 group">
        {/* Phone Call Button */}
        <a 
          href={`tel:${config.contactNumber}`} 
          className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all relative overflow-hidden group/btn"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
          <Phone size={26} className="relative z-10 group-hover/btn:animate-pulse" />
        </a>

        {/* Naver TalkTalk Button */}
        <a 
          href={naverTalkTalkUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="w-14 h-14 bg-[#03C75A] text-white rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group/btn"
        >
          <span className="font-black text-2xl relative z-10">N</span>
        </a>

        {/* KakaoTalk Button */}
        <a 
          href="https://open.kakao.com/o/sEKLRvQh" 
          target="_blank" 
          rel="noreferrer" 
          className="w-14 h-14 bg-[#FEE500] text-black rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group/btn"
        >
          <MessageSquare size={24} fill="black" className="relative z-10" />
        </a>
      </div>
    </div>
  );
};

export default Home;
