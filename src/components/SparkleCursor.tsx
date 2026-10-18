import { useEffect, useState } from 'react';

interface SparkleTrail {
  id: number;
  x: number;
  y: number;
  size: number;
}

export function SparkleCursor() {
  const [sparkles, setSparkles] = useState<SparkleTrail[]>([]);

  useEffect(() => {
    // Only run on desktop with fine pointer, and respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let counter = 0;
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      // Throttle sparkle creation to every 45ms
      if (now - lastTime < 45) return;
      lastTime = now;

      const newSparkle: SparkleTrail = {
        id: counter++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 4 + 3,
      };

      setSparkles((prev) => [...prev.slice(-12), newSparkle]);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Clean up old sparkles periodically
    const interval = setInterval(() => {
      setSparkles((prev) => (prev.length > 0 ? prev.slice(1) : prev));
    }, 120);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  if (sparkles.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-500 ease-out animate-ping"
          style={{
            left: `${s.x}px`,
            top: `${s.y}px`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: '#F1D77A',
            boxShadow: '0 0 8px rgba(212, 175, 55, 0.8)',
            opacity: 0.75,
          }}
        />
      ))}
    </div>
  );
}
