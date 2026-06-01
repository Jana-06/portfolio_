import React from 'react';
import Card3D from '../ui/Card3D';
import { Lightbulb, Rocket, Code2, Smartphone, Terminal, Zap, Search, Link2 } from 'lucide-react';

const InsightsRecommendations = ({ isActive }) => {
  return (
    <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h1 className="text-gradient display" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
        Insights & Architectural Philosophy
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', flex: 1, minHeight: 0 }}>
        {/* Key Findings */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: isActive ? 1 : 0, transition: 'all 1s ease', transitionDelay: '0.2s' }}>
          <h2 className="heading" style={{ fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600 }}>
            <Lightbulb color="#facc15" size={26} /> Core Insights
          </h2>
          <Card3D style={{ padding: '2rem', flex: 1 }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', marginTop: '6px', flexShrink: 0 }}></div>
                <div>
                  <h4 className="heading" style={{ fontSize: '1rem', marginBottom: '0.25rem', fontWeight: 600 }}>Scale dictates architectural choices</h4>
                  <p className="muted" style={{ fontSize: '0.82rem', lineHeight: 1.45 }}>Large-scale mobile applications necessitate local SQLite/Hive databases with reactive states to offset network volatility.</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary)', marginTop: '6px', flexShrink: 0 }}></div>
                <div>
                  <h4 className="heading" style={{ fontSize: '1rem', marginBottom: '0.25rem', fontWeight: 600 }}>Clean data is the model foundation</h4>
                  <p className="muted" style={{ fontSize: '0.82rem', lineHeight: 1.45 }}>Machine learning pipelines spend 80% of their operational cycles on structured data transformations. Feature design is the primary differentiator.</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', marginTop: '6px', flexShrink: 0 }}></div>
                <div>
                  <h4 className="heading" style={{ fontSize: '1rem', marginBottom: '0.25rem', fontWeight: 600 }}>Decoupled modules enable velocity</h4>
                  <p className="muted" style={{ fontSize: '0.82rem', lineHeight: 1.45 }}>Splitting complex code bases into independent micro-modules reduces compiler overhead and allows multiple devs to commit concurrently.</p>
                </div>
              </li>
            </ul>
          </Card3D>
        </div>

        {/* Recommendations */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: isActive ? 1 : 0, transition: 'all 1s ease', transitionDelay: '0.4s' }}>
          <h2 className="heading" style={{ fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600 }}>
            <Rocket color="#34d399" size={26} /> Growth Paradigms
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', flex: 1 }}>
            {[
              { icon: <Zap size={22} color="#facc15" />, title: 'Thread Speeds', desc: 'Isolating intensive processes onto worker tasks.' },
              { icon: <Terminal size={22} color="var(--primary)" />, title: 'Optimize Queries', desc: 'Profiling DB indexes for sub-millisecond retrieval costs.' },
              { icon: <Link2 size={22} color="#ec4899" />, title: 'Decoupled Modules', desc: 'Prioritizing dependency inversion designs.' },
              { icon: <Smartphone size={22} color="#34d399" />, title: 'Mobile-First UX', desc: 'Creating responsive state animations and touch triggers.' },
              { icon: <Code2 size={22} color="var(--accent)" />, title: 'Deep ML Analytics', desc: 'Refining prediction model metrics and validation accuracies.' },
              { icon: <Rocket size={22} color="#f97316" />, title: 'Continuous Integration', desc: 'Setting up automated testing and cloud builds.' }
            ].map((rec, idx) => (
              <Card3D key={idx} style={{ padding: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', background: 'rgba(255,255,255,0.015)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  {rec.icon}
                  <span className="label" style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.2)' }}>P-{idx+1}</span>
                </div>
                <h4 className="heading" style={{ fontSize: '0.9rem', fontWeight: 600 }}>{rec.title}</h4>
                <p className="muted" style={{ fontSize: '0.75rem', lineHeight: 1.35 }}>{rec.desc}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsRecommendations;
