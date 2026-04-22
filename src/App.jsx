import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, ExternalLink, Mail,
  Code2, BarChart3, Brain, Zap, Check, ChevronDown,
  Smartphone, Cpu, Database
} from "lucide-react";

const Github = ({ size = 24, ...props }) => (
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

const Linkedin = ({ size = 24, ...props }) => (
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

/* ─── Global Styles ─── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@700;800&display=swap');
    
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: #000; color: #fff; font-family: 'Inter', sans-serif; overflow-x: hidden; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #000; }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 3px; }

    .heading { font-family: 'Space Grotesk', sans-serif; }
    .display { font-family: 'Playfair Display', serif; }
    .label { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.3em; color: rgba(255,255,255,0.45); }
    .muted { color: rgba(255,255,255,0.55); }
    
    .glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.15); border-radius: 16px; }
    .glass-sm { background: rgba(255,255,255,0.05); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; }
    
    .btn-glass {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 12px 28px;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 100px;
      font-size: 0.85rem; font-weight: 500; color: #fff;
      cursor: pointer; transition: all 0.3s ease;
      font-family: 'Space Grotesk', sans-serif;
    }
    .btn-glass:hover { background: rgba(255,255,255,0.14); border-color: rgba(255,255,255,0.4); }
    
    .btn-white {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 14px 32px;
      background: #fff; color: #000;
      border-radius: 100px; font-weight: 600; cursor: pointer;
      transition: all 0.3s ease; font-family: 'Space Grotesk', sans-serif;
      font-size: 0.9rem; border: none;
    }
    .btn-white:hover { background: rgba(255,255,255,0.85); transform: translateY(-2px); }

    .status-pulse {
      display: inline-block; width: 8px; height: 8px;
      background: #4ade80; border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse { 0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(74,222,128,0.7); } 70% { box-shadow: 0 0 0 8px rgba(74,222,128,0); } }

    .project-card {
      position: relative; overflow: hidden; border-radius: 12px;
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.08);
    }
    .project-card:hover { border-color: rgba(255,255,255,0.15); }
    .project-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
    .project-card:hover .project-image img { transform: scale(1.05); }

    @keyframes grain {
      0%, 100% { transform: translate(0,0); }
      50% { transform: translate(12%,9%); }
    }
    .grain::before {
      content: '';
      position: fixed; inset: -200%;
      width: 400%; height: 400%;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
      pointer-events: none; z-index: 999; opacity: 0.4;
      animation: grain 8s steps(10) infinite;
    }

    .letter-reveal { display: inline-block; }
    
    @media (max-width: 768px) {
      .hidden-mobile { display: none !important; }
      .show-mobile { display: block !important; }
    }
  `}</style>
);

/* ─── Animated Text ─── */
function AnimatedHeading({ text, staggerDelay = 0.03 }) {
  return (
    <span>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="letter-reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * staggerDelay, duration: 0.6, ease: "easeOut" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── Reveal ─── */
function Reveal({ children, delay = 0, y = 40 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 48px",
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <div className="heading" style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "0.05em" }}>J.S</div>
        
        <div style={{ display: "flex", gap: 48, alignItems: "center" }} className="hidden-mobile">
          {["Work","About","Services","Contact"].map(l => (
            <a key={l} href={'#' + l.toLowerCase()} style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color="#fff"}
              onMouseLeave={e => e.target.style.color="rgba(255,255,255,0.65)"}
            >{l}</a>
          ))}
        </div>

        <a href="mailto:l0cjanarthansrvspm@gmail.com" className="btn-glass">
          <Mail size={15}/> Contact
        </a>
      </div>
    </motion.nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  const roles = [
    { title: "Android Developer", icon: <Smartphone size={16} /> },
    { title: "Full-Stack Engineer", icon: <Cpu size={16} /> },
    { title: "Data Science Enthusiast", icon: <Database size={16} /> }
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole(p => (p + 1) % roles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="work" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "180px 48px 80px", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        {/* Left */}
        <Reveal>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}
            >
              <span className="status-pulse"/>
              <span className="label">Available for Projects</span>
            </motion.div>

            <div style={{ marginBottom: 32 }}>
              <div className="label" style={{ marginBottom: 12 }}>Hi, my name is</div>
              <h1 className="display" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: 20 }}>
                <AnimatedHeading text="Janarthan S" staggerDelay={0.05}/>
              </h1>
            </div>

            <div style={{ display: "flex", gap: 40, marginBottom: 48 }}>
              {roles.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: currentRole === i ? 1 : 0.3, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="label" style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 8, color: "#fff" }}>
                    {role.icon} 0{i + 1}
                  </div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 500, whiteSpace: "nowrap" }}>{role.title}</div>
                </motion.div>
              ))}
            </div>

            <Reveal delay={0.2}>
              <a href="mailto:l0cjanarthansrvspm@gmail.com" className="btn-white">
                Get In Touch <ArrowUpRight size={16}/>
              </a>
            </Reveal>

            <Reveal delay={0.3}>
              <div style={{ display: "flex", gap: 24, marginTop: 48 }}>
                {[
                  { icon: <Github size={18}/>, href: "https://github.com/Jana-06", label: "GitHub" },
                  { icon: <Linkedin size={18}/>, href: "https://linkedin.com/in/janarthan-s-8476b81b5", label: "LinkedIn" },
                  { icon: <ExternalLink size={18}/>, href: "https://portfoliojanarthanx.vercel.app", label: "Portfolio" },
                ].map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-sm"
                    style={{ padding: "12px 18px", display: "flex", alignItems: "center", gap: 8, color: "#fff", textDecoration: "none" }}
                    whileHover={{ 
                      scale: 1.1, 
                      borderColor: "rgba(255,255,255,0.5)",
                      boxShadow: "0 0 20px rgba(255,255,255,0.2)",
                      backgroundColor: "rgba(255,255,255,0.1)"
                    }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </Reveal>
          </div>
        </Reveal>

        {/* Right - Code */}
        <Reveal delay={0.2}>
          <div className="glass" style={{ padding: "32px", fontFamily: "monospace", fontSize: "0.8rem", lineHeight: 1.8 }}>
            <div style={{ color: "rgba(100,200,150,0.8)" }}>{"// Core Stack"}</div>
            <div style={{ color: "#fff", marginTop: 8 }}>{"const janarthan = {"}</div>
            <div style={{ paddingLeft: 16 }}>
              <div>skills: <span style={{ color: "#4ade80" }}>["React","Python","Flutter","ML"]</span></div>
              <div>stack: <span style={{ color: "#4ade80" }}>["Framer Motion","TensorFlow","FastAPI"]</span></div>
              <div>github: <span style={{ color: "#4ade80" }}>"Jana-06"</span></div>
            </div>
            <div style={{ color: "#fff" }}>{"}"}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── About / Services ─── */
function About() {
  const services = [
    { icon: <Code2 size={20}/>, title: "Full-Stack Development", desc: "React, Node.js, Firebase, PostgreSQL — production-ready applications" },
    { icon: <BarChart3 size={20}/>, title: "Data Science & ML", desc: "Python, TensorFlow, XGBoost — predictive models & recommendation engines" },
    { icon: <Zap size={20}/>, title: "Mobile Development", desc: "Flutter, Kotlin, Android — cross-platform apps with native feel" },
    { icon: <Brain size={20}/>, title: "AI/ML Integration", desc: "LLMs, Scikit-learn, anomaly detection — intelligent feature engineering" },
  ];

  return (
    <section id="about" style={{ padding: "100px 48px", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Reveal>
          <div style={{ marginBottom: 80 }}>
            <div className="label" style={{ marginBottom: 16 }}>What I Do</div>
            <h2 className="display" style={{ fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 700, lineHeight: 1.1 }}>
              Design ● Build ● Deploy
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <motion.div
                className="glass"
                style={{ padding: "40px" }}
                whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.25)" }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  {s.icon}
                </div>
                <h3 className="heading" style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 8 }}>{s.title}</h3>
                <p className="muted" style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>{s.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ─── */
function Projects() {
  const projects = [
    { num: "01", title: "Hack'n'Hunt", desc: "Event management platform with real-time Firebase sync", tech: "React • Node.js • Firebase" },
    { num: "02", title: "Data Recommendation Engine", desc: "SmartCart ML system for personalized recommendations", tech: "Python • Scikit-learn • XGBoost" },
    { num: "03", title: "Flutter E-Commerce App", desc: "Cross-platform mobile app with smooth animations", tech: "Flutter • Firebase • Kotlin" },
    { num: "04", title: "Demand Forecasting Model", desc: "Time-series ML pipeline with 94%+ accuracy", tech: "Python • TensorFlow • SQL" },
    { num: "05", title: "Portfolio Website", desc: "Premium animated landing page experience", tech: "React • Framer Motion • Tailwind" },
  ];

  return (
    <section style={{ padding: "100px 48px", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Reveal>
          <div style={{ marginBottom: 80 }}>
            <div className="label" style={{ marginBottom: 16 }}>Featured Work</div>
            <h2 className="display" style={{ fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 700, lineHeight: 1.1 }}>
              The Artworks
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <motion.div
                className="project-card"
                style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 20 }}
                whileHover={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                <div style={{ width: "100%", height: 200, background: "rgba(255,255,255,0.04)", borderRadius: 8, overflow: "hidden" }}>
                  <div style={{ width: "100%", height: "100%", background: `linear-gradient(135deg, rgba(${74 + i*20},${150 + i*10},${200 + i*5},0.1), rgba(255,255,255,0.02))`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "3rem", opacity: 0.3 }}>📱</span>
                  </div>
                </div>
                <div>
                  <div className="label" style={{ marginBottom: 8 }}>{p.num}</div>
                  <h3 className="heading" style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 8 }}>{p.title}</h3>
                  <p className="muted" style={{ fontSize: "0.85rem", lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                  <div className="label" style={{ color: "rgba(255,255,255,0.35)" }}>{p.tech}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── The Manifesto ─── */
function Manifesto() {
  const pillars = [
    { num: "01", title: "MOTION THAT MATTERS", desc: "Animations serve purpose. Every frame tells a story. Framer Motion for production-grade experiences." },
    { num: "02", title: "SCALABLE ARCHITECTURE", desc: "Clean code, solid design patterns. React hooks, TypeScript, modular components. Built for growth." },
    { num: "03", title: "DATA-DRIVEN LOGIC", desc: "ML models powering intelligent features. Recommendations, anomaly detection, forecasting. Python × JavaScript." },
    { num: "04", title: "FUTURE-READY AI", desc: "Exploring LLMs, vector databases, edge ML. The next frontier of intelligent applications." },
  ];

  return (
    <section id="services" style={{ padding: "100px 48px", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Reveal>
          <div style={{ marginBottom: 80 }}>
            <div className="label" style={{ marginBottom: 16 }}>Philosophy</div>
            <h2 className="display" style={{ fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 700, lineHeight: 1.1 }}>
              The Manifesto
            </h2>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <motion.div
                className="glass"
                style={{ padding: "40px" }}
                whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.25)" }}
              >
                <div className="label" style={{ marginBottom: 12 }}>{p.num}</div>
                <h3 className="heading" style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 16, lineHeight: 1.3 }}>{p.title}</h3>
                <p className="muted" style={{ fontSize: "0.85rem", lineHeight: 1.8 }}>{p.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="contact" style={{ padding: "100px 48px", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Reveal>
          <div className="glass" style={{ padding: "80px", textAlign: "center", borderRadius: 24 }}>
            <div className="label" style={{ marginBottom: 24 }}>Ready to Collaborate?</div>
            <h2 className="display" style={{ fontSize: "clamp(2rem,6vw,5rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: 48 }}>
              Let's Build Something Great
            </h2>
            <motion.a
              href="mailto:l0cjanarthansrvspm@gmail.com"
              className="btn-white"
              style={{ padding: "16px 40px", fontSize: "1rem", display: "inline-flex" }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch
              <motion.span animate={{ rotate: hovered ? 45 : 0 }} transition={{ duration: 0.25 }}>
                <ArrowUpRight size={18}/>
              </motion.span>
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer style={{ padding: "60px 48px 40px", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div className="heading" style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 8 }}>Janarthan S</div>
            <div className="label">Developer × Designer × Data Scientist</div>
          </div>
          <div style={{ display: "flex", gap: 32 }}>
            <div>
              <div className="label" style={{ marginBottom: 12 }}>Social</div>
              {[
                { label: "GitHub", href: "https://github.com/Jana-06" },
                { label: "LinkedIn", href: "https://linkedin.com/in/janarthan-s-8476b81b5" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: 6, transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color="#fff"}
                  onMouseLeave={e => e.target.style.color="rgba(255,255,255,0.5)"}
                >{s.label}</a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div className="label">© 2026 Janarthan S. All rights reserved.</div>
          <div className="label">Design ● Build ● Deploy</div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Background Video ─── */
const BackgroundVideo = () => (
  <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden" }}>
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
    >
      <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260212_043536_e0d3c69f-5c0c-4533-8395-fbe962587446.mp4" type="video/mp4" />
    </video>
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)", backdropFilter: "blur(2px)" }} />
  </div>
);

/* ─── App ─── */
export default function App() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", position: "relative" }} className="grain">
      <FontLink/>

      <BackgroundVideo />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Manifesto/>
        <CTA/>
        <Footer/>
      </div>
    </div>
  );
}
