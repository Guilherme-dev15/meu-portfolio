import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '../types/portfolio';

interface BlogSectionProps {
  data: BlogPost[];
}

interface TitleProps {
  main: string;
  background: string;
}

const Title: React.FC<TitleProps> = ({ main, background }) => (
  <h2 className="text-5xl md:text-7xl font-extrabold text-white text-center mb-16 pt-8 relative">
    <span className="text-gray-500/10 tracking-widest text-[5rem] md:text-[8rem] absolute -top-10 left-1/2 transform -translate-x-1/2 z-0 whitespace-nowrap pointer-events-none">
      {background.toUpperCase()}
    </span>
    <span className="relative z-10">
      <span className="text-custom-gold">{main.toUpperCase().split(' ')[0]}</span>
      {' ' + main.toUpperCase().split(' ').slice(1).join(' ')}
    </span>
  </h2>
);

const BlogSection: React.FC<BlogSectionProps> = ({ data }) => (
  <section id="blog" className="min-h-screen p-4 md:p-10 bg-dark-bg">
    <Title main="My Blogs" background="Posts" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {data.map((post, index) => (
        <div
          key={index}
          className="bg-dark-card rounded-lg shadow-xl overflow-hidden group transition duration-300 hover:shadow-custom-gold/20"
        >
          <div className="overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-custom-gold transition duration-300 h-14">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.snippet}</p>
            <button className="text-custom-gold text-sm font-semibold hover:text-white transition duration-300 flex items-center">
              LER MAIS <ArrowRight size={14} className="ml-2" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default BlogSection;
