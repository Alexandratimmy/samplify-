
import type { User, Post, Comment, Conversation, Message } from '../types';

export const MOCK_USERS: User[] = [
  { id: '1', name: 'Alex Maker', handle: 'alexmaker', avatarUrl: 'https://picsum.photos/seed/user1/48/48', role: 'Developer' },
  { id: '2', name: 'Elena Voyage', handle: 'elenavoyage', avatarUrl: 'https://picsum.photos/seed/user2/48/48', role: 'Designer' },
  { id: '3', name: 'Code Artisan', handle: 'codeart', avatarUrl: 'https://picsum.photos/seed/user3/48/48', role: 'Developer' },
  { id: '4', name: 'Capital Jane', handle: 'investjane', avatarUrl: 'https://picsum.photos/seed/user4/48/48', role: 'Investor' },
];

export const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    author: MOCK_USERS[1],
    createdAt: '2h',
    content: 'Excited to share a sneak peek of our upcoming design system, "Starlight". We focused on accessibility and motion to create a more intuitive experience. #design #uiux #buildinpublic',
    imageUrl: 'https://picsum.photos/seed/post1/600/400',
    stats: {
      likes: 128,
      comments: 3,
      reposts: 45,
    },
  },
  {
    id: 'p2',
    author: MOCK_USERS[0],
    createdAt: '5h',
    content: `Just pushed v0.3 of my side project, an AI-powered code documentation tool. It now supports TypeScript and Python! 
Looking for feedback from the community. 
Check it out: https://github.com/alexmaker/ai-docs`,
    stats: {
      likes: 256,
      comments: 2,
      reposts: 98,
    },
  },
    {
    id: 'p3',
    author: MOCK_USERS[3],
    createdAt: '8h',
    content: 'What are the most promising early-stage SaaS trends you are seeing right now? Particularly interested in dev tools and vertical AI. #saas #vc #investing',
    stats: {
      likes: 95,
      comments: 1,
      reposts: 15,
    },
  },
  {
    id: 'p4',
    author: MOCK_USERS[2],
    createdAt: '1d',
    content: 'After 6 months of building, we are finally launching our marketplace for indie game assets next week! Huge thank you to our beta testers. Pre-launch page is up! #gamedev #indiedev #launch',
    imageUrl: 'https://picsum.photos/seed/post2/600/350',
    stats: {
      likes: 512,
      comments: 0,
      reposts: 170,
    },
  },
];

export const MOCK_COMMENTS: Comment[] = [
    { id: 'c1', postId: 'p1', author: MOCK_USERS[0], content: 'This looks amazing! The motion details are super smooth.', createdAt: '1h', likes: 15 },
    { id: 'c2', postId: 'p1', author: MOCK_USERS[2], content: 'Can\'t wait to try this out in our next project. Great work!', createdAt: '45m', likes: 8 },
    { id: 'c3', postId: 'p1', author: MOCK_USERS[3], content: 'From an investor perspective, this is the kind of polish that adds serious value. Looks very professional.', createdAt: '30m', likes: 22 },
    { id: 'c4', postId: 'p2', author: MOCK_USERS[1], content: 'This is a game-changer for documentation. As a designer, I appreciate how this can bridge the gap between code and design specs.', createdAt: '4h', likes: 18 },
    { id: 'c5', postId: 'p2', author: MOCK_USERS[2], content: 'Just tried it with one of my Python projects. Worked like a charm. Starred!', createdAt: '2h', likes: 30 },
    { id: 'c6', postId: 'p3', author: MOCK_USERS[0], content: 'I\'m seeing a lot of traction in hyper-personalized AI tutors for niche skills. For dev tools, anything that reduces CI/CD complexity seems to be hot right now.', createdAt: '7h', likes: 40 },
];

export const MOCK_CONVERSATIONS: Conversation[] = [
    { id: 'conv1', participant: MOCK_USERS[1], lastMessage: 'Yeah, let\'s sync up tomorrow morning. I\'ll send an invite.', lastMessageTimestamp: '10m ago', unreadCount: 0 },
    { id: 'conv2', participant: MOCK_USERS[2], lastMessage: 'Just saw the launch post, congrats!', lastMessageTimestamp: '1h ago', unreadCount: 2 },
    { id: 'conv3', participant: MOCK_USERS[3], lastMessage: 'Thanks for the intro, I\'ve reached out to them.', lastMessageTimestamp: 'yesterday', unreadCount: 0 },
];

export const MOCK_MESSAGES: Message[] = [
    { id: 'm1', conversationId: 'conv1', senderId: '2', content: 'Hey Alex, great job on the latest push for the AI docs tool!', timestamp: '1h ago' },
    { id: 'm2', conversationId: 'conv1', senderId: 'me', content: 'Thanks, Elena! Appreciate you checking it out.', timestamp: '58m ago' },
    { id: 'm3', conversationId: 'conv1', senderId: '2', content: 'I had a couple of ideas for the UI, do you have 15 mins to chat this week?', timestamp: '55m ago' },
    { id: 'm4', conversationId: 'conv1', senderId: 'me', content: 'Absolutely! How about tomorrow morning?', timestamp: '30m ago' },
    { id: 'm5', conversationId: 'conv1', senderId: '2', content: 'Perfect. I have a slot at 10am EST.', timestamp: '25m ago' },
    { id: 'm6', conversationId: 'conv1', senderId: 'me', content: 'Yeah, let\'s sync up tomorrow morning. I\'ll send an invite.', timestamp: '10m ago' },

    { id: 'm7', conversationId: 'conv2', senderId: '3', content: 'Just saw the launch post, congrats!', timestamp: '1h ago' },
    { id: 'm8', conversationId: 'conv2', senderId: '3', content: 'The marketplace looks fantastic.', timestamp: '1h ago' },

    { id: 'm9', conversationId: 'conv3', senderId: 'me', content: 'Hey Jane, I was wondering if you knew anyone at Catalyst Ventures?', timestamp: '2 days ago' },
    { id: 'm10', conversationId: 'conv3', senderId: '4', content: 'I do, actually. I can make an introduction. What\'s the context?', timestamp: 'yesterday' },
    { id: 'm11', conversationId: 'conv3', senderId: 'me', content: 'We\'re starting our seed round for the AI docs tool and they seem like a great fit.', timestamp: 'yesterday' },
    { id: 'm12', conversationId: 'conv3', senderId: '4', content: 'Sounds interesting. Send me a one-pager and I\'ll forward it. Email is fine.', timestamp: 'yesterday' },
    { id: 'm13', conversationId: 'conv3', senderId: 'me', content: 'Thanks for the intro, I\'ve reached out to them.', timestamp: 'yesterday' },
];