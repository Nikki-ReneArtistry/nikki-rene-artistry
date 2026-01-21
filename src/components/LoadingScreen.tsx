import { useState, useEffect } from 'react';
import logo from '@/assets/logo-new.png';

interface LoadingScreenProps {
  onComplete: () => void;
  minDuration?: number;
}

const LoadingScreen = ({ onComplete, minDuration = 5550 }: LoadingScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in after mount
    setTimeout(() => setIsVisible(true), 100);
    
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 800); // Wait for fade out animation
    }, minDuration);

    return () => clearTimeout(timer);
  }, [onComplete, minDuration]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className={`text-center transition-all duration-700 ${isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {/* Logo with fade in/out animation */}
        <div className="mb-8 flex items-center justify-center">
          <img 
            src={logo} 
            alt="Nikki Rene Artistry Logo" 
            className={`h-80 w-80 object-contain transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wider text-foreground mb-4 fade-in-up">
          Nikki Rene
        </h1>
        <p className="text-lg md:text-xl tracking-[0.3em] uppercase text-primary font-light fade-in-up fade-in-delay-2">
          Artistry
        </p>
        
        {/* Subtle loading indicator */}
        <div className="mt-12 flex justify-center gap-1.5 fade-in-up fade-in-delay-3">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: '0ms' }} />
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: '200ms' }} />
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: '400ms' }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
