
import React, { createContext, useContext, useState } from 'react';
import { AppState, PriceItem, Post, SiteConfig } from './types';

interface AppContextType extends AppState {
  setPrices: React.Dispatch<React.SetStateAction<PriceItem[]>>;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  setConfig: React.Dispatch<React.SetStateAction<SiteConfig>>;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
}

const defaultPrices: PriceItem[] = [
  // --- APPLE iPHONE (이미지 단가 반영, 단위: 만원 -> 원 환산) ---
  { id: 'ap-17pm', brand: 'Apple', model: '아이폰 17 PROMAX', capacity: '256GB', maxPrice: 1790000, minPrice: 1470000, isHot: true },
  { id: 'ap-17p', brand: 'Apple', model: '아이폰 17 PRO', capacity: '256GB', maxPrice: 1460000, minPrice: 1070000 },
  { id: 'ap-17a', brand: 'Apple', model: '아이폰 17 AIR', capacity: '256GB', maxPrice: 1030000, minPrice: 700000 },
  { id: 'ap-17', brand: 'Apple', model: '아이폰 17', capacity: '256GB', maxPrice: 990000, minPrice: 770000 },
  { id: 'ap-16pm', brand: 'Apple', model: '아이폰 16 PROMAX', capacity: '256GB', maxPrice: 1240000, minPrice: 1020000 },
  { id: 'ap-16p', brand: 'Apple', model: '아이폰 16 PRO', capacity: '256GB', maxPrice: 1030000, minPrice: 850000 },
  { id: 'ap-16pl', brand: 'Apple', model: '아이폰 16 PLUS', capacity: '256GB', maxPrice: 960000, minPrice: 690000 },
  { id: 'ap-16', brand: 'Apple', model: '아이폰 16', capacity: '256GB', maxPrice: 850000, minPrice: 660000 },
  { id: 'ap-15pm', brand: 'Apple', model: '아이폰 15 PROMAX', capacity: '256GB', maxPrice: 1050000, minPrice: 870000 },
  { id: 'ap-15p', brand: 'Apple', model: '아이폰 15 PRO', capacity: '256GB', maxPrice: 890000, minPrice: 690000 },
  { id: 'ap-15pl', brand: 'Apple', model: '아이폰 15 PLUS', capacity: '256GB', maxPrice: 720000, minPrice: 555000 },
  { id: 'ap-15', brand: 'Apple', model: '아이폰 15', capacity: '256GB', maxPrice: 680000, minPrice: 520000 },
  { id: 'ap-14pm', brand: 'Apple', model: '아이폰 14 PROMAX', capacity: '256GB', maxPrice: 860000, minPrice: 595000 },
  { id: 'ap-14p', brand: 'Apple', model: '아이폰 14 PRO', capacity: '128GB', maxPrice: 630000, minPrice: 460000 },
  { id: 'ap-14', brand: 'Apple', model: '아이폰 14', capacity: '128GB', maxPrice: 420000, minPrice: 325000 },
  { id: 'ap-13pm', brand: 'Apple', model: '아이폰 13 PROMAX', capacity: '128GB', maxPrice: 610000, minPrice: 405000 },
  { id: 'ap-13p', brand: 'Apple', model: '아이폰 13 PRO', capacity: '128GB', maxPrice: 530000, minPrice: 385000 },
  { id: 'ap-13', brand: 'Apple', model: '아이폰 13', capacity: '128GB', maxPrice: 360000, minPrice: 275000 },
  { id: 'ap-12pm', brand: 'Apple', model: '아이폰 12 PROMAX', capacity: '128GB', maxPrice: 480000, minPrice: 270000 },
  { id: 'ap-12p', brand: 'Apple', model: '아이폰 12 PRO', capacity: '128GB', maxPrice: 380000, minPrice: 230000 },
  { id: 'ap-12', brand: 'Apple', model: '아이폰 12', capacity: '128GB', maxPrice: 260000, minPrice: 165000 },
  { id: 'ap-11pm', brand: 'Apple', model: '아이폰 11 PROMAX', capacity: '64GB', maxPrice: 310000, minPrice: 190000 },
  { id: 'ap-11p', brand: 'Apple', model: '아이폰 11 PRO', capacity: '64GB', maxPrice: 260000, minPrice: 170000 },
  { id: 'ap-11', brand: 'Apple', model: '아이폰 11', capacity: '64GB', maxPrice: 240000, minPrice: 140000 },
  { id: 'ap-xsmax', brand: 'Apple', model: '아이폰 XS MAX', capacity: '64GB', maxPrice: 170000, minPrice: 105000 },
  { id: 'ap-xs', brand: 'Apple', model: '아이폰 XS', capacity: '64GB', maxPrice: 130000, minPrice: 80000 },
  { id: 'ap-xr', brand: 'Apple', model: '아이폰 XR', capacity: '64GB', maxPrice: 125000, minPrice: 75000 },
  { id: 'ap-x', brand: 'Apple', model: '아이폰 X', capacity: '64GB', maxPrice: 100000, minPrice: 50000 },
  { id: 'ap-se3', brand: 'Apple', model: '아이폰 SE3', capacity: '128GB', maxPrice: 200000, minPrice: 125000 },
  { id: 'ap-se2', brand: 'Apple', model: '아이폰 SE2', capacity: '64GB', maxPrice: 110000, minPrice: 50000 },

  // --- SAMSUNG GALAXY S SERIES ---
  { id: 'ss-s25u', brand: 'Samsung', model: '갤럭시 S25 울트라', capacity: '256GB', maxPrice: 810000, minPrice: 650000, isHot: true },
  { id: 'ss-s25p', brand: 'Samsung', model: '갤럭시 S25+', capacity: '256GB', maxPrice: 670000, minPrice: 500000 },
  { id: 'ss-s25', brand: 'Samsung', model: '갤럭시 S25', capacity: '256GB', maxPrice: 620000, minPrice: 480000 },
  { id: 'ss-s24u', brand: 'Samsung', model: '갤럭시 S24 울트라', capacity: '256GB', maxPrice: 810000, minPrice: 705000 },
  { id: 'ss-s24p', brand: 'Samsung', model: '갤럭시 S24+', capacity: '256GB', maxPrice: 500000, minPrice: 430000 },
  { id: 'ss-s24', brand: 'Samsung', model: '갤럭시 S24', capacity: '256GB', maxPrice: 470000, minPrice: 410000 },
  { id: 'ss-s23u', brand: 'Samsung', model: '갤럭시 S23 울트라', capacity: '256GB', maxPrice: 600000, minPrice: 480000 },
  { id: 'ss-s23p', brand: 'Samsung', model: '갤럭시 S23+', capacity: '256GB', maxPrice: 400000, minPrice: 315000 },
  { id: 'ss-s23', brand: 'Samsung', model: '갤럭시 S23', capacity: '256GB', maxPrice: 350000, minPrice: 250000 },
  { id: 'ss-s22u', brand: 'Samsung', model: '갤럭시 S22 울트라', capacity: '256GB', maxPrice: 450000, minPrice: 345000 },
  { id: 'ss-s22p', brand: 'Samsung', model: '갤럭시 S22+', capacity: '256GB', maxPrice: 260000, minPrice: 180000 },
  { id: 'ss-s22', brand: 'Samsung', model: '갤럭시 S22', capacity: '256GB', maxPrice: 210000, minPrice: 140000 },
  { id: 'ss-s21u', brand: 'Samsung', model: '갤럭시 S21 울트라', capacity: '256GB', maxPrice: 340000, minPrice: 270000 },
  { id: 'ss-s21p', brand: 'Samsung', model: '갤럭시 S21+', capacity: '256GB', maxPrice: 220000, minPrice: 170000 },
  { id: 'ss-s21', brand: 'Samsung', model: '갤럭시 S21', capacity: '256GB', maxPrice: 190000, minPrice: 130000 },
  { id: 'ss-s20u', brand: 'Samsung', model: '갤럭시 S20 울트라', capacity: '256GB', maxPrice: 240000, minPrice: 170000 },
  { id: 'ss-s10p', brand: 'Samsung', model: '갤럭시 S10 5G', capacity: '256GB', maxPrice: 130000, minPrice: 100000 },
  { id: 'ss-s9p', brand: 'Samsung', model: '갤럭시 S9+', capacity: '64GB', maxPrice: 80000, minPrice: 70000 },
  { id: 'ss-s9', brand: 'Samsung', model: '갤럭시 S9', capacity: '64GB', maxPrice: 70000, minPrice: 60000 },
  { id: 'ss-s8', brand: 'Samsung', model: '갤럭시 S8', capacity: '64GB', maxPrice: 50000, minPrice: 30000 },

  // --- SAMSUNG GALAXY FOLD / FLIP SERIES ---
  { id: 'ss-fold7', brand: 'Samsung', model: '갤럭시 폴드 7', capacity: '256GB', maxPrice: 1500000, minPrice: 1140000, isHot: true },
  { id: 'ss-fold6', brand: 'Samsung', model: '갤럭시 폴드 6', capacity: '256GB', maxPrice: 930000, minPrice: 740000 },
  { id: 'ss-fold5', brand: 'Samsung', model: '갤럭시 폴드 5', capacity: '256GB', maxPrice: 610000, minPrice: 480000 },
  { id: 'ss-fold4', brand: 'Samsung', model: '갤럭시 폴드 4', capacity: '256GB', maxPrice: 530000, minPrice: 360000 },
  { id: 'ss-fold3', brand: 'Samsung', model: '갤럭시 폴드 3', capacity: '256GB', maxPrice: 470000, minPrice: 350000 },
  { id: 'ss-fold2', brand: 'Samsung', model: '갤럭시 폴드 2', capacity: '256GB', maxPrice: 380000, minPrice: 250000 },
  { id: 'ss-fold1', brand: 'Samsung', model: '갤럭시 폴드', capacity: '512GB', maxPrice: 300000, minPrice: 140000 },
  { id: 'ss-flip7', brand: 'Samsung', model: '갤럭시 플립 7', capacity: '256GB', maxPrice: 700000, minPrice: 530000, isHot: true },
  { id: 'ss-flip6', brand: 'Samsung', model: '갤럭시 플립 6', capacity: '256GB', maxPrice: 500000, minPrice: 340000 },
  { id: 'ss-flip5', brand: 'Samsung', model: '갤럭시 플립 5', capacity: '256GB', maxPrice: 350000, minPrice: 240000 },
  { id: 'ss-flip4', brand: 'Samsung', model: '갤럭시 플립 4', capacity: '256GB', maxPrice: 240000, minPrice: 160000 },
  { id: 'ss-flip3', brand: 'Samsung', model: '갤럭시 플립 3', capacity: '256GB', maxPrice: 210000, minPrice: 130000 },
  { id: 'ss-flip2', brand: 'Samsung', model: '갤럭시 플립 2', capacity: '256GB', maxPrice: 140000, minPrice: 65000 },
  { id: 'ss-flip1', brand: 'Samsung', model: '갤럭시 플립 1', capacity: '256GB', maxPrice: 120000, minPrice: 65000 },

  // --- OTHER GALAXY MODELS ---
  { id: 'ss-n20u', brand: 'Samsung', model: '갤럭시 노트 20 울트라', capacity: '256GB', maxPrice: 280000, minPrice: 180000 },
  { id: 'ss-n10p', brand: 'Samsung', model: '갤럭시 노트 10+', capacity: '256GB', maxPrice: 210000, minPrice: 160000 },
  { id: 'ss-a34', brand: 'Samsung', model: '갤럭시 A34', capacity: '128GB', maxPrice: 120000, minPrice: 80000 },
  { id: 'ss-a54', brand: 'Samsung', model: '갤럭시 A54', capacity: '128GB', maxPrice: 170000, minPrice: 120000 },
];

const defaultPosts: Post[] = [
  { id: '1', title: '폰플러스 동래역점 2월 매입 단가표 공지', content: '부산 지역 최고가 매입을 약속드리는 폰플러스 동래역점의 2월 실시간 시세가 업데이트되었습니다.', date: '2025-02-01', author: '관리자', category: '공지사항' },
];

const defaultConfig: SiteConfig = {
  siteName: '폰플러스 동래역점',
  contactNumber: '010-4885-1544',
  heroTitle: '부산 중고폰 최고가 매입',
  heroSubtitle: '동래역 2번 출구 앞(캐슬퀸 207호)! 투명한 검수와 즉시 입금을 약속합니다.',
  themeColor: '#FFD700',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [prices, setPrices] = useState<PriceItem[]>(defaultPrices);
  const [posts, setPosts] = useState<Post[]>(defaultPosts);
  const [config, setConfig] = useState<SiteConfig>(defaultConfig);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ prices, setPrices, posts, setPosts, config, setConfig, isAdmin, setIsAdmin }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
