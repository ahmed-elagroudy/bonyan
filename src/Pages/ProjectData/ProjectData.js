import { importAll } from "../../utils/loadImages";

const project1Images = importAll(require.context("../../Assets/Images/Projects/Project1", false, /\.(png|jpe?g|webp)$/));
const project2Images = importAll(require.context("../../Assets/Images/Projects/Project2", false, /\.(png|jpe?g|webp)$/));
const project3Images = importAll(require.context("../../Assets/Images/Projects/Project3", false, /\.(png|jpe?g|webp)$/));
const project4Images = importAll(require.context("../../Assets/Images/Projects/Project4", false, /\.(png|jpe?g|webp)$/));
const project5Images = importAll(require.context("../../Assets/Images/Projects/Project5", false, /\.(png|jpe?g|webp)$/));
const project6Images = importAll(require.context("../../Assets/Images/Projects/Project5", false, /\.(png|jpe?g|webp)$/));

const projectData = [
  // project 1
  {
    id: "project1",
    title: {
      en: "Agricultural Constructions",
      ar: "الصوب الزراعية",
    },
    description: {
      en: (
        <>
          We provide fully integrated solutions in the field of modern greenhouse construction and design, aligned with the highest international standards in
          smart agriculture. Our services cover the design and implementation of various types of plastic and glass greenhouses, equipped with advanced
          irrigation systems (drip or mist), cooling and ventilation systems, and automated climate control technologies. Understanding the importance of
          creating the ideal environment for crop growth, we combine cutting-edge technology with precise engineering to ensure maximum productivity and
          efficiency. Whether you're launching a new agricultural project or upgrading an existing one, we are your trusted partner — from planning and design
          to execution and operational support.
        </>
      ),
      ar: (
        <>
          نحن نُقدم حلولًا متكاملة في مجال إنشاء وتصميم الصوب الزراعية الحديثة، بما يتوافق مع أعلى المعايير العالمية في مجال الزراعة الذكية. تشمل خدماتنا تصميم
          وتنفيذ بيوت زجاجية وبلاستيكية بأنواعها المختلفة، مع تجهيزها بأنظمة الري بالتنقيط أو الرذاذ، أنظمة التبريد والتهوية، والتحكم الآلي في درجات الحرارة
          والرطوبة. نُدرك أهمية البيئة المثالية للنمو الزراعي، لذا نحرص على دمج التكنولوجيا المتقدمة مع التصميم الهندسي الدقيق لتحقيق أعلى إنتاجية ممكنة. سواء
          كنت تبدأ مشروعًا زراعيًا جديدًا أو تطور مشروعًا قائمًا، فنحن شركاؤك في كل خطوة، من الدراسة والتخطيط إلى التنفيذ والتشغيل الفعلي.
        </>
      ),
    },
    images: project1Images,
    cards: [
      {
        label: { en: "Year", ar: "السنة" },
        value: { en: "2024", ar: "٢٠٢٤" },
      },
      {
        label: { en: "Location", ar: "الموقع" },
        value: { en: "Minya, Egypt", ar: "المنيا، مصر" },
      },
      {
        label: { en: "Project Type", ar: "نوع المشروع" },
        value: { en: "Greenhouse", ar: "صوبة زراعية" },
      },
      {
        label: { en: "Scope of Work", ar: "نطاق العمل" },
        value: { en: "Design & Build", ar: "تصميم وتنفيذ" },
      },
    ],
  },

  // project 2 – المباني الإدارية
  {
    id: "project2",
    title: {
      en: "Administrative Buildings",
      ar: "المباني الإدارية",
    },
    description: {
      en: (
        <>
          We provide fully integrated services in the execution of high-quality administrative buildings, tailored to meet the needs of government institutions,
          corporate headquarters, and service centers. Our projects include multi-purpose administrative facilities with advanced architectural designs and
          robust structural systems, all built in accordance with local building codes and safety standards. Each building is equipped with modern electrical
          systems, IT infrastructure, centralized HVAC, and comprehensive utilities to ensure a productive and fully equipped work environment. From excavation
          and concrete work to final finishes, we maintain the highest standards of quality and discipline — making us a reliable partner in the development of
          strategic administrative projects.
        </>
      ),
      ar: (
        <>
          نُقدم خدمات متكاملة في تنفيذ المباني الإدارية بمواصفات هندسية دقيقة وجودة تنفيذ عالية، بما يلبي متطلبات الهيئات الحكومية والشركات الكبرى في إنشاء
          بيئات عمل فعّالة ومستدامة. تشمل أعمالنا تنفيذ مبانٍ إدارية متعددة الاستخدامات بتصميمات معمارية متطورة وهياكل إنشائية قوية، مع مراعاة كافة اشتراطات
          السلامة والكود المصري للبناء. يتم تجهيز المباني بأنظمة كهرباء متقدمة، شبكات اتصالات، بنية تحتية متكاملة، وأنظمة تكييف وتهوية مركزية لتوفير بيئة عمل
          مريحة ومجهزة بالكامل. نلتزم في كل مرحلة من مراحل المشروع — من الحفر والخرسانة وحتى التشطيبات النهائية — بأعلى درجات الانضباط والجودة، مما يجعلنا شركاء
          موثوقين في تطوير المشروعات الإدارية الحيوية.
        </>
      ),
    },
    images: project2Images,
    cards: [
      {
        label: { en: "Year", ar: "السنة" },
        value: { en: "2023", ar: "٢٠٢٣" },
      },
      {
        label: { en: "Location", ar: "الموقع" },
        value: { en: "Alexandria, Egypt", ar: "الإسكندرية، مصر" },
      },
      {
        label: { en: "Project Type", ar: "نوع المشروع" },
        value: { en: "Administrative Complex", ar: "مجمع إداري" },
      },
      {
        label: { en: "Scope of Work", ar: "نطاق العمل" },
        value: { en: "Design & Construction", ar: "تصميم وتنفيذ" },
      },
    ],
  },

  // project 3 – مأخذ المياه
  {
    id: "project3",
    title: {
      en: "Water Intake Infrastructure",
      ar: "مأخذ المياه",
    },
    description: {
      en: (
        <>
          We execute water intake projects with high efficiency and strict adherence to engineering standards, ensuring the reliable transfer of water from
          natural sources to treatment plants or irrigation systems. Our scope includes the construction of reinforced concrete structures, installation of
          intake pipes, hydraulic openings, and anti-corrosion and waterproofing systems. We implement every stage of the project with precision — from
          excavation and soil stabilization to rebar work and concrete casting — while carefully considering soil conditions and groundwater levels. Our team
          provides innovative engineering solutions to overcome site-specific challenges and ensure long-term durability and operational efficiency.
        </>
      ),
      ar: (
        <>
          نُنفذ مشروعات مأخذ المياه بكفاءة عالية وفقًا لأعلى المعايير الهندسية، لضمان استمرارية تدفق المياه من المصادر الطبيعية إلى محطات المعالجة أو شبكات
          الري. يشمل نطاق عملنا تنفيذ الأعمال الخرسانية والإنشائية الخاصة بمآخذ المياه، بالإضافة إلى تجهيزها بمواسير السحب، الفتحات الهيدروليكية، وأنظمة الحماية
          من التآكل والتسرب. نحرص على تنفيذ المشروع بدقة عالية تبدأ من أعمال الحفر والتدعيم حتى التسليح والصب، مع مراعاة طبيعة التربة ومستوى المياه الجوفية.
          نُوفر أيضًا حلولًا هندسية متقدمة للتعامل مع تحديات المواقع المائية المختلفة، لضمان أعلى كفاءة تشغيلية واستدامة طويلة المدى.
        </>
      ),
    },
    images: project3Images,
    cards: [
      {
        label: { en: "Year", ar: "السنة" },
        value: { en: "2022", ar: "٢٠٢٢" },
      },
      {
        label: { en: "Location", ar: "الموقع" },
        value: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
      },
      {
        label: { en: "Project Type", ar: "نوع المشروع" },
        value: { en: "Water Infrastructure", ar: "بنية تحتية مائية" },
      },
      {
        label: { en: "Scope of Work", ar: "نطاق العمل" },
        value: { en: "Structural & Hydraulic Works", ar: "أعمال إنشائية وهيدروليكية" },
      },
    ],
  },

  // project 4 – مجمع الثلاجات
  {
    id: "project4",
    title: {
      en: "Cold Storage Complex",
      ar: "مجمع الثلاجات",
    },
    description: {
      en: (
        <>
          We design and build modern refrigeration complexes for storing agricultural and food products, supporting a fully integrated cold supply chain that
          preserves product quality and extends shelf life. Our scope includes the construction of state-of-the-art cold storage chambers equipped with advanced
          cooling systems, thermal insulation, and precise ventilation to maintain optimal conditions year-round. The facilities also include automated sorting
          and packaging lines, enhancing operational efficiency, reducing waste, and improving the final product's quality. These refrigeration hubs form a
          critical part of national food security infrastructure and play a key role in maintaining freshness for both local markets and exports.
        </>
      ),
      ar: (
        <>
          نقوم بتنفيذ مجمعات ثلاجات حديثة لتخزين المنتجات الزراعية والغذائية، ضمن منظومة متكاملة تدعم سلسلة الإمداد البارد وتحافظ على جودة وسلامة المحاصيل بعد
          الحصاد. يشمل نطاق أعمالنا تصميم وتنفيذ عنابر تبريد بأعلى المعايير العالمية، مجهزة بوحدات تبريد متقدمة وأنظمة عزل حراري وتهوية دقيقة، تضمن الحفاظ على
          درجات حرارة مثالية طوال العام. كما نقوم بتركيب خطوط فرز وتعبئة آلية داخل المجمع، مما يساهم في رفع كفاءة التشغيل وتقليل الفاقد وتحسين جودة المنتج
          النهائي. هذه المجمعات تُعد بنية تحتية استراتيجية تدعم الأمن الغذائي وتُطيل من عمر المنتجات الزراعية في السوق المحلي والتصديري على حدٍ سواء.
        </>
      ),
    },
    images: project4Images,
    cards: [
      {
        label: { en: "Year", ar: "السنة" },
        value: { en: "2024", ar: "٢٠٢٤" },
      },
      {
        label: { en: "Location", ar: "الموقع" },
        value: { en: "Fayoum, Egypt", ar: "الفيوم، مصر" },
      },
      {
        label: { en: "Project Type", ar: "نوع المشروع" },
        value: { en: "Cold Chain Facility", ar: "سلسلة تبريد" },
      },
      {
        label: { en: "Scope of Work", ar: "نطاق العمل" },
        value: { en: "Refrigeration + Automation", ar: "تبريد + خطوط آلية" },
      },
    ],
  },

  // project 5 – مصنع البطاطس نصف الجاهزة
  {
    id: "project5",
    title: {
      en: "Semi-Processed Potato Factory",
      ar: "مصنع البطاطس نصف الجاهزة",
    },
    description: {
      en: (
        <>
          We build fully integrated factories for the production of semi-fried or ready-to-freeze potatoes, equipped with state-of-the-art European technology
          to ensure high-quality output and efficient operations. The production line includes receiving, washing, sorting, cutting, pre-cooking, rapid cooling,
          and automated packing – all within a controlled, hygienic environment. The facility is outfitted with intelligent control systems, flexible packaging
          lines, and industrial-scale freezing chambers to prepare products for local distribution and export markets. These factories are a cornerstone in
          boosting local food manufacturing and increasing the added value of agricultural produce.
        </>
      ),
      ar: (
        <>
          نقوم بإنشاء مصانع متكاملة لإنتاج البطاطس نصف المقلية أو الجاهزة للتجميد، باستخدام أحدث خطوط التصنيع والتقنيات الأوروبية لضمان جودة عالية وإنتاج مستمر.
          يبدأ خط الإنتاج من استقبال وغسيل وفرز البطاطس، مرورًا بعمليات التقطيع والطبخ الأولي، وانتهاءً بالتبريد السريع والتعبئة الآلية، وكل ذلك ضمن بيئة تصنيع
          خاضعة للرقابة الصحية والجودة. المصنع مجهز بأنظمة تحكم ذكية، خطوط تعبئة مرنة، وثلاجات تجميد عملاقة لضمان جاهزية المنتج للتوزيع المحلي أو التصدير. هذه
          المصانع تُعد خطوة محورية في دعم التصنيع الغذائي المحلي، وتعزيز القيمة المضافة للمحاصيل الزراعية.
        </>
      ),
    },
    images: project5Images,
    cards: [
      {
        label: { en: "Year", ar: "السنة" },
        value: { en: "2021", ar: "٢٠٢١" },
      },
      {
        label: { en: "Location", ar: "الموقع" },
        value: { en: "Beni Suef, Egypt", ar: "بني سويف، مصر" },
      },
      {
        label: { en: "Project Type", ar: "نوع المشروع" },
        value: { en: "Food Processing Factory", ar: "مصنع تجهيز غذائي" },
      },
      {
        label: { en: "Scope of Work", ar: "نطاق العمل" },
        value: { en: "Design + Line Installation", ar: "تصميم + تركيب خطوط إنتاج" },
      },
    ],
  },
];

export default projectData;
