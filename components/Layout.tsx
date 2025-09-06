import React from 'react';
import { Topbar } from './Topbar';
import { RightSidebar } from './RightSidebar';
import { BottomNav } from './BottomNav';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  return (
    <div className="min-h-screen">
      <Topbar activePage={activePage} onNavigate={onNavigate} />
      <main className="max-w-[1264px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,_920px)_320px] gap-6 px-4 md:px-6 pt-20 pb-24 md:pb-6">
        <div key={activePage} className="w-full min-w-0 animate-fade-in">
          {children}
        </div>
        <RightSidebar />
      </main>
      <BottomNav activePage={activePage} onNavigate={onNavigate} />
    </div>
  );
};