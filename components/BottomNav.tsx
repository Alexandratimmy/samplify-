import React from 'react';
import { HomeIcon, RocketIcon, StoreIcon, FolderIcon, BookmarkIcon, MessageIcon } from './Icons';

interface BottomNavProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

const NavButton: React.FC<{
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
    <button onClick={onClick} className={`flex flex-col items-center justify-center gap-1 w-full h-full transition ${isActive ? 'text-[#c142c4]' : 'text-gray-400 hover:text-white'}`}>
        {icon}
        <span className={`text-xs font-medium ${isActive ? 'text-[#c142c4]' : 'text-gray-400'}`}>{label}</span>
    </button>
);


export const BottomNav: React.FC<BottomNavProps> = ({ activePage, onNavigate }) => {
    const navItems = [
        { label: 'For You', icon: <HomeIcon className="w-6 h-6" />, page: 'For You' },
        { label: 'Launches', icon: <RocketIcon className="w-6 h-6" />, page: 'Launches' },
        { label: 'Marketplace', icon: <StoreIcon className="w-6 h-6" />, page: 'Marketplace' },
        { label: 'Messages', icon: <MessageIcon className="w-6 h-6" />, page: 'Messages' },
        { label: 'Projects', icon: <FolderIcon className="w-6 h-6" />, page: 'Projects' },
        { label: 'Bookmarks', icon: <BookmarkIcon className="w-6 h-6" />, page: 'Bookmarks' },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-slate-900/80 backdrop-blur-lg border-t border-slate-700 z-50">
            <div className="max-w-md mx-auto h-full flex items-center justify-around">
                {navItems.map(item => (
                    <NavButton
                        key={item.label}
                        icon={item.icon}
                        label={item.label}
                        isActive={activePage === item.page}
                        onClick={() => onNavigate(item.page)}
                    />
                ))}
            </div>
        </nav>
    )
}