import { useEffect, useRef } from "react";
import heroImg from "../../assets/Hero.png";
import arcImg from "../../assets/Rectangle 25.png";
import "./Hero.css";

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function Hero() {
  const visualRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = visualRef.current?.querySelectorAll(".stat-card");
          cards?.forEach((card) => {
            card.classList.add("card-visible");
            setTimeout(() => card.classList.add("card-floated"), 1200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (visualRef.current) observer.observe(visualRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        {/* ── Left: text content ── */}
        <div className="hero-content">
          <span className="hero-badge">
            <span className="badge-dot" />
            DHMS Onis Product
          </span>

          <h1>
            Product Device Management for Secure, High&#8209;Performing Teams
          </h1>

          <p>
            DHMS Product helps organizations manage devices, protect endpoints,
            monitor teams, and reduce downtime from one intelligent platform.
          </p>

          <a href="https://app.thedhms.com" className="hero-btn" target="_blank" rel="noopener noreferrer">
            Try DHMS Free
          </a>
        </div>

        {/* ── Right: image + stat cards ── */}
        <div className="hero-visual" ref={visualRef}>
          <div className="stat-card card-security card-animate card-delay-1">
            <span className="check-wrap check-blue">
              <CheckIcon />
            </span>
            <div className="card-body">
              <strong>Security coverage</strong>
              <p className="c-blue">
                100% Threat Detection
                <br />
                Coverage
              </p>
            </div>
          </div>

          <img src={arcImg} alt="" className="arc-deco" aria-hidden="true" />

          <img
            src={heroImg}
            alt="DHMS Product – secure device management team"
            className="hero-img"
          />

          <div className="stat-card card-devices card-animate card-delay-2">
            <span className="check-wrap check-green">
              <CheckIcon />
            </span>
            <div className="card-body">
              <strong>No. of Devices</strong>
              <p className="c-green">100 Devices monitored</p>
            </div>
          </div>

          <div className="stat-card card-staff card-animate card-delay-3">
            <span className="check-wrap check-pink">
              <CheckIcon />
            </span>
            <div className="card-body">
              <strong>25+ Staff Accounts</strong>
              <p className="c-pink">Managed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
