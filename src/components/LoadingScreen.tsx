import { useState, useEffect } from 'react';
import logo from '@/assets/logo-new.png';

interface LoadingScreenProps {
  onComplete: () => void;
  minDuration?: number;
}

interface Butterfly {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  angle: number;
}

const LoadingScreen = ({ onComplete, minDuration = 5550 }: LoadingScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);

  useEffect(() => {
    // Fade in after mount
    setTimeout(() => setIsVisible(true), 100);

    // Generate butterflies after logo appears
    setTimeout(() => {
      const newButterflies: Butterfly[] = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 600,
        y: (Math.random() - 0.5) * 600,
        size: 16 + Math.random() * 12,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        angle: Math.random() * 360,
      }));
      setButterflies(newButterflies);
    }, 800);
    
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
        {/* Logo with fade in/out animation and butterflies */}
        <div className="mb-8 flex items-center justify-center relative">
          <img 
            src={logo} 
            alt="Nikki Rene Artistry Logo" 
            className={`h-80 w-80 object-contain transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Lavender butterflies flying from center */}
          {butterflies.map((butterfly) => (
            <div
              key={butterfly.id}
              className="absolute pointer-events-none"
              style={{
                animation: `flyAway ${butterfly.duration}s ease-out ${butterfly.delay}s forwards`,
                '--fly-x': `${butterfly.x}px`,
                '--fly-y': `${butterfly.y}px`,
                '--rotate': `${butterfly.angle}deg`,
              } as React.CSSProperties}
            >
              <svg
                width={butterfly.size}
                height={butterfly.size}
                viewBox="0 0 24 24"
                fill="none"
                className="animate-flutter"
                style={{
                  animationDelay: `${butterfly.delay}s`,
                }}
              >
                {/* Left wing */}
                <path
                  d="M12 12C12 12 6 8 4 5C2 2 3 1 5 2C7 3 12 8 12 12Z"
                  fill="hsl(259, 77%, 64%)"
                  fillOpacity="0.7"
                />
                <path
                  d="M12 12C12 12 5 14 2 16C-1 18 -1 20 1 19C3 18 12 14 12 12Z"
                  fill="hsl(259, 60%, 74%)"
                  fillOpacity="0.6"
                />
                {/* Right wing */}
                <path
                  d="M12 12C12 12 18 8 20 5C22 2 21 1 19 2C17 3 12 8 12 12Z"
                  fill="hsl(259, 77%, 64%)"
                  fillOpacity="0.7"
                />
                <path
                  d="M12 12C12 12 19 14 22 16C25 18 25 20 23 19C21 18 12 14 12 12Z"
                  fill="hsl(259, 60%, 74%)"
                  fillOpacity="0.6"
                />
                {/* Body */}
                <ellipse cx="12" cy="12" rx="1" ry="4" fill="hsl(259, 50%, 45%)" />
              </svg>
            </div>
          ))}
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

      <style>{`
        @keyframes flyAway {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          100% {
            transform: translate(var(--fly-x), var(--fly-y)) rotate(var(--rotate)) scale(0.6);
            opacity: 0;
          }
        }
        
        @keyframes flutter {
          0%, 100% {
            transform: scaleX(1) rotateY(0deg);
          }
          50% {
            transform: scaleX(0.3) rotateY(60deg);
          }
        }
        
        .animate-flutter {
          animation: flutter 0.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
