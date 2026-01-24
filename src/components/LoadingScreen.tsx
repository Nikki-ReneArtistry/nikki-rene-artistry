import { useState, useEffect } from "react";
import logo from "@/assets/logo-new.png";

interface LoadingScreenProps {
  onComplete: () => void;
  minDuration?: number;
}

interface Butterfly {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
  delay: number;
  duration: number;
  angle: number;
}

const LoadingScreen = ({ onComplete, minDuration = 5550 }: LoadingScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);

  // This logo PNG's artwork isn't visually centered within its bounding box (circle on left, butterfly on right).
  // We nudge the image left slightly so the circle appears centered on the page.
  const logoVisualOffsetClass = "-translate-x-[70px]";

  useEffect(() => {
    // Fade in after mount
    setTimeout(() => setIsVisible(true), 100);

    // Generate butterflies after logo appears - starting from circle edge only
    setTimeout(() => {
      const circleRadius = 280; // Radius where butterflies spawn (edge of circle in logo)
      const newButterflies: Butterfly[] = Array.from({ length: 28 }, (_, i) => {
        const startAngle = (i / 28) * Math.PI * 2 + Math.random() * 0.2;
        const startX = Math.cos(startAngle) * circleRadius;
        const startY = Math.sin(startAngle) * circleRadius;
        const flyDistance = 300 + Math.random() * 400;
        const endX = Math.cos(startAngle) * (circleRadius + flyDistance);
        const endY = Math.sin(startAngle) * (circleRadius + flyDistance);

        return {
          id: i,
          startX,
          startY,
          endX,
          endY,
          size: 32 + Math.random() * 24,
          delay: Math.random() * 2.5,
          duration: 3 + Math.random() * 2,
          angle: (startAngle * 180) / Math.PI + 90,
        };
      });
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
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`text-center transition-all duration-700 ${isExiting ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
      >
        {/* Logo with fade in/out animation and butterflies */}
        <div className="mb-8 flex items-center justify-center relative">
          <img
            src={logo}
            alt="Nikki Rene Artistry Logo"
            className={`h-[40rem] w-[40rem] object-contain transition-opacity duration-1000 transform-gpu ${logoVisualOffsetClass} ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Lavender butterflies flying from circle edge outward */}
          {butterflies.map((butterfly) => (
            <div
              key={butterfly.id}
              className="absolute pointer-events-none"
              style={
                {
                  animation: `flyFromEdge ${butterfly.duration}s ease-out ${butterfly.delay}s forwards`,
                  "--start-x": `${butterfly.startX}px`,
                  "--start-y": `${butterfly.startY}px`,
                  "--end-x": `${butterfly.endX}px`,
                  "--end-y": `${butterfly.endY}px`,
                  "--rotate": `${butterfly.angle}deg`,
                  // IMPORTANT: Before the animation starts (during the delay), we must still be invisible and
                  // positioned on the circle edge. Otherwise the browser may briefly render at (0,0) (center).
                  opacity: 0,
                  transform: "translate(var(--start-x), var(--start-y)) rotate(var(--rotate)) scale(1)",
                  willChange: "transform, opacity",
                } as React.CSSProperties
              }
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
                <path d="M12 12C12 12 6 8 4 5C2 2 3 1 5 2C7 3 12 8 12 12Z" fill="#efdcff" fillOpacity="0.9" />
                <path d="M12 12C12 12 5 14 2 16C-1 18 -1 20 1 19C3 18 12 14 12 12Z" fill="#efdcff" fillOpacity="0.7" />
                {/* Right wing */}
                <path d="M12 12C12 12 18 8 20 5C22 2 21 1 19 2C17 3 12 8 12 12Z" fill="#efdcff" fillOpacity="0.9" />
                <path
                  d="M12 12C12 12 19 14 22 16C25 18 25 20 23 19C21 18 12 14 12 12Z"
                  fill="#efdcff"
                  fillOpacity="0.7"
                />
                {/* Body */}
                <ellipse cx="12" cy="12" rx="1" ry="4" fill="#d4b8e8" />
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
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: "0ms" }} />
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: "200ms" }} />
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: "400ms" }} />
        </div>
      </div>

      <style>{`
        @keyframes flyFromEdge {
          0% {
            transform: translate(var(--start-x), var(--start-y)) rotate(var(--rotate)) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translate(var(--start-x), var(--start-y)) rotate(var(--rotate)) scale(1);
          }
          100% {
            transform: translate(var(--end-x), var(--end-y)) rotate(var(--rotate)) scale(0.7);
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
