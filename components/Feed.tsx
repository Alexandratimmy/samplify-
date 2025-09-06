import React from 'react';
import type { Post } from '../types';
import { MOCK_POSTS } from '../data/mock';
import { PostComposer } from './PostComposer';
import { PostCard } from './PostCard';

// FIX: To fix the missing 'onSelectPost' prop error in PostCard, the Feed component
// is updated to accept 'onSelectPost' as a prop and pass it down.
interface FeedProps {
  onSelectPost: (post: Post) => void;
}

export const Feed: React.FC<FeedProps> = ({ onSelectPost }) => {
  const [posts] = React.useState<Post[]>(MOCK_POSTS);

  return (
    <div className="w-full">
      <PostComposer />
      <div className="mt-6 flex flex-col gap-px">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onSelectPost={onSelectPost} />
        ))}
      </div>
    </div>
  );
};
