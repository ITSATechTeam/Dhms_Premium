import { useInView } from '../../hooks/useInView'
import "./Features.css";

const MonitorIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const SlidersIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
    <circle cx="8" cy="6" r="2" fill="currentColor" stroke="none" />
    <circle cx="16" cy="12" r="2" fill="currentColor" stroke="none" />
    <circle cx="10" cy="18" r="2" fill="currentColor" stroke="none" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

const ScanIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
);

const ChartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const features = [
  {
    icon: <MonitorIcon />,
    title: "Real-Time Device Visibility",
    desc: "Gain clear insights across all onboarded devices including location, status, repair progress, and device usage, for full operational control.",
    tag: "Device insights",
  },
  {
    icon: <SlidersIcon />,
    title: "Automated maintenance",
    desc: "Schedule updates, device health checks, and performance improvements before downtime affects productivity",
    tag: "Device maintenance",
  },
  {
    icon: <ShieldIcon />,
    title: "Endpoint security",
    desc: "Defend every device with advanced protection that blocks threats and keeps systems secure",
    tag: "Threat defense",
  },
  {
    icon: <MailIcon />,
    title: "Email Security Protection",
    desc: "Reduce phishing exposure and suspicious inbox activity with stronger policy enforcement and monitoring.",
    tag: "Communication security",
  },
  {
    icon: <ScanIcon />,
    title: "AI-Powered Threat Detection (EDR)",
    desc: "Detect and stop cyber threats instantly, isolate infected devices, and recover systems quickly and safely",
    tag: "Threat Detection",
  },
  {
    icon: <ChartIcon />,
    title: "Executive reporting",
    desc: "Access easy-to-read reports that highlight performance, risks, and important trends.",
    tag: "Leadership visibility",
  },
];

function Features() {
  const [headerRef, headerInView] = useInView(0.2)
  const [gridRef, gridInView] = useInView(0.1)

  return (
    <section className="features-section">
      <div className="features-wrapper">
        <div ref={headerRef} className={`features-header fade-up ${headerInView ? 'in-view' : ''}`}>
          <h2 className="features-heading">
            <span className="features-blue">DHMS Product </span>CORE FEATURES
          </h2>
          <p className="features-subtext">
            Everything you need to keep your team's devices secure, organized,
            and running smoothly
          </p>
        </div>

        <div ref={gridRef} className={`features-grid stagger ${gridInView ? 'in-view' : ''}`}>
          {features.map((f, i) => (
            <div className="feature-card" key={i} style={{ '--delay': `${i * 0.1}s` }}>
              <span className="feature-icon-wrap">{f.icon}</span>
              <h3 className="feature-card-title">{f.title}</h3>
              <p className="feature-card-desc">{f.desc}</p>
              <span className="feature-tag">{f.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
