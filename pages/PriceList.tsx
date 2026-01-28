
import React, { useState, useMemo } from 'react';
import { useAppContext } from '../AppContext';
import { Search, Smartphone, Info, ChevronRight } from 'lucide-react';

const PriceList: React.FC = () => {
  const { prices, config } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('전체');

  const filteredPrices = useMemo(() => {
    return prices.filter(p => {
      const matchesSearch = p.model.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrand === '전체' || p.brand === selectedBrand;
      return matchesSearch && matchesBrand;
    });
  }, [prices, searchTerm, selectedBrand]);

  const brands = useMemo(() => {
    return ['전체', ...Array.from(new Set(prices.map(p => p.brand)))];
  }, [prices]);

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black mb-4">중고폰 <span className="text-yellow-500">실시간 매입 시세</span></h1>
            <p className="text-gray-500 font-medium">동래역점 공식 단가표 (A급 최고가 ~ 중고 범위)</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-10 items-center">
            {/* Search */}
            <div className="relative flex-grow w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="모델명(아이폰 17, 갤럭시 S25 등)을 입력하세요..."
                className="w-full pl-16 pr-6 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-yellow-400 outline-none font-bold transition-all shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Brand Filter */}
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {brands.map(brand => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-6 py-5 rounded-2xl font-black transition-all whitespace-nowrap shadow-sm ${selectedBrand === brand ? 'bg-yellow-400 text-black' : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600'}`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-900 text-white text-xs font-black uppercase tracking-widest">
                    <th className="px-8 py-6">브랜드</th>
                    <th className="px-8 py-6">모델명</th>
                    <th className="px-8 py-6">용량</th>
                    <th className="px-8 py-6 text-right">매입가 범위 (A급 ~ 중고단가)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredPrices.length > 0 ? (
                    filteredPrices.map((item) => (
                      <tr key={item.id} className="hover:bg-yellow-50/40 transition-colors group">
                        <td className="px-8 py-6">
                           <span className={`text-xs font-black px-2 py-1 rounded ${item.brand === 'Apple' ? 'bg-gray-100 text-gray-600' : 'bg-blue-50 text-blue-600'}`}>
                             {item.brand.toUpperCase()}
                           </span>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-gray-900 text-lg">{item.model}</span>
                            {item.isHot && <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded font-black animate-pulse">HOT</span>}
                          </div>
                        </td>
                        <td className="px-8 py-6 text-gray-500 font-bold">{item.capacity}</td>
                        <td className="px-8 py-6 text-right">
                          <div className="flex flex-col items-end">
                            <div className="text-2xl font-black text-gray-900 flex items-center gap-2">
                              <span className="text-yellow-600">{item.maxPrice.toLocaleString()}</span>
                              <span className="text-gray-300 font-normal">~</span>
                              <span className="text-gray-600">{item.minPrice.toLocaleString()}</span>
                              <span className="text-sm font-bold ml-1 text-gray-400">원</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-8 py-32 text-center text-gray-300">
                         <Search size={48} className="mx-auto mb-4" />
                         <p className="text-xl font-black">검색된 모델이 없습니다.</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-yellow-50 rounded-3xl p-8 border border-yellow-100">
                <div className="flex gap-4 items-start mb-4">
                  <Info className="text-yellow-600 flex-shrink-0" size={24} />
                  <h3 className="text-xl font-black text-yellow-900">시세 기준 및 차감 안내</h3>
                </div>
                <ul className="space-y-3 text-sm text-yellow-800 font-medium">
                  <li><strong>• A급(최고가):</strong> 외관 기스 없음, 모든 기능 정상, 액정 잔상 없음</li>
                  <li><strong>• 중고(최저가):</strong> 정상 작동하나 외관상 생활 기스가 있는 경우</li>
                  <li>• 파손, 기능 불량은 별도 차감표에 따라 금액이 조정됩니다.</li>
                </ul>
             </div>
             <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-black mb-4">찾으시는 기종이 없나요?</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    구형폰부터 최신 기기까지 모든 모델 매입 가능!<br/>전화 한 통이면 즉시 견적 확인 가능합니다.
                  </p>
                  <a href={`tel:${config.contactNumber}`} className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-xl font-black hover:bg-yellow-500 transition-all">
                    전화로 즉시 견적 문의 <ChevronRight size={18} />
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
