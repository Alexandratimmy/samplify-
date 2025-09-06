import React from 'react';
import { MOCK_USERS } from '../data/mock';

const PageHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="border-b border-slate-700 pb-4 mb-6">
    <h1 className="text-2xl font-bold text-white">{title}</h1>
    <p className="text-gray-400">{description}</p>
  </div>
);

interface Project {
  id: string;
  name: string;
  summary: string;
  coverUrl: string;
  tags: string[];
  team: typeof MOCK_USERS;
}

const mockProjects: Project[] = [
  { id: 'proj1', name: 'AI Docs Generator', summary: 'An open-source tool to automatically generate documentation from code comments.', coverUrl: 'https://picsum.photos/seed/proj1/500/150', tags: ['AI', 'Developer Tool', 'Open Source'], team: [MOCK_USERS[0], MOCK_USERS[2]] },
  { id: 'proj2', name: 'Project Phoenix', summary: 'A decentralized social network focused on user privacy and data ownership.', coverUrl: 'https://picsum.photos/seed/proj2/500/150', tags: ['Web3', 'Social', 'Privacy'], team: [MOCK_USERS[1], MOCK_USERS[3]] },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden transition hover:bg-slate-800/80">
    <img src={project.coverUrl} alt={`${project.name} cover`} className="w-full h-24 object-cover"/>
    <div className="p-4">
      <h3 className="text-xl font-bold text-white">{project.name}</h3>
      <p className="text-gray-400 mt-1 mb-3">{project.summary}</p>
      <div className="flex gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs font-semibold bg-slate-700 text-slate-300 py-1 px-2 rounded-full">#{tag}</span>
        ))}
      </div>
       <div className="flex items-center justify-between">
         <div className="flex items-center -space-x-2">
            {project.team.map(member => (
                <img key={member.id} src={member.avatarUrl} alt={member.name} className="w-8 h-8 rounded-full border-2 border-slate-800" />
            ))}
        </div>
        <button className="bg-slate-700 text-white font-semibold px-4 py-1.5 rounded-2xl text-sm hover:bg-slate-600 transition">
            Follow
        </button>
       </div>
    </div>
  </div>
);

export const Projects: React.FC = () => {
  return (
    <div>
        <PageHeader title="Projects" description="Follow the journey of what's being built."/>
        <div className="flex flex-col gap-6">
            {mockProjects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
    </div>
  );
};