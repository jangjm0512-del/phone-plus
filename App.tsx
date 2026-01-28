
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AppProvider, useAppContext } from './AppContext';
import Home from './pages/Home';
import Sell from './pages/Sell';
import PriceList from './pages/PriceList';
import Notice from './pages/Notice';
import AdminDashboard from './pages/AdminDashboard';
import { Menu, X, Phone, User, Settings, MapPin, Clock, MessageCircle, MessageSquare, ChevronRight, Navigation } from 'lucide-react';

const Logo: React.FC<{ light?: boolean }> = ({ light }) => (
  <div className="flex items-center scale-90 md:scale-100 origin-left">
    <div className="bg-[#C80000] px-3 py-1 flex items-center font-black tracking-tighter rounded-sm shadow-md">
      <span className="text-white text-xl md:text-2xl mr-1">Phone</span>
      <div className="bg-white px-1 ml-0.5 rounded-sm">
        <span className="text-[#C80000] text-xl md:text-2xl">Plus</span>
      </div>
    </div>
  </div>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { config, isAdmin } = useAppContext();
  const location = useLocation();

  const navItems = [
    { name: '홈', path: '/' },
    { name: '내 폰 팔기', path: '/sell' },
    { name: '매입 시세', path: '/prices' },
    { name: '공지사항', path: '/notice' },
  ];

  const naverPlaceUrl = "https://naver.me/xcnayRi3";

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Logo />
            </Link>
            <div className="hidden lg:block border-l border-gray-100 pl-4">
              <a href="https://ictmarket.or.kr:8443/precon/pop_CertIcon.do?PRECON_REQ_ID=PRE0000189102" target="_blank" rel="noreferrer">
                <img 
                  style={{ cursor: 'pointer', height: '36px' }} 
                  src="https://ictmarket.or.kr:8443/getCertIcon.do?cert_icon=KP24101705590I002" 
                  alt="정식인증마크" 
                />
              </a>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[15px] font-bold transition-all hover:text-[#C80000] ${location.pathname === item.path ? 'text-[#C80000]' : 'text-gray-600'}`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-2">
               <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-[13px] font-black hover:bg-gray-100 transition-all border border-gray-200">
                <Navigation size={14} className="text-[#03C75A]" /> 지도
               </a>
               {isAdmin ? (
                  <Link to="/admin" className="flex items-center gap-1 text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1.5 rounded-lg border border-red-100">
                    <Settings size={14} /> 관리
                  </Link>
               ) : (
                 <Link to="/admin" className="text-gray-300 hover:text-red-600 transition-colors">
                   <User size={20} />
                 </Link>
               )}
            </div>
            
            <a href={`tel:${config.contactNumber}`} className="flex items-center gap-2 bg-[#C80000] hover:bg-[#A00000] text-white px-5 py-2.5 rounded-xl font-black transition-all transform hover:scale-105 shadow-lg shadow-red-100 text-sm">
              <Phone size={16} />
              {config.contactNumber}
            </a>
          </nav>

          <button className="md:hidden text-gray-900 p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 py-8 px-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-5">
            <div className="flex justify-between items-center mb-2 pb-4 border-b border-gray-50">
              <a href={naverPlaceUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl text-sm font-black text-gray-700 border border-gray-100">
                <Navigation size={16} className="text-[#03C75A]" /> 네이버 지도
              </a>
              <a href="https://ictmarket.or.kr:8443/precon/pop_CertIcon.do?PRECON_REQ_ID=PRE0000189102" target="_blank" rel="noreferrer">
                <img style={{ height: '30px' }} src="https://ictmarket.or.kr:8443/getCertIcon.do?cert_icon=KP24101705590I002" alt="인증" />
              </a>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold text-gray-800 flex items-center justify-between"
              >
                {item.name} <ChevronRight size={20} className="text-gray-300" />
              </Link>
            ))}
            <a href={`tel:${config.contactNumber}`} className="bg-[#C80000] text-white text-center py-5 rounded-2xl font-black text-xl shadow-xl mt-4">
              전화 상담: {config.contactNumber}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  const { config } = useAppContext();
  return (
    <footer className="bg-gray-950 text-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-8">
              <Logo />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm mb-8 font-medium">
              부산 동래구 중고폰 매입/알뜰폰 개통 전문.<br/>
              투명한 검수 시스템과 압도적 매입가로<br/>고객님의 소중한 기기를 가치있게 매입합니다.
            </p>
            <div className="flex space-x-3">
               <a href="https://naver.me/xcnayRi3" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#03C75A] transition-all group shadow-lg">
                 <span className="text-white font-black group-hover:scale-110 transition-transform text-lg">N</span>
               </a>
               <a href="https://open.kakao.com/o/sEKLRvQh" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#FEE500] transition-all group shadow-lg">
                 <MessageSquare size={20} className="text-white group-hover:text-black transition-colors" />
               </a>
               <a href="https://talk.naver.com/W5IQBE" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#03C75A] transition-all group shadow-lg">
                 <MessageCircle size={20} className="text-white transition-colors" />
               </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-black text-gray-500 uppercase tracking-[0.2em] mb-8">Business Hours</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-[#C80000] mt-1" />
                <div className="text-sm font-medium text-gray-400 leading-relaxed">
                  <p className="text-white">평일: 10:00 - 20:00</p>
                  <p className="text-white">토요일: 11:00 - 20:00</p>
                  <p className="text-red-500/80 font-bold mt-2">일요일/공휴일: 사전 예약 시 방문 가능</p>
                  <p className="text-xs mt-4 text-gray-500 font-bold tracking-widest italic">※ 365일 실시간 상담 가능</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black text-gray-500 uppercase tracking-[0.2em] mb-8">Location</h3>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-[#C80000] mt-1 flex-shrink-0" />
              <div className="text-sm font-medium text-gray-400 leading-relaxed">
                <p className="text-white mb-1">부산광역시 동래구 온천천로 165</p>
                <p>명륜동, 동래 롯데캐슬 퀸 102동 2층 207호</p>
                <p className="text-xs text-[#C80000] font-black mt-1">(동래역 2번 출구 바로 앞 도보 1분)</p>
                <a href="https://naver.me/xcnayRi3" target="_blank" rel="noreferrer" className="inline-block mt-4 text-white font-black border-b border-white/20 hover:border-white transition-all">네이버 길찾기</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black text-gray-500 uppercase tracking-[0.2em] mb-8">Company Info</h3>
            <div className="text-[11px] font-bold text-gray-500 leading-relaxed space-y-1 uppercase tracking-tight">
              <p>상호: <span className="text-white">부산 중고폰 매입 폰플러스 동래 선불폰&알뜰폰</span></p>
              <p>대표: <span className="text-white">전미성</span></p>
              <p>사업자번호: <span className="text-white">472-43-01176</span></p>
              <p>문의: <span className="text-white">{config.contactNumber}</span></p>
              <div className="mt-6">
                 <a href="https://ictmarket.or.kr:8443/precon/pop_CertIcon.do?PRECON_REQ_ID=PRE0000189102" target="_blank" rel="noreferrer" className="inline-block opacity-60 hover:opacity-100 transition-opacity">
                    <img style={{ height: '30px' }} src="https://ictmarket.or.kr:8443/getCertIcon.do?cert_icon=KP24101705590I002" alt="인증마크" />
                 </a>
              </div>
              <p className="pt-8 text-gray-600 font-medium text-[9px]">Copyright &copy; {new Date().getFullYear()} PHONEPLUS DONGNAE. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/prices" element={<PriceList />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
