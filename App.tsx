
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
  <div className="flex items-center scale-[1.1] origin-left transition-transform duration-300">
    <div className="bg-[#C80000] px-1.5 py-0.5 flex items-center gap-1 font-black tracking-tighter shadow-md">
      <div className="flex flex-col">
        <span className="text-white text-base leading-none px-0.5">Phone</span>
        <div className="w-full h-[1.5px] bg-white/80 mt-0.5"></div>
      </div>
      <div className="bg-white px-0.5 py-0.5 ml-0.5">
        <span className="text-[#C80000] text-base leading-none uppercase">Plus</span>
      </div>
    </div>
  </div>
);

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
            className="bg-white text-indigo-600 text-[8px] font-black px-3 py-1 rounded shadow-sm"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

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
    <header className={`fixed ${isEditMode ? 'top-8' : 'top-0'} left-0 right-0 bg-white/98 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300`}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex items-center justify-between h-11 md:h-12">
          <div className="flex items-center gap-4 md:gap-6">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
            {/* 상단 사전승낙서 아이콘 */}
            <a href={certUrl} target="_blank" rel="noreferrer" className="flex items-center ml-1">
              <img src={certImg} alt="사전승낙서" className="h-6 md:h-7 cursor-pointer hover:opacity-80 transition-opacity" />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[11px] font-black transition-all hover:text-[#C80000] ${location.pathname === item.path ? 'text-[#C80000]' : 'text-gray-400'}`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-3">
               {isAdmin ? (
                  <Link to="/admin" className="flex items-center gap-1 text-[8px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded border border-red-100 uppercase">
                    Admin
                  </Link>
               ) : (
                 <Link to="/admin" className="text-gray-200 hover:text-[#C80000] transition-colors">
                   <User size={14} />
                 </Link>
               )}
            </div>
            
            <a href={`tel:${config.contactNumber}`} className="flex items-center gap-1 bg-[#C80000] hover:bg-black text-white px-2.5 py-1.5 rounded-none font-black transition-all shadow-sm text-[10px] uppercase">
              <Phone size={10} />
              {config.contactNumber}
            </a>
          </nav>

          <button className="md:hidden text-gray-900 p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 py-3 px-6 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-[12px] font-black text-gray-800 flex items-center justify-between"
              >
                {item.name} <ChevronRight size={12} className="text-gray-200" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  const { config } = useAppContext();
  const certUrl = "https://ictmarket.or.kr:8443/precon/pop_CertIcon.do?PRECON_REQ_ID=PRE0000189102&YN=2";
  const certImg = "https://ictmarket.or.kr:8443/getCertIcon.do?cert_icon=KP24101705590I002";

  return (
    <footer className="bg-white text-gray-900 py-6 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-start mb-6">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-2">
              <Logo />
            </Link>
            <p className="text-gray-400 leading-tight text-[10px] font-bold mb-3">
              부산 동래구 중고폰 매입 전문 브랜드.<br/>
              정직한 가격으로 보답하겠습니다.
            </p>
            <div className="flex space-x-1.5">
               <a href="https://naver.me/xcnayRi3" target="_blank" rel="noreferrer" className="w-6 h-6 bg-gray-50 border border-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all">
                 <span className="text-gray-900 font-black text-[9px]">N</span>
               </a>
               <a href="https://open.kakao.com/o/sEKLRvQh" target="_blank" rel="noreferrer" className="w-6 h-6 bg-gray-50 border border-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all">
                 <MessageSquare size={10} className="text-gray-900" />
               </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-[8px] font-black text-[#C80000] uppercase tracking-[0.2em] mb-2">영업안내</h3>
            <div className="space-y-0.5 text-[10px] font-bold text-gray-500">
              <p>평일: 10:00 - 20:00</p>
              <p>토요일: 11:00 - 20:00</p>
              <p className="text-[#C80000]">일요일/공휴일: 예약제</p>
            </div>
          </div>

          <div>
            <h3 className="text-[8px] font-black text-[#C80000] uppercase tracking-[0.2em] mb-2">오시는길</h3>
            <div className="text-[10px] font-bold text-gray-500 leading-tight">
              <p>부산광역시 동래구 온천천로 165</p>
              <p>102동 2층 207호 (동래 롯데캐슬 퀸)</p>
              <p className="text-gray-400 mt-1 text-[8px]">동래역 2번 출구 앞</p>
            </div>
          </div>

          <div>
            <h3 className="text-[8px] font-black text-[#C80000] uppercase tracking-[0.2em] mb-2">사업자 정보</h3>
            <div className="text-[10px] font-bold text-gray-500 space-y-0.5 leading-tight">
              <p className="text-gray-900">상호: 부산 중고폰 매입 폰플러스 동래 선불폰&알뜰폰</p>
              <p>대표자: 전미성</p>
              <p>사업자등록번호: 472-43-01176</p>
            </div>
          </div>
        </div>

        {/* 푸터 최하단 바 */}
        <div className="pt-4 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[8px] font-bold text-gray-300">
            Copyright &copy; {new Date().getFullYear()} PhonePlus. All Rights Reserved.
          </p>
          
          {/* 하단 사전승낙서 아이콘 */}
          <a href={certUrl} target="_blank" rel="noreferrer" className="flex items-center">
             <img src={certImg} alt="사전승낙서" className="h-8 cursor-pointer hover:opacity-80 transition-opacity" />
          </a>
        </div>
      </div>
    </footer>
  );
};

const MainContent: React.FC = () => {
  const { isEditMode } = useAppContext();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${isEditMode ? 'pt-19 md:pt-20' : 'pt-11 md:pt-12'} transition-all duration-300`}>
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
