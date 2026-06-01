import React, { useState } from 'react';
import Card3D from '../ui/Card3D';
import { Mail, Check, ExternalLink } from 'lucide-react';

/* ─── Local SVG Icons (Lucide-react v1.x doesn't contain brand logos) ─── */
const GithubIcon = ({ size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Conclusion = ({ isActive }) => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "l0cjanarthansrvspm@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '800px', width: '100%', opacity: isActive ? 1 : 0, transition: 'all 1.5s cubic-bezier(0.16, 1, 0.3, 1)', transform: isActive ? 'translateY(0)' : 'translateY(40px)' }}>
        <Card3D style={{ padding: '3.5rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(99, 102, 241, 0.15))' }}>
          <h1 className="text-gradient display" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Conclusion
          </h1>
          
          <p className="muted" style={{ fontSize: '1.25rem', lineHeight: 1.6, marginBottom: '2.5rem', fontWeight: 300 }}>
            Intelligent pipelines are not just about numbers; they are the compass for modern software solutions.
            By merging backend analytics with interactive web and native clients, we can build 
            <span style={{ color: 'white', fontWeight: 500 }}> responsive, state-of-the-art products</span>.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <a href={`mailto:${emailAddress}`} className="btn-white">
              Get In Touch <Mail size={16} />
            </a>
            
            <button onClick={handleCopyEmail} className="btn-glass" style={{ minWidth: '150px' }}>
              {copied ? (
                <>Copied! <Check size={16} style={{ color: '#4ade80' }} /></>
              ) : (
                <>Copy Email <Mail size={16} /></>
              )}
            </button>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }}>
            <a href="https://github.com/Jana-06" target="_blank" rel="noopener noreferrer" className="btn-glass" style={{ padding: '8px 18px', fontSize: '0.8rem' }}>
              <GithubIcon size={16} /> GitHub
            </a>
            <a href="https://linkedin.com/in/janarthan-s-8476b81b5" target="_blank" rel="noopener noreferrer" className="btn-glass" style={{ padding: '8px 18px', fontSize: '0.8rem' }}>
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </div>
          
          <h3 className="display" style={{ marginTop: '3.5rem', fontSize: '1.35rem', color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>
            Thank you.
          </h3>
        </Card3D>
      </div>
    </div>
  );
};

export default Conclusion;
