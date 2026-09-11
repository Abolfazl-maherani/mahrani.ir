(() => {
  const ROLE_KEY = "mahrani-recruiter-role";
  const LANG_KEY = "mahrani-lang";
  const VALID_ROLES = ["frontend", "fullstack", "vue-nuxt", "all"];
  const VALID_LANGS = ["fa", "en"];

  const COPY = {
    name: { fa: "ابوالفضل ماهرانی", en: "Abolfazl Maherani" },
    jobTitle: { fa: "توسعه‌دهنده ارشد فرانت‌اند", en: "Senior Frontend Developer" },
    location: { fa: "اصفهان، ایران", en: "Isfahan, Iran" },
    birthday: { fa: "۱۵ اردیبهشت ۱۳۸۱", en: "5 May 2002" },
    aboutTitle: { fa: "درباره ی من", en: "About me" },
    about: {
      fa: "درود فراوان.<br>من <b>ابوالفضل ماهرانی</b> هستم؛ مهندس نرم‌افزار و توسعه‌دهنده ارشد فرانت‌اند. تفکر مهندسی، حل مسائل پیچیده، بهینه‌سازی پرفورمنس پروژه‌ها و طراحی معماری‌های مقیاس‌پذیر در دنیای وب، بخش اصلی کیت تخصصی من را تشکیل می‌دهند.<br>تمرکز ویژه من روی توسعه زیرساخت‌های کلاینت با <b>Vue.js (Composition API)</b> و <b>Nuxt.js</b> است. در کنار آن، به واسطه تسلط بر مفاهیم شبکه، محیط‌های لینوکسی و داکر، کدهای فرانت‌اند را با دیدگاهی جامع نسبت به کل زیرساخت و سیستم مهندسی می‌کنم.<br>همواره مشتاق مواجهه با چالش‌های بزرگ فنی و پیاده‌سازی راه‌حل‌های مدرن در تیم‌های پویا هستم.<br><b>ممنون از نگاهتون❤️</b>",
      en: "Hello.<br>I am <b>Abolfazl Maherani</b>, a software engineer and senior frontend developer. Engineering thinking, solving hard problems, performance work, and scalable web architecture are the core of what I do.<br>I focus on client-side systems with <b>Vue.js (Composition API)</b> and <b>Nuxt.js</b>. With a solid background in networking, Linux, and Docker, I build frontend with the rest of the stack in mind.<br>I enjoy hard technical problems and shipping modern solutions in fast-moving teams.<br><b>Thanks for reading.</b>",
    },
    recruiterTitle: { fa: "دنبال چه نوع برنامه‌نویسی هستید؟", en: "What kind of developer are you hiring?" },
    recruiterHint: {
      fa: "نقش مورد نظرتان را انتخاب کنید تا مهارت‌ها، تجربه‌ها و پروژه‌های مرتبط در اولویت نمایش داده شوند.",
      en: "Pick a role to surface the most relevant skills, experience, and projects first.",
    },
    skillsTitle: { fa: "مهارت‌های مرتبط", en: "Relevant skills" },
    experienceTitle: { fa: "تجربه‌های مرتبط", en: "Relevant experience" },
    projectsTitle: { fa: "پروژه‌های پیشنهادی", en: "Featured projects" },
    recsTitle: { fa: "چه کسانی من رو پیشنهاد میکنند", en: "Recommendations" },
    relevant: { fa: "مرتبط", en: "Match" },
    more: { fa: "بیشتر", en: "More" },
    less: { fa: "خلاصه", en: "Less" },
  };

  const ROLES = [
    { id: "frontend", label: "Frontend Developer" },
    { id: "fullstack", label: "Full-stack Developer" },
    { id: "vue-nuxt", label: "Vue / Nuxt Developer" },
    { id: "all", label: { fa: "مشاهده همه", en: "View all" } },
  ];

  const ROLE_CONFIG = {
    frontend: {
      preferredTags: ["frontend", "vue", "nuxt", "typescript", "javascript", "html", "css"],
      skillOrder: ["Vue js", "Nuxt", "TypeScript", "Javascript", "Html5", "Css3"],
    },
    fullstack: {
      preferredTags: ["fullstack", "javascript", "typescript", "vue", "nuxt", "api", "telegram", "backend"],
      skillOrder: ["Javascript", "TypeScript", "Vue js", "Nuxt", "Axios", "Rest api", "Mini App Telegram"],
    },
    "vue-nuxt": {
      preferredTags: ["vue", "nuxt", "pinia", "quasar", "vuetify", "frontend"],
      skillOrder: ["Vue js", "Nuxt", "Pinia", "Quasar", "Vuetify"],
    },
    all: {
      preferredTags: [],
      skillOrder: [],
    },
  };

  const SKILLS = [
    {
      id: "html5",
      icon: "skill-icons--html.svg",
      title: "Html5",
      tags: ["frontend", "html"],
      showMore: false,
      value: {
        fa: "اچ‌تی‌ام‌ال۵ جدیدترین نسخه‌ی اچ‌تی‌ام‌ال است که امکانات پیشرفته‌ای را برای ایجاد و نمایش محتوای وب فراهم می‌کند. این نسخه از اچ‌تی‌ام‌ال قابلیت‌های جدیدی مثل پشتیبانی از ویدیو و صدا، گرافیک‌های برداری، فرم‌های پیشرفته، و تعاملات بهبودیافته را به وب‌سایت‌ها اضافه کرده است.",
        en: "HTML5 is the current standard for structuring web pages, with native support for media, forms, graphics, and richer document semantics.",
      },
    },
    {
      id: "css3",
      icon: "skill-icons--css.svg",
      title: "Css3",
      tags: ["frontend", "css"],
      showMore: false,
      value: {
        fa: "سی‌اس‌اس (CSS) یا برگه‌های سبک آبشاری زبانی است که برای طراحی و تنظیم ظاهر صفحات وب استفاده می‌شود. با استفاده از سی‌اس‌اس، می‌توان به راحتی رنگ‌ها، فونت‌ها، چیدمان و دیگر ویژگی‌های بصری عناصر HTML را کنترل کرد و ظاهر سایت را به شکل دلخواه درآورد. ",
        en: "CSS controls layout, type, color, and visual design. I use it to build consistent, responsive interfaces.",
      },
    },
    {
      id: "javascript",
      icon: "vscode-icons--file-type-js-official.svg",
      title: "Javascript",
      tags: ["frontend", "fullstack", "javascript"],
      showMore: false,
      value: {
        fa: "جاوااسکریپت (JS) یک زبان برنامه‌نویسی است که برای ایجاد تعاملات پویا و واکنش‌گر در صفحات وب استفاده می‌شود. با استفاده از جاوااسکریپت می‌توان عملیات مختلفی مانند کنترل رویدادها، تغییر محتوا بدون نیاز به بارگذاری مجدد صفحه، و ایجاد انیمیشن‌ها و افکت‌های بصری را به صفحات وب اضافه کرد.",
        en: "JavaScript powers interactive client-side behavior: events, dynamic content, and application logic in the browser.",
      },
    },
    {
      id: "typescript",
      icon: "vscode-icons--file-type-typescript-official.svg",
      title: "TypeScript",
      tags: ["frontend", "fullstack", "typescript"],
      showMore: false,
      value: {
        fa: "تایپ‌اسکریپت (TypeScript) یک زبان مبتنی بر جاوااسکریپت است که تایپ ایستا، ابزارهای بهتر برای مقیاس‌پذیری و تجربه توسعه امن‌تری را فراهم می‌کند. در پروژه‌های بزرگ فرانت‌اند و فول‌استک، تایپ‌اسکریپت به کاهش باگ و خوانایی کد کمک می‌کند.",
        en: "TypeScript adds static types on top of JavaScript, which keeps large frontend and fullstack codebases safer and easier to maintain.",
      },
    },
    {
      id: "vue",
      icon: "logos--vue.svg",
      title: "Vue js",
      tags: ["frontend", "vue", "fullstack"],
      showMore: false,
      value: {
        fa: "ویو (Vue.js) یک فریم‌ورک جاوااسکریپتی سبک و منعطف است که برای ساختن رابط‌های کاربری و اپلیکیشن‌های تک‌صفحه‌ای (SPA) به کار می‌رود. ویو از ساختاری مبتنی بر کامپوننت‌ها استفاده می‌کند که توسعه را ساده و قابل مدیریت می‌کند و به توسعه‌دهندگان اجازه می‌دهد به راحتی بخش‌های مختلف یک اپلیکیشن را به صورت مجزا ایجاد و مدیریت کنند.",
        en: "Vue is a lightweight, component-based framework for UIs and SPAs. I work mainly with the Composition API.",
      },
    },
    {
      id: "quasar",
      icon: "vscode-icons--file-type-quasar.svg",
      title: "Quasar",
      tags: ["frontend", "vue", "quasar"],
      showMore: false,
      value: {
        fa: "کواسر (Quasar) یک فریم‌ورک مبتنی بر Vue.js است که به توسعه‌دهندگان امکان می‌دهد به راحتی اپلیکیشن‌های وب، موبایل، و دسکتاپ را با استفاده از یک کدبیس واحد ایجاد کنند. کواسر ابزارها و کامپوننت‌های آماده‌ای را ارائه می‌دهد که فرآیند توسعه را سریع‌تر و ساده‌تر می‌کند و به توسعه‌دهندگان اجازه می‌دهد اپلیکیشن‌های رسپانسیو و با عملکرد بالا ایجاد کنند.",
        en: "Quasar is a Vue framework for shipping web, mobile, and desktop apps from one codebase, with a solid set of ready-made components.",
      },
    },
    {
      id: "pinia",
      icon: "logos--pinia.svg",
      title: "Pinia",
      tags: ["frontend", "vue", "pinia"],
      showMore: false,
      value: {
        fa: "پینیا (Pinia) یک کتابخانه مدیریت وضعیت (State Management) برای فریم‌ورک Vue.js است که جایگزین Vuex محسوب می‌شود. پینیا ساختاری ساده‌تر و کاربرپسندتر نسبت به Vuex دارد و به توسعه‌دهندگان اجازه می‌دهد وضعیت اپلیکیشن را به صورت مرکزی مدیریت کنند. این کتابخانه از قابلیت‌هایی مانند تایپ‌های قوی‌تر، استفاده آسان‌تر، و بهینه‌سازی‌های بهتر برای اپلیکیشن‌های بزرگ برخوردار است.",
        en: "Pinia is Vue's state-management library. It is simpler than Vuex and works well with TypeScript in larger apps.",
      },
    },
    {
      id: "nuxt",
      icon: "logos--nuxt-icon.svg",
      title: "Nuxt",
      tags: ["frontend", "vue", "nuxt", "fullstack"],
      showMore: false,
      value: {
        fa: "ناکست (Nuxt.js) یک فریم‌ورک قدرتمند و انعطاف‌پذیر بر پایه Vue.js است که برای ساخت اپلیکیشن‌های وب، به‌ویژه اپلیکیشن‌های رندر سمت سرور (SSR) و سایت‌های استاتیک بهینه شده است. ناکست توسعه‌دهندگان را قادر می‌سازد تا به راحتی ویژگی‌هایی مانند مسیرهای خودکار، مدیریت وضعیت، و احراز هویت را پیاده‌سازی کنند و در عین حال از مزایای سئوی بهتر و عملکرد سریع‌تر برخوردار شوند.",
        en: "Nuxt is a Vue framework for SSR, static sites, and structured app architecture, with strong defaults for routing, SEO, and performance.",
      },
    },
    {
      id: "vuetify",
      icon: "devicon--vuetify.svg",
      title: "Vuetify",
      tags: ["frontend", "vue", "vuetify"],
      showMore: false,
      value: {
        fa: "ویوتیفای (Vuetify) یک کتابخانه کامپوننت مبتنی بر Vue.js است که از طراحی متریال دیزاین (Material Design) گوگل الهام گرفته شده است. ویوتیفای مجموعه‌ای گسترده از کامپوننت‌های آماده و قابل تنظیم را فراهم می‌کند که توسعه‌دهندگان می‌توانند با استفاده از آن‌ها، رابط‌های کاربری زیبا و واکنش‌گرا را به سرعت ایجاد کنند. این کتابخانه به ویژه برای پروژه‌هایی که نیاز به طراحی سازگار و یکپارچه با متریال دیزاین دارند، بسیار مناسب است.",
        en: "Vuetify is a Material Design component library for Vue, useful when you need a consistent, production-ready UI kit.",
      },
    },
    {
      id: "axios",
      icon: "logos--axios.svg",
      title: "Axios",
      tags: ["frontend", "fullstack", "api"],
      showMore: false,
      value: {
        fa: "اکسیوس (Axios) یک کتابخانه جاوااسکریپتی سبک و انعطاف‌پذیر است که برای انجام درخواست‌های HTTP از مرورگر یا Node.js استفاده می‌شود. اکسیوس به توسعه‌دهندگان امکان می‌دهد به راحتی داده‌ها را به سرور ارسال یا از آن دریافت کنند و از ویژگی‌هایی مانند درخواست‌های همزمان، مدیریت ساده خطاها، و تنظیمات پیشرفته‌ی هدرها و تایم‌اوت‌ها بهره‌مند شوند. این کتابخانه به خصوص برای کار با API‌ها و ارتباط با سرور در اپلیکیشن‌های وب بسیار محبوب است.",
        en: "Axios is an HTTP client for the browser and Node.js — requests, errors, interceptors, and API integration.",
      },
    },
    {
      id: "rest-api",
      icon: "gravity-ui--abbr-api.svg",
      title: "Rest api",
      tags: ["frontend", "fullstack", "api"],
      showMore: false,
      value: {
        fa: "REST API (رابط برنامه‌نویسی اپلیکیشن بر اساس نمایشی از وضعیت) یک سبک معماری برای طراحی و ساخت وب‌سرویس‌ها است که از پروتکل HTTP برای برقراری ارتباط بین کلاینت و سرور استفاده می‌کند. در REST API، عملیات‌های مختلف مانند خواندن، ایجاد، به‌روزرسانی و حذف منابع با استفاده از متدهای HTTP (GET، POST، PUT، DELETE) انجام می‌شود. این معماری بر اصولی مانند استقلال از پلتفرم، استفاده از URL‌های منحصر به فرد برای منابع، و انتقال داده‌ها به فرمت‌های متداولی مانند JSON یا XML تکیه دارد و به دلیل سادگی و مقیاس‌پذیری، در توسعه وب و موبایل بسیار مورد استفاده قرار می‌گیرد.",
        en: "REST APIs use HTTP methods to read and write resources, typically as JSON. I integrate and design these on both the client and the server.",
      },
    },
    {
      id: "telegram",
      icon: "uim--telegram-alt.svg",
      title: "Mini App Telegram",
      tags: ["frontend", "fullstack", "telegram", "api"],
      showMore: false,
      value: {
        fa: "مینی‌اپ تلگرام یک اپلیکیشن تحت‌وب است که مستقیماً درون پیام‌رسان تلگرام اجرا می‌شود و با استفاده از WebApp API امکان تعامل گرافیکی و پیشرفته‌تری نسبت به ربات‌های معمولی را فراهم می‌کند. این مینی‌اپ‌ها از طریق ربات تلگرام بارگذاری می‌شوند و می‌توانند رابط کاربری مشابه اپلیکیشن‌های موبایل را ارائه دهند، بدون نیاز به نصب یا خروج از تلگرام. اتصال به ربات، احراز هویت، ارسال داده‌ها و کنترل رفتار کاربر، همگی از طریق APIهای رسمی تلگرام انجام می‌شود و این قابلیت را برای توسعه‌دهندگان فراهم می‌کند تا خدمات پیچیده را مستقیماً درون تلگرام ارائه دهند.",
        en: "Telegram Mini Apps run inside Telegram via the WebApp API, with auth and data flowing through official Telegram APIs.",
      },
    },
  ];

  const EXPERIENCES = [
    {
      id: "paystar",
      company: "PayStar",
      role: "Frontend Developer",
      period: { fa: "۱۴۰۳ — اکنون", en: "2024 — Present" },
      tags: ["frontend", "vue", "javascript", "api"],
      highlights: [
        { fa: "توسعه Frontend با Vue 3", en: "Frontend development with Vue 3" },
        { fa: "کار با Composition API", en: "Composition API" },
        { fa: "توسعه فرم‌ها و workflowهای پیچیده", en: "Complex forms and workflows" },
        { fa: "کار با API و state management", en: "API integration and state management" },
      ],
    },
    {
      id: "timmi",
      company: "Timmi",
      role: "Frontend / Nuxt Developer",
      period: { fa: "پروژه تخصصی", en: "Specialist project" },
      tags: ["frontend", "vue", "nuxt", "api"],
      highlights: [
        { fa: "توسعه با Nuxt 4", en: "Built with Nuxt 4" },
        { fa: "SSR و SEO", en: "SSR and SEO" },
        { fa: "طراحی معماری Frontend", en: "Frontend architecture" },
        { fa: "کار با Supabase و API", en: "Supabase and API work" },
      ],
    },
    {
      id: "zeeplay",
      company: "ZeePlay",
      role: "Frontend Developer",
      period: { fa: "۱۴۰۱ — ۱۴۰۲", en: "2022 — 2023" },
      tags: ["frontend", "vue", "javascript", "api"],
      highlights: [
        { fa: "توسعه پلتفرم video commerce", en: "Video commerce platform" },
        { fa: "کار با WebRTC و WebSocket", en: "WebRTC and WebSocket" },
        { fa: "پیاده‌سازی UI تعاملی و بلادرنگ", en: "Realtime interactive UI" },
      ],
    },
    {
      id: "mastertube",
      company: "MasterTube / Omega Do",
      role: "Frontend Developer",
      period: { fa: "۱۴۰۲ — ۱۴۰۳", en: "2023 — 2024" },
      tags: ["frontend", "vue", "javascript", "api"],
      highlights: [
        { fa: "پنل تحلیل کانال یوتیوب", en: "YouTube channel analytics panel" },
        { fa: "Refactor و ساختاردهی پروژه", en: "Refactor and project structure" },
        { fa: "بهبود workflowهای CRUD", en: "Improved CRUD workflows" },
      ],
    },
    {
      id: "bankseda",
      company: "Bank seda",
      role: "Frontend Lead Developer",
      period: { fa: "۱۴۰۱ — ۱۴۰۳", en: "2022 — 2024" },
      tags: ["frontend", "vue", "javascript", "api"],
      highlights: [
        { fa: "رهبری تیم فرانت‌اند", en: "Led the frontend team" },
        { fa: "سیستم مدیریت سفارش صداگذاری", en: "Voice-over order management system" },
        { fa: "توسعه فیچر و رفع باگ‌های محصول", en: "Feature work and product bug fixes" },
      ],
    },
    {
      id: "oxwallet",
      company: "OXWallet",
      role: "Frontend Web Developer",
      period: { fa: "۱۴۰۳ — اکنون", en: "2024 — Present" },
      tags: ["frontend", "vue", "javascript", "fullstack", "api"],
      highlights: [
        { fa: "توسعه رابط کاربری کیف پول", en: "Wallet UI development" },
        { fa: "یکپارچه‌سازی با APIهای مالی", en: "Financial API integration" },
        { fa: "تمرکز روی تجربه کاربری و پرفورمنس", en: "Focus on UX and performance" },
      ],
    },
    {
      id: "freelance",
      company: "Freelance",
      role: "Full-stack Developer",
      period: { fa: "پروژه‌های مستقل", en: "Independent projects" },
      tags: ["fullstack", "javascript", "typescript", "vue", "api", "backend"],
      highlights: [
        { fa: "پیاده‌سازی بخش‌های کلاینت و سرور", en: "Client and server implementation" },
        { fa: "طراحی API و اتصال فرانت به بک‌اند", en: "API design and frontend–backend integration" },
        { fa: "تحویل end-to-end پروژه‌های وب", en: "End-to-end web delivery" },
      ],
    },
  ];

  const PROJECTS = [
    {
      id: "paystar-project",
      title: { fa: "PayStar — پلتفرم پرداخت", en: "PayStar — payment platform" },
      summary: {
        fa: "توسعه Frontend با Vue 3، فرم‌ها و workflowهای پیچیده، کار با API و state management.",
        en: "Vue 3 frontend for complex forms and workflows, with API and state management.",
      },
      tags: ["frontend", "vue", "javascript", "api"],
    },
    {
      id: "timmi-project",
      title: { fa: "Timmi — اپلیکیشن Nuxt", en: "Timmi — Nuxt app" },
      summary: {
        fa: "توسعه با Nuxt 4، SSR و SEO، معماری Frontend و کار با Supabase و API.",
        en: "Nuxt 4 app with SSR, SEO, frontend architecture, Supabase, and API work.",
      },
      tags: ["frontend", "vue", "nuxt", "api"],
    },
    {
      id: "zeeplay-project",
      title: { fa: "ZeePlay — Video Commerce", en: "ZeePlay — video commerce" },
      summary: {
        fa: "پلتفرم تعاملی ویدیویی با تمرکز روی WebRTC، WebSocket و تجربه بلادرنگ.",
        en: "Interactive video platform with WebRTC, WebSocket, and realtime UX.",
      },
      tags: ["frontend", "vue", "javascript", "api"],
    },
    {
      id: "mastertube-project",
      title: { fa: "MasterTube — پنل تحلیل یوتیوب", en: "MasterTube — YouTube analytics" },
      summary: {
        fa: "پنل کاربر برای آمار کانال، آپلود و بکاپ ویدیو با ساختار ماژولار فرانت‌اند.",
        en: "User panel for channel stats, video upload, and backups, with a modular frontend.",
      },
      tags: ["frontend", "vue", "javascript", "api"],
    },
    {
      id: "bankseda-project",
      title: { fa: "Bank seda — سفارش صداگذاری", en: "Bank seda — voice-over orders" },
      summary: {
        fa: "سیستم مدیریت سفارش آنلاین برای خدمات صدا و روایت، با رهبری فرانت‌اند.",
        en: "Online order system for voice and narration services, with frontend leadership.",
      },
      tags: ["frontend", "vue", "javascript", "api"],
    },
    {
      id: "oxwallet-project",
      title: { fa: "OXWallet — کیف پول وب", en: "OXWallet — web wallet" },
      summary: {
        fa: "رابط کاربری کیف پول با یکپارچه‌سازی API و تمرکز روی پرفورمنس.",
        en: "Wallet UI with API integration and a focus on performance.",
      },
      tags: ["frontend", "vue", "fullstack", "api"],
    },
    {
      id: "freelance-project",
      title: { fa: "پروژه‌های Full-stack مستقل", en: "Independent fullstack work" },
      summary: {
        fa: "تحویل end-to-end شامل فرانت، API و اتصال بک‌اند برای مشتریان مختلف.",
        en: "End-to-end delivery: frontend, API, and backend integration for various clients.",
      },
      tags: ["fullstack", "javascript", "typescript", "vue", "api", "backend"],
    },
  ];

  function readParam(key, allowed) {
    try {
      const value = new URLSearchParams(window.location.search).get(key);
      return allowed.includes(value) ? value : null;
    } catch (_) {
      return null;
    }
  }

  function readStorage(key, allowed) {
    try {
      const value = localStorage.getItem(key);
      return allowed.includes(value) ? value : null;
    } catch (_) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (_) {
      /* ignore */
    }
  }

  function writeUrlParam(key, value, defaultValue) {
    try {
      const url = new URL(window.location.href);
      if (value === defaultValue) url.searchParams.delete(key);
      else url.searchParams.set(key, value);
      window.history.replaceState({}, "", url);
    } catch (_) {
      /* ignore */
    }
  }

  function applyDocumentLang(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "fa" ? "rtl" : "ltr";
  }

  function persistRole(role) {
    writeStorage(ROLE_KEY, role);
    writeUrlParam("role", role, "all");
  }

  function persistLang(lang) {
    writeStorage(LANG_KEY, lang);
    writeUrlParam("lang", lang, "fa");
    applyDocumentLang(lang);
  }

  function scoreByTags(item, preferredTags) {
    if (!preferredTags.length) return 0;
    const tags = item.tags || [];
    return preferredTags.reduce((score, tag) => (tags.includes(tag) ? score + 1 : score), 0);
  }

  function sortSkills(skills, role) {
    const config = ROLE_CONFIG[role] || ROLE_CONFIG.all;
    const order = config.skillOrder || [];
    const preferred = config.preferredTags || [];

    return skills
      .map((item, index) => {
        const orderIndex = order.indexOf(item.title);
        const score = orderIndex >= 0 ? 1000 - orderIndex : scoreByTags(item, preferred);
        return { item, index, score };
      })
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.index - b.index;
      })
      .map(({ item }) => item);
  }

  function sortByRole(items, role) {
    const preferred = (ROLE_CONFIG[role] || ROLE_CONFIG.all).preferredTags || [];
    if (role === "all" || !preferred.length) {
      return items.slice();
    }

    return items
      .map((item, index) => {
        const score = scoreByTags(item, preferred);
        return { item, index, score };
      })
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.index - b.index;
      })
      .map(({ item }) => item);
  }

  function isRelevant(item, role) {
    if (role === "all") return false;
    const config = ROLE_CONFIG[role] || ROLE_CONFIG.all;
    const order = config.skillOrder || [];
    if (item.title && order.includes(item.title)) return true;
    return scoreByTags(item, config.preferredTags || []) > 0;
  }

  function translate(value, lang) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return value[lang] || value.en || value.fa || "";
  }

  function recruiterMode() {
    return {
      roles: ROLES,
      role: "all",
      activeExpend: null,
      skillsSource: SKILLS.map((s) => ({ ...s })),
      experiencesSource: EXPERIENCES,
      projectsSource: PROJECTS,

      init() {
        this.role = readParam("role", VALID_ROLES) || readStorage(ROLE_KEY, VALID_ROLES) || "all";
        persistRole(this.role);
      },

      t(value) {
        return translate(value, Alpine.store("locale").lang);
      },

      setRole(role) {
        if (!VALID_ROLES.includes(role)) return;
        this.role = role;
        this.activeExpend = null;
        this.skillsSource.forEach((skill) => {
          skill.showMore = false;
        });
        persistRole(role);
      },

      isRelevant(item) {
        return isRelevant(item, this.role);
      },

      get sortedSkills() {
        return sortSkills(this.skillsSource, this.role);
      },

      get sortedExperiences() {
        return sortByRole(this.experiencesSource, this.role);
      },

      get sortedProjects() {
        return sortByRole(this.projectsSource, this.role);
      },

      toggleSkill(item) {
        if (this.activeExpend && this.activeExpend !== item && this.activeExpend.showMore) {
          this.activeExpend.showMore = false;
        }
        item.showMore = !item.showMore;
        this.activeExpend = item;
      },
    };
  }

  document.addEventListener("alpine:init", () => {
    const initialLang = readParam("lang", VALID_LANGS) || readStorage(LANG_KEY, VALID_LANGS) || "fa";
    persistLang(initialLang);

    Alpine.store("locale", {
      lang: initialLang,
      copy: COPY,
      t(value) {
        return translate(value, this.lang);
      },
      set(lang) {
        if (!VALID_LANGS.includes(lang) || lang === this.lang) return;
        this.lang = lang;
        persistLang(lang);
      },
    });

    Alpine.data("recruiterMode", recruiterMode);
  });
})();
