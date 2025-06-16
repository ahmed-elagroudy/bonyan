import "./Contact.css";
import ContactS1Img from "../../Assets/Images/ContactS1.webp";
import ContactS1ImgMob from "../../Assets/Images/ConactS1Mob.webp";
import Location from "../../Assets/Svg/Contact/Location.svg";
import Phone from "../../Assets/Svg/Contact/Phone.svg";
import Email from "../../Assets/Svg/Contact/Email.svg";
import FormWeb from "./Form";

export default function ContactEn() {
  return (
    <>
      <div className="ContactC">
        <ContactS1 />
        <ContactS2 />
        <ContactS3 />
      </div>
    </>
  );
}

function ContactS1() {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <div className="ContS1">
        <div className="ContS1ImgC">
          <img src={isMobile ? ContactS1ImgMob : ContactS1Img} alt="Contact Us" />
          <h1 className="OverlayText FLeowB16pxFW7">Contact us</h1>
          <div className="ContactCardsWrapper">
            <ContactCard
              icon={Location}
              title={<>OUR MAIN OFFICE</>}
              children={
                <>
                  Polgon 6 - Sodic <br />
                  Compound - Zayed 6
                </>
              }
            />
            <ContactCard
              icon={Phone}
              title={<>Phone</>}
              children={
                <>
                  +201117012317 <br /> +201019299325
                </>
              }
            />
            <ContactCard icon={Email} title={<>Email</>} children={<>info@bonyan-eg.net</>} />
          </div>
        </div>
      </div>
    </>
  );
}

function ContactS2() {
  return (
    <>
      <div className="ContS2">
        <div className="CP2P1 FLeowB32pxFW7">We’re Ready to Build With You!</div>{" "}
        <div className="CP2P2 FLeowB20pxFW7">
          At Bonyan Group, we value every opportunity to connect. Whether you’re looking to start a new project, request a quote, or simply have a question
          about our construction services — our team is here to help. Just fill out the form below, and we’ll get back to you as soon as possible.
        </div>
      </div>
    </>
  );
}

function ContactS3() {
  return (
    <>
      <div className="ContP3">
        <FormWeb />
      </div>
    </>
  );
}

function ContactCard({ icon, title, children }) {
  return (
    <div className="ContS1Card">
      <div className="CS1CIcon">
        <img src={icon} alt="" />
      </div>
      <h3 className="CS1CTitle FLeowB20pxFW7">{title}</h3>
      <div className="CS1Content FLeowB16pxFW7">{children}</div>
    </div>
  );
}
