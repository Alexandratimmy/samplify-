import React, { useState } from 'react';
import type { Comment } from '../types';
import { Avatar } from './Avatar';
import { LikeIcon, LikeIconFilled } from './Icons';

interface CommentCardProps {
    comment: Comment;
}

export const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(comment.likes);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    };

    return (
        <div className="flex gap-4 p-4 border-b border-slate-700">
            <Avatar src={comment.author.avatarUrl} alt={comment.author.name} />
            <div className="flex-1">
                <div className="flex items-baseline gap-2">
                    <p className="font-bold text-white">{comment.author.name}</p>
                    <p className="text-gray-400 text-sm">@{comment.author.handle}</p>
                    <span className="text-gray-500">·</span>
                    <p className="text-gray-400 text-sm">{comment.createdAt}</p>
                </div>
                <p className="mt-1 text-gray-300">{comment.content}</p>
                <div className="mt-2 flex items-center">
                    <button onClick={handleLike} className={`flex items-center gap-2 group transition ${isLiked ? 'text-[#f91880]' : 'text-gray-400 hover:text-[#f91880]'}`}>
                        <div className={`p-1.5 rounded-full transition ${isLiked ? 'bg-[#f91880]/10' : 'group-hover:bg-[#f91880]/10'}`}>
                            {isLiked ? <LikeIconFilled className="h-4 w-4" /> : <LikeIcon className="h-4 w-4" />}
                        </div>
                        <span className="text-sm">{likeCount > 0 && likeCount}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
