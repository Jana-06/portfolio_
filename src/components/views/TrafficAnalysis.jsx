import React from 'react';
import Card3D from '../ui/Card3D';
import { Search, Code2, Database, Rocket, Link2, GitBranch, ArrowUpRight, Cpu, Eye } from 'lucide-react';

const TrafficAnalysis = ({ isActive }) => {
  return (
    <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h1 className="text-gradient display" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>
        Product Architecture Pipeline
      </h1>
      <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
        Understanding the Lifecycle from Concept to Live Deployment
      </p>

      {/* User Journey Flow */}
      <h3 className="heading" style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>1. The System Lifecycle</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', opacity: isActive ? 1 : 0, transition: 'all 1s ease', transitionDelay: '0.3s' }}>
        {[
          { icon: <Search size={28} color="var(--primary)"/>, title: 'Scope & Research', desc: 'Analyzing functional requirements' },
          { icon: <Database size={28} color="var(--secondary)"/>, title: 'Data & Schema Design', desc: 'Modeling relational layers' },
          { icon: <Code2 size={28} color="var(--accent)"/>, title: 'Implementation', desc: 'Writing clean modular components' },
          { icon: <Rocket size={28} color="#34d399"/>, title: 'Production Release', desc: 'Deploying to cloud endpoints' }
        ].map((step, idx, arr) => (
          <React.Fragment key={idx}>
            <Card3D style={{ flex: 1, padding: '1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: 'rgba(255,255,255,0.015)' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '0.85rem', borderRadius: '50%', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {step.icon}
              </div>
              <h4 className="heading" style={{ fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 600 }}>{step.title}</h4>
              <p className="muted" style={{ fontSize: '0.8rem', lineHeight: 1.4 }}>{step.desc}</p>
            </Card3D>
            {idx !== arr.length - 1 && (
              <div style={{ width: '30px', height: '3px', background: 'linear-gradient(90deg, var(--primary), var(--secondary))', borderRadius: '2px', position: 'relative', flexShrink: 0 }}>
                <div style={{ position: 'absolute', right: '-4px', top: '-5px', width: 0, height: 0, borderTop: '7px solid transparent', borderBottom: '7px solid transparent', borderLeft: '10px solid var(--secondary)' }}></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Traffic Types */}
      <h3 className="heading" style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>2. Core Technology Channels</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', opacity: isActive ? 1 : 0, transition: 'all 1s ease', transitionDelay: '0.6s' }}>
        {[
          { icon: <ArrowUpRight size={22} />, name: 'REST & GraphQL APIs', desc: 'Designing lightning-fast async communication endpoints.', color: '#6366f1' },
          { icon: <GitBranch size={22} />, name: 'Version Sync', desc: 'Automated CI/CD workflows and distributed branching git structures.', color: '#8b5cf6' },
          { icon: <Link2 size={22} />, name: 'Relational DBs', desc: 'Optimizing schemas, triggers, indexes, and queries.', color: '#ec4899' },
          { icon: <Cpu size={22} />, name: 'Data Pipeline Analytics', desc: 'Cleaning large datasets, engineering analytics, training classifiers.', color: '#facc15' },
          { icon: <Eye size={22} />, name: 'Flawless UI Frameworks', desc: 'Designing responsive interactive states, custom animations, transitions.', color: '#34d399' }
        ].map((type, idx) => (
          <div key={idx} className="glass card-hover-3d" style={{ padding: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: `3px solid ${type.color}`, background: 'rgba(255,255,255,0.015)' }}>
            <div style={{ color: type.color }}>{type.icon}</div>
            <h4 className="heading" style={{ fontSize: '0.95rem', fontWeight: 600 }}>{type.name}</h4>
            <p className="muted" style={{ fontSize: '0.78rem', lineHeight: '1.4' }}>{type.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficAnalysis;
