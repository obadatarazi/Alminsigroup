import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  Send,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ContactMap } from "./ContactMap";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  message: string;
};

const content = {
  en: {
    hero: {
      label: "Get In Touch",
      title: "Contact Us",
      subtitle:
        "We'd love to hear from you. Reach out for inquiries, partnerships, or any questions about our fresh produce services.",
    },
    info: {
      title: "Contact Information",
      address: {
        label: "Our Location",
        value: "Dubai, United Arab Emirates",
        sub: "Serving the Gulf region & beyond",
      },
      phone: {
        label: "Phone Number",
        value: "+971 XX XXX XXXX",
        sub: "Sunday – Thursday, 8am – 6pm",
      },
      email: {
        label: "Email Address",
        value: "info@almansi-group.com",
        sub: "We reply within 24 hours",
      },
      whatsapp: {
        label: "WhatsApp",
        value: "Chat with us directly",
        sub: "Quick responses guaranteed",
      },
    },
    map: {
      title: "Find Us",
      subtitle: "Our main office is located in Dubai, UAE",
    },
    form: {
      title: "Send Us a Message",
      subtitle: "Fill in the form below and we'll get back to you as soon as possible.",
      fullName: "Full Name",
      fullNamePlaceholder: "John Doe",
      email: "Email Address",
      emailPlaceholder: "john@company.com",
      phone: "Phone Number",
      phonePlaceholder: "+971 XX XXX XXXX",
      company: "Company Name",
      companyPlaceholder: "Your Company (Optional)",
      message: "Message",
      messagePlaceholder: "Tell us about your inquiry or how we can help you...",
      submit: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successMsg:
        "Thank you for contacting us. Our team will get back to you within 24 hours.",
      errors: {
        fullNameRequired: "Full name is required",
        emailRequired: "Email is required",
        emailInvalid: "Invalid email address",
        phoneRequired: "Phone number is required",
        messageRequired: "Message is required",
        messageTooShort: "Message must be at least 10 characters",
      },
    },
  },
  ar: {
    hero: {
      label: "تواصل معنا",
      title: "اتصل بنا",
      subtitle:
        "يسعدنا سماع منك. تواصل معنا للاستفسارات والشراكات وأي أسئلة حول خدماتنا للمنتجات الطازجة.",
    },
    info: {
      title: "معلومات التواصل",
      address: {
        label: "موقعنا",
        value: "دبي، الإمارات العربية المتحدة",
        sub: "نخدم منطقة الخليج وما بعدها",
      },
      phone: {
        label: "رقم الهاتف",
        value: "+971 XX XXX XXXX",
        sub: "الأحد – الخميس، 8 صباحاً – 6 مساءً",
      },
      email: {
        label: "البريد الإلكتروني",
        value: "info@almansi-group.com",
        sub: "نرد خلال 24 ساعة",
      },
      whatsapp: {
        label: "واتساب",
        value: "تحدث معنا مباشرة",
        sub: "ردود سريعة مضمونة",
      },
    },
    map: {
      title: "موقعنا",
      subtitle: "مكتبنا الرئيسي يقع في دبي، الإمارات العربية المتحدة",
    },
    form: {
      title: "أرسل لنا رسالة",
      subtitle: "املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن.",
      fullName: "الاسم الكامل",
      fullNamePlaceholder: "أحمد محمد",
      email: "البريد الإلكتروني",
      emailPlaceholder: "ahmed@company.com",
      phone: "رقم الهاتف",
      phonePlaceholder: "+971 XX XXX XXXX",
      company: "اسم الشركة",
      companyPlaceholder: "شركتك (اختياري)",
      message: "الرسالة",
      messagePlaceholder: "أخبرنا عن استفسارك أو كيف يمكننا مساعدتك...",
      submit: "إرسال الرسالة",
      sending: "جارٍ الإرسال...",
      successTitle: "تم إرسال الرسالة!",
      successMsg: "شكراً لتواصلك معنا. سيرد فريقنا عليك خلال 24 ساعة.",
      errors: {
        fullNameRequired: "الاسم الكامل مطلوب",
        emailRequired: "البريد الإلكتروني مطلوب",
        emailInvalid: "عنوان البريد الإلكتروني غير صالح",
        phoneRequired: "رقم الهاتف مطلوب",
        messageRequired: "الرسالة مطلوبة",
        messageTooShort: "يجب أن تكون الرسالة 10 أحرف على الأقل",
      },
    },
  },
};

const iconColor = "#E74C3C";

export function ContactPage() {
  const { language, isRTL } = useLanguage();
  const t = content[language];
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
  };

  const contactInfoItems = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: t.info.address.label,
      value: t.info.address.value,
      sub: t.info.address.sub,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: t.info.phone.label,
      value: t.info.phone.value,
      sub: t.info.phone.sub,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: t.info.email.label,
      value: t.info.email.value,
      sub: t.info.email.sub,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      label: t.info.whatsapp.label,
      value: t.info.whatsapp.value,
      sub: t.info.whatsapp.sub,
    },
  ];

  const inputClass =
    "w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 bg-white text-sm";
  const errorInputClass =
    "w-full px-4 py-3 border-2 border-red-300 rounded-lg text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 bg-white text-sm";
  const labelClass =
    "block text-gray-700 mb-1.5 text-sm";

  return (
    <div style={{ fontFamily: "'Tajawal', sans-serif" }}>
      {/* ── Hero Section ── */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50 overflow-hidden">
        {/* Background decoration */}
        <div
          className="absolute inset-0 z-0 opacity-[0.07]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1587314168485-3236d6710814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-white/85 z-[1]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
          <span
            className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs mb-4"
            style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
          >
            {t.hero.label}
          </span>
          <h1
            className="text-gray-900 mb-4 leading-tight text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 800 }}
          >
            {t.hero.title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            {t.hero.subtitle}
          </p>
          <div className="h-1 w-16 bg-emerald-600 rounded-full mt-6 mx-auto" />
        </div>
      </section>

      {/* ── Contact Information Cards ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2
              className="text-gray-900 text-2xl md:text-3xl mb-3"
              style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
            >
              {t.info.title}
            </h2>
            <div className="h-1 w-16 bg-emerald-600 rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {contactInfoItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-emerald-200 hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group"
              >
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 text-white transition-transform duration-200 group-hover:scale-110"
                  style={{ backgroundColor: iconColor }}
                >
                  {item.icon}
                </div>
                {/* Label */}
                <p
                  className="text-xs mb-1"
                  style={{ color: iconColor, fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                >
                  {item.label}
                </p>
                {/* Value */}
                <h4
                  className="text-gray-900 mb-1 text-sm md:text-base leading-snug"
                  style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                >
                  {item.value}
                </h4>
                {/* Sub */}
                <p className="text-gray-500 text-xs leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map + Form Section ── */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start">

            {/* Left: Map */}
            <div className={isRTL ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
              <div className="mb-6">
                <h2
                  className="text-gray-900 text-xl md:text-2xl mb-2"
                  style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                >
                  {t.map.title}
                </h2>
                <p className="text-gray-500 text-sm">{t.map.subtitle}</p>
                <div className="h-1 w-12 bg-emerald-600 rounded-full mt-3" />
              </div>
              <ContactMap language={language} />

              {/* Info card below map */}
              <div className="mt-4 p-4 bg-white border-2 border-gray-200 rounded-xl flex items-center gap-3">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: "#2ECC71" }}
                >
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p
                    className="text-gray-900 text-sm"
                    style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                  >
                    {language === "en"
                      ? "Ayman Al-Mansi Trading Group"
                      : "مجموعة أيمن المنسي التجارية"}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {language === "en"
                      ? "Dubai, United Arab Emirates"
                      : "دبي، الإمارات العربية المتحدة"}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className={isRTL ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
              <div className="mb-6">
                <h2
                  className="text-gray-900 text-xl md:text-2xl mb-2"
                  style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                >
                  {t.form.title}
                </h2>
                <p className="text-gray-500 text-sm">{t.form.subtitle}</p>
                <div className="h-1 w-12 bg-emerald-600 rounded-full mt-3" />
              </div>

              {submitted ? (
                /* Success State */
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="w-16 h-16 text-emerald-600" />
                  </div>
                  <h3
                    className="text-gray-900 mb-3 text-xl"
                    style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                  >
                    {t.form.successTitle}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {t.form.successMsg}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 text-sm"
                    style={{ fontWeight: 700 }}
                  >
                    {language === "en" ? "Send Another Message" : "إرسال رسالة أخرى"}
                  </button>
                </div>
              ) : (
                /* Form */
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white rounded-xl border-2 border-gray-200 p-6 md:p-8 shadow-sm space-y-5"
                  noValidate
                >
                  {/* Full Name */}
                  <div>
                    <label className={labelClass} style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
                      {t.form.fullName}
                      <span className="text-red-500 ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t.form.fullNamePlaceholder}
                      className={errors.fullName ? errorInputClass : inputClass}
                      style={{ fontFamily: "'Tajawal', sans-serif" }}
                      {...register("fullName", {
                        required: t.form.errors.fullNameRequired,
                      })}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email + Phone in 2 cols */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className={labelClass} style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
                        {t.form.email}
                        <span className="text-red-500 ms-1">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder={t.form.emailPlaceholder}
                        className={errors.email ? errorInputClass : inputClass}
                        style={{ fontFamily: "'Tajawal', sans-serif" }}
                        {...register("email", {
                          required: t.form.errors.emailRequired,
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: t.form.errors.emailInvalid,
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className={labelClass} style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
                        {t.form.phone}
                        <span className="text-red-500 ms-1">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder={t.form.phonePlaceholder}
                        dir="ltr"
                        className={errors.phone ? errorInputClass : inputClass}
                        style={{ fontFamily: "'Tajawal', sans-serif" }}
                        {...register("phone", {
                          required: t.form.errors.phoneRequired,
                        })}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company Name (optional) */}
                  <div>
                    <label className={labelClass} style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
                      {t.form.company}
                    </label>
                    <input
                      type="text"
                      placeholder={t.form.companyPlaceholder}
                      className={inputClass}
                      style={{ fontFamily: "'Tajawal', sans-serif" }}
                      {...register("companyName")}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className={labelClass} style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
                      {t.form.message}
                      <span className="text-red-500 ms-1">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder={t.form.messagePlaceholder}
                      className={`${errors.message ? errorInputClass : inputClass} resize-none`}
                      style={{ fontFamily: "'Tajawal', sans-serif" }}
                      {...register("message", {
                        required: t.form.errors.messageRequired,
                        minLength: {
                          value: 10,
                          message: t.form.errors.messageTooShort,
                        },
                      })}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
                    style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        {t.form.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t.form.submit}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Banner ── */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center text-white">
          <MessageSquare className="w-12 h-12 mx-auto mb-5 opacity-90" />
          <h2
            className="mb-4 leading-tight text-2xl md:text-3xl"
            style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
          >
            {language === "en"
              ? "Prefer a Direct Conversation?"
              : "تفضل محادثة مباشرة؟"}
          </h2>
          <p className="mb-8 opacity-90 leading-relaxed text-sm md:text-base px-4">
            {language === "en"
              ? "Chat with us on WhatsApp for quick responses and real-time assistance."
              : "تحدث معنا على واتساب للحصول على ردود سريعة ومساعدة فورية."}
          </p>
          <a
            href="https://wa.me/971XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm shadow-sm"
            style={{
              color: "#25D366",
              fontWeight: 700,
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#25D366"
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {language === "en" ? "Chat on WhatsApp" : "تحدث عبر واتساب"}
          </a>
        </div>
      </section>
    </div>
  );
}
