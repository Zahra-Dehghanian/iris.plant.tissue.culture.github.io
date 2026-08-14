const translations = {
    en: {
        nav_about: "About",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        hero_title: "Commercial Micropropagation & Plant Tissue Culture Specialist",
        hero_subtitle: "Bridging Scientific Precision and Industrial Scale Ornamental Plant Production.",
        btn_portfolio: "View Portfolio",
        btn_contact: "Get in Touch",
        stat_1: "Annual Tissue Culture Units",
        stat_2: "Agricultural Biotechnology",
        stat_3: "Commercial Lab Management",
        about_title: "About Me",
        about_text: "I am a Plant Biologist and entrepreneur specializing in high-efficiency micropropagation protocols for orchids, ornamental plants, and vegetative rootstocks. With a track record of running a commercial tissue culture facility producing 20,000+ units annually, I combine academic rigor with practical production experience.",
        services_title: "Expertise & Services",
        srv_1_title: "Protocol Optimization",
        srv_1_desc: "Developing and fine-tuning tissue culture protocols for difficult-to-propagate ornamental species and orchids.",
        srv_2_title: "Commercial Lab Management",
        srv_2_desc: "Overseeing media preparation, contamination control, subculturing workflows, and production scaling.",
        srv_3_title: "Stage 3 & 4 Transition",
        srv_3_desc: "High-survival acclimatization techniques for transitioning in-vitro plantlets to greenhouse conditions.",
        portfolio_title: "Production Showcase",
        img_1: "Orchid Micropropagation",
        img_2: "Cleanroom & Culture Room",
        img_3: "Ex-Vitro Acclimatization",
        contact_title: "Contact & Collaboration",
        contact_text: "Open for technical collaboration, consultancy, or laboratory management roles in Sweden & Europe."
    },
    sv: {
        nav_about: "Om mig",
        nav_services: "Tjänster",
        nav_portfolio: "Portfolio",
        nav_contact: "Kontakt",
        hero_title: "Specialist inom kommersiell mikroförökning och vävnadsodling",
        hero_subtitle: "Bro mellan vetenskaplig precision och industriell produktion av prydnadsväxter.",
        btn_portfolio: "Visa Portfolio",
        btn_contact: "Kontakta mig",
        stat_1: "Årliga vävnadsodlingsenheter",
        stat_2: "Agronomisk Bioteknik",
        stat_3: "Kommersiell laboratorieledning",
        about_title: "Om mig",
        about_text: "Jag är växtbiolog och entreprenör specialiserad på högeffektiva mikroförökningsprotokoll för orkidéer och prydnadsväxter. Med erfarenhet av att driva ett kommersiellt laboratorium med över 20 000 enheter årligen kombinerar jag akademisk kunskap med praktisk produktionsledning.",
        services_title: "Expertis och Tjänster",
        srv_1_title: "Protokolloptimering",
        srv_1_desc: "Utveckling och finjustering av vävnadsodlingsprotokoll för svårförökade prydnadsväxter och orkidéer.",
        srv_2_title: "Kommersiell laboratorieledning",
        srv_2_desc: "Övervakning av medieförberedelse, kontamineringskontroll och skalning av produktionen.",
        srv_3_title: "Acklimatisering (Steg 3 & 4)",
        srv_3_desc: "Metoder för hög överlevnad vid övergång från in-vitro till växthusmiljö.",
        portfolio_title: "Produktionsgalleri",
        img_1: "Orkidé Mikroförökning",
        img_2: "Laboratorium och Odlingsrum",
        img_3: "Ex-Vitro Acklimatisering",
        contact_title: "Kontakt och Samarbeten",
        contact_text: "Öppen för tekniskt samarbete, konsultuppdrag eller laboratorieledning i Sverige och Europa."
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
    document.getElementById('btn-sv').classList.toggle('active', lang === 'sv');
}