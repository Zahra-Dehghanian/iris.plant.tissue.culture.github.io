const translations = {
    en: {
        nav_about: "About Us",
        nav_management: "Management",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        hero_subtitle: "Commercial Micropropagation & Plant Tissue Culture Specialist",
        btn_portfolio: "View Showcase",
        btn_contact: "Contact Us",
        stat_1: "Annual Tissue Culture Units",
        stat_2: "Agricultural Biotechnology",
        stat_3: "Commercial Lab Management",
        about_title: "About IRIS TISSUE CULTURE",
        about_text: "IRIS TISSUE CULTURE is a commercial plant biotechnology initiative specializing in high-efficiency micropropagation protocols for orchids, ornamental houseplants, and high-value vegetative rootstocks. We combine academic precision with large-scale industrial production.",
        mgmt_title: "Leadership & Management",
        mgmt_role: "Founder & Head of R&D / Production",
        mgmt_bio: "Ph.D. in Agricultural Biotechnology with extensive expertise in commercial tissue culture, plant breeding, and laboratory management. Successfully launched and managed commercial micropropagation facilities producing over 20,000 tissue-cultured plants annually.",
        services_title: "Core Expertise",
        srv_1_title: "Protocol Optimization",
        srv_1_desc: "Developing high-yield tissue culture protocols for orchids and rare ornamental species.",
        srv_2_title: "Commercial Lab Management",
        srv_2_desc: "Full management of cleanrooms, contamination control, media preparation, and production scaling.",
        srv_3_title: "Stage 3 & 4 Acclimatization",
        srv_3_desc: "High-survival transition techniques for acclimatizing in-vitro plantlets into greenhouse conditions.",
        portfolio_title: "Production Showcase",
        img_1: "Orchid Micropropagation",
        img_2: "Cleanroom & Culture Room",
        img_3: "Ex-Vitro Acclimatization",
        contact_title: "Contact Us",
        contact_text: "Open for technical collaboration, consultancy, and business opportunities."
    },
    fa: {
        nav_about: "درباره ما",
        nav_management: "مدیریت",
        nav_services: "خدمات",
        nav_portfolio: "نمونه‌کارها",
        nav_contact: "تماس با ما",
        hero_subtitle: "تولید تجاری و تخصصی گیاهان کشت بافتی و ارکیده",
        btn_portfolio: "مشاهده محصولات",
        btn_contact: "ارتباط با ما",
        stat_1: "تولید سالانه گیاهچه کشت بافتی",
        stat_2: "دکتری بیوتکنولوژی کشاورزی",
        stat_3: "مدیریت آزمایشگاه تجاری",
        about_title: "درباره آیساک / آیریس تیپو کالچر",
        about_text: "شرکت IRIS TISSUE CULTURE یک مجموعه تخصصی بیوتکنولوژی گیاهی است که در زمینه بهینه‌سازی پروتکل‌های تکثیر انبوه (کشت بافت) ارکیده، گیاهان زینتی آپارتمانی و پایه‌های رویشی فعالیت می‌کند. ما دقت علمی را با تولید انبوه صنعتی پیوند زده‌ایم.",
        mgmt_title: "مدیریت مجموعه",
        mgmt_role: "بنیان‌گذار و مدیر فنی و تولید",
        mgmt_bio: "دکتر زهرا دهقانیان، فارغ‌التحصیل دکتری بیوتکنولوژی کشاورزی با سابقه درخشان در تحقیق، توسعه و مدیریت آزمایشگاه‌های کشت بافت تجاری. با تجربه راه‌اندازی خط تولید و تکثیر سالانه بیش از ۲۰,۰۰۰ بوته ارکیده و گیاهان زینتی.",
        services_title: "خدمات و توانمندی‌های فنی",
        srv_1_title: "بهینه‌سازی پروتکل‌های تکثیر",
        srv_1_desc: "تدوین و اصلاح فرمولاسیون‌های کشت بافت برای ارکیده و گیاهان سخت‌تکثیر.",
        srv_2_title: "مدیریت آزمایشگاه‌های تجاری",
        srv_2_desc: "مدیریت کامل اتاق‌های کشت، کنترل آلودگی، آماده‌سازی محیط و افزایش مقیاس تولید.",
        srv_3_title: "سازگار کردن گیاهان (مرحله ۳ و ۴)",
        srv_3_desc: "تکنیک‌های پیشرفته خروج از شیشه و سازگاری گیاهچه‌ها با شرایط گلخانه‌ای با راندمان بالا.",
        portfolio_title: "گالری محصولات و کارگاه",
        img_1: "کشت بافت تخصصی ارکیده",
        img_2: "اتاق کشت و اتاق تمیز آزمایشگاه",
        img_3: "سازگار کردن گیاهان در گلخانه",
        contact_title: "تماس و همکاری",
        contact_text: "آماده همکاری‌های فنی، مشاوره صنعتی و توسعه پروژه‌های تولیدی."
    }
};

function switchLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-fa').classList.toggle('active', lang === 'fa');

    // Handle RTL for Persian
    if (lang === 'fa') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
}