import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        institutional: 'Institutional',
        wealth: 'Wealth',
        insights: 'Insights'
      },
      hero: {
        title: {
          main: 'Precision in Detail,',
          accent: 'Excellence in Action.'
        },
        subtitle: 'Tax & Accounting Consultants.',
        description: 'Asas Al-Deqa provides professional tax compliance, accounting services, and business consulting for enterprises demanding clarity and peace of mind.',
        cta_contact: 'Get Started',
        cta_services: 'Our Services'
      },
      home: {
        legacy_title: {
          main: 'A Legacy of',
          accent: 'Professional Integrity.'
        },
        legacy_desc: 'Since 2014, Asas Al-Deqa has been managed by highly qualified practitioners who strive to provide the best tax and accounting consultancy services across Jordan.',
        stats: {
          experience: 'Years Experience',
          clients: 'Clients Served'
        }
      },
      about: {
        title: {
          main: 'Commitment to Detail.',
          accent: 'Integrity in Action.'
        },
        subtitle: 'Since 2014, Asas Al-Deqa has been serving a wide range of national clients and individuals with excellence in tax and accounting consultancy services across Jordan.',
        managed_by: {
          main: 'Managed by',
          accent: 'Practitioners.'
        },
        history_p1: 'Asas Al-Deqa was established in 2014, managed by highly qualified practitioners who strive to provide the best tax and accounting consultancy services.',
        history_p2: 'We serve a wide range of national clients from industries such as manufacturing, financial, trading, and telecommunication. We focus on small and medium enterprises (SMEs), bringing them on better footings and into new growth potentials.',
        vision: {
          title: 'Peace of Mind',
          accent: 'for Our Clients.',
          desc: 'To be highly respected business in the field, where clients come for the peace of mind that their interests are being cared for by a team that enjoys working with them and with one another.'
        },
        mission: {
          title: 'Exceeding',
          accent: 'Client Needs.',
          desc: 'To provide businesses, entrepreneurs and individuals with highest quality accounting, auditing, tax planning and business consulting services delivered in a timely, efficient, and innovative manner.'
        },
        why_title: 'The Core Pillars',
        pillars: {
          commitment: 'Commitment & Integrity',
          commitment_desc: 'We deliver what we promise and gain trust through our actions.',
          legality: 'Legality & Capability',
          legality_desc: 'Possess technical skills and consulting licenses to provide suitable solutions.',
          quality: 'Quality & Flexibility',
          quality_desc: 'Adapting quickly to client needs with high-quality deliverables on time.',
          confidentiality: 'Confidentiality',
          confidentiality_desc: 'Strict respecting of information acquired because of professional relationships.'
        }
      },
      contact: {
        hero_title: {
          main: 'Establish',
          accent: 'Contact.'
        },
        hero_subtitle: 'ENGAGEMENT PORTAL',
        info_title: "Let's Architect Your Future.",
        info_desc: 'Our executive team is available for initial discovery sessions. Whether you require structural advisory or complex wealth preservation blueprints, we are centered on precision.',
        location: 'Location',
        phone: 'Direct Line',
        email: 'Inquiries',
        hours: 'Office Hours',
        confidentiality: 'Your data and inquiries are processed under strict institutional confidentiality protocols.',
        form_title: 'ENGAGEMENT REQUEST',
        form_subtitle: 'Complete the dossier below to begin formal engagement.',
        label_name: 'Full Name',
        placeholder_name: 'ESTEEMED CLIENT',
        label_email: 'Email Address',
        placeholder_email: 'OFFICE@COMPANY.COM',
        label_subject: 'Advisory Category',
        label_message: 'Brief Requirements',
        placeholder_message: 'DESCRIBE YOUR OBJECTIVES...',
        button_send: 'TRANSMIT DOSSIER'
      },
      common: {
        dir: 'ltr'
      },
      services: {
        title: {
          main: 'Business',
          accent: 'Solutions.'
        },
        subtitle: 'A comprehensive suite of tax and accounting consultancy services engineered for SMEs and growing businesses.',
        items: {
          tax_compliance: 'Tax Compliance',
          tax_compliance_desc: 'Ensuring your company\'s declaration and payment of monthly and annual Tax Returns are in accordance with applicable regulations.',
          accounting: 'Accounting Services',
          accounting_desc: 'From creating accounting charts to bookkeeping and internal financial statements, we develop your full financial position image.',
          tax_management: 'Tax Management',
          tax_management_desc: 'Health checks to limit the risk of inaccuracies or compliance failure and mitigate the risk of future tax penalties.',
          tax_litigation: 'Tax Litigation',
          tax_litigation_desc: 'Assistance through tax audits, objections, and appeals to ensure faster processes and the best possible outcomes.',
          documentation: 'Documentation Service',
          documentation_desc: 'Managing and processing all necessary filings of your accounting and tax related papers, properly classified and reserved.',
          inventory: 'Inventory Management',
          inventory_desc: 'Effective inventory control for retail and wholesale businesses, managing sales, returns, receipts, and theft protection.',
          erp: 'ERP Solutions',
          erp_desc: 'Integrated software solutions to manage all back-office and front-office activities, automating and growing your business.'
        },
        cta_title: 'Ready to secure your business growth?',
        cta_button: 'Book Consultation'
      },
      footer: {
        desc: 'Delivering bespoke financial architecture and strategic advisory across the MENA region since 2014.',
        rights: '© 2024 ASAS AL-DEQA. ALL RIGHTS RESERVED.',
        tagline: 'TAX & ACCOUNTING CONSULTANCY.'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        services: 'الخدمات',
        about: 'من نحن',
        contact: 'اتصل بنا',
        institutional: 'مؤسسي',
        wealth: 'ثروات',
        insights: 'رؤى'
      },
      hero: {
        title: {
          main: 'الدقة في التفاصيل،',
          accent: 'التميز في العمل.'
        },
        subtitle: 'مستشارو الضرائب والمحاسبة.',
        description: 'تقدم أساس الدقة امتثالاً ضريبياً احترافياً، وخدمات محاسبية، واستشارات تجارية للمؤسسات التي تتطلب الوضوح وراحة البال.',
        cta_contact: 'ابدأ الآن',
        cta_services: 'خدماتنا'
      },
      home: {
        legacy_title: {
          main: 'إرث من',
          accent: 'النزاهة المهنية.'
        },
        legacy_desc: 'منذ عام 2014، تُدار أساس الدقة من قبل ممارسين ذوي كفاءة عالية يسعون لتقديم أفضل خدمات الاستشارات الضريبية والمحاسبية في جميع أنحاء الأردن.',
        stats: {
          experience: 'سنوات الخبرة',
          clients: 'العملاء المستفيدون'
        }
      },
      about: {
        title: {
          main: 'الالتزام بالتفاصيل.',
          accent: 'النزاهة في العمل.'
        },
        subtitle: 'منذ عام 2014، تخدم أساس الدقة مجموعة واسعة من العملاء الوطنيين والأفراد بتميز في خدمات الاستشارات الضريبية والمحاسبية عبر الأردن.',
        managed_by: {
          main: 'تدار من قبل',
          accent: 'ممارسين.'
        },
        history_p1: 'تأسست أساس الدقة في عام 2014، وتدار من قبل ممارسين ذوي كفاءة عالية يسعون لتقديم أفضل خدمات الاستشارات الضريبية والمحاسبية.',
        history_p2: 'نحن نخدم مجموعة واسعة من العملاء الوطنيين من صناعات مثل التصنيع والتمويل والتجارة والاتصالات. نحن نركز على الشركات الصغيرة والمتوسطة (SMEs)، وننقلها إلى ركائز أفضل وإمكانات نمو جديدة.',
        vision: {
          title: 'راحة البال',
          accent: 'لعملائنا.',
          desc: 'أن نكون عملاً يحظى باحترام كبير في هذا المجال، حيث يأتي العملاء لراحة البال بأن مصالحهم تحظى برعاية فريق يستمتع بالعمل معهم ومع بعضهم البعض.'
        },
        mission: {
          title: 'تجاوز',
          accent: 'احتياجات العملاء.',
          desc: 'تزويد الشركات والرواد والأفراد بأعلى جودة من خدمات المحاسبة والتدقيق والتخطيط الضريبي والاستشارات التجارية المقدمة في الوقت المناسب وبكفاءة ومبتكرة.'
        },
        why_title: 'الركائز الأساسية',
        pillars: {
          commitment: 'الالتزام والنزاهة',
          commitment_desc: 'نحن نفي بما نعد به ونكتسب الثقة من خلال أفعالنا.',
          legality: 'القانونية والقدرة',
          legality_desc: 'امتلاك المهارات الفنية وتراخيص الاستشارة لتقديم الحلول المناسبة.',
          quality: 'الجودة والمرونة',
          quality_desc: 'التكيف السريع مع احتياجات العملاء وتقديم مخرجات عالية الجودة في الوقت المحدد.',
          confidentiality: 'السرية',
          confidentiality_desc: 'الاحترام الصارم للمعلومات المكتسبة بسبب العلاقات المهنية.'
        }
      },
      contact: {
        hero_title: {
          main: 'تواصل',
          accent: 'معنا.'
        },
        hero_subtitle: 'بوابة التواصل',
        info_title: 'دعنا نصمم مستقبلك.',
        info_desc: 'فريقنا التنفيذي متاح لجلسات الاستكشاف الأولية. سواء كنت بحاجة إلى استشارات هيكلية أو مخططات معقدة للحفاظ على الثروة، فإننا نركز على الدقة.',
        location: 'الموقع',
        phone: 'الخط المباشر',
        email: 'الاستفسارات',
        hours: 'ساعات العمل',
        confidentiality: 'يتم التعامل مع بياناتك واستفساراتك بموجب بروتوكولات سرية مؤسسية صارمة.',
        form_title: 'طلب تواصل',
        form_subtitle: 'أكمل النموذج أدناه لبدء التواصل الرسمي.',
        label_name: 'الاسم الكامل',
        placeholder_name: 'العميل الموقر',
        label_email: 'البريد الإلكتروني',
        placeholder_email: 'OFFICE@COMPANY.COM',
        label_subject: 'فئة الاستشارة',
        label_message: 'متطلبات موجزة',
        placeholder_message: 'صف أهدافك...',
        button_send: 'إرسال الطلب'
      },
      common: {
        dir: 'rtl'
      },
      services: {
        title: {
          main: 'حلول',
          accent: 'الأعمال.'
        },
        subtitle: 'مجموعة شاملة من خدمات الاستشارات الضريبية والمحاسبية المصممة للشركات الصغيرة والمتوسطة والشركات النامية.',
        items: {
          tax_compliance: 'الامتثال الضريبي',
          tax_compliance_desc: 'ضمان تقديم ودفع الإقرارات الضريبية الشهرية والسنوية لشركتك وفقاً للأنظمة المعمول بها.',
          accounting: 'الخدمات المحاسبية',
          accounting_desc: 'من إنشاء المخططات المحاسبية إلى مسك الدفاتر والبيانات المالية الداخلية، نطور صورة كاملة لمركزك المالي.',
          tax_management: 'إدارة الضرائب',
          tax_management_desc: 'فحوصات صحية للحد من مخاطر عدم الدقة أو فشل الامتثال وتخفيف مخاطر الغرامات الضريبية المستقبلية.',
          tax_litigation: 'التقاضي الضريبي',
          tax_litigation_desc: 'المساعدة من خلال التدقيق الضريبي والاعتراضات والطعون لضمان عمليات أسرع وأفضل النتائج الممكنة.',
          documentation: 'خدمة التوثيق',
          documentation_desc: 'إدارة ومعالجة جميع الملفات اللازمة لأوراقك ومستنداتك المتعلقة بالمحاسبة والضرائب، وتصنيفها وحفظها بشكل صحيح.',
          inventory: 'إدارة المخزون',
          inventory_desc: 'رقابة فعالة على المخزون لأعمال التجزئة والجملة، وإدارة المبيعات والمرتجع والاستلام وحماية السرقة.',
          erp: 'حلول ERP',
          erp_desc: 'حلول برمجية متكاملة لإدارة جميع أنشطة المكتب الخلفي والأمامي، وأتمتة وتنمية أعمالك.'
        },
        cta_title: 'هل أنت مستعد لتأمين نمو عملك؟',
        cta_button: 'احجز استشارة'
      },
      footer: {
        desc: 'تقديم هندسة مالية واستشارات استراتيجية مخصصة عبر منطقة الشرق الأوسط وشمال أفريقيا منذ عام 2014.',
        rights: '© 2024 أساس الدقة. جميع الحقوق محفوظة.',
        tagline: 'استشارات ضريبية ومحاسبية.'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
