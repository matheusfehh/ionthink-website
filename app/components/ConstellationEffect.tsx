'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ConstellationEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    
    // Set canvas size
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Constellation settings
    const stars: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];
    const numStars = 50;
    const maxDistance = 100;

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Update and draw stars
      stars.forEach((star, i) => {
        star.x += star.vx;
        star.y += star.vy;

        // Bounce off edges
        if (star.x < 0 || star.x > rect.width) star.vx *= -1;
        if (star.y < 0 || star.y > rect.height) star.vy *= -1;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark 
          ? `rgba(255, 255, 255, ${star.opacity * 0.6})` 
          : `rgba(75, 85, 99, ${star.opacity * 0.4})`;
        ctx.fill();

        // Draw connections
        stars.forEach((otherStar, j) => {
          if (i === j) return;

          const dx = star.x - otherStar.x;
          const dy = star.y - otherStar.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            const lineOpacity = (1 - distance / maxDistance) * 0.3;
            ctx.strokeStyle = isDark 
              ? `rgba(255, 255, 255, ${lineOpacity})` 
              : `rgba(75, 85, 99, ${lineOpacity * 0.6})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default ConstellationEffect;

