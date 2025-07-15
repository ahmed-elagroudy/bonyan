import "./Careers.css";
import { Link } from "react-router-dom";
import CareersS2Img from "../../Assets/Images/CareersS2.webp";
import LineB from "../../Assets/Svg/Careers/LineB.svg";
import CarS3P2BImg1 from "../../Assets/Svg/Careers/CarS3P2BImg1.svg";
import CarS3P2BImg2 from "../../Assets/Svg/Careers/CarS3P2BImg2.svg";
import CarS3P2BImg3 from "../../Assets/Svg/Careers/CarS3P2BImg3.svg";
import FormWebAr from "./FormAr";

export default function CareersAr() {
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
      <div className="CareersS1" dir="rtl">
        <div className="CarS1P1 ar FLeowB20pxFW7">
          <Link to="/">الرئيسية</Link>
          <div>&gt;</div>
          <div className="CS1P1T ar">المهن</div>
        </div>
        <div className="CarS1P2 ar FLeowB32pxFW7">المهن</div>
      </div>
    </>
  );
}

function CareersS2() {
  return (
    <>
      <div className="CareersS2">
        <div className="CarS2P1 ar FLeowB32pxFW7">انضم إلى فريقنا وشارك في بناء مستقبل الوطن</div>
        <div className="CarS2P2" dir="rtl">
          <div className="CarS2P2L ar FLeowB24pxFW7">
            في مجموعة بنيان، لا نقدم مجرد وظائف، بل نفتح أبواب الفرص أمام الكفاءات الوطنية للمساهمة في تنفيذ مشاريع استراتيجية تخدم حاضر مصر وتُرسّخ لمستقبلها.
            نؤمن بأن التميز يبدأ من الأشخاص، لذلك نبحث عن محترفين يتسمون بالمسؤولية، والالتزام، والسرية، للانضمام إلى فريق عملنا في بيئة احترافية تدعم النمو
            والتطوير المستمر.
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
          <div className="CareersS3P1 ar FLeowB32pxFW7">لماذا تنضم إلى مجموعة بنيان؟</div>
          <div className="CarS3P2" dir="rtl">
            {/* box 1 */}
            <CarS3P2Box imgSrc={CarS3P2BImg1} title={<>مشاريع وطنية استراتيجية</>} desc={<>شارك في تنفيذ مشاريع مؤثرة على مستوى الدولة والبنية التحتية.</>} />
            <img src={LineB} alt="CarS3P2BLine" className="CarS3P2BLine" />
            {/* box 2 */}
            <CarS3P2Box
              imgSrc={CarS3P2BImg2}
              title={<>بيئة عمل احترافية</>}
              desc={<>نعمل وفق أعلى معايير الجودة والخصوصية في بيئة عمل قائمة على التعاون والثقة.</>}
            />
            {/*  */}
            <img src={LineB} alt="CarS3P2BLine" className="CarS3P2BLine" />
            {/* box 3 */}
            <CarS3P2Box imgSrc={CarS3P2BImg3} title={<>فرص تطوير ونمو</>} desc={<>ندعم موظفينا بالفرص المستمرة للتدريب والتطور المهني.</>} />
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
        <div className="CarS3P2BT ar FLeowB20pxFW7">{title}</div>
        <div className="CarS3P2BD ar FLeowL20pxFW4" style={{ marginTop: descSp }}>
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
          <div className="CarS4P1T ar FLeowB32pxFW7">من نبحث عنه؟</div>
          <div className="CarS4P1D ar FLeowL24pxFW4" dir="rtl">
            نبحث عن أفراد ملتزمين يتمتعون بالكفاءة والخبرة، ويشاركونا القيم الأساسية: <br /> النزاهة، التميز، السرية، وخدمة الوطن.
          </div>
        </div>
        <div className="CarS4P2">
          <FormWebAr />
        </div>
      </div>
    </>
  );
}
