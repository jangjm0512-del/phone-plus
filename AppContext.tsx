
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppState, PriceItem, Post, SiteConfig } from './types';

interface AppContextType extends AppState {
  setPrices: React.Dispatch<React.SetStateAction<PriceItem[]>>;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  setConfig: React.Dispatch<React.SetStateAction<SiteConfig>>;
  
  isEditMode: boolean;
  setIsEditMode: (val: boolean) => void;
  draftPrices: PriceItem[];
  setDraftPrices: React.Dispatch<React.SetStateAction<PriceItem[]>>;
  draftPosts: Post[];
  setDraftPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  draftConfig: SiteConfig;
  setDraftConfig: React.Dispatch<React.SetStateAction<SiteConfig>>;
  
  saveChanges: () => void;
  discardChanges: () => void;
  startEditing: () => void;

  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
}

const defaultPrices: PriceItem[] = [
  // --- Apple iPhone 17 Series (Speculative based on Sheet Top Row) ---
  { id: 'ap-17pm-512', brand: 'Apple', model: '아이폰 17 PROMAX', capacity: '512GB', maxPrice: 1940000, minPrice: 1470000, isHot: true },
  { id: 'ap-17p-256', brand: 'Apple', model: '아이폰 17 PRO', capacity: '256GB', maxPrice: 1460000, minPrice: 1020000 },
  { id: 'ap-17a-256', brand: 'Apple', model: '아이폰 17 AIR', capacity: '256GB', maxPrice: 1030000, minPrice: 700000 },
  { id: 'ap-17-256', brand: 'Apple', model: '아이폰 17', capacity: '256GB', maxPrice: 990000, minPrice: 770000 },

  // --- Apple iPhone 16 Series ---
  { id: 'ap-16pm-512', brand: 'Apple', model: '아이폰 16 PROMAX', capacity: '512GB', maxPrice: 1480000, minPrice: 1180000, isHot: true },
  { id: 'ap-16pm-256', brand: 'Apple', model: '아이폰 16 PROMAX', capacity: '256GB', maxPrice: 1370000, minPrice: 1100000 },
  { id: 'ap-16p-256', brand: 'Apple', model: '아이폰 16 PRO', capacity: '256GB', maxPrice: 1090000, minPrice: 880000 },
  { id: 'ap-16p-128', brand: 'Apple', model: '아이폰 16 PRO', capacity: '128GB', maxPrice: 1060000, minPrice: 850000 },
  { id: 'ap-16plus-256', brand: 'Apple', model: '아이폰 16 PLUS', capacity: '256GB', maxPrice: 960000, minPrice: 720000 },
  { id: 'ap-16-128', brand: 'Apple', model: '아이폰 16', capacity: '128GB', maxPrice: 750000, minPrice: 560000 },

  // --- Apple iPhone 15 Series ---
  { id: 'ap-15pm-256', brand: 'Apple', model: '아이폰 15 PROMAX', capacity: '256GB', maxPrice: 1080000, minPrice: 860000 },
  { id: 'ap-15p-256', brand: 'Apple', model: '아이폰 15 PRO', capacity: '256GB', maxPrice: 910000, minPrice: 680000 },
  { id: 'ap-15p-128', brand: 'Apple', model: '아이폰 15 PRO', capacity: '128GB', maxPrice: 850000, minPrice: 630000 },
  { id: 'ap-15-128', brand: 'Apple', model: '아이폰 15', capacity: '128GB', maxPrice: 600000, minPrice: 475000 },

  // --- Apple iPhone 14/13/12/11 ---
  { id: 'ap-14pm-256', brand: 'Apple', model: '아이폰 14 PROMAX', capacity: '256GB', maxPrice: 890000, minPrice: 670000 },
  { id: 'ap-14p-128', brand: 'Apple', model: '아이폰 14 PRO', capacity: '128GB', maxPrice: 690000, minPrice: 490000 },
  { id: 'ap-13pm-256', brand: 'Apple', model: '아이폰 13 PROMAX', capacity: '256GB', maxPrice: 690000, minPrice: 505000 },
  { id: 'ap-13-128', brand: 'Apple', model: '아이폰 13', capacity: '128GB', maxPrice: 380000, minPrice: 275000 },
  { id: 'ap-12pm-128', brand: 'Apple', model: '아이폰 12 PROMAX', capacity: '128GB', maxPrice: 480000, minPrice: 300000 },
  { id: 'ap-11-128', brand: 'Apple', model: '아이폰 11', capacity: '128GB', maxPrice: 230000, minPrice: 140000 },

  // --- Apple Older Models (XS ~ 6) ---
  { id: 'ap-xsmax-256', brand: 'Apple', model: '아이폰 XS MAX', capacity: '256GB', maxPrice: 160000, minPrice: 110000 },
  { id: 'ap-xs-256', brand: 'Apple', model: '아이폰 XS', capacity: '256GB', maxPrice: 140000, minPrice: 85000 },
  { id: 'ap-xr-128', brand: 'Apple', model: '아이폰 XR', capacity: '128GB', maxPrice: 125000, minPrice: 65000 },
  { id: 'ap-x-64', brand: 'Apple', model: '아이폰 X', capacity: '64GB', maxPrice: 100000, minPrice: 60000 },
  { id: 'ap-8p-256', brand: 'Apple', model: '아이폰 8 PLUS', capacity: '256GB', maxPrice: 80000, minPrice: 50000 },
  { id: 'ap-8-64', brand: 'Apple', model: '아이폰 8', capacity: '64GB', maxPrice: 55000, minPrice: 30000 },
  { id: 'ap-7p-128', brand: 'Apple', model: '아이폰 7 PLUS', capacity: '128GB', maxPrice: 40000, minPrice: 25000 },
  { id: 'ap-7-32', brand: 'Apple', model: '아이폰 7', capacity: '32GB', maxPrice: 25000, minPrice: 15000 },
  { id: 'ap-6s-64', brand: 'Apple', model: '아이폰 6S', capacity: '64GB', maxPrice: 20000, minPrice: 10000 },
  { id: 'ap-6-64', brand: 'Apple', model: '아이폰 6', capacity: '64GB', maxPrice: 15000, minPrice: 5000 },
  { id: 'ap-se3-128', brand: 'Apple', model: '아이폰 SE3', capacity: '128GB', maxPrice: 200000, minPrice: 125000 },
  { id: 'ap-se2-128', brand: 'Apple', model: '아이폰 SE2', capacity: '128GB', maxPrice: 110000, minPrice: 70000 },

  // --- Samsung Galaxy S25 (Speculative) ---
  { id: 'ss-s25u-256', brand: 'Samsung', model: '갤럭시 S25 울트라', capacity: '256GB', maxPrice: 1250000, minPrice: 1050000, isHot: true },
  { id: 'ss-s25-256', brand: 'Samsung', model: '갤럭시 S25', capacity: '256GB', maxPrice: 800000, minPrice: 650000 },

  // --- Samsung Galaxy S24 Series ---
  { id: 'ss-s24u-512', brand: 'Samsung', model: '갤럭시 S24 울트라', capacity: '512GB', maxPrice: 860000, minPrice: 745000, isHot: true },
  { id: 'ss-s24u-256', brand: 'Samsung', model: '갤럭시 S24 울트라', capacity: '256GB', maxPrice: 810000, minPrice: 695000 },
  { id: 'ss-s24p-256', brand: 'Samsung', model: '갤럭시 S24+', capacity: '256GB', maxPrice: 550000, minPrice: 450000 },
  { id: 'ss-s24-256', brand: 'Samsung', model: '갤럭시 S24', capacity: '256GB', maxPrice: 470000, minPrice: 415000 },

  // --- Samsung Galaxy S23/S22/S21/S20 ---
  { id: 'ss-s23u-256', brand: 'Samsung', model: '갤럭시 S23 울트라', capacity: '256GB', maxPrice: 610000, minPrice: 470000 },
  { id: 'ss-s22u-256', brand: 'Samsung', model: '갤럭시 S22 울트라', capacity: '256GB', maxPrice: 380000, minPrice: 270000 },
  { id: 'ss-s21u-256', brand: 'Samsung', model: '갤럭시 S21 울트라', capacity: '256GB', maxPrice: 250000, minPrice: 180000 },
  { id: 'ss-s20u-256', brand: 'Samsung', model: '갤럭시 S20 울트라', capacity: '256GB', maxPrice: 170000, minPrice: 120000 },

  // --- Samsung Galaxy S10/S9/S8 ---
  { id: 'ss-s10-128', brand: 'Samsung', model: '갤럭시 S10', capacity: '128GB', maxPrice: 110000, minPrice: 75000 },
  { id: 'ss-s9-64', brand: 'Samsung', model: '갤럭시 S9', capacity: '64GB', maxPrice: 85000, minPrice: 55000 },
  { id: 'ss-s8-64', brand: 'Samsung', model: '갤럭시 S8', capacity: '64GB', maxPrice: 65000, minPrice: 45000 },

  // --- Samsung Note Series ---
  { id: 'ss-n20u-256', brand: 'Samsung', model: '갤럭시 노트 20 울트라', capacity: '256GB', maxPrice: 280000, minPrice: 230000, isHot: true },
  { id: 'ss-n20-256', brand: 'Samsung', model: '갤럭시 노트 20', capacity: '256GB', maxPrice: 160000, minPrice: 105000 },
  { id: 'ss-n10p-256', brand: 'Samsung', model: '갤럭시 노트 10+', capacity: '256GB', maxPrice: 180000, minPrice: 130000 },
  { id: 'ss-n10-256', brand: 'Samsung', model: '갤럭시 노트 10', capacity: '256GB', maxPrice: 110000, minPrice: 75000 },
  { id: 'ss-n9-128', brand: 'Samsung', model: '갤럭시 노트 9', capacity: '128GB', maxPrice: 105000, minPrice: 65000 },
  { id: 'ss-n8-64', brand: 'Samsung', model: '갤럭시 노트 8', capacity: '64GB', maxPrice: 75000, minPrice: 45000 },

  // --- Samsung Fold/Flip Series 1 ~ 7 ---
  { id: 'ss-f7-256', brand: 'Samsung', model: '갤럭시 Z 폴드 7', capacity: '256GB', maxPrice: 1450000, minPrice: 1200000, isHot: true },
  { id: 'ss-fl7-256', brand: 'Samsung', model: '갤럭시 Z 플립 7', capacity: '256GB', maxPrice: 750000, minPrice: 600000, isHot: true },
  { id: 'ss-f6-256', brand: 'Samsung', model: '갤럭시 Z 폴드 6', capacity: '256GB', maxPrice: 1130000, minPrice: 1000000 },
  { id: 'ss-fl6-256', brand: 'Samsung', model: '갤럭시 Z 플립 6', capacity: '256GB', maxPrice: 530000, minPrice: 440000 },
  { id: 'ss-f5-256', brand: 'Samsung', model: '갤럭시 Z 폴드 5', capacity: '256GB', maxPrice: 700000, minPrice: 610000 },
  { id: 'ss-f4-256', brand: 'Samsung', model: '갤럭시 Z 폴드 4', capacity: '256GB', maxPrice: 420000, minPrice: 330000 },
  { id: 'ss-f3-256', brand: 'Samsung', model: '갤럭시 Z 폴드 3', capacity: '256GB', maxPrice: 280000, minPrice: 190000 },
  { id: 'ss-f2-256', brand: 'Samsung', model: '갤럭시 Z 폴드 2', capacity: '256GB', maxPrice: 155000, minPrice: 100000 },
  { id: 'ss-f1-256', brand: 'Samsung', model: '갤럭시 Z 폴드 1', capacity: '256GB', maxPrice: 120000, minPrice: 65000 },
  { id: 'ss-fl1-256', brand: 'Samsung', model: '갤럭시 Z 플립 1', capacity: '256GB', maxPrice: 110000, minPrice: 65000 },

  // --- Samsung A Series ---
  { id: 'ss-a90-128', brand: 'Samsung', model: '갤럭시 A90 5G', capacity: '128GB', maxPrice: 90000, minPrice: 55000 },
  { id: 'ss-a55-128', brand: 'Samsung', model: '갤럭시 A55 (퀀텀5)', capacity: '128GB', maxPrice: 220000, minPrice: 155000 },
  { id: 'ss-a54-128', brand: 'Samsung', model: '갤럭시 A54 (퀀텀4)', capacity: '128GB', maxPrice: 155000, minPrice: 95000 },
  { id: 'ss-a35-128', brand: 'Samsung', model: '갤럭시 A35', capacity: '128GB', maxPrice: 150000, minPrice: 90000 },
  { id: 'ss-a25-128', brand: 'Samsung', model: '갤럭시 A25', capacity: '128GB', maxPrice: 120000, minPrice: 90000 },
  { id: 'ss-a15-128', brand: 'Samsung', model: '갤럭시 A15', capacity: '128GB', maxPrice: 90000, minPrice: 55000 },
  { id: 'ss-a80-128', brand: 'Samsung', model: '갤럭시 A80', capacity: '128GB', maxPrice: 80000, minPrice: 40000 },
  { id: 'ss-a52-128', brand: 'Samsung', model: '갤럭시 A52s', capacity: '128GB', maxPrice: 120000, minPrice: 85000 },
  { id: 'ss-a32-128', brand: 'Samsung', model: '갤럭시 A32', capacity: '128GB', maxPrice: 85000, minPrice: 55000 },
];

const defaultPosts: Post[] = [
  { id: '1', title: '폰플러스 동래역점 1월 29일자 비골드 단가 전 기종 업데이트', content: '아이폰 17 예상가부터 구형 모델, 갤럭시 S25 예상가부터 S8, 노트 시리즈, 폴드/플립 전 모델의 매입 시세가 비골드 단가표 기준으로 완벽 업데이트 되었습니다.', date: '2025-01-29', author: '관리자', category: '공지사항' },
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

  const [isEditMode, setIsEditMode] = useState(false);
  const [draftPrices, setDraftPrices] = useState<PriceItem[]>([]);
  const [draftPosts, setDraftPosts] = useState<Post[]>([]);
  const [draftConfig, setDraftConfig] = useState<SiteConfig>(defaultConfig);

  const startEditing = () => {
    setDraftPrices([...prices]);
    setDraftPosts([...posts]);
    setDraftConfig({ ...config });
    setIsEditMode(true);
  };

  const saveChanges = () => {
    setPrices([...draftPrices]);
    setPosts([...draftPosts]);
    setConfig({ ...draftConfig });
    setIsEditMode(false);
  };

  const discardChanges = () => {
    setIsEditMode(false);
  };

  const activePrices = isEditMode ? draftPrices : prices;
  const activePosts = isEditMode ? draftPosts : posts;
  const activeConfig = isEditMode ? draftConfig : config;

  return (
    <AppContext.Provider value={{ 
      prices: activePrices, setPrices, 
      posts: activePosts, setPosts, 
      config: activeConfig, setConfig, 
      isAdmin, setIsAdmin,
      isEditMode, setIsEditMode,
      draftPrices, setDraftPrices,
      draftPosts, setDraftPosts,
      draftConfig, setDraftConfig,
      saveChanges, discardChanges, startEditing
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
