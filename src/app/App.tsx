import { useState } from 'react';
import { Leaf, Globe, TrendingUp, Warehouse, Award, Users, MapPin, Calendar, Target, Truck, Package, Thermometer, Building2, Menu, X } from 'lucide-react';
import { WorldMap } from './components/WorldMap';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isRTL = language === 'ar';

  const content = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        partners: 'Partners',
        facilities: 'Facilities',
        presence: 'Global Presence',
        contact: 'Contact',
        cta: 'Contact Us'
      },
      hero: {
        brand: 'Ayman Al-Mansi Trading Group',
        title: 'Connecting The World With Fresh Produce',
        subtitle: 'Over 30 years of experience in importing and distributing the finest fruits and vegetables worldwide',
        tagline: 'Connecting global markets with fresh products at uncompromising quality standards',
        discoverBtn: 'Discover Our Services',
        contactBtn: 'Contact Us'
      },
      about: {
        label: 'About Us',
        title: 'A Success Story Spanning Three Decades',
        p1: 'Ayman Al-Mansi Trading Group was founded in 1994 in Damascus, Syria, and quickly built a strong reputation as a trusted supplier to hotels, restaurants, and major supermarkets.',
        p2: 'We were the first to introduce kiwi fruit to the Syrian market, cementing our position as pioneers in delivering fresh and innovative products.',
        p3: 'Over the years, we have built a global import network spanning several continents, ensuring year-round supply of the finest fruits and vegetables.',
        p4: 'Today, we continue our journey with the same passion and commitment to quality we started with, with a clear vision for the future.'
      },
      features: {
        title: 'What Sets Us Apart',
        items: [
          { title: '30+ Years Experience', desc: 'Three decades of excellence in global fruit and vegetable trade' },
          { title: 'High Quality', desc: 'Strict standards in selecting and inspecting all products before distribution' },
          { title: 'Global Network', desc: 'Strong partnerships with suppliers in Europe, South America, and Asia' },
          { title: 'Gulf Presence', desc: 'Strategic distribution points in UAE, Saudi Arabia, and Gulf countries' },
          { title: 'Integrated Supply Chain', desc: 'From farm to table - advanced and efficient logistics system' },
          { title: 'Modern Cold Storage', desc: 'Advanced cooling and ripening facilities ensure freshness' }
        ]
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive solutions for fresh produce supply chain',
        items: [
          { title: 'Import & Export', desc: 'Global sourcing and distribution of premium fresh produce across continents' },
          { title: 'Distribution', desc: 'Efficient delivery network covering hotels, restaurants, and retail outlets' },
          { title: 'Cold Storage', desc: 'State-of-the-art refrigeration facilities maintaining product quality and freshness' },
          { title: 'Hotel & Restaurant Supply', desc: 'Specialized service for hospitality sector with premium grade products' }
        ]
      },
      partners: {
        title: 'Our Companies',
        subtitle: 'Integrated business units delivering excellence',
        items: [
          { name: 'Rivan Dubai', desc: 'Main trading company in Dubai specializing in international fruit and vegetable trade' },
          { name: 'Almansi Distribution', desc: 'Distribution arm ensuring efficient delivery to customers across the region' },
          { name: 'MCO', desc: 'Cold storage, preservation, and banana ripening facility with advanced technology' }
        ]
      },
      facility: {
        title: 'Our Advanced Facilities',
        p1: 'We own modern cold storage facilities and specialized banana ripening rooms, ensuring product quality is maintained from import to final delivery.',
        p2: 'Our advanced cooling technologies preserve freshness and nutritional value, while precise ripening processes ensure bananas reach markets at optimal maturity.'
      },
      global: {
        title: 'Our Global Presence',
        subtitle: 'Extensive network connecting the world\'s best farms to Middle Eastern markets',
        countries: [
          { flag: '🇸🇾', country: 'Syria', role: 'Headquarters' },
          { flag: '🇦🇪', country: 'UAE', role: 'Distribution Hub' },
          { flag: '🇪🇬', country: 'Egypt', role: 'Strategic Partner' },
          { flag: '🇬🇷', country: 'Greece', role: 'Main Source' },
          { flag: '🇨🇱', country: 'Chile', role: 'Fruit Import' }
        ]
      },
      timeline: {
        title: 'Our Journey Through Time',
        milestones: [
          { year: '1994', title: 'The Beginning', desc: 'Company founded in Damascus' },
          { year: '2000', title: 'Expansion', desc: 'Building global supplier network' },
          { year: '2010', title: 'Global Markets', desc: 'Entering Gulf markets' },
          { year: '2020', title: 'Challenges', desc: 'Adapting to global conditions' },
          { year: '2024', title: 'Strong Return', desc: 'New expansion and future vision' }
        ]
      },
      vision: {
        title: 'Our Future Vision',
        p1: 'We strive to build an integrated global supply system connecting the world\'s best farms to regional markets',
        p2: 'We believe quality is not a choice, but a commitment we live at every step of the supply chain, from farm selection to product delivery to the customer.'
      },
      cta: {
        title: 'Let\'s Start a Successful Partnership',
        subtitle: 'Join our global customer network and enjoy the finest fresh products',
        btn: 'Contact Now'
      },
      footer: {
        brand: 'Ayman Al-Mansi Group',
        tagline: 'Pioneers in fruit and vegetable trade since 1994',
        quickLinks: 'Quick Links',
        links: ['About Us', 'Our Services', 'Products', 'Contact Us'],
        services: 'Our Services',
        servicesItems: ['Import & Export', 'Cold Storage', 'Distribution', 'Banana Ripening'],
        contactTitle: 'Contact Us',
        location: 'Dubai, United Arab Emirates',
        copyright: '© 2024 Ayman Al-Mansi Trading Group. All rights reserved.'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'الخدمات',
        partners: 'شركاتنا',
        facilities: 'المنشآت',
        presence: 'الانتشار العالمي',
        contact: 'اتصل بنا',
        cta: 'تواصل معنا'
      },
      hero: {
        brand: 'مجموعة أيمن المنسي التجارية',
        title: 'نربط العالم بمنتجات طازجة',
        subtitle: 'أكثر من 30 عامًا من الخبرة في استيراد وتوزيع أجود أنواع الخضار والفواكه حول العالم',
        tagline: 'نربط الأسواق العالمية بمنتجات طازجة بمعايير جودة لا تُساوَم',
        discoverBtn: 'اكتشف خدماتنا',
        contactBtn: 'تواصل معنا'
      },
      about: {
        label: 'من نحن',
        title: 'قصة نجاح تمتد لثلاثة عقود',
        p1: 'تأسست مجموعة أيمن المنسي التجارية في عام 1994 في دمشق، سوريا، وسرعان ما بنت سمعة قوية كمورد موثوق للفنادق والمطاعم ومحلات السوبر ماركت الكبرى.',
        p2: 'كنا أول من أدخل فاكهة الكيوي إلى السوق السوري، مما عزز مكانتنا كرواد في تقديم منتجات طازجة ومبتكرة.',
        p3: 'على مر السنين، قمنا ببناء شبكة استيراد عالمية تمتد عبر عدة قارات، لضمان توريد أجود أنواع الفواكه والخضروات طوال العام.',
        p4: 'اليوم، نواصل مسيرتنا بنفس الشغف والالتزام بالجودة التي بدأنا بها، مع رؤية واضحة نحو المستقبل.'
      },
      features: {
        title: 'ما يميزنا',
        items: [
          { title: 'خبرة 30+ سنة', desc: 'ثلاثة عقود من التميز في تجارة الخضار والفواكه على المستوى العالمي' },
          { title: 'جودة عالية', desc: 'معايير صارمة في اختيار وفحص جميع المنتجات قبل التوزيع' },
          { title: 'شبكة عالمية', desc: 'شراكات قوية مع موردين في أوروبا وأمريكا الجنوبية وآسيا' },
          { title: 'حضور في الخليج', desc: 'نقاط توزيع استراتيجية في الإمارات والسعودية ودول الخليج' },
          { title: 'سلسلة توريد متكاملة', desc: 'من المزرعة إلى طاولتك - نظام لوجستي متطور وفعال' },
          { title: 'منشآت تبريد حديثة', desc: 'مخازن تبريد وتخمير متطورة تضمن الحفاظ على النضارة' }
        ]
      },
      services: {
        title: 'خدماتنا',
        subtitle: 'حلول متكاملة لسلسلة توريد المنتجات الطازجة',
        items: [
          { title: 'استيراد وتصدير', desc: 'توريد عالمي وتوزيع للمنتجات الطازجة الفاخرة عبر القارات' },
          { title: 'التوزيع', desc: 'شبكة توصيل فعّالة تغطي الفنادق والمطاعم ومحلات التجزئة' },
          { title: 'التخزين البارد', desc: 'مرافق تبريد متطورة تحافظ على جودة ونضارة المنتجات' },
          { title: 'توريد الفنادق والمطاعم', desc: 'خدمة متخصصة لقطاع الضيافة بمنتجات فاخرة' }
        ]
      },
      partners: {
        title: 'شركاتنا',
        subtitle: 'وحدات أعمال متكاملة تقدم التميز',
        items: [
          { name: 'ريفان دبي', desc: 'الشركة التجارية الرئيسية في دبي المتخصصة في تجارة الفواكه والخضروات الدولية' },
          { name: 'المنسي للتوزيع', desc: 'ذراع التوزيع الذي يضمن التوصيل الفعّال للعملاء في جميع أنحاء المنطقة' },
          { name: 'إم سي أو', desc: 'منشأة تخزين بارد وحفظ وتخمير الموز بتقنية متقدمة' }
        ]
      },
      facility: {
        title: 'منشآتنا المتطورة',
        p1: 'نمتلك مخازن تبريد حديثة ومرافق تخمير موز متخصصة، تضمن الحفاظ على جودة المنتجات من لحظة الاستيراد حتى التسليم النهائي.',
        p2: 'تقنيات التبريد المتقدمة لدينا تحافظ على النضارة والقيمة الغذائية، بينما تضمن عمليات التخمير المُتقنة نضوج الموز بشكل مثالي قبل وصوله للأسواق.'
      },
      global: {
        title: 'انتشارنا العالمي',
        subtitle: 'شبكة واسعة تربط أفضل المزارع حول العالم بأسواق الشرق الأوسط',
        countries: [
          { flag: '🇸🇾', country: 'سوريا', role: 'المقر الرئيسي' },
          { flag: '🇦🇪', country: 'الإمارات', role: 'مركز التوزيع' },
          { flag: '🇪🇬', country: 'مصر', role: 'شريك استراتيجي' },
          { flag: '🇬🇷', country: 'اليونان', role: 'مصدر رئيسي' },
          { flag: '🇨🇱', country: 'تشيلي', role: 'استيراد الفواكه' }
        ]
      },
      timeline: {
        title: 'رحلتنا عبر الزمن',
        milestones: [
          { year: '1994', title: 'البداية', desc: 'تأسيس الشركة في دمشق' },
          { year: '2000', title: 'التوسع', desc: 'بناء شبكة الموردين العالمية' },
          { year: '2010', title: 'الأسواق العالمية', desc: 'دخول أسواق الخليج' },
          { year: '2020', title: 'التحديات', desc: 'التكيف مع الظروف العالمية' },
          { year: '2024', title: 'العودة القوية', desc: 'توسع جديد ورؤية مستقبلية' }
        ]
      },
      vision: {
        title: 'رؤيتنا المستقبلية',
        p1: 'نسعى لبناء منظومة توريد عالمية متكاملة تربط أفضل المزارع حول العالم بالأسواق الإقليمية',
        p2: 'نؤمن بأن الجودة ليست خيارًا، بل هي التزام نعيشه في كل خطوة من خطوات سلسلة التوريد، من اختيار المزارع إلى لحظة وصول المنتج للعميل.'
      },
      cta: {
        title: 'لنبدأ شراكة ناجحة',
        subtitle: 'انضم إلى شبكة عملائنا حول العالم واستمتع بأجود المنتجات الطازجة',
        btn: 'تواصل الآن'
      },
      footer: {
        brand: 'مجموعة أيمن المنسي',
        tagline: 'رواد تجارة الخضار والفواكه منذ 1994',
        quickLinks: 'روابط سريعة',
        links: ['من نحن', 'خدماتنا', 'منتجاتنا', 'اتصل بنا'],
        services: 'خدماتنا',
        servicesItems: ['استيراد وتصدير', 'التخزين والتبريد', 'التوزيع', 'تخمير الموز'],
        contactTitle: 'تواصل معنا',
        location: 'دبي، الإمارات العربية المتحدة',
        copyright: '© 2024 مجموعة أيمن المنسي التجارية. جميع الحقوق محفوظة.'
      }
    }
  };

  const t = content[language];

  const iconColor = '#E53935'; // Red color for all icons

  return (
    <div className="size-full overflow-y-auto" dir={isRTL ? 'rtl' : 'ltr'} style={{ fontFamily: "'Tajawal', sans-serif" }}>
      {/* Sticky Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="https://dashmarketing.us/ayman_al-mansi.png"
                alt="Ayman Al-Mansi Logo"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.nav.home}</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.nav.about}</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.nav.services}</a>
              <a href="#partners" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.nav.partners}</a>
              <a href="#facilities" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.nav.facilities}</a>
              <a href="#global" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.nav.presence}</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.nav.contact}</a>
            </nav>

            {/* CTA & Language Switcher */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
                    language === 'en' ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('ar')}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
                    language === 'ar' ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  AR
                </button>
              </div>

              {/* CTA Button */}
              <button className="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold">
                {t.nav.cta}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-100 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.nav.home}</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.nav.about}</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.nav.services}</a>
              <a href="#partners" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.nav.partners}</a>
              <a href="#facilities" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.nav.facilities}</a>
              <a href="#global" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.nav.presence}</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.nav.contact}</a>
              <button className="w-full mt-4 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-xl transition-all duration-300 font-semibold">
                {t.nav.cta}
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-orange-50">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1731307621688-fbb10c6b8590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmcmVzaCUyMGZydWl0cyUyMHZlZ2V0YWJsZXMlMjB3YXRlciUyMGRyb3BsZXRzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc2NzU5MTU5fDA&ixlib=rb-4.1.0&q=80&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-emerald-400/20 via-transparent to-orange-400/20 z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center py-12">
          <div className="mb-6 md:mb-8 inline-block">
            <h2 className="text-emerald-600 mb-2 text-lg md:text-xl lg:text-2xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
              {t.hero.brand}
            </h2>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-full mx-auto" />
          </div>

          <h1
            className="text-gray-900 mb-4 md:mb-6 leading-tight text-3xl md:text-5xl lg:text-7xl"
            style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 800 }}
          >
            {t.hero.title}
          </h1>

          <p className="text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed text-base md:text-xl lg:text-2xl px-4">
            {t.hero.subtitle}
          </p>

          <p className="text-emerald-700 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed text-sm md:text-lg lg:text-xl px-4" style={{ fontWeight: 500 }}>
            {t.hero.tagline}
          </p>

          <div className="flex gap-4 md:gap-6 justify-center flex-wrap px-4">
            <button className="px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm md:text-lg lg:text-xl" style={{ fontWeight: 600 }}>
              {t.hero.discoverBtn}
            </button>
            <button className="px-6 md:px-10 py-3 md:py-4 bg-white text-emerald-600 border-2 border-emerald-500 rounded-full hover:bg-emerald-50 hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm md:text-lg lg:text-xl" style={{ fontWeight: 600 }}>
              {t.hero.contactBtn}
            </button>
          </div>

          {/* Floating Fruit Elements */}
          <div className="hidden md:block absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 blur-2xl animate-pulse" />
          <div className="hidden md:block absolute bottom-32 right-32 w-32 h-32 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="hidden md:block absolute top-1/2 right-20 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className={`order-2 ${isRTL ? 'md:order-1' : 'md:order-1'}`}>
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1739193982768-134dc32d2214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3b3JrZXJzJTIwc29ydGluZyUyMHZlZ2V0YWJsZXMlMjBmcmVzaCUyMHByb2R1Y2UlMjBtYXJrZXR8ZW58MXx8fHwxNzc2OTMwNjc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Fresh Produce Market"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
              </div>
            </div>

            <div className={`order-1 ${isRTL ? 'md:order-2' : 'md:order-2'}`}>
              <h3 className="text-emerald-600 mb-3 md:mb-4 text-base md:text-lg lg:text-xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
                {t.about.label}
              </h3>
              <h2 className="text-gray-900 mb-4 md:mb-6 leading-tight text-2xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
                {t.about.title}
              </h2>
              <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
                <p className="text-emerald-700" style={{ fontWeight: 600 }}>
                  {t.about.p4}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - ما يميزنا */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-gray-900 mb-4 text-2xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
              {t.features.title}
            </h2>
            <div className="h-1.5 w-20 md:w-24 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <Award className="w-12 h-12" />, ...t.features.items[0] },
              { icon: <Target className="w-12 h-12" />, ...t.features.items[1] },
              { icon: <Globe className="w-12 h-12" />, ...t.features.items[2] },
              { icon: <MapPin className="w-12 h-12" />, ...t.features.items[3] },
              { icon: <TrendingUp className="w-12 h-12" />, ...t.features.items[4] },
              { icon: <Warehouse className="w-12 h-12" />, ...t.features.items[5] }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl text-white mb-4 md:mb-6 shadow-lg" style={{ backgroundColor: iconColor }}>
                  {feature.icon}
                </div>
                <h3 className="text-gray-900 mb-2 md:mb-3 text-lg md:text-xl lg:text-2xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-gray-900 mb-4 text-2xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
              {t.services.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg px-4">
              {t.services.subtitle}
            </p>
            <div className="h-1.5 w-20 md:w-24 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {[
              { icon: <Truck className="w-14 h-14" />, img: 'https://images.unsplash.com/photo-1644134913822-1cd030b3d148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800', ...t.services.items[0] },
              { icon: <Package className="w-14 h-14" />, img: 'https://images.unsplash.com/photo-1775973990507-98fe582888ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800', ...t.services.items[1] },
              { icon: <Thermometer className="w-14 h-14" />, img: 'https://images.unsplash.com/photo-1769701164670-e819d92cc602?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800', ...t.services.items[2] },
              { icon: <Building2 className="w-14 h-14" />, img: 'https://images.unsplash.com/photo-1775797081003-d0b384df95c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800', ...t.services.items[3] }
            ].map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white" style={{ backgroundColor: iconColor, padding: '12px', borderRadius: '16px' }}>
                    {service.icon}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-gray-900 mb-3 text-xl md:text-2xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-gray-900 mb-4 text-2xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
              {t.partners.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg px-4">
              {t.partners.subtitle}
            </p>
            <div className="h-1.5 w-20 md:w-24 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {t.partners.items.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100 text-center"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: iconColor }}>
                  <Building2 className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
                <h3 className="text-gray-900 mb-4 text-xl md:text-2xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
                  {partner.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section id="facilities" className="relative py-16 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1601600659891-b63ffda67f74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/95 via-emerald-500/90 to-teal-500/95" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center text-white">
          <Warehouse className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-6 md:mb-8 opacity-90" />
          <h2 className="mb-4 md:mb-6 leading-tight text-2xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
            {t.facility.title}
          </h2>
          <p className="mb-6 md:mb-8 leading-relaxed opacity-95 text-base md:text-xl lg:text-2xl">
            {t.facility.p1}
          </p>
          <p className="leading-relaxed opacity-90 text-sm md:text-base lg:text-lg">
            {t.facility.p2}
          </p>
        </div>
      </section>

      {/* Global Presence */}
      <section id="global" className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-gray-900 mb-4 text-2xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
              {t.global.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg px-4">
              {t.global.subtitle}
            </p>
            <div className="h-1.5 w-20 md:w-24 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-full mx-auto mt-4" />
          </div>

          {/* Real World Map */}
          <div className="mb-10 md:mb-14">
            <WorldMap isRTL={isRTL} language={language} />
          </div>

          {/* Country Cards below map */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {t.global.countries.map((item, idx) => (
              <div key={idx} className="text-center p-4 md:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                <div className="text-3xl md:text-5xl mb-2 md:mb-3">{item.flag}</div>
                <h4 className="text-gray-900 mb-1 text-base md:text-lg lg:text-xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
                  {item.country}
                </h4>
                <p className="text-xs md:text-sm" style={{ color: iconColor, fontWeight: 600 }}>{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-gray-900 mb-4 text-2xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
              {t.timeline.title}
            </h2>
            <div className="h-1.5 w-20 md:w-24 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-full mx-auto" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 right-0 left-0 h-1 transform -translate-y-1/2 hidden lg:block" style={{ background: `linear-gradient(${isRTL ? 'to left' : 'to right'}, #FFA726, #66BB6A, #26A69A)` }} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 relative">
              {[
                { icon: <Calendar className="w-8 h-8" />, ...t.timeline.milestones[0] },
                { icon: <Globe className="w-8 h-8" />, ...t.timeline.milestones[1] },
                { icon: <TrendingUp className="w-8 h-8" />, ...t.timeline.milestones[2] },
                { icon: <Target className="w-8 h-8" />, ...t.timeline.milestones[3] },
                { icon: <Award className="w-8 h-8" />, ...t.timeline.milestones[4] }
              ].map((milestone, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-emerald-100">
                    <div className="flex justify-center mb-3 md:mb-4">
                      <div className="p-3 md:p-4 text-white rounded-full shadow-lg" style={{ backgroundColor: iconColor }}>
                        {milestone.icon}
                      </div>
                    </div>
                    <div className="mb-2 text-xl md:text-2xl" style={{ color: iconColor, fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
                      {milestone.year}
                    </div>
                    <h4 className="text-gray-900 mb-2 text-base md:text-lg" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                  {/* Timeline node */}
                  <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg hidden lg:block z-10" style={{ backgroundColor: iconColor }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="mb-6 md:mb-8">
            <div className="inline-flex p-4 md:p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full shadow-2xl mb-6 md:mb-8">
              <Leaf className="w-10 h-10 md:w-16 md:h-16" />
            </div>
          </div>
          <h2 className="text-gray-900 mb-6 md:mb-8 leading-tight text-2xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
            {t.vision.title}
          </h2>
          <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-base md:text-xl lg:text-2xl">
            {t.vision.p1}
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
            {t.vision.p2}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-600 to-orange-500" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center text-white">
          <Users className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-6 md:mb-8" />
          <h2 className="mb-4 md:mb-6 leading-tight text-2xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
            {t.cta.title}
          </h2>
          <p className="mb-8 md:mb-12 opacity-95 leading-relaxed text-base md:text-xl lg:text-2xl px-4">
            {t.cta.subtitle}
          </p>
          <button className="px-8 md:px-12 py-4 md:py-5 bg-white rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 text-lg md:text-xl lg:text-2xl" style={{ color: iconColor, fontWeight: 700, fontFamily: "'Cairo', sans-serif" }}>
            {t.cta.btn}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <h3 className="mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
                {t.footer.brand}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {t.footer.tagline}
              </p>
            </div>
            <div>
              <h4 className="mb-3 md:mb-4 text-base md:text-lg" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                {t.footer.links.map((link, idx) => (
                  <li key={idx} className="hover:text-emerald-400 cursor-pointer transition-colors">{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 md:mb-4 text-base md:text-lg" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
                {t.footer.services}
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                {t.footer.servicesItems.map((service, idx) => (
                  <li key={idx} className="hover:text-emerald-400 cursor-pointer transition-colors">{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 md:mb-4 text-base md:text-lg" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
                {t.footer.contactTitle}
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>{t.footer.location}</li>
                <li>info@almansi-group.com</li>
                <li dir="ltr">+971 XX XXX XXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-gray-400 text-xs md:text-sm">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}