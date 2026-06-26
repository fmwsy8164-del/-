import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Menu,
  X,
  ExternalLink,
  Code,
  Sparkles,
  Palette,
  Layers,
  Briefcase,
  Award,
  Users,
  CheckCircle,
  MessageSquare,
  Mail,
  Phone,
  Github,
  Linkedin,
  ArrowRight,
  FileText,
  ChevronLeft,
  ChevronRight,
  Eye,
  Laptop,
  Moon,
  Sun,
  Cpu,
  User,
  Calendar,
  Send,
  Zap,
  Check,
  Globe,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

import portraitImg from './assets/images/fares_portrait_1782354200943.jpg';
import aiDashboardImg from './assets/images/ai_dashboard_mockup_1782354214660.jpg';
import brandingImg from './assets/images/branding_mockup_1782354268573.jpg';
import mobileAppImg from './assets/images/mobile_app_mockup_1782354283892.jpg';

// Interfaces
interface Project {
  id: string;
  title: string;
  category: 'web' | 'ai' | 'graphic' | 'uiux' | 'branding';
  description: string;
  longDescription: string;
  tools: string[];
  results: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
}

interface FAQItem {
  id: string;
  question_en: string;
  question_ar: string;
  answer_en: string;
  answer_ar: string;
}

const faqsList: FAQItem[] = [
  {
    id: 'faq-1',
    question_en: "What is the typical timeline for a custom full-stack application or AI integration?",
    question_ar: "ما هو الجدول الزمني النموذجي لتطبيق متكامل مخصص أو دمج الذكاء الاصطناعي؟",
    answer_en: "Typically, full-stack applications and AI automated workflows are delivered within 2 to 6 weeks, depending on complexity. We structure projects in milestones—starting with design approval, followed by core development, API integration, and extensive QA, ensuring you are aligned at every stage.",
    answer_ar: "عادةً ما يتم تسليم التطبيقات المتكاملة وسير عمل أتمتة الذكاء الاصطناعي في غضون ٢ إلى ٦ أسابيع، اعتمادًا على التعقيد. نقوم بهيكلة المشاريع في مراحل رئيسية — بدءًا من الموافقة على التصميم، تليها عملية التطوير الأساسية، وربط واجهات برمجة التطبيقات، وفحص الجودة المكثف."
  },
  {
    id: 'faq-2',
    question_en: "How do you structure payments for freelancing or agency contracts?",
    question_ar: "كيف تقوم بهيكلة الدفعات لخدمات العمل الحر أو عقود الوكالة؟",
    answer_en: "We structure payments transparently with milestone-based models. Usually, a 30% initial deposit is required to initiate design and architectural drafting, followed by 40% upon approval of intermediate prototype functionality, and the remaining 30% upon final production launch.",
    answer_ar: "نحن نهيكل الدفعات بشفافية تامة بناءً على مراحل تسليم المشروع. عادةً ما يُطلب دفعة أولى بنسبة ٣٠٪ لبدء التصميم وصياغة الهيكل المعماري، تليها ٤٠٪ عند الموافقة على النموذج الأولي الوظيفي، والـ ٣٠٪ المتبقية عند الإطلاق النهائي للمشروع."
  },
  {
    id: 'faq-3',
    question_en: "What communication channels and protocols do you use to keep clients updated?",
    question_ar: "ما هي قنوات وبروتوكولات الاتصال التي تستخدمها لإبقاء العملاء على اطلاع دائم؟",
    answer_en: "We maintain highly professional and open communication using Slack, Discord, Google Meet, or WhatsApp Business for daily text updates. Additionally, we provide interactive staging previews and dynamic weekly status dashboards to review progress transparently.",
    answer_ar: "نحن نحافظ على تواصل احترافي ومفتوح باستخدام منصات مثل Slack أو Discord أو Google Meet أو WhatsApp Business للتحديثات اليومية. بالإضافة إلى ذلك، نوفر معاينات حية وتقارير أسبوعية تفاعلية لمراجعة التقدم بكل شفافية."
  },
  {
    id: 'faq-4',
    question_en: "How can AI Automation help my business and how do we get started?",
    question_ar: "كيف يمكن لأتمتة الذكاء الاصطناعي مساعدة عملي وكيف يمكننا البدء؟",
    answer_en: "AI Automation replaces repetitive manual tasks—such as CRM lead enrichment, automated social posting, automatic invoice processing, and AI chatbots. We start with a 30-minute auditing call to identify your operational bottlenecks, design the blueprint, and deploy intelligent custom agents.",
    answer_ar: "تعمل أتمتة الذكاء الاصطناعي على استبدال المهام اليدوية المتكررة — مثل إثراء بيانات العملاء في CRM، النشر التلقائي، معالجة الفواتير، وروبوتات الدردشة الذكية. نبدأ بجلسة تدقيق مدتها ٣٠ دقيقة لتحديد العقبات، ثم نصمم المخطط، ونطلق العملاء الأذكياء."
  }
];

const translations = {
  en: {
    // Navigation
    navAbout: "About",
    navServices: "Services",
    navSkills: "Skills",
    navPortfolio: "Portfolio",
    navSlider: "Interactive Slider",
    navTestimonials: "Testimonials",
    navFaq: "FAQ",
    navContact: "Contact",
    navCtaHire: "HIRE ME",
    
    // Preloader
    preloaderSubtitle: "Creative Tech Studio • 2026",
    preloaderStatus: "INITIALIZING EXPERIENCES",

    // Hero Section
    heroStatus: "Available for international contracts",
    heroHeadingMain: "Turning Visions Into",
    heroHeadingGradient: "Elite Digital Realities",
    heroIntro: "Hi, I'm Fars Alblbysy. I specialize in building custom, responsive full-stack applications, designing luxury branding, and creating autonomous AI agents and automated workflows that streamline processes and attract high-ticket clients.",
    heroCtaHire: "HIRE ME",
    heroCtaPortfolio: "VIEW PORTFOLIO",
    heroCtaContact: "CONTACT ME",
    heroHireOn: "HIRE ON:",
    heroBadgeAi: "AUTOMATING WITH",
    heroBadgeAiVal: "AI Agents",
    heroBadgeDesign: "DESIGNING WITH",
    heroBadgeDesignVal: "Figma & Adobe",
    portraitName: "Fars Alblbysy",
    portraitDesc: "5+ Years • Creative Developer & Designer",

    // Stats Section
    statsExp: "Years Experience",
    statsProj: "Completed Projects",
    statsClients: "Happy Clients",
    statsBrands: "Brands Served",

    // About Section
    aboutPretitle: "01 / THE STORY",
    aboutTitle: "Fusing Code, Creative Design & Automation",
    aboutJourneyTitle: "The Journey of a Hybrid Creator",
    aboutJourneyP1: "For over 5 years, I have lived at the intersection of aesthetic design and logical systems development. I don't just build functional server systems, nor do I just draft static layouts — I synthesize both into cohesive visual masterpieces powered by smart AI workflows.",
    aboutJourneyP2: "My professional philosophy is centered around creating premium products that deliver instant ROI for clients. By integrating autonomous workflows, modern AI APIs, and beautiful responsive user interfaces, I help startups and established agencies automate core operations while keeping their client-facing brand stunning.",
    aboutJourneyP3: "Whether you need a cutting-edge Next.js application, high-end vector branding, custom database architecture, or automated business workflows to boost operations, I offer a reliable, all-in-one elite development partnership.",
    aboutValue1Title: "Elite Quality Architecture",
    aboutValue1Desc: "Robust, clean, and highly maintainable systems.",
    aboutValue2Title: "Luxurious Brand Style",
    aboutValue2Desc: "High contrast modern visuals and smooth physics.",
    aboutValue3Title: "AI Automation Native",
    aboutValue3Desc: "Replacing manual work with intelligent AI workflows.",
    aboutValue4Title: "Pixel-Perfect Responsive",
    aboutValue4Desc: "Incredible experience from wide screens to mobile.",
    aboutTimelineTitle: "Professional Journey Timeline",
    aboutTimelineItem1Role: "Senior Independent Consultant",
    aboutTimelineItem1Company: "Fars Alblbysy Creative Tech Studio",
    aboutTimelineItem1Desc: "Building premium full stack web apps, AI pipelines, and brand assets for global clients. Developed real-time trading dashboards, brand guidelines, and visual menu automations.",
    aboutTimelineItem2Role: "Lead AI Automation & Web Engineer",
    aboutTimelineItem2Company: "Dynamic AI Integrations Group",
    aboutTimelineItem2Desc: "Spearheaded development of responsive React interfaces, integrated automated LLM customer support layers, built background databases, and mapped out workflow automation templates.",
    aboutTimelineItem3Role: "Full Stack Developer & Graphic Artist",
    aboutTimelineItem3Company: "PixelForge Creative Agency",
    aboutTimelineItem3Desc: "Crafted corporate websites, logo concepts, client pitch books, social media ads, and managed SQL database migrations.",
    aboutTimelineCta: "REQUEST RESUME & CASE STUDIES",

    // Services Section
    servicesPretitle: "02 / SERVICES EXCELLENCE",
    servicesTitle: "Core Capabilities Offered",
    servicesSubtitle: "Each service is executed with premium attention to detail, high quality coding standards, and optimized modern designs.",
    service1Title: "Website Development",
    service1Desc: "SEO-optimized, ultra-fast loading, and premium fully responsive frontend platforms constructed with Next.js and Tailwind.",
    service2Title: "Web Applications",
    service2Desc: "Complex, secure interactive backend logic, API connectors, databases (MongoDB/MySQL) and low latency dashboards.",
    service3Title: "AI Automation Systems",
    service3Desc: "Node autonomous agents, customized visual flow builders, multi-system workflow integrations and intelligent chatbots.",
    service4Title: "Graphic & Branding Design",
    service4Desc: "Luxury vector logo layout design, custom branding blueprints, high conversion posters, restaurant menus, and flyers.",
    servicesLearnMore: "Learn more",
    servicesFooter: "• HIGH CONVERSION GUARANTEED • FAST LOADING TIME • ACCESSIBILITY FIRST",

    // Skills Section
    skillsPretitle: "03 / TECH MATRIX",
    skillsTitle: "Skills Visualization Dashboard",
    skillsSubtitle: "Explore my technical and creative weapon of choices. Click on the categories below to inspect expertise distribution.",
    skillsTabDev: "Development",
    skillsTabDesign: "Design",
    skillsTabAi: "AI & Automation",
    skillsDevHeaderTitle: "Full Stack Engineering",
    skillsDevHeaderSubtitle: "High speed, typing safety, modern web architecture.",
    skillsDevHeaderBadge: "5+ YRS EXP",
    skillsDesignHeaderTitle: "Visual Art & UX Mastery",
    skillsDesignHeaderSubtitle: "Branding design systems, high end layout vector graphics, typography aesthetics.",
    skillsDesignHeaderBadge: "6+ YRS EXP",
    skillsAiHeaderTitle: "Intelligent Workflows & Agents",
    skillsAiHeaderSubtitle: "Autonomous processing, NLP integration, API microservices orchestrators.",
    skillsAiHeaderBadge: "3+ YRS EXP",

    // Portfolio Section
    portfolioPretitle: "04 / CREATIVE VAULT",
    portfolioTitle: "Featured Case Studies & Showcase",
    portfolioSubtitle: "Filter through different project categories to see development, design, and automations in action. Click on a project to inspect case studies.",
    portfolioTabAll: "All Projects",
    portfolioTabWeb: "Web Dev",
    portfolioTabAi: "AI & Automation",
    portfolioTabGraphic: "Graphic Design",
    portfolioTabUiux: "UI/UX Design",
    portfolioTabBranding: "Branding Projects",
    portfolioInspect: "Inspect Case Study",

    // Slider Section
    sliderPretitle: "05 / DESIGN MASTERY TRACE",
    sliderTitle: "Before / After Interactive Slider",
    sliderDesc: "Interact with my visual refining engine. Drag the slider handle to contrast the initial raw geometric structural wireframe and vector paths (Before) against the final luxury illuminated gold-and-marble photography identity (After).",
    sliderBeforeTitle: "Raw Structure & Blueprint",
    sliderBeforeDesc: "Symmetrical geometric math alignment blueprints.",
    sliderAfterTitle: "Luxurious Final Finish",
    sliderAfterDesc: "Premium photographic high-end agency material rendering.",
    sliderNotice: "Drag the vertical handle in the viewer →",
    sliderBeforeBadge: "BEFORE: VECTOR BLUEPRINT",
    sliderAfterBadge: "AFTER: LUXURY FINISH",

    // Testimonials Section
    testimonialsPretitle: "06 / CLIENT REVIEWS",
    testimonialsTitle: "Client Testimonials",

    // FAQ Section
    faqPretitle: "07 / INQUIRIES & DEEP DIVES",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Detailed breakdown on timelines, transparent milestones, secure pay structures, and fluid communication channels.",

    // Contact Section
    contactPretitle: "08 / CONNECT WITH ME",
    contactTitle: "Let's Construct Something Incredible",
    contactDesc: "Have a custom application workflow that needs automating? A corporate branding design that needs luxury refinement? Or a client web application requiring speed optimization? Drop me a direct message below.",
    contactEmailLbl: "Email Address",
    contactPhoneLbl: "Direct Phone",
    contactNotice: "ESTABLISHED 2021 • CAIRO, EGYPT • AVAILABLE GLOBALLY",
    contactFormTitle: "Send direct client inquiries",
    contactSuccessTitle: "Message dispatched successfully!",
    contactSuccessSub: "Fars will respond to farsalblbysy3@gmail.com within 12 hours.",
    contactFormName: "Your Name *",
    contactFormEmail: "Your Email *",
    contactFormSubject: "Subject",
    contactFormMessage: "Your Message *",
    contactFormBtn: "DISPATCH DIRECT MESSAGE",

    // Case Study Modal
    modalPretitleSuffix: "CASE STUDY",
    modalMission: "The Mission & Process",
    modalTools: "Core Tools & Skills Used",
    modalMetrics: "Metrics & Results Achieved",
    modalLive: "Live Preview",
    modalSource: "Source Code",

    // Footer Section
    footerSub: "Elite Creative Developer • AI Automator",
    footerCopy: "© 2026 Fars Alblbysy. All rights reserved. Made for Elite International Freelancing.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service"
  },
  ar: {
    // Navigation
    navAbout: "حول",
    navServices: "الخدمات",
    navSkills: "المهارات",
    navPortfolio: "الأعمال",
    navSlider: "مقارنة التصميم",
    navTestimonials: "الآراء",
    navFaq: "الأسئلة الشائعة",
    navContact: "اتصل بي",
    navCtaHire: "وظفني",

    // Preloader
    preloaderSubtitle: "ستوديو التكنولوجيا الإبداعي • ٢٠٢٦",
    preloaderStatus: "تهيئة التجربة الرقمية",

    // Hero Section
    heroStatus: "متاح للعقود والمشاريع الدولية",
    heroHeadingMain: "تحويل الأفكار والرؤى إلى",
    heroHeadingGradient: "حقائق رقمية نخبوية",
    heroIntro: "مرحباً، أنا فارس البلبيسي. أمتلك خبرة واسعة في بناء تطبيقات ويب متكاملة وسريعة الاستجابة، وتصميم هويات بصرية فاخرة، وتطوير أنظمة أتمتة فائقة بالاعتماد على الذكاء الاصطناعي لتسريع عملياتك وجذب عملاء ذوي قيمة عالية.",
    heroCtaHire: "وظفني الآن",
    heroCtaPortfolio: "تصفح أعمالي",
    heroCtaContact: "اتصل بي",
    heroHireOn: "منصات العمل:",
    heroBadgeAi: "أتمتة ذكية بواسطة",
    heroBadgeAiVal: "وكلاء الذكاء الاصطناعي",
    heroBadgeDesign: "تصاميم متميزة بـ",
    heroBadgeDesignVal: "فيجما وأدوبي",
    portraitName: "فارس البلبيسي",
    portraitDesc: "٥+ سنوات • مطور إبداعي ومصمم محترف",

    // Stats Section
    statsExp: "سنوات الخبرة",
    statsProj: "مشاريع مكتملة",
    statsClients: "عملاء سعداء",
    statsBrands: "علامات تجارية",

    // About Section
    aboutPretitle: "٠١ / القصة والمسار",
    aboutTitle: "دمج البرمجة والتصميم الإبداعي والأتمتة الذكية",
    aboutJourneyTitle: "رحلة صانع رقمي هجين",
    aboutJourneyP1: "لأكثر من ٥ سنوات، عشت في نقطة التقاء التصميم الجمالي وتطوير الأنظمة المنطقية. أنا لا أقوم فقط ببناء خوادم برمجية صامتة، ولا أكتفي برسم واجهات ثابتة بل أدمج الاثنين معاً لإنتاج روائع بصرية مدعومة بذكاء اصطناعي وأتمتة متطورة.",
    aboutJourneyP2: "تتركز فلسفتي المهنية على بناء منتجات ممتازة تحقق عائداً استثمارياً فورياً للعملاء. من خلال دمج آليات سير العمل المستقلة، وتقنيات الذكاء الاصطناعي، والواجهات المتجاوبة الفاخرة، أساعد الشركات والوكالات على أتمتة عملياتها الأساسية مع الحفاظ على هوية بصرية مذهلة تجذب الجمهور.",
    aboutJourneyP3: "سواء كنت بحاجة إلى تطبيق ويب متطور بـ Next.js، أو تصميم هوية بصرية فاخرة، أو هندسة قاعدة بيانات مخصصة، أو أتمتة كاملة لعمليات شركتك، فإنني أقدم لك شراكة تطويرية موثوقة ونخبوية.",
    aboutValue1Title: "بنية برمجية نخبوية",
    aboutValue1Desc: "أنظمة قوية، نظيفة، وقابلة للصيانة والتطوير المستقبلي.",
    aboutValue2Title: "هوية بصرية فاخرة",
    aboutValue2Desc: "مرئيات حديثة متباينة للغاية وتأثيرات حركية انسيابية.",
    aboutValue3Title: "أتمتة ذكية أصيلة",
    aboutValue3Desc: "استبدال العمل اليدوي المتكرر بسير عمل مؤتمت بالكامل.",
    aboutValue4Title: "تصميم متجاوب مثالي",
    aboutValue4Desc: "تجربة تصفح رائعة من الشاشات الضخمة إلى الهواتف الذكية.",
    aboutTimelineTitle: "مسار الرحلة المهنية",
    aboutTimelineItem1Role: "مستشار تقني مستقل رئيسي",
    aboutTimelineItem1Company: "ستوديو فارس البلبيسي للتكنولوجيا الإبداعية",
    aboutTimelineItem1Desc: "تطوير تطبيقات ويب متكاملة، وبناء خطوط معالجة الذكاء الاصطناعي، وتصميم الأصول البصرية للعملاء حول العالم. تطوير لوحات تحكم مالية، وتوثيق هويات العلامات التجارية.",
    aboutTimelineItem2Role: "رئيس مهندسي الويب وأتمتة الذكاء الاصطناعي",
    aboutTimelineItem2Company: "المجموعة الديناميكية لدمج أنظمة الذكاء الاصطناعي",
    aboutTimelineItem2Desc: "قيادة تطوير واجهات React المتجاوبة، وربط خوارزميات معالجة اللغات الطبيعية لدعم العملاء، وبناء قواعد بيانات خلفية، وتصميم قوالب أتمتة العمليات.",
    aboutTimelineItem3Role: "مطور ويب متكامل ومصمم رسومي",
    aboutTimelineItem3Company: "وكالة بيكسل فورج الإبداعية",
    aboutTimelineItem3Desc: "تصميم مواقع برمجية فاخرة، وصياغة شعارات تجارية مخصصة، وإعلانات شبكات التواصل الاجتماعي، وإدارة قواعد بيانات SQL وتحديثها.",
    aboutTimelineCta: "طلب السيرة الذاتية ودراسات الحالة",

    // Services Section
    servicesPretitle: "٠٢ / تميز الخدمات",
    servicesTitle: "القدرات والخدمات الأساسية",
    servicesSubtitle: "يتم تنفيذ كل خدمة باهتمام بالغ بالتفاصيل، ومعايير برمجية عالية الجودة، وتصاميم حديثة ومحسنة تماماً.",
    service1Title: "تطوير مواقع الويب",
    service1Desc: "منصات ويب سريعة للغاية، محسنة لمحركات البحث (SEO)، ومتجاوبة بالكامل مصممة بأحدث تقنيات Next.js و Tailwind.",
    service2Title: "تطبيقات الويب المتقدمة",
    service2Desc: "أنظمة برمجية خلفية معقدة وآمنة، وتكامل مع واجهات البرمجة وقواعد البيانات (MongoDB/MySQL) ولوحات تحكم سريعة.",
    service3Title: "أنظمة الأتمتة بالذكاء الاصطناعي",
    service3Desc: "بناء وكلاء أذكياء ومستقلين، ومخططات سير عمل مرئية، وتكامل الأنظمة المتعددة وروبوتات الدردشة الذكية لشركتك.",
    service4Title: "التصميم الجرافيكي والهوية البصرية",
    service4Desc: "شعارات جرافيكية فاخرة شعارات مبنية هندسياً، كتيبات أعمال مميزة، منشورات جذابة للعملاء والمطاعم، وتصاميم حصرية.",
    servicesLearnMore: "تفاصيل الخدمة",
    servicesFooter: "• جودة تحويل مضمونة • سرعة تحميل فائقة • واجهات سهلة الوصول للجميع",

    // Skills Section
    skillsPretitle: "٠٣ / مصفوفة التكنولوجيا",
    skillsTitle: "لوحة تفاعلية لاستكشاف المهارات",
    skillsSubtitle: "استكشف أسلحتي التقنية والإبداعية. انقر على الفئات أدناه لمشاهدة توزيع الخبرات والمهارات الفنية.",
    skillsTabDev: "التطوير والبرمجة",
    skillsTabDesign: "التصميم الإبداعي",
    skillsTabAi: "الذكاء الاصطناعي والأتمتة",
    skillsDevHeaderTitle: "هندسة البرمجيات المتكاملة",
    skillsDevHeaderSubtitle: "سرعة فائقة، أمان برمجى تام، معمارية ويب حديثة ومتكاملة.",
    skillsDevHeaderBadge: "٥+ سنوات خبرة",
    skillsDesignHeaderTitle: "الفن البصري وتصميم تجربة المستخدم",
    skillsDesignHeaderSubtitle: "أنظمة هويات متكاملة، رسوميات متجهة راقية، وجماليات الطباعة والخطوط.",
    skillsDesignHeaderBadge: "٦+ سنوات خبرة",
    skillsAiHeaderTitle: "سير العمل الذكي والوكلاء الرقميين",
    skillsAiHeaderSubtitle: "معالجة تلقائية ذكية، تكامل مع النماذج اللغوية، وتصميم قنوات ربط مستقلة.",
    skillsAiHeaderBadge: "٣+ سنوات خبرة",

    // Portfolio Section
    portfolioPretitle: "٠٤ / معرض الأعمال الإبداعي",
    portfolioTitle: "أبرز دراسات الحالة والمشاريع",
    portfolioSubtitle: "قم بتصفية الفئات المختلفة لمشاهدة أعمال البرمجة، التصميم، والأتمتة أثناء العمل. انقر فوق أي مشروع لمشاهدة التفاصيل ودراسة الحالة.",
    portfolioTabAll: "كل المشاريع",
    portfolioTabWeb: "تطوير الويب",
    portfolioTabAi: "أتمتة والذكاء الاصطناعي",
    portfolioTabGraphic: "التصميم الجرافيكي",
    portfolioTabUiux: "واجهات المستخدم",
    portfolioTabBranding: "هويات بصرية",
    portfolioInspect: "فحص دراسة الحالة",

    // Slider Section
    sliderPretitle: "٠٥ / دقة التصميم الإبداعي",
    sliderTitle: "شريط مقارنة تفاعلي للتصميم",
    sliderDesc: "تفاعل مع محرك التنقيح البصري. اسحب المقبض الرأسي للمقارنة بين الهيكل الهندسي الأساسي ومسارات الرسم المتجه (قبل) مقابل الهوية البصرية واللوغو الفاخر اللامع باللون الذهبي والرخامي (بعد).",
    sliderBeforeTitle: "المخطط الهيكلي الهندسي",
    sliderBeforeDesc: "مخططات هندسية متماثلة ومسارات رسم متجهة دقيقة للغاية.",
    sliderAfterTitle: "اللمسة النهائية الفاخرة",
    sliderAfterDesc: "هوية بصرية فوتوغرافية نهائية وراقية تليق بالشركات الكبرى.",
    sliderNotice: "اسحب المقبض الرأسي في العارض لمعاينة الفرق ←",
    sliderBeforeBadge: "قبل: المخطط الهيكلي الهندسي",
    sliderAfterBadge: "بعد: اللمسة النهائية الفاخرة",

    // Testimonials Section
    testimonialsPretitle: "٠٦ / تقييمات وآراء العملاء",
    testimonialsTitle: "شهادات شركاء النجاح",

    // FAQ Section
    faqPretitle: "٠٧ / الاستفسارات والتفاصيل",
    faqTitle: "الأسئلة الشائعة",
    faqSubtitle: "تفاصيل واضحة حول الجداول الزمنية للمشاريع، الدفعات المالية الشفافة، وقنوات التواصل المفتوحة والمستمرة.",

    // Contact Section
    contactPretitle: "٠٨ / تواصل معي",
    contactTitle: "لنقم ببناء مشروعك القادم بشكل استثنائي",
    contactDesc: "هل لديك نظام عمل متكرر ترغب بأتمتته بالكامل؟ هوية بصرية تحتاج إلى لمسات فاخرة؟ أو تطبيق ويب يحتاج إلى تحسين السرعة الفائقة وتجربة المستخدم؟ أرسل رسالتك مباشرة بالأسفل.",
    contactEmailLbl: "البريد الإلكتروني",
    contactPhoneLbl: "الهاتف المباشر",
    contactNotice: "تأسس عام ٢٠٢١ • القاهرة، مصر • متاح للعملاء عالمياً",
    contactFormTitle: "إرسال استفسار مباشر عن مشروعك",
    contactSuccessTitle: "تم إرسال رسالتك بنجاح تام!",
    contactSuccessSub: "سيرد عليك فارس على بريدك الإلكتروني في غضون ١٢ ساعة كحد أقصى.",
    contactFormName: "الاسم الكريم *",
    contactFormEmail: "البريد الإلكتروني *",
    contactFormSubject: "موضوع الرسالة",
    contactFormMessage: "رسالتك الكريمة *",
    contactFormBtn: "إرسال الرسالة فوراً",

    // Case Study Modal
    modalPretitleSuffix: "دراسة حالة",
    modalMission: "المهمة والعملية البرمجية",
    modalTools: "الأدوات والمهارات المستخدمة",
    modalMetrics: "النتائج والمقاييس المحققة",
    modalLive: "المعاينة الحية",
    modalSource: "الكود المصدري",

    // Footer Section
    footerSub: "مطور برمجيات إبداعي • خبير أتمتة الذكاء الاصطناعي",
    footerCopy: "© ٢٠٢٦ فارس البلبيسي. جميع الحقوق محفوظة. تم تصميمه للعمل الحر الدولي الراقي.",
    footerPrivacy: "سياسة الخصوصية",
    footerTerms: "شروط الخدمة"
  }
};

export default function App() {
  // Preloader state
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // App core states
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  
  // Translation helpers
  const t = translations[lang];

  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'ai' | 'graphic' | 'uiux' | 'branding'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Testimonials Slider state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Before/After comparison slider state (0 to 100)
  const [sliderPos, setSliderPos] = useState(50);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Custom Cursor states
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHovering, setCursorHovering] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  // Stats Counters state
  const [experienceCount, setExperienceCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [brandsCount, setBrandsCount] = useState(0);

  // Contact Form states
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Skills interactive category
  const [activeSkillCategory, setActiveSkillCategory] = useState<'dev' | 'design' | 'ai'>('dev');

  // Asset paths (from generated images)
  const assets = {
    portrait: portraitImg,
    aiDashboard: aiDashboardImg,
    branding: brandingImg,
    mobileApp: mobileAppImg,
  };

  // Synchronize document dir and lang attributes
  useEffect(() => {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  // Preloader Counter Effect
  useEffect(() => {
    if (loadingProgress >= 100) {
      const timeout = setTimeout(() => setLoading(false), 550);
      return () => clearTimeout(timeout);
    }

    const timer = setInterval(() => {
      setLoadingProgress((prev) => Math.min(prev + Math.floor(Math.random() * 8) + 4, 100));
    }, 60);

    return () => clearInterval(timer);
  }, [loadingProgress]);

  // Trigger counters after preloader completes
  useEffect(() => {
    if (!loading) {
      const duration = 2000;
      const steps = 50;
      const stepTime = duration / steps;
      let step = 0;

      const counterTimer = setInterval(() => {
        step++;
        setExperienceCount(Math.min(5, Math.round((5 / steps) * step)));
        setProjectsCount(Math.min(100, Math.round((100 / steps) * step)));
        setClientsCount(Math.min(50, Math.round((50 / steps) * step)));
        setBrandsCount(Math.min(20, Math.round((20 / steps) * step)));

        if (step >= steps) {
          clearInterval(counterTimer);
        }
      }, stepTime);

      return () => clearInterval(counterTimer);
    }
  }, [loading]);

  // Handle Custom Cursor on desktop only
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setShowCursor(true);
    };
    const handleMouseLeave = () => {
      setShowCursor(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Theme Toggler
  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      if (next === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
      return next;
    });
  };

  // Before/After Slider drag mechanics
  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleTouchStart = () => {
    isDragging.current = true;
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      handleSliderMove(e.clientX);
    };
    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      if (e.touches.length > 0) {
        handleSliderMove(e.touches[0].clientX);
      }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('touchend', handleGlobalMouseUp);
    window.addEventListener('touchmove', handleGlobalTouchMove);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('touchend', handleGlobalMouseUp);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
    };
  }, []);

  // Testimonials list
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: lang === 'ar' ? 'ألكسندر ستيرلينغ' : 'Alexander Sterling',
      role: lang === 'ar' ? 'الرئيس التنفيذي والمؤسس' : 'CEO & Founder',
      company: lang === 'ar' ? 'مجموعة ستيرلينغ كابيتال' : 'Sterling Capital Group',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      text: lang === 'ar' 
        ? 'لقد تجاوز فارس البلبيسي كل توقعاتنا. قام ببناء نظام أتمتة سير عمل ذكي ومعقد ومزود ببوابة مستخدم متجاوبة تماماً بـ React. إن دمجه المتقن بين روعة التصميم الاستثنائي والبرمجة الخلفية المتطورة هو موهبة نادرة للغاية.'
        : "Fars Alblbysy exceeded our highest expectations. He built a complex AI-powered workflow automation system paired with a highly responsive React client portal. His hybrid mastery of gorgeous design combined with deep backend technical ability is incredibly rare.",
      rating: 5,
    },
    {
      id: 2,
      name: lang === 'ar' ? 'إيلينا روستوفا' : 'Elena Rostova',
      role: lang === 'ar' ? 'المديرة الإبداعية' : 'Creative Director',
      company: lang === 'ar' ? 'استوديوهات فانغارد الرقمية' : 'Vanguard Digital Studios',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      text: lang === 'ar'
        ? 'كلفنا فارس بإعادة بناء الهوية البصرية الكاملة لوكالتنا ومعرض أعمالنا الفاخر. التصميم ببساطة مذهل ونظيف للغاية، وتنفيذه في الكود دقيق لدرجة البكسل. وفرت لنا الأتمتة المدمجة أكثر من ١٥ ساعة عمل أسبوعياً.'
        : "We commissioned Fars to rebuild our entire agency brand identity and our premium web portfolio. The design is breathtakingly clean, and his execution in code is pixel-perfect. His creative sensibilities and workflow automations save our team over 15 hours every single week.",
      rating: 5,
    },
    {
      id: 3,
      name: lang === 'ar' ? 'ماركوس فانس' : 'Marcus Vance',
      role: lang === 'ar' ? 'نائب رئيس قسم المنتجات' : 'Vice President of Product',
      company: lang === 'ar' ? 'أيروجيت للطيران' : 'AeroJet Aviation',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      text: lang === 'ar'
        ? 'العمل مع فارس هو تجربة فاخرة بحق. إنه منظم للغاية، وسريع الاستجابة، ويفهم الجماليات الحديثة الفاخرة تماماً. لوحة حجز الرحلات المخصصة التي طورها لنا تشبه لوحة تحكم سيارة رياضية خارقة. تنفيذ خالٍ من العيوب.'
        : "Working with Fars is a premium experience. He is structured, highly responsive, and understands the luxury and tech aesthetic perfectly. Our custom booking system and application flows feel like a luxury sports car's dashboard. Flawless execution.",
      rating: 5,
    },
  ];

  // Projects list
  const projects: Project[] = [
    {
      id: 'proj-1',
      title: lang === 'ar' ? 'مؤتمت سينابس الذكي' : 'Synapse AI Automator',
      category: 'ai',
      description: lang === 'ar' ? 'أداة سحب وإفلات مرئية لبناء سير عمل مخصص للوكلاء المستقلين.' : 'Node-based visual drag-and-drop workflow builder for multi-agent autonomous tasks.',
      longDescription: lang === 'ar'
        ? 'تطبيق مؤسسي مستقبلي يتيح للشركات تخطيط عملياتها، وربط نماذج الذكاء الاصطناعي المتنوعة، وجدولة الوكلاء المستقلين لتنفيذ إجراءات واجهة البرمجة المعقدة. يتميز بسجلات مباشرة حية، ومكونات زجاجية مميزة، ومسارات بصرية تفاعلية.'
        : 'Synapse is a futuristic enterprise application enabling companies to map out business processes, link diverse LLMs, and schedule autonomous agents to execute complex, multi-step API triggers. Featuring custom live logs, custom glassmorphism components, and reactive visual paths.',
      tools: ['AI Agents', 'TypeScript', 'Node.js', 'React Flow', 'Gemini API'],
      results: lang === 'ar' ? 'رفع الكفاءة التشغيلية بنسبة ٤٢٪ وأتمت أكثر من ١٠,٠٠٠ إجراء يومي.' : 'Boosted operations efficiency by 42% and automated 10,000+ daily actions.',
      image: assets.aiDashboard,
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'proj-2',
      title: lang === 'ar' ? 'منصة تداول مالي فائقة السرعة' : 'Apex Financial Trading Desk',
      category: 'web',
      description: lang === 'ar' ? 'لوحة تحكم تفاعلية لتحليلات مالية متطورة وفائقة السرعة.' : 'Ultra-low latency web-based financial analytics dashboard with custom rendering.',
      longDescription: lang === 'ar'
        ? 'منصة تداول مخصصة لعملاء الأسهم الخاصة. تجمع بين الاتصالات فائقة السرعة، ونماذج البيانات المعقدة، ومخططات SVG التفاعلية، ومؤشرات النيون الرائعة لتقديم تجربة حية غير مسبوقة.'
        : 'A custom trading portal built for private equity clients. It combines lightning-fast websockets with complex data models, beautiful SVG chart visualizations, custom neon UI highlights, and intuitive search filters.',
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'D3.js'],
      results: lang === 'ar' ? 'تحديثات في أقل من ١٠ ملي ثانية وحصلت على تقدير في جوائز التكنولوجيا المالية.' : 'Achieved sub-10ms viewport updates and received active recognition in FinTech awards.',
      image: assets.mobileApp,
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'proj-3',
      title: lang === 'ar' ? 'هوية بصرية لمطعم ميشلان فاخر' : 'Gold & Charcoal Culinary Rebrand',
      category: 'branding',
      description: lang === 'ar' ? 'إعادة بناء الهوية البصرية الفاخرة لمطعم حائز على نجمة ميشلان.' : 'Elegant, ultra-premium brand identity overhaul for a high-end Michelin star restaurant.',
      longDescription: lang === 'ar'
        ? 'مجموعة متكاملة من تصاميم التغليف، وقائمة الطعام التفاعلية، والشعارات الهندسية المتطابقة المبنية وفقاً لشبكة دقيقة للغاية للحصول على مظهر مذهل.'
        : 'A complete branding suite including custom premium packaging design, menu design, dynamic social media banners, premium physical print templates, and luxury logo architecture constructed on strict geometric grids.',
      tools: ['Branding Design', 'Adobe Illustrator', 'Logo Design', 'Print Design'],
      results: lang === 'ar' ? 'زيادة الحجوزات الخاصة بالمطعم بنسبة ١٨٠٪ بعد إعادة إطلاق الهوية.' : 'Increased restaurant private bookings by 180% after the brand re-launch.',
      image: assets.branding,
      liveUrl: '#',
    },
    {
      id: 'proj-4',
      title: lang === 'ar' ? 'تطبيق زينيث الصحي للجوال' : 'Zenith Mobile Wellness Tracker',
      category: 'uiux',
      description: lang === 'ar' ? 'تطبيق للياقة والصحة البدنية مصمم بتصميم داكن فاخر.' : 'Sleek dark-theme wellness tracker designed for premium user engagement.',
      longDescription: lang === 'ar'
        ? 'تجربة هاتف ذكي مميزة مصممة للمتابعة الصحية والبدنية اليومية. تحتوي على واجهات زجاجية ناعمة، وعناصر تصفح مريحة للعين، ومخططات حيوية دقيقة.'
        : 'An immersive mobile experience designed for healthy life monitoring. It boasts custom visual components, tactile slider controls, elegant progress rings, and a relaxing color palette that reduces eye strain.',
      tools: ['Figma', 'UI/UX Design', 'Neumorphism', 'Prototyping'],
      results: lang === 'ar' ? 'حصل على جائزة أفضل تصميم واجهة مستخدم (UI/UX) على Behance مع أكثر من ١٥ ألف مشاهدة.' : 'Awarded Top UI/UX Design Project on Behance with over 15k views.',
      image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&auto=format&fit=crop&q=80',
      liveUrl: '#',
    },
    {
      id: 'proj-5',
      title: lang === 'ar' ? 'روبوت دعم عملاء ذكي ومستقل' : 'Autonomous Support Chatbot',
      category: 'ai',
      description: lang === 'ar' ? 'مساعد دعم عملاء تفاعلي يتميز بقدرات أتمتة فائقة وحافظة سياق.' : 'High-speed customer support chatbot featuring custom tooling & memory systems.',
      longDescription: lang === 'ar'
        ? 'روبوت دردشة ذكي يقوم تلقائيًا بمعالجة تحديثات حسابات العملاء المعقدة، وفحص المستندات، وجدولة المواعيد، وتعديل النبرة تلقائيًا بناءً على مشاعر العميل.'
        : 'A stateful chatbot that automatically executes complex client account updates, parses PDF files, schedules appointments, and shifts conversational tone dynamically based on client emotion detection.',
      tools: ['AI Agents', 'Gemini SDK', 'Express.js', 'MongoDB', 'NLP'],
      results: lang === 'ar' ? 'أتمتة ٨٤٪ من تذاكر الدعم بنسبة رضا بلغت ٤.٩/٥.' : 'Automated 84% of support tickets with a 4.9/5 satisfaction rate.',
      image: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?w=800&auto=format&fit=crop&q=80',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'proj-6',
      title: lang === 'ar' ? 'منصة تجارة إلكترونية للمنتجات الفاخرة' : 'Next.js Luxury E-Commerce Engine',
      category: 'web',
      description: lang === 'ar' ? 'محرك تسوق ذكي بـ Next.js مخصص لبيع الساعات الفاخرة والمنتجات النخبوية.' : 'High-conversion modular e-commerce system with rich glass-morphic theme elements.',
      longDescription: lang === 'ar'
        ? 'واجهة متجر ساعات فاخرة مبنية بتركيز خاص على الحركة والانسيابية وحرية التخصيص، مع بوابة دفع متكاملة وآمنة وتنقّل سلس للغاية.'
        : 'A beautiful luxury watches storefront built with focus on high fidelity animations, headless CMS integrations, full dynamic checkout flows, and seamless transitions between catalog lists and item details.',
      tools: ['Next.js', 'React', 'Tailwind CSS', 'Stripe API', 'GraphQL'],
      results: lang === 'ar' ? 'أدى إلى رفع نسبة التحويل عند الدفع لـ ٣.١٪ (ضعف متوسط الصناعة).' : 'Resulted in 3.1% checkout conversion rate (exceeding industry average by 2x).',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'proj-7',
      title: lang === 'ar' ? 'حملة طوكيو نيون الإعلانية' : 'Neon Tokyo Social Campaign',
      category: 'graphic',
      description: lang === 'ar' ? 'تصاميم جذابة وعالية التباين لشبكات التواصل لعلامة ملابس مستقبلية.' : 'Set of high-contrast social media design creatives for futuristic apparel brand.',
      longDescription: lang === 'ar'
        ? 'ملصقات وبانرات إعلانية فريدة تجمع بين معالجة الصور ومؤثرات النيون والخطوط اليابانية العصرية، مصممة خصيصاً لرفع تفاعل الجمهور.'
        : 'Highly atmospheric, cyberpunk-themed promotional posters, banners, and digital ads built for an international clothing brand. Combines photo manipulation, glowing light leak overlays, and custom Japanese typography.',
      tools: ['Adobe Photoshop', 'Social Media Design', 'Graphic Design'],
      results: lang === 'ar' ? 'حققت أكثر من ٢.٤ مليون ظهور طبيعي ومبيعات قياسية.' : 'Generated 2.4 million organic impressions and record Apparel sales.',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80',
      liveUrl: '#',
    }
  ];

  // Filtering projects
  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  // Testimonials navigation
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Form submit handler
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    // Simulate luxury API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div id="fares-portfolio-root" className={`min-h-screen selection:bg-teal-500/30 selection:text-teal-200 transition-colors duration-500 ${theme === 'dark' ? 'bg-neutral-950 text-neutral-100' : 'bg-stone-50 text-neutral-900'}`}>
      
      {/* Custom Desktop Cursor */}
      {showCursor && (
        <div 
          id="custom-cursor-glow"
          className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block rounded-full transition-transform duration-300 ease-out"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            width: cursorHovering ? '64px' : '20px',
            height: cursorHovering ? '64px' : '20px',
            background: cursorHovering ? 'rgba(224, 176, 52, 0.15)' : 'rgba(45, 212, 191, 0.25)',
            border: cursorHovering ? '1px solid rgba(224, 176, 52, 0.6)' : '1px solid rgba(45, 212, 191, 0.6)',
            transform: `translate(-50%, -50%) scale(${cursorHovering ? 1.2 : 1})`,
            boxShadow: cursorHovering ? '0 0 20px rgba(224, 176, 52, 0.2)' : '0 0 10px rgba(45, 212, 191, 0.1)'
          }}
        />
      )}

      {/* Loading preloader */}
      {loading && (
        <div id="preloader-overlay" className="fixed inset-0 bg-neutral-950 z-50 flex flex-col items-center justify-center p-6 select-none transition-all duration-700">
          <div className="w-full max-w-md flex flex-col items-center">
            {/* Logo Icon */}
            <div className="relative mb-8 w-16 h-16 flex items-center justify-center rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl">
              <span className="text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400 glow-text-cyber">F</span>
              <div className="absolute inset-0 rounded-2xl border border-teal-500/20 animate-pulse" />
            </div>

            {/* Title */}
            <h1 className="text-xl md:text-2xl font-display font-bold tracking-widest text-center text-white mb-2 uppercase">
              Fars Alblbysy
            </h1>
            <p className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-8">
              {t.preloaderSubtitle}
            </p>

            {/* Slider bar */}
            <div className="w-full h-1 bg-neutral-900 rounded-full overflow-hidden mb-3 border border-neutral-800/50">
              <div 
                className="h-full bg-gradient-to-r from-teal-500 via-amber-500 to-teal-400 transition-all duration-150 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>

            {/* Percentage */}
            <div className="flex justify-between w-full font-mono text-xs text-neutral-400 px-1">
              <span>{t.preloaderStatus}</span>
              <span className="text-teal-400">{loadingProgress}%</span>
            </div>
          </div>
        </div>
      )}

      {/* Background Radial Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-studio-radial opacity-60" />

      {/* Header Navigation */}
      <header id="portfolio-navbar" className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Name */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group"
            onMouseEnter={() => setCursorHovering(true)}
            onMouseLeave={() => setCursorHovering(false)}
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-teal-500/50 shadow-lg">
              <span className="text-lg font-bold font-display text-transparent bg-clip-text bg-gradient-to-tr from-teal-400 to-amber-300">FA</span>
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-tight block text-neutral-100 group-hover:text-teal-400 transition-colors">
                Fars Alblbysy
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 group-hover:text-amber-400 transition-colors block leading-none">
                {lang === 'ar' ? 'استوديو التكنولوجيا الإبداعي' : 'CREATIVE TECH STUDIO'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            <a href="#about" className="text-xs font-semibold text-neutral-300 hover:text-teal-400 transition-colors uppercase tracking-wider" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>{t.navAbout}</a>
            <a href="#services" className="text-xs font-semibold text-neutral-300 hover:text-teal-400 transition-colors uppercase tracking-wider" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>{t.navServices}</a>
            <a href="#skills" className="text-xs font-semibold text-neutral-300 hover:text-teal-400 transition-colors uppercase tracking-wider" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>{t.navSkills}</a>
            <a href="#portfolio" className="text-xs font-semibold text-neutral-300 hover:text-teal-400 transition-colors uppercase tracking-wider" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>{t.navPortfolio}</a>
            <a href="#rebrand-slider" className="text-xs font-semibold text-neutral-300 hover:text-teal-400 transition-colors uppercase tracking-wider" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>{t.navSlider}</a>
            <a href="#testimonials" className="text-xs font-semibold text-neutral-300 hover:text-teal-400 transition-colors uppercase tracking-wider" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>{t.navTestimonials}</a>
            <a href="#faq" className="text-xs font-semibold text-neutral-300 hover:text-teal-400 transition-colors uppercase tracking-wider" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>{t.navFaq}</a>
            <a href="#contact" className="text-xs font-semibold text-neutral-300 hover:text-teal-400 transition-colors uppercase tracking-wider" onMouseEnter={() => setCursorHovering(true)} onMouseLeave={() => setCursorHovering(false)}>{t.navContact}</a>
          </nav>

          {/* Interactive Toggle & Action Button */}
          <div className="hidden xl:flex items-center gap-3">
            {/* Language Toggle Button */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              id="language-toggle-btn"
              className="px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 hover:border-teal-500/50 hover:bg-neutral-800 text-neutral-300 hover:text-teal-400 font-display font-bold text-xs tracking-wider transition-all cursor-pointer flex items-center gap-1.5"
              aria-label="Toggle Language"
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            >
              <Globe size={14} className="animate-pulse" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            <button
              onClick={toggleTheme}
              id="theme-switcher-btn"
              className="p-2 rounded-xl bg-neutral-900 border border-white/10 hover:border-teal-500/50 hover:bg-neutral-800 text-neutral-300 hover:text-teal-400 transition-all cursor-pointer"
              aria-label="Toggle Theme"
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#contact"
              id="cta-nav-hire"
              className="relative overflow-hidden group px-4 py-2 rounded-xl font-display font-semibold text-xs bg-neutral-100 text-neutral-950 hover:bg-white hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all flex items-center gap-1.5 cursor-pointer"
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            >
              <span>{t.navCtaHire}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 xl:hidden">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="px-2 py-1.5 text-xs font-bold font-display rounded-lg bg-neutral-900 border border-white/10 text-neutral-300"
              aria-label="Toggle Language"
            >
              {lang === 'en' ? 'العربية' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-trigger-btn"
              className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div id="mobile-nav-panel" className="xl:hidden bg-neutral-950 border-b border-white/10 px-4 py-6 space-y-4 animate-fadeIn">
            <nav className="flex flex-col gap-4">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-neutral-300 hover:text-teal-400">{t.navAbout}</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-neutral-300 hover:text-teal-400">{t.navServices}</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-neutral-300 hover:text-teal-400">{t.navSkills}</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-neutral-300 hover:text-teal-400">{t.navPortfolio}</a>
              <a href="#rebrand-slider" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-neutral-300 hover:text-teal-400">{t.navSlider}</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-neutral-300 hover:text-teal-400">{t.navTestimonials}</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-neutral-300 hover:text-teal-400">{t.navFaq}</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-neutral-300 hover:text-teal-400">{t.navContact}</a>
            </nav>
            <div className="pt-4 border-t border-white/5">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center py-3 rounded-xl font-display font-semibold text-sm bg-teal-500 text-white text-center hover:bg-teal-400 transition-colors flex items-center gap-2"
              >
                <span>{t.navCtaHire}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/5 via-neutral-950/0 to-neutral-950 pointer-events-none" />
        
        {/* Floating tech background glow elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-teal-500/5 blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-amber-500/5 blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-start">
              
              {/* Freelancer Status Chip */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 font-mono text-xs uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                <span>{t.heroStatus}</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6 leading-[1.1] glow-text-cyber">
                {t.heroHeadingMain} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-amber-300">
                  {t.heroHeadingGradient}
                </span>
              </h1>

              {/* Title breakdown */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {[(lang === 'ar' ? 'مطور ويب متكامل' : 'Full Stack Developer'), 
                  (lang === 'ar' ? 'خبير أتمتة الذكاء الاصطناعي' : 'AI Automation Expert'), 
                  (lang === 'ar' ? 'مصمم جرافيك' : 'Graphic Designer'), 
                  (lang === 'ar' ? 'مصمم واجهات المستخدم' : 'UI/UX Designer')].map((prof, idx) => (
                  <span 
                    key={idx} 
                    className="px-3.5 py-1.5 rounded-lg bg-neutral-900/60 border border-white/5 text-xs text-neutral-300 font-medium font-mono"
                  >
                    {prof}
                  </span>
                ))}
              </div>

              {/* Strong Introduction */}
              <p className="text-base sm:text-lg text-neutral-400 max-w-xl mb-10 leading-relaxed font-sans">
                {t.heroIntro}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href="#contact"
                  id="hero-cta-hire"
                  className="px-8 py-4 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg hover:shadow-teal-500/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer"
                  onMouseEnter={() => setCursorHovering(true)}
                  onMouseLeave={() => setCursorHovering(false)}
                >
                  <Briefcase size={16} />
                  <span>{t.heroCtaHire}</span>
                </a>
                <a
                  href="#portfolio"
                  id="hero-cta-portfolio"
                  className="px-8 py-4 rounded-xl font-display font-bold text-sm bg-neutral-900 border border-white/10 hover:border-teal-500/40 hover:bg-neutral-800 text-white transition-all flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer"
                  onMouseEnter={() => setCursorHovering(true)}
                  onMouseLeave={() => setCursorHovering(false)}
                >
                  <Eye size={16} />
                  <span>{t.heroCtaPortfolio}</span>
                </a>
                <a
                  href="#contact"
                  id="hero-cta-contact"
                  className="px-8 py-4 rounded-xl font-display font-bold text-sm bg-transparent hover:bg-neutral-900/50 text-neutral-300 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                  onMouseEnter={() => setCursorHovering(true)}
                  onMouseLeave={() => setCursorHovering(false)}
                >
                  <Mail size={16} />
                  <span>{t.heroCtaContact}</span>
                </a>
              </div>

              {/* Client Platforms links */}
              <div className="mt-12 flex items-center gap-6 text-xs text-neutral-500 font-mono">
                <span>{t.heroHireOn}</span>
                <span className="hover:text-teal-400 transition-colors">LINKEDIN</span>
                <span className="hover:text-teal-400 transition-colors">UPWORK</span>
                <span className="hover:text-teal-400 transition-colors">FIVERR</span>
              </div>
            </div>

            {/* Hero Right: Portrait & Elegant Geometric Layout */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                
                {/* Visual Glassmorphic rings behind portrait */}
                <div className="absolute inset-0 rounded-full border border-teal-500/10 animate-spin" style={{ animationDuration: '30s' }} />
                <div className="absolute inset-4 rounded-full border border-amber-500/10 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                
                {/* Background glow shadow */}
                <div className="absolute inset-10 rounded-full bg-teal-500/20 blur-3xl pointer-events-none" />

                {/* Main frame container */}
                <div className="absolute inset-2 rounded-3xl overflow-hidden glass-panel-gold border border-amber-500/20 p-2 shadow-2xl">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                    <img
                      src={assets.portrait}
                      alt="Fars Alblbysy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Dark gradient overlay on photo bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90" />
                    
                    {/* Mini Badge on Portrait overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-start">
                      <p className="text-xs font-mono text-amber-400 uppercase tracking-widest leading-none mb-1">
                        {t.portraitName}
                      </p>
                      <p className="text-[10px] text-neutral-400 leading-none">
                        {t.portraitDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute -top-4 -right-4 bg-neutral-900 border border-white/10 p-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce text-start" style={{ animationDuration: '4s' }}>
                  <div className="p-2 rounded-lg bg-teal-500/20 text-teal-400">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 block font-mono">{t.heroBadgeAi}</span>
                    <span className="text-xs font-bold text-white block">{t.heroBadgeAiVal}</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-neutral-900 border border-white/10 p-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce text-start" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                    <Palette size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 block font-mono">{t.heroBadgeDesign}</span>
                    <span className="text-xs font-bold text-white block">{t.heroBadgeDesignVal}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics Section (Counter numbers) */}
      <section id="statistics" className="relative py-12 border-t border-b border-white/5 bg-neutral-950/60 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="flex flex-col items-center justify-center text-center p-4">
              <span className="font-display font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 glow-text-cyber mb-1">
                {experienceCount}+
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">{t.statsExp}</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <span className="font-display font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 glow-text-gold mb-1">
                {projectsCount}+
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">{t.statsProj}</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <span className="font-display font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 glow-text-cyber mb-1">
                {clientsCount}+
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">{t.statsClients}</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-4 border-l border-white/5">
              <span className="font-display font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 glow-text-gold mb-1">
                {brandsCount}+
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">{t.statsBrands}</span>
            </div>

          </div>
        </div>
      </section>

      {/* About Me Section with Reveal Animation */}
      <motion.section 
        id="about" 
        className="relative py-24 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-400 font-mono text-xs tracking-widest uppercase block mb-3">{t.aboutPretitle}</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight glow-text-cyber">
              {t.aboutTitle}
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Story text */}
            <div className="space-y-6 text-start">
              <h3 className="text-xl font-display font-bold text-white mb-4">
                {t.aboutJourneyTitle}
              </h3>
              <p className="text-neutral-400 font-sans leading-relaxed text-sm sm:text-base">
                {t.aboutJourneyP1}
              </p>
              <p className="text-neutral-400 font-sans leading-relaxed text-sm sm:text-base">
                {t.aboutJourneyP2}
              </p>
              <p className="text-neutral-400 font-sans leading-relaxed text-sm sm:text-base">
                {t.aboutJourneyP3}
              </p>

              {/* Key Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-teal-500/15 text-teal-400 mt-1">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{t.aboutValue1Title}</h4>
                    <p className="text-xs text-neutral-400">{t.aboutValue1Desc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-amber-500/15 text-amber-400 mt-1">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{t.aboutValue2Title}</h4>
                    <p className="text-xs text-neutral-400">{t.aboutValue2Desc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-amber-500/15 text-amber-400 mt-1">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{t.aboutValue3Title}</h4>
                    <p className="text-xs text-neutral-400">{t.aboutValue3Desc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-teal-500/15 text-teal-400 mt-1">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{t.aboutValue4Title}</h4>
                    <p className="text-xs text-neutral-400">{t.aboutValue4Desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-6 text-start">
              <h3 className="text-lg font-display font-bold text-white flex items-center gap-2 pb-4 border-b border-white/5">
                <Briefcase className="text-teal-400" size={18} />
                <span>{t.aboutTimelineTitle}</span>
              </h3>

              <div className="relative border-l-2 border-teal-500/20 pl-6 space-y-8 py-2">
                
                {/* Timeline Item 1 */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-teal-400 group-hover:scale-125 transition-transform" />
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                    <span className="font-mono text-xs text-teal-400 font-semibold uppercase">{t.aboutTimelineItem1Role}</span>
                    <span className="text-xs font-mono text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded border border-white/5">2023 - Present</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{t.aboutTimelineItem1Company}</h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {t.aboutTimelineItem1Desc}
                  </p>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-amber-400 group-hover:scale-125 transition-transform" />
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                    <span className="font-mono text-xs text-amber-400 font-semibold uppercase">{t.aboutTimelineItem2Role}</span>
                    <span className="text-xs font-mono text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded border border-white/5">2021 - 2023</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{t.aboutTimelineItem2Company}</h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {t.aboutTimelineItem2Desc}
                  </p>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-teal-400 group-hover:scale-125 transition-transform" />
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                    <span className="font-mono text-xs text-teal-400 font-semibold uppercase">{t.aboutTimelineItem3Role}</span>
                    <span className="text-xs font-mono text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded border border-white/5">2020 - 2021</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{t.aboutTimelineItem3Company}</h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {t.aboutTimelineItem3Desc}
                  </p>
                </div>

              </div>

              <div className="pt-4 flex justify-center">
                <a 
                  href="#contact" 
                  className="text-xs font-mono font-semibold text-teal-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>{t.aboutTimelineCta}</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* Services Section with Reveal Animation */}
      <motion.section 
        id="services" 
        className="relative py-24 bg-neutral-900/40 border-t border-b border-white/5 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-mono text-xs tracking-widest uppercase block mb-3">{t.servicesPretitle}</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight glow-text-gold">
              {t.servicesTitle}
            </h2>
            <p className="text-neutral-400 text-sm mt-3 max-w-xl mx-auto">
              {t.servicesSubtitle}
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-teal-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Service 1 */}
            <div 
              className="glass-panel p-6 rounded-2xl border border-white/5 glass-card-hover flex flex-col items-start text-start"
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            >
              <div className="p-3.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-6">
                <Code size={24} />
              </div>
              <h3 className="text-base font-display font-bold text-white mb-2">{t.service1Title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                {t.service1Desc}
              </p>
              <span className="mt-auto text-xs font-mono text-teal-400 flex items-center gap-1">
                <span>{t.servicesLearnMore}</span> &rarr;
              </span>
            </div>

            {/* Service 2 */}
            <div 
              className="glass-panel p-6 rounded-2xl border border-white/5 glass-card-hover flex flex-col items-start text-start"
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            >
              <div className="p-3.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-6">
                <Layers size={24} />
              </div>
              <h3 className="text-base font-display font-bold text-white mb-2">{t.service2Title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                {t.service2Desc}
              </p>
              <span className="mt-auto text-xs font-mono text-amber-400 flex items-center gap-1">
                <span>{t.servicesLearnMore}</span> &rarr;
              </span>
            </div>

            {/* Service 3 */}
            <div 
              className="glass-panel p-6 rounded-2xl border border-white/5 glass-card-hover flex flex-col items-start text-start"
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            >
              <div className="p-3.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-6">
                <Cpu size={24} />
              </div>
              <h3 className="text-base font-display font-bold text-white mb-2">{t.service3Title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                {t.service3Desc}
              </p>
              <span className="mt-auto text-xs font-mono text-teal-400 flex items-center gap-1">
                <span>{t.servicesLearnMore}</span> &rarr;
              </span>
            </div>

            {/* Service 4 */}
            <div 
              className="glass-panel p-6 rounded-2xl border border-white/5 glass-card-hover flex flex-col items-start text-start"
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            >
              <div className="p-3.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-6">
                <Palette size={24} />
              </div>
              <h3 className="text-base font-display font-bold text-white mb-2">{t.service4Title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                {t.service4Desc}
              </p>
              <span className="mt-auto text-xs font-mono text-amber-400 flex items-center gap-1">
                <span>{t.servicesLearnMore}</span> &rarr;
              </span>
            </div>

          </div>

          {/* Quick statement */}
          <div className="mt-12 text-center text-xs font-mono text-neutral-500 uppercase tracking-widest">
            {t.servicesFooter}
          </div>

        </div>
      </motion.section>

      {/* Interactive Skills Visualization Dashboard with Reveal Animation */}
      <motion.section 
        id="skills" 
        className="relative py-24 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-400 font-mono text-xs tracking-widest uppercase block mb-3">{t.skillsPretitle}</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight glow-text-cyber">
              {t.skillsTitle}
            </h2>
            <p className="text-neutral-400 text-sm mt-3">
              {t.skillsSubtitle}
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Dashboard Control Category Buttons */}
          <div className="flex justify-center gap-3 mb-12 max-w-lg mx-auto p-1.5 rounded-2xl bg-neutral-900/80 border border-white/5">
            <button
              onClick={() => setActiveSkillCategory('dev')}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${activeSkillCategory === 'dev' ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            >
              <Code size={16} />
              <span>{t.skillsTabDev}</span>
            </button>
            <button
              onClick={() => setActiveSkillCategory('design')}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${activeSkillCategory === 'design' ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            >
              <Palette size={16} />
              <span>{t.skillsTabDesign}</span>
            </button>
            <button
              onClick={() => setActiveSkillCategory('ai')}
              className={`flex-1 py-3 px-4 rounded-xl font-display font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${activeSkillCategory === 'ai' ? 'bg-gradient-to-r from-teal-500 via-emerald-500 to-amber-500 text-white shadow-lg' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            >
              <Cpu size={16} />
              <span>{t.skillsTabAi}</span>
            </button>
          </div>

          {/* Skill Content Grid */}
          <div className="glass-panel p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-3xl pointer-events-none" />

            {/* Development Skills Dashboard */}
            {activeSkillCategory === 'dev' && (
              <div className="space-y-6 animate-fadeIn text-start">
                <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">{t.skillsDevHeaderTitle}</h3>
                    <p className="text-xs text-neutral-400">{t.skillsDevHeaderSubtitle}</p>
                  </div>
                  <span className="font-mono text-xs text-teal-400 font-semibold px-2.5 py-1 rounded bg-teal-500/10 border border-teal-500/20">{t.skillsDevHeaderBadge}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: 'TypeScript', level: 95, color: 'bg-teal-400', desc: lang === 'ar' ? 'أمان تام للأنواع، مكونات مرنة قابلة للتطوير، ميزات عامة متقدمة.' : 'Type safety, scalable components, advanced generics.' },
                    { name: 'React & Next.js', level: 95, color: 'bg-teal-400', desc: lang === 'ar' ? 'تحسين التقديم على الخادم وتحسين أداء الواجهات وسلاسة التنقل.' : 'SSR, Client components optimization, premium layout transitions.' },
                    { name: 'Node.js & Express.js', level: 90, color: 'bg-teal-400', desc: lang === 'ar' ? 'واجهات برمجية مخصصة، برمجيات التحقق من الهوية، معالجة البيانات والملفات.' : 'Custom APIs, authentication middleware, file streams.' },
                    { name: 'HTML5 & CSS3 / Tailwind', level: 98, color: 'bg-teal-400', desc: lang === 'ar' ? 'تصاميم متجاوبة مرنة، هويات بصرية فاخرة، تأثيرات زجاجية راقية.' : 'Fluid responsive designs, luxury transitions, glassmorphism.' },
                    { name: 'MongoDB / NoSQL', level: 85, color: 'bg-teal-400', desc: lang === 'ar' ? 'مخططات مخصصة، معالجة البيانات، استعلامات التجميع عالية الأداء.' : 'Custom schema pipelines, indexing, high performance aggregate queries.' },
                    { name: 'MySQL / Relational DB', level: 85, color: 'bg-teal-400', desc: lang === 'ar' ? 'هندسة علاقات الجداول، استعلامات ربط محسنة، اتصالات برمجية مستقرة.' : 'Relational design, optimized JOIN queries, persistent connections.' },
                  ].map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-white">{skill.name}</span>
                        <span className="font-mono text-teal-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-white/5">
                        <div 
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000`} 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-neutral-400">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Design Skills Dashboard */}
            {activeSkillCategory === 'design' && (
              <div className="space-y-6 animate-fadeIn text-start">
                <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">{t.skillsDesignHeaderTitle}</h3>
                    <p className="text-xs text-neutral-400">{t.skillsDesignHeaderSubtitle}</p>
                  </div>
                  <span className="font-mono text-xs text-amber-400 font-semibold px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20">{t.skillsDesignHeaderBadge}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: 'Figma', level: 95, color: 'bg-amber-400', desc: lang === 'ar' ? 'نماذج أولية تفاعلية عالية الدقة، إطارات تصميم ذكية متقدمة.' : 'Interactive high-fidelity prototypes, advanced layout frames, dev-handoff.' },
                    { name: 'Adobe Photoshop', level: 92, color: 'bg-amber-400', desc: lang === 'ar' ? 'تعديل الصور الفاخرة، معالجة الإضاءة، وإخراج البوسترات الإعلانية.' : 'Luxury photo manipulation, lighting restoration, poster rendering.' },
                    { name: 'Adobe Illustrator', level: 90, color: 'bg-amber-400', desc: lang === 'ar' ? 'تصميم لوجو هندسي موجه، كتيبات إرشادية ممتازة، ملفات جاهزة للطباعة.' : 'Vector logo architectures, layout geometric blueprints, print-ready files.' },
                    { name: 'Branding & Logo Design', level: 95, color: 'bg-amber-400', desc: lang === 'ar' ? 'تصميم هويات بصرية فاخرة، متميزة، ومناسبة للشركات الكبرى والمطاعم.' : 'Luxury, minimal, high-end commercial corporate logo layouts.' },
                    { name: 'Restaurant Menus & Posters', level: 95, color: 'bg-amber-400', desc: lang === 'ar' ? 'رسومات مخصصة عالية التحويل، بوسترات تسويقية، وكتيبات الشركات.' : 'Highly customized graphics, marketing posters, corporate brochures.' },
                    { name: 'Canva & Social Media Creatives', level: 98, color: 'bg-amber-400', desc: lang === 'ar' ? 'تصميم رسومي عالي التحويل لمنصات إنستغرام، لينكد إن، وفايفر.' : 'High conversion graphics optimized for Instagram, LinkedIn and Fiverr.' },
                  ].map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-white">{skill.name}</span>
                        <span className="font-mono text-amber-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-white/5">
                        <div 
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000`} 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-neutral-400">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI & Automation Skills Dashboard */}
            {activeSkillCategory === 'ai' && (
              <div className="space-y-6 animate-fadeIn text-start">
                <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">{t.skillsAiHeaderTitle}</h3>
                    <p className="text-xs text-neutral-400">{t.skillsAiHeaderSubtitle}</p>
                  </div>
                  <span className="font-mono text-xs text-teal-400 font-semibold px-2.5 py-1 rounded bg-teal-500/10 border border-teal-500/20">{t.skillsAiHeaderBadge}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: 'AI Autonomous Agents', level: 90, color: 'bg-gradient-to-r from-teal-400 to-amber-400', desc: lang === 'ar' ? 'وكلاء موجهين بالأهداف، أنظمة التقييم والتعليقات، مخازن ذاكرة.' : 'Goal-oriented agents, loop feedback systems, memory buffers.' },
                    { name: 'Workflow Automation', level: 95, color: 'bg-gradient-to-r from-teal-400 to-amber-400', desc: lang === 'ar' ? 'أتمتة العمليات بواسطة زابير، سكربتات Node.js مخصصة، وجدول زمني كرون.' : 'Zapier, custom Node.js automation processes, scheduled cron actions.' },
                    { name: 'API Integrations', level: 95, color: 'bg-gradient-to-r from-teal-400 to-amber-400', desc: lang === 'ar' ? 'بناء خطوط اتصال برمجية متكاملة بين Shopify وStripe والبريد والعملاء.' : 'Building seamless pipelines between Shopify, Stripe, CRM, Gmail, etc.' },
                    { name: 'Gemini SDK & NLP', level: 92, color: 'bg-gradient-to-r from-teal-400 to-amber-400', desc: lang === 'ar' ? 'تحليل المخرجات المنظمة، استدعاء الدوال البرمجية، وتوجيه الأنظمة.' : 'Structured outputs parsing, function-calling, system routing directives.' },
                    { name: 'Chatbots Design', level: 95, color: 'bg-gradient-to-r from-teal-400 to-amber-400', desc: lang === 'ar' ? 'تطوير ذاكرة سياقية للمحادثات، توجيه الحالة، وحلول بديلة ذكية.' : 'Contextual memory, stateful conversation routing, fallback handles.' },
                    { name: 'Business Automation Consulting', level: 90, color: 'bg-gradient-to-r from-teal-400 to-amber-400', desc: lang === 'ar' ? 'فحص وتحليل نقاط الضعف اليدوية في الشركات وبناء حلول أتمتة متكاملة.' : 'Auditing workflow friction and setting up automatic solutions.' },
                  ].map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-white">{skill.name}</span>
                        <span className="font-mono text-teal-300 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-white/5">
                        <div 
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000`} 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-neutral-400">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </motion.section>

      {/* Portfolio Showcase Section with Reveal Animation */}
      <motion.section 
        id="portfolio" 
        className="relative py-24 bg-neutral-900/10 border-t border-white/5 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-mono text-xs tracking-widest uppercase block mb-3">{t.portfolioPretitle}</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight glow-text-gold">
              {t.portfolioTitle}
            </h2>
            <p className="text-neutral-400 text-sm mt-3">
              {t.portfolioSubtitle}
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-teal-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Filtering controls */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
            {[
              { id: 'all', label: t.portfolioTabAll },
              { id: 'web', label: t.portfolioTabWeb },
              { id: 'ai', label: t.portfolioTabAi },
              { id: 'graphic', label: t.portfolioTabGraphic },
              { id: 'uiux', label: t.portfolioTabUiux },
              { id: 'branding', label: t.portfolioTabBranding }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${activeTab === tab.id ? 'bg-neutral-100 text-neutral-950 font-semibold shadow-lg' : 'bg-neutral-900/60 text-neutral-400 hover:text-white border border-white/5'}`}
                onMouseEnter={() => setCursorHovering(true)}
                onMouseLeave={() => setCursorHovering(false)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Project masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className="group relative rounded-2xl overflow-hidden glass-panel border border-white/5 hover:border-teal-500/30 transition-all duration-300 flex flex-col shadow-lg cursor-pointer h-full text-start"
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setCursorHovering(true)}
                onMouseLeave={() => setCursorHovering(false)}
              >
                
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category chip */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[10px] font-mono uppercase tracking-wider text-teal-400 font-bold">
                    {project.category === 'web' && t.portfolioTabWeb}
                    {project.category === 'ai' && t.portfolioTabAi}
                    {project.category === 'graphic' && t.portfolioTabGraphic}
                    {project.category === 'uiux' && t.portfolioTabUiux}
                    {project.category === 'branding' && t.portfolioTabBranding}
                  </div>

                  {/* Shimmer layout */}
                  <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Text Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-base font-display font-bold text-white group-hover:text-teal-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Mini pills */}
                  <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                    {project.tools.slice(0, 3).map((tool, idx) => (
                      <span key={idx} className="text-[9px] font-mono bg-neutral-900 px-2 py-0.5 rounded text-neutral-300 border border-white/5">
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-[9px] font-mono text-neutral-500">+{project.tools.length - 3}</span>
                    )}
                  </div>

                  {/* Bottom details display */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-teal-400 font-mono font-medium">
                    <span>{t.portfolioInspect}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </motion.section>

      {/* Before/After comparison slider (For Graphic Design / Branding) with Reveal Animation */}
      <motion.section 
        id="rebrand-slider" 
        className="relative py-24 bg-neutral-950 z-10 border-t border-b border-white/5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 text-start">
              <span className="text-amber-400 font-mono text-xs tracking-widest uppercase block mb-3">{t.sliderPretitle}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight glow-text-gold">
                {t.sliderTitle}
              </h2>
              <div className="w-12 h-1 bg-amber-500 my-4 rounded-full" />
              
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {t.sliderDesc}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-amber-400 text-xs font-bold font-mono">
                    B
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white block">{t.sliderBeforeTitle}</span>
                    <span className="text-xs text-neutral-400 block">{t.sliderBeforeDesc}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center text-teal-400 text-xs font-bold font-mono">
                    A
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white block">{t.sliderAfterTitle}</span>
                    <span className="text-xs text-neutral-400 block">{t.sliderAfterDesc}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4 text-xs font-mono text-neutral-500 bg-neutral-900/60 p-3.5 rounded-xl border border-white/5 max-w-sm">
                <span className="animate-ping w-2 h-2 rounded-full bg-amber-400" />
                <span>{t.sliderNotice}</span>
              </div>
            </div>

            {/* Right Comparison Slider Column */}
            <div className="lg:col-span-7 flex justify-center">
              <div 
                ref={sliderContainerRef}
                className="relative overflow-hidden w-full max-w-2xl h-[320px] sm:h-[420px] select-none rounded-2xl border border-white/10 shadow-2xl bg-neutral-900 cursor-ew-resize"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                
                {/* AFTER IMAGE (Fully rendered - background) */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={assets.branding}
                    alt="After Premium Luxury Brand Finish"
                    className="w-full h-full object-cover pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/75 px-3 py-1 rounded-lg text-[10px] font-mono text-teal-400 font-semibold border border-teal-500/20">
                    {t.sliderAfterBadge}
                  </div>
                </div>

                {/* BEFORE IMAGE (Monochrome Blueprint / Wireframe - overlay width controlled by sliderPos) */}
                <div 
                  className="absolute inset-0 h-full overflow-hidden border-r border-amber-500/30"
                  style={{ width: `${sliderPos}%` }}
                >
                  <div className="absolute inset-0 w-[640px] sm:w-[840px] h-full" style={{ width: sliderContainerRef.current?.getBoundingClientRect().width }}>
                    <img
                      src={assets.branding}
                      alt="Before Geometric Wireframe Blueprint"
                      className="w-full h-full object-cover filter grayscale(100%) brightness(50%) contrast(150%) sepia(20%) saturate(20%) pointer-events-none"
                      style={{ filter: 'grayscale(100%) brightness(30%) contrast(180%) invert(5%)' }}
                      referrerPolicy="no-referrer"
                    />
                    {/* Abstract Blueprint Grid overlay lines on the before image */}
                    <div className="absolute inset-0 bg-studio-radial opacity-40 pointer-events-none" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(224,176,52,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(224,176,52,0.15)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/75 px-3 py-1 rounded-lg text-[10px] font-mono text-amber-400 font-semibold border border-amber-500/20">
                    {t.sliderBeforeBadge}
                  </div>
                </div>

                {/* Slider Handle (Line + Circle Button) */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-amber-500/80 cursor-ew-resize flex items-center justify-center"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border-2 border-amber-500 flex items-center justify-center shadow-2xl text-amber-500 hover:scale-110 active:scale-95 transition-transform select-none">
                    <ChevronLeft size={14} className="animate-pulse" />
                    <ChevronRight size={14} className="animate-pulse" />
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </motion.section>

      {/* Testimonials Section with Reveal Animation */}
      <motion.section 
        id="testimonials" 
        className="relative py-24 z-10 bg-neutral-900/10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-400 font-mono text-xs tracking-widest uppercase block mb-3">{t.testimonialsPretitle}</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight glow-text-cyber">
              {t.testimonialsTitle}
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Testimonial slider view */}
          <div className="max-w-4xl mx-auto relative px-4">
            <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 relative overflow-hidden shadow-2xl">
              
              {/* Quotation Icon decoration */}
              <div className="absolute top-8 right-8 text-neutral-800 opacity-20 pointer-events-none font-display text-8xl font-black">
                &ldquo;
              </div>

              <div className="space-y-6">
                
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">&bull;</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-base sm:text-lg text-neutral-300 italic leading-relaxed font-sans font-light text-start">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </p>

                {/* Author profile */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5 text-start">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-xl object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-xs text-neutral-400 font-mono">
                      {testimonials[currentTestimonial].role} &bull; <span className="text-teal-400">{testimonials[currentTestimonial].company}</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Slider Navigation controls */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 hover:border-teal-500/40 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous Testimonial"
                onMouseEnter={() => setCursorHovering(true)}
                onMouseLeave={() => setCursorHovering(false)}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 hover:border-teal-500/40 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Testimonial"
                onMouseEnter={() => setCursorHovering(true)}
                onMouseLeave={() => setCursorHovering(false)}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </motion.section>

      {/* Accordion FAQ Section with Reveal Animation */}
      <motion.section 
        id="faq" 
        className="relative py-24 bg-neutral-900/40 border-t border-b border-white/5 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-400 font-mono text-xs tracking-widest uppercase block mb-3">{t.faqPretitle}</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight glow-text-gold">
              {t.faqTitle}
            </h2>
            <p className="text-neutral-400 text-sm mt-3">
              {t.faqSubtitle}
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-teal-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Accordion Wrapper */}
          <div className="space-y-4">
            {faqsList.map((faq) => {
              const isOpen = openFaqId === faq.id;
              const question = lang === 'ar' ? faq.question_ar : faq.question_en;
              const answer = lang === 'ar' ? faq.answer_ar : faq.answer_en;
              return (
                <div 
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden glass-panel ${isOpen ? 'border-amber-500/30 bg-neutral-900/80' : 'border-white/5 bg-neutral-950/20'}`}
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full py-5 px-6 flex items-center justify-between text-start gap-4 cursor-pointer"
                    onMouseEnter={() => setCursorHovering(true)}
                    onMouseLeave={() => setCursorHovering(false)}
                  >
                    <span className={`text-sm sm:text-base font-display font-bold transition-colors duration-200 ${isOpen ? 'text-amber-400' : 'text-white hover:text-amber-300'}`}>
                      {question}
                    </span>
                    <span className={`p-1.5 rounded-lg border transition-all ${isOpen ? 'bg-amber-500/10 border-amber-500/20 text-amber-400 rotate-180' : 'bg-neutral-900 border-white/5 text-neutral-400'}`}>
                      <ChevronDown size={16} />
                    </span>
                  </button>
                  
                  {/* Expanding content box */}
                  <div 
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 border-t border-white/5' : 'max-h-0 opacity-0 pointer-events-none'}`}
                  >
                    <div className="p-6 text-xs sm:text-sm text-neutral-300 leading-relaxed text-start">
                      {answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </motion.section>

      {/* Contact Section with Reveal Animation */}
      <motion.section 
        id="contact" 
        className="relative py-24 border-t border-white/5 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-teal-500/5 via-neutral-950/0 to-neutral-950 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Info (Left) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-teal-400 font-mono text-xs tracking-widest uppercase block mb-3">{t.contactPretitle}</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight glow-text-cyber mb-4">
                  {t.contactTitle}
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mb-6 rounded-full" />
                <p className="text-neutral-400 text-sm leading-relaxed mb-8 font-sans max-w-md">
                  {t.contactDesc}
                </p>

                {/* Info Blocks */}
                <div className="space-y-6">
                  
                  {/* Email */}
                  <a 
                    href="mailto:farsalblbysy3@gmail.com" 
                    className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-teal-500/30 transition-all max-w-sm group cursor-pointer text-start"
                    onMouseEnter={() => setCursorHovering(true)}
                    onMouseLeave={() => setCursorHovering(false)}
                  >
                    <div className="p-3.5 rounded-lg bg-teal-500/10 text-teal-400 group-hover:bg-teal-500/20 transition-colors">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 block uppercase">{t.contactEmailLbl}</span>
                      <span className="text-xs sm:text-sm font-semibold text-white block">farsalblbysy3@gmail.com</span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a 
                    href="tel:+201553916338" 
                    className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-amber-500/30 transition-all max-w-sm group cursor-pointer text-start"
                    onMouseEnter={() => setCursorHovering(true)}
                    onMouseLeave={() => setCursorHovering(false)}
                  >
                    <div className="p-3.5 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 block uppercase">{t.contactPhoneLbl}</span>
                      <span className="text-xs sm:text-sm font-semibold text-white block">+20 1553916338</span>
                    </div>
                  </a>

                  {/* LinkedIn / Github */}
                  <div className="flex items-center gap-3 pt-2">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 hover:border-teal-500/40 flex items-center justify-center text-neutral-400 hover:text-teal-400 transition-colors cursor-pointer"
                      aria-label="GitHub Profile"
                      onMouseEnter={() => setCursorHovering(true)}
                      onMouseLeave={() => setCursorHovering(false)}
                    >
                      <Github size={16} />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 hover:border-teal-500/40 flex items-center justify-center text-neutral-400 hover:text-teal-400 transition-colors cursor-pointer"
                      aria-label="LinkedIn Profile"
                      onMouseEnter={() => setCursorHovering(true)}
                      onMouseLeave={() => setCursorHovering(false)}
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>

                </div>
              </div>

              {/* Notice text */}
              <div className="mt-12 text-xs font-mono text-neutral-500 leading-none">
                {t.contactNotice}
              </div>
            </div>

            {/* Interactive Contact Form (Right) */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
                <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-2">
                  <Zap className="text-amber-400" size={18} />
                  <span>{t.contactFormTitle}</span>
                </h3>

                {submitSuccess && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-3 animate-fadeIn text-start">
                    <CheckCircle size={18} />
                    <div>
                      <span className="font-bold block">{t.contactSuccessTitle}</span>
                      <span className="text-xs text-emerald-400/80">{t.contactSuccessSub}</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleContactSubmit} className="space-y-4 text-start">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">{t.contactFormName}</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-500/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">{t.contactFormEmail}</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-500/50 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">{t.contactFormSubject}</label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-500/50 transition-colors"
                      placeholder="AI Workflow Automation / New Website Project"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">{t.contactFormMessage}</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-teal-500/50 transition-colors resize-none"
                      placeholder="Describe your project, timeline and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-teal-500 via-emerald-500 to-amber-500 text-white flex items-center justify-center gap-2 hover:opacity-95 transition-opacity disabled:opacity-50 cursor-pointer"
                    onMouseEnter={() => setCursorHovering(true)}
                    onMouseLeave={() => setCursorHovering(false)}
                  >
                    {isSubmitting ? (
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <Send size={14} />
                        <span>{t.contactFormBtn}</span>
                      </>
                    )}
                  </button>
                </form>

              </div>
            </div>

          </div>

        </div>
      </motion.section>

      {/* Case Study Full Detail Modal */}
      {selectedProject && (
        <div id="case-study-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-neutral-900 border border-white/10 max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative text-start">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-black/50 text-neutral-400 hover:text-white transition-colors border border-white/15 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            {/* Modal Image banner */}
            <div className="relative h-48 sm:h-64 bg-neutral-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest px-2 py-0.5 rounded bg-teal-500/15 border border-teal-500/35">
                  {selectedProject.category === 'web' ? t.portfolioTabWeb.toUpperCase() : selectedProject.category === 'ai' ? t.portfolioTabAi.toUpperCase() : selectedProject.category === 'graphic' ? t.portfolioTabGraphic.toUpperCase() : selectedProject.category === 'uiux' ? t.portfolioTabUiux.toUpperCase() : t.portfolioTabBranding.toUpperCase()} {t.modalPretitleSuffix.toUpperCase()}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-2">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Info */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-mono uppercase text-neutral-500 tracking-wider mb-2">{t.modalMission}</h4>
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  {selectedProject.longDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-neutral-950 p-4 rounded-xl border border-white/5">
                  <h4 className="text-xs font-mono uppercase text-teal-400 tracking-wider mb-2">{t.modalTools}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tools.map((tool, idx) => (
                      <span key={idx} className="text-[10px] font-mono bg-neutral-900 px-2.5 py-0.5 rounded text-white border border-white/5">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-neutral-950 p-4 rounded-xl border border-white/5">
                  <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider mb-2">{t.modalMetrics}</h4>
                  <p className="text-xs text-neutral-300 font-semibold leading-relaxed">
                    {selectedProject.results}
                  </p>
                </div>
              </div>

              {/* Actions inside Modal */}
              <div className="pt-4 border-t border-white/5 flex gap-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    className="flex-1 py-3 rounded-xl bg-neutral-100 text-neutral-950 hover:bg-white font-display font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 transition-all"
                  >
                    <ExternalLink size={14} />
                    <span>{t.modalLive}</span>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    className="flex-1 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-display font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 transition-all border border-white/5"
                  >
                    <Github size={14} />
                    <span>{t.modalSource}</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Premium Footer */}
      <footer id="premium-footer" className="bg-neutral-950 border-t border-white/5 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-12 border-b border-white/5">
            
            {/* Logo area */}
            <div className="text-start">
              <span className="font-display font-bold text-xl tracking-wide text-white block">
                {t.portraitName}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mt-1">
                {t.footerSub}
              </span>
            </div>

            {/* Quick list of direct access channels */}
            <div className="flex justify-center gap-8 text-xs font-mono text-neutral-400">
              <a href="#about" className="hover:text-teal-400 transition-colors">{t.navAbout}</a>
              <a href="#services" className="hover:text-teal-400 transition-colors">{t.navServices}</a>
              <a href="#skills" className="hover:text-teal-400 transition-colors">{t.navSkills}</a>
              <a href="#portfolio" className="hover:text-teal-400 transition-colors">{t.navPortfolio}</a>
            </div>

            {/* Social channels (Right) */}
            <div className="flex md:justify-end gap-3 justify-start">
              <a href="#" className="w-9 h-9 rounded-lg bg-neutral-900 border border-white/10 hover:border-teal-500/40 flex items-center justify-center text-neutral-400 hover:text-teal-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-neutral-900 border border-white/10 hover:border-teal-500/40 flex items-center justify-center text-neutral-400 hover:text-teal-400 transition-colors" aria-label="GitHub">
                <Github size={14} />
              </a>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-neutral-500 gap-4">
            <div className="text-start">
              {t.footerCopy}
            </div>
            <div className="flex gap-4">
              <span className="hover:text-white transition-colors cursor-pointer">{t.footerPrivacy}</span>
              <span className="hover:text-white transition-colors cursor-pointer">{t.footerTerms}</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
