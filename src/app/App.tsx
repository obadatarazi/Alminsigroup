import { Leaf, Globe, TrendingUp, Warehouse, Award, Users, MapPin, Calendar, Target } from 'lucide-react';

export default function App() {
  return (
    <div className="size-full overflow-y-auto" dir="rtl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-orange-50">
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
              مجموعة أيمن المنسي التجارية
            </h2>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-full mx-auto" />
          </div>

          <h1
            className="text-gray-900 mb-4 md:mb-6 leading-tight text-3xl md:text-5xl lg:text-7xl"
            style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 800 }}
          >
            نربط العالم بمنتجات طازجة
          </h1>

          <p className="text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed text-base md:text-xl lg:text-2xl px-4">
            أكثر من 30 عامًا من الخبرة في استيراد وتوزيع أجود أنواع الخضار والفواكه حول العالم
          </p>

          <p className="text-emerald-700 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed text-sm md:text-lg lg:text-xl px-4" style={{ fontWeight: 500 }}>
            نربط الأسواق العالمية بمنتجات طازجة بمعايير جودة لا تُساوَم
          </p>

          <div className="flex gap-4 md:gap-6 justify-center flex-wrap px-4">
            <button className="px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm md:text-lg lg:text-xl" style={{ fontWeight: 600 }}>
              اكتشف خدماتنا
            </button>
            <button className="px-6 md:px-10 py-3 md:py-4 bg-white text-emerald-600 border-2 border-emerald-500 rounded-full hover:bg-emerald-50 hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm md:text-lg lg:text-xl" style={{ fontWeight: 600 }}>
              تواصل معنا
            </button>
          </div>

          {/* Floating Fruit Elements */}
          <div className="hidden md:block absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 blur-2xl animate-pulse" />
          <div className="hidden md:block absolute bottom-32 right-32 w-32 h-32 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="hidden md:block absolute top-1/2 right-20 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1720794009949-035de161db6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwaGFydmVzdCUyMGFncmljdWx0dXJlJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NzY3NTkxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fresh Produce"
                className="rounded-2xl md:rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full"
              />
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-emerald-600 mb-3 md:mb-4 text-base md:text-lg lg:text-xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
                من نحن
              </h3>
              <h2 className="text-gray-900 mb-4 md:mb-6 leading-tight text-2xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
                قصة نجاح تمتد لثلاثة عقود
              </h2>
              <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                <p>
                  تأسست مجموعة أيمن المنسي التجارية في عام 1994 في دمشق، سوريا، وسرعان ما بنت سمعة قوية كمورد موثوق للفنادق والمطاعم ومحلات السوبر ماركت الكبرى.
                </p>
                <p>
                  كنا أول من أدخل فاكهة الكيوي إلى السوق السوري، مما عزز مكانتنا كرواد في تقديم منتجات طازجة ومبتكرة.
                </p>
                <p>
                  على مر السنين، قمنا ببناء شبكة استيراد عالمية تمتد عبر عدة قارات، لضمان توريد أجود أنواع الفواكه والخضروات طوال العام.
                </p>
                <p className="text-emerald-700" style={{ fontWeight: 600 }}>
                  اليوم، نواصل مسيرتنا بنفس الشغف والالتزام بالجودة التي بدأنا بها، مع رؤية واضحة نحو المستقبل.
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
              ما يميزنا
            </h2>
            <div className="h-1.5 w-20 md:w-24 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: 'خبرة 30+ سنة',
                desc: 'ثلاثة عقود من التميز في تجارة الخضار والفواكه على المستوى العالمي',
                color: 'from-emerald-500 to-emerald-600'
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: 'جودة عالية',
                desc: 'معايير صارمة في اختيار وفحص جميع المنتجات قبل التوزيع',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: 'شبكة عالمية',
                desc: 'شراكات قوية مع موردين في أوروبا وأمريكا الجنوبية وآسيا',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <MapPin className="w-12 h-12" />,
                title: 'حضور في الخليج',
                desc: 'نقاط توزيع استراتيجية في الإمارات والسعودية ودول الخليج',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'سلسلة توريد متكاملة',
                desc: 'من المزرعة إلى طاولتك - نظام لوجستي متطور وفعال',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: <Warehouse className="w-12 h-12" />,
                title: 'منشآت تبريد حديثة',
                desc: 'مخازن تبريد وتخمير متطورة تضمن الحفاظ على النضارة',
                color: 'from-teal-500 to-emerald-500'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-4 md:mb-6 shadow-lg`}>
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

      {/* Facility Section */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1769701164670-e819d92cc602?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwc3RvcmFnZSUyMHdhcmVob3VzZSUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3NzY3NTkxNTl8MA&ixlib=rb-4.1.0&q=80&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/95 via-emerald-500/90 to-teal-500/95" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center text-white">
          <Warehouse className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-6 md:mb-8 opacity-90" />
          <h2 className="mb-4 md:mb-6 leading-tight text-2xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
            منشآتنا المتطورة
          </h2>
          <p className="mb-6 md:mb-8 leading-relaxed opacity-95 text-base md:text-xl lg:text-2xl">
            نمتلك مخازن تبريد حديثة ومرافق تخمير موز متخصصة، تضمن الحفاظ على جودة المنتجات من لحظة الاستيراد حتى التسليم النهائي.
          </p>
          <p className="leading-relaxed opacity-90 text-sm md:text-base lg:text-lg">
            تقنيات التبريد المتقدمة لدينا تحافظ على النضارة والقيمة الغذائية، بينما تضمن عمليات التخمير المُتقنة نضوج الموز بشكل مثالي قبل وصوله للأسواق.
          </p>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-gray-900 mb-4 text-2xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
              انتشارنا العالمي
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg px-4">
              شبكة واسعة تربط أفضل المزارع حول العالم بأسواق الشرق الأوسط
            </p>
          </div>

          <div className="relative py-8 md:py-16">
            {/* Simplified world map representation */}
            <div className="relative w-full h-80 md:h-[500px] bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-emerald-100 flex items-center justify-center">

              {/* Decorative world globe illustration - centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="w-48 h-48 md:w-80 md:h-80 text-emerald-200/40" strokeWidth={0.5} />
              </div>

              {/* Map pins for key locations - positioned around the globe */}
              {[
                { name: 'اليونان', left: '48%', top: '22%', color: 'bg-blue-500', size: 'w-6 h-6 md:w-8 md:h-8' },
                { name: 'سوريا', left: '58%', top: '28%', color: 'bg-red-500', size: 'w-6 h-6 md:w-8 md:h-8' },
                { name: 'مصر', left: '54%', top: '38%', color: 'bg-orange-500', size: 'w-6 h-6 md:w-8 md:h-8' },
                { name: 'الإمارات', left: '62%', top: '40%', color: 'bg-emerald-500', size: 'w-6 h-6 md:w-8 md:h-8' },
                { name: 'تشيلي', left: '28%', top: '72%', color: 'bg-purple-500', size: 'w-6 h-6 md:w-8 md:h-8' },
              ].map((location, idx) => (
                <div
                  key={idx}
                  className="absolute group cursor-pointer z-10"
                  style={{ left: location.left, top: location.top }}
                >
                  {/* Pin with pulse effect */}
                  <div className="relative flex items-center justify-center">
                    <div className={`${location.size} ${location.color} rounded-full shadow-2xl border-4 border-white animate-pulse hover:scale-125 transition-all duration-300`} />
                    {/* Outer ring animation */}
                    <div className={`absolute ${location.size} ${location.color} rounded-full opacity-30 animate-ping`} />
                  </div>

                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm md:text-base whitespace-nowrap shadow-xl z-20">
                    {location.name}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-3 h-3 bg-gray-900 rotate-45" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-8 md:mt-12">
            {[
              { flag: '🇸🇾', country: 'سوريا', role: 'المقر الرئيسي' },
              { flag: '🇦🇪', country: 'الإمارات', role: 'مركز التوزيع' },
              { flag: '🇪🇬', country: 'مصر', role: 'شريك استراتيجي' },
              { flag: '🇬🇷', country: 'اليونان', role: 'مصدر رئيسي' },
              { flag: '🇨🇱', country: 'تشيلي', role: 'استيراد الفواكه' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-4 md:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all">
                <div className="text-3xl md:text-5xl mb-2 md:mb-3">{item.flag}</div>
                <h4 className="text-gray-900 mb-1 text-base md:text-lg lg:text-xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
                  {item.country}
                </h4>
                <p className="text-emerald-600 text-xs md:text-sm">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - رحلتنا */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-gray-900 mb-4 text-2xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
              رحلتنا عبر الزمن
            </h2>
            <div className="h-1.5 w-20 md:w-24 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-full mx-auto" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 right-0 left-0 h-1 bg-gradient-to-l from-emerald-200 via-emerald-400 to-orange-400 transform -translate-y-1/2 hidden lg:block" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 relative">
              {[
                { year: '1994', title: 'البداية', desc: 'تأسيس الشركة في دمشق', icon: <Calendar className="w-8 h-8" /> },
                { year: '2000', title: 'التوسع', desc: 'بناء شبكة الموردين العالمية', icon: <Globe className="w-8 h-8" /> },
                { year: '2010', title: 'الأسواق العالمية', desc: 'دخول أسواق الخليج', icon: <TrendingUp className="w-8 h-8" /> },
                { year: '2020', title: 'التحديات', desc: 'التكيف مع الظروف العالمية', icon: <Target className="w-8 h-8" /> },
                { year: '2024', title: 'العودة القوية', desc: 'توسع جديد ورؤية مستقبلية', icon: <Award className="w-8 h-8" /> },
              ].map((milestone, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-emerald-100">
                    <div className="flex justify-center mb-3 md:mb-4">
                      <div className="p-3 md:p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full shadow-lg">
                        {milestone.icon}
                      </div>
                    </div>
                    <div className="text-emerald-600 mb-2 text-xl md:text-2xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
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
                  <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg hidden lg:block z-10" />
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
            رؤيتنا المستقبلية
          </h2>
          <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-base md:text-xl lg:text-2xl">
            نسعى لبناء منظومة توريد عالمية متكاملة تربط أفضل المزارع حول العالم بالأسواق الإقليمية
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
            نؤمن بأن الجودة ليست خيارًا، بل هي التزام نعيشه في كل خطوة من خطوات سلسلة التوريد، من اختيار المزارع إلى لحظة وصول المنتج للعميل.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-600 to-orange-500" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center text-white">
          <Users className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-6 md:mb-8" />
          <h2 className="mb-4 md:mb-6 leading-tight text-2xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
            لنبدأ شراكة ناجحة
          </h2>
          <p className="mb-8 md:mb-12 opacity-95 leading-relaxed text-base md:text-xl lg:text-2xl px-4">
            انضم إلى شبكة عملائنا حول العالم واستمتع بأجود المنتجات الطازجة
          </p>
          <button className="px-8 md:px-12 py-4 md:py-5 bg-white text-emerald-600 rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 text-lg md:text-xl lg:text-2xl" style={{ fontWeight: 700, fontFamily: "'Cairo', sans-serif" }}>
            تواصل الآن
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <h3 className="mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>
                مجموعة أيمن المنسي
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                رواد تجارة الخضار والفواكه منذ 1994
              </p>
            </div>
            <div>
              <h4 className="mb-3 md:mb-4 text-base md:text-lg" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
                روابط سريعة
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">من نحن</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">خدماتنا</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">منتجاتنا</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">اتصل بنا</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 md:mb-4 text-base md:text-lg" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
                خدماتنا
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">استيراد وتصدير</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">التخزين والتبريد</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">التوزيع</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">تخمير الموز</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 md:mb-4 text-base md:text-lg" style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
                تواصل معنا
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>دبي، الإمارات العربية المتحدة</li>
                <li>info@almansi-group.com</li>
                <li dir="ltr">+971 XX XXX XXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-gray-400 text-xs md:text-sm">
            <p>© 2024 مجموعة أيمن المنسي التجارية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
