import { useInView } from '../../hooks/useInView'
import "./CTA.css";

function CTA() {
  const [contentRef, contentInView] = useInView(0.2)

  return (
    <section className="cta-section">
      <div ref={contentRef} className={`cta-wrapper fade-up ${contentInView ? 'in-view' : ''}`}>
        <span className="cta-eyebrow">Get Started</span>

        <h2 className="cta-heading">
          Take Control of Your Devices,
          <br />
          Security, and IT Operations
        </h2>

        <p className="cta-subtext">
          DHMS Product gives your organization the tools to monitor, secure,
          manage, and optimize every device from one intelligent platform. Your
          first step starts here.
        </p>

        <div className="cta-buttons">
          <a href="https://thedhms.com/contact" className="cta-btn cta-btn-outline" target="_blank" rel="noopener noreferrer">
            Contact us
          </a>
          <a href="https://thedhms.com/contact/" className="cta-btn cta-btn-solid" target="_blank" rel="noopener noreferrer">
            Request Onboarding
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
