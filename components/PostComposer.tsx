
import React, { useState } from 'react';
import { Avatar } from './Avatar';
import { ImageIcon, PollIcon, LinkIcon, CalendarIcon, SparklesIcon, SpinnerIcon } from './Icons';
import { GoogleGenAI } from '@google/genai';

export const PostComposer: React.FC = () => {
  const [content, setContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!content.trim() || isGenerating) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `You are an expert copywriter for a social media platform for tech professionals, developers, and investors called Samplify.
      Your goal is to expand on the user's idea and create an engaging post.
      The post should be concise, professional, and must include relevant hashtags like #buildinpublic, #dev, #saas, #ai, etc.
      Do not use markdown formatting. Just return the plain text for the post.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: content,
        config: {
          systemInstruction,
        },
      });

      const text = response.text;
      setContent(text);
    } catch (error) {
      console.error("Error generating post content:", error);
      // In a real app, show a toast or error message to the user.
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4">
      <div className="flex gap-4">
        <Avatar src="https://picsum.photos/seed/user1/48/48" alt="Your Avatar" />
        <div className="flex-1">
          <textarea
            placeholder="What are you building today? Try an idea and generate with AI..."
            className="w-full bg-transparent text-lg placeholder-gray-500 focus:outline-none resize-none"
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={isGenerating}
          ></textarea>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button className="h-9 w-9 flex items-center justify-center rounded-full text-gray-400 hover:bg-slate-700 hover:text-[#c142c4] transition">
            <ImageIcon className="h-5 w-5" />
          </button>
          <button className="h-9 w-9 flex items-center justify-center rounded-full text-gray-400 hover:bg-slate-700 hover:text-[#c142c4] transition">
            <PollIcon className="h-5 w-5" />
          </button>
          <button className="h-9 w-9 flex items-center justify-center rounded-full text-gray-400 hover:bg-slate-700 hover:text-[#c142c4] transition">
            <LinkIcon className="h-5 w-5" />
          </button>
           <button className="h-9 w-9 flex items-center justify-center rounded-full text-gray-400 hover:bg-slate-700 hover:text-[#c142c4] transition">
            <CalendarIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-3">
            <button 
              onClick={handleGenerate}
              disabled={!content.trim() || isGenerating}
              className="flex items-center justify-center gap-2 w-44 bg-slate-700/50 border border-slate-600 text-white font-semibold px-4 py-2 rounded-2xl text-sm hover:bg-slate-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <SpinnerIcon className="h-5 w-5" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <SparklesIcon className="h-5 w-5 text-[#c142c4]" />
                  <span>Generate with AI</span>
                </>
              )}
            </button>
            <button 
              disabled={!content.trim() || isGenerating}
              className="bg-[#fea334] text-white font-semibold px-5 py-2 rounded-2xl text-sm hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed">
              Post
            </button>
        </div>
      </div>
    </div>
  );
};
