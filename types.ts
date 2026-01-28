
export interface PriceItem {
  id: string;
  brand: string;
  model: string;
  capacity: string;
  maxPrice: number; // A급 단가
  minPrice: number; // 중고 단가
  isHot?: boolean;
  imageUrl?: string; // 기기 이미지 URL 추가
}

export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
}

export interface SiteConfig {
  siteName: string;
  contactNumber: string;
  heroTitle: string;
  heroSubtitle: string;
  themeColor: string;
}

export interface AppState {
  prices: PriceItem[];
  posts: Post[];
  config: SiteConfig;
}
