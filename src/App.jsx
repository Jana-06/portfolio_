import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, ExternalLink, Mail,
  Code2, BarChart3, Brain, Zap, Check, ChevronLeft, ChevronRight,
  Smartphone, Cpu, Database
} from "lucide-react";

/* ─── Brand Icon Fallbacks (Since lucide-react v1.x doesn't include logos) ─── */
const GithubIcon = ({ size = 20, ...props }) => (
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

const LinkedinIcon = ({ size = 20, ...props }) => (
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

/* ─── Continuous Cinematic Video Background ─── */
const BackgroundVideo = () => (
  <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden" }}>
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }}
    >
      <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260212_043536_e0d3c69f-5c0c-4533-8395-fbe962587446.mp4" type="video/mp4" />
    </video>
    <div style={{
      position: "absolute",
      inset: 0,
      background: "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)",
      backdropFilter: "blur(2.5px)"
    }} />
  </div>
);

/* ─── Animated Heading ─── */
function AnimatedHeading({ text, staggerDelay = 0.04 }) {
  return (
    <span>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="letter-reveal"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * staggerDelay, duration: 0.5, ease: "easeOut" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── SLIDE 1: HERO & WELCOME ─── */
function HeroSlide({ isActive }) {
  const roles = [
    { title: "Android Developer", icon: <Smartphone size={15} /> },
    { title: "Full-Stack Engineer", icon: <Cpu size={15} /> },
    { title: "Data Science Enthusiast", icon: <Database size={15} /> }
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "60px", alignItems: "center", height: "100%", width: "100%" }}>
      {/* Hero Left Content */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}
        >
          <span className="status-pulse" />
          <span className="label" style={{ color: "#4ade80" }}>Available for Freelance & Roles</span>
        </motion.div>

        <div style={{ marginBottom: 28 }}>
          <span className="label" style={{ color: "rgba(255, 255, 255, 0.5)" }}>Hello, I'm</span>
          <h1 className="display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)", fontWeight: 800, marginTop: 8, lineHeight: 1.15 }}>
            {isActive ? <AnimatedHeading text="Janarthan S" staggerDelay={0.06} /> : "Janarthan S"}
          </h1>
        </div>

        {/* Dynamic Cycling Role */}
        <div style={{ minHeight: "60px", marginBottom: 32 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <div style={{ color: "#c084fc", display: "flex", alignItems: "center" }}>
                {roles[roleIndex].icon}
              </div>
              <span className="heading" style={{ fontSize: "1.25rem", fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>
                {roles[roleIndex].title}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="muted" style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 40, maxWidth: "540px" }}>
          I build high-performance mobile architectures, scalable cloud infrastructure, and predictive data pipelines. Let's merge intelligent analytics with flawless UI/UX.
        </p>

        {/* Social badging */}
        <div style={{ display: "flex", gap: "16px" }}>
          {[
            { icon: <GithubIcon size={18} />, href: "https://github.com/Jana-06", label: "GitHub" },
            { icon: <LinkedinIcon size={18} />, href: "https://linkedin.com/in/janarthan-s-8476b81b5", label: "LinkedIn" },
            { icon: <ExternalLink size={18} />, href: "https://portfoliojanarthanx.vercel.app", label: "Portfolio" }
          ].map((soc, idx) => (
            <motion.a
              key={idx}
              href={soc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-sm"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 500,
                border: "1px solid rgba(255,255,255,0.12)"
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.1)"
              }}
              transition={{ duration: 0.2 }}
            >
              {soc.icon} {soc.label}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Hero Right Code Block */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
        animate={isActive ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="glass"
        style={{
          padding: "32px",
          fontFamily: "Fira Code, SFMono-Regular, Consolas, monospace",
          fontSize: "0.8rem",
          lineHeight: "1.8",
          border: "1px solid rgba(255,255,255,0.08)",
          transformStyle: "preserve-3d",
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
        }}
      >
        <div style={{ color: "rgba(99, 102, 241, 0.85)" }}>{"// Developer Archetype"}</div>
        <div style={{ color: "#ffffff", marginTop: 8 }}>
          <span style={{ color: "#f472b6" }}>const</span> engineer = {"{"}
        </div>
        <div style={{ paddingLeft: "16px" }}>
          <div>name: <span style={{ color: "#a5b4fc" }}>"Janarthan S"</span>,</div>
          <div>coreStack: <span style={{ color: "#4ade80" }}>["Android", "React", "Python"]</span>,</div>
          <div>specialties: <span style={{ color: "#4ade80" }}>["ML & AI Integration", "APIs"]</span>,</div>
          <div>philosophy: <span style={{ color: "#a5b4fc" }}>"Scale meets simplicity"</span>,</div>
          <div>status: <span style={{ color: "#4ade80" }}>"Active"</span></div>
        </div>
        <div style={{ color: "#ffffff" }}>{"};"}</div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "24px", paddingTop: "20px" }}>
          <div style={{ color: "rgba(244, 114, 182, 0.7)" }}>{"// Active Learning Pipeline"}</div>
          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
            Currently refining real-time recommendation engines and offline-first mobile databases.
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── SLIDE 2: CAPABILITIES & SERVICES ─── */
function ServicesSlide({ isActive }) {
  const services = [
    {
      icon: <Code2 size={20} />,
      title: "Full-Stack Web Engineering",
      desc: "Architecting high-performance React architectures synced with fast, asynchronous backend APIs (Node, FastAPI) and relational storage."
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Data Science & Machine Learning",
      desc: "Engineering predictive analytical models, personalized recommendation systems, and robust forecasting pipelines using Python, SciKit-Learn, and XGBoost."
    },
    {
      icon: <Zap size={20} />,
      title: "Mobile Architecture & Native Apps",
      desc: "Crafting fluid, responsive cross-platform architectures with Flutter or high-performance native Android experiences, prioritizing local-first data caching."
    },
    {
      icon: <Brain size={20} />,
      title: "AI Integration & Pipelines",
      desc: "Seamless integration of Large Language Models (LLMs), vector databases, and semantic search frameworks directly into production web architectures."
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", width: "100%" }}>
      <div style={{ marginBottom: "40px" }}>
        <span className="label">Capabilities</span>
        <h2 className="display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginTop: "8px" }}>
          Engineering Design & Deployment
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        {services.map((serv, idx) => (
          <motion.div
            key={idx}
            className="glass card-hover-3d"
            style={{ padding: "28px" }}
            initial={{ opacity: 0, y: 15 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <div style={{
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              background: "rgba(99, 102, 241, 0.15)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
              color: "#c084fc"
            }}>
              {serv.icon}
            </div>
            <h3 className="heading" style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "8px" }}>
              {serv.title}
            </h3>
            <p className="muted" style={{ fontSize: "0.82rem", lineHeight: "1.6" }}>
              {serv.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── SLIDE 3: PROJECTS SHOWCASE ─── */
function ProjectsSlide({ isActive }) {
  /* ===================================================================
     PLACEHOLDER: EDIT YOUR PROJECT DETAILS HERE (Add/Modify items below)
     =================================================================== */
  const projects = [
    {
      num: "01",
      emoji: "🏹",
      title: "Hack'n'Hunt",
      desc: "A highly collaborative event management framework running synchronized real-time web databases for team coordinate hunting.",
      tech: "React • Node.js • Firebase Realtime DB",
      gradient: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(236,72,153,0.05) 100%)"
    },
    {
      num: "02",
      emoji: "🛒",
      title: "SmartCart ML Engine",
      desc: "An intelligent personalized recommendation engine utilizing machine learning classifiers to predict purchase intent in real-time.",
      tech: "Python • Scikit-learn • FastAPI",
      gradient: "linear-gradient(135deg, rgba(192,132,252,0.1) 0%, rgba(99,102,241,0.05) 100%)"
    },
    {
      num: "03",
      emoji: "🛍️",
      title: "Flutter E-Commerce",
      desc: "Cross-platform mobile store architected with offline-first support, featuring beautiful fluid transition animations.",
      tech: "Flutter • Bloc Pattern • Hive Cache",
      gradient: "linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(192,132,252,0.05) 100%)"
    },
    {
      num: "04",
      emoji: "📈",
      title: "Demand Forecaster",
      desc: "Deep statistical predictive pipeline forecasting inventory requirements with over 94% validation accuracy.",
      tech: "Python • TensorFlow • PostgreSQL",
      gradient: "linear-gradient(135deg, rgba(74,222,128,0.08) 0%, rgba(99,102,241,0.05) 100%)"
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", width: "100%" }}>
      <div style={{ marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <span className="label">Featured Artifacts</span>
          <h2 className="display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginTop: "8px" }}>
            The Works Gallery
          </h2>
        </div>
        <span className="label" style={{ paddingBottom: "6px" }}>Slide to Navigate</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="project-card card-hover-3d"
            style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            {/* Project Cover Block */}
            <div style={{
              width: "100%",
              height: "120px",
              background: proj.gradient,
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.03)"
            }}>
              <span style={{ fontSize: "2.5rem", filter: "drop-shadow(0 8px 12px rgba(0,0,0,0.35))" }}>
                {proj.emoji}
              </span>
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <span className="label" style={{ color: "#c084fc", fontSize: "0.6rem" }}>Project {proj.num}</span>
                <span className="label" style={{ fontSize: "0.6rem", opacity: 0.35 }}>{proj.tech.split("•")[0]}</span>
              </div>
              <h3 className="heading" style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: "6px" }}>
                {proj.title}
              </h3>
              <p className="muted" style={{ fontSize: "0.8rem", lineHeight: "1.5", height: "45px", overflow: "hidden", textOverflow: "ellipsis" }}>
                {proj.desc}
              </p>
              <div className="label" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.55rem", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "8px", marginTop: "8px" }}>
                {proj.tech}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── SLIDE 4: TECHNICAL MANIFESTO ─── */
function ManifestoSlide({ isActive }) {
  const pillars = [
    {
      num: "01",
      title: "Purpose-Driven Motion",
      desc: "Every dynamic animation must clarify information, structural relations, and flow. I use Framer Motion to craft high-fidelity, polished, and intent-focused interactions."
    },
    {
      num: "02",
      title: "Scalable Architecture",
      desc: "Clean code structure, modular design patterns, and solid engineering foundations come first. Prioritizing structured modularity, React hooks, and strict typings."
    },
    {
      num: "03",
      title: "Analytical Integrity",
      desc: "We live in a data-rich age. Integrating predictive algorithms, anomaly alerts, and recommendation modules directly creates smart, business-savvy software applications."
    },
    {
      num: "04",
      title: "Future-Ready Integration",
      desc: "Unlocking advanced paradigms with vector indexing, neural caching, and natural language embeddings. Bridging the threshold between active AI models and standard UI interfaces."
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", width: "100%" }}>
      <div style={{ marginBottom: "40px" }}>
        <span className="label">Philosophy</span>
        <h2 className="display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginTop: "8px" }}>
          Technical Manifesto
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        {pillars.map((pil, idx) => (
          <motion.div
            key={idx}
            className="glass"
            style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "12px" }}
            initial={{ opacity: 0, y: 15 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.18)" }}
          >
            <div className="label" style={{ color: "#ec4899", fontSize: "0.7rem", fontWeight: 700 }}>
              {pil.num}
            </div>
            <h3 className="heading" style={{ fontSize: "1.05rem", fontWeight: 600 }}>
              {pil.title}
            </h3>
            <p className="muted" style={{ fontSize: "0.82rem", lineHeight: "1.6" }}>
              {pil.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── SLIDE 5: CTA / CONTACT ─── */
function ContactSlide({ isActive }) {
  const [copied, setCopied] = useState(false);
  const emailAddress = "l0cjanarthansrvspm@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", width: "100%" }}>
      {/* Centered CTA Block */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: 1, textAlign: "center", padding: "0 20px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="glass"
          style={{
            padding: "48px 60px",
            borderRadius: "24px",
            maxWidth: "760px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.6)"
          }}
        >
          <span className="label" style={{ color: "#c084fc", marginBottom: "16px", display: "inline-block" }}>
            Let's Collaborate
          </span>
          <h2 className="display" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "20px" }}>
            Let's Build Something Exceptional.
          </h2>
          <p className="muted" style={{ fontSize: "0.9rem", lineHeight: "1.7", marginBottom: "32px", maxWidth: "560px", margin: "0 auto 32px auto" }}>
            Whether you have an intricate custom software problem or an inspiring digital product plan, I would love to join forces to launch it.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <motion.a
              href={`mailto:${emailAddress}`}
              className="btn-white"
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch <Mail size={16} />
            </motion.a>

            <motion.button
              onClick={handleCopyEmail}
              className="btn-glass"
              style={{ minWidth: "155px" }}
              whileTap={{ scale: 0.97 }}
            >
              {copied ? (
                <>
                  Copied! <Check size={16} style={{ color: "#4ade80" }} />
                </>
              ) : (
                <>
                  Copy Email <Mail size={16} />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Elegant Slide Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px", paddingBottom: "10px", width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <span className="heading" style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.05em" }}>Janarthan S</span>
            <p className="label" style={{ fontSize: "0.55rem", marginTop: "4px" }}>Engineer • Designer • Data Scientist</p>
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="https://github.com/Jana-06" target="_blank" rel="noopener noreferrer" className="label" style={{ textDecoration: "none", fontSize: "0.6rem" }}>
              GitHub
            </a>
            <a href="https://linkedin.com/in/janarthan-s-8476b81b5" target="_blank" rel="noopener noreferrer" className="label" style={{ textDecoration: "none", fontSize: "0.6rem" }}>
              LinkedIn
            </a>
          </div>
          <div className="label" style={{ fontSize: "0.55rem", opacity: 0.35 }}>
            &copy; 2026 Janarthan S. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── MAIN PORTFOLIO COMPONENT ─── */
const SLIDES = [HeroSlide, ServicesSlide, ProjectsSlide, ManifestoSlide, ContactSlide];
const SLIDE_LABELS = ["Intro", "Capabilities", "Projects", "Philosophy", "Collaborate"];

export default function App() {
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
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div
      className="grain"
      style={{
        background: "#000000",
        minHeight: "100vh",
        position: "relative",
        overflow: isMobile ? "auto" : "hidden"
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <BackgroundVideo />

      {/* Main Container Layer */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {/* Header Header */}
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: isMobile ? "16px 20px" : "24px 48px",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 100%)",
            backdropFilter: "blur(8px)"
          }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div
              className="heading"
              style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                background: "linear-gradient(to right, #ffffff 50%, rgba(255,255,255,0.4) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              J.S
            </div>

            {/* Premium Pagination Indicator bullets on Desktop */}
            {!isMobile && (
              <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                {SLIDE_LABELS.map((label, idx) => (
                  <div
                    key={idx}
                    className={`bullet-ring ${currentSlide === idx ? "active" : ""}`}
                    onClick={() => {
                      setDirection(idx > currentSlide ? 1 : -1);
                      setCurrentSlide(idx);
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: currentSlide === idx ? "#ffffff" : "rgba(255,255,255,0.35)",
                        transition: "background 0.3s ease, transform 0.3s ease",
                        transform: currentSlide === idx ? "scale(1.2)" : "scale(1)"
                      }}
                    />
                    {currentSlide === idx && (
                      <span
                        className="label"
                        style={{
                          position: "absolute",
                          top: "28px",
                          fontSize: "0.5rem",
                          letterSpacing: "0.15em",
                          whiteSpace: "nowrap",
                          color: "#ffffff"
                        }}
                      >
                        {label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            <a href="mailto:l0cjanarthansrvspm@gmail.com" className="btn-glass" style={{ padding: "8px 20px", fontSize: "0.75rem" }}>
              <Mail size={13} /> Get in Touch
            </a>
          </div>
        </header>

        {/* Dynamic 3D Card Deck View on Desktop vs Stacked Scroll View on Mobile */}
        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "60px", padding: "100px 20px 40px 20px", maxWidth: "800px", margin: "0 auto" }}>
            {SLIDES.map((SlideComponent, idx) => (
              <div key={idx} className="slide-container-mobile" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "40px" }}>
                <SlideComponent isActive={true} />
              </div>
            ))}
          </div>
        ) : (
          <div className="perspective-container">
            <main className="preserve-3d" style={{ position: "relative", width: "90vw", maxWidth: "1300px", height: "76vh", display: "flex", alignItems: "center", justifyContent: "center", transformStyle: "preserve-3d" }}>
              {SLIDES.map((SlideComponent, idx) => {
                const offset = idx - currentSlide;
                let transform = "";
                let opacity = 0;
                let pointerEvents = "none";

                if (offset === 0) {
                  transform = "translateZ(0) rotateY(0deg) scale(1)";
                  opacity = 1;
                  pointerEvents = "auto";
                } else if (offset === 1) {
                  transform = "translateZ(-300px) translateX(65%) rotateY(-20deg) scale(0.85)";
                  opacity = 0.35;
                } else if (offset === -1) {
                  transform = "translateZ(-300px) translateX(-65%) rotateY(20deg) scale(0.85)";
                  opacity = 0.35;
                } else if (offset > 1) {
                  transform = "translateZ(-600px) translateX(120%) rotateY(-35deg) scale(0.7)";
                  opacity = 0;
                } else if (offset < -1) {
                  transform = "translateZ(-600px) translateX(-120%) rotateY(35deg) scale(0.7)";
                  opacity = 0;
                }

                return (
                  <div
                    key={idx}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      transition: "all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)",
                      transform,
                      opacity,
                      pointerEvents,
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <SlideComponent isActive={offset === 0} />
                  </div>
                );
              })}
            </main>

            {/* Bottom Floating Navigation Buttons for Desktop */}
            <div style={{ position: "absolute", bottom: "32px", right: "48px", display: "flex", gap: "16px", zIndex: 100 }}>
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "50%",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  cursor: currentSlide === 0 ? "not-allowed" : "pointer",
                  opacity: currentSlide === 0 ? 0.25 : 1,
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(12px)"
                }}
                className="btn-glass"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === SLIDES.length - 1}
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "50%",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  cursor: currentSlide === SLIDES.length - 1 ? "not-allowed" : "pointer",
                  opacity: currentSlide === SLIDES.length - 1 ? 0.25 : 1,
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(12px)"
                }}
                className="btn-glass"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Bottom-Left Keyboard Helper Label */}
            <div
              className="label"
              style={{
                position: "absolute",
                bottom: "44px",
                left: "48px",
                fontSize: "0.55rem",
                opacity: 0.4,
                letterSpacing: "0.15em"
              }}
            >
              Use &larr; &rarr; Arrow Keys To Navigate
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
