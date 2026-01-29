
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
      <section className="relative overflow-hidden bg-white py-16 lg:py-28 border-b border-gray-50">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block bg-[#C80000]/5 text-[#C80000] text-xs font-black uppercase tracking-[0.3em] px-4 py-2 mb-8 border-l-4 border-[#C80000]">
                Busan Premium Used Phone
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-10 tracking-tighter">
                가장 정직한 곳,<br/>
                <span className="text-[#C80000]">폰플러스</span>에서<br/>
                내 폰의 가치를 찾으세요.
              </h1>
              
              <div className="flex flex-col gap-3 max-w-lg mx-auto lg:mx-0">
                <Link to="/sell" className="bg-[#C80000] hover:bg-black text-white px-10 py-5 font-black text-xl shadow-xl transition-all flex items-center justify-center gap-2 group">
                  내 폰 시세 확인 <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="grid grid-cols-3 gap-2">
                  <a href="https://open.kakao.com/o/sEKLRvQh" target="_blank" rel="noreferrer" className="bg-[#FEE500] text-black py-4 font-black text-sm flex flex-col items-center justify-center gap-1 hover:brightness-95 transition-all shadow-sm border border-black/5">
                    <MessageSquare size={20} />
                    <span>카톡상담</span>
                  </a>
                  <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="bg-[#03C75A] text-white py-4 font-black text-sm flex flex-col items-center justify-center gap-1 hover:brightness-95 transition-all shadow-sm">
                    <span className="font-black text-xl leading-none">N</span>
                    <span>톡톡상담</span>
                  </a>
                  {/* 길찾기 버튼 개선: 흰색 배경, 검정 글자, 초록색 로고 */}
                  <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="bg-white text-gray-900 border border-gray-100 py-4 font-black text-sm flex flex-col items-center justify-center gap-1 hover:bg-gray-50 transition-all shadow-sm">
                    <Navigation size={20} className="text-[#03C75A]" fill="#03C75A" />
                    <span>길찾기</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
               <div className="relative z-10 p-4 transform hover:scale-[1.02] transition-transform duration-500">
                 <div className="bg-[#C80000] p-16 shadow-[0_30px_60px_-15px_rgba(200,0,0,0.3)] border-b-[20px] border-black flex items-center gap-2 font-black tracking-tighter max-w-lg mx-auto">
                    <div className="flex flex-col">
                      <span className="text-white text-7xl leading-none px-1">Phone</span>
                      <div className="w-full h-2 bg-white/90 mt-2"></div>
                    </div>
                    <div className="bg-white p-2 ml-1">
                      <span className="text-[#C80000] text-7xl leading-none uppercase">Plus</span>
                    </div>
                 </div>
                 <div className="text-center mt-12">
                   <p className="text-gray-400 font-black tracking-[0.5em] text-xl uppercase">Premium Shop</p>
                 </div>
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[#C80000]/10 rounded-full blur-[100px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 선불폰 프로모션 섹션 */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white p-10 md:p-16 border-l-[12px] border-[#C80000] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden">
            <div className="flex-1 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 text-[#C80000] font-black mb-10 uppercase tracking-[0.2em] text-sm">
                 <Zap size={18} fill="#C80000" /> Special Price Offer
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tighter">
                약정 없는 <span className="text-[#C80000]">무제한 선불폰</span><br/>
                누구나 <span className="bg-gray-900 text-white px-3">당일 즉시</span> 개통
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                 {[ "신용불량·연체자 OK", "본인명의 100%", "위약금 없음" ].map((text, i) => (
                   <span key={i} className="flex items-center gap-2 text-gray-500 font-black text-sm">
                     <CheckCircle2 className="text-[#C80000]" size={18}/> {text}
                   </span>
                 ))}
              </div>
            </div>

            <div className="w-full lg:w-96 z-10">
               <div className="bg-gray-50 p-12 text-center flex flex-col items-center border border-gray-100">
                  <div className="w-20 h-20 bg-[#C80000] text-white flex items-center justify-center mb-8 shadow-lg">
                    <Wallet size={40} />
                  </div>
                  <p className="text-gray-400 font-black text-xs mb-2 uppercase tracking-[0.2em]">개통비 포함 파격가</p>
                  <p className="text-6xl font-black text-gray-900 mb-10 tracking-tighter italic">10,000<span className="text-xl not-italic ml-1 text-gray-400 font-bold tracking-normal">원</span></p>
                  <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="w-full bg-[#03C75A] text-white px-8 py-5 font-black text-xl hover:bg-[#02b351] transition-all flex items-center justify-center gap-2">
                     <span className="font-black">N</span> 톡톡 바로상담
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 고객 후기 섹션 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter text-center">실제 방문 고객 후기</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-[#FEE500] text-[#FEE500]" />)}
              </div>
              <span className="text-2xl font-black text-gray-900 tracking-tighter">4.9 / 5.0</span>
            </div>
            <p className="mt-3 text-gray-400 font-bold text-sm">네이버 실제 방문자 리뷰 193건 돌파!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-[#F8F9FA] p-6 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-md transition-all flex flex-col h-full group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center font-black text-gray-500 text-[10px]">
                      {rev.author[0]}
                    </div>
                    <div>
                      <p className="font-black text-gray-900 text-[13px] leading-none flex items-center gap-1.5">
                        {rev.author} <span className="bg-[#03C75A]/10 text-[#03C75A] text-[8px] px-1.5 py-0.5 rounded-sm font-bold">방문자</span>
                      </p>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, starIdx) => <Star key={starIdx} size={8} className="fill-[#FEE500] text-[#FEE500]" />)}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-300 font-bold">{rev.date}</span>
                </div>
                <p className="text-gray-600 font-bold leading-relaxed text-[14px] mb-6 flex-grow">"{rev.content}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                   <p className="text-[9px] text-gray-400 font-black uppercase tracking-wider">{rev.model} 매입</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a 
              href={naverReviewUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-3 bg-white border-2 border-gray-900 text-gray-900 px-10 py-5 font-black text-lg hover:bg-gray-50 transition-all shadow-md group"
            >
              <span className="bg-[#03C75A] text-white w-6 h-6 flex items-center justify-center rounded-sm text-xs font-black">N</span>
              네이버 플레이스 리뷰 더보기 <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. 매입 시세 안내 */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-gray-900">실시간 매입 시세 안내</h2>
            <p className="text-gray-500 font-bold text-lg">기기 상태에 따라 최적의 매입가를 제시해드립니다.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { brand: 'Apple', icon: <Apple size={22} />, color: 'bg-gray-900', items: applePrices },
              { brand: 'Samsung', icon: <Smartphone size={22} />, color: 'bg-[#2563eb]', items: samsungPrices }
            ].map((col, idx) => (
              <div key={idx} className="bg-white border border-gray-100 shadow-sm overflow-hidden">
                <div className={`${col.color} text-white px-8 py-6 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    {col.icon}
                    <h3 className="text-xl font-black uppercase tracking-widest">{col.brand === 'Apple' ? 'iPhone Series' : 'Galaxy Series'}</h3>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  {col.items.map((item) => (
                    <div key={item.id} className="bg-white border-b border-gray-50 p-6 flex justify-between items-center hover:bg-gray-50 transition-all">
                      <div>
                        <p className="text-lg font-black text-gray-900 leading-tight">{item.model}</p>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">{item.capacity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-[#C80000] font-black mb-0.5 uppercase tracking-tighter">Premium Buy</p>
                        <p className="text-2xl font-black text-gray-900 tracking-tighter">{item.maxPrice.toLocaleString()}원</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/prices" className="inline-flex items-center gap-2 text-[#C80000] font-black hover:text-black transition-all text-sm uppercase tracking-[0.2em] border-b-2 border-[#C80000] pb-1">
              시세표 전체보기 <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. 오시는 길 - 헤더 디자인 최적화 및 정보 카드 레드 변경 */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-6">매장 오시는 길</h2>
             {/* 상단 뱃지: 초록색 배경 가득 채움 */}
             <div className="inline-flex items-center gap-2 bg-[#03C75A] text-white px-6 py-2.5 text-xs font-black italic tracking-widest shadow-lg rounded-full">
                <Navigation size={16} fill="white" /> DONGRAE PHONEPLUS GUIDE
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Step 01: 출구 안내 */}
            <div className="bg-gray-50 p-10 border-t-8 border-[#FEE500] flex flex-col items-center text-center shadow-sm">
               <div className="w-20 h-20 bg-[#FEE500] text-black flex items-center justify-center font-black text-4xl mb-8 shadow-lg">2</div>
               <h3 className="text-2xl font-black text-gray-900 mb-4">동래역 2번 출구 앞</h3>
               <p className="text-gray-500 font-bold leading-relaxed">
                 지하철 1호선 동래역 2번 출구로<br/>나오시면 바로 앞에 위치한<br/>
                 <span className="text-gray-900 font-black">롯데캐슬 퀸 상가</span> 건물입니다.
               </p>
            </div>

            {/* Step 02: 건물 진입 안내 */}
            <div className="bg-gray-50 p-10 border-t-8 border-gray-900 flex flex-col items-center text-center shadow-sm">
               <div className="w-20 h-20 bg-gray-900 text-white flex items-center justify-center mb-8 shadow-lg">
                 <ArrowUpRight size={40} />
               </div>
               <h3 className="text-2xl font-black text-gray-900 mb-4">상가 진입 안내</h3>
               <p className="text-gray-500 font-bold leading-relaxed">
                 상가 우측의 <span className="text-gray-900 font-black">계단 또는 엘리베이터</span>를<br/>
                 이용하여 2층으로 올라와주세요.<br/>
                 (입구가 매우 찾기 쉽습니다!)
               </p>
            </div>

            {/* Step 03: 최종 위치 안내 */}
            <div className="bg-gray-50 p-10 border-t-8 border-[#C80000] flex flex-col items-center text-center shadow-sm">
               <div className="w-20 h-20 bg-[#C80000] text-white flex items-center justify-center font-black text-3xl mb-8 shadow-lg">2F</div>
               <h3 className="text-2xl font-black text-gray-900 mb-4">2층 헌혈의 집 옆</h3>
               <p className="text-gray-500 font-bold leading-relaxed">
                 2층으로 올라오시면 바로 보이는<br/>
                 <span className="text-[#C80000] font-black">헌혈의 집 바로 옆</span> 매장입니다.<br/>
                 빨간색 'Phone Plus' 간판을 찾으세요!
               </p>
            </div>
          </div>

          <div className="bg-[#C80000] p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 text-white/10 opacity-50 group-hover:scale-110 transition-transform duration-700">
               <MapPin size={300} strokeWidth={1} />
            </div>
            
            <div className="text-center lg:text-left relative z-10">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-white/80 font-black mb-4 tracking-widest uppercase text-xs">
                <MapPin size={18} className="text-white" /> Location Information
              </div>
              <h4 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                부산 동래구 온천천로 165<br/>
                롯데캐슬 퀸 상가 2층 207호
              </h4>
              <p className="mt-4 text-white/70 font-bold text-sm">※ 동래역 2번 출구 바로 앞 건물의 2층입니다.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto relative z-10">
              <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="bg-[#03C75A] text-white px-10 py-5 font-black text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl">
                <Navigation size={24} fill="white" /> 네이버 길찾기
              </a>
              <a href={`tel:${config.contactNumber}`} className="bg-white text-[#C80000] px-10 py-5 font-black text-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-all shadow-xl">
                <PhoneCall size={24} /> 매장 전화문의
              </a>
            </div>
          </div>
          
          {/* 안내 박스: 노란색 배경으로 시인성 극대화 */}
          <div className="mt-12 flex items-center justify-center gap-3 bg-[#FEE500] py-4 px-10 rounded-full w-fit mx-auto text-black font-black text-base shadow-lg animate-pulse border-2 border-white">
            <Info size={22} className="text-black" /> 찾기 어려우시면 언제든 전화주세요. 사장님이 마중 나가겠습니다!
          </div>
        </div>
      </section>

      {/* 6. 선택 이유 */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tighter">동래 폰플러스가 특별한 이유</h2>
            <p className="text-gray-500 font-bold text-lg">간판의 무게만큼 정직하게 행동합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Award className="text-[#C80000]" size={32} />, title: '최고가 매입 원칙', desc: '허위 매입가 없이 현장에서 실제 거래 시세를 정직하게 안내합니다.' },
              { icon: <Clock4 className="text-[#C80000]" size={32} />, title: '10분 즉시 입금', desc: '기기 검수 완료 즉시 계좌로 전액 입금 처리를 완료합니다.' },
              { icon: <ShieldCheck className="text-[#C80000]" size={32} />, title: '데이터 보안 파기', desc: '개인정보가 남지 않도록 전문 툴을 통해 데이터를 영구 삭제합니다.' },
              { icon: <Headphones className="text-[#C80000]" size={32} />, title: '친절 전문 상담', desc: '중고폰 매입뿐만 아니라 개통, 선불폰 상담까지 친절히 안내합니다.' },
              { icon: <MapPin className="text-[#C80000]" size={32} />, title: '동래역 2번 출구', desc: '지하철역 바로 앞 접근성으로 누구나 찾기 편리한 위치입니다.' },
              { icon: <UserCheck className="text-[#C80000]" size={32} />, title: 'ICT 정식 인증', desc: '정보통신기술 마켓 정식 인증을 완료한 신뢰받는 전문 업체입니다.' }
            ].map((r, i) => (
              <div key={i} className="bg-white p-12 hover:shadow-xl transition-all border border-gray-100 text-center">
                <div className="mb-8 w-16 h-16 bg-gray-50 flex items-center justify-center mx-auto border-b-4 border-[#C80000]">
                  {r.icon}
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-900">{r.title}</h3>
                <p className="text-gray-500 font-bold text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 최종 CTA */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-12 tracking-tighter leading-tight">
            믿고 맡기는 동래 폰플러스,<br/><span className="text-[#C80000]">지금 바로 최고가 견적 무료로 확인하세요.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/sell" className="bg-[#C80000] text-white px-12 py-6 font-black text-2xl hover:bg-black transition-all shadow-xl">최고가 견적 신청</Link>
            <a href={`tel:${config.contactNumber}`} className="bg-white border-2 border-gray-900 text-gray-900 px-12 py-6 font-black text-2xl hover:bg-gray-50 transition-all">전화 문의하기</a>
          </div>
        </div>
      </section>

      {/* 플로팅 버튼 */}
      <div className="fixed bottom-10 right-10 z-[100] flex flex-col gap-4">
         <a href={naverTalkTalkUrl} target="_blank" rel="noreferrer" className="w-16 h-16 bg-[#03C75A] text-white rounded-none flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border border-white/20">
            <span className="font-black text-3xl">N</span>
         </a>
         <a href="https://open.kakao.com/o/sEKLRvQh" target="_blank" rel="noreferrer" className="w-16 h-16 bg-[#FEE500] text-black rounded-none flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border border-white/20">
            <MessageSquare size={32} />
         </a>
      </div>
    </div>
  );
};

export default Home;
