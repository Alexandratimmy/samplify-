import React from 'react';
import type { Post } from '../types';
import { MOCK_POSTS } from '../data/mock';
import { PostComposer } from '../components/PostComposer';
import { PostCard } from '../components/PostCard';

interface ForYouFeedProps {
  onSelectPost: (post: Post) => void;
}

export const ForYouFeed: React.FC<ForYouFeedProps> = ({ onSelectPost }) => {
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