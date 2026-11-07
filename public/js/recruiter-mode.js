(() => {
  const ROLE_KEY = "mahrani-recruiter-role";
  const LANG_KEY = "mahrani-lang";
  const VALID_ROLES = ["frontend", "fullstack", "vue-nuxt", "all"];
  const VALID_LANGS = ["fa", "en"];

  const COPY = {
    name: { fa: "ابوالفضل ماهرانی", en: "Abolfazl Maherani" },
    jobTitle: { fa: "مهندس نرم‌افزار فول‌استک", en: "Full-stack Software Engineer" },
    location: { fa: "اصفهان، ایران", en: "Isfahan, Iran" },
    birthday: { fa: "۱۵ اردیبهشت ۱۳۸۱", en: "5 May 2002" },
    aboutTitle: { fa: "درباره ی من", en: "About me" },
    about: {
      fa: "درود فراوان.<br>من <b>ابوالفضل ماهرانی</b> هستم؛ <b>مهندس نرم‌افزار فول‌استک</b> و <b>بنیان‌گذار تایمی</b> (<a href=\"https://timmi.ir\" target=\"_blank\" rel=\"noopener noreferrer\">timmi.ir</a>). تفکر مهندسی، حل مسائل پیچیده، بهینه‌سازی پرفورمنس و طراحی معماری‌های مقیاس‌پذیر، هسته کار من است.<br>در فرانت‌اند با <b>Vue.js (Composition API)</b> و <b>Nuxt.js</b> محصول می‌سازم؛ در بک‌اند با <b>Node.js</b>، <b>Express</b>، <b>PostgreSQL</b>، <b>Supabase</b>، <b>Redis</b> و صف‌های <b>BullMQ</b> سرویس‌ها را طراحی و پیاده‌سازی می‌کنم. استقرار روی <b>Linux</b>، <b>Docker</b> و مسیرهای <b>CI/CD</b> هم بخشی از روزمره‌ام است.<br>همواره مشتاق چالش‌های بزرگ فنی و ساخت راه‌حل‌های مدرن در تیم‌های پویا هستم.<br><b>ممنون از نگاهتون❤️</b>",
      en: "Hello.<br>I am <b>Abolfazl Maherani</b>, a <b>full-stack software engineer</b> and <b>founder of Timmi</b> (<a href=\"https://timmi.ir\" target=\"_blank\" rel=\"noopener noreferrer\">timmi.ir</a>). Engineering thinking, hard problem-solving, performance work, and scalable architecture are the core of what I do.<br>On the client I ship with <b>Vue.js (Composition API)</b> and <b>Nuxt.js</b>. On the server I design APIs and services with <b>Node.js</b>, <b>Express</b>, <b>PostgreSQL</b>, <b>Supabase</b>, <b>Redis</b>, and <b>BullMQ</b> queues — and I deploy them with <b>Linux</b>, <b>Docker</b>, and <b>CI/CD</b>.<br>I enjoy hard technical problems and shipping modern solutions in fast-moving teams.<br><b>Thanks for reading.</b>",
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
    { id: "fullstack", label: "Full-stack Developer" },
    { id: "frontend", label: "Frontend Developer" },
    { id: "vue-nuxt", label: "Vue / Nuxt Developer" },
    { id: "all", label: { fa: "مشاهده همه", en: "View all" } },
  ];

  const ROLE_CONFIG = {
    frontend: {
      preferredTags: ["frontend", "vue", "nuxt", "typescript", "javascript", "html", "css"],
      skillOrder: ["Vue js", "Nuxt", "TypeScript", "Javascript", "Html5", "Css3"],
    },
    fullstack: {
      preferredTags: ["fullstack", "backend", "node", "database", "devops", "api", "javascript", "typescript", "vue", "nuxt"],
      skillOrder: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Supabase",
        "Redis",
        "BullMQ",
        "Docker",
        "Rest api",
        "CI/CD",
        "Linux",
        "SQLite",
        "Nuxt",
        "Vue js",
        "TypeScript",
        "Javascript",
      ],
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
      tags: ["frontend", "fullstack", "backend", "api"],
      showMore: false,
      value: {
        fa: "REST API سبک معماری برای طراحی وب‌سرویس‌هاست که با متدهای HTTP منابع را می‌خواند و می‌نویسد. من هم در سمت کلاینت با APIها کار می‌کنم و هم در سمت سرور آن‌ها را طراحی و مستند می‌کنم.",
        en: "REST APIs use HTTP methods to read and write resources, typically as JSON. I design and consume them on both the client and the server.",
      },
    },
    {
      id: "nodejs",
      icon: "skill-icons--nodejs.svg",
      title: "Node.js",
      tags: ["fullstack", "backend", "node", "javascript"],
      showMore: false,
      value: {
        fa: "Node.js محیط اجرای جاوااسکریپت سمت سرور است. با آن سرویس‌های بک‌اند، اسکریپت‌های tooling و APIهای مقیاس‌پذیر می‌سازم.",
        en: "Node.js is the JavaScript runtime I use for backend services, tooling, and scalable APIs.",
      },
    },
    {
      id: "express",
      icon: "skill-icons--expressjs.svg",
      title: "Express",
      tags: ["fullstack", "backend", "node", "api"],
      showMore: false,
      value: {
        fa: "Express فریم‌ورک سبک Node.js برای ساخت REST API، middleware و سرویس‌های HTTP است. برای طراحی endpointها، احراز هویت و لایه کنترلر از آن استفاده می‌کنم.",
        en: "Express is a lightweight Node.js framework for REST APIs, middleware, and HTTP services.",
      },
    },
    {
      id: "supabase",
      icon: "skill-icons--supabase.svg",
      title: "Supabase",
      tags: ["fullstack", "backend", "database", "api"],
      showMore: false,
      value: {
        fa: "Supabase پلتفرم بک‌اند مبتنی بر PostgreSQL است با Auth، Realtime، Storage و API آماده. برای ساخت سریع بک‌اند و یکپارچه‌سازی فرانت از آن استفاده می‌کنم.",
        en: "Supabase is a Postgres-based backend platform with Auth, Realtime, Storage, and ready APIs for shipping full-stack features faster.",
      },
    },
    {
      id: "postgresql",
      icon: "skill-icons--postgresql.svg",
      title: "PostgreSQL",
      tags: ["fullstack", "backend", "database"],
      showMore: false,
      value: {
        fa: "PostgreSQL دیتابیس رابطه‌ای قدرتمند برای مدل‌سازی داده، queryهای پیچیده و یکپارچگی داده‌هاست. در محصولاتی مثل تایمی از آن به‌عنوان منبع اصلی داده استفاده می‌کنم.",
        en: "PostgreSQL is my go-to relational database for solid schemas, complex queries, and data integrity in production apps.",
      },
    },
    {
      id: "sqlite",
      icon: "skill-icons--sqlite.svg",
      title: "SQLite",
      tags: ["fullstack", "backend", "database"],
      showMore: false,
      value: {
        fa: "SQLite یک دیتابیس سبک و فایل‌محور است؛ برای پروتوتایپ، ابزارهای محلی، تست و سناریوهایی که به دیتابیس embedded نیاز دارند مناسب است.",
        en: "SQLite is a lightweight embedded database I use for prototypes, local tooling, tests, and small self-contained apps.",
      },
    },
    {
      id: "redis",
      icon: "skill-icons--redis.svg",
      title: "Redis",
      tags: ["fullstack", "backend", "database"],
      showMore: false,
      value: {
        fa: "Redis فروشگاه داده در حافظه است برای کش، session، rate limit و پشتیبانی از صف‌های کار. برای کاهش latency و مقیاس‌پذیری بک‌اند از آن استفاده می‌کنم.",
        en: "Redis is an in-memory store I use for caching, sessions, rate limits, and backing job queues.",
      },
    },
    {
      id: "bullmq",
      icon: "skill-icons--bullmq.svg",
      title: "BullMQ",
      tags: ["fullstack", "backend", "node"],
      showMore: false,
      value: {
        fa: "BullMQ سیستم صف کار مبتنی بر Redis برای Node.js است. برای پردازش پس‌زمینه، جاب‌های زمان‌بندی‌شده و workloadهای غیرهمزمان از آن استفاده می‌کنم.",
        en: "BullMQ is a Redis-backed job queue for Node.js — background work, scheduled jobs, and async workloads.",
      },
    },
    {
      id: "linux",
      icon: "skill-icons--linux.svg",
      title: "Linux",
      tags: ["fullstack", "devops", "backend"],
      showMore: false,
      value: {
        fa: "با محیط‌های لینوکسی برای مدیریت سرور، اسکریپت‌نویسی، عیب‌یابی سرویس‌ها و استقرار اپلیکیشن‌های وب کار می‌کنم.",
        en: "I work comfortably in Linux environments for servers, scripting, troubleshooting, and deploying web apps.",
      },
    },
    {
      id: "cicd",
      icon: "skill-icons--githubactions.svg",
      title: "CI/CD",
      tags: ["fullstack", "devops"],
      showMore: false,
      value: {
        fa: "مسیرهای CI/CD را برای تست خودکار، بیلد و استقرار طراحی می‌کنم تا تحویل کد سریع‌تر و قابل‌اعتمادتر باشد؛ معمولاً با GitHub Actions و مشابه آن.",
        en: "I set up CI/CD pipelines for automated test, build, and deploy flows — typically with GitHub Actions and similar tooling.",
      },
    },
    {
      id: "docker",
      icon: "skill-icons--docker.svg",
      title: "Docker",
      tags: ["fullstack", "devops", "backend"],
      showMore: false,
      value: {
        fa: "با Docker محیط توسعه و استقرار را یکسان می‌کنم؛ کانتینرسازی سرویس‌ها، دیتابیس و ابزارهای جانبی برای اجرای قابل‌تکرار اپلیکیشن‌ها.",
        en: "Docker keeps development and deployment consistent — containerizing apps, databases, and supporting services.",
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
      id: "timmi",
      company: "Timmi",
      url: "https://timmi.ir",
      logo: "assets/images/timmi-logo.svg",
      logoWide: true,
      featured: true,
      role: { fa: "بنیان‌گذار", en: "Founder" },
      period: { fa: "۱۴۰۴ — اکنون", en: "2025 — Present" },
      tags: ["frontend", "vue", "nuxt", "typescript", "fullstack", "api", "backend", "database", "node"],
      highlights: [
        { fa: "بنیان‌گذار timmi.ir؛ پلتفرم جستجو، مقایسه و رزرو آنلاین نوبت", en: "Founded timmi.ir, a platform to search, compare, and book appointments" },
        { fa: "محصول برای کسب‌وکارهای نوبت‌محور، با پروفایل عمومی و پنل مدیریت", en: "Product for appointment-based businesses, with public profiles and an owner dashboard" },
        { fa: "معماری فول‌استک با Nuxt 4، Vue 3، Node.js، PostgreSQL، SSR و PWA", en: "Full-stack architecture on Nuxt 4, Vue 3, Node.js, and PostgreSQL, with SSR and PWA" },
        { fa: "رزرو نوبت، پرداخت آنلاین، کیف پول، پیامک و سئو", en: "Booking, online payments, wallet, SMS, and SEO" },
      ],
    },
    {
      id: "paystar",
      company: "PayStar",
      url: "https://paystar.ir",
      logo: "assets/images/paystar-logo.png",
      role: { fa: "تیم‌لید فرانت‌اند", en: "Frontend Team Lead" },
      period: { fa: "۱۴۰۳ — اکنون", en: "2024 — Present" },
      tags: ["frontend", "vue", "javascript", "api"],
      highlights: [
        { fa: "رهبری تیم فرانت‌اند", en: "Led the frontend team" },
        { fa: "توسعه Frontend با Vue 3", en: "Frontend development with Vue 3" },
        { fa: "کار با Composition API", en: "Composition API" },
        { fa: "توسعه فرم‌ها و workflowهای پیچیده", en: "Complex forms and workflows" },
        { fa: "کار با API و state management", en: "API integration and state management" },
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
      url: "https://master.tube",
      logo: "assets/images/mastertube-logo.png",
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
      url: "https://www.bank-seda.com/fa",
      logo: "assets/images/bankseda-icon.png",
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
      tags: ["fullstack", "javascript", "typescript", "vue", "api", "backend", "node", "database", "devops"],
      highlights: [
        { fa: "پیاده‌سازی end-to-end با Vue/Nuxt، Node.js و Express", en: "End-to-end delivery with Vue/Nuxt, Node.js, and Express" },
        { fa: "طراحی REST API، کار با PostgreSQL/SQLite، Redis و BullMQ", en: "REST API design with PostgreSQL/SQLite, Redis, and BullMQ" },
        { fa: "استقرار با Docker، Linux و مسیرهای CI/CD", en: "Deployment with Docker, Linux, and CI/CD pipelines" },
      ],
    },
  ];

  const PROJECTS = [
    {
      id: "timmi-project",
      title: { fa: "Timmi — رزرو نوبت", en: "Timmi — appointment booking" },
      href: "https://timmi.ir",
      logo: "assets/images/timmi-logo.svg",
      logoWide: true,
      summary: {
        fa: "بنیان‌گذار timmi.ir؛ پلتفرم فول‌استک رزرو نوبت با Nuxt 4، Node.js، PostgreSQL، پرداخت آنلاین، کیف پول و پنل کسب‌وکار.",
        en: "Founded timmi.ir, a full-stack Nuxt 4 booking platform with Node.js, PostgreSQL, online payments, a wallet, and a business dashboard.",
      },
      tags: ["frontend", "vue", "nuxt", "typescript", "fullstack", "api", "backend", "database", "node"],
    },
    {
      id: "paystar-project",
      title: { fa: "PayStar — پلتفرم پرداخت", en: "PayStar — payment platform" },
      href: "https://paystar.ir",
      logo: "assets/images/paystar-logo.png",
      summary: {
        fa: "تیم‌لید فرانت‌اند؛ توسعه با Vue 3، فرم‌ها و workflowهای پیچیده، کار با API و state management.",
        en: "Frontend team lead. Vue 3 for complex forms and workflows, with API and state management.",
      },
      tags: ["frontend", "vue", "javascript", "api"],
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
      href: "https://master.tube",
      logo: "assets/images/mastertube-logo.png",
      summary: {
        fa: "پنل کاربر برای آمار کانال، آپلود و بکاپ ویدیو با ساختار ماژولار فرانت‌اند.",
        en: "User panel for channel stats, video upload, and backups, with a modular frontend.",
      },
      tags: ["frontend", "vue", "javascript", "api"],
    },
    {
      id: "bankseda-project",
      title: { fa: "Bank seda — سفارش صداگذاری", en: "Bank seda — voice-over orders" },
      href: "https://www.bank-seda.com/fa",
      logo: "assets/images/bankseda-icon.png",
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
        fa: "تحویل end-to-end با فرانت، Node.js/Express، دیتابیس، Redis/BullMQ و استقرار Docker.",
        en: "End-to-end delivery: frontend, Node.js/Express, databases, Redis/BullMQ, and Docker deployments.",
      },
      tags: ["fullstack", "javascript", "typescript", "vue", "api", "backend", "node", "database", "devops"],
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
