import React from 'react';
import { Home, User, Briefcase, Mail, BookOpen } from 'lucide-react';

type NavItemId = 'home' | 'about' | 'portfolio' | 'blog' | 'contact';

interface SidebarProps {
  activeSection: NavItemId;
  onNavClick: (id: NavItemId) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavClick }) => {
  const navItems = [
    { id: 'home' as const, icon: Home, label: 'Home' },
    { id: 'about' as const, icon: User, label: 'Sobre Mim' },
    { id: 'portfolio' as const, icon: Briefcase, label: 'Portfólio' },
    { id: 'blog' as const, icon: BookOpen, label: 'Blog' },
    { id: 'contact' as const, icon: Mail, label: 'Contato' },
  ];

  return (
    <aside className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-center space-y-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavClick(item.id)}
            className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 relative group ${
              activeSection === item.id
                ? 'bg-custom-gold text-white'
                : 'bg-dark-card text-gray-400 hover:bg-custom-gold'
            }`}
            aria-label={item.label}
          >
            <item.icon size={20} />
            <span className="absolute right-full mr-4 px-3 py-1 bg-custom-gold text-white text-xs font-bold rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none scale-0 group-hover:scale-100">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
