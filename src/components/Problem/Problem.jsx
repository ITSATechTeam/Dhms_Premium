import { useInView } from '../../hooks/useInView'
import './Problem.css'

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
)

const problems = [
  {
    title: 'Device Downtime Kills Productivity',
    desc: "Unplanned failures cost hours. Without proactive monitoring, you're always reacting too late.",
  },
  {
    title: 'Limited visibility into device status & staff usage',
    desc: 'Without real-time insight, managing devices becomes guesswork for most teams.',
  },
  {
    title: 'Slow Repairs and Maintenance',
    desc: 'Delayed issue detection leads to longer repair cycles and frustrated employees.',
  },
  {
    title: 'Growing Cyber Threats',
    desc: "Phishing, ransomware, and account takeovers are on the rise. Basic antivirus isn't enough anymore.",
  },
  {
    title: 'Poor tracking of device locations',
    desc: 'Managing devices across offices and remote teams without a unified system is nearly impossible.',
  },
  {
    title: 'Lack of detailed reports for decision-making',
    desc: 'Without accurate data, IT decisions are guesswork. Leaders need real insight to plan and budget well.',
  },
]

function Problem() {
  const [headerRef, headerInView] = useInView(0.2)
  const [gridRef, gridInView] = useInView(0.1)

  return (
    <section className="problem-section">
      <div className="problem-wrapper">

        <div ref={headerRef} className={`problem-header fade-up ${headerInView ? 'in-view' : ''}`}>
          <span className="problem-eyebrow">THE PROBLEM</span>
          <h2 className="problem-heading">
            Managing Devices and Security<br />Should Not Be Difficult
          </h2>
          <p className="problem-subtext">
            Most organizations struggle with multiple disconnected tools, unclear device visibility, and
            reactive IT. DHMS was built to make device management simple, clear, and proactive.
          </p>
        </div>

        <div ref={gridRef} className={`problem-grid stagger ${gridInView ? 'in-view' : ''}`}>
          {problems.map((item, i) => (
            <div className="problem-card" key={i} style={{ '--delay': `${i * 0.1}s` }}>
              <span className="problem-icon-wrap">
                <ShieldIcon />
              </span>
              <h3 className="problem-card-title">{item.title}</h3>
              <p className="problem-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Problem
