import React from 'react';
import Card3D from '../ui/Card3D';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const metricsData = [
  { name: 'API Speed (ms, lower is better)', SmartCart: 45, HacknHunt: 120 },
  { name: 'Test Coverages (%)', SmartCart: 92, HacknHunt: 88 },
  { name: 'Database Query Cost (ms)', SmartCart: 15, HacknHunt: 58 },
  { name: 'Model Accuracy / Scale (%)', SmartCart: 94, HacknHunt: 75 },
  { name: 'Active Dev Iterations', SmartCart: 18, HacknHunt: 32 },
];

const techCompositionSmartCart = [
  { name: 'TensorFlow', value: 45 }, { name: 'FastAPI', value: 25 }, 
  { name: 'SQL DB', value: 15 }, { name: 'SciKit-learn', value: 15 }
];
const techCompositionHacknHunt = [
  { name: 'React UI', value: 50 }, { name: 'Firebase Sync', value: 30 }, 
  { name: 'Node.js', value: 20 }
];
const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#facc15', '#34d399'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass" style={{ padding: '0.85rem 1.25rem', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(15,23,42,0.95)' }}>
        <p style={{ fontWeight: 600, marginBottom: '0.35rem', fontSize: '0.85rem' }}>{label}</p>
        {payload.map((p, idx) => (
          <p key={idx} style={{ color: p.color, fontSize: '0.8rem', margin: '2px 0' }}>{p.name}: {p.value}</p>
        ))}
      </div>
    );
  }
  return null;
};

const CaseStudy1 = ({ isActive }) => {
  return (
    <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ fontSize: '1.1rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Artifact Analytics</h2>
      <h1 className="text-gradient display" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Project Performance Benchmarks</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1.75rem', flex: 1, minHeight: 0 }}>
        {/* Bar Chart Metrics */}
        <Card3D style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h3 className="heading" style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>Comparative Performance Analysis</h3>
          <div style={{ flex: 1, minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={metricsData} layout="vertical" margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                <XAxis type="number" stroke="rgba(255,255,255,0.4)" fontSize={11} />
                <YAxis dataKey="name" type="category" width={180} stroke="rgba(255,255,255,0.4)" fontSize={10} />
                <RechartsTooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Bar dataKey="SmartCart" name="SmartCart ML" fill="var(--primary)" radius={[0, 4, 4, 0]} barSize={12} />
                <Bar dataKey="HacknHunt" name="Hack'n'Hunt" fill="var(--accent)" radius={[0, 4, 4, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card3D>

        {/* Traffic Sources */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Card3D style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 className="heading" style={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600 }}>SmartCart Engine Stack</h3>
            <div style={{ flex: 1, minHeight: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={techCompositionSmartCart} cx="50%" cy="50%" innerRadius={45} outerRadius={60} paddingAngle={4} dataKey="value">
                    {techCompositionSmartCart.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <RechartsTooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card3D>
          
          <Card3D style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 className="heading" style={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600 }}>Hack'n'Hunt Stack</h3>
            <div style={{ flex: 1, minHeight: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={techCompositionHacknHunt} cx="50%" cy="50%" innerRadius={45} outerRadius={60} paddingAngle={4} dataKey="value">
                    {techCompositionHacknHunt.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <RechartsTooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card3D>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy1;
