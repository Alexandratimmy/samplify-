import React, { useState } from 'react';
import { MOCK_USERS } from '../data/mock';
import { Avatar } from '../components/Avatar';

const PageHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="border-b border-slate-700 pb-4 mb-6">
    <h1 className="text-2xl font-bold text-white">{title}</h1>
    <p className="text-gray-400">{description}</p>
  </div>
);

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    thumbnailUrl: string;
    creator: typeof MOCK_USERS[0];
}

const mockProducts: Product[] = [
    { id: 'm1', name: 'Synthwave UI Kit', category: 'UI Kit', price: 49, thumbnailUrl: 'https://picsum.photos/seed/prod1/300/200', creator: MOCK_USERS[1] },
    { id: 'm2', name: 'React Component Library', category: 'Code', price: 99, thumbnailUrl: 'https://picsum.photos/seed/prod2/300/200', creator: MOCK_USERS[0] },
    { id: 'm3', name: '3D Icon Set', category: 'Assets', price: 29, thumbnailUrl: 'https://picsum.photos/seed/prod3/300/200', creator: MOCK_USERS[1] },
    { id: 'm4', name: 'Minimalist Mockup Pack', category: 'Mockups', price: 39, thumbnailUrl: 'https://picsum.photos/seed/prod4/300/200', creator: MOCK_USERS[2] },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (isAdded) return;
        
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    }

    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl group transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#c142c4] hover:shadow-2xl hover:shadow-[#c142c4]/10">
            <div className="aspect-[3/2] rounded-t-2xl overflow-hidden relative">
                <img src={product.thumbnailUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <button 
                        onClick={handleAddToCart}
                        className={`w-full h-12 rounded-2xl font-semibold text-base transition-all duration-300 ease-in-out transform ${
                            isAdded 
                            ? 'bg-green-500 text-white scale-100' 
                            : 'bg-white/90 text-slate-900 hover:bg-white hover:scale-105 group-hover:scale-100'
                        }`}
                        disabled={isAdded}
                    >
                        {isAdded ? 'Added!' : `Add for $${product.price}`}
                    </button>
                </div>
            </div>
            <div className="p-4">
                 <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white truncate">{product.name}</h3>
                    <span className="text-sm font-semibold bg-slate-700 text-green-400 py-1 px-2 rounded-full">${product.price}</span>
                 </div>
                <div className="flex items-center gap-2 mt-2">
                    <Avatar src={product.creator.avatarUrl} alt={product.creator.name} className="w-6 h-6" />
                    <span className="text-sm text-gray-400">{product.creator.name}</span>
                </div>
            </div>
        </div>
    )
}

export const Marketplace: React.FC = () => {
    return (
        <div>
            <PageHeader title="Marketplace" description="Discover tools and assets from the community." />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {mockProducts.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    );
};