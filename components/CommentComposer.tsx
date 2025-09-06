import React from 'react';
import { Avatar } from './Avatar';

export const CommentComposer: React.FC = () => {
  return (
    <div className="border-b border-slate-700 p-4">
      <div className="flex gap-4">
        <Avatar src="https://picsum.photos/seed/user1/48/48" alt="Your Avatar" />
        <div className="flex-1">
          <textarea
            placeholder="Post your reply"
            className="w-full bg-transparent text-lg placeholder-gray-500 focus:outline-none resize-none"
            rows={1}
          ></textarea>
        </div>
      </div>
      <div className="mt-2 flex justify-end">
        <button className="bg-[#fea334] text-white font-semibold px-5 py-2 rounded-2xl text-sm hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed">
          Reply
        </button>
      </div>
    </div>
  );
};
