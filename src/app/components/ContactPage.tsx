import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Send,
  CheckCircle,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
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
    mapBar: {
      name: "Ayman Al-Mansi Trading Group",
      address: "Dubai, United Arab Emirates",
      phone: "+971 XX XXX XXXX",
      email: "info@almansi-group.com",
    },
    form: {
      title: "Send Us a Message",
      subtitle: "We'll get back to you within 24 hours.",
      fullName: "Full Name",
      fullNamePlaceholder: "John Doe",
      email: "Email Address",
      emailPlaceholder: "john@company.com",
      phone: "Phone Number",
      phonePlaceholder: "+971 XX XXX XXXX",
      company: "Company Name",
      companyPlaceholder: "Your Company (Optional)",
      message: "Message",
      messagePlaceholder: "How can we help you?",
      submit: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successMsg:
        "Thank you for reaching out. Our team will contact you within 24 hours.",
      sendAnother: "Send Another Message",
      errors: {
        fullNameRequired: "Full name is required",
        emailRequired: "Email is required",
        emailInvalid: "Invalid email address",
        phoneRequired: "Phone number is required",
        messageRequired: "Message is required",
        messageTooShort: "Message must be at least 10 characters",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Quick answers to common questions.",
      items: [
        {
          q: "What products do you supply?",
          a: "We supply a wide range of fresh fruits and vegetables sourced globally — including exotic fruits, tropical produce, and seasonal vegetables. Our product catalogue spans imports from Europe, South America, and Asia.",
        },
        {
          q: "Which regions do you deliver to?",
          a: "We primarily serve the UAE, Gulf countries, and the broader Middle East region. Our distribution network reaches hotels, restaurants, supermarkets, and wholesale markets across the region.",
        },
        {
          q: "How can I place a bulk order?",
          a: "You can reach out via this form, by phone, or on WhatsApp. Our sales team will get in touch to discuss your requirements, pricing, and delivery schedules.",
        },
        {
          q: "Do you offer cold storage services?",
          a: "Yes. Through our MCO division, we operate advanced cold storage and banana ripening facilities. We offer storage solutions to ensure product freshness from import to delivery.",
        },
      ],
    },
  },
  ar: {
    mapBar: {
      name: "مجموعة أيمن المنسي التجارية",
      address: "دبي، الإمارات العربية المتحدة",
      phone: "+971 XX XXX XXXX",
      email: "info@almansi-group.com",
    },
    form: {
      title: "أرسل لنا رسالة",
      subtitle: "سنتواصل معك خلال 24 ساعة.",
      fullName: "الاسم الكامل",
      fullNamePlaceholder: "أحمد محمد",
      email: "البريد الإلكتروني",
      emailPlaceholder: "ahmed@company.com",
      phone: "رقم الهاتف",
      phonePlaceholder: "+971 XX XXX XXXX",
      company: "اسم الشركة",
      companyPlaceholder: "شركتك (اختياري)",
      message: "الرسالة",
      messagePlaceholder: "كيف يمكننا مساعدتك؟",
      submit: "إرسال الرسالة",
      sending: "جارٍ الإرسال...",
      successTitle: "تم إرسال الرسالة!",
      successMsg: "شكراً لتواصلك معنا. سيتصل بك فريقنا خلال 24 ساعة.",
      sendAnother: "إرسال رسالة أخرى",
      errors: {
        fullNameRequired: "الاسم الكامل مطلوب",
        emailRequired: "البريد الإلكتروني مطلوب",
        emailInvalid: "عنوان البريد الإلكتروني غير صالح",
        phoneRequired: "رقم الهاتف مطلوب",
        messageRequired: "الرسالة مطلوبة",
        messageTooShort: "يجب أن تكون الرسالة 10 أحرف على الأقل",
      },
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات سريعة على الأسئلة الأكثر شيوعاً.",
      items: [
        {
          q: "ما هي المنتجات التي تزودون بها؟",
          a: "نوفر مجموعة واسعة من الفواكه والخضروات الطازجة المستوردة عالمياً، بما في ذلك الفواكه الاستوائية والغريبة والخضروات الموسمية. نستورد من أوروبا وأمريكا الجنوبية وآسيا.",
        },
        {
          q: "ما هي المناطق التي تُوصّلون إليها؟",
          a: "نخدم الإمارات العربية المتحدة ودول الخليج العربي والشرق الأوسط بشكل عام. تغطي شبكة توزيعنا الفنادق والمطاعم والسوبرماركت وأسواق الجملة.",
        },
        {
          q: "كيف يمكنني تقديم طلب بالجملة؟",
          a: "يمكنك التواصل معنا عبر هذا النموذج أو الهاتف أو واتساب. سيتواصل معك فريق المبيعات لمناقشة متطلباتك والأسعار وجداول التسليم.",
        },
        {
          q: "هل تقدمون خدمات التخزين البارد؟",
          a: "نعم. من خلال وحدة MCO لدينا، نشغّل منشآت تخزين بارد متطورة وغرف تخمير موز. نقدم حلول تخزين تضمن نضارة المنتجات من الاستيراد حتى التسليم.",
        },
      ],
    },
  },
};

// Accordion item component
function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-emerald-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 bg-white hover:bg-gray-50 transition-colors duration-150 text-start"
      >
        <span
          className="text-gray-900 text-sm leading-snug"
          style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
        >
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-emerald-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <p
          className="px-5 py-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50"
          style={{ fontFamily: "'Tajawal', sans-serif" }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export function ContactPage() {
  const { language, isRTL } = useLanguage();
  const t = content[language];
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
  };

  const inputClass =
    "w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 bg-white text-sm";
  const errorInputClass =
    "w-full px-4 py-3 border-2 border-red-300 rounded-lg text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 bg-white text-sm";
  const labelClass = "block text-gray-700 mb-1.5 text-sm";

  return (
    <div style={{ fontFamily: "'Tajawal', sans-serif" }}>

      {/* ── SECTION 1: Full-width Map ── */}
      <section className="relative">
        {/* Map */}
        <ContactMap language={language} />

        {/* Info strip below map */}
        <div className="bg-white border-b-2 border-gray-100">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6">
              {/* Company name */}
              <div className="flex items-center gap-2.5">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: "#2ECC71" }}
                >
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p
                    className="text-gray-900 text-sm leading-tight"
                    style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                  >
                    {t.mapBar.name}
                  </p>
                  <p className="text-gray-500 text-xs">{t.mapBar.address}</p>
                </div>
              </div>

              {/* Contact pills */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                <a
                  href={`tel:${t.mapBar.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-1.5 text-gray-600 hover:text-emerald-600 transition-colors text-xs"
                  dir="ltr"
                >
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#E74C3C" }} />
                  <span style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
                    {t.mapBar.phone}
                  </span>
                </a>
                <a
                  href={`mailto:${t.mapBar.email}`}
                  className="flex items-center gap-1.5 text-gray-600 hover:text-emerald-600 transition-colors text-xs"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#E74C3C" }} />
                  <span style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
                    {t.mapBar.email}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Form + FAQ ── */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start">

            {/* ── LEFT: Contact Form ── */}
            <div className={isRTL ? "order-2 lg:order-2" : "order-1 lg:order-1"}>
              <div className="mb-5">
                <h2
                  className="text-gray-900 text-xl md:text-2xl mb-1.5"
                  style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                >
                  {t.form.title}
                </h2>
                <p className="text-gray-500 text-sm">{t.form.subtitle}</p>
                <div className="h-0.5 w-10 bg-emerald-600 rounded-full mt-3" />
              </div>

              {submitted ? (
                /* ── Success State ── */
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto mb-4" />
                  <h3
                    className="text-gray-900 mb-2 text-lg"
                    style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                  >
                    {t.form.successTitle}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {t.form.successMsg}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 text-sm"
                    style={{ fontWeight: 700 }}
                  >
                    {t.form.sendAnother}
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-sm space-y-4"
                  noValidate
                >
                  {/* Full Name */}
                  <div>
                    <label
                      className={labelClass}
                      style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}
                    >
                      {t.form.fullName}
                      <span className="text-red-500 ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t.form.fullNamePlaceholder}
                      className={errors.fullName ? errorInputClass : inputClass}
                      {...register("fullName", { required: t.form.errors.fullNameRequired })}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className={labelClass}
                        style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}
                      >
                        {t.form.email}
                        <span className="text-red-500 ms-1">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder={t.form.emailPlaceholder}
                        className={errors.email ? errorInputClass : inputClass}
                        {...register("email", {
                          required: t.form.errors.emailRequired,
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: t.form.errors.emailInvalid,
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label
                        className={labelClass}
                        style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}
                      >
                        {t.form.phone}
                        <span className="text-red-500 ms-1">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder={t.form.phonePlaceholder}
                        dir="ltr"
                        className={errors.phone ? errorInputClass : inputClass}
                        {...register("phone", { required: t.form.errors.phoneRequired })}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      className={labelClass}
                      style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}
                    >
                      {t.form.company}
                    </label>
                    <input
                      type="text"
                      placeholder={t.form.companyPlaceholder}
                      className={inputClass}
                      {...register("companyName")}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className={labelClass}
                      style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}
                    >
                      {t.form.message}
                      <span className="text-red-500 ms-1">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t.form.messagePlaceholder}
                      className={`${errors.message ? errorInputClass : inputClass} resize-none`}
                      {...register("message", {
                        required: t.form.errors.messageRequired,
                        minLength: { value: 10, message: t.form.errors.messageTooShort },
                      })}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
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

            {/* ── RIGHT: FAQ Accordion ── */}
            <div className={isRTL ? "order-1 lg:order-1" : "order-2 lg:order-2"}>
              <div className="mb-5">
                <h2
                  className="text-gray-900 text-xl md:text-2xl mb-1.5"
                  style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                >
                  {t.faq.title}
                </h2>
                <p className="text-gray-500 text-sm">{t.faq.subtitle}</p>
                <div className="h-0.5 w-10 bg-emerald-600 rounded-full mt-3" />
              </div>

              <div className="space-y-3">
                {t.faq.items.map((item, idx) => (
                  <FaqItem
                    key={idx}
                    question={item.q}
                    answer={item.a}
                    isOpen={openFaq === idx}
                    onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
                  />
                ))}
              </div>

              {/* WhatsApp nudge */}
              <div className="mt-6 p-4 bg-white border-2 border-gray-200 rounded-xl flex items-center gap-3">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-5 h-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-gray-900 text-sm leading-tight"
                    style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
                  >
                    {language === "en" ? "Still have questions?" : "لديك مزيد من الأسئلة؟"}
                  </p>
                  <a
                    href="https://wa.me/971XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs hover:underline transition-colors"
                    style={{ color: "#25D366", fontWeight: 600 }}
                  >
                    {language === "en" ? "Chat with us on WhatsApp →" : "تحدث معنا على واتساب ←"}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
