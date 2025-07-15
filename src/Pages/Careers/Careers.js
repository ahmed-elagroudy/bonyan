import "./Careers.css";
import { Link } from "react-router-dom";
import CareersS2Img from "../../Assets/Images/CareersS2.webp";
import LineB from "../../Assets/Svg/Careers/LineB.svg";
import CarS3P2BImg1 from "../../Assets/Svg/Careers/CarS3P2BImg1.svg";
import CarS3P2BImg2 from "../../Assets/Svg/Careers/CarS3P2BImg2.svg";
import CarS3P2BImg3 from "../../Assets/Svg/Careers/CarS3P2BImg3.svg";
import FormWeb from "./Form";

export default function Careers() {
  return (
    <>
      <div className="Careers">
        <CareersS1 />
        <CareersS2 />
        <CareersS3 />
        <CareersS4 />
      </div>
    </>
  );
}

function CareersS1() {
  return (
    <>
      <div className="CareersS1">
        <div className="CarS1P1 FLeowB20pxFW7">
          <Link to="/">Home</Link>
          <div>&gt;</div>
          <div className="CS1P1T">Careers</div>
        </div>
        <div className="CarS1P2 FLeowB32pxFW7">Careers</div>
      </div>
    </>
  );
}

function CareersS2() {
  return (
    <>
      <div className="CareersS2">
        <div className="CarS2P1 FLeowB32pxFW7">Join Our Team and Help Shape the Nation’s Future</div>
        <div className="CarS2P2">
          <div className="CarS2P2L FLeowB24pxFW7">
            At Bonyan Group, we don’t just offer jobs — we open doors for talented professionals to contribute to strategic projects that serve Egypt’s present
            and shape its future. We believe excellence starts with people, which is why we seek individuals with a strong sense of responsibility, commitment,
            and discretion to join our team in a professional environment that promotes growth and development.
          </div>
          <div className="CarS2P2R">
            <img src={CareersS2Img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

function CareersS3() {
  return (
    <>
      <div>
        <div className="CareersS3">
          <div className="CareersS3P1 FLeowB32pxFW7">Why Work with Bonyan Group?</div>
          <div className="CarS3P2">
            {/* box 1 */}
            <CarS3P2Box
              imgSrc={CarS3P2BImg1}
              title={<>Strategic National Projects</>}
              desc={<>Be part of meaningful work that impacts the country’s infrastructure and long-term vision.</>}
            />
            <img src={LineB} alt="CarS3P2BLine" className="CarS3P2BLine" />
            {/* box 2 */}
            <CarS3P2Box
              imgSrc={CarS3P2BImg2}
              title={<>Professional Work Environment</>}
              desc={<>We operate at the highest standards of quality and confidentiality, fostering a culture of collaboration and trust.</>}
            />
            {/*  */}
            <img src={LineB} alt="CarS3P2BLine" className="CarS3P2BLine" />
            {/* box 3 */}
            <CarS3P2Box
              imgSrc={CarS3P2BImg3}
              title={<>Growth and Development Opportunities</>}
              desc={<>We invest in our people through continuous training and professional development programs.</>}
              descSp={"-2vw"}
            />
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}

function CarS3P2Box({ imgSrc, title, desc, descSp }) {
  return (
    <>
      <div className="CarS3P2Box">
        <img src={imgSrc} alt={title} className="CarS3P2BImg" />
        <div className="CarS3P2BT FLeowB20pxFW7">{title}</div>
        <div className="CarS3P2BD FLeowL20pxFW4" style={{ marginTop: descSp }}>
          {desc}
        </div>
      </div>
    </>
  );
}

function CareersS4() {
  return (
    <>
      <div className="CareersS4">
        <div className="CarS4P1">
          <div className="CarS4P1T FLeowB32pxFW7">Who Are We Looking For?</div>
          <div className="CarS4P1D FLeowL24pxFW4">
            We seek committed, qualified professionals who share our core values of integrity, excellence, confidentiality, and national service.
          </div>
        </div>
        <div className="CarS4P2">
          <FormWeb />
        </div>
      </div>
    </>
  );
}
