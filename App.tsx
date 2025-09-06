import React, { useState, useCallback } from 'react';
import { Layout } from './components/Layout';
import { ForYouFeed } from './pages/ForYouFeed';
import { LatestFeed } from './pages/LatestFeed';
import { Launches } from './pages/Launches';
import { Marketplace } from './pages/Marketplace';
import { Projects } from './pages/Projects';
import { Communities } from './pages/Communities';
import { Bookmarks } from './pages/Bookmarks';
import { PostDetail } from './pages/PostDetail';
import { Messages } from './pages/Messages';
import type { Post } from './types';


const App: React.FC = () => {
  const [activePage, setActivePage] = useState('For You');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [previousPage, setPreviousPage] = useState('For You');

  const handleNavigate = useCallback((page: string) => {
    if (page !== 'PostDetail') {
      setPreviousPage(activePage);
      setActivePage(page);
      setSelectedPost(null);
    }
  }, [activePage]);

  const handleSelectPost = useCallback((post: Post) => {
    setPreviousPage(activePage);
    setSelectedPost(post);
    setActivePage('PostDetail');
  }, [activePage]);

  const handleBack = useCallback(() => {
    setActivePage(previousPage);
    setSelectedPost(null);
  }, [previousPage]);


  const renderContent = () => {
    switch (activePage) {
      case 'For You':
        return <ForYouFeed onSelectPost={handleSelectPost} />;
      case 'Latest':
        return <LatestFeed onSelectPost={handleSelectPost} />;
      case 'Launches':
        return <Launches />;
      case 'Marketplace':
        return <Marketplace />;
      case 'Projects':
        return <Projects />;
      case 'Communities':
        return <Communities />;
      case 'Bookmarks':
        return <Bookmarks onSelectPost={handleSelectPost} />;
      case 'Messages':
        return <Messages />;
      case 'PostDetail':
        return selectedPost ? <PostDetail post={selectedPost} onBack={handleBack} onSelectPost={handleSelectPost} /> : <ForYouFeed onSelectPost={handleSelectPost} />;
      default:
        return <ForYouFeed onSelectPost={handleSelectPost}/>;
    }
  };

  return (
    <Layout 
      activePage={activePage} 
      onNavigate={handleNavigate}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;