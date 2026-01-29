
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../AppContext';
import { 
  Settings, Plus, Trash2, Edit, Save, LogOut, Smartphone, 
  FileText, LayoutDashboard, Eye, EyeOff, Check, X, AlertCircle
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { 
    prices, setPrices, posts, setPosts, config, setConfig, isAdmin, setIsAdmin,
    isEditMode, startEditing, saveChanges, discardChanges,
    draftPrices, setDraftPrices, draftPosts, setDraftPosts, draftConfig, setDraftConfig
  } = useAppContext();
  
  const [activeTab, setActiveTab] = useState<'prices' | 'posts' | 'settings'>('prices');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  // Form states
  const [newPrice, setNewPrice] = useState({ brand: '', model: '', capacity: '', maxPrice: '', minPrice: '', imageUrl: '' });
  const [newPost, setNewPost] = useState({ title: '', content: '', category: '공지사항' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Heths1026@') { 
      setIsAdmin(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const toggleEditMode = () => {
    if (isEditMode) {
      // Logic for finalizing is handled by Save/Discard buttons
    } else {
      startEditing();
    }
  };

  const addPrice = () => {
    if (!newPrice.brand || !newPrice.model) return;
    const newItem = { 
      id: Date.now().toString(), 
      brand: newPrice.brand, 
      model: newPrice.model, 
      capacity: newPrice.capacity || '기본',
      maxPrice: parseInt(newPrice.maxPrice) || 0,
      minPrice: parseInt(newPrice.minPrice) || 0,
      isHot: false,
      imageUrl: newPrice.imageUrl
    };

    if (isEditMode) {
      setDraftPrices([...draftPrices, newItem]);
    } else {
      setPrices([...prices, newItem]);
    }
    setNewPrice({ brand: '', model: '', capacity: '', maxPrice: '', minPrice: '', imageUrl: '' });
  };

  const deletePrice = (id: string) => {
    if (isEditMode) {
      setDraftPrices(draftPrices.filter(p => p.id !== id));
    } else {
      setPrices(prices.filter(p => p.id !== id));
    }
  };

  const addPost = () => {
    if (!newPost.title || !newPost.content) return;
    const newItem = { ...newPost, id: Date.now().toString(), date: new Date().toISOString().split('T')[0], author: '관리자' };
    
    if (isEditMode) {
      setDraftPosts([newItem, ...draftPosts]);
    } else {
      setPosts([newItem, ...posts]);
    }
    setNewPost({ title: '', content: '', category: '공지사항' });
  };

  const deletePost = (id: string) => {
    if (isEditMode) {
      setDraftPosts(draftPosts.filter(p => p.id !== id));
    } else {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Settings size={32} />
            </div>
            <h1 className="text-2xl font-black mb-2">관리자 로그인</h1>
            <p className="text-gray-400 font-medium">서비스 관리를 위해 로그인해 주세요.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="password" 
                placeholder="비밀번호를 입력하세요"
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-yellow-400 outline-none transition-all font-bold"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {loginError && <p className="text-red-500 text-sm mt-2 font-bold">비밀번호가 일치하지 않습니다.</p>}
            </div>
            <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-black text-lg hover:bg-black transition-all">
              로그인
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        
        {/* Top Preview Bar for Dashboard */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 gap-4">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl ${isEditMode ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-400'}`}>
              {isEditMode ? <Eye size={24} /> : <EyeOff size={24} />}
            </div>
            <div>
              <h3 className="font-black text-lg leading-none mb-1">Live Edit & Preview</h3>
              <p className="text-xs font-bold text-gray-400">
                {isEditMode ? '현재 미리보기 모드입니다. 사이트 전역에 변경사항이 즉시 반영됩니다.' : '편집 모드를 켜서 안전하게 수정하고 미리보세요.'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {isEditMode ? (
              <>
                <button 
                  onClick={discardChanges}
                  className="px-6 py-3 rounded-xl border border-gray-200 text-gray-500 font-black flex items-center gap-2 hover:bg-gray-50 transition-all"
                >
                  <X size={18} /> 취소
                </button>
                <button 
                  onClick={saveChanges}
                  className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-black flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                >
                  <Check size={18} /> 변경사항 저장
                </button>
              </>
            ) : (
              <button 
                onClick={toggleEditMode}
                className="px-8 py-3 rounded-xl bg-gray-900 text-white font-black flex items-center gap-2 hover:bg-black transition-all shadow-lg"
              >
                <Edit size={18} /> 편집 모드 시작
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="lg:w-64 flex flex-col gap-2">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">
               <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-black">AD</div>
                  <div>
                    <p className="text-xs font-bold text-gray-400">Welcome</p>
                    <p className="font-black text-gray-900 leading-none">관리자님</p>
                  </div>
               </div>
            </div>
            <button 
              onClick={() => setActiveTab('prices')}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-black transition-all ${activeTab === 'prices' ? 'bg-gray-900 text-white shadow-lg' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
            >
              <Smartphone size={20} /> 매입 시세 관리
            </button>
            <button 
              onClick={() => setActiveTab('posts')}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-black transition-all ${activeTab === 'posts' ? 'bg-gray-900 text-white shadow-lg' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
            >
              <FileText size={20} /> 게시글/공지 관리
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-black transition-all ${activeTab === 'settings' ? 'bg-gray-900 text-white shadow-lg' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
            >
              <LayoutDashboard size={20} /> 사이트 설정
            </button>
            <div className="mt-8 border-t border-gray-200 pt-4">
              <button 
                onClick={() => setIsAdmin(false)}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl font-black text-red-500 hover:bg-red-50 w-full transition-all"
              >
                <LogOut size={20} /> 로그아웃
              </button>
            </div>
          </aside>

          {/* Content Area */}
          <main className="flex-grow">
            <div className={`bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border min-h-[600px] transition-colors duration-500 ${isEditMode ? 'border-indigo-200' : 'border-gray-100'}`}>
              
              {isEditMode && (
                <div className="mb-8 p-4 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center gap-3 text-indigo-700">
                  <AlertCircle size={20} />
                  <p className="text-sm font-bold">미리보기 편집 중입니다. 상단의 저장 버튼을 눌러야 실제 사이트에 반영됩니다.</p>
                </div>
              )}

              {activeTab === 'prices' && (
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <h2 className="text-3xl font-black">실시간 매입 시세 관리</h2>
                    <div className="bg-yellow-50 text-yellow-700 px-4 py-2 rounded-xl text-sm font-bold">
                      총 {prices.length}개 모델 등록됨
                    </div>
                  </div>

                  {/* Add Price Form */}
                  <div className={`p-6 rounded-3xl mb-10 space-y-4 border ${isEditMode ? 'bg-indigo-50/30 border-indigo-100' : 'bg-gray-50 border-gray-100'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-black text-gray-400 mb-2 uppercase tracking-tighter">브랜드</label>
                        <input 
                          type="text" 
                          placeholder="Apple" 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 outline-none font-bold"
                          value={newPrice.brand}
                          onChange={(e) => setNewPrice({...newPrice, brand: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-gray-400 mb-2 uppercase tracking-tighter">모델명</label>
                        <input 
                          type="text" 
                          placeholder="iPhone 17" 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 outline-none font-bold"
                          value={newPrice.model}
                          onChange={(e) => setNewPrice({...newPrice, model: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-gray-400 mb-2 uppercase tracking-tighter">이미지 URL</label>
                        <input 
                          type="text" 
                          placeholder="https://..." 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 outline-none font-bold"
                          value={newPrice.imageUrl}
                          onChange={(e) => setNewPrice({...newPrice, imageUrl: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                      <div>
                        <label className="block text-xs font-black text-gray-400 mb-2 uppercase tracking-tighter">최고가 (A급)</label>
                        <input 
                          type="number" 
                          placeholder="2000000" 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 outline-none font-bold"
                          value={newPrice.maxPrice}
                          onChange={(e) => setNewPrice({...newPrice, maxPrice: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-gray-400 mb-2 uppercase tracking-tighter">최저가 (중고)</label>
                        <input 
                          type="number" 
                          placeholder="1500000" 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 outline-none font-bold"
                          value={newPrice.minPrice}
                          onChange={(e) => setNewPrice({...newPrice, minPrice: e.target.value})}
                        />
                      </div>
                      <button 
                        onClick={addPrice}
                        className={`h-[50px] rounded-xl font-black flex items-center justify-center gap-2 transition-all shadow-md ${isEditMode ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-yellow-400 text-black hover:bg-yellow-500'}`}
                      >
                        <Plus size={20} /> 기종 추가하기
                      </button>
                    </div>
                  </div>

                  {/* Prices Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="text-gray-400 text-xs font-black uppercase tracking-widest border-b border-gray-100">
                          <th className="px-4 py-4 w-12 text-center">Img</th>
                          <th className="px-4 py-4">Brand</th>
                          <th className="px-4 py-4">Model</th>
                          <th className="px-4 py-4">Price Range</th>
                          <th className="px-4 py-4 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {prices.map((p) => (
                          <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors group">
                            <td className="px-4 py-4">
                              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                                {p.imageUrl ? <img src={p.imageUrl} className="w-full h-full object-contain" /> : <Smartphone size={16} className="text-gray-400" />}
                              </div>
                            </td>
                            <td className="px-4 py-4 font-bold text-gray-400">{p.brand}</td>
                            <td className="px-4 py-4 font-black">{p.model}</td>
                            <td className="px-4 py-4 font-black text-indigo-600">
                              {p.maxPrice.toLocaleString()} ~ {p.minPrice.toLocaleString()}원
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex items-center justify-center gap-2">
                                <button className="p-2 text-gray-400 hover:text-indigo-500 transition-colors"><Edit size={18} /></button>
                                <button onClick={() => deletePrice(p.id)} className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'posts' && (
                <div>
                  <h2 className="text-3xl font-black mb-10">게시글 및 소식 관리</h2>
                  <div className={`p-8 rounded-3xl mb-12 space-y-4 border ${isEditMode ? 'bg-indigo-50/30 border-indigo-100' : 'bg-gray-50 border-gray-100'}`}>
                    <input 
                      type="text" 
                      placeholder="제목을 입력하세요" 
                      className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none font-bold focus:border-indigo-400" 
                      value={newPost.title} 
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})} 
                    />
                    <textarea 
                      placeholder="내용을 입력하세요..." 
                      rows={4} 
                      className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none font-medium resize-none focus:border-indigo-400" 
                      value={newPost.content} 
                      onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    ></textarea>
                    <button 
                      onClick={addPost} 
                      className={`px-10 py-4 rounded-xl font-black shadow-lg transition-all ${isEditMode ? 'bg-indigo-600 text-white' : 'bg-gray-900 text-white'}`}
                    >
                      게시글 저장
                    </button>
                  </div>
                  <div className="space-y-4">
                    {posts.map(post => (
                      <div key={post.id} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl">
                        <div>
                          <h4 className="font-black">{post.title}</h4>
                          <p className="text-xs text-gray-400">{post.date}</p>
                        </div>
                        <button onClick={() => deletePost(post.id)} className="p-2 text-red-500"><Trash2 size={18} /></button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-3xl font-black mb-10">사이트 설정</h2>
                  <div className="max-w-xl space-y-6">
                    <div>
                      <label className="block text-xs font-black text-gray-400 mb-2 uppercase">사이트 이름</label>
                      <input 
                        type="text" 
                        className="w-full px-6 py-4 rounded-xl border-2 border-gray-50 outline-none font-black focus:border-indigo-400" 
                        value={isEditMode ? draftConfig.siteName : config.siteName} 
                        onChange={(e) => isEditMode ? setDraftConfig({...draftConfig, siteName: e.target.value}) : setConfig({...config, siteName: e.target.value})} 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-gray-400 mb-2 uppercase">대표 번호</label>
                      <input 
                        type="text" 
                        className="w-full px-6 py-4 rounded-xl border-2 border-gray-50 outline-none font-black focus:border-indigo-400" 
                        value={isEditMode ? draftConfig.contactNumber : config.contactNumber} 
                        onChange={(e) => isEditMode ? setDraftConfig({...draftConfig, contactNumber: e.target.value}) : setConfig({...config, contactNumber: e.target.value})} 
                      />
                    </div>
                  </div>
                </div>
              )}

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
