import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../AppContext.tsx';
import { 
  ChevronRight, 
  Smartphone, 
  Star, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Navigation, 
  ShieldCheck, 
  Clock4, 
  TrendingUp, 
  Award, 
  Apple, 
  Users,
  Headphones,
  UserCheck,
  MessageCircle
} from 'lucide-react';

const Home: React.FC = () => {
  const { prices, config } = useAppContext();
  
  const applePrices = prices.filter(p => p.brand === 'Apple').slice(0, 4);
  const samsungPrices = prices.filter(p => p.brand === 'Samsung').slice(0, 4);

  const naverPlaceUrl = "https://naver.me/xcnayRi3";
  const naverTalkTalkUrl = "https://talk.naver.com/W5IQBE";

  const reviews = [
    { author: "쑤빙96", model: "아이폰 15 프로", content: "친절하게 설명해주시며 좋은가격에 잘 팔고갑니다 🤍 여러 곳 알아봤는데 폰플러스가 가장 높은 가격을 제시해주셨어요.", tags: ["친절해요", "설명이 자세해요"], location: "부산 동래구", date: "2025.01.10" },
    { author: "안3199", model: "갤럭시 S24 울트라", content: "선불폰이 필요해서 방문했는데 사장님께서 요금제도 제일 알뜰한걸로 추천해주시고 기타 설명도 잘해주셨습니다.", tags: ["분위기가 편안해요", "설명이 자세해요"], location: "부산 동래구", date: "2025.01.10" },
    { author: "김*진", model: "아이폰 14 프로맥스", content: "당근 거래하려다 스트레스받아서 왔는데 검수도 빠르고 입금도 바로 해주시네요. 진작 올 걸 그랬어요!", tags: ["신속해요", "입금이 빨라요"], location: "부산 연제구", date: "2025.01.25" },
    { author: "박*훈", model: "갤럭시 Z 플립 5", content: "액정이 조금 나간 상태였는데도 감가를 정말 최소한으로 해주셨어요. 사장님이 정말 양심적이십니다.", tags: ["가격이 합리적이에요", "친절해요"], location: "부산 동래구", date: "2025.01.28" },
    { author: "정*희", model: "아이폰 12", content: "여러군데 발품 팔았는데 부산에서 여기가 매입가 제일 잘 쳐주네요. 적극 추천합니다!", tags: ["최고가 매입", "친절해요"], location: "부산 수영구", date: "2025.02.08" }
  ];

  return (
    <div className="flex flex-col">
      {/* 1. 히어로 섹션 */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block bg-red-100 text-[#C80000] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Busan No.1 Premium Used Phone Shop
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-8">
                {config.heroTitle.split(' ').map((word, i) => (
                  <span key={i} className={word === '중고폰' || word === '매입' ? 'text-[#C80000]' : ''}>{word} </span>
                ))}
              </h1>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">
                {config.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch">
                <Link to="/sell" className="bg-[#C80000] hover:bg-[#A00000] text-white px-8 py-5 rounded-2xl font-black text-xl shadow-xl shadow-red-200 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2">
                  내 폰 시세 확인 <ChevronRight size={24} />
                </Link>
                <div className="flex gap-2 justify-center">
                   <a href="https://open.kakao.com/o/sEKLRvQh" target="_blank" rel="noreferrer" className="bg-[#FEE500] text-black px-6 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-lg flex items-center gap-2">
                     <MessageSquare size={20} /> 카톡
                   </a>
                   <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="bg-[#03C75A] text-white px-6 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-lg flex items-center gap-2">
                     <span className="font-black">N</span> 톡톡
                   </a>
                   <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="bg-gray-900 text-white px-6 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-lg flex items-center gap-2">
                     <Navigation size={20} className="text-[#03C75A]" /> 지도
                   </a>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
               <div className="relative z-10 p-0 transform rotate-2">
                 <img 
                   src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800" 
                   alt="Premium iPhone Black" 
                   className="rounded-[3rem] w-full max-w-md mx-auto shadow-2xl transition-transform hover:scale-[1.02] duration-500" 
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 고객 후기 섹션 */}
      <section className="py-24 bg-green-50/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-6 text-gray-900">압도적인 고객 후기</h2>
            <div className="mt-8 flex items-center justify-center gap-6">
               <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={32} className="fill-yellow-400 text-yellow-400" />)}
               </div>
               <div className="flex flex-col items-start leading-none">
                 <p className="text-4xl font-black text-gray-900">4.9 <span className="text-lg text-gray-400 font-bold">/ 5.0</span></p>
                 <p className="text-sm font-black text-[#C80000] mt-1 flex items-center gap-1"><Users size={14}/> 실제 방문자 후기 193건 돌파!</p>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all flex flex-col h-full border border-gray-100">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed italic mb-8 flex-grow">"{rev.content}"</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {rev.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-black bg-gray-50 text-gray-400 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
                  <div>
                    <p className="font-black text-gray-900">{rev.author} <span className="text-[10px] text-gray-400 ml-1">{rev.model}</span></p>
                    <p className="text-[10px] text-gray-400 font-bold">📍 {rev.location}</p>
                  </div>
                  <p className="text-[10px] text-gray-300 font-bold">{rev.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 매입 시세 안내 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">실시간 매입 시세</h2>
            <p className="text-gray-500 font-medium text-lg">삼성 갤럭시 및 애플 아이폰 전 기종 고가 매입 진행 중</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="bg-[#333b4d] text-white px-8 py-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><Apple size={24} /></div>
                  <h3 className="text-2xl font-black">애플</h3>
                </div>
              </div>
              <div className="p-4 space-y-3">
                {applePrices.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-2xl p-6 flex justify-between items-center group hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                    <div>
                      <p className="text-lg font-black text-gray-900 mb-0.5">{item.model}</p>
                      <p className="text-sm font-black text-gray-500">{item.capacity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 font-bold mb-1">최고가 기준</p>
                      <p className="text-2xl font-black text-green-600">{item.maxPrice.toLocaleString()}원</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="bg-[#2563eb] text-white px-8 py-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><Smartphone size={24} /></div>
                  <h3 className="text-2xl font-black">삼성</h3>
                </div>
              </div>
              <div className="p-4 space-y-3">
                {samsungPrices.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-2xl p-6 flex justify-between items-center group hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                    <div>
                      <p className="text-lg font-black text-gray-900 mb-0.5">{item.model}</p>
                      <p className="text-sm font-black text-gray-500">{item.capacity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 font-bold mb-1">최고가 기준</p>
                      <p className="text-2xl font-black text-green-600">{item.maxPrice.toLocaleString()}원</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/prices" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-black transition-all shadow-xl">
              전체 모델 시세표 보기 <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. 오시는 길 - 보내주신 이미지 느낌의 배경 지도 반영 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white p-10 md:p-16 rounded-[3.5rem] border border-gray-100 shadow-sm relative z-10">
               <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight">
                 오시는 길 & <br/><span className="text-[#C80000]">동래역점</span> 안내
               </h2>
               <div className="space-y-8">
                 <div className="flex gap-5">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#C80000] shadow-sm flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-1 text-gray-900">매장 위치</h4>
                      <p className="text-gray-500 font-medium leading-relaxed">부산광역시 동래구 온천천로 165<br/>동래 롯데캐슬 퀸 102동 2층 207호</p>
                      <p className="text-[#C80000] text-sm font-bold">(동래역 2번 출구 바로 앞 도보 1분)</p>
                    </div>
                 </div>
                 <div className="flex gap-5">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#C80000] shadow-sm flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-1 text-gray-900">영업 시간</h4>
                      <p className="text-gray-500 font-medium">평일 10:00 - 20:00 / 토요일 11:00 - 20:00</p>
                      <p className="text-red-500/80 text-xs font-bold mt-1">※ 일요일/공휴일은 예약 시 방문 가능</p>
                    </div>
                 </div>
               </div>
               <div className="mt-12 flex flex-col gap-3">
                 <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="w-full bg-[#03C75A] text-white px-8 py-5 rounded-2xl font-black flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-all">
                   <Navigation size={24} /> 네이버 지도로 보기
                 </a>
                 <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="w-full bg-white text-[#03C75A] border-2 border-[#03C75A] px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-green-50 transition-all">
                   <MessageCircle size={20} /> 네이버 톡톡 실시간 상담
                 </a>
               </div>
            </div>
            
            <div className="relative group cursor-pointer h-full min-h-[400px]" onClick={() => window.open(naverPlaceUrl, '_blank')}>
               <div className="absolute inset-0 bg-[#e5e7eb] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                    alt="Map Background" 
                    className="w-full h-full object-cover opacity-50 grayscale contrast-125" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-gray-200/50"></div>
               </div>
               
               <div className="absolute inset-0 flex items-center justify-center p-6">
                 <div className="bg-white/95 p-8 rounded-[2.5rem] shadow-2xl text-center border border-white transform group-hover:-translate-y-2 transition-transform duration-500 max-w-xs w-full">
                    <div className="w-16 h-16 bg-[#C80000] text-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl animate-bounce">
                       <MapPin size={32} />
                    </div>
                    <h3 className="text-2xl font-black mb-2 text-gray-900">폰플러스 동래역점</h3>
                    <p className="text-gray-500 font-bold mb-6">롯데캐슬 퀸 102동 2층 207호</p>
                    <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-xl text-xs font-black">동래역 2번출구 도보 1분</div>
                 </div>
               </div>
               <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-xs font-black whitespace-nowrap">지도를 클릭하면 실제 네이버 지도로 연결됩니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 선택해야 하는 이유 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">왜 폰플러스인가요?</h2>
            <p className="text-gray-500 font-medium text-lg">부산에서 가장 정직하고 투명한 매입을 약속합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Award className="text-yellow-500" size={40} />, title: '최고가 매입 보장', desc: '타사보다 단 1원이라도 더 챙겨드립니다.' },
              { icon: <Clock4 className="text-red-500" size={40} />, title: '10분 즉시 입금', desc: '검수 즉시 현장에서 현금 또는 계좌이체!' },
              { icon: <ShieldCheck className="text-green-500" size={40} />, title: '데이터 완전 삭제', desc: '개인정보 유출 걱정 없는 전문 포맷 시스템.' },
              { icon: <Headphones className="text-blue-500" size={40} />, title: '친절한 1:1 상담', desc: '중고폰부터 선불폰까지 친절하게 안내합니다.' },
              { icon: <MapPin className="text-[#C80000]" size={40} />, title: '압도적 접근성', desc: '동래역 2번 출구 바로 앞이라 찾기 쉽습니다.' },
              { icon: <UserCheck className="text-indigo-500" size={40} />, title: '정식 인증 업체', desc: 'ICT마켓 정식 인증을 받은 믿을 수 있는 업체.' }
            ].map((r, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
                <div className="mb-6">{r.icon}</div>
                <h3 className="text-2xl font-black mb-4 text-gray-900">{r.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 최종 CTA (문구 수정 반영) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#C80000] rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                지금 바로 <span className="text-yellow-400">최고가 견적</span><br/>무료로 확인하세요!
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <Link to="/sell" className="bg-white text-[#C80000] px-12 py-6 rounded-2xl font-black text-2xl hover:scale-105 transition-all shadow-xl">최고가 견적 신청하기</Link>
                <a href={`tel:${config.contactNumber}`} className="bg-gray-900 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:bg-black transition-all shadow-xl">전화로 바로 문의</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 플로팅 버튼 */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-3">
         <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="w-16 h-16 bg-[#03C75A] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative group">
            <span className="font-black text-2xl">N</span>
            <span className="absolute right-full mr-4 bg-white text-[#03C75A] px-3 py-1.5 rounded-xl text-sm font-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-green-100">네이버 톡톡 상담</span>
         </a>
         <a href="https://open.kakao.com/o/sEKLRvQh" target="_blank" rel="noreferrer" className="w-16 h-16 bg-[#FEE500] text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative group">
            <MessageSquare size={28} />
            <span className="absolute right-full mr-4 bg-white text-black px-3 py-1.5 rounded-xl text-sm font-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-yellow-100">카톡 실시간 상담</span>
         </a>
      </div>
    </div>
  );
};

export default Home;