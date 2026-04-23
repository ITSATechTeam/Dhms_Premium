import { useInView } from '../../hooks/useInView'
import rect162 from '../../assets/Rectangle 162.png'
import rect162b from '../../assets/Rectangle 162 (1).png'
import pic1_1 from '../../assets/Picture1 1.png'
import pic1_2 from '../../assets/Picture1 2.png'
import pic2_1 from '../../assets/Picture2 1.png'
import pic2_1a from '../../assets/Picture2 1 (1).png'
import pic2_1b from '../../assets/Picture2 1 (2).png'
import pic2_1c from '../../assets/Picture2 1 (3).png'
import pic2_1d from '../../assets/Picture2 1 (4).png'
import pic2_1e from '../../assets/Picture2 1 (5).png'
import pic2_2 from '../../assets/Picture2 2.png'
import pic2_2a from '../../assets/Picture2 2 (1).png'
import './Features.css'

function Features() {
  const [headerRef, headerInView] = useInView(0.2)
  const [s1Ref, s1InView] = useInView(0.1)
  const [s2Ref, s2InView] = useInView(0.1)
  const [s3Ref, s3InView] = useInView(0.1)

  return (
    <section className="features-section">

      {/* ── Global Header ── */}
      <div ref={headerRef} className={`features-top-header fade-up ${headerInView ? 'in-view' : ''}`}>
        <h2 className="features-main-heading">
          <span className="features-blue">DHMS Onis </span>CORE FEATURES
        </h2>
        <p className="features-main-subtext">
          Everything you need to keep your team's devices secure, organized, and running smoothly
        </p>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 01 — RMM
      ══════════════════════════════════════════ */}
      <div ref={s1Ref} className={`features-section-block fade-up ${s1InView ? 'in-view' : ''}`}>

        {/* Section badge */}
        <div className="features-badge-wrap">
          <img src={rect162} alt="" className="features-rect-bg" aria-hidden="true" />
          <span className="features-badge-num">01</span>
        </div>

        <h2 className="features-section-title">Remote Monitoring and Management — DHMS RMM</h2>
        <p className="features-section-desc">
          DHMS RMM gives IT teams and managed service providers complete control over every device in your
          organization. Monitor health, automate maintenance, and respond to issues in real time — without
          disrupting your workforce.
        </p>

        <p className="features-sub-label">Sub features:</p>

        {/* ── Row 1: Automated patch management ── */}
        <div className="features-row features-row-img-right">
          <div className="features-img-col">
            <img src={pic2_1} alt="RMM Dashboard" className="features-screenshot" />
          </div>
          <div className="features-text-col">
            <h3 className="features-subsection-title">Automated patch management:</h3>
            <ol className="features-roman-list">
              <li>Full-safe patching</li>
              <li>Vulnerability assessments for third-party Windows applications</li>
              <li>AI-based patch stability scoring</li>
            </ol>
          </div>
        </div>

        {/* ── Row 2: System and hardware monitoring ── */}
        <div className="features-row features-row-img-right">
          <div className="features-text-col">
            <h3 className="features-subsection-title">System and hardware monitoring</h3>
            <ol className="features-roman-list">
              <li>ML-based anomaly detection</li>
              <li>Auto-response actions</li>
              <li>Smart alerting</li>
            </ol>
          </div>
          <div className="features-img-col">
            <img src={pic2_1a} alt="Hardware Monitoring" className="features-screenshot" />
          </div>
        </div>

        {/* ── Row 3: AI-assisted scripting ── */}
        <div className="features-row features-row-stack">
          <div className="features-img-col features-img-wide">
            <img src={pic1_1} alt="AI Scripting" className="features-screenshot" />
          </div>
          <div className="features-text-col features-text-overlay">
            <h3 className="features-subsection-title">AI-assisted scripting</h3>
            <p className="features-subsection-desc">
              Automate complex IT workflows with AI-generated scripts. Write, test, and deploy scripts across
              your device fleet — reducing manual effort and human error.
            </p>
          </div>
        </div>

        {/* ── Row 4: DeployPilot ── */}
        <div className="features-row features-row-img-right">
          <div className="features-text-col">
            <h3 className="features-subsection-title">DeployPilot™ For AI-enhanced software deployment</h3>
            <p className="features-subsection-desc">
              Deploy software packages to hundreds of devices simultaneously with intelligent scheduling,
              rollback protection, and dependency management powered by AI.
            </p>
          </div>
          <div className="features-img-col">
            <img src={pic2_1b} alt="DeployPilot" className="features-screenshot" />
          </div>
        </div>

        {/* ── Row 5: Microsoft 365 ── */}
        <div className="features-row features-row-img-right">
          <div className="features-img-col">
            <img src={pic2_1c} alt="Microsoft 365" className="features-screenshot" />
          </div>
          <div className="features-text-col">
            <h3 className="features-subsection-title">Microsoft 365 Security Posture Management</h3>
            <p className="features-subsection-desc">
              Monitor and improve your Microsoft 365 security configuration. Get actionable insights,
              policy recommendations, and compliance status across your entire tenant.
            </p>
          </div>
        </div>

        {/* ── Row 6: Advanced remote desktop ── */}
        <div className="features-row features-row-img-right">
          <div className="features-text-col">
            <h3 className="features-subsection-title">Advanced remote desktop and assistance</h3>
            <ol className="features-roman-list">
              <li>Remote command line</li>
              <li>Quick remote actions</li>
              <li>Software inventory</li>
              <li>Geolocation tracking for devices</li>
            </ol>
          </div>
          <div className="features-img-col">
            <img src={pic2_1d} alt="Remote Desktop" className="features-screenshot" />
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════
          SECTION 02 — EDR
      ══════════════════════════════════════════ */}
      <div ref={s2Ref} className={`features-section-block fade-up ${s2InView ? 'in-view' : ''}`}>

        <div className="features-badge-wrap">
          <img src={rect162b} alt="" className="features-rect-bg" aria-hidden="true" />
          <span className="features-badge-num">02</span>
        </div>

        <h2 className="features-section-title">Endpoint Detection and Response (EDR)</h2>
        <p className="features-section-desc">
          Stop advanced threats before they cause damage. DHMS EDR continuously monitors endpoint activity,
          detects suspicious behaviour, and automatically contains threats — keeping your business running
          without interruption.
        </p>

        <div className="features-row features-row-img-right">
          <div className="features-img-col">
            <img src={pic2_1e} alt="EDR Dashboard" className="features-screenshot" />
          </div>
          <div className="features-text-col">
            <h3 className="features-subsection-title">Single-click response to attacks for unmatched business continuity</h3>
            <ol className="features-roman-list">
              <li>AI malware protection for backups</li>
              <li>Safe recovery</li>
              <li>Remote device wipe</li>
              <li>Patch NW EDR</li>
              <li>Microsoft Defender AI</li>
              <li>Forensics backup</li>
              <li>Event monitoring and automated correlations</li>
            </ol>
          </div>
        </div>

        {/* Attacks-specific rollbacks */}
        <div className="features-row features-row-img-right">
          <div className="features-text-col">
            <h3 className="features-subsection-title">Attacks-specific rollbacks</h3>
            <ol className="features-roman-list">
              <li>AI-generated incident summary</li>
              <li>Cloud Protection Usage monitoring</li>
              <li>Visualisation of incidents</li>
              <li>Threat containment and quarantining</li>
              <li>Endpoint isolation</li>
              <li>Recovery, including full reimaging</li>
              <li>Disaster recovery failover</li>
              <li>Remote endpoint connection (with Management)</li>
              <li>Patch management (with management)</li>
              <li>Intelligent IoC search (emerging threats)</li>
            </ol>
          </div>
          <div className="features-img-col">
            <img src={pic2_2} alt="EDR Rollback" className="features-screenshot" />
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════
          SECTION 03 — Email Security
      ══════════════════════════════════════════ */}
      <div ref={s3Ref} className={`features-section-block fade-up ${s3InView ? 'in-view' : ''}`}>

        <div className="features-badge-wrap">
          <img src={rect162} alt="" className="features-rect-bg" aria-hidden="true" />
          <span className="features-badge-num">03</span>
        </div>

        <h2 className="features-section-title">Email Security</h2>
        <p className="features-section-desc">
          Protect your organisation from phishing, malware, spoofing, and advanced email-borne threats with
          AI-powered detection that integrates directly with Microsoft 365 and Google Workspace.
        </p>

        {/* Next-gen detection */}
        <div className="features-row features-row-img-right">
          <div className="features-img-col">
            <img src={pic1_2} alt="Email Security Detection" className="features-screenshot" />
          </div>
          <div className="features-text-col">
            <h3 className="features-subsection-title">Next-generation dynamic detection mapped to MITRE ATT&CK®</h3>
            <ol className="features-roman-list">
              <li>Logging and auditing</li>
              <li>24/7 chat support with email security team</li>
              <li>Reporting</li>
              <li>Mail flow analysis for end users</li>
              <li>End user contextual help</li>
              <li>Automatic email routing for Microsoft 365</li>
            </ol>
          </div>
        </div>

        {/* X-ray Insights */}
        <div className="features-row features-row-img-right">
          <div className="features-text-col">
            <h3 className="features-subsection-title">X-ray Insights</h3>
            <ol className="features-roman-list">
              <li>Spam filter</li>
              <li>Anti-malware</li>
              <li>Threat Intelligence</li>
              <li>Static signature-based analysis</li>
              <li>Anti-phishing engines</li>
              <li>Anti-spoofing</li>
              <li>Incident response</li>
              <li>Account Takeover (ATO) protection</li>
            </ol>
          </div>
          <div className="features-img-col">
            <img src={pic2_2a} alt="X-ray Insights" className="features-screenshot" />
          </div>
        </div>

      </div>

    </section>
  )
}

export default Features
