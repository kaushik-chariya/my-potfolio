import React, { useEffect, useRef } from 'react';
import './AmbientBackground.css';

const AmbientBackground = () => {
  const cursorGlowRef = useRef(null);
  
  // Track mouse coordinates (target and current for smooth interpolation/lerp)
  const mouse = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const isMouseInWindow = useRef(false);

  useEffect(() => {
    // Check if we are in a browser environment (Next.js SSR safety)
    if (typeof window === 'undefined') return;

    // Set initial position to center of screen
    mouse.current.x = window.innerWidth / 2;
    mouse.current.y = window.innerHeight / 2;
    glowPos.current.x = window.innerWidth / 2;
    glowPos.current.y = window.innerHeight / 2;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!isMouseInWindow.current) {
        isMouseInWindow.current = true;
        if (cursorGlowRef.current) {
          cursorGlowRef.current.style.opacity = '1';
        }
      }
    };

    const handleMouseLeave = () => {
      isMouseInWindow.current = false;
      // Do not set opacity to 0 completely, let it transition to a soft center glow when mouse leaves
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.opacity = '0.5';
      }
    };

    const handleMouseEnter = () => {
      isMouseInWindow.current = true;
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.opacity = '1';
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        mouse.current.x = e.touches[0].clientX;
        mouse.current.y = e.touches[0].clientY;
        if (!isMouseInWindow.current) {
          isMouseInWindow.current = true;
          if (cursorGlowRef.current) {
            cursorGlowRef.current.style.opacity = '1';
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    let animationFrameId;
    
    // Smooth interpolation (lerp) loop
    const updateGlow = () => {
      // If mouse is not in window, simulate a slow, natural breathing/drifting path
      if (!isMouseInWindow.current) {
        const time = Date.now() * 0.0008;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        // Slow organic elliptical motion when idle
        mouse.current.x = centerX + Math.cos(time) * (window.innerWidth * 0.15);
        mouse.current.y = centerY + Math.sin(time * 0.8) * (window.innerHeight * 0.15);
      }

      // Linear interpolation (lerp): current = current + (target - current) * ease
      // Lower values (e.g. 0.02) create a smoother, more delayed/lagged follow effect
      const ease = 0.02;
      glowPos.current.x += (mouse.current.x - glowPos.current.x) * ease;
      glowPos.current.y += (mouse.current.y - glowPos.current.y) * ease;

      if (cursorGlowRef.current) {
        // Use translate3d to force GPU rendering for sub-pixel smooth rendering
        cursorGlowRef.current.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updateGlow);
    };

    updateGlow();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="ambient-background-container">
      {/* Dynamic cursor glowing light */}
      <div className="cursor-ambient-glow" ref={cursorGlowRef} />
      
      {/* Drifting background glow layers to create depth */}
      <div className="ambient-orb orb-warm" />
      <div className="ambient-orb orb-cool" />
      <div className="ambient-orb orb-neutral" />
    </div>
  );
};

export default AmbientBackground;
