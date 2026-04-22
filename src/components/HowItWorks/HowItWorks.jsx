import hiwImg from "../../assets/How it works.png";
import img12 from "../../assets/image 12.png";
import { useInView } from '../../hooks/useInView'
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Onboard Devices & Staff",
    desc: "Add devices using bulk CSV upload or individual onboarding. Assign each device to a staff member in minutes",
  },
  {
    number: "02",
    title: "Monitor in Real Time",
    desc: "DHMS begins tracking health, activity, location, and security posture for every device immediately.",
  },
  {
    number: "03",
    title: "Receive Alerts & Automate",
    desc: "Smart alerts notify your team of issues. AI automation handles patches, scripts, and routine responses.",
  },
  {
    number: "04",
    title: "Secure, Recover & Improve",
    desc: "Contain threats, recover compromised systems, and use reporting data to continuously improve operations.",
  },
];

function HowItWorks() {
  const [headerRef, headerInView] = useInView(0.2)
  const [gridRef, gridInView] = useInView(0.1)

  return (
    <section
      className="hiw-section"
      style={{ backgroundImage: `url(${img12}), url(${hiwImg})` }}
    >
      <div className="hiw-wrapper">
        <div ref={headerRef} className={`hiw-header fade-up ${headerInView ? 'in-view' : ''}`}>
          <span className="hiw-eyebrow">HOW IT WORKS</span>
          <h2 className="hiw-heading">Get started in four simple steps</h2>
          <p className="hiw-subtext">
            DHMS Product is designed to be fast to deploy and easy to manage —
            even across complex, multi-site organizations.
          </p>
        </div>

        <div ref={gridRef} className={`hiw-grid stagger ${gridInView ? 'in-view' : ''}`}>
          {steps.map((step, i) => (
            <div className="hiw-card" key={i} style={{ '--delay': `${i * 0.15}s` }}>
              <span className="hiw-number">{step.number}</span>
              <h3 className="hiw-card-title">{step.title}</h3>
              <p className="hiw-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
