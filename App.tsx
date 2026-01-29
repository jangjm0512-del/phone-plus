
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AppProvider, useAppContext } from './AppContext.tsx';
import Home from './pages/Home.tsx';
import Sell from './pages/Sell.tsx';
import PriceList from './pages/PriceList.tsx';
import Notice from './pages/Notice.tsx';
import AdminDashboard from './pages/AdminDashboard.tsx';
import { Menu, X, Phone, User, Settings, MapPin, Clock, MessageCircle, MessageSquare, ChevronRight, Navigation } from 'lucide-react';

const Logo: React.FC = () => (
  <div className="flex items-center scale-90 md:scale-100 origin-left">
    <div className="bg-[#C80000] px-3 py-2 flex items-center gap-1 font-black tracking-tighter shadow-md">
      <div className="flex flex-col">
        <span className="text-white text-xl md:text-2xl leading-none px-0.5">Phone</span>
        <div className="w-full h-[3px] bg-white/80 mt-1"></div>
      </div>
      <div className="bg-white px-1.5 py-0.5 ml-0.5">
        <span className="text-[#C80000] text-xl md:text-2xl leading-none">Plus</span>
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

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Logo />
            </Link>
            <div className="hidden lg:block border-l border-gray-100 pl-4">
              <a href="https://ictmarket.or.kr:8443/precon/pop_CertIcon.do?PRECON_REQ_ID=PRE0000189102" target="_blank" rel="noreferrer">
                <img 
                  style={{ cursor: 'pointer', height: '32px' }} 
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
                className={`text-sm font-black transition-all hover:text-[#C80000] ${location.pathname === item.path ? 'text-[#C80000]' : 'text-gray-500'}`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4">
               {isAdmin ? (
                  <Link to="/admin" className="flex items-center gap-1 text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1.5 rounded-lg border border-red-100">
                    <Settings size={14} /> 관리
                  </Link>
               ) : (
                 <Link to="/admin" className="text-gray-300 hover:text-[#C80000] transition-colors">
                   <User size={20} />
                 </Link>
               )}
            </div>
            
            <a href={`tel:${config.contactNumber}`} className="flex items-center gap-2 bg-[#C80000] hover:bg-black text-white px-5 py-3 rounded-none font-black transition-all shadow-md text-sm uppercase">
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
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-xl font-black text-gray-800 flex items-center justify-between"
              >
                {item.name} <ChevronRight size={20} className="text-gray-300" />
              </Link>
            ))}
            <a href={`tel:${config.contactNumber}`} className="bg-[#C80000] text-white text-center py-5 rounded-none font-black text-xl shadow-xl mt-4">
              전화 상담하기
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
    <footer className="bg-gray-200 text-gray-900 py-20 border-t border-gray-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-8">
              <Logo />
            </Link>
            <p className="text-gray-700 leading-relaxed text-sm mb-8 font-bold">
              부산 동래구 중고폰 매입 전문 브랜드.<br/>
              정직한 간판 아래 정직한 가격으로<br/>고객님을 맞이하겠습니다.
            </p>
            <div className="flex space-x-3">
               <a href="https://naver.me/xcnayRi3" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white border border-gray-300 rounded-none flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all shadow-sm">
                 <span className="text-gray-900 font-black text-base">N</span>
               </a>
               <a href="https://open.kakao.com/o/sEKLRvQh" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white border border-gray-300 rounded-none flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all shadow-sm">
                 <MessageSquare size={18} className="text-gray-900" />
               </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-black text-[#C80000] uppercase tracking-[0.2em] mb-8">영업 안내</h3>
            <div className="space-y-4 text-sm font-bold text-gray-700">
              <p>평일: 10:00 - 20:00</p>
              <p>토요일: 11:00 - 20:00</p>
              <p className="text-gray-900">일요일: 사전 예약 필수</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black text-[#C80000] uppercase tracking-[0.2em] mb-8">오시는 길</h3>
            <div className="text-sm font-bold text-gray-700 leading-relaxed">
              <p className="mb-1">부산광역시 동래구 온천천로 165</p>
              <p>동래 롯데캐슬 퀸 102동 207호</p>
              <p className="text-gray-900 mt-2">(동래역 2번 출구 바로 앞)</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black text-gray-600 uppercase tracking-[0.2em] mb-8">정보</h3>
            <div className="text-[11px] font-bold text-gray-600 space-y-1">
              <p>상호: 폰플러스 동래역점</p>
              <p>대표: 전미성 | 사업자: 472-43-01176</p>
              <p className="mt-8 text-gray-500">Copyright &copy; {new Date().getFullYear()} PhonePlus.</p>
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
