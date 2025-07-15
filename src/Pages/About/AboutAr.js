import "./About.css";
import { Link } from "react-router-dom";
import AboutS2Img from "../../Assets/Images/AboutS2.webp";
import OurMission from "../../Assets/Svg/About/Mission.svg";
import OurVision from "../../Assets/Svg/About/Vission.svg";
export default function AboutAr() {
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
      <div className="AboutS1 ar" dir="rtl">
        <div className="AboutS1P1 ar FLeowB20pxFW7">
          <Link to="/">الرئيسية</Link>
          <div>&gt;</div>
          <div className="AS1P1T ar">عن الشركة</div>
        </div>
        <div className="AboutS1P2 ar FLeowB32pxFW7">عن الشركة</div>
      </div>
    </>
  );
}

function AboutS2() {
  return (
    <>
      <div className="AboutS2" dir="rtl">
        <div className="AboutS2P1 ar FLeowL16pxFW4">
          تأسست مجموعة بنيان في عام 2018، وهي شركة قابضة خاصة تُشرف على مجموعة من الشركات المتخصصة التي تعمل في مجالات البناء، والبنية التحتية، والخدمات
          الهندسية، وإدارة المشاريع. ومنذ انطلاقتها، رسّخت مجموعة بنيان مكانتها كشريك موثوق واستراتيجي للمؤسسات الحكومية والسيادية، من خلال تنفيذ مشاريع معقدة
          وحساسة تساهم في دعم أهداف التنمية الوطنية وتطوير البنية التحتية الحيوية.
          <br />
          <br />
          تغطي أعمالنا مجموعة متنوعة من القطاعات ضمن منظومة البناء والتطوير، مما يتيح لنا تقديم حلول متكاملة تحت مظلة واحدة. وبتركيزنا على التميز والدقة
          والسرية، نفخر بشراكتنا الحصرية مع الهيئات الحكومية والجهات السيادية والمشاريع الوطنية الاستراتيجية.
          <br />
          <br />
          تتشارك شركات مجموعة بنيان في التزام موحّد بالجودة، وخدمة الوطن، والنزاهة التشغيلية. ويستند نجاحنا إلى قدرتنا على التعامل مع المتطلبات عالية المستوى،
          وإدارة البيئات الحساسة، وتقديم نتائج استثنائية تلبي تطلعات شركائنا في القطاع الحكومي.
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
        <div className="AboutS3P1 ar FLeowL16pxFW4" dir="rtl">
          ومع استمرارنا في النمو، تظل رؤيتنا واضحة: تعزيز دورنا كشريك موثوق في مسيرة التنمية الاستراتيجية في مصر، وتوسيع حضورنا في المنطقة، مع الحفاظ على
          تركيزنا في خدمة القطاع العام بتميّز واحترافية.
        </div>
        <div className="AboutS3P2" dir="rtl">
          {/*  */}
          <AbS3P2C
            imgSrc={OurMission}
            title={"رسالتنا"}
            desc={
              <>
                تقديم حلول إنشائية موثوقة وفعّالة وذات معايير عالية، مخصصة حصريًا للجهات الحكومية والسيادية، بما يضمن أن يساهم كل مشروع في دعم أهداف التنمية
                الوطنية ويعكس أعلى مستويات النزاهة والاحترافية.
              </>
            }
          />
          {/*  */}
          <AbS3P2C
            imgSrc={OurVision}
            title={"رؤيتنا"}
            desc={
              <>
                أن نكون الشريك الرائد والموثوق في تنفيذ المشاريع الاستراتيجية للدولة في مصر والمنطقة، وأن نحظى بالاعتراف لالتزامنا الثابت بالجودة، والسرية،
                وخدمة الوطن.
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
        <div className="AbS3P2C2 ar FLeowB32pxFW7">{title}</div>
        <div className="AbS3P2C3 ar FLeowL16pxFW4">{desc}</div>
      </div>
    </>
  );
}

function AboutS4() {
  return (
    <>
      <div className="AboutS4">
        <div className="FLeowB32pxFW7 ar AboutS4P1">قيمنا الأساسية</div>
        <div className="AboutS4P2" dir="rtl">
          <AboutS4Box title={<>النزاهة</>} desc={<>نلتزم بالصدق والشفافية والمبادئ الأخلاقية الراسخة في جميع جوانب عملنا.</>} />
          <AboutS4Box title={<>الالتزام بخدمة الوطن</>} desc={<>تنبع مشاريعنا من شعور عميق بالمسؤولية تجاه دعم الأهداف الاستراتيجية للدولة.</>} />
          <AboutS4Box title={<>السرية</>} desc={<>نحترم الطبيعة الحساسة لأعمال عملائنا ونحرص على حمايتها بكل دقة.</>} />
        </div>
        <div className="AboutS4P2" dir="rtl">
          <AboutS4Box title={<>التميّز</>} desc={<>نحرص على تحقيق أعلى المعايير في التنفيذ، وجودة المواد، وإدارة المشاريع.</>} />
          <AboutS4Box title={<>الاعتمادية</>} desc={<>يثق شركاؤنا في قدرتنا على الالتزام بالمواعيد وتقديم جودة ثابتة في جميع المشاريع.</>} />
          <AboutS4Box title={<>الشراكة</>} desc={<>نؤمن بأهمية التعاون طويل الأمد مع المؤسسات الحكومية والسيادية.</>} />
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
        <div className="AbS4BP2 ar FLeowB20pxFW7">- {title}</div>
        <div className="AbS4BP3 ar FLeowL16pxFW4" style={{ marginTop: descSp }}>
          {desc}
        </div>
      </div>
    </>
  );
}
