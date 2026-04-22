import { useState } from "react";
import { useInView } from '../../hooks/useInView'
import "./FAQ.css";

const faqs = [
  {
    question: "Who is DHMS Product built for?",
    answer:
      "DHMS Product is built for corporate organizations that need centralized control over devices, staff, security, and IT operations. It combines device management, cybersecurity, reporting, and remote support into one platform.",
  },
  {
    question: "Can DHMS Product support remote teams and multiple locations?",
    answer:
      "Yes. It is designed for distributed teams, allowing organizations to monitor, manage, and support devices across different locations in real time.",
  },
  {
    question: "How does DHMS Product improve security?",
    answer:
      "It includes endpoint detection and response, email security, threat isolation, automated patching, and recovery tools to protect against malware, phishing, and advanced cyber attacks.",
  },
  {
    question: "Can we track and manage all devices in one place?",
    answer:
      "Yes. DHMS Product provides real-time device tracking, health monitoring, staff-device assignment, and centralized control for all onboarded devices.",
  },
  {
    question: "Is onboarding devices and staff complicated?",
    answer:
      "No. Devices and staff can be onboarded easily using simple forms, bulk CSV uploads, or automated network discovery tools.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [headerRef, headerInView] = useInView(0.2)
  const [listRef, listInView] = useInView(0.1)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section">
      <div className="faq-wrapper">
        <div ref={headerRef} className={`faq-header fade-up ${headerInView ? 'in-view' : ''}`}>
          <h2 className="faq-heading">Frequently asked questions</h2>
          <p className="faq-subtext">
            Simple answers for teams evaluating if DHMS Product is the right
            next step for enterprise operations and security.
          </p>
        </div>

        <div ref={listRef} className={`faq-list stagger ${listInView ? 'in-view' : ''}`}>
          {faqs.map((faq, i) => (
            <div
              className={`faq-item ${openIndex === i ? "faq-open" : ""}`}
              key={i}
              style={{ '--delay': `${i * 0.08}s` }}
            >
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{faq.question}</span>
                <svg
                  className="faq-chevron"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openIndex === i && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
