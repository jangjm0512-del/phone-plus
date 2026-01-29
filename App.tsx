
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AppProvider, useAppContext } from './AppContext.tsx';
import Home from './pages/Home.tsx';
import Sell from './pages/Sell.tsx';
import PriceList from './pages/PriceList.tsx';
import Notice from './pages/Notice.tsx';
import AdminDashboard from './pages/AdminDashboard.tsx';
import { 
  Menu, X, Phone, User, Settings, MapPin, Clock, 
  MessageCircle, MessageSquare, ChevronRight, Navigation, 
  Eye, Check, RotateCcw, ShieldCheck, ExternalLink
} from 'lucide-react';

const Logo: React.FC = () => (
  <div className="flex items-center scale-[1.1] origin-left transition-transform duration-300 hover:scale-[1.15]">
    <div className="bg-[#C80000] px-2 py-1 flex items-center gap-1 font-black tracking-tighter shadow-lg">
      <div className="flex flex-col">
        <span className="text-white text-[15px] leading-none px-0.5">Phone</span>
        <div className="w-full h-[2px] bg-white/80 mt-0.5"></div>
      </div>
      <div className="bg-white px-1 py-0.5 ml-0.5">
        <span className="text-[#C80000] text-[15px] leading-none uppercase">Plus</span>
      </div>
    </div>
  </div>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { config, isAdmin, isEditMode } = useAppContext();
  const location = useLocation();

  const navItems = [
    { name: '홈', path: '/' },
    { name: '내 폰 팔기', path: '/sell' },
    { name: '매입 시세', path: '/prices' },
    { name: '공지사항', path: '/notice' },
  ];

  const certUrl = "https://ictmarket.or.kr:8443/precon/pop_CertIcon.do?PRECON_REQ_ID=PRE0000189102&YN=2";
  const certImg = "https://ictmarket.or.kr:8443/getCertIcon.do?cert_icon=KP24101705590I002";

  return (
    <header className={`fixed ${isEditMode ? 'top-8' : 'top-0'} left-0 right-0 glass z-50 border-b border-gray-100/50 transition-all duration-500`}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
            <a href={certUrl} target="_blank" rel="noreferrer" className="hidden sm:flex items-center ml-1">
              <img src={certImg} alt="사전승낙서" className="h-7 md:h-8 cursor-pointer hover:scale-105 transition-transform" />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-[12px] font-black transition-all hover:text-[#C80000] group ${location.pathname === item.path ? 'text-[#C80000]' : 'text-gray-500'}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-[#C80000] transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            
            <div className="flex items-center gap-4 border-l border-gray-100 pl-6 ml-2">
               {isAdmin ? (
                  <Link to="/admin" className="flex items-center gap-1 text-[9px] font-bold text-red-600 bg-red-50 px-2 py-1 rounded border border-red-100 uppercase animate-pulse">
                    Admin
                  </Link>
               ) : (
                 <Link to="/admin" className="text-gray-300 hover:text-[#C80000] transition-colors">
                   <User size={16} />
                 </Link>
               )}
               <a href={`tel:${config.contactNumber}`} className="flex items-center gap-2 bg-gray-900 hover:bg-[#C80000] text-white px-4 py-2 rounded-full font-black transition-all shadow-lg hover:shadow-red-100 btn-glow text-[11px] uppercase tracking-tight">
                <Phone size={12} fill="white" />
                {config.contactNumber}
              </a>
            </div>
          </nav>

          <button className="md:hidden text-gray-900 p-2 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 absolute w-full left-0 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 py-6 shadow-2xl' : 'max-h-0'}`}>
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-[14px] font-black text-gray-800 flex items-center justify-between py-2 border-b border-gray-50"
            >
              {item.name} <ChevronRight size={14} className="text-[#C80000]" />
            </Link>
          ))}
          <a href={`tel:${config.contactNumber}`} className="bg-[#C80000] text-white p-4 rounded-xl font-black text-center shadow-lg">
            문의하기: {config.contactNumber}
          </a>
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  const { config } = useAppContext();
  const certUrl = "https://ictmarket.or.kr:8443/precon/pop_CertIcon.do?PRECON_REQ_ID=PRE0000189102&YN=2";
  const certImg = "https://ictmarket.or.kr:8443/getCertIcon.do?cert_icon=KP24101705590I002";

  return (
    <footer className="bg-[#F9FAFB] text-gray-900 py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-start mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-gray-400 leading-relaxed text-[11px] font-bold mb-5">
              부산 동래구 중고폰 매입 전문 브랜드.<br/>
              정직한 가치 평가와 투명한 절차로<br/>
              고객님의 소중한 기기를 매입합니다.
            </p>
            <div className="flex space-x-2">
               <a href="https://naver.me/xcnayRi3" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white border border-gray-100 flex items-center justify-center cursor-pointer hover:shadow-md hover:border-[#03C75A] transition-all group">
                 <span className="text-gray-900 font-black text-[12px] group-hover:text-[#03C75A]">N</span>
               </a>
               <a href="https://open.kakao.com/o/sEKLRvQh" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white border border-gray-100 flex items-center justify-center cursor-pointer hover:shadow-md hover:border-[#FEE500] transition-all group">
                 <MessageSquare size={14} className="text-gray-900 group-hover:text-[#FEE500]" />
               </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-[10px] font-black text-[#C80000] uppercase tracking-[0.2em] mb-4">영업안내</h3>
            <div className="space-y-1.5 text-[11px] font-bold text-gray-500">
              <p>평일: 10:00 - 20:00</p>
              <p>토요일: 11:00 - 20:00</p>
              <p className="text-[#C80000] font-black">일요일/공휴일: 예약제 운영</p>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-black text-[#C80000] uppercase tracking-[0.2em] mb-4">오시는길</h3>
            <div className="text-[11px] font-bold text-gray-500 leading-relaxed space-y-1">
              <p>부산광역시 동래구 온천천로 165</p>
              <p>102동 2층 207호 (동래 롯데캐슬 퀸)</p>
              <p className="text-[#C80000] font-black mt-1">동래역 2번 출구 정면</p>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-black text-[#C80000] uppercase tracking-[0.2em] mb-4">비즈니스</h3>
            <div className="text-[11px] font-bold text-gray-500 space-y-1.5 leading-relaxed">
              <p className="text-gray-900 font-black">폰플러스 동래 선불폰&알뜰폰</p>
              <p>대표자: 전미성</p>
              <p>사업자번호: 472-43-01176</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-[10px] font-bold text-gray-300">
              Copyright &copy; {new Date().getFullYear()} PhonePlus. All Rights Reserved.
            </p>
          </div>
          
          <a href={certUrl} target="_blank" rel="noreferrer" className="flex items-center group">
             <img src={certImg} alt="사전승낙서" className="h-10 cursor-pointer grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
          </a>
        </div>
      </div>
    </footer>
  );
};

const PreviewBar: React.FC = () => {
  const { isEditMode, saveChanges, discardChanges } = useAppContext();
  
  if (!isEditMode) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-indigo-600 z-[100] flex items-center justify-center px-4 shadow-xl">
      <div className="flex items-center gap-3 text-white max-w-5xl w-full">
        <div className="flex items-center gap-2">
          <Eye size={12} className="animate-pulse" />
          <span className="text-[8px] font-black tracking-tight uppercase">Preview Mode</span>
        </div>
        <div className="flex-grow"></div>
        <div className="flex items-center gap-2">
          <button 
            onClick={discardChanges}
            className="text-[8px] font-black px-2 py-1 hover:bg-white/10"
          >
            DISCARD
          </button>
          <button 
            onClick={saveChanges}
            className="bg-white text-indigo-600 text-[8px] font-black px-3 py-1 rounded shadow-sm hover:scale-105 transition-transform"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

const MainContent: React.FC = () => {
  const { isEditMode } = useAppContext();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${isEditMode ? 'pt-22 md:pt-24' : 'pt-14 md:pt-16'} transition-all duration-500`}>
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
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <PreviewBar />
        <MainContent />
      </Router>
    </AppProvider>
  );
};

export default App;
