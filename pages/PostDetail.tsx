import React from 'react';
import type { Post } from '../types';
import { PostCard } from '../components/PostCard';
import { ArrowLeftIcon } from '../components/Icons';
import { MOCK_COMMENTS } from '../data/mock';
import { CommentCard } from '../components/CommentCard';
import { CommentComposer } from '../components/CommentComposer';

interface PostDetailProps {
    post: Post;
    onBack: () => void;
    onSelectPost: (post: Post) => void;
}

const PageHeader: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <div className="flex items-center gap-4 p-4 border-b border-slate-700">
        <button onClick={onBack} className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-800 transition">
            <ArrowLeftIcon className="h-6 w-6" />
        </button>
        <div>
            <h1 className="text-xl font-bold text-white">Post</h1>
        </div>
    </div>
);

export const PostDetail: React.FC<PostDetailProps> = ({ post, onBack, onSelectPost }) => {
    const comments = MOCK_COMMENTS.filter(comment => comment.postId === post.id);

    return (
        <div className="w-full">
            <PageHeader onBack={onBack} />
            <PostCard post={post} onSelectPost={onSelectPost} isDetailView={true} />
            <CommentComposer />
            <div className="flex flex-col">
                {comments.map(comment => (
                    <CommentCard key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
};
