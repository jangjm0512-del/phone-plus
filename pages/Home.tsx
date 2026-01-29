
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
  Award, 
  Apple, 
  Zap, 
  CheckCircle2, 
  PhoneCall, 
  Wallet, 
  ExternalLink,
  Headphones,
  UserCheck,
  Building2,
  ArrowUpRight,
  Info
} from 'lucide-react';

const Home: React.FC = () => {
  const { prices, config } = useAppContext();
  
  const applePrices = prices.filter(p => p.brand === 'Apple').slice(0, 4);
  const samsungPrices = prices.filter(p => p.brand === 'Samsung').slice(0, 4);

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
      {/* 1. 히어로 섹션 */}
      <section className="relative overflow-hidden bg-white py-10 lg:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block bg-[#C80000]/5 text-[#C80000] text-[9px] font-black uppercase tracking-[0.3em] px-2 py-1 mb-4 border-l-3 border-[#C80000]">
                Premium Used Phone Partner
              </span>
              <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-[1.15] mb-6 tracking-tighter">
                가장 정직한 곳,<br/>
                <span className="text-[#C80000]">폰플러스</span>에서<br/>
                내 폰의 가치를 찾으세요.
              </h1>
              
              <div className="flex flex-col gap-2 max-w-sm mx-auto lg:mx-0">
                <Link to="/prices" className="bg-[#C80000] hover:bg-black text-white px-6 py-3.5 font-black text-base shadow-lg transition-all flex items-center justify-center gap-2 group">
                  내 폰 시세 확인 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="grid grid-cols-3 gap-1.5">
                  <a href="https://open.kakao.com/o/sEKLRvQh" target="_blank" rel="noreferrer" className="bg-[#FEE500] text-black py-2.5 font-black text-[10px] flex flex-col items-center justify-center gap-1 hover:brightness-95 transition-all shadow-sm border border-black/5">
                    <MessageSquare size={16} />
                    <span>카톡상담</span>
                  </a>
                  <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="bg-[#03C75A] text-white py-2.5 font-black text-[10px] flex flex-col items-center justify-center gap-1 hover:brightness-95 transition-all shadow-sm">
                    <span className="font-black text-base leading-none">N</span>
                    <span>톡톡상담</span>
                  </a>
                  <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="bg-white text-black border border-gray-200 py-2.5 font-black text-[10px] flex flex-col items-center justify-center gap-1 hover:bg-gray-50 transition-all shadow-sm">
                    <Navigation size={16} className="text-[#03C75A]" fill="#03C75A" />
                    <span>길찾기</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:flex lg:justify-end">
               <div className="w-full max-w-[300px] p-2">
                 <div className="bg-[#C80000] p-9 shadow-2xl border-b-[10px] border-black flex items-center justify-center gap-2 font-black tracking-tighter w-full">
                    <div className="flex flex-col">
                      <span className="text-white text-3xl leading-none px-0.5">Phone</span>
                      <div className="w-full h-1 bg-white/90 mt-1"></div>
                    </div>
                    <div className="bg-white px-1 py-0.5 ml-0.5">
                      <span className="text-[#C80000] text-3xl leading-none uppercase">Plus</span>
                    </div>
                 </div>
                 <div className="text-center mt-5">
                   <p className="text-gray-400 font-black tracking-[0.4em] text-[11px] uppercase">Premium Shop</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 선불폰 프로모션 섹션 */}
      <section className="py-10 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="bg-white p-6 md:p-8 border-l-[8px] border-[#C80000] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="flex-1 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-1.5 text-[#C80000] font-black mb-4 uppercase tracking-[0.2em] text-[10px]">
                 <Zap size={14} fill="#C80000" /> Promotion
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight tracking-tighter">
                약정 없는 <span className="text-[#C80000]">무제한 선불폰</span><br/>
                누구나 <span className="bg-gray-900 text-white px-1.5">당일 즉시</span> 개통 가능
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                 {[ "신용불량·연체 OK", "본인명의 100%", "위약금 제로" ].map((text, i) => (
                   <span key={i} className="flex items-center gap-1 text-gray-400 font-bold text-[11px]">
                     <CheckCircle2 className="text-[#C80000]" size={14}/> {text}
                   </span>
                 ))}
              </div>
            </div>

            <div className="w-full lg:w-[300px] z-10 lg:flex lg:justify-end">
               <div className="bg-gray-50/50 p-6 text-center flex flex-col items-center border border-gray-100 w-full max-w-[300px]">
                  <p className="text-gray-400 font-black text-[9px] mb-1 uppercase tracking-[0.2em]">개통비 포함 파격가</p>
                  <p className="text-4xl font-black text-gray-900 mb-6 tracking-tighter italic">10,000<span className="text-base not-italic ml-1 text-gray-400 font-bold tracking-normal">원</span></p>
                  <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="w-full bg-[#03C75A] text-white px-4 py-3 font-black text-sm hover:bg-[#02b351] transition-all flex items-center justify-center gap-1.5 shadow-md">
                     <span className="font-black">N</span> 톡톡 바로상담
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 고객 후기 섹션 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 tracking-tighter">실제 방문 고객 후기</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#FEE500] text-[#FEE500]" />)}
              </div>
              <span className="text-base font-black text-gray-900 tracking-tighter">4.9 / 5.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-[#F8F9FA] p-4 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-sm transition-all flex flex-col h-full group">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center font-black text-gray-500 text-[9px]">
                      {rev.author[0]}
                    </div>
                    <div>
                      <p className="font-black text-gray-900 text-[11px] leading-none flex items-center gap-1">
                        {rev.author} <span className="bg-[#03C75A]/10 text-[#03C75A] text-[7px] px-1 py-0.5 rounded-sm font-bold uppercase">Verified</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-[8px] text-gray-300 font-bold">{rev.date}</span>
                </div>
                <p className="text-gray-500 font-bold leading-relaxed text-[12px] mb-3 flex-grow">"{rev.content}"</p>
                <div className="flex items-center justify-between pt-2.5 border-t border-gray-100 mt-auto">
                   <p className="text-[8px] text-gray-400 font-black uppercase tracking-wider">{rev.model} 매입</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a 
              href={naverReviewUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 bg-white border border-gray-900 text-gray-900 px-6 py-3 font-black text-sm hover:bg-gray-50 transition-all shadow-sm group"
            >
              <span className="bg-[#03C75A] text-white w-4 h-4 flex items-center justify-center rounded-sm text-[9px] font-black">N</span>
              네이버 리뷰 더보기 <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* 4. 매입 시세 안내 */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3 tracking-tighter text-gray-900">실시간 매입 시세</h2>
            <p className="text-gray-400 font-bold text-sm">기기 상태별 최적가를 제시합니다.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              { brand: 'Apple', icon: <Apple size={16} />, color: 'bg-gray-900', items: applePrices },
              { brand: 'Samsung', icon: <Smartphone size={16} />, color: 'bg-[#1D4ED8]', items: samsungPrices }
            ].map((col, idx) => (
              <div key={idx} className="bg-white border border-gray-100 shadow-sm">
                <div className={`${col.color} text-white px-5 py-3 flex items-center justify-between`}>
                  <div className="flex items-center gap-1.5">
                    {col.icon}
                    <h3 className="text-sm font-black uppercase tracking-widest">{col.brand}</h3>
                  </div>
                </div>
                <div className="p-1">
                  {col.items.map((item) => (
                    <div key={item.id} className="bg-white border-b border-gray-50 p-4 flex justify-between items-center hover:bg-gray-50 transition-all">
                      <div>
                        <p className="text-[13px] font-black text-gray-900 leading-tight">{item.model}</p>
                        <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mt-0.5">{item.capacity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] text-[#C80000] font-black mb-0.5 uppercase tracking-tighter">Premium</p>
                        <p className="text-lg font-black text-gray-900 tracking-tighter">{item.maxPrice.toLocaleString()}원</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4 mt-8">
            <Link to="/prices" className="inline-flex items-center gap-1 text-[#C80000] font-black hover:text-black transition-all text-[10px] uppercase tracking-[0.2em] border-b-2 border-[#C80000] pb-0.5">
              전체 시세표 보기 <ChevronRight size={12} />
            </Link>
            <Link to="/sell" className="inline-flex items-center gap-1 text-gray-900 font-black hover:text-[#C80000] transition-all text-[10px] uppercase tracking-[0.2em] border-b-2 border-gray-900 pb-0.5">
              내 폰 팔기 <ChevronRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. 오시는 길 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
             <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter mb-3">매장 오시는 길</h2>
             <div className="inline-flex items-center gap-1.5 bg-[#03C75A] text-white px-3 py-1.5 text-[9px] font-black tracking-widest rounded-full">
                <Navigation size={12} fill="white" /> PHONEPLUS MAP
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 p-6 border-t-4 border-[#FEE500] text-center shadow-sm">
               <div className="w-12 h-12 bg-[#FEE500] text-black flex items-center justify-center font-black text-2xl mx-auto mb-4">2</div>
               <h3 className="text-base font-black text-gray-900 mb-2">동래역 2번 출구</h3>
               <p className="text-gray-400 font-bold text-[11px] leading-relaxed">
                 1호선 동래역 2번 출구 바로 앞<br/><span className="text-gray-900">롯데캐슬 퀸 상가</span> 건물입니다.
               </p>
            </div>

            <div className="bg-gray-50 p-6 border-t-4 border-gray-900 text-center shadow-sm">
               <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center mx-auto mb-4">
                 <ArrowUpRight size={24} />
               </div>
               <h3 className="text-base font-black text-gray-900 mb-2">상가 2층 진입</h3>
               <p className="text-gray-400 font-bold text-[11px] leading-relaxed">
                 상가 우측 <span className="text-gray-900">엘리베이터</span>를<br/>
                 이용해 2층으로 올라오세요.
               </p>
            </div>

            <div className="bg-gray-50 p-6 border-t-4 border-[#C80000] text-center shadow-sm">
               <div className="w-12 h-12 bg-[#C80000] text-white flex items-center justify-center font-black text-xl mx-auto mb-4">2F</div>
               <h3 className="text-base font-black text-gray-900 mb-2">헌혈의 집 옆</h3>
               <p className="text-gray-400 font-bold text-[11px] leading-relaxed">
                 2층에 위치한<br/>
                 <span className="text-[#C80000] font-black">헌혈의 집 바로 옆</span> 매장입니다.
               </p>
            </div>
          </div>

          <div className="bg-gray-900 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
            <div className="text-center lg:text-left relative z-10">
              <p className="text-white/40 font-black mb-1.5 tracking-widest uppercase text-[9px]">Location Info</p>
              <h4 className="text-xl md:text-2xl font-black text-white leading-tight tracking-tighter">
                부산광역시 동래구 온천천로 165<br/>
                롯데캐슬 퀸 상가 102동 2층 207호
              </h4>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto relative z-10">
              <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="bg-[#03C75A] text-white px-5 py-3 font-black text-sm flex items-center justify-center gap-1.5 hover:brightness-110 transition-all shadow-lg">
                <Navigation size={16} fill="white" /> 지도보기
              </a>
              <a href={`tel:${config.contactNumber}`} className="bg-white text-gray-900 px-5 py-3 font-black text-sm flex items-center justify-center gap-1.5 hover:bg-gray-100 transition-all shadow-lg">
                <PhoneCall size={16} /> 전화문의
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 최종 CTA */}
      <section className="py-16 bg-white border-t border-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tighter leading-tight">
            믿고 맡기는 <span className="text-[#C80000]">동래 폰플러스</span>에서<br/>최고가 시세를 지금 확인하세요.
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/sell" className="bg-[#C80000] text-white px-8 py-4 font-black text-lg hover:bg-black transition-all shadow-xl">견적 신청하기</Link>
            <a href={`tel:${config.contactNumber}`} className="bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 font-black text-lg hover:bg-gray-50 transition-all">전화 문의하기</a>
          </div>
        </div>
      </section>

      {/* 플로팅 버튼 */}
      <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-2">
         <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#03C75A] text-white rounded-none flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
            <span className="font-black text-lg">N</span>
         </a>
         <a href="https://open.kakao.com/o/sEKLRvQh" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#FEE500] text-black rounded-none flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
            <MessageSquare size={18} />
         </a>
      </div>
    </div>
  );
};

export default Home;
