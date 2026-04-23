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
import outImg from '../../assets/Out.png'
import outerImg from '../../assets/outer.png'
import outer1Img from '../../assets/outer1.png'
import outer2Img from '../../assets/outer2.png'
import outer3Img from '../../assets/outer3.png'
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

        <div className="features-section-header">
          <div className="features-section-header-left">
            <span className="features-badge-num">01</span>
            <h2 className="features-section-title">Remote Monitoring and Management — DHMS RMM:</h2>
            <p className="features-section-desc">
              Achieve peak performance with a natively integrated, secure, AI-powered remote monitoring and
              management solution. Enhance client satisfaction by delivering superior IT administration and
              monitoring services while improving security posture for both endpoints and Microsoft 365.
              Boost technician performance with seamless automation of IT management.
            </p>
          </div>
          <div className="features-section-header-right">
            <img src={rect162} alt="RMM" className="features-header-img" />
          </div>
        </div>

        <p className="features-sub-label">Sub features:</p>

        {/* ── Row 1: Automated patch management ── */}
        <div className="features-row">
          <div className="features-img-col">
            <img src={pic2_1} alt="RMM Dashboard" className="features-screenshot" />
          </div>
          <div className="features-text-col">
            <h3 className="features-subsection-title">Automated patch management:</h3>
            <p className="features-subsection-desc">
              Boost technician productivity and client security via vulnerability assessments and patch
              installation covering Microsoft and 300+ third-party applications. Automated patch testing,
              approvals and customizable patching settings enable you to prioritize high-risk vulnerabilities,
              reduce risk exposure and ensure compliance and protection of sensitive client information.
            </p>
            <ol className="features-roman-list">
              <li>
                <strong>Fail-safe patching</strong>
                <span>Automatic system backup before patching, allowing instant rollback if updates fail.</span>
              </li>
              <li>
                <strong>Vulnerability assessments for third-party Windows applications</strong>
                <span>Scans over 300 third-party Windows apps to detect security vulnerabilities across client devices.</span>
              </li>
              <li>
                <strong>AI-based patch stability scoring</strong>
                <span>Uses AI to rate patch risk before deployment based on real-world data and emerging threat intelligence.</span>
              </li>
            </ol>
          </div>
        </div>

        {/* ── Row 2: System and hardware monitoring ── */}
        <div className="features-row">
          <div className="features-text-col">
            <h3 className="features-subsection-title">System and hardware monitoring</h3>
            <p className="features-subsection-desc">
              Gain complete visibility into device health across your entire fleet with real-time metrics,
              proactive alerts, and intelligent anomaly detection before issues impact end users.
            </p>
            <ol className="features-roman-list">
              <li>
                <strong>ML-based anomaly detection</strong>
                <span>Continuously learns baseline device behaviour to surface unusual activity before it becomes an incident.</span>
              </li>
              <li>
                <strong>Auto-response actions</strong>
                <span>Trigger automated remediation workflows instantly when thresholds are breached, reducing manual intervention.</span>
              </li>
              <li>
                <strong>Smart alerting</strong>
                <span>Noise-filtered, priority-ranked alerts ensure technicians focus on what matters most.</span>
              </li>
            </ol>
          </div>
          <div className="features-img-col">
            <img src={pic2_1a} alt="Hardware Monitoring" className="features-screenshot" />
          </div>
        </div>

        {/* ── Row 3: AI-assisted scripting ── */}
        <div className="features-row">
          <div className="features-img-col">
            <img src={pic1_1} alt="AI Scripting" className="features-screenshot" />
          </div>
          <div className="features-text-col">
            <h3 className="features-subsection-title">AI-assisted scripting</h3>
            <p className="features-subsection-desc">
              Automate complex IT workflows with AI-generated scripts. Write, test, and deploy scripts across
              your device fleet — reducing manual effort and human error.
            </p>
          </div>
        </div>

        {/* ── Row 4: DeployPilot ── */}
        <div className="features-row">
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
        <div className="features-row">
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
        <div className="features-row features-row--mitre">
          {/* LEFT: title + description + items i–v */}
          <div className="features-text-col">
            <h3 className="features-subsection-title">Advanced remote desktop and assistance</h3>
            <p className="features-subsection-desc">
              Enhance remote support with secure connections, agentless access, session recording, and file
              transfer, enabling seamless collaboration while eliminating the need for additional tools and
              ensuring centralized security and compliance monitoring.
            </p>
            <ol className="features-roman-list">
              <li>
                <strong>Remote command line</strong>
                <span>Resolve issues faster with secure CLI access to Windows and macOS devices, allowing remote command execution and background troubleshooting without disrupting users, with full audit logs and support for Command Prompt, PowerShell, ZSH, and Bash.</span>
              </li>
              <li>
                <strong>Chats between technicians and remote users</strong>
                <span>Communicate with users directly through the console, enabling two-way chat, quick support requests, and seamless handover between technicians for efficient issue resolution.</span>
              </li>
              <li>
                <strong>Quick remote actions</strong>
                <span>Perform instant remote tasks like restarting systems, putting devices to sleep, or clearing recycle bins directly from the console.</span>
              </li>
              <li>
                <strong>Software inventory</strong>
                <span>Maintain full visibility of installed software with automated and on-demand scans, enabling easy discovery, tracking, and reporting across all endpoints.</span>
              </li>
              <li>
                <strong>Geolocation tracking for devices</strong>
                <span>Track device locations to manage distributed teams, enforce location policies, recover stolen assets, and optimize task allocation using real-time positioning.</span>
              </li>
            </ol>
          </div>

          {/* RIGHT: image on top + item vi below */}
          <div className="features-right-col-split">
            <div className="features-img-col">
              <img src={outerImg} alt="Remote desktop NEAR RDP Screen Sharing" className="features-screenshot" />
            </div>
            <ol className="features-roman-list features-roman-list--continue-6">
              <li>
                <strong>Drive health monitor</strong>
                <span>Avoid unpredicted data loss and proactively improve uptime by monitoring disk drive health. Using machine learning technology, the system can predict disk issues and alert you to take the precautionary measures.</span>
              </li>
            </ol>
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════
          SECTION 02 — EDR
      ══════════════════════════════════════════ */}
      <div ref={s2Ref} className={`features-section-block fade-up ${s2InView ? 'in-view' : ''}`}>

        <div className="features-section-header">
          <div className="features-section-header-left">
            <span className="features-badge-num">02</span>
            <h2 className="features-section-title">Endpoint Detection and Response (EDR)</h2>
            <p className="features-section-desc">
              As cyberattacks become more advanced and frequent, organizations need a complete system to
              protect, detect, respond, and recover. Instead of using many separate tools, Acronis combines
              endpoint security, management, backup, and recovery into one integrated solution.
            </p>
          </div>
          <div className="features-section-header-right">
            <img src={outImg} alt="EDR" className="features-header-img" />
          </div>
        </div>

        {/* ── Row: Single-click response ── */}
        <div className="features-row features-row--single-click">
          <div className="features-img-col">
            <img src={pic2_2} alt="Remediate entire incident" className="features-screenshot" />
          </div>
          <div className="features-text-col">
            <h3 className="features-subsection-title features-subsection-title--lg">
              Single-click response to attacks for unmatched business continuity
            </h3>
            <p className="features-subsection-desc">
              Prevail where point solutions fail — leverage the full power of integration among cybersecurity,
              data protection and endpoint security configuration management via a single-click response to incidents:
            </p>
            <ul className="features-single-click-bullets">
              <li>Remediate</li>
              <li>by isolating endpoints and quarantining threats</li>
              <li>Investigate further</li>
              <li>using remote connections and forensic backups</li>
              <li>Prevent future attacks</li>
              <li>closing open vulnerabilities</li>
              <li>Ensure business continuity</li>
              <li>with integrated backup and recovery</li>
            </ul>
          </div>
        </div>

        {/* ── Row: Attack-specific rollbacks ── */}
        <div className="features-row">
          <div className="features-text-col">
            <h3 className="features-subsection-title">Attack-specific rollbacks</h3>
            <p className="features-subsection-desc">
              Quickly and easily roll back attack damage, including affected files, data and configurations —
              streamlining remediation without depending on the vulnerable Microsoft Volume Shadow Copy Service
              that most solutions leverage.
            </p>
          </div>
          <div className="features-img-col">
            <img src={outer3Img} alt="Attack-specific rollbacks" className="features-screenshot" />
          </div>
        </div>

        {/* ── Row: MITRE ATT&CK ── */}
        <div className="features-row features-row--mitre">
          {/* LEFT: title + description + items i–x */}
          <div className="features-text-col">
            <h3 className="features-subsection-title">Automated interpretation of incidents mapped to MITRE ATT&amp;CK®</h3>
            <p className="features-subsection-desc">
              Streamline response and increase reactiveness to threats, leveraging AI-based interpretations
              of attacks mapped to MITRE ATT&amp;CK® to understand in minutes:
            </p>
            <ul className="features-mitre-bullets">
              <li>How the attacker got in</li>
              <li>How they hid their tracks</li>
              <li>What harm the attack caused and how it caused it</li>
              <li>How the attack spread</li>
            </ul>
            <ol className="features-roman-list">
              <li>
                <strong>AI-generated incident summaries</strong>
                <span>Provides quick AI-written summaries of security incidents to speed up analysis and response.</span>
              </li>
              <li>
                <strong>GenAI Protection: Usage monitoring</strong>
                <span>Tracks and reports usage of generative AI tools in browsers and allows control through URL restrictions.</span>
              </li>
              <li>
                <strong>Prioritization of incidents</strong>
                <span>Automatically ranks security incidents by severity so teams can focus on the most critical threats first.</span>
              </li>
              <li>
                <strong>Threat containment and quarantining</strong>
                <span>Stops attacks by blocking malicious processes and isolating threats before they can spread.</span>
              </li>
              <li>
                <strong>Endpoint isolation</strong>
                <span>Disconnects infected devices from the network to prevent attacks from spreading to other systems.</span>
              </li>
              <li>
                <strong>Recovery, including full reimaging</strong>
                <span>Restores systems after attacks using file recovery or full system reimaging to quickly bring operations back online.</span>
              </li>
              <li>
                <strong>Disaster recovery failover</strong>
                <span>Automatically switches to a backup environment when systems are disrupted to maintain business continuity.</span>
              </li>
              <li>
                <strong>Remote endpoint connection (with Management)</strong>
                <span>Allows secure remote access to affected devices for investigation and troubleshooting.</span>
              </li>
              <li>
                <strong>Patch management (with Management)</strong>
                <span>Fixes security gaps after incidents using built-in patch management across 250+ applications.</span>
              </li>
              <li>
                <strong>Intelligent IoC search (emerging threats)</strong>
                <span>Automatically searches for indicators of compromise across all endpoints using real-time threat intelligence.</span>
              </li>
            </ol>
          </div>

          {/* RIGHT: image on top + items xi–xviii below */}
          <div className="features-right-col-split">
            <div className="features-img-col">
              <img src={pic2_2} alt="Remediate entire incident" className="features-screenshot" />
            </div>
            <ol className="features-roman-list features-roman-list--continue-11">
              <li>
                <strong>Anti-malware protection for backups</strong>
                <span>Scans backups for malware to ensure only clean data is restored.</span>
              </li>
              <li>
                <strong>Safe recovery</strong>
                <span>Ensures restored systems are clean by scanning backups, applying security patches, and updating antivirus definitions during recovery.</span>
              </li>
              <li>
                <strong>Remote device wipe</strong>
                <span>Ensures restored systems are clean by scanning backups, applying security patches, and updating antivirus definitions during recovery.</span>
              </li>
              <li>
                <strong>Public API for EDR</strong>
                <span>Allows integration and automation of EDR functions through APIs.</span>
              </li>
              <li>
                <strong>Augmenting Microsoft Defender AV</strong>
                <span>Enhances Microsoft Defender with AI-driven detection, response, and recovery while keeping centralized control.</span>
              </li>
              <li>
                <strong>Potentially unwanted applications (PUA) protection</strong>
                <span>Detects and blocks unwanted applications that affect performance, display ads, or track user activity, and includes them in incident analysis.</span>
              </li>
              <li>
                <strong>Forensics backup</strong>
                <span>Collects and stores forensic data like memory dumps and system activity for investigation and compliance.</span>
              </li>
              <li>
                <strong>Event monitoring and automated correlations</strong>
                <span>Tracks system activity and automatically links events into attack timelines for easier analysis.</span>
              </li>
            </ol>
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════
          SECTION 03 — Email Security
      ══════════════════════════════════════════ */}
      <div ref={s3Ref} className={`features-section-block fade-up ${s3InView ? 'in-view' : ''}`}>

        <div className="features-section-header">
          <div className="features-section-header-left">
            <span className="features-badge-num">03</span>
            <h2 className="features-section-title">Email Security</h2>
            <p className="features-section-desc">
              Block any email-borne threat, including spam, phishing, business email compromise (BEC),
              malware, advanced persistent threats (APTs), and zero-days before it reaches end-users.
            </p>
          </div>
          <div className="features-section-header-right">
            <img src={rect162b} alt="Email Security" className="features-header-img" />
          </div>
        </div>

        <div className="features-row">
          <div className="features-text-col">
            <h3 className="features-subsection-title">Next-generation dynamic detection</h3>
            <p className="features-subsection-desc">
              Stop zero-days and APTs with Perception Point's unique technology — CPU-level analysis that
              detects and blocks advanced attacks such as APTs and zero-days at the exploit stage by
              identifying deviations from normal execution flow during runtime.
            </p>
          </div>
          <div className="features-img-col">
            <img src={outer2Img} alt="Next-generation dynamic detection" className="features-screenshot" />
          </div>
        </div>

        <div className="features-row features-row--mitre">
          {/* LEFT: image on top + items ix–xiv below */}
          <div className="features-right-col-split">
            <div className="features-img-col">
              <img src={outer1Img} alt="X-ray Insights dashboard" className="features-screenshot" />
            </div>
            <ol className="features-roman-list features-roman-list--continue-9">
              <li>
                <strong>Logging and auditing</strong>
                <span>Tracks all security and admin actions for compliance, investigation, and transparency.</span>
              </li>
              <li>
                <strong>24/7 chat support with email security team</strong>
                <span>Gives real-time access to security experts directly through the platform for fast support.</span>
              </li>
              <li>
                <strong>Reporting</strong>
                <span>Provides regular and on-demand security reports to show threats, activity, and system performance.</span>
              </li>
              <li>
                <strong>Ad-hoc email analysis for end-users</strong>
                <span>Allows users to submit suspicious emails for expert review before taking action.</span>
              </li>
              <li>
                <strong>End-user contextual help</strong>
                <span>Adds warning banners and guidance to emails to improve user awareness and reduce risky behavior.</span>
              </li>
              <li>
                <strong>Automatic email routing for Microsoft 365</strong>
                <span>Automatically configures email routing between Microsoft 365 and DHMS for quick setup and deployment.</span>
              </li>
            </ol>
          </div>

          {/* RIGHT: title + description + items i–viii */}
          <div className="features-text-col">
            <h3 className="features-subsection-title">X-ray insights</h3>
            <p className="features-subsection-desc">
              Leverage a holistic view of the threat landscape across organizations with forensics data for
              each client and email, proactive insights on threats targeting clients and most risky attack
              patterns, and analysis of any file or URL on which the service delivery team needs forensics.
            </p>
            <ol className="features-roman-list">
              <li>
                <strong>Spam filter</strong>
                <span>Blocks unwanted and malicious emails using spam detection and reputation-based filtering.</span>
              </li>
              <li>
                <strong>Anti-evasion</strong>
                <span>Detects hidden threats by breaking emails and attachments into smaller parts and scanning them with multiple engines in under 30 seconds.</span>
              </li>
              <li>
                <strong>Threat intelligence</strong>
                <span>Uses multiple global threat intelligence sources to detect and block new and emerging cyber threats in real time.</span>
              </li>
              <li>
                <strong>Static signature-based analysis</strong>
                <span>Identifies known threats using advanced antivirus signatures enhanced to detect complex attack patterns.</span>
              </li>
              <li>
                <strong>Anti-phishing engines</strong>
                <span>Detects fake or malicious links using reputation checks and image recognition to verify if URLs are legitimate.</span>
              </li>
              <li>
                <strong>Anti-spoofing</strong>
                <span>Stops email impersonation attacks using machine learning and email authentication checks (SPF, DKIM, DMARC).</span>
              </li>
              <li>
                <strong>Incident response service</strong>
                <span>Provides access to security experts who monitor threats, investigate incidents, handle alerts, and support remediation.</span>
              </li>
              <li>
                <strong>Account Takeover (ATO) protection</strong>
                <span>Detects and stops unauthorized account access by identifying suspicious behavior, phishing attempts, and account compromise signs.</span>
              </li>
            </ol>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Features
