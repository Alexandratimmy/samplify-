import React from 'react';
import type { Post } from '../types';
import { MOCK_POSTS } from '../data/mock';
import { PostCard } from '../components/PostCard';

const PageHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="border-b border-slate-700 pb-4 mb-6">
    <h1 className="text-2xl font-bold text-white">{title}</h1>
    <p className="text-gray-400">{description}</p>
  </div>
);

interface LatestFeedProps {
  onSelectPost: (post: Post) => void;
}

export const LatestFeed: React.FC<LatestFeedProps> = ({ onSelectPost }) => {
  // Simple chronological sort for demonstration
  const sortedPosts = React.useMemo(() => 
    [...MOCK_POSTS].sort((a, b) => {
      // A real app would use date objects. This is a simplified sort based on the mock `createdAt` string.
      const timeA = parseInt(a.createdAt);
      const timeB = parseInt(b.createdAt);
      const unitA = a.createdAt.slice(-1);
      const unitB = b.createdAt.slice(-1);

      if (unitA === 'd') return 1;
      if (unitB === 'd') return -1;
      
      return timeA - timeB;
    }), []);

  return (
    <div className="w-full">
      <PageHeader title="Latest Posts" description="Catch up on what's happening right now." />
      <div className="flex flex-col gap-px">
        {sortedPosts.map((post) => (
          <PostCard key={post.id} post={post} onSelectPost={onSelectPost} />
        ))}
      </div>
    </div>
  );
};