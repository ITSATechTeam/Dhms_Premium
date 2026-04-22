import { useInView } from '../../hooks/useInView'
import "./Trust.css";

const CheckCircleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const LockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="11" width="14" height="11" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const UsersIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const tabs = [
  "Enterprise IT teams",
  "Managed service providers",
  "Security-conscious organizations",
  "Government & Public Sector",
];

const cards = [
  {
    icon: <CheckCircleIcon />,
    title: "Built for enterprise reliability",
    desc: "Live monitoring, support workflows, and consistent reporting give teams a dependable operating model they can trust.",
    color: "card-blue",
  },
  {
    icon: <LockIcon />,
    title: "Security-first by design",
    desc: "Endpoint controls, email protection, and alert visibility are woven into the product experience instead of treated as add-ons.",
    color: "card-pink",
  },
  {
    icon: <UsersIcon />,
    title: "Made for decision-makers",
    desc: "Calmer analytics and clearer summaries make it easier for leaders to understand risk, performance, and next steps.",
    color: "card-green",
  },
];

function Trust() {
  const [headerRef, headerInView] = useInView(0.2)
  const [tabsRef, tabsInView] = useInView(0.2)
  const [gridRef, gridInView] = useInView(0.1)

  return (
    <section className="trust-section">
      <div className="trust-wrapper">
        <div ref={headerRef} className={`trust-header fade-up ${headerInView ? 'in-view' : ''}`}>
          <h2 className="trust-heading">
            Why Organizations Trust{" "}
            <span className="trust-blue">DHMS Product</span>
          </h2>
          <p className="trust-subtext">
            Trust comes from reliability, thoughtful workflow design, and a
            platform that helps teams feel more in control every day.
          </p>
        </div>

        <div ref={tabsRef} className={`trust-tabs stagger ${tabsInView ? 'in-view' : ''}`}>
          {tabs.map((tab, i) => (
            <span className="trust-tab" key={i} style={{ '--delay': `${i * 0.08}s` }}>
              {tab}
            </span>
          ))}
        </div>

        <div ref={gridRef} className={`trust-grid stagger ${gridInView ? 'in-view' : ''}`}>
          {cards.map((card, i) => (
            <div className={`trust-card ${card.color}`} key={i} style={{ '--delay': `${i * 0.15}s` }}>
              <span className="trust-icon-wrap">{card.icon}</span>
              <h3 className="trust-card-title">{card.title}</h3>
              <p className="trust-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trust;
