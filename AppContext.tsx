
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppState, PriceItem, Post, SiteConfig } from './types';

interface AppContextType extends AppState {
  setPrices: React.Dispatch<React.SetStateAction<PriceItem[]>>;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  setConfig: React.Dispatch<React.SetStateAction<SiteConfig>>;
  
  // Edit Mode / Preview Logic
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
  { id: 'ap-17pm-2tb', brand: 'Apple', model: '아이폰 17 PROMAX', capacity: '2TB', maxPrice: 2090000, minPrice: 1620000, isHot: true },
  { id: 'ap-17pm-1tb', brand: 'Apple', model: '아이폰 17 PROMAX', capacity: '1TB', maxPrice: 2090000, minPrice: 1570000 },
  { id: 'ap-17pm-512', brand: 'Apple', model: '아이폰 17 PROMAX', capacity: '512GB', maxPrice: 1940000, minPrice: 1520000 },
  { id: 'ap-17pm-256', brand: 'Apple', model: '아이폰 17 PROMAX', capacity: '256GB', maxPrice: 1790000, minPrice: 1470000 },
  { id: 'ss-s25u', brand: 'Samsung', model: '갤럭시 S25 울트라', capacity: '256G/512G', maxPrice: 810000, minPrice: 650000, isHot: true },
  { id: 'ss-s25p', brand: 'Samsung', model: '갤럭시 S25+', capacity: '256GB', maxPrice: 670000, minPrice: 500000 },
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

  // Draft States
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

  // The components should always see the "active" data
  // which is either the draft or the production data.
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
