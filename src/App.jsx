import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react';

import Introduction from './components/views/Introduction';
import ToolSelected from './components/views/ToolSelected';
import CaseStudy1 from './components/views/CaseStudy1';
import CaseStudy2 from './components/views/CaseStudy2';
import TrafficAnalysis from './components/views/TrafficAnalysis';
import InsightsRecommendations from './components/views/InsightsRecommendations';
import Conclusion from './components/views/Conclusion';

const SLIDES = [
  Introduction,
  ToolSelected,
  CaseStudy1,
  CaseStudy2,
  TrafficAnalysis,
  InsightsRecommendations,
  Conclusion
];

const SLIDE_LABELS = [
  "Welcome",
  "Domains",
  "Benchmarking",
  "Mobile Layer",
  "Pipeline",
  "Manifesto",
  "Collaborate"
];

/* ─── Continuous Cinematic Video Background ─── */
const BackgroundVideo = () => (
  <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden" }}>
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.75 }}
    >
      <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260212_043536_e0d3c69f-5c0c-4533-8395-fbe962587446.mp4" type="video/mp4" />
    </video>
    <div style={{
      position: "absolute",
      inset: 0,
      background: "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)",
      backdropFilter: "blur(2px)"
    }} />
  </div>
);

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Resize listener to adapt gracefully to mobile viewports
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    if (isMobile) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, isMobile]);

  // Touch Swipe Gesture Detectors for mobile/tablet sliding
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diffX = touchStartX.current - touchEndX.current;
    if (Math.abs(diffX) > 60) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const nextSlide = () => {
    if (currentSlide < SLIDES.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div 
      className="grain"
      style={{
        minHeight: "100vh",
        position: "relative",
        background: "#000000",
        overflow: isMobile ? "auto" : "hidden"
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <BackgroundVideo />

      {/* Content Overlay Layer */}
      <div style={{ position: "relative", zIndex: 10 }}>
        
        {/* Navigation Header Bar */}
        <header style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: isMobile ? '16px 20px' : '24px 48px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(255,255,255,0.03)'
        }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="heading" style={{
              fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.08em',
              background: 'linear-gradient(to right, #ffffff 50%, rgba(255,255,255,0.45) 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>
              J.S
            </div>

            {/* Nav Bullets Indicator */}
            {!isMobile && (
              <div style={{ display: 'flex', gap: '20px', padding: '8px 16px', borderRadius: '100px' }} className="glass-sm">
                {SLIDES.map((_, idx) => (
                  <div
                    key={idx}
                    className={`bullet-ring ${currentSlide === idx ? 'active' : ''}`}
                    onClick={() => {
                      setDirection(idx > currentSlide ? 1 : -1);
                      setCurrentSlide(idx);
                    }}
                    title={SLIDE_LABELS[idx]}
                  >
                    <div
                      style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: currentSlide === idx ? 'var(--text-main)' : 'rgba(255, 255, 255, 0.3)',
                        transition: 'background 0.3s ease, transform 0.3s ease',
                        transform: currentSlide === idx ? 'scale(1.2)' : 'scale(1)'
                      }}
                    />
                    {currentSlide === idx && (
                      <span className="label" style={{
                        position: 'absolute', top: '26px', fontSize: '0.5rem',
                        color: 'white', whiteSpace: 'nowrap', letterSpacing: '0.12em'
                      }}>
                        {SLIDE_LABELS[idx]}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            <a href="mailto:l0cjanarthansrvspm@gmail.com" className="btn-glass" style={{ padding: '8px 20px', fontSize: '0.78rem' }}>
              <Mail size={13} /> Get In Touch
            </a>
          </div>
        </header>

        {/* Slides Viewport - Stacked Scroll on Mobile vs 3D Deck on Desktop */}
        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', padding: '100px 20px 40px 20px', maxWidth: '800px', margin: '0 auto' }}>
            {SLIDES.map((SlideComponent, idx) => (
              <div key={idx} className="slide-container-mobile" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '40px' }}>
                <SlideComponent isActive={true} />
              </div>
            ))}
          </div>
        ) : (
          <div className="perspective-container">
            <main className="preserve-3d" style={{ 
              position: 'relative', width: '90vw', maxWidth: '1400px', height: '78vh',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transformStyle: 'preserve-3d', marginTop: '4vh'
            }}>
              {SLIDES.map((SlideComponent, idx) => {
                const offset = idx - currentSlide;
                
                let transform = '';
                let opacity = 0;
                let pointerEvents = 'none';

                if (offset === 0) {
                  transform = 'translateZ(0) rotateY(0deg) scale(1)';
                  opacity = 1;
                  pointerEvents = 'auto';
                } else if (offset === 1) {
                  transform = 'translateZ(-300px) translateX(65%) rotateY(-20deg) scale(0.85)';
                  opacity = 0.35;
                } else if (offset === -1) {
                  transform = 'translateZ(-300px) translateX(-65%) rotateY(20deg) scale(0.85)';
                  opacity = 0.35;
                } else if (offset > 1) {
                  transform = 'translateZ(-600px) translateX(120%) rotateY(-35deg) scale(0.7)';
                  opacity = 0;
                } else if (offset < -1) {
                  transform = 'translateZ(-600px) translateX(-120%) rotateY(35deg) scale(0.7)';
                  opacity = 0;
                }

                return (
                  <div 
                    key={idx}
                    style={{
                      position: 'absolute', width: '100%', height: '100%',
                      transition: 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
                      transform, opacity, pointerEvents,
                      display: 'flex', flexDirection: 'column'
                    }}
                  >
                    <SlideComponent isActive={offset === 0} />
                  </div>
                );
              })}
            </main>

            {/* Bottom Controls Panel */}
            <div style={{ position: 'absolute', bottom: '32px', right: '48px', display: 'flex', gap: '16px', zIndex: 100 }}>
              <button 
                onClick={prevSlide}
                disabled={currentSlide === 0}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '50%',
                  width: '46px', height: '46px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
                  opacity: currentSlide === 0 ? 0.25 : 1, transition: 'all 0.3s ease', backdropFilter: 'blur(10px)'
                }}
                className="btn-glass"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentSlide === SLIDES.length - 1}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '50%',
                  width: '46px', height: '46px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', cursor: currentSlide === SLIDES.length - 1 ? 'not-allowed' : 'pointer',
                  opacity: currentSlide === SLIDES.length - 1 ? 0.25 : 1, transition: 'all 0.3s ease', backdropFilter: 'blur(10px)'
                }}
                className="btn-glass"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Bottom Keyboard Helper */}
            <div className="label hide-mobile" style={{
              position: 'absolute', bottom: '44px', left: '48px',
              fontSize: '0.55rem', opacity: 0.4, letterSpacing: '0.15em'
            }}>
              Use &larr; &rarr; Arrow Keys to Navigate Slide Deck
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default App;
