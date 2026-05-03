import { useNavigate } from "react-router";
import bannerHero from "../../imports/Banner_hero.png";
import aboutUs from "../../imports/aboutus.jpeg";
import importExportImg from "../../imports/ImportandExport.jpeg";
import distributionImg from "../../imports/Distribution.jpeg";
import rivanDubaiLogo from "../../imports/RivanDubai_Logo.png";
import mcoLogo from "../../imports/MCO_Logo.png";
import {
  Leaf,
  Globe,
  TrendingUp,
  Warehouse,
  Award,
  Users,
  MapPin,
  Calendar,
  Target,
  Truck,
  Package,
  Thermometer,
  Building2,
} from "lucide-react";
import { WorldMap } from "./WorldMap";
import { useLanguage } from "../context/LanguageContext";

const content = {
  en: {
    hero: {
      brand: "Ayman Al-Mansi Trading Group",
      title: "Connecting The World With Fresh Produce",
      subtitle:
        "Over 30 years of experience in importing and distributing the finest fruits and vegetables worldwide",
      tagline:
        "Connecting global markets with fresh products at uncompromising quality standards",
      discoverBtn: "Discover Our Services",
      contactBtn: "Contact Us",
    },
    about: {
      label: "About Us",
      title: "A Success Story Spanning Three Decades",
      p1: "Ayman Al-Mansi Trading Group was founded in 1994 in Damascus, Syria, and quickly built a strong reputation as a trusted supplier to hotels, restaurants, and major supermarkets.",
      p2: "We were the first to introduce kiwi fruit to the Syrian market, cementing our position as pioneers in delivering fresh and innovative products.",
      p3: "Over the years, we have built a global import network spanning several continents, ensuring year-round supply of the finest fruits and vegetables.",
      p4: "Today, we continue our journey with the same passion and commitment to quality we started with, with a clear vision for the future.",
    },
    features: {
      title: "What Sets Us Apart",
      items: [
        {
          title: "30+ Years Experience",
          desc: "Three decades of excellence in global fruit and vegetable trade",
        },
        {
          title: "High Quality",
          desc: "Strict standards in selecting and inspecting all products before distribution",
        },
        {
          title: "Global Network",
          desc: "Strong partnerships with suppliers in Europe, South America, and Asia",
        },
        {
          title: "Gulf Presence",
          desc: "Strategic distribution points in UAE, Saudi Arabia, and Gulf countries",
        },
        {
          title: "Integrated Supply Chain",
          desc: "From farm to table - advanced and efficient logistics system",
        },
        {
          title: "Modern Cold Storage",
          desc: "Advanced cooling and ripening facilities ensure freshness",
        },
      ],
    },
    services: {
      title: "Our Services",
      subtitle:
        "Comprehensive solutions for fresh produce supply chain",
      items: [
        {
          title: "Import & Export",
          desc: "Global sourcing and distribution of premium fresh produce across continents",
        },
        {
          title: "Distribution",
          desc: "Efficient delivery network covering hotels, restaurants, and retail outlets",
        },
        {
          title: "Cold Storage",
          desc: "State-of-the-art refrigeration facilities maintaining product quality and freshness",
        },
        {
          title: "Hotel & Restaurant Supply",
          desc: "Specialized service for hospitality sector with premium grade products",
        },
      ],
    },
    partners: {
      title: "Our Companies",
      subtitle:
        "Integrated business units delivering excellence",
      items: [
        {
          name: "Rivan Dubai",
          desc: "Main trading company in Dubai specializing in international fruit and vegetable trade",
        },
        {
          name: "Almansi Distribution",
          desc: "Distribution arm ensuring efficient delivery to customers across the region",
        },
        {
          name: "MCO",
          desc: "Cold storage, preservation, and banana ripening facility with advanced technology",
        },
      ],
    },
    facility: {
      title: "Our Advanced Facilities",
      p1: "We own modern cold storage facilities and specialized banana ripening rooms, ensuring product quality is maintained from import to final delivery.",
      p2: "Our advanced cooling technologies preserve freshness and nutritional value, while precise ripening processes ensure bananas reach markets at optimal maturity.",
    },
    global: {
      title: "Our Global Presence",
      subtitle:
        "Extensive network connecting the world's best farms to Middle Eastern markets",
      countries: [
        { flag: "🇸🇾", country: "Syria", role: "Headquarters" },
        {
          flag: "🇦🇪",
          country: "UAE",
          role: "Distribution Hub",
        },
        {
          flag: "🇪🇬",
          country: "Egypt",
          role: "Strategic Partner",
        },
        { flag: "🇬🇷", country: "Greece", role: "Main Source" },
        { flag: "🇨🇱", country: "Chile", role: "Fruit Import" },
      ],
    },
    timeline: {
      title: "Our Journey Through Time",
      milestones: [
        {
          year: "1994",
          title: "The Beginning",
          desc: "Company founded in Damascus",
        },
        {
          year: "2000",
          title: "Expansion",
          desc: "Building global supplier network",
        },
        {
          year: "2010",
          title: "Global Markets",
          desc: "Entering Gulf markets",
        },
        {
          year: "2020",
          title: "Challenges",
          desc: "Adapting to global conditions",
        },
        {
          year: "2024",
          title: "Strong Return",
          desc: "New expansion and future vision",
        },
      ],
    },
    vision: {
      title: "Our Future Vision",
      p1: "We strive to build an integrated global supply system connecting the world's best farms to regional markets",
      p2: "We believe quality is not a choice, but a commitment we live at every step of the supply chain, from farm selection to product delivery to the customer.",
    },
    cta: {
      title: "Let's Start a Successful Partnership",
      subtitle:
        "Join our global customer network and enjoy the finest fresh products",
      btn: "Contact Now",
    },
    stats: [
      { number: "30+", label: "Years Experience" },
      { number: "5", label: "Global Markets" },
      { number: "3", label: "Business Units" },
      { number: "100+", label: "Trusted Partners" },
    ],
    partnerRoles: [
      { label: "Main Company", color: "bg-emerald-600" },
      { label: "Distribution Arm", color: "bg-orange-500" },
      { label: "Cold Storage Division", color: "bg-blue-600" },
    ],
  },
  ar: {
    hero: {
      brand: "مجموعة أيمن المنسي التجارية",
      title: "نربط العالم بمنتجات طازجة",
      subtitle:
        "أكثر من 30 عامًا من الخبرة في استيراد وتوزيع أجود أنواع الخضار والفواكه حول العالم",
      tagline:
        "نربط الأسواق العالمية بمنتجات طازجة بمعايير جودة لا تُساوَم",
      discoverBtn: "اكتشف خدماتنا",
      contactBtn: "تواصل معنا",
    },
    about: {
      label: "من نحن",
      title: "قصة نجاح تمتد لثلاثة عقود",
      p1: "تأسست مجموعة أيمن المنسي التجارية في عام 1994 في دمشق، سوريا، وسرعان ما بنت سمعة قوية كمورد موثوق لفندق والمطاعم ومحلات السوبر ماركت الكبرى.",
      p2: "كنا أول من أدخل فاكهة الكيوي إلى السوق السوري، مما عزز مكانتنا كرواد في تقديم منتجات طازجة ومبتكرة.",
      p3: "على مر السنين، قمنا ببناء شبكة استيراد عالمية تمتد عبر عدة قارات، لضمان توريد أجود أنواع الفواكه والخضروات طوال العام.",
      p4: "اليوم، نواصل مسارةًنا بنفس الشغف والالتزام بالجودة التي بدأنا بها، مع رؤية واضحة نحو المستقبل.",
    },
    features: {
      title: "ما يميزنا",
      items: [
        {
          title: "خبرة 30+ سنة",
          desc: "ثلاثة عقود من التميز في تجارة الخضار والفواكه على المستوى العالمي",
        },
        {
          title: "جودة عالية",
          desc: "معايير صارمة في اختيار وفحص جميع المنتجات قبل التوزيع",
        },
        {
          title: "شبكة عالمية",
          desc: "شراكات قوية مع موردين في أوروبا وأمريكا الجنوبية وآسيا",
        },
        {
          title: "حضور في الخليج",
          desc: "نقاط توزيع استراتيجية في الإمارات والسعودية ودول الخليج",
        },
        {
          title: "سلسلة توريد متكاملة",
          desc: "من المزرعة إلى طاولتك - نظام لوجستي متطور وفعال",
        },
        {
          title: "منشآت تبريد حديثة",
          desc: "مخازن تبريد وتخمير متطورة تضمن الحفاظ على النضارة",
        },
      ],
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول متكاملة لسلسلة توريد المنتجات الطازجة",
      items: [
        {
          title: "استيراد وتصدير",
          desc: "توريد عالمي وتوزيع للمنتجات الطازجة الفاخرة عبر القارات",
        },
        {
          title: "التوزيع",
          desc: "شبكة توصيل فعّالة تغطي الفنادق والمطاعم ومحلات التجزئة",
        },
        {
          title: "التخزين البارد",
          desc: "مرافق تبريد متطورة تحافظ على جودة ونضارة المنتجات",
        },
        {
          title: "توريد الفنادق والمطاعم",
          desc: "خدمة متخصصة لقطاع الضيافة بمنتجات فاخرة",
        },
      ],
    },
    partners: {
      title: "شركاتنا",
      subtitle: "وحدات أعمال متكاملة تقدم التميز",
      items: [
        {
          name: "ريفان دبي",
          desc: "الشركة التجار��ة الرئيسية في دبي المتخصصة في تجارة الفواكه والخضروات الدولية",
        },
        {
          name: "المنسي للتوزيع",
          desc: "ذراع التوزيع الذي يضمن التوصيل الفعّال للعملاء في جميع أنحاء المنطقة",
        },
        {
          name: "إم سي أو",
          desc: "منشأة تخزين بارد وحفظ وتخمير الموز بتقنية متقدمة",
        },
      ],
    },
    facility: {
      title: "منشآتنا المتطورة",
      p1: "نمتلك مخازن تبريد حديثة ومرافق تخمير موز متخصصة، تضمن الحفاظ على جودة المنتجات من لحظة الاستيراد حتى التسليم النهائي.",
      p2: "تقنيات التبريد المتقدمة لدينا تحافظ على النضارة والقيمة الغذائية، بينما تضمن عمليات التخمير المُتقنة نضوج الموز بشكل مثالي قبل وصوله للأسواق.",
    },
    global: {
      title: "انتشارنا العالمي",
      subtitle:
        "شبكة واسعة تربط أفضل المزارع حول العالم بأسواق الشرق الأوسط",
      countries: [
        { flag: "🇸🇾", country: "سوريا", role: "المقر الرئيسي" },
        {
          flag: "🇦🇪",
          country: "الإمارات",
          role: "مركز التوزيع",
        },
        { flag: "🇪🇬", country: "مصر", role: "شريك استراتيجي" },
        { flag: "🇬🇷", country: "اليونان", role: "مصدر رئيسي" },
        {
          flag: "🇨🇱",
          country: "تشيلي",
          role: "استيراد الفواكه",
        },
      ],
    },
    timeline: {
      title: "رحلتنا بر الزمن",
      milestones: [
        {
          year: "1994",
          title: "البداية",
          desc: "تأسيس الشركة في دمشق",
        },
        {
          year: "2000",
          title: "التوسع",
          desc: "بناء شبكة الموردين العالمية",
        },
        {
          year: "2010",
          title: "الأسواق العالمية",
          desc: "دخول أسواق الخليج",
        },
        {
          year: "2020",
          title: "التحديات",
          desc: "التكيف مع الظروف العالمية",
        },
        {
          year: "2024",
          title: "العودة القوية",
          desc: "توسع جديد ورؤية مستقبلية",
        },
      ],
    },
    vision: {
      title: "رؤيتنا المستقبلية",
      p1: "نسعى لبناء منظومة توريد عالمية متكاملة تربط أفضل المزارع حول العالم بالأسواق الإقليمية",
      p2: "نؤمن بأن الجودة ليست خيارًا، بل هي التزام نعيشه في كل خطوة من خطوات سلسلة التوريد، من اختيار المزارع إلى لحظة وصول المنتج للعميل.",
    },
    cta: {
      title: "لنبدأ شراكة ناجحة",
      subtitle:
        "انضم إلى شبكة عملائنا حول العالم واستمتع بأجود المنتجات الطازجة",
      btn: "تواصل الآن",
    },
    stats: [
      { number: "30+", label: "سنة خبرة" },
      { number: "5", label: "أسواق عالمية" },
      { number: "3", label: "وحدات أعمال" },
      { number: "100+", label: "شريك موثوق" },
    ],
    partnerRoles: [
      { label: "الشركة الرئيسية", color: "bg-emerald-600" },
      { label: "ذراع التوزيع", color: "bg-orange-500" },
      { label: "قسم التخزين البارد", color: "bg-blue-600" },
    ],
  },
};

const iconColor = "#E53935";

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-12 px-4">
    <h2
      className="text-gray-900 mb-3 text-2xl md:text-3xl lg:text-4xl leading-tight"
      style={{
        fontFamily: "'Cairo', sans-serif",
        fontWeight: 700,
      }}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
        style={{ fontFamily: "'Tajawal', sans-serif" }}
      >
        {subtitle}
      </p>
    )}
    <div className="h-1 w-16 bg-emerald-600 rounded-full mt-4" />
  </div>
);

export function HomePage() {
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();
  const t = content[language];

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-orange-50"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${bannerHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            opacity: 0.6,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-white/80 z-[1]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center py-10 md:py-16">
          <div className="mb-4 inline-block">
            <h2
              className="text-emerald-600 mb-2 text-xs md:text-base lg:text-lg tracking-wide uppercase"
              style={{
                fontFamily: "'Cairo', sans-serif",
                fontWeight: 700,
              }}
            >
              {t.hero.brand}
            </h2>
          </div>
          <h1
            className="text-gray-900 mb-4 md:mb-6 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 800,
            }}
          >
            {t.hero.title}
          </h1>
          <p className="text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed text-sm md:text-lg px-2">
            {t.hero.subtitle}
          </p>
          <div className="flex gap-3 md:gap-4 justify-center flex-wrap px-2">
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 md:px-8 py-3 md:py-3.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 text-sm md:text-base shadow-sm"
              style={{ fontWeight: 700 }}
            >
              {t.hero.discoverBtn}
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-6 md:px-8 py-3 md:py-3.5 bg-white text-emerald-600 border-2 border-emerald-600 rounded-lg hover:bg-emerald-50 transition-all duration-200 text-sm md:text-base"
              style={{ fontWeight: 700 }}
            >
              {t.hero.contactBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {t.stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 border-2 border-gray-100 rounded-xl hover:border-emerald-200 hover:shadow-md transition-all"
              >
                <div
                  className="text-4xl md:text-5xl mb-2"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontWeight: 700,
                    color: iconColor,
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div
              className={`order-2 ${isRTL ? "md:order-1" : "md:order-1"}`}
            >
              <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-gray-200">
                <img
                  src={aboutUs}
                  alt="Fresh Produce Market"
                  className="w-full h-[350px] md:h-[400px] object-cover"
                />
              </div>
            </div>
            <div
              className={`order-1 ${isRTL ? "md:order-2" : "md:order-2"}`}
            >
              <h3
                className="text-emerald-600 mb-3 text-sm md:text-base tracking-wide uppercase"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 700,
                }}
              >
                {t.about.label}
              </h3>
              <h2
                className="text-gray-900 mb-5 leading-tight text-xl md:text-2xl lg:text-3xl"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 700,
                }}
              >
                {t.about.title}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
                <p
                  className="text-emerald-700"
                  style={{ fontWeight: 600 }}
                >
                  {t.about.p4}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-18 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionHeader title={t.features.title} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
            {[
              {
                icon: <Award className="w-7 h-7" />,
                ...t.features.items[0],
              },
              {
                icon: <Target className="w-7 h-7" />,
                ...t.features.items[1],
              },
              {
                icon: <Globe className="w-7 h-7" />,
                ...t.features.items[2],
              },
              {
                icon: <MapPin className="w-7 h-7" />,
                ...t.features.items[3],
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                ...t.features.items[4],
              },
              {
                icon: <Warehouse className="w-7 h-7" />,
                ...t.features.items[5],
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 border-2 border-gray-200 flex flex-col items-center text-center"
              >
                <div
                  className="flex items-center justify-center p-3 rounded-lg text-white mb-4"
                  style={{
                    backgroundColor: iconColor,
                    width: "52px",
                    height: "52px",
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-gray-900 mb-2 text-base md:text-lg leading-snug"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-12 md:py-18 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionHeader
            title={t.services.title}
            subtitle={t.services.subtitle}
          />
          <div className="grid sm:grid-cols-2 gap-6 items-stretch">
            {[
              {
                icon: <Truck className="w-8 h-8" />,
                img: importExportImg,
                ...t.services.items[0],
              },
              {
                icon: <Package className="w-8 h-8" />,
                img: distributionImg,
                ...t.services.items[1],
              },
              {
                icon: <Thermometer className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1769701164670-e819d92cc602?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
                ...t.services.items[2],
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1775797081003-d0b384df95c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
                ...t.services.items[3],
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border-2 border-gray-200 flex flex-col"
              >
                <div className="relative h-48 md:h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                  <div
                    className="absolute bottom-4 left-4 text-white rounded-lg p-3"
                    style={{ backgroundColor: iconColor }}
                  >
                    {service.icon}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-gray-900 mb-2 text-lg md:text-xl leading-snug"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base flex-1">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        id="partners"
        className="py-12 md:py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionHeader
            title={t.partners.title}
            subtitle={t.partners.subtitle}
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {t.partners.items.map((partner, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border-2 flex flex-col ${idx === 0 ? "border-emerald-200" : "border-gray-200"}`}
              >
                <div className="flex justify-center mb-4">
                  <span
                    className={`px-3 py-1.5 ${t.partnerRoles[idx].color} text-white text-xs font-bold rounded-full shadow-sm`}
                  >
                    {t.partnerRoles[idx].label}
                  </span>
                </div>
                <div className="w-16 h-16 md:w-18 md:h-18 mx-auto mb-4 rounded-xl flex items-center justify-center border-2 border-gray-200 bg-gray-50">
                  {idx === 0 ? (
                    <img src={rivanDubaiLogo} alt="Rivan Dubai" className="w-full h-full object-contain rounded-xl p-1" />
                  ) : idx === 2 ? (
                    <img src={mcoLogo} alt="MCO" className="w-full h-full object-contain rounded-xl p-1" />
                  ) : (
                    <Building2 className="w-8 h-8 md:w-9 md:h-9 text-gray-700" />
                  )}
                </div>
                <h3
                  className="text-gray-900 mb-3 text-xl md:text-2xl text-center"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {partner.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base flex-1 text-center">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section
        id="facilities"
        className="relative py-16 md:py-24 overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1601600659891-b63ffda67f74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-emerald-600/93" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center text-white">
          <Warehouse className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 opacity-95" />
          <h2
            className="mb-6 leading-tight text-2xl md:text-3xl lg:text-4xl"
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 700,
            }}
          >
            {t.facility.title}
          </h2>
          <p className="mb-4 leading-relaxed opacity-95 text-base md:text-lg">
            {t.facility.p1}
          </p>
          <p className="leading-relaxed opacity-90 text-sm md:text-base">
            {t.facility.p2}
          </p>
        </div>
      </section>

      {/* Global Presence */}
      <section
        id="global"
        className="py-12 md:py-18 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionHeader
            title={t.global.title}
            subtitle={t.global.subtitle}
          />
          <div className="mb-8 md:mb-10 rounded-lg overflow-hidden border-2 border-gray-200 shadow-sm">
            <WorldMap isRTL={isRTL} language={language} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">
            {t.global.countries.map((item, idx) => (
              <div
                key={idx}
                className="text-center p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-2 border-gray-200 flex flex-col items-center"
              >
                <div className="text-3xl md:text-4xl mb-2">
                  {item.flag}
                </div>
                <h4
                  className="text-gray-900 mb-1 text-sm md:text-base"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {item.country}
                </h4>
                <p
                  className="text-xs font-semibold"
                  style={{ color: iconColor }}
                >
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-18 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionHeader title={t.timeline.title} />
          {/* Mobile: vertical */}
          <div className="lg:hidden relative">
            <div
              className={`absolute top-0 bottom-0 w-1 ${isRTL ? "right-5" : "left-5"}`}
              style={{ backgroundColor: "#E53935" }}
            />
            <div className="space-y-4">
              {[
                {
                  icon: <Calendar className="w-5 h-5" />,
                  ...t.timeline.milestones[0],
                },
                {
                  icon: <Globe className="w-5 h-5" />,
                  ...t.timeline.milestones[1],
                },
                {
                  icon: <TrendingUp className="w-5 h-5" />,
                  ...t.timeline.milestones[2],
                },
                {
                  icon: <Target className="w-5 h-5" />,
                  ...t.timeline.milestones[3],
                },
                {
                  icon: <Award className="w-5 h-5" />,
                  ...t.timeline.milestones[4],
                },
              ].map((milestone, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-start gap-4 ${isRTL ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg"
                    style={{ backgroundColor: iconColor }}
                  >
                    {milestone.icon}
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border-2 border-gray-200">
                    <span
                      className="text-base"
                      style={{
                        color: iconColor,
                        fontFamily: "'Cairo', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {milestone.year}
                    </span>
                    <h4
                      className="text-gray-900 mb-1 text-sm"
                      style={{
                        fontFamily: "'Cairo', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Desktop: horizontal */}
          <div className="hidden lg:block relative">
            <div
              className="absolute top-1/2 right-0 left-0 h-1 transform -translate-y-1/2 z-0"
              style={{ backgroundColor: "#E53935" }}
            />
            <div className="grid grid-cols-5 gap-6 relative items-stretch">
              {[
                {
                  icon: <Calendar className="w-8 h-8" />,
                  ...t.timeline.milestones[0],
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  ...t.timeline.milestones[1],
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  ...t.timeline.milestones[2],
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  ...t.timeline.milestones[3],
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  ...t.timeline.milestones[4],
                },
              ].map((milestone, idx) => (
                <div key={idx} className="relative flex">
                  <div className="flex-1 flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border-2 border-gray-200 z-10">
                    <div className="flex justify-center mb-4">
                      <div
                        className="p-3 text-white rounded-lg flex-shrink-0"
                        style={{ backgroundColor: iconColor }}
                      >
                        {milestone.icon}
                      </div>
                    </div>
                    <div
                      className="mb-2 text-xl md:text-2xl"
                      style={{
                        color: iconColor,
                        fontFamily: "'Cairo', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {milestone.year}
                    </div>
                    <h4
                      className="text-gray-900 mb-2 text-base leading-snug"
                      style={{
                        fontFamily: "'Cairo', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 md:py-18 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <div className="mb-6">
            <div className="inline-flex p-4 bg-emerald-600 text-white rounded-lg shadow-sm mb-4">
              <Leaf className="w-10 h-10 md:w-12 md:h-12" />
            </div>
          </div>
          <h2
            className="text-gray-900 mb-5 leading-tight text-2xl md:text-3xl lg:text-4xl"
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 700,
            }}
          >
            {t.vision.title}
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
            {t.vision.p1}
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {t.vision.p2}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="relative py-16 md:py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center text-white">
          <Users className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-6 opacity-95" />
          <h2
            className="mb-5 leading-tight text-2xl md:text-3xl lg:text-4xl"
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 700,
            }}
          >
            {t.cta.title}
          </h2>
          <p className="mb-8 md:mb-10 opacity-95 leading-relaxed text-base md:text-lg px-4">
            {t.cta.subtitle}
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-8 md:px-10 py-3.5 md:py-4 bg-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 text-base md:text-lg shadow-sm"
            style={{
              color: iconColor,
              fontWeight: 700,
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            {t.cta.btn}
          </button>
        </div>
      </section>
    </>
  );
}