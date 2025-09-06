import React, { useState } from 'react';
import { MOCK_USERS } from '../data/mock';
import { Avatar } from '../components/Avatar';
import { RocketIcon } from '../components/Icons';

const PageHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="border-b border-slate-700 pb-4 mb-6">
    <h1 className="text-2xl font-bold text-white">{title}</h1>
    <p className="text-gray-400">{description}</p>
  </div>
);

interface Launch {
    id: string;
    productName: string;
    tagline: string;
    thumbnailUrl: string;
    launchDate: string;
    followers: number;
    creator: typeof MOCK_USERS[0];
}

const mockLaunches: Launch[] = [
    { id: 'l1', productName: 'QuantumLeap AI', tagline: 'The next-gen AI coding assistant.', thumbnailUrl: 'https://picsum.photos/seed/launch1/400/200', launchDate: 'Oct 30, 2023', followers: 1250, creator: MOCK_USERS[0] },
    { id: 'l2', productName: 'Starlight Design System', tagline: 'Create beautiful, accessible UIs with ease.', thumbnailUrl: 'https://picsum.photos/seed/launch2/400/200', launchDate: 'Nov 5, 2023', followers: 890, creator: MOCK_USERS[1] },
    { id: 'l3', productName: 'IndieAsset Marketplace', tagline: 'Your one-stop shop for game assets.', thumbnailUrl: 'https://picsum.photos/seed/launch3/400/200', launchDate: 'Nov 12, 2023', followers: 2100, creator: MOCK_USERS[2] },
];

const LaunchCard: React.FC<{ launch: Launch }> = ({ launch }) => {
    const [notified, setNotified] = useState(false);
    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden transition hover:border-[#c142c4]">
            <img src={launch.thumbnailUrl} alt={launch.productName} className="w-full h-32 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-lg text-white">{launch.productName}</h3>
                <p className="text-gray-400 text-sm mb-3">{launch.tagline}</p>
                <div className="flex items-center gap-2 mb-4">
                    <Avatar src={launch.creator.avatarUrl} alt={launch.creator.name} className="w-6 h-6" />
                    <span className="text-sm text-gray-300">{launch.creator.name}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                        <RocketIcon className="w-4 h-4" />
                        <span>{launch.launchDate}</span>
                    </div>
                    <button 
                        onClick={() => setNotified(!notified)}
                        className={`font-semibold px-4 py-1.5 rounded-2xl text-sm transition ${notified ? 'bg-green-500/20 text-green-400' : 'bg-slate-700 hover:bg-slate-600 text-white'}`}
                    >
                        {notified ? 'Notified!' : 'Notify Me'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export const Launches: React.FC = () => {
  return (
    <div>
        <PageHeader title="Upcoming Launches" description="Get notified about the next big thing." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
            {mockLaunches.map(launch => <LaunchCard key={launch.id} launch={launch} />)}
        </div>
    </div>
    );
};