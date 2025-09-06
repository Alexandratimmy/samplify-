
export interface User {
  id: string;
  name: string;
  handle: string;
  avatarUrl: string;
  role?: 'Developer' | 'Creator' | 'Investor' | 'CEO' | 'Designer';
}

export interface Post {
  id: string;
  author: User;
  content: string;
  imageUrl?: string;
  createdAt: string;
  stats: {
    likes: number;
    comments: number;
    reposts: number;
  };
}

export interface Comment {
  id: string;
  postId: string;
  author: User;
  content: string;
  createdAt: string;
  likes: number;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string; // 'me' or user id
  content: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  participant: User;
  lastMessage: string;
  lastMessageTimestamp: string;
  unreadCount: number;
}