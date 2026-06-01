import React from 'react';
import Card3D from '../ui/Card3D';
import { Smartphone, Cpu, BarChart3, Brain } from 'lucide-react';

const Introduction = ({ isActive }) => {
  return (
    <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ opacity: isActive ? 1 : 0, transition: 'opacity 1s ease', transitionDelay: '0.3s' }}>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '0.25rem', fontWeight: 600 }}>
            Welcome to my Workspace
          </h3>
          <h4 className="heading" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.5rem' }}>
            Designing • Building • Deploying
          </h4>
          <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '100px', border: '1px solid rgba(99, 102, 241, 0.2)', marginBottom: '1.5rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Available for Projects & Roles
            </span>
          </div>
        </div>

        <h1 className="text-gradient display" style={{ fontSize: '3.6rem', marginBottom: '0.5rem', textAlign: 'center', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
          Janarthan S
        </h1>
        <h2 style={{ fontSize: '1.35rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginBottom: '2rem', fontWeight: 400 }}>
          Android Developer • Full-Stack Engineer • Data Science Enthusiast
        </h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3.5rem' }}>
          <div className="glass" style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '0.75rem 2rem', borderRadius: '100px', background: 'rgba(255,255,255,0.025)' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>GitHub: <strong style={{ color: 'white' }}>Jana-06</strong></span>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }}></div>
            <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)' }}>Mail: <strong style={{ color: 'var(--secondary)' }}>l0cjanarthansrvspm@gmail.com</strong></span>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
          {[
            { icon: <Smartphone size={32} color="var(--primary)" />, title: 'Android Development', desc: 'Crafting fluid, high-performance cross-platform Flutter and native Android applications.' },
            { icon: <Cpu size={32} color="var(--secondary)" />, title: 'Full-Stack Engineering', desc: 'Building responsive web interfaces backed by fast, asynchronous API microservices.' },
            { icon: <BarChart3 size={32} color="var(--accent)" />, title: 'Data Science & Analytics', desc: 'Analyzing complex data sets to engineer predictive systems and user growth pipelines.' },
            { icon: <Brain size={32} color="#34d399" />, title: 'Intelligent AI Pipelines', desc: 'Integrating Large Language Models and semantic indexing search directly into production.' }
          ].map((item, idx) => (
            <Card3D key={idx} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', height: '100%', justifyContent: 'center' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.04)', borderRadius: '50%', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <h3 className="heading" style={{ fontSize: '1.1rem', fontWeight: 600 }}>{item.title}</h3>
              <p className="muted" style={{ fontSize: '0.8rem', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </Card3D>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
