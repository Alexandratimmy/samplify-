import React, { useState, useEffect } from 'react';
import { MOCK_CONVERSATIONS, MOCK_MESSAGES, MOCK_USERS } from '../data/mock';
import type { Conversation, Message } from '../types';
import { Avatar } from '../components/Avatar';
import { SendIcon, ArrowLeftIcon, MessageIcon } from '../components/Icons';

const PageHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="border-b border-slate-700 pb-4 mb-6 px-4 md:px-0">
    <h1 className="text-2xl font-bold text-white">{title}</h1>
    <p className="text-gray-400">{description}</p>
  </div>
);

const ConversationPreview: React.FC<{ conv: Conversation, isSelected: boolean, onClick: () => void }> = ({ conv, isSelected, onClick }) => (
    <button onClick={onClick} className={`w-full text-left flex items-center gap-3 p-3 rounded-lg transition ${isSelected ? 'bg-slate-700' : 'hover:bg-slate-800'}`}>
        <div className="relative">
            <Avatar src={conv.participant.avatarUrl} alt={conv.participant.name} className="w-12 h-12" />
            {conv.unreadCount > 0 && 
                <span className="absolute -top-1 -right-1 bg-[#c142c4] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {conv.unreadCount}
                </span>
            }
        </div>
        <div className="flex-1 overflow-hidden">
            <div className="flex justify-between items-center">
                <p className="font-semibold text-white truncate">{conv.participant.name}</p>
                <p className="text-xs text-gray-400 flex-shrink-0">{conv.lastMessageTimestamp}</p>
            </div>
            <p className={`text-sm truncate ${conv.unreadCount > 0 ? 'text-white font-semibold' : 'text-gray-400'}`}>{conv.lastMessage}</p>
        </div>
    </button>
)

const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
    const isMe = message.senderId === 'me';
    const sender = isMe ? null : MOCK_USERS.find(u => u.id === message.senderId);
    return (
        <div className={`flex items-end gap-2 ${isMe ? 'justify-end' : 'justify-start'}`}>
            {!isMe && <Avatar src={sender?.avatarUrl || ''} alt={sender?.name || ''} className="w-8 h-8"/>}
            <div className={`max-w-xs md:max-w-md p-3 rounded-2xl ${isMe ? 'bg-[#c142c4] text-white rounded-br-none' : 'bg-slate-700 text-gray-200 rounded-bl-none'}`}>
                <p>{message.content}</p>
            </div>
        </div>
    )
}

export const Messages: React.FC = () => {
    const [selectedConv, setSelectedConv] = useState<Conversation | null>(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        if (mediaQuery.matches && !selectedConv) {
            setSelectedConv(MOCK_CONVERSATIONS[1]);
        }
    }, [selectedConv]);

    const messages = selectedConv ? MOCK_MESSAGES.filter(m => m.conversationId === selectedConv.id) : [];

    return (
        <div>
            <PageHeader title="Messages" description="Your direct conversations." />
            <div className="grid grid-cols-1 md:grid-cols-[320px_minmax(0,_1fr)] border border-slate-700 rounded-2xl h-[calc(100vh-170px)] md:h-[calc(100vh-190px)]">
                {/* Conversations List */}
                <div className={`flex-col gap-1 p-2 md:border-r border-slate-700 overflow-y-auto ${selectedConv ? 'hidden' : 'flex'} md:flex`}>
                    {MOCK_CONVERSATIONS.map(conv => (
                        <ConversationPreview 
                            key={conv.id} 
                            conv={conv}
                            isSelected={selectedConv?.id === conv.id}
                            onClick={() => setSelectedConv(conv)}
                        />
                    ))}
                </div>

                {/* Chat Window */}
                {selectedConv ? (
                    <div className="flex flex-col h-full">
                        {/* Chat Header */}
                        <div className="flex items-center gap-3 p-3 border-b border-slate-700 flex-shrink-0">
                             <button onClick={() => setSelectedConv(null)} className="md:hidden h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-800 transition">
                                <ArrowLeftIcon className="h-6 w-6" />
                            </button>
                            <Avatar src={selectedConv.participant.avatarUrl} alt={selectedConv.participant.name} className="w-10 h-10" />
                            <div>
                                <p className="font-bold text-white">{selectedConv.participant.name}</p>
                                <p className="text-sm text-gray-400">@{selectedConv.participant.handle}</p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 flex flex-col-reverse gap-4 overflow-y-auto">
                            {[...messages].reverse().map(msg => (
                               <MessageBubble key={msg.id} message={msg} />
                            ))}
                        </div>

                        {/* Message Input */}
                        <div className="p-4 border-t border-slate-700 flex-shrink-0">
                            <div className="relative">
                                 <input
                                    type="text"
                                    placeholder="Start a new message"
                                    className="w-full bg-slate-800 border border-slate-600 rounded-2xl h-12 pl-4 pr-12 text-base focus:ring-2 focus:ring-[#c142c4] focus:outline-none transition"
                                />
                                <button className="absolute inset-y-0 right-0 w-12 flex items-center justify-center text-gray-400 hover:text-[#c142c4] transition">
                                    <SendIcon className="w-6 h-6"/>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="hidden md:flex flex-col items-center justify-center h-full text-center p-4">
                        <MessageIcon className="w-16 h-16 text-slate-600 mb-4" />
                        <h2 className="text-xl font-bold text-white">Select a message</h2>
                        <p className="text-gray-400">Choose from your existing conversations to start chatting.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
