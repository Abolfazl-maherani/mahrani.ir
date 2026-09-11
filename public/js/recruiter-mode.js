(() => {
  const STORAGE_KEY = "mahrani-recruiter-role";
  const VALID_ROLES = ["frontend", "fullstack", "vue-nuxt", "all"];

  const ROLES = [
    { id: "frontend", label: "Frontend Developer" },
    { id: "fullstack", label: "Full-stack Developer" },
    { id: "vue-nuxt", label: "Vue / Nuxt Developer" },
    { id: "all", label: "مشاهده همه" },
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
      value:
        "اچ‌تی‌ام‌ال۵ جدیدترین نسخه‌ی اچ‌تی‌ام‌ال است که امکانات پیشرفته‌ای را برای ایجاد و نمایش محتوای وب فراهم می‌کند. این نسخه از اچ‌تی‌ام‌ال قابلیت‌های جدیدی مثل پشتیبانی از ویدیو و صدا، گرافیک‌های برداری، فرم‌های پیشرفته، و تعاملات بهبودیافته را به وب‌سایت‌ها اضافه کرده است.",
    },
    {
      id: "css3",
      icon: "skill-icons--css.svg",
      title: "Css3",
      tags: ["frontend", "css"],
      showMore: false,
      value:
        "سی‌اس‌اس (CSS) یا برگه‌های سبک آبشاری زبانی است که برای طراحی و تنظیم ظاهر صفحات وب استفاده می‌شود. با استفاده از سی‌اس‌اس، می‌توان به راحتی رنگ‌ها، فونت‌ها، چیدمان و دیگر ویژگی‌های بصری عناصر HTML را کنترل کرد و ظاهر سایت را به شکل دلخواه درآورد. ",
    },
    {
      id: "javascript",
      icon: "vscode-icons--file-type-js-official.svg",
      title: "Javascript",
      tags: ["frontend", "fullstack", "javascript"],
      showMore: false,
      value:
        "جاوااسکریپت (JS) یک زبان برنامه‌نویسی است که برای ایجاد تعاملات پویا و واکنش‌گر در صفحات وب استفاده می‌شود. با استفاده از جاوااسکریپت می‌توان عملیات مختلفی مانند کنترل رویدادها، تغییر محتوا بدون نیاز به بارگذاری مجدد صفحه، و ایجاد انیمیشن‌ها و افکت‌های بصری را به صفحات وب اضافه کرد.",
    },
    {
      id: "typescript",
      icon: "vscode-icons--file-type-typescript-official.svg",
      title: "TypeScript",
      tags: ["frontend", "fullstack", "typescript"],
      showMore: false,
      value:
        "تایپ‌اسکریپت (TypeScript) یک زبان مبتنی بر جاوااسکریپت است که تایپ ایستا، ابزارهای بهتر برای مقیاس‌پذیری و تجربه توسعه امن‌تری را فراهم می‌کند. در پروژه‌های بزرگ فرانت‌اند و فول‌استک، تایپ‌اسکریپت به کاهش باگ و خوانایی کد کمک می‌کند.",
    },
    {
      id: "vue",
      icon: "logos--vue.svg",
      title: "Vue js",
      tags: ["frontend", "vue", "fullstack"],
      showMore: false,
      value:
        "ویو (Vue.js) یک فریم‌ورک جاوااسکریپتی سبک و منعطف است که برای ساختن رابط‌های کاربری و اپلیکیشن‌های تک‌صفحه‌ای (SPA) به کار می‌رود. ویو از ساختاری مبتنی بر کامپوننت‌ها استفاده می‌کند که توسعه را ساده و قابل مدیریت می‌کند و به توسعه‌دهندگان اجازه می‌دهد به راحتی بخش‌های مختلف یک اپلیکیشن را به صورت مجزا ایجاد و مدیریت کنند.",
    },
    {
      id: "quasar",
      icon: "vscode-icons--file-type-quasar.svg",
      title: "Quasar",
      tags: ["frontend", "vue", "quasar"],
      showMore: false,
      value:
        "کواسر (Quasar) یک فریم‌ورک مبتنی بر Vue.js است که به توسعه‌دهندگان امکان می‌دهد به راحتی اپلیکیشن‌های وب، موبایل، و دسکتاپ را با استفاده از یک کدبیس واحد ایجاد کنند. کواسر ابزارها و کامپوننت‌های آماده‌ای را ارائه می‌دهد که فرآیند توسعه را سریع‌تر و ساده‌تر می‌کند و به توسعه‌دهندگان اجازه می‌دهد اپلیکیشن‌های رسپانسیو و با عملکرد بالا ایجاد کنند.",
    },
    {
      id: "pinia",
      icon: "logos--pinia.svg",
      title: "Pinia",
      tags: ["frontend", "vue", "pinia"],
      showMore: false,
      value:
        "پینیا (Pinia) یک کتابخانه مدیریت وضعیت (State Management) برای فریم‌ورک Vue.js است که جایگزین Vuex محسوب می‌شود. پینیا ساختاری ساده‌تر و کاربرپسندتر نسبت به Vuex دارد و به توسعه‌دهندگان اجازه می‌دهد وضعیت اپلیکیشن را به صورت مرکزی مدیریت کنند. این کتابخانه از قابلیت‌هایی مانند تایپ‌های قوی‌تر، استفاده آسان‌تر، و بهینه‌سازی‌های بهتر برای اپلیکیشن‌های بزرگ برخوردار است.",
    },
    {
      id: "nuxt",
      icon: "logos--nuxt-icon.svg",
      title: "Nuxt",
      tags: ["frontend", "vue", "nuxt", "fullstack"],
      showMore: false,
      value:
        "ناکست (Nuxt.js) یک فریم‌ورک قدرتمند و انعطاف‌پذیر بر پایه Vue.js است که برای ساخت اپلیکیشن‌های وب، به‌ویژه اپلیکیشن‌های رندر سمت سرور (SSR) و سایت‌های استاتیک بهینه شده است. ناکست توسعه‌دهندگان را قادر می‌سازد تا به راحتی ویژگی‌هایی مانند مسیرهای خودکار، مدیریت وضعیت، و احراز هویت را پیاده‌سازی کنند و در عین حال از مزایای سئوی بهتر و عملکرد سریع‌تر برخوردار شوند.",
    },
    {
      id: "vuetify",
      icon: "devicon--vuetify.svg",
      title: "Vuetify",
      tags: ["frontend", "vue", "vuetify"],
      showMore: false,
      value:
        "ویوتیفای (Vuetify) یک کتابخانه کامپوننت مبتنی بر Vue.js است که از طراحی متریال دیزاین (Material Design) گوگل الهام گرفته شده است. ویوتیفای مجموعه‌ای گسترده از کامپوننت‌های آماده و قابل تنظیم را فراهم می‌کند که توسعه‌دهندگان می‌توانند با استفاده از آن‌ها، رابط‌های کاربری زیبا و واکنش‌گرا را به سرعت ایجاد کنند. این کتابخانه به ویژه برای پروژه‌هایی که نیاز به طراحی سازگار و یکپارچه با متریال دیزاین دارند، بسیار مناسب است.",
    },
    {
      id: "axios",
      icon: "logos--axios.svg",
      title: "Axios",
      tags: ["frontend", "fullstack", "api"],
      showMore: false,
      value:
        "اکسیوس (Axios) یک کتابخانه جاوااسکریپتی سبک و انعطاف‌پذیر است که برای انجام درخواست‌های HTTP از مرورگر یا Node.js استفاده می‌شود. اکسیوس به توسعه‌دهندگان امکان می‌دهد به راحتی داده‌ها را به سرور ارسال یا از آن دریافت کنند و از ویژگی‌هایی مانند درخواست‌های همزمان، مدیریت ساده خطاها، و تنظیمات پیشرفته‌ی هدرها و تایم‌اوت‌ها بهره‌مند شوند. این کتابخانه به خصوص برای کار با API‌ها و ارتباط با سرور در اپلیکیشن‌های وب بسیار محبوب است.",
    },
    {
      id: "rest-api",
      icon: "gravity-ui--abbr-api.svg",
      title: "Rest api",
      tags: ["frontend", "fullstack", "api"],
      showMore: false,
      value:
        "REST API (رابط برنامه‌نویسی اپلیکیشن بر اساس نمایشی از وضعیت) یک سبک معماری برای طراحی و ساخت وب‌سرویس‌ها است که از پروتکل HTTP برای برقراری ارتباط بین کلاینت و سرور استفاده می‌کند. در REST API، عملیات‌های مختلف مانند خواندن، ایجاد، به‌روزرسانی و حذف منابع با استفاده از متدهای HTTP (GET، POST، PUT، DELETE) انجام می‌شود. این معماری بر اصولی مانند استقلال از پلتفرم، استفاده از URL‌های منحصر به فرد برای منابع، و انتقال داده‌ها به فرمت‌های متداولی مانند JSON یا XML تکیه دارد و به دلیل سادگی و مقیاس‌پذیری، در توسعه وب و موبایل بسیار مورد استفاده قرار می‌گیرد.",
    },
    {
      id: "telegram",
      icon: "uim--telegram-alt.svg",
      title: "Mini App Telegram",
      tags: ["frontend", "fullstack", "telegram", "api"],
      showMore: false,
      value:
        "مینی‌اپ تلگرام یک اپلیکیشن تحت‌وب است که مستقیماً درون پیام‌رسان تلگرام اجرا می‌شود و با استفاده از WebApp API امکان تعامل گرافیکی و پیشرفته‌تری نسبت به ربات‌های معمولی را فراهم می‌کند. این مینی‌اپ‌ها از طریق ربات تلگرام بارگذاری می‌شوند و می‌توانند رابط کاربری مشابه اپلیکیشن‌های موبایل را ارائه دهند، بدون نیاز به نصب یا خروج از تلگرام. اتصال به ربات، احراز هویت، ارسال داده‌ها و کنترل رفتار کاربر، همگی از طریق APIهای رسمی تلگرام انجام می‌شود و این قابلیت را برای توسعه‌دهندگان فراهم می‌کند تا خدمات پیچیده را مستقیماً درون تلگرام ارائه دهند.",
    },
  ];

  const EXPERIENCES = [
    {
      id: "paystar",
      company: "PayStar",
      role: "Frontend Developer",
      period: "۱۴۰۳ — اکنون",
      tags: ["frontend", "vue", "javascript", "api"],
      highlights: [
        "توسعه Frontend با Vue 3",
        "کار با Composition API",
        "توسعه فرم‌ها و workflowهای پیچیده",
        "کار با API و state management",
      ],
    },
    {
      id: "timmi",
      company: "Timmi",
      role: "Frontend / Nuxt Developer",
      period: "پروژه تخصصی",
      tags: ["frontend", "vue", "nuxt", "api"],
      highlights: [
        "توسعه با Nuxt 4",
        "SSR و SEO",
        "طراحی معماری Frontend",
        "کار با Supabase و API",
      ],
    },
    {
      id: "zeeplay",
      company: "ZeePlay",
      role: "Frontend Developer",
      period: "۱۴۰۱ — ۱۴۰۲",
      tags: ["frontend", "vue", "javascript", "api"],
      highlights: [
        "توسعه پلتفرم video commerce",
        "کار با WebRTC و WebSocket",
        "پیاده‌سازی UI تعاملی و بلادرنگ",
      ],
    },
    {
      id: "mastertube",
      company: "MasterTube / Omega Do",
      role: "Frontend Developer",
      period: "۱۴۰۲ — ۱۴۰۳",
      tags: ["frontend", "vue", "javascript", "api"],
      highlights: [
        "پنل تحلیل کانال یوتیوب",
        "Refactor و ساختاردهی پروژه",
        "بهبود workflowهای CRUD",
      ],
    },
    {
      id: "bankseda",
      company: "Bank seda",
      role: "Frontend Lead Developer",
      period: "۱۴۰۱ — ۱۴۰۳",
      tags: ["frontend", "vue", "javascript", "api"],
      highlights: [
        "رهبری تیم فرانت‌اند",
        "سیستم مدیریت سفارش صداگذاری",
        "توسعه فیچر و رفع باگ‌های محصول",
      ],
    },
    {
      id: "oxwallet",
      company: "OXWallet",
      role: "Frontend Web Developer",
      period: "۱۴۰۳ — اکنون",
      tags: ["frontend", "vue", "javascript", "fullstack", "api"],
      highlights: [
        "توسعه رابط کاربری کیف پول",
        "یکپارچه‌سازی با APIهای مالی",
        "تمرکز روی تجربه کاربری و پرفورمنس",
      ],
    },
    {
      id: "freelance",
      company: "Freelance",
      role: "Full-stack Developer",
      period: "پروژه‌های مستقل",
      tags: ["fullstack", "javascript", "typescript", "vue", "api", "backend"],
      highlights: [
        "پیاده‌سازی بخش‌های کلاینت و سرور",
        "طراحی API و اتصال فرانت به بک‌اند",
        "تحویل end-to-end پروژه‌های وب",
      ],
    },
  ];

  const PROJECTS = [
    {
      id: "paystar-project",
      title: "PayStar — پلتفرم پرداخت",
      summary: "توسعه Frontend با Vue 3، فرم‌ها و workflowهای پیچیده، کار با API و state management.",
      tags: ["frontend", "vue", "javascript", "api"],
    },
    {
      id: "timmi-project",
      title: "Timmi — اپلیکیشن Nuxt",
      summary: "توسعه با Nuxt 4، SSR و SEO، معماری Frontend و کار با Supabase و API.",
      tags: ["frontend", "vue", "nuxt", "api"],
    },
    {
      id: "zeeplay-project",
      title: "ZeePlay — Video Commerce",
      summary: "پلتفرم تعاملی ویدیویی با تمرکز روی WebRTC، WebSocket و تجربه بلادرنگ.",
      tags: ["frontend", "vue", "javascript", "api"],
    },
    {
      id: "mastertube-project",
      title: "MasterTube — پنل تحلیل یوتیوب",
      summary: "پنل کاربر برای آمار کانال، آپلود و بکاپ ویدیو با ساختار ماژولار فرانت‌اند.",
      tags: ["frontend", "vue", "javascript", "api"],
    },
    {
      id: "bankseda-project",
      title: "Bank seda — سفارش صداگذاری",
      summary: "سیستم مدیریت سفارش آنلاین برای خدمات صدا و روایت، با رهبری فرانت‌اند.",
      tags: ["frontend", "vue", "javascript", "api"],
    },
    {
      id: "oxwallet-project",
      title: "OXWallet — کیف پول وب",
      summary: "رابط کاربری کیف پول با یکپارچه‌سازی API و تمرکز روی پرفورمنس.",
      tags: ["frontend", "vue", "fullstack", "api"],
    },
    {
      id: "freelance-project",
      title: "پروژه‌های Full-stack مستقل",
      summary: "تحویل end-to-end شامل فرانت، API و اتصال بک‌اند برای مشتریان مختلف.",
      tags: ["fullstack", "javascript", "typescript", "vue", "api", "backend"],
    },
  ];

  function readRoleFromUrl() {
    try {
      const params = new URLSearchParams(window.location.search);
      const role = params.get("role");
      return VALID_ROLES.includes(role) ? role : null;
    } catch (_) {
      return null;
    }
  }

  function readRoleFromStorage() {
    try {
      const role = localStorage.getItem(STORAGE_KEY);
      return VALID_ROLES.includes(role) ? role : null;
    } catch (_) {
      return null;
    }
  }

  function persistRole(role) {
    try {
      localStorage.setItem(STORAGE_KEY, role);
    } catch (_) {
      /* ignore */
    }

    try {
      const url = new URL(window.location.href);
      if (role === "all") {
        url.searchParams.delete("role");
      } else {
        url.searchParams.set("role", role);
      }
      window.history.replaceState({}, "", url);
    } catch (_) {
      /* ignore */
    }
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

  function recruiterMode() {
    return {
      roles: ROLES,
      role: "all",
      activeExpend: null,
      skillsSource: SKILLS.map((s) => ({ ...s })),
      experiencesSource: EXPERIENCES,
      projectsSource: PROJECTS,

      init() {
        this.role = readRoleFromUrl() || readRoleFromStorage() || "all";
        persistRole(this.role);
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
    Alpine.data("recruiterMode", recruiterMode);
  });
})();
