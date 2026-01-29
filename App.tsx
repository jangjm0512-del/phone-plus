
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
  Eye, Check, RotateCcw, ShieldCheck, ExternalLink, Lock
} from 'lucide-react';

const Logo: React.FC = () => (
  <div className="flex items-center transition-transform duration-300 hover:scale-105">
    <div className="bg-[#C80000] px-2 py-1 md:px-2.5 md:py-1.5 flex items-center gap-1.5 font-black tracking-tighter shadow-md">
      <div className="flex flex-col">
        <span className="text-white text-[12px] md:text-[13px] leading-none">Phone</span>
        <div className="w-full h-[1.5px] bg-white/60 mt-0.5"></div>
      </div>
      <div className="bg-white px-1 py-0.5">
        <span className="text-[#C80000] text-[12px] md:text-[13px] leading-none uppercase">Plus</span>
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
    <header className={`fixed ${isEditMode ? 'top-8' : 'top-0'} left-0 right-0 glass z-50 border-b border-gray-100/50 transition-all duration-300`}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex items-center gap-4 md:gap-8">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
            <a href={certUrl} target="_blank" rel="noreferrer" className="hidden sm:flex items-center">
              <img src={certImg} alt="사전승낙서" className="h-7 md:h-8 cursor-pointer hover:opacity-80 transition-opacity" />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-[12px] lg:text-[13px] font-black transition-all hover:text-[#C80000] group ${location.pathname === item.path ? 'text-[#C80000]' : 'text-gray-500'}`}
              >
                {item.name}
                <span className={`absolute -bottom-1.5 left-0 w-0 h-[2px] bg-[#C80000] transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            
            <div className="flex items-center gap-4 border-l border-gray-100 pl-6 ml-2">
               {isAdmin && (
                  <Link to="/admin" className="text-[9px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100 uppercase">
                    Admin Panel
                  </Link>
               )}
               <a href={`tel:${config.contactNumber}`} className="flex items-center gap-2 bg-gray-900 hover:bg-[#C80000] text-white px-4 py-2 rounded-full font-black transition-all shadow-lg text-[11px] uppercase">
                <Phone size={12} fill="white" />
                {config.contactNumber}
              </a>
            </div>
          </nav>

          <button className="md:hidden text-gray-900 p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white/98 backdrop-blur-xl border-b border-gray-100 absolute w-full left-0 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[400px] py-8 shadow-2xl' : 'max-h-0'}`}>
        <div className="container mx-auto px-8 flex flex-col space-y-5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-[15px] font-black text-gray-800 flex items-center justify-between"
            >
              {item.name} <ChevronRight size={16} className="text-[#C80000]" />
            </Link>
          ))}
          <a href={`tel:${config.contactNumber}`} className="bg-[#C80000] text-white p-4 rounded-xl font-black text-center shadow-lg text-base">
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
    <footer className="bg-gray-50 text-gray-900 py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start mb-10">
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-5">
              <Logo />
            </Link>
            <p className="text-gray-400 leading-relaxed text-[11px] font-bold mb-5">
              부산 동래구 중고폰 매입 No.1<br/>
              정직한 가치 평가와 투명한 절차로<br/>
              고객님의 소중한 기기를 매입합니다.
            </p>
            <div className="flex space-x-2">
               <a href="https://naver.me/xcnayRi3" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center rounded-lg hover:border-[#03C75A] transition-all group">
                 <span className="text-gray-900 font-black text-[12px] group-hover:text-[#03C75A]">N</span>
               </a>
               <a href="https://open.kakao.com/o/sEKLRvQh" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center rounded-lg hover:border-[#FEE500] transition-all group">
                 <MessageSquare size={14} className="text-gray-900 group-hover:text-[#FEE500]" />
               </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-[10px] font-black text-[#C80000] uppercase tracking-widest mb-5">영업안내</h3>
            <div className="space-y-1.5 text-[11px] font-bold text-gray-500">
              <p>평일: 10:00 - 20:00</p>
              <p>토요일: 11:00 - 20:00</p>
              <p className="text-[#C80000]">일요일/공휴일: 예약제</p>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-black text-[#C80000] uppercase tracking-widest mb-5">오시는길</h3>
            <div className="text-[11px] font-bold text-gray-500 leading-relaxed">
              <p>부산광역시 동래구 온천천로 165</p>
              <p>102동 2층 207호 (동래 롯데캐슬 퀸)</p>
              <p className="text-gray-400 mt-1.5 text-[10px]">동래역 2번 출구 정면</p>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-black text-[#C80000] uppercase tracking-widest mb-5">사업자 정보</h3>
            <div className="text-[11px] font-bold text-gray-500 space-y-1.5">
              <p className="text-gray-900">상호: 폰플러스 동래역점</p>
              <p>대표자: 전미성</p>
              <p>사업자번호: 472-43-01176</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} PhonePlus. All Rights Reserved.
            </p>
            {/* Admin Login 링크 시인성 강화 */}
            <Link to="/admin" className="text-[10px] font-black text-gray-400 hover:text-[#C80000] transition-all flex items-center gap-1 uppercase tracking-widest">
              <Lock size={10} /> Admin Dashboard
            </Link>
          </div>
          <a href={certUrl} target="_blank" rel="noreferrer" className="flex items-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
             <img src={certImg} alt="사전승낙서" className="h-8" />
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
      <div className="flex items-center gap-4 text-white max-w-6xl w-full">
        <span className="text-[9px] font-black tracking-widest uppercase flex items-center gap-2">
          <Eye size={10} className="animate-pulse" /> Preview Mode
        </span>
        <div className="flex-grow"></div>
        <div className="flex items-center gap-4">
          <button onClick={discardChanges} className="text-[9px] font-black hover:underline">DISCARD</button>
          <button onClick={saveChanges} className="bg-white text-indigo-600 text-[9px] font-black px-3 py-1 rounded">SAVE</button>
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
      <main className={`flex-grow ${isEditMode ? 'pt-20 md:pt-24' : 'pt-14 md:pt-16'} transition-all duration-300`}>
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
