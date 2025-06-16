import "./Contact.css";
import ContactS1Img from "../../Assets/Images/ContactS1.webp";
import ContactS1ImgMob from "../../Assets/Images/ConactS1Mob.webp";
import Location from "../../Assets/Svg/Contact/Location.svg";
import Phone from "../../Assets/Svg/Contact/Phone.svg";
import Email from "../../Assets/Svg/Contact/Email.svg";
import FormWebAr from "./FormAr";

export default function ContactAr() {
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
          <h1 className="OverlayText ar FLeowB16pxFW7">تواصل معنا</h1>
          <div className="ContactCardsWrapper ar" dir="rtl">
            <ContactCard icon={Location} title={<>مكتبنا الرئيسي</>} children={<>بولجون 6 - سوديك كمبوند - زايد 6</>} />
            <ContactCard
              icon={Phone}
              title={<>الهاتف</>}
              children={
                <>
                  +201117012317 <br /> +201019299325
                </>
              }
            />
            <ContactCard icon={Email} title={<>البريد الإلكترونى</>} children={<>info@bonyan-eg.net</>} />
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
        <div className="CP2P1 ar FLeowB32pxFW7" dir="rtl">
          نحن مستعدون للبناء معك!
        </div>{" "}
        <div className="CP2P2 ar FLeowB20pxFW7">
          في مجموعة بنيان ، نُقدّر كل فرصة للتواصل. سواء كنت ترغب في بدء مشروع جديد، أو طلب عرض سعر، أو لديك مجرد استفسار حول خدماتنا في مجال البناء — فإن
          فريقنا هنا لمساعدتك. فقط قم بملء النموذج أدناه، وسنقوم بالرد عليك في أقرب وقت ممكن.
        </div>
      </div>
    </>
  );
}

function ContactS3() {
  return (
    <>
      <div className="ContP3">
        <FormWebAr />
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
      <h3 className="CS1CTitle ar FLeowB20pxFW7">{title}</h3>
      <div className="CS1Content ar FLeowB16pxFW7" dir="ltr">
        {children}
      </div>
    </div>
  );
}
