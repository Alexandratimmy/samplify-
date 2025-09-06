import React from 'react';
import { HomeIcon, SparklesIcon, RocketIcon, StoreIcon, FolderIcon, CommunityIcon, BookmarkIcon } from './Icons';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex w-full items-center gap-4 px-4 py-2 rounded-2xl transition text-left ${
      active ? 'bg-[#c142c4] text-white font-semibold shadow-lg shadow-[#c142c4]/20' : 'hover:bg-slate-800'
    }`}
    aria-current={active ? 'page' : undefined}
  >
    {icon}
    <span className="text-base">{label}</span>
  </button>
);

interface LeftSidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  isMobileNavOpen: boolean;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ activePage, onNavigate, isMobileNavOpen }) => {
  const feedItems = ["For You", "Latest"];
  const exploreItems = ["Launches", "Marketplace", "Projects", "Communities", "Bookmarks"];
  
  const getIcon = (label: string) => {
    const className = "h-6 w-6";
    switch (label) {
      case "For You": return <HomeIcon className={className} />;
      case "Latest": return <SparklesIcon className={className} />;
      case "Launches": return <RocketIcon className={className} />;
      case "Marketplace": return <StoreIcon className={className} />;
      case "Projects": return <FolderIcon className={className} />;
      case "Communities": return <CommunityIcon className={className} />;
      case "Bookmarks": return <BookmarkIcon className={className} />;
      default: return null;
    }
  };

  const navContent = (
      <nav className="flex flex-col gap-6">
        <div>
          <h3 className="px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Feed</h3>
          <div className="flex flex-col gap-1">
            {feedItems.map(item => (
              <NavItem 
                key={item}
                icon={getIcon(item)} 
                label={item} 
                active={activePage === item}
                onClick={() => onNavigate(item)}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Explore</h3>
          <div className="flex flex-col gap-1">
            {exploreItems.map(item => (
              <NavItem 
                key={item}
                icon={getIcon(item)} 
                label={item} 
                active={activePage === item}
                onClick={() => onNavigate(item)}
              />
            ))}
          </div>
        </div>
      </nav>
  );

  return (
    <>
    {/* Desktop Sidebar */}
    <aside className="hidden md:block sticky top-20 h-[calc(100vh-80px)]">
      {navContent}
    </aside>

    {/* Mobile Sidebar */}
     <aside className={`md:hidden ${isMobileNavOpen ? 'block' : 'hidden'} w-full`}>
      {navContent}
    </aside>
    </>
  );
};