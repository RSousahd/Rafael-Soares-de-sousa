
import React, { useState, useEffect } from 'react';

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / totalScroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, target: string) => {
    if (target.startsWith('#') && currentPage === 'home') {
      // Allow default anchor behavior if on home
      return;
    }
    e.preventDefault();
    onNavigate('home');
    // Small delay to allow home to mount before scrolling
    setTimeout(() => {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-1000 ${scrolled ? 'bg-void-950/95 backdrop-blur-xl py-4 border-b border-ash-900/20' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1800px] mx-auto px-8 md:px-16 flex justify-between items-center">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <button onClick={() => onNavigate('home')} className="group relative font-serif text-4xl font-light tracking-tighter text-ash-200 transition-all duration-500 hover:text-white">
            1<span className="text-ember-500 drop-shadow-[0_0_8px_rgba(201,162,39,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(201,162,39,0.8)]">%</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-ember-500/50 transition-all duration-700 group-hover:w-full"></span>
          </button>
        </div>

        {/* Right: Menu */}
        <div className="flex items-center gap-8 md:gap-12 text-[10px] uppercase tracking-[0.4em] font-semibold text-ash-300">
          <button onClick={() => onNavigate('manifesto')} className={`hover:text-ember-400 transition-colors hidden sm:block ${currentPage === 'manifesto' ? 'text-ember-500' : ''}`}>Manifesto</button>
          <a href="#reflexao" onClick={(e) => handleLinkClick(e, '#reflexao')} className="hover:text-ember-400 transition-colors">Reflexão</a>
          <button 
            onClick={() => onNavigate('home')}
            className="text-ember-500 hover:text-ember-400 transition-all flex items-center gap-3 group"
          >
            <span className="hidden xs:inline tracking-[0.5em]">A Travessia</span>
            <div className="w-8 h-px bg-ember-500 transition-all group-hover:w-12"></div>
          </button>
        </div>
      </div>

      {/* Progress Bar (Only on Home) */}
      {currentPage === 'home' && (
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ash-900/10">
          <div 
            className="h-full bg-gradient-to-r from-transparent via-ember-500 to-transparent transition-all duration-300 ease-out shadow-[0_0_10px_rgba(201,162,39,0.4)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
