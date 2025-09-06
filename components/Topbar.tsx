import React, { useState, useEffect, useRef } from 'react';
import { 
    SamplifyLogo, SearchIcon, BellIcon, MessageIcon, MenuIcon, CloseIcon,
    HomeIcon, SparklesIcon, RocketIcon, StoreIcon, FolderIcon, CommunityIcon, BookmarkIcon
} from './Icons';
import { Avatar } from './Avatar';

interface TopbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`relative flex items-center gap-2 px-4 py-2 text-sm font-semibold transition whitespace-nowrap rounded-lg ${
      active ? 'text-white' : 'text-gray-400 hover:text-white'
    }`}
    aria-current={active ? 'page' : undefined}
  >
    {icon}
    {label}
    {active && <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-1 bg-[#c142c4] rounded-full"></div>}
  </button>
);

const MobileNavItem: React.FC<NavItemProps> = ({ label, icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 text-left p-3 rounded-lg text-base transition ${
      active ? 'bg-[#c142c4] text-white font-semibold' : 'hover:bg-slate-800'
    }`}
    aria-current={active ? 'page' : undefined}
  >
    {icon}
    {label}
  </button>
);

const navItemsList = [
    { label: "For You", icon: <HomeIcon className="h-5 w-5" /> },
    { label: "Latest", icon: <SparklesIcon className="h-5 w-5" /> },
    { label: "Launches", icon: <RocketIcon className="h-5 w-5" /> },
    { label: "Marketplace", icon: <StoreIcon className="h-5 w-5" /> },
    { label: "Projects", icon: <FolderIcon className="h-5 w-5" /> },
    { label: "Communities", icon: <CommunityIcon className="h-5 w-5" /> },
    { label: "Messages", icon: <MessageIcon className="h-5 w-5" /> },
    { label: "Bookmarks", icon: <BookmarkIcon className="h-5 w-5" /> },
];


export const Topbar: React.FC<TopbarProps> = ({ activePage, onNavigate }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMobileMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuRef]);

    const handleNav = (page: string) => {
        onNavigate(page);
        setMobileMenuOpen(false);
    }

    return (
        <header ref={menuRef} className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700 h-16">
            <div className="max-w-[1920px] mx-auto px-4 md:px-6 h-full flex items-center justify-between gap-4">
                {/* Left Section */}
                <div className="flex items-center gap-2">
                    <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-800 transition">
                        {isMobileMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                    <SamplifyLogo />
                </div>

                {/* Center Section - Desktop Nav */}
                <nav className="flex-1 justify-center hidden md:flex items-center gap-2">
                    {navItemsList.map(item => (
                        <NavItem 
                            key={item.label}
                            label={item.label} 
                            icon={item.icon}
                            active={activePage === item.label}
                            onClick={() => handleNav(item.label)}
                        />
                    ))}
                </nav>

                {/* Right Section */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <div className="relative hidden lg:block">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-48 bg-slate-800 border border-slate-700 rounded-2xl h-10 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#c142c4] focus:outline-none transition"
                        />
                    </div>
                    <button className="bg-[#fea334] text-white font-semibold px-4 py-2 rounded-2xl text-sm hover:bg-opacity-90 transition hidden sm:block">
                        Post
                    </button>
                    <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-800 transition">
                        <BellIcon className="h-6 w-6" />
                    </button>
                    <button onClick={() => onNavigate('Messages')} className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-800 transition">
                        <MessageIcon className="h-6 w-6" />
                    </button>
                    <Avatar src="https://picsum.photos/seed/user1/40/40" alt="User Avatar" />
                </div>
            </div>
      
            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-900 border-b border-slate-700 p-4 shadow-lg animate-fade-in">
                    <nav className="flex flex-col gap-1">
                        {navItemsList.map(item => (
                            <MobileNavItem 
                                key={item.label}
                                label={item.label} 
                                icon={item.icon}
                                active={activePage === item.label}
                                onClick={() => handleNav(item.label)}
                            />
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};