import React from 'react';
import { MOCK_POSTS } from '../data/mock';
import { PostCard } from '../components/PostCard';
import type { Post } from '../types';

const PageHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="border-b border-slate-700 pb-4 mb-6">
    <h1 className="text-2xl font-bold text-white">{title}</h1>
    <p className="text-gray-400">{description}</p>
  </div>
);

interface BookmarksProps {
  onSelectPost: (post: Post) => void;
}


export const Bookmarks: React.FC<BookmarksProps> = ({ onSelectPost }) => {
    // In a real app, this would come from user-specific data.
    // Here we'll just show the first and third mock posts.
    const bookmarkedPosts = [MOCK_POSTS[0], MOCK_POSTS[2]];
    
    return (
        <div className="w-full">
            <PageHeader title="Bookmarks" description="Your saved posts for later." />
            {bookmarkedPosts.length > 0 ? (
                <div className="flex flex-col gap-px">
                    {bookmarkedPosts.map((post) => (
                        <PostCard key={post.id} post={post} onSelectPost={onSelectPost}/>
                    ))}
                </div>
            ) : (
                 <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center h-64 flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold text-white">No bookmarks yet</h2>
                    <p className="mt-2 text-gray-400">Save posts to find them here later.</p>
                </div>
            )}
        </div>
    );
};