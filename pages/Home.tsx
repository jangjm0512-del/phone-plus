
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
    // 가격 항목이 여러 개일 때 자동으로 순환하는 타이머
    const timer = setInterval(() => {
      setActivePriceIdx((prev) => (prev + 1) % Math.max(1, prices.length));
    }, 3000);
    return () => clearInterval(timer);
  }, [prices.length]);
  
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
    { author: "동래시민", model: "갤럭시 S23", content: "동래역 출구 바로 앞이라 가기 너무 편해요. 선불폰 상담도 친절하게 해주셔서 서브폰 하나 개통하고 갑니다~ 번창하세요!", date: "2025.02.14" },
    { author: "민트초코", model: "아이폰 12 프로", content: "다른데서 말도 안되게 깎으려고 해서 기분 상했는데 여기 사장님은 시원시원하게 가격 주시네요. 기분 좋게 팔고 갑니다.", date: "2025.02.15" },
    { author: "아이폰매니아", model: "아이폰 14 프로맥스", content: "아이폰 고질병인 잔상 부분도 과하게 감가 안하시고 최대한 가격 맞춰주려는 모습에 감동.. 중고폰 팔 땐 무조건 여기에요.", date: "2025.02.16" }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] bg-red-50 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[300px] h-[300px] bg-gray-50 rounded-full blur-[80px] opacity-60"></div>

        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className={`lg:col-span-7 text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="inline-flex items-center gap-2 bg-[#C80000]/10 text-[#C80000] text-[10px] font-black uppercase tracking-[0.4em] px-3 py-1.5 mb-6 rounded-full border border-[#C80000]/20">
                <TrendingUp size={12} /> Best Price Guaranteed
              </span>
              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tighter">
                가장 정직한 곳,<br/>
                <span className="text-[#C80000] relative">
                  폰플러스
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#C80000]/10 rounded-full"></span>
                </span>에서<br/>
                가치를 증명하세요.
              </h1>
              <p className="text-gray-400 font-bold text-lg lg:text-xl mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                눈앞에서 투명하게 검수하고<br/>
                업계 최고가로 즉시 현금 입금해드립니다.
              </p>
              
              <div className="flex flex-col gap-3 max-w-sm mx-auto lg:mx-0">
                <Link to="/prices" className="bg-[#C80000] hover:bg-black text-white px-8 py-4.5 font-black text-lg shadow-2xl transition-all flex items-center justify-center gap-3 group btn-glow rounded-xl">
                  내 폰 시세 확인 <ChevronRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <div className="grid grid-cols-3 gap-2">
                  <a href="https://open.kakao.com/o/sEKLRvQh" target="_blank" rel="noreferrer" className="bg-[#FEE500] text-black py-3 rounded-xl font-black text-[11px] flex flex-col items-center justify-center gap-1.5 hover:shadow-lg transition-all border border-black/5 hover:-translate-y-0.5">
                    <MessageSquare size={18} fill="black" />
                    <span>카톡상담</span>
                  </a>
                  <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="bg-[#03C75A] text-white py-3 rounded-xl font-black text-[11px] flex flex-col items-center justify-center gap-1.5 hover:shadow-lg transition-all hover:-translate-y-0.5">
                    <span className="font-black text-lg leading-none">N</span>
                    <span>톡톡상담</span>
                  </a>
                  <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="bg-white text-black border border-gray-100 py-3 rounded-xl font-black text-[11px] flex flex-col items-center justify-center gap-1.5 hover:shadow-lg transition-all hover:-translate-y-0.5">
                    <Navigation size={18} className="text-[#03C75A]" fill="#03C75A" />
                    <span>길찾기</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className={`lg:col-span-5 relative hidden lg:flex flex-col items-center transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
               <div className="w-full max-w-[320px] p-4 bg-gray-50/50 backdrop-blur-sm rounded-[3rem] border border-white shadow-inner">
                 <div className="bg-[#C80000] p-12 shadow-2xl border-b-[12px] border-black flex items-center justify-center gap-2 font-black tracking-tighter w-full floating rounded-2xl">
                    <div className="flex flex-col">
                      <span className="text-white text-4xl leading-none px-1">Phone</span>
                      <div className="w-full h-1.5 bg-white/90 mt-1.5"></div>
                    </div>
                    <div className="bg-white px-1.5 py-1 ml-1">
                      <span className="text-[#C80000] text-4xl leading-none uppercase">Plus</span>
                    </div>
                 </div>
               </div>
               {/* 로고 하단 스탯 제거됨 */}
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-16 bg-[#F9FAFB] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white flex flex-col lg:flex-row items-center justify-between gap-10 relative group hover:scale-[1.01] transition-transform duration-500">
            <div className="flex-1 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 text-[#C80000] font-black mb-6 uppercase tracking-[0.3em] text-[11px] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                 <Zap size={16} fill="#C80000" /> Hot Promotion
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight tracking-tighter">
                약정 없는 <span className="text-[#C80000]">무제한 선불폰</span><br/>
                누구나 <span className="bg-gray-900 text-white px-2 py-0.5 rounded-sm">당일 즉시</span> 개통
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                 {[ "신용불량·연체 OK", "본인명의 100%", "위약금 제로" ].map((text, i) => (
                   <span key={i} className="flex items-center gap-2 text-gray-500 font-bold text-sm bg-gray-50 px-3 py-1.5 rounded-lg">
                     <CheckCircle2 className="text-[#C80000]" size={16}/> {text}
                   </span>
                 ))}
              </div>
            </div>

            <div className="w-full lg:w-[320px] z-10">
               <div className="bg-gray-900 p-8 text-center flex flex-col items-center rounded-3xl shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500">
                  <p className="text-gray-400 font-black text-[10px] mb-2 uppercase tracking-[0.3em]">개통비 포함 파격가</p>
                  <p className="text-5xl font-black text-white mb-8 tracking-tighter italic flex items-baseline gap-1">
                    10,000<span className="text-lg not-italic text-gray-500 font-black tracking-normal uppercase">won</span>
                  </p>
                  <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="w-full bg-[#03C75A] text-white px-6 py-4 rounded-xl font-black text-base hover:bg-[#02b351] transition-all flex items-center justify-center gap-2 shadow-lg">
                     <span className="font-black text-xl">N</span> 톡톡 1:1 상담
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section (9 reviews) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tighter">실제 고객님들이 증명합니다</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-[#FEE500] text-[#FEE500]" />)}
              </div>
              <span className="text-xl font-black text-gray-900 tracking-tighter">평점 4.9 / 5.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-50 transition-all group flex flex-col h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-black text-gray-400 text-xs group-hover:bg-red-50 group-hover:text-[#C80000] transition-colors">
                      {rev.author[0]}
                    </div>
                    <div>
                      <p className="font-black text-gray-900 text-[13px] leading-none mb-1">
                        {rev.author}
                      </p>
                      <span className="bg-[#03C75A]/10 text-[#03C75A] text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Verified Visit</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-300 font-bold">{rev.date}</span>
                </div>
                <p className="text-gray-500 font-medium leading-relaxed text-[14px] mb-6 flex-grow italic">"{rev.content}"</p>
                <div className="flex items-center justify-between pt-5 border-t border-gray-50 mt-auto">
                   <p className="text-[11px] text-gray-400 font-black uppercase tracking-widest">{rev.model} 매입</p>
                   <ArrowUpRight size={16} className="text-gray-200 group-hover:text-[#C80000] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a 
              href={naverReviewUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-3 bg-white border border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-black text-base hover:bg-gray-900 hover:text-white transition-all shadow-xl group"
            >
              <span className="bg-[#03C75A] text-white w-5 h-5 flex items-center justify-center rounded-sm text-[11px] font-black">N</span>
              네이버 방문자리뷰 더보기 <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Price Section with Auto-Scrolling/Transitioning Effect */}
      <section className="py-20 bg-[#111827] text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">실시간 매입 시세</h2>
              <p className="text-gray-400 font-bold text-lg">기기 상태에 따라 최적의 가격을 실시간 업데이트합니다.</p>
            </div>
            <div className="flex justify-center lg:justify-end gap-2">
               <span className="flex items-center gap-2 bg-red-500/10 text-red-500 px-3 py-1.5 rounded-full text-xs font-black animate-pulse">
                 <Clock size={14} /> 실시간 업데이트 중
               </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Apple Scrolling Section */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden h-[450px] flex flex-col">
              <div className="p-8 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Apple size={24} fill="white" />
                  <h3 className="text-xl font-black uppercase tracking-[0.2em]">Apple</h3>
                </div>
                <span className="text-[10px] font-black text-gray-500">{applePrices.length} Models</span>
              </div>
              <div className="flex-grow overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col transition-transform duration-700 ease-in-out" style={{ transform: `translateY(-${(activePriceIdx % Math.max(1, applePrices.length)) * 90}px)` }}>
                  {applePrices.map((item, i) => (
                    <div key={item.id} className={`h-[90px] p-6 flex justify-between items-center transition-all border-b border-white/5 ${activePriceIdx % applePrices.length === i ? 'bg-white/5' : ''}`}>
                      <div>
                        <p className="text-lg font-black text-white leading-tight">{item.model}</p>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mt-1">{item.capacity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-red-500 font-black mb-1 uppercase">Top Quote</p>
                        <p className="text-2xl font-black text-white tracking-tighter">{item.maxPrice.toLocaleString()}원</p>
                      </div>
                    </div>
                  ))}
                  {/* Infinite Loop Mimic for small lists */}
                  {applePrices.length > 0 && applePrices.slice(0, 5).map((item, i) => (
                    <div key={item.id + '-clone'} className="h-[90px] p-6 flex justify-between items-center border-b border-white/5">
                      <div>
                        <p className="text-lg font-black text-white leading-tight">{item.model}</p>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mt-1">{item.capacity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-red-500 font-black mb-1 uppercase">Top Quote</p>
                        <p className="text-2xl font-black text-white tracking-tighter">{item.maxPrice.toLocaleString()}원</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Samsung Scrolling Section */}
            <div className="bg-gradient-to-br from-blue-900/40 to-[#1e1e1e] rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden h-[450px] flex flex-col">
              <div className="p-8 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone size={24} />
                  <h3 className="text-xl font-black uppercase tracking-[0.2em]">Samsung</h3>
                </div>
                <span className="text-[10px] font-black text-gray-500">{samsungPrices.length} Models</span>
              </div>
              <div className="flex-grow overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col transition-transform duration-700 ease-in-out" style={{ transform: `translateY(-${((activePriceIdx + 2) % Math.max(1, samsungPrices.length)) * 90}px)` }}>
                  {samsungPrices.map((item, i) => (
                    <div key={item.id} className={`h-[90px] p-6 flex justify-between items-center transition-all border-b border-white/5 ${(activePriceIdx + 2) % samsungPrices.length === i ? 'bg-white/5' : ''}`}>
                      <div>
                        <p className="text-lg font-black text-white leading-tight">{item.model}</p>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mt-1">{item.capacity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-blue-400 font-black mb-1 uppercase">Top Quote</p>
                        <p className="text-2xl font-black text-white tracking-tighter">{item.maxPrice.toLocaleString()}원</p>
                      </div>
                    </div>
                  ))}
                  {/* Infinite Loop Mimic */}
                  {samsungPrices.length > 0 && samsungPrices.slice(0, 5).map((item, i) => (
                    <div key={item.id + '-clone'} className="h-[90px] p-6 flex justify-between items-center border-b border-white/5">
                      <div>
                        <p className="text-lg font-black text-white leading-tight">{item.model}</p>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mt-1">{item.capacity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-blue-400 font-black mb-1 uppercase">Top Quote</p>
                        <p className="text-2xl font-black text-white tracking-tighter">{item.maxPrice.toLocaleString()}원</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 border-t border-white/5">
            <Link to="/prices" className="group flex items-center gap-3 text-white font-black hover:text-red-500 transition-all text-sm uppercase tracking-[0.2em]">
              전체 시세표 보기 <div className="bg-white/10 p-2 rounded-full group-hover:bg-red-500 transition-all"><ChevronRight size={16} /></div>
            </Link>
            <Link to="/sell" className="group flex items-center gap-3 text-white font-black hover:text-red-500 transition-all text-sm uppercase tracking-[0.2em]">
              내 폰 바로 팔기 <div className="bg-white/10 p-2 rounded-full group-hover:bg-red-500 transition-all"><ChevronRight size={16} /></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter mb-4">가까운 매장 안내</h2>
             <p className="text-gray-400 font-bold">동래역 2번 출구 바로 앞, 가장 편리한 위치에 있습니다.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {[
              { id: '01', title: '동래역 2번 출구', color: 'bg-[#FEE500]', text: '1호선 동래역 2번 출구 정면 롯데캐슬 퀸 상가 건물입니다.' },
              { id: '02', title: '상가 2층 이동', color: 'bg-gray-900', text: '상가 측면 엘리베이터를 이용하여 2층으로 편하게 올라오세요.' },
              { id: '03', title: '매장 방문', color: 'bg-[#C80000]', text: '2층 헌혈의 집 바로 옆 매장에 폰플러스가 있습니다.' }
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm group hover:-translate-y-2 transition-all duration-500">
                 <div className={`w-14 h-14 ${step.color} ${step.id === '01' ? 'text-black' : 'text-white'} rounded-2xl flex items-center justify-center font-black text-2xl mb-6 shadow-xl`}>{step.id}</div>
                 <h3 className="text-xl font-black text-gray-900 mb-3">{step.title}</h3>
                 <p className="text-gray-400 font-bold text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 p-10 md:p-14 rounded-[3rem] flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>

            <div className="text-center lg:text-left relative z-10">
              <span className="text-red-500 font-black mb-3 tracking-[0.4em] uppercase text-[11px] block">Location Info</span>
              <h4 className="text-2xl md:text-3xl font-black text-white leading-snug tracking-tighter mb-4">
                부산광역시 동래구 온천천로 165<br/>
                롯데캐슬 퀸 상가 102동 2층 207호
              </h4>
              <p className="text-gray-400 font-medium">영업시간: 평일 10:00 - 20:00 / 토요일 11:00 - 20:00</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto relative z-10">
              <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="bg-[#03C75A] text-white px-8 py-4.5 rounded-2xl font-black text-base flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl">
                <Navigation size={18} fill="white" /> 네이버 지도 보기
              </a>
              <a href={`tel:${config.contactNumber}`} className="bg-white text-gray-900 px-8 py-4.5 rounded-2xl font-black text-base flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl">
                <PhoneCall size={18} /> 실시간 전화 상담
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-10 tracking-tighter leading-tight">
            지금 바로 <span className="text-[#C80000]">내 폰의 가치</span>를<br/>확인해보세요.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sell" className="bg-[#C80000] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-2xl hover:-translate-y-1 btn-glow">무료 견적 신청</Link>
            <a href={`tel:${config.contactNumber}`} className="bg-white border-2 border-gray-900 text-gray-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all hover:-translate-y-1">직접 전화 문의</a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gray-50 rounded-full blur-[120px] -z-0 opacity-50 scale-150"></div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
         <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#03C75A] text-white rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group">
            <span className="font-black text-2xl group-hover:rotate-6 transition-transform">N</span>
         </a>
         <a href="https://open.kakao.com/o/sEKLRvQh" target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#FEE500] text-black rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group">
            <MessageSquare size={24} fill="black" className="group-hover:-rotate-6 transition-transform" />
         </a>
      </div>
    </div>
  );
};

export default Home;
