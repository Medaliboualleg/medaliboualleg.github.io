// Tout le texte du site, en français (fr) et en arabe (ar).
// Pour modifier un texte, change-le ici : les composants n'ont rien à toucher.

export const links = {
  linkedin: 'https://www.linkedin.com/in/maboualleg',
  youtube: 'https://www.youtube.com/@Medaliboualleg',
  facebook: 'https://www.facebook.com/Medaliboualleguee',
  tiktok: 'https://www.tiktok.com/@medaliboualleguee',
  github: 'https://github.com/Medaliboualleg',
}

export const content = {
  fr: {
    dir: 'ltr',
    switchLabel: 'العربية',
    switchAria: 'Afficher le site en arabe',
    menu: 'Menu',
    nav: [
      ['services', 'Services'],
      ['parcours', 'Parcours'],
      ['projets', 'Projets'],
      ['contact', 'Contact'],
    ],
    name: 'Mohamed Ali Boualleg',
    nameAlt: 'محمد علي بوعلاق',
    hero: {
      eyebrow: 'Tunis · Freelance & missions',
      titleA: 'Je raconte des histoires',
      titleB: 'qui se partagent.',
      lead: "Auteur, créateur de contenu multimédia et consultant social media. Stratégie, vidéo, design et web : j'aide les marques et les médias à se faire entendre, en arabe et en français.",
      primary: 'Travaillons ensemble',
      secondary: 'Voir mes projets',
    },
    services: {
      title: 'Ce que je fais',
      sub: 'Du concept à la publication, je couvre toute la chaîne de production de contenu.',
      items: [
        ['chart', 'Stratégie social media', 'Ligne éditoriale, calendrier de contenu et gestion de plateformes pour médias et organisations.'],
        ['video', 'Montage vidéo', 'Reels, documentaires et vidéos YouTube sur Premiere Pro, After Effects et DaVinci Resolve.'],
        ['pen', 'Design graphique', 'Visuels, gabarits et identité graphique pour les réseaux, sur Photoshop et Illustrator.'],
        ['code', 'Sites web', "Sites vitrines et interfaces d'administration en WordPress ou React/Node.js."],
      ],
    },
    career: {
      title: 'Parcours',
      sub: 'Médias, ONG et projets tech — toujours au service du récit.',
      items: [
        ['Depuis oct. 2026', 'Développeur web, expert social media & graphiste', 'HIKMA AI', ''],
        ['Depuis août 2026', 'Expert social media, graphiste & monteur vidéo', 'CHIFAA', ''],
        ['Depuis oct. 2023', 'Créateur de contenu & gestion de plateformes', 'Jeel Media — Win Win', 'Contenu sportif en arabe : Coupe du monde, CAF, compétitions UEFA, LaLiga, Premier League.'],
        ['Auparavant', 'Missions communication & contenu', 'Plateforme Tunisienne des Alternatives · NDI', ''],
      ],
    },
    projects: {
      title: 'Projets',
      sub: "Une sélection de ce que je produis — en vidéo, en web et à l'écrit.",
      items: [
        ['Chaîne YouTube « Med Ali »', 'Programme documentaire « Khait » : histoire, société et politique racontées en arabe.', 'YouTube', links.youtube],
        ['carthageai.org', "Site de la Charte de Carthage pour une IA responsable — React, Node.js et espace d'administration.", 'Web', 'https://carthageai.org'],
        ['chifaa.org', "Refonte de l'interface d'administration : tout le contenu du site est administrable.", 'Web', 'https://chifaa.org'],
        ['hikmaai.org', 'Thème WordPress sur mesure et plugin dédié.', 'WordPress', 'https://hikmaai.org'],
      ],
      quote: {
        label: 'Auteur de deux romans',
        text: 'نبي الحانة',
        caption: "L'écriture reste au cœur de mon travail de narration.",
      },
    },
    skills: {
      title: 'Outils & langues',
      sub: 'Diplômé en informatique, en master Marketing Digital à iTeam University.',
      toolsTitle: 'Logiciels',
      tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Photoshop', 'Illustrator', 'WordPress', 'React', 'Node.js'],
      langsTitle: 'Langues',
      langs: ['Arabe — langue maternelle', 'Français — professionnel', 'Anglais — débutant'],
    },
    contact: {
      title: 'Un projet en tête ?',
      lead: 'Disponible pour des missions freelance en Tunisie, au Maghreb, dans le Golfe et dans la francophonie.',
      cta: "M'écrire sur LinkedIn",
    },
    footer: 'Tunis',
    newTab: '(nouvel onglet)',
  },

  ar: {
    dir: 'rtl',
    switchLabel: 'Français',
    switchAria: 'Afficher le site en français',
    menu: 'القائمة',
    nav: [
      ['services', 'الخدمات'],
      ['parcours', 'المسيرة'],
      ['projets', 'الأعمال'],
      ['contact', 'تواصل'],
    ],
    name: 'محمد علي بوعلاق',
    nameAlt: 'Mohamed Ali Boualleg',
    hero: {
      eyebrow: 'تونس · عمل حر ومهام',
      titleA: 'أروي قصصًا',
      titleB: 'تُشارَك.',
      lead: 'كاتب، صانع محتوى متعدد الوسائط ومستشار في وسائل التواصل الاجتماعي. استراتيجية، فيديو، تصميم وويب: أساعد العلامات التجارية والمؤسسات الإعلامية على إيصال صوتها، بالعربية والفرنسية.',
      primary: 'لنعمل معًا',
      secondary: 'شاهد أعمالي',
    },
    services: {
      title: 'ماذا أقدّم',
      sub: 'من الفكرة إلى النشر، أغطي كامل سلسلة إنتاج المحتوى.',
      items: [
        ['chart', 'استراتيجية التواصل الاجتماعي', 'خط تحريري، رزنامة محتوى وإدارة المنصات للمؤسسات الإعلامية والمنظمات.'],
        ['video', 'المونتاج', 'ريلز، وثائقيات وفيديوهات يوتيوب على Premiere Pro وAfter Effects وDaVinci Resolve.'],
        ['pen', 'التصميم الغرافيكي', 'تصاميم وقوالب وهوية بصرية للشبكات الاجتماعية على Photoshop وIllustrator.'],
        ['code', 'مواقع الويب', 'مواقع تعريفية ولوحات إدارة بـ WordPress أو React/Node.js.'],
      ],
    },
    career: {
      title: 'المسيرة المهنية',
      sub: 'إعلام، منظمات وتكنولوجيا — دائمًا في خدمة السرد.',
      items: [
        ['منذ أكتوبر 2026', 'مطوّر ويب، خبير تواصل اجتماعي ومصمم', 'HIKMA AI', ''],
        ['منذ أوت 2026', 'خبير تواصل اجتماعي، مصمم ومونتير', 'CHIFAA', ''],
        ['منذ أكتوبر 2023', 'صانع محتوى وإدارة منصات', 'Jeel Media — Win Win', 'محتوى رياضي بالعربية: كأس العالم، الكاف، مسابقات الويفا، الليغا والبريميرليغ.'],
        ['سابقًا', 'مهام في الاتصال والمحتوى', 'Plateforme Tunisienne des Alternatives · NDI', ''],
      ],
    },
    projects: {
      title: 'أعمال مختارة',
      sub: 'مختارات مما أنتجه — فيديو، ويب وكتابة.',
      items: [
        ['قناة يوتيوب «Med Ali»', 'برنامج «خيط» الوثائقي: التاريخ والمجتمع والسياسة بأسلوب سردي.', 'YouTube', links.youtube],
        ['carthageai.org', 'موقع ميثاق قرطاج للذكاء الاصطناعي المسؤول — React وNode.js مع لوحة إدارة.', 'Web', 'https://carthageai.org'],
        ['chifaa.org', 'إعادة تصميم لوحة الإدارة: كل محتوى الموقع قابل للتعديل.', 'Web', 'https://chifaa.org'],
        ['hikmaai.org', 'قالب WordPress مخصص وإضافة خاصة.', 'WordPress', 'https://hikmaai.org'],
      ],
      quote: {
        label: 'مؤلف روايتين',
        text: 'نبي الحانة',
        caption: 'تبقى الكتابة في صميم عملي السردي.',
      },
    },
    skills: {
      title: 'الأدوات واللغات',
      sub: 'حاصل على شهادة في الإعلامية، وأدرس ماجستير التسويق الرقمي في جامعة iTeam.',
      toolsTitle: 'البرمجيات',
      tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Photoshop', 'Illustrator', 'WordPress', 'React', 'Node.js'],
      langsTitle: 'اللغات',
      langs: ['العربية — اللغة الأم', 'الفرنسية — مستوى مهني', 'الإنجليزية — مبتدئ'],
    },
    contact: {
      title: 'لديك مشروع؟',
      lead: 'متاح لمهام العمل الحر في تونس والمغرب العربي والخليج والفضاء الفرنكوفوني.',
      cta: 'راسلني على LinkedIn',
    },
    footer: 'تونس',
    newTab: '(نافذة جديدة)',
  },
}
