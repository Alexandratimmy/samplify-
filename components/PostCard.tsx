import React, { useState } from 'react';
import type { Post } from '../types';
import { Avatar } from './Avatar';
import { LikeIcon, CommentIcon, RepostIcon, ShareIcon, LikeIconFilled, BookmarkIcon } from './Icons';

interface PostCardProps {
  post: Post;
  onSelectPost: (post: Post) => void;
  isDetailView?: boolean;
}

interface PostActionButtonProps {
    icon: React.ReactNode;
    activeIcon?: React.ReactNode;
    count: number;
    hoverColor: string;
    activeColor: string;
    isActive?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    showCount?: boolean;
}

const PostActionButton: React.FC<PostActionButtonProps> = ({ icon, activeIcon, count, hoverColor, activeColor, isActive, onClick, showCount = true }) => (
    <button 
        onClick={onClick}
        style={{ '--hover-color': hoverColor, '--active-color': activeColor } as React.CSSProperties}
        className={`flex items-center gap-2 transition group ${isActive ? 'text-[var(--active-color)]' : 'text-gray-400 hover:text-[var(--hover-color)]'}`}
        aria-pressed={isActive}
    >
        <div className={`p-2 rounded-full transition ${isActive ? 'bg-[var(--active-color)]/10' : `group-hover:bg-[var(--hover-color)]/10`}`}>
            {isActive && activeIcon ? activeIcon : icon}
        </div>
        {showCount && <span className="text-sm">{count}</span>}
    </button>
);


export const PostCard: React.FC<PostCardProps> = ({ post, onSelectPost, isDetailView = false }) => {
  const [likes, setLikes] = useState(post.stats.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [reposts, setReposts] = useState(post.stats.reposts);
  const [isReposted, setIsReposted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleInteraction = (e: React.MouseEvent, action: 'like' | 'repost' | 'comment' | 'share' | 'save') => {
    e.stopPropagation();
    switch(action) {
        case 'like':
            setIsLiked(prev => {
                setLikes(prev ? likes - 1 : likes + 1);
                return !prev;
            });
            break;
        case 'repost':
            setIsReposted(prev => {
                setReposts(prev ? reposts - 1 : reposts + 1);
                return !prev;
            });
            break;
        case 'comment':
             onSelectPost(post);
            break;
        case 'save':
            setIsSaved(prev => !prev);
            break;
        case 'share':
            // In a real app, this would open a share dialog.
            console.log(`Sharing post by @${post.author.handle}`);
            break;
    }
  };
  
  const handleCardClick = () => {
    if (!isDetailView) {
        onSelectPost(post);
    }
  }

  return (
    <div onClick={handleCardClick} className={`bg-slate-800/50 border border-slate-700 p-4 ${!isDetailView && 'transition hover:bg-slate-800/80 cursor-pointer'}`}>
      <div className="flex gap-4">
        <Avatar src={post.author.avatarUrl} alt={post.author.name} />
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <p className="font-bold text-white">{post.author.name}</p>
            <p className="text-gray-400 text-sm">@{post.author.handle}</p>
            <span className="text-gray-500">·</span>
            <p className="text-gray-400 text-sm">{post.createdAt}</p>
          </div>
          <div className="mt-2 text-gray-300 whitespace-pre-wrap">
            {post.content}
          </div>
          {post.imageUrl && (
            <div className="mt-4 rounded-2xl overflow-hidden border border-slate-700">
              <img src={post.imageUrl} alt="Post content" className="w-full h-auto object-cover" />
            </div>
          )}
          <div className="mt-4 flex items-center justify-between max-w-md">
             <PostActionButton 
                icon={<CommentIcon className="h-5 w-5" />} 
                count={post.stats.comments} 
                hoverColor="#1d9bf0"
                activeColor="#1d9bf0"
                onClick={(e) => handleInteraction(e, 'comment')}
             />
             <PostActionButton 
                icon={<RepostIcon className="h-5 w-5" />} 
                count={reposts} 
                hoverColor="#00ba7c"
                activeColor="#00ba7c"
                isActive={isReposted}
                onClick={(e) => handleInteraction(e, 'repost')}
            />
             <PostActionButton 
                icon={<LikeIcon className="h-5 w-5" />} 
                activeIcon={<LikeIconFilled className="h-5 w-5" />}
                count={likes} 
                hoverColor="#f91880"
                activeColor="#f91880"
                isActive={isLiked}
                onClick={(e) => handleInteraction(e, 'like')}
            />
            <PostActionButton 
                icon={<BookmarkIcon className="h-5 w-5" />} 
                count={0}
                showCount={false}
                hoverColor="#fea334"
                activeColor="#fea334"
                isActive={isSaved}
                onClick={(e) => handleInteraction(e, 'save')}
             />
             <PostActionButton 
                icon={<ShareIcon className="h-5 w-5" />} 
                count={0} 
                showCount={false}
                hoverColor="#c142c4"
                activeColor="#c142c4"
                onClick={(e) => handleInteraction(e, 'share')}
             />
          </div>
        </div>
      </div>
    </div>
  );
};
