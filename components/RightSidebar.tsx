
import React from 'react';
import type { User } from '../types';
import { Avatar } from './Avatar';

const WhoToFollowCard: React.FC = () => {
    const users: User[] = [
        { id: '2', name: 'Elena Voyage', handle: 'elenavoyage', avatarUrl: 'https://picsum.photos/seed/user2/48/48', role: 'Designer' },
        { id: '3', name: 'Code Artisan', handle: 'codeart', avatarUrl: 'https://picsum.photos/seed/user3/48/48', role: 'Developer' },
        { id: '4', name: 'Capital Jane', handle: 'investjane', avatarUrl: 'https://picsum.photos/seed/user4/48/48', role: 'Investor' },
    ];

    return (
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4">
            <h3 className="font-bold text-lg mb-4">Who to follow</h3>
            <div className="flex flex-col gap-4">
                {users.map(user => (
                    <div key={user.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Avatar src={user.avatarUrl} alt={user.name} />
                            <div>
                                <p className="font-semibold text-white">{user.name}</p>
                                <p className="text-sm text-gray-400">@{user.handle}</p>
                            </div>
                        </div>
                        <button className="bg-slate-200 text-slate-900 font-semibold px-4 py-1.5 rounded-2xl text-sm hover:bg-white transition">
                            Follow
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TrendingTagsCard: React.FC = () => {
    const tags = ['#buildinpublic', '#saas', '#ai', '#web3', '#designsystems'];
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4">
            <h3 className="font-bold text-lg mb-4">Trending tags</h3>
            <div className="flex flex-col gap-2">
                {tags.map(tag => (
                    <div key={tag}>
                        <a href="#" className="font-semibold text-white hover:text-[#c142c4]">{tag}</a>
                        <p className="text-sm text-gray-400">{Math.floor(Math.random() * 500 + 20)} posts</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const RightSidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block sticky top-20 h-[calc(100vh-80px)]">
        <div className="flex flex-col gap-6">
            <WhoToFollowCard />
            <TrendingTagsCard />
        </div>
    </aside>
  );
};
