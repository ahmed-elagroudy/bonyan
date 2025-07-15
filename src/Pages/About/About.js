import "./About.css";
import { Link } from "react-router-dom";
import AboutS2Img from "../../Assets/Images/AboutS2.webp";
import OurMission from "../../Assets/Svg/About/Mission.svg";
import OurVision from "../../Assets/Svg/About/Vission.svg";
export default function About() {
  return (
    <>
      <div className="AboutC">
        <AboutS1 />
        <AboutS2 />
        <AboutS3 />
        <AboutS4 />
      </div>
    </>
  );
}

function AboutS1() {
  return (
    <>
      <div className="AboutS1">
        <div className="AboutS1P1 FLeowB20pxFW7">
          <Link to="/">Home</Link>
          <div>&gt;</div>
          <div className="AS1P1T">About us</div>
        </div>
        <div className="AboutS1P2 FLeowB32pxFW7">About Us</div>
      </div>
    </>
  );
}

function AboutS2() {
  return (
    <>
      <div className="AboutS2">
        <div className="AboutS2P1 FLeowLpxFW4">
          Established in 2018, Bonyan Group is a privately held holding company that oversees a group of specialized companies operating in the fields of
          construction, infrastructure, engineering services, and project management. Since its foundation, Bonyan Group has positioned itself as a trusted and
          strategic partner for governmental and sovereign institutions, delivering complex and sensitive projects that support national development and
          critical infrastructure goals.
          <br />
          <br />
          Our portfolio spans various sectors within the construction and development ecosystem, allowing us to provide end-to-end solutions under one umbrella.
          With a focus on excellence, precision, and confidentiality, we are proud to work exclusively with government bodies, sovereign entities, and strategic
          national projects.
          <br />
          <br />
          Bonyan Group’s companies share a unified commitment to quality, national service, and operational integrity. Our success is rooted in our ability to
          navigate high-level requirements, manage secure environments, and deliver exceptional results that meet the expectations of our public-sector
          partners.
        </div>
        <div className="AboutS2P2">
          <img src={AboutS2Img} alt="" className="AbS2Img" />
        </div>
      </div>
    </>
  );
}

function AboutS3() {
  return (
    <>
      <div className="AboutS3">
        <div className="AboutS3P1 FLeowL16pxFW4">
          As we continue to grow, our vision remains clear: to strengthen our role as a dependable partner in Egypt’s strategic development, and to expand our
          presence across the region while maintaining our focus on serving the public sector with distinction.
        </div>
        <div className="AboutS3P2">
          {/*  */}
          <AbS3P2C
            imgSrc={OurMission}
            title={"Our Mission"}
            desc={
              <>
                To provide trusted, efficient, and high-standard construction solutions exclusively for governmental and sovereign clients, ensuring every
                project supports national development goals and reflects the highest levels of integrity and professionalism.
              </>
            }
          />
          {/*  */}
          <AbS3P2C
            imgSrc={OurVision}
            title={"Our Vision"}
            desc={
              <>
                To be a leading and trusted construction partner for strategic state projects in Egypt and the region, recognized for our unwavering commitment
                to quality, confidentiality, and national service.
              </>
            }
          />
        </div>
      </div>
    </>
  );
}

function AbS3P2C({ imgSrc, title, desc }) {
  return (
    <>
      <div className="AbS3P2C">
        <div className="AbS3P2C1">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="AbS3P2C2 FLeowB32pxFW7">{title}</div>
        <div className="AbS3P2C3 FLeowL16pxFW4">{desc}</div>
      </div>
    </>
  );
}

function AboutS4() {
  return (
    <>
      <div className="AboutS4">
        <div className="FLeowB32pxFW7 AboutS4P1">Our Core Values</div>
        <div className="AboutS4P2">
          <AboutS4Box title={<>Integrity</>} desc={<>We operate with honesty, transparency, and strong moral principles in every aspect of our work.</>} />
          <AboutS4Box
            title={<>Commitment to National Service</>}
            desc={<>Our projects are driven by a deep sense of responsibility to serve the country’s strategic goals.</>}
            descSp={"-1vw"}
          />
          <AboutS4Box title={<>Confidentiality</>} desc={<>We respect and protect the sensitive nature of our clients’ work.</>} />
        </div>
        <div className="AboutS4P2">
          <AboutS4Box title={<>Excellence</>} desc={<>We pursue the highest standards in execution, materials, and project management.</>} />
          <AboutS4Box title={<>Reliability</>} desc={<>Our partners trust us to deliver on time and with consistent quality.</>} />
          <AboutS4Box title={<>Partnership</>} desc={<>We believe in long-term collaboration with governmental and sovereign institutions</>} />
        </div>
      </div>
    </>
  );
}

function AboutS4Box({ title, desc, descSp }) {
  return (
    <>
      <div className="AbS4BC">
        <div className="AbS4BP1"></div>
        <div className="AbS4BP2 FLeowB20pxFW7">- {title}</div>
        <div className="AbS4BP3 FLeowL16pxFW4" style={{ marginTop: descSp }}>
          {desc}
        </div>
      </div>
    </>
  );
}
