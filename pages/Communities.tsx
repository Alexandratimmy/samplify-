import React from 'react';

const PageHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="border-b border-slate-700 pb-4 mb-6">
    <h1 className="text-2xl font-bold text-white">{title}</h1>
    <p className="text-gray-400">{description}</p>
  </div>
);

interface Community {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  imageUrl: string;
}

const mockCommunities: Community[] = [
  { id: 'c1', name: '#buildinpublic', description: 'Share your journey, get feedback, and grow with fellow builders.', memberCount: 12800, imageUrl: 'https://picsum.photos/seed/comm1/100/100' },
  { id: 'c2', name: '#gamedev', description: 'For indie developers, artists, and designers creating the next hit game.', memberCount: 8900, imageUrl: 'https://picsum.photos/seed/comm2/100/100' },
  { id: 'c3', name: '#saasfounders', description: 'Connect with other SaaS founders to discuss growth, marketing, and sales.', memberCount: 5400, imageUrl: 'https://picsum.photos/seed/comm3/100/100' },
];

const CommunityCard: React.FC<{ community: Community }> = ({ community }) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-4 flex items-center gap-4 transition hover:border-[#c142c4]">
    <img src={community.imageUrl} alt={community.name} className="w-20 h-20 rounded-2xl object-cover" />
    <div className="flex-1">
      <h3 className="font-bold text-white">{community.name}</h3>
      <p className="text-sm text-gray-400">{community.description}</p>
      <div className="flex items-center justify-between mt-2">
        <p className="text-xs text-gray-500">{community.memberCount.toLocaleString()} members</p>
         <button className="bg-slate-700 text-white font-semibold px-4 py-1.5 rounded-2xl text-sm hover:bg-slate-600 transition">
            Join
        </button>
      </div>
    </div>
  </div>
);

export const Communities: React.FC = () => {
    return (
        <div>
            <PageHeader title="Communities" description="Find your people and grow together." />
            <div className="flex flex-col gap-4">
                {mockCommunities.map(community => <CommunityCard key={community.id} community={community} />)}
            </div>
        </div>
    );
};