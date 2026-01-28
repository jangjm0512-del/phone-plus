
import React from 'react';
import { useAppContext } from '../AppContext';
import { Calendar, User, ChevronRight } from 'lucide-react';

const Notice: React.FC = () => {
  const { posts } = useAppContext();

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-black mb-4">공지사항 및 유용한 정보</h1>
            <p className="text-gray-500 font-medium">폰플러스의 소식과 중고폰 거래 꿀팁을 전해드립니다.</p>
          </div>

          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 hover:shadow-xl transition-all group cursor-pointer">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="bg-yellow-400 text-black text-xs font-black px-3 py-1 rounded-full">{post.category}</span>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-bold">
                    <Calendar size={14} /> {post.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-bold">
                    <User size={14} /> {post.author}
                  </div>
                </div>
                <h2 className="text-2xl font-black mb-4 group-hover:text-yellow-600 transition-colors">{post.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-8 line-clamp-2 font-medium">
                  {post.content}
                </p>
                <div className="flex items-center gap-1 text-sm font-black text-gray-900 group-hover:translate-x-2 transition-transform">
                  자세히 보기 <ChevronRight size={18} />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
             <div className="flex gap-2">
                {[1, 2, 3].map(n => (
                  <button key={n} className={`w-12 h-12 rounded-xl font-bold transition-all ${n === 1 ? 'bg-yellow-400 text-black' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}>
                    {n}
                  </button>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
