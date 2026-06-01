import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Activity, Smartphone, Cpu } from 'lucide-react';

const ToolSelected = ({ isActive }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    if (isActive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'radial-gradient(circle at 50% 50%, #090514 0%, #000000 100%)',
      overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginLeft: '-5vw', marginTop: '-10vh'
    }}>
      
      {/* Background Animated Grid & Glow */}
      <div style={{
        position: 'absolute', width: '200%', height: '200%',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        transform: `perspective(500px) rotateX(60deg) translateY(${mousePosition.y * 30}px) translateX(${mousePosition.x * 30}px)`,
        transformOrigin: '50% 50%', zIndex: 0
      }} />

      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute', width: '60vw', height: '60vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)', zIndex: 1
        }}
      />

      {/* Primary Content Container */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1400px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4rem' }}>
        
        {/* Left Column - Typography */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          >
            <span style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '1rem', fontWeight: 600 }}>The Architectural Core</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 0.4, type: 'spring' }}
            className="display"
            style={{ 
              fontSize: '6.5rem', lineHeight: 0.9, fontWeight: 800, letterSpacing: '-0.04em', margin: 0,
              background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.4) 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              transform: `translateX(${mousePosition.x * -15}px) translateY(${mousePosition.y * -15}px)`
            }}
          >
            CORE<br />STACK
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.8 }}
            style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', maxWidth: '500px', lineHeight: 1.6, marginTop: '1rem' }}
          >
            My engineering stack bridges high-performance clients, distributed backend databases, and robust machine learning logic to build intelligent pipelines.
          </motion.p>
        </div>

        {/* Right Column - Floating Data Nodes */}
        <div style={{ flex: '1', height: '600px', position: 'relative' }}>
          {[
            { delay: 0.5, x: 50, y: 50, icon: <Globe size={32} color="var(--primary)"/>, title: 'Web Architectures', subtitle: 'React, Vite, CSS, State management' },
            { delay: 0.7, x: -50, y: 200, icon: <Activity size={32} color="var(--accent)"/>, title: 'Server Pipelines', subtitle: 'FastAPI, Node.js, REST API endpoints' },
            { delay: 0.9, x: 100, y: 350, icon: <Smartphone size={32} color="#34d399"/>, title: 'Mobile Clients', subtitle: 'Flutter cross-platform & Android native' },
            { delay: 1.1, x: -80, y: 500, icon: <Cpu size={32} color="#facc15"/>, title: 'Data Analytics', subtitle: 'TensorFlow, XGBoost, Scikit-learn models' }
          ].map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: node.delay, type: 'spring' }}
              style={{
                position: 'absolute', top: node.y, left: `calc(50% + ${node.x}px)`,
                transform: `translateX(${mousePosition.x * (25 * (i+1))}px) translateY(${mousePosition.y * (25 * (i+1))}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px',
                padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1.25rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05)',
                minWidth: '300px'
              }}>
                <div style={{ padding: '0.85rem', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {node.icon}
                </div>
                <div>
                  <h3 className="heading" style={{ fontSize: '1.05rem', color: 'white', margin: 0 }}>{node.title}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>{node.subtitle}</span>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Connecting Lines SVG */}
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <motion.path 
              d="M 250 100 Q 150 200 150 250 T 300 400"
              fill="transparent" stroke="rgba(99,102,241,0.15)" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1 }}
            />
            <motion.path 
              d="M 150 280 Q 200 350 120 550"
              fill="transparent" stroke="rgba(236,72,153,0.15)" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.5 }}
            />
          </svg>
        </div>

      </div>
    </div>
  );
};

export default ToolSelected;
