import React from 'react';
import Card3D from '../ui/Card3D';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const metricsData = [
  { name: 'Cold Load Time (ms)', FlutterApp: 650, NativeApp: 420 },
  { name: 'Memory Footprint (MB)', FlutterApp: 85, NativeApp: 48 },
  { name: 'Cache Read Cost (ms)', FlutterApp: 12, NativeApp: 5 },
  { name: 'Offline Sync (sec)', FlutterApp: 3.2, NativeApp: 2.1 },
  { name: 'Render Thread (fps)', FlutterApp: 60, NativeApp: 90 },
];

const architectureRadar = [
  { subject: 'UI Fluidity', FlutterApp: 85, NativeApp: 95, fullMark: 100 },
  { subject: 'Local Cache', FlutterApp: 90, NativeApp: 95, fullMark: 100 },
  { subject: 'Thread Speed', FlutterApp: 75, NativeApp: 98, fullMark: 100 },
  { subject: 'Dev Velocity', FlutterApp: 98, NativeApp: 60, fullMark: 100 },
  { subject: 'Native Bridges', FlutterApp: 80, NativeApp: 100, fullMark: 100 },
];

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

const CaseStudy2 = ({ isActive }) => {
  return (
    <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ fontSize: '1.1rem', color: '#facc15', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Mobile Architecture</h2>
      <h1 className="text-gradient display" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #facc15 0%, #ef4444 100%)',  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Client Layer: Flutter vs Native Android
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.75rem', flex: 1, minHeight: 0 }}>
        {/* Bar Chart Metrics */}
        <Card3D style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h3 className="heading" style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>Mobile Metrics Benchmarking</h3>
          <div style={{ flex: 1, minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={metricsData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" fontSize={10} interval={0} angle={-15} textAnchor="end" height={45} />
                <YAxis stroke="rgba(255,255,255,0.4)" fontSize={11} />
                <RechartsTooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: '11px' }}/>
                <Bar dataKey="FlutterApp" name="Flutter Storefront" fill="#f97316" radius={[4, 4, 0, 0]} barSize={15} />
                <Bar dataKey="NativeApp" name="Native Android" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={15} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card3D>

        {/* Traffic Radar */}
        <Card3D style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h3 className="heading" style={{ fontSize: '1.25rem', marginBottom: '1rem', textAlign: 'center', fontWeight: 600 }}>Core Architectural Comparison</h3>
          <div style={{ flex: 1, minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="65%" data={architectureRadar}>
                <PolarGrid stroke="rgba(255,255,255,0.15)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'white', fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 9 }} />
                <Radar name="Flutter Storefront" dataKey="FlutterApp" stroke="#f97316" fill="#f97316" fillOpacity={0.25} />
                <Radar name="Native Android" dataKey="NativeApp" stroke="#ef4444" fill="#ef4444" fillOpacity={0.25} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <RechartsTooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card3D>
      </div>
    </div>
  );
};

export default CaseStudy2;
