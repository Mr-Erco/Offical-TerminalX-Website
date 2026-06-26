import { motion } from "motion/react";
import { useMemo, useState, useEffect, useRef } from "react";

function useIsSmallScreen() {
  const [small, setSmall] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onResize() {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setSmall(window.innerWidth < 768);
      }, 150);
    }
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return small;
}

export default function FuturisticBackground() {
  const isSmallScreen = useIsSmallScreen();
  const m = isSmallScreen ? 0.6 : 1;

  const spheres = useMemo(
    () => [
      { size: 400 * m, x: 10, y: 20, duration: 25, delay: 0, opacity: 0.4 },
      { size: 300 * m, x: 70, y: 30, duration: 30, delay: 2, opacity: 0.35 },
      { size: 250 * m, x: 30, y: 60, duration: 28, delay: 4, opacity: 0.3 },
      { size: 200 * m, x: 80, y: 70, duration: 22, delay: 1, opacity: 0.28 },
      { size: 280 * m, x: 50, y: 10, duration: 26, delay: 3, opacity: 0.38 },
      { size: 180 * m, x: 20, y: 80, duration: 24, delay: 5, opacity: 0.32 },
      { size: 350 * m, x: 85, y: 50, duration: 32, delay: 2.5, opacity: 0.36 },
    ],
    [m]
  );

  const abstractShapes = useMemo(
    () => [
      { path: "M 0,100 Q 50,0 100,50 T 200,100", y: 20, duration: 40, delay: 0 },
      { path: "M 0,50 Q 30,100 60,50 T 120,50", y: 60, duration: 35, delay: 5 },
      { path: "M 0,80 Q 40,20 80,80 T 160,80", y: 40, duration: 45, delay: 2 },
    ],
    []
  );

  // Stable particle positions — never recalculate on re-render
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: (((i * 137.508) % 100) + 100) % 100,
        top: (((i * 97.32) % 100) + 100) % 100,
        duration: 10 + (i % 10),
        delay: (i * 0.5) % 5,
      })),
    []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#0a0a0a]" />

      {/* Radial gradients for ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle,#4a4a4a_0%,transparent_70%)] opacity-40 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[900px] h-[900px] bg-[radial-gradient(circle,#3a3a3a_0%,transparent_70%)] opacity-50 blur-3xl" />

      {/* Floating spheres */}
      {spheres.map((sphere, index) => (
        <motion.div
          key={`sphere-${index}`}
          className="absolute rounded-full"
          style={{
            width: sphere.size,
            height: sphere.size,
            left: `${sphere.x}%`,
            top: `${sphere.y}%`,
            background: `radial-gradient(circle at 30% 30%, #a0a0a0 0%, #606060 30%, #3a3a3a 70%, #1a1a1a 100%)`,
            boxShadow: `
              0 0 ${sphere.size * 0.4}px ${sphere.size * 0.15}px rgba(255,255,255,0.15),
              inset 0 0 ${sphere.size * 0.3}px rgba(255,255,255,0.2),
              inset ${sphere.size * 0.15}px ${sphere.size * 0.15}px ${sphere.size * 0.3}px rgba(0,0,0,0.7)
            `,
            opacity: sphere.opacity,
            filter: "blur(3px)",
            willChange: "transform",
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, -20, 10, 0],
            scale: [1, 1.05, 0.95, 1.02, 1],
          }}
          transition={{
            duration: sphere.duration,
            delay: sphere.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Abstract flowing shapes */}
      {abstractShapes.map((shape, index) => (
        <motion.svg
          key={`shape-${index}`}
          className="absolute w-full h-32"
          style={{
            top: `${shape.y}%`,
            filter: "blur(3px)",
            opacity: 0.3,
            willChange: "transform",
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <defs>
            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0" />
              <stop offset="20%" stopColor="#6a6a6a" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#a0a0a0" stopOpacity="1" />
              <stop offset="80%" stopColor="#6a6a6a" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={shape.path}
            fill="none"
            stroke={`url(#gradient-${index})`}
            strokeWidth="5"
            strokeLinecap="round"
          />
        </motion.svg>
      ))}

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={`particle-${p.id}`}
          className="absolute w-1 h-1 rounded-full bg-[#808080]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: 0.4,
            filter: "blur(0.5px)",
            willChange: "transform, opacity",
          }}
          animate={{ y: [0, -100, -200], opacity: [0, 0.5, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
    </div>
  );
}
