import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';

interface LoadingScreenProps {
  onComplete: () => void;
  minDuration?: number;
}

const LoadingScreen = ({ onComplete, minDuration = 2000 }: LoadingScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
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
        {/* Logo centered on circle */}
        <div className="mb-8 w-24 h-24 mx-auto rounded-full border-2 border-primary/30 flex items-center justify-center relative">
          {/* Purple circle behind */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/25 to-primary/5 animate-pulse" />
          <img 
            src={logo} 
            alt="Nikki Rene Artistry Logo" 
            className="absolute left-1/2 top-1/2 z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 object-contain"
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
