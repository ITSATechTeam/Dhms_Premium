import frameImg from '../../assets/Frame 270.png'
import rect159 from '../../assets/Rectangle 159.png'
import { useInView } from '../../hooks/useInView'
import './WhatIs.css'

function WhatIs() {
  const [headerRef, headerInView] = useInView(0.2)
  const [imageRef, imageInView] = useInView(0.1)

  return (
    <section className="whatis-section">
      <div className="whatis-wrapper">

        <div ref={headerRef} className={`whatis-header-group fade-up ${headerInView ? 'in-view' : ''}`}>
          <h2 className="whatis-heading">What is DHMS Onis?</h2>
          <p className="whatis-text">
            Device Health Management Service (DHMS) Onis delivers all-in-one device management, advanced
            security, and AI-powered automation tailored for corporate needs. It reduces downtime, prevents cyber
            threats, and gives real-time insights to optimize IT operations. With 24/7 support and scalable features, it
            ensures your organization runs efficiently and securely.
          </p>
          <a href="https://app.thedhms.com" className="whatis-btn" target="_blank" rel="noopener noreferrer">Try DHMS Free</a>
        </div>

        <div ref={imageRef} className={`whatis-image-frame fade-up ${imageInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <img src={frameImg} alt="DHMS Onis platform dashboard" className="whatis-img" />
        </div>

      </div>

      <img src={rect159} alt="" className="whatis-bottom-bar" aria-hidden="true" />

    </section>
  )
}

export default WhatIs
