
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
  // --- APPLE iPHONE 17 SERIES (이미지 기반) ---
  { id: 'ap-17pm-2tb', brand: 'Apple', model: '아이폰 17 PROMAX', capacity: '2TB', maxPrice: 2090000, minPrice: 1620000, isHot: true },
  { id: 'ap-17pm-1tb', brand: 'Apple', model: '아이폰 17 PROMAX', capacity: '1TB', maxPrice: 2090000, minPrice: 1570000 },
  { id: 'ap-17pm-512', brand: 'Apple', model: '아이폰 17 PROMAX', capacity: '512GB', maxPrice: 1940000, minPrice: 1520000 },
  { id: 'ap-17pm-256', brand: 'Apple', model: '아이폰 17 PROMAX', capacity: '256GB', maxPrice: 1790000, minPrice: 1470000 },
  { id: 'ap-17p-1tb', brand: 'Apple', model: '아이폰 17 PRO', capacity: '1TB', maxPrice: 1760000, minPrice: 1270000 },
  { id: 'ap-17p-512', brand: 'Apple', model: '아이폰 17 PRO', capacity: '512GB', maxPrice: 1610000, minPrice: 1170000 },
  { id: 'ap-17p-256', brand: 'Apple', model: '아이폰 17 PRO', capacity: '256GB', maxPrice: 1460000, minPrice: 1070000 },
  { id: 'ap-17a-1tb', brand: 'Apple', model: '아이폰 17 AIR', capacity: '1TB', maxPrice: 1210000, minPrice: 850000 },
  { id: 'ap-17a-512', brand: 'Apple', model: '아이폰 17 AIR', capacity: '512GB', maxPrice: 1150000, minPrice: 880000 },
  { id: 'ap-17a-256', brand: 'Apple', model: '아이폰 17 AIR', capacity: '256GB', maxPrice: 1030000, minPrice: 700000 },
  { id: 'ap-17-512', brand: 'Apple', model: '아이폰 17', capacity: '512GB', maxPrice: 1090000, minPrice: 870000 },
  { id: 'ap-17-256', brand: 'Apple', model: '아이폰 17', capacity: '256GB', maxPrice: 990000, minPrice: 770000 },

  // --- APPLE iPHONE 16 SERIES ---
  { id: 'ap-16pm-512', brand: 'Apple', model: '아이폰 16 PROMAX', capacity: '512GB', maxPrice: 1510000, minPrice: 1130000 },
  { id: 'ap-16pm-256', brand: 'Apple', model: '아이폰 16 PROMAX', capacity: '256GB', maxPrice: 1370000, minPrice: 1100000 },
  { id: 'ap-16pm-128', brand: 'Apple', model: '아이폰 16 PROMAX', capacity: '128GB', maxPrice: 1240000, minPrice: 1020000 },
  { id: 'ap-16p-1tb', brand: 'Apple', model: '아이폰 16 PRO', capacity: '1TB', maxPrice: 1150000, minPrice: 880000 },
  { id: 'ap-16p-512', brand: 'Apple', model: '아이폰 16 PRO', capacity: '512GB', maxPrice: 1120000, minPrice: 870000 },
  { id: 'ap-16p-256', brand: 'Apple', model: '아이폰 16 PRO', capacity: '256GB', maxPrice: 1030000, minPrice: 850000 },
  { id: 'ap-16p-128', brand: 'Apple', model: '아이폰 16 PRO', capacity: '128GB', maxPrice: 940000, minPrice: 790000 },
  { id: 'ap-16pl-512', brand: 'Apple', model: '아이폰 16 PLUS', capacity: '512GB', maxPrice: 1060000, minPrice: 720000 },
  { id: 'ap-16-512', brand: 'Apple', model: '아이폰 16', capacity: '512GB', maxPrice: 950000, minPrice: 680000 },

  // --- APPLE iPHONE 15 SERIES ---
  { id: 'ap-15pm-1tb', brand: 'Apple', model: '아이폰 15 PROMAX', capacity: '1TB', maxPrice: 1110000, minPrice: 920000 },
  { id: 'ap-15pm-512', brand: 'Apple', model: '아이폰 15 PROMAX', capacity: '512GB', maxPrice: 1050000, minPrice: 870000 },
  { id: 'ap-15p-256', brand: 'Apple', model: '아이폰 15 PRO', capacity: '256GB', maxPrice: 890000, minPrice: 690000 },
  { id: 'ap-15-256', brand: 'Apple', model: '아이폰 15', capacity: '256GB', maxPrice: 680000, minPrice: 520000 },

  // --- APPLE iPHONE 14 SERIES ---
  { id: 'ap-14pm-256', brand: 'Apple', model: '아이폰 14 PROMAX', capacity: '256GB', maxPrice: 860000, minPrice: 595000 },
  { id: 'ap-14p-128', brand: 'Apple', model: '아이폰 14 PRO', capacity: '128GB', maxPrice: 630000, minPrice: 460000 },
  { id: 'ap-14-128', brand: 'Apple', model: '아이폰 14', capacity: '128GB', maxPrice: 420000, minPrice: 325000 },

  // --- SAMSUNG GALAXY S SERIES (이미지 기반) ---
  { id: 'ss-s25u', brand: 'Samsung', model: '갤럭시 S25 울트라', capacity: '256G/512G', maxPrice: 810000, minPrice: 650000, isHot: true },
  { id: 'ss-s25p', brand: 'Samsung', model: '갤럭시 S25+', capacity: '256GB', maxPrice: 670000, minPrice: 500000 },
  { id: 'ss-s25', brand: 'Samsung', model: '갤럭시 S25', capacity: '256GB', maxPrice: 620000, minPrice: 480000 },
  { id: 'ss-s24u', brand: 'Samsung', model: '갤럭시 S24 울트라', capacity: '256G/512G', maxPrice: 810000, minPrice: 705000 },
  { id: 'ss-s24p', brand: 'Samsung', model: '갤럭시 S24+', capacity: '256GB', maxPrice: 500000, minPrice: 430000 },
  { id: 'ss-s24', brand: 'Samsung', model: '갤럭시 S24', capacity: '256GB', maxPrice: 470000, minPrice: 410000 },
  { id: 'ss-s23u', brand: 'Samsung', model: '갤럭시 S23 울트라', capacity: '256G/512G', maxPrice: 600000, minPrice: 480000 },
  { id: 'ss-s23p', brand: 'Samsung', model: '갤럭시 S23+', capacity: '256GB', maxPrice: 400000, minPrice: 315000 },
  { id: 'ss-s23', brand: 'Samsung', model: '갤럭시 S23', capacity: '256GB', maxPrice: 350000, minPrice: 250000 },
  { id: 'ss-s22u', brand: 'Samsung', model: '갤럭시 S22 울트라', capacity: '256GB', maxPrice: 450000, minPrice: 345000 },
  { id: 'ss-s21u', brand: 'Samsung', model: '갤럭시 S21 울트라', capacity: '256GB', maxPrice: 340000, minPrice: 270000 },
  { id: 'ss-n20u', brand: 'Samsung', model: '갤럭시 노트 20 울트라', capacity: '256GB', maxPrice: 280000, minPrice: 180000 },
  { id: 'ss-n10p', brand: 'Samsung', model: '갤럭시 노트 10+', capacity: '256GB', maxPrice: 210000, minPrice: 160000 },

  // --- SAMSUNG GALAXY Z SERIES (이미지 우측 상단 '꿀단지' 기반) ---
  { id: 'ss-fold7', brand: 'Samsung', model: '갤럭시 폴드 7', capacity: '256G/512G', maxPrice: 1500000, minPrice: 1140000, isHot: true },
  { id: 'ss-fold6', brand: 'Samsung', model: '갤럭시 폴드 6', capacity: '256G/512G', maxPrice: 930000, minPrice: 740000 },
  { id: 'ss-fold5', brand: 'Samsung', model: '갤럭시 폴드 5', capacity: '256G/512G', maxPrice: 610000, minPrice: 480000 },
  { id: 'ss-fold4', brand: 'Samsung', model: '갤럭시 폴드 4', capacity: '256G/512G', maxPrice: 530000, minPrice: 360000 },
  { id: 'ss-fold3', brand: 'Samsung', model: '갤럭시 폴드 3', capacity: '256G/512G', maxPrice: 470000, minPrice: 350000 },
  { id: 'ss-flip7', brand: 'Samsung', model: '갤럭시 플립 7', capacity: '256G/512G', maxPrice: 700000, minPrice: 530000 },
  { id: 'ss-flip6', brand: 'Samsung', model: '갤럭시 플립 6', capacity: '256G/512G', maxPrice: 500000, minPrice: 340000 },
  { id: 'ss-flip5', brand: 'Samsung', model: '갤럭시 플립 5', capacity: '256G/512G', maxPrice: 350000, minPrice: 240000 },
  { id: 'ss-flip4', brand: 'Samsung', model: '갤럭시 플립 4', capacity: '256G/512G', maxPrice: 240000, minPrice: 160000 },
  { id: 'ss-flip3', brand: 'Samsung', model: '갤럭시 플립 3', capacity: '256G/512G', maxPrice: 210000, minPrice: 130000 },
];

const defaultPosts: Post[] = [
  { id: '1', title: '폰플러스 동래역점 2월 매입 단가표 공지', content: '부산 지역 최고가 매입을 약속드리는 폰플러스 동래역점의 2월 실시간 시세가 업데이트되었습니다. 최신 아이폰 17 시리즈부터 갤럭시 S25까지 실시간 변동 시세를 확인하세요.', date: '2025-02-01', author: '관리자', category: '공지사항' },
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
