import laptopImg from "../../assets/Frame 275.png";
import { useInView } from '../../hooks/useInView'
import "./Ecosystem.css";

function Ecosystem() {
  const [headerRef, headerInView] = useInView(0.2)
  const [imageRef, imageInView] = useInView(0.1)

  return (
    <section className="ecosystem-section">
      <div ref={headerRef} className={`ecosystem-wrapper fade-up ${headerInView ? 'in-view' : ''}`}>
        <h2 className="ecosystem-heading">
          Your Entire{" "}
          <span className="ecosystem-highlight">Device Ecosystem</span>, Visible
          <br />
          at a Glance
        </h2>
        <p className="ecosystem-subtext">
          Track all devices, manage updates, and stop threats before they
          happen. DHMS Product makes device management effortless
        </p>
      </div>

      <div ref={imageRef} className={`ecosystem-image-wrap fade-up ${imageInView ? 'in-view' : ''}`} style={{ transitionDelay: '0.2s' }}>
        <div className="ecosystem-line line-top-left" />
        <div className="ecosystem-line line-top-right" />
        <div className="ecosystem-line line-bottom-left" />
        <div className="ecosystem-line line-bottom-right" />
        <img
          src={laptopImg}
          alt="DHMS Product dashboard on laptop"
          className="ecosystem-img"
        />
      </div>
    </section>
  );
}

export default Ecosystem;
