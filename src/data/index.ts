import { ICONS } from "@/utils/icons";

// Navbar
export const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Admission",
    // link: "/admission",
    sublinks: [
      {
        name: "Admission Info",
        link: "/admission",
      },
      {
        name: "Classera",
        link: "#",
        sublinks: [
          {
            name: "Registration",
            link: "#",
          },
          {
            name: "Support",
            link: "#",
          },
        ],
      },
      {
        name: "FAQ",
        link: "/contact#faq",
      },
      {
        name: "Curriculum",
        link: "/admission/curriculum",
        // sublinks: [
        //   {
        //     name: "British",
        //     link: "/admission/curriculum",
        //   },
        //   {
        //     name: "American",
        //     link: "/admission/curriculum",
        //   },
        //   {
        //     name: "Pakistan",
        //     link: "/admission/curriculum",
        //   },
        //   {
        //     name: "Sudan",
        //     link: "/admission/curriculum",
        //   },
        //   {
        //     name: "Egypt",
        //     link: "/admission/curriculum",
        //   },
        // ],
      },
    ],
  },
  {
    name: "Portal",
    // link: "http://sms.jawahirschool.com/site/userlogin",
    sublinks: [
      {
        name: "Gallery",
        link: "/news-gallery#gallery",
      },
      // {
      // 	name: "Academy",
      // 	link: "/academy",
      // 	sublinks: [
      // 		{
      // 			name: "Kindergarten",
      // 			link: "/academy",
      // 		},
      // 		{
      // 			name: "Extracurricular",
      // 			link: "/academy/extracurricular",
      // 		},
      // 		{
      // 			name: "Sports",
      // 			link: "/academy/sports",
      // 		},
      // 		{
      // 			name: "Special needs",
      // 			link: "/academy/special-needs",
      // 		},
      // 	],
      // },
      {
        name: "News",
        link: "/news-gallery#news",
      },
      {
        name: "Events",
        link: "/news-gallery#events",
      },
      {
        name: "Student",
        link: "http://sms.jawahirschool.com/site/userlogin",
        sublinks: [
          {
            name: "Login",
            link: "http://sms.jawahirschool.com/site/userlogin",
          },
          {
            name: "Classera Login",
            link: "#",
          },
          {
            name: "Online Results",
            link: "http://result.jawahirschool.com/",
          },
          // {
          //   name: "Exam Policies",
          //   link: "/exam-policy",
          // },
          // {
          //   name: "Classera Support",
          //   link: "#",
          // },
          // {
          //   name: "Withdrawal",
          //   link: "#",
          // },
        ],
      },
      {
        name: "Teacher",
        link: "http://sms.jawahirschool.com/site/userlogin",
        sublinks: [
          {
            name: "Login",
            link: "http://sms.jawahirschool.com/site/userlogin",
          },
          {
            name: "Staff Contact",
            link: "/contact#staff",
          },
        ],
      },
      {
        name: "Payment Portal",
        link: "/payment",
      },
    ],
  },
  {
    name: "About",
    // link: "/about",
    sublinks: [
      {
        name: "Who We Are",
        link: "/about",
      },
      {
        name: "Our Schools",
        link: "/schools",
        sublinks: [
          {
            name: "1st JARIS",
            link: "/schools/fjaris",
          },
          {
            name: "2nd JARIS",
            link: "/schools/sjaris",
          },
          {
            name: "3rd JARIS",
            link: "/schools/tjaris",
          },
        ],
      },
      {
        name: "Facilities",
        link: "/facilities",
      },
    ],
  },
  {
    name: "Contact",
    link: "/contact",
    // sublinks: [
    //   {
    //     name: "Contact Us",
    //     link: "/contact",
    //   },
    //   {
    //     name: "My Email Login",
    //     link: "#",
    //   },
    // ],
  },
];

// Footer
export const footerLinks = {
  contact: [
    { name: "Contact Us", link: "/contact" },
    { name: "Staff Contact", link: "/contact#staff" },
    { name: "Our Schools", link: "/schools" },
    { name: "FAQ", link: "/contact#faq" },
  ],
  explore: [
    { name: "About", link: "/about" },
    { name: "Admission", link: "/admission" },
    // { name: "Academy", link: "/academy" },
    { name: "Photo Gallery", link: "/news-gallery" },
    { name: "News", link: "/news-gallery#news" },
  ],
  login: [
    {
      name: "Student Login",
      link: "http://sms.jawahirschool.com/site/userlogin",
    },
    {
      name: "Teacher Login",
      link: "http://sms.jawahirschool.com/site/userlogin",
    },
    {
      name: "Staff Login",
      link: "http://sms.jawahirschool.com/site/userlogin",
    },
  ],
};

export const footerSocials = [
  {
    icon: ICONS.instagram,
    link: "https://www.instagram.com/jawahirschools/",
  },
  {
    icon: ICONS.twitter,
    link: "https://x.com/JawahirSchools",
  },
  {
    icon: ICONS.youtube,
    link: "https://www.youtube.com/@JawahirSchools",
  },
  {
    icon: ICONS.facebook,
    link: "https://www.facebook.com/jawahirschools",
  },
];

// Shared
export const exploreItems = [
  {
    title: "News",
    description:
      "Stay in the Loop! Explore the Latest Updates and Discover What's Happening Now!",
    link: "/news-gallery#news",
  },
  {
    title: "Our Schools",
    description:
      "Take the First Step Toward Excellence. Explore Our Schools and Find the Perfect Fit for Your Future!",
    link: "/schools",
  },
  {
    title: "Academy",
    description:
      "Unlock Your True Potential! Discover Our Academy and Start Shaping Your Success Today!",
    link: "/academy",
  },
];

// Home
export const homeCarouselItems = [
  {
    subtitle: "BECOME",
    subtitleColored: "YOUR",
    title: "IDEAL",
    imgUrl: "/images/home/home-hero-slide-4.jpeg",
  },
  {
    subtitle: "DISCOVER",
    subtitleColored: "YOUR",
    title: "TALENTS",
    imgUrl: "/images/home/home-hero-slide-1.JPG",
  },
  {
    subtitle: "FIND",
    subtitleColored: "YOUR",
    title: "COMMUNITY",
    imgUrl: "/images/home/home-hero-slide-2.JPG",
  },
  {
    subtitle: "FOLLOW",
    subtitleColored: "YOUR",
    title: "PASSION",
    imgUrl: "/images/home/home-hero-slide-3.JPG",
  },
];

export const homeExperiences = [
  {
    title: "One of the Top Schools in Saudi Arabia",
    subtitle:
      "JARIS stands out as a leading institution in Saudi Arabia, renowned for its exceptional academic programs and holistic approach to education. Committed to excellence, it nurtures future leaders through world-class facilities and dedicated faculty.",
  },
  {
    title: "20 Nationalities Represented",
    subtitle:
      "Our campus proudly represents 20 nationalities, fostering a tapestry of cultures and viewpoints. This multicultural environment enriches education, nurtures global awareness and promotes unity among students.",
  },
];

export const homePartnerSlides = [
  {
    title: "Cambridge",
    imgUrl: "/images/home/cambridge.png",
  },
  {
    title: "College Board",
    imgUrl: "/images/home/collegeBoard.svg",
  },
  {
    title: "AP",
    imgUrl: "/images/home/ap-logo.jpeg",
  },
  {
    title: "SAT",
    imgUrl: "/images/home/sat.png",
  },
  {
    title: "Cognia",
    imgUrl: "/images/home/cognia.svg",
  },
  {
    title: "Edexcel",
    imgUrl: "/images/home/edexcel.svg",
  },
];

export const counts = [
  {
    title: "Our Students",
    count: 3500,
    icon: ICONS.student,
  },
  {
    title: "Our Teachers",
    count: 250,
    icon: ICONS.teacher,
  },
  {
    title: "Our Staff",
    count: 350,
    icon: ICONS.staff,
  },
];

export const ctaSchoolsCarouselItems = [
  {
    title: "INSPIRATION",
    subtitle:
      "Inspiration ignites the soul, turning dreams into action and ideas into reality.",
    imgUrl: "/images/home/cta-school-carousel-slide-1.JPG",
  },
  {
    title: "LEADERSHIP",
    subtitle: "I have grown so much as a person leading my class at JARIS.",
    imgUrl: "/images/home/cta-school-carousel-slide-2.jpeg",
  },
  {
    title: "TEAMWORK",
    subtitle: "I tried football this year and really enjoyed it.",
    imgUrl: "/images/home/cta-school-carousel-slide-3.jpeg",
  },
  {
    title: "RESILIENCE",
    subtitle: "I have definitely grown my physical strength at JARIS.",
    imgUrl: "/images/home/cta-school-carousel-slide-4.jpeg",
  },
];

// About
export const aboutHeroCarouselItems = [
  {
    title: "About Us",
    subtitle: "Your journey starts here",
    imgUrl: "/images/about/about-hero-carousel-slide-1.jpg",
  },
  {
    title: "About Us",
    subtitle: "Become a part of JARIS",
    imgUrl: "/images/about/about-hero-carousel-slide-2.jpg",
  },
  {
    title: "About Us",
    subtitle: "Our state-of-the-art sports facilities",
    imgUrl: "/images/about/about-hero-carousel-slide-3.jpg",
  },
  {
    title: "About Us",
    subtitle: "Experience an organised and modern facilities",
    imgUrl: "/images/about/about-hero-carousel-slide-4.jpg",
  },
];

export const coreValues = [
  {
    title: "Diversity",
    description:
      "We recognize, respect, and value diversity as a positive learning influence in developing active thinkers and learners.",
  },
  {
    title: "Growth",
    description:
      "We create an environment in which continuous improvement is embedded in our culture for teaching life, not just exams.",
  },
  {
    title: "Communication",
    description:
      "We believe in an environment where all stakeholders are given the opportunity for ongoing, open, two-way communication.",
  },
  {
    title: "Passion",
    description:
      "We believe that each employee and parent understands their role to actively support student learning and eliminate passive thinking from teachers, parents, and students.",
  },
  {
    title: "Logical",
    description:
      "We believe that decisions based on facts, data, and input from parents and teachers are in the best interest of the students.",
  },
  {
    title: "Safety",
    description:
      "We believe that a safe, clean, and healthy environment is necessary for learning.",
  },
];

export const facilities = [
  {
    title: "Chemistry Lab",
    imgUrl: "/images/about/facility-chemistry.jpeg",
  },
  {
    title: "Physics Lab",
    imgUrl: "/images/about/facility-physics.jpeg",
  },
  {
    title: "Biology Lab",
    imgUrl: "/images/about/facility-biology.jpeg",
  },
  {
    title: "Computer Lab",
    imgUrl: "/images/gallery/new-gallery-pictures/_DSC0210-Enhanced-NR.jpg",
  },
];

export const fJarisCurriculumImages = [
  // {
  //   title: "Jawahir",
  //   imgSrc: "/logos/jaris-logo-solid.jpeg",
  // },
  {
    title: "Cambridge",
    imgSrc: "/images/about/cambridge-white.png",
  },
];

export const sJarisCurriculumImages = [
  // {
  //   title: "Jawahir",
  //   imgSrc: "/logos/jaris-logo-solid.jpeg",
  // },
  {
    title: "College Board",
    imgSrc: "/images/home/collegeBoard.svg",
  },
  {
    title: "AP",
    imgSrc: "/images/home/ap-logo.jpeg",
  },
  {
    title: "SAT",
    imgSrc: "/images/home/sat.png",
  },
  {
    title: "Cognia",
    imgSrc: "/images/home/cognia.png",
  },
];

export const tJarisCurriculumImages = [
  // {
  //   title: "Jawahir",
  //   imgSrc: "/logos/jaris-logo-solid.jpeg",
  // },
  {
    title: "Edexcel",
    imgSrc: "/images/home/edexcel.svg",
  },
  {
    title: "Cambridge",
    imgSrc: "/images/about/cambridge-white.png",
  },
];

// Admission
export const admissionHeroCarouselItems = [
  {
    title: "Admission",
    subtitle: "Your journey starts here",
    imgUrl: "/images/about/about-hero-carousel-slide-1.jpg",
  },
  {
    title: "Admission",
    subtitle: "Become a part of JARIS",
    imgUrl: "/images/about/about-hero-carousel-slide-2.jpg",
  },
  {
    title: "Admission",
    subtitle: "Our state-of-the-art sports facilities",
    imgUrl: "/images/about/about-hero-carousel-slide-3.jpg",
  },
  {
    title: "Admission",
    subtitle: "Experience an organised and modern facilities",
    imgUrl: "/images/about/about-hero-carousel-slide-4.jpg",
  },
];

export const admissionProcedureSteps = [
  {
    id: "01",
    title: "FCFS",
    description:
      "Admissions are offered to everyone on first-come-first-serve basis irrespective of nationality, color, caste, creed, race, origin, and social status.",
  },
  {
    id: "02",
    title: "Assessment Test",
    description:
      "The school uses entry test (assessment) as a main tool for admission, however, there is still room for talented students to convince the school leaders about their potential. They can either present their past records or provide enough evidence to justify their unsatisfactory performance in entry test. However, the concerned vice principal may form a committee to decide such cases.",
  },
  {
    id: "03",
    title: "Samples",
    description:
      "Some specimen of the assesment of core subjects have been uploaded on our website for parents/students review in order to prepare for entry test.",
  },
  {
    id: "04",
    title: "Interview",
    description:
      "The entrance test is mandatory whereas interview is aimed at assessing the general intelligence and behavior. Core subjects such as English, Mathematics, Science, Arabic/Urdu and part of General Knowledge are included for assessment and admission. ",
  },
  {
    id: "05",
    title: "Qualified",
    description:
      "After passing the assessment/evaluation, admission will be offered provisionally by issuing a folder to the qualifying students.",
  },
];

export const admissionFeesData = [
  {
    title: "Secondary",
    grades: "(10-12)",
    fee: "19,550",
    vat: "17,000 + 2550 VAT",
  },
  { title: "Middle", grades: "(7-9)", fee: "17,250", vat: "15,000 + 2250 VAT" },
  {
    title: "Primary",
    grades: "(1-6)",
    fee: "14,950",
    vat: "13,000 + 1950 VAT",
  },
  {
    title: "Kindergarten",
    grades: "(Mon-LKG-UKG)",
    fee: "13,800",
    vat: "12,000 + 1800 VAT",
  },
];

export const admissionKindergartenAgeGroups = [
  { grade: "Nursery/Montessori-I", age: "3 years" },
  { grade: "Lower Kindergarten (LKG)", age: "4 years" },
  { grade: "Upper Kindergarten (UKG)", age: "5 years" },
];

// Curriculum
export const curriculums = [
  {
    id: 1,
    title: "British",
    description:
      "Known for its structured approach and rigorous standards, the British Curriculum emphasizes depth in subjects and encourages analytical thinking. Students work through key stages, leading to internationally recognized qualifications such as IGCSE and A-levels, preparing them for top universities worldwide.",
    image: "/images/curriculum/british.jpeg",
  },
  {
    id: 2,
    title: "American",
    description:
      "Focused on a holistic and flexible approach, the American Curriculum balances core academic subjects with a wide variety of electives. It emphasizes continuous assessment and caters to individual learning styles, culminating in a high school diploma and preparation for college admission in the U.S. and globally.",
    image: "/images/curriculum/american.jpeg",
  },
  {
    id: 3,
    title: "Pakistan",
    description:
      "Rooted in national standards, the Pakistani Curriculum emphasizes core subjects with a strong focus on languages, sciences, and Islamic studies. It is structured to prepare students for the Secondary School Certificate (SSC) and Higher Secondary School Certificate (HSSC) exams, which are gateways to higher education in Pakistan and abroad.",
    image: "/images/curriculum/pakistan.jpeg",
  },
  {
    id: 4,
    title: "Sudan",
    description:
      "The Sudanese Curriculum includes subjects focused on national and cultural knowledge alongside general academics. It prepares students for the Sudanese Certificate, emphasizing both academic and ethical development, and is recognized by universities across Sudan and other Arab-speaking countries.",
    image: "/images/curriculum/sudan.jpeg",
  },
  {
    id: 5,
    title: "Egypt",
    description:
      "The Egyptian Curriculum is designed to meet the educational standards set by Egypt's Ministry of Education, focusing on Arabic language, science, mathematics, and humanities. It prepares students for the Egyptian Thanaweya Amma (General Secondary Education Certificate), recognized in Egypt and many other countries.",
    image: "/images/curriculum/egypt.jpeg",
  },
];

// Contact Us
export const contactCarouselItems = [
  {
    title: "Contact Us",
    subtitle: "Find out more about JARIS",
    imgUrl: "/images/contact/contact-slide-1.jpeg",
  },
  {
    title: "Need Help?",
    subtitle: "We're here to help. Find our contact information below",
    imgUrl: "/images/gallery/new-gallery-pictures/_DSC0170-Enhanced-NR.jpg",
  },
  {
    title: "Whatsapp",
    subtitle: "WhatsApp us and immediately get your info.",
    imgUrl: "/images/gallery/new-gallery-pictures/_DSC0254-Enhanced-NR.jpg",
  },
  {
    title: "Join US",
    subtitle: "Join our community and grow to your highest potential.",
    imgUrl: "/images/gallery/new-gallery-pictures/_DSC0264-Enhanced-NR.jpg",
  },
];

export const contactNavItems = [
  {
    title: "Contact Us",
    subtitle: "JARIS",
  },
  {
    title: "Staff",
    subtitle: "Our",
  },
  {
    title: "FAQ",
    subtitle: "Check out",
  },
  // {
  //   title: "My Email",
  //   subtitle: "Access",
  // },
];

export const staffContactDetailsTable = [
  {
    role: "Director",
    name: "Mr. Ahmed Al Malouhi",
    contact: "785300, 4750484, 4750417",
    ext: "221",
    email: "ahmedalmallouhi@jawahirschool.com",
  },
  {
    role: "Head Principal",
    name: "Mr. Syed Muhammad Ibrahim",
    contact: "4785300, 4750484, 4750417",
    ext: "240",
    email: "syed@jawahirschool.com",
  },
  {
    role: "Principal 2nd JARIS",
    name: "Mr. Mohammed Al Malouhi",
    contact: "4794539",
    ext: "101",
    email: "mohammedalmalouhi@jawahirschool.com",
  },
  {
    role: "Principal Boys Section",
    name: "Mr. Khalid Khan",
    contact: "0505476585, 11-4785300240",
    ext: "-",
    email: "khalidali@jawahirschool.com",
  },
  {
    role: "VP American Boys Section",
    name: "Mr. Liaqat Ali Khan",
    contact: "2767377, 4794539",
    ext: "103",
    email: "liaqat.ali.khan@jawahirschool.com",
  },
  {
    role: "VP British/Pakistani Senior Boys Section",
    name: "Mr. Aftab Ahmad",
    contact: "4785300, 4750484, 4750417",
    ext: "250",
    email: "aftabahmad_vp@jawahirschool.com",
  },
  {
    role: "VP British/Pakistani Junior Boys Section",
    name: "Mr. Zahid Faraz",
    contact: "0505476585/ 0530010274",
    ext: "-",
    email: "zahid.jaris@gmail.com",
  },
  {
    role: "Principal Girls Section",
    name: "Mrs. Amal Sudais Mohammed Al-Sudais",
    contact: "920002951",
    ext: "504",
    email: "amal@jawahirschool.com",
  },
  {
    role: "VP Pakistani Senior Girls Section",
    name: "Mrs. Shakeela Abbas",
    contact: "920002951",
    ext: "404",
    email: "shakilakhan@jawahirschool.com",
  },
  {
    role: "Principal British Section Middle Girls",
    name: "Mrs. Lulu",
    contact: "920002951",
    ext: "500",
    email: "lulu@jawahirschool.com",
  },
  {
    role: "VP British Junior Girls Section",
    name: "Mrs. Rafia Faisal",
    contact: "920002951",
    ext: "302",
    email: "rafiafaisal@jawahirschool.com",
  },
  {
    role: "VP British/Pakistani Kindergarten Section",
    name: "Mrs. Tasneem Hafeez",
    contact: "920002951",
    ext: "147",
    email: "tasneemhafeez@jawahirschool.com",
  },
  {
    role: "Principal",
    name: "Mrs. Maram Mohammed Al-Hamza",
    contact: "920002951",
    ext: "201",
    email: "maram@jawahirschool.com",
  },
  {
    role: "VP American Senior Girls Section / Coordinator British Council",
    name: "Mrs. Sadaf Khushnood Mirza",
    contact: "920002951, 0534909202",
    ext: "401",
    email: "sadaf.jaris@jawahirschool.com",
  },
  {
    role: "Accounts Manager",
    name: "Dr. Abdullah Abdul Mutlib",
    contact: "920002951",
    ext: "301",
    email: "abdullah@jawahirschool.com",
  },
  {
    role: "Head of Computer Department",
    name: "Mr. Adeel Khaliq",
    contact: "-",
    ext: "-",
    email: "adeel.khaliq@jawahirschool.com",
  },
];

export const contactExperienceCards = [
  {
    icon: ICONS.phone,
    title: "Contact Us",
    subtitle: ["92-000-2951"],
  },
  {
    icon: ICONS.email,
    title: "Email Us",
    subtitle: ["JAREC:", "syed@jawahirschool.com"],
  },
  {
    icon: ICONS.mail_box,
    title: "P.O. Box",
    subtitle: [
      "Jawahir Al-Riyadh Educational Company, P.O. Box 19952, Riyadh 11445, Kingdom of Saudi Arabia.",
    ],
  },
  {
    icon: ICONS.email,
    title: "1st JARIS",
    subtitle: ["aftabahmad_vp@jawahirschool.com", "zahid.jaris@gmail.com"],
  },
  {
    icon: ICONS.email,
    title: "2nd JARIS",
    subtitle: ["liaqat.ali.khan_vp@jawahirschool.com"],
  },
  {
    icon: ICONS.email,
    title: "3rd JARIS",
    subtitle: ["zahid.jaris@gmail.com"],
  },
  {
    icon: ICONS.clock,
    title: "Opening Hours",
    subtitle: ["SUN - THU : 6.30AM - 12.30PM", "FRI - SAT : CLOSED"],
  },
];

export const whatsappData = [
  {
    name: "Jawahir Al-Riyadh Educational Company",
    role: "Help Desk",
    language: "English / Arabic",
    link: "https://wa.me/+966555937368",
    active: true,
  },
  // {
  //   name: "Mrs. Amal Sudais",
  //   role: "Principal Senior Girls Section",
  //   language: "Preferably Arabic Language",
  //   link: "https://wa.me/966554040157",
  //   active: false,
  // },
  // {
  //   name: "Mrs. Lulu",
  //   role: "Principal Junior Girls Section",
  //   language: "Preferably Arabic Language",
  //   link: "https://wa.me/966554040037",
  //   active: true,
  // },
  // {
  //   name: "Mrs. Sadaf Khushnood Mirza",
  //   role: "Vice Principal American Section",
  //   language: "English Language",
  //   link: "https://wa.me/923162389808",
  //   active: true,
  // },
  // {
  //   name: "Mr. Zahid Faraz",
  //   role: "Head of Junior Boys Section",
  //   language: "Preferably English Language",
  //   link: "https://wa.me/966505476585",
  //   active: true,
  // },
  // {
  //   name: "Mr. Liaqat Ali Khan",
  //   role: "AP/SAT Coordinator, College Board",
  //   language: "Head American Section Boys",
  //   link: "https://wa.me/966569652152",
  //   active: true,
  // },
  // {
  //   name: "Mr. Syed Muhammad Ibrahim",
  //   role: "Head Principal",
  //   language: "Bilingual",
  //   link: "https://wa.me/966505150161",
  //   active: true,
  // },
];

// Schools
export const availableTimes = [
  { day: "Sunday", time: "6:30 AM – 12:30 PM" },
  { day: "Monday", time: "6:30 AM – 12:30 PM" },
  { day: "Tuesday", time: "6:30 AM – 12:30 PM" },
  { day: "Wednesday", time: "6:30 AM – 12:30 PM" },
  { day: "Thursday", time: "6:30 AM – 12:30 PM" },
];

// Facilities
export const facilitiesHeroCarouselItems = [
  {
    title: "Facilities",
    subtitle: "Find out more about JARIS",
    imgUrl: "/images/facilities/facilities-hero-carousel-slide-1.jpeg",
  },
  {
    title: "Facilities",
    subtitle: "Find out more about JARIS",
    imgUrl: "/images/facilities/facilities-hero-carousel-slide-2.jpeg",
  },
  {
    title: "Facilities",
    subtitle: "Find out more about JARIS",
    imgUrl: "/images/facilities/facilities-hero-carousel-slide-3.jpeg",
  },
  {
    title: "Facilities",
    subtitle: "Find out more about JARIS",
    imgUrl: "/images/facilities/facilities-hero-carousel-slide-4.jpeg",
  },
];

export const labData = [
  {
    category: "Science",
    name: "Chemistry Lab",
    description:
      "Our Chemistry lab is designed to provide a safe and well-equipped environment for students to explore chemical reactions, compounds, and scientific processes. With modern apparatus and materials, students can perform hands-on experiments, deepening their understanding of chemistry concepts while ensuring safety protocols are adhered to.",
    imgSrc: "/images/facilities/facilities-chemistry.jpeg",
  },
  {
    category: "Science",
    name: "Biology Lab",
    description:
      "The Biology lab offers students the tools and equipment to study living organisms, ecosystems, and biological processes. Whether through microscope work or dissections, students can investigate the complexity of life forms, enhancing their grasp of both theoretical and practical aspects of biology.",
    imgSrc: "/images/facilities/facilities-biology.jpeg",
  },
  {
    category: "Science",
    name: "Physics Lab",
    description:
      "In the Physics lab, students experiment with the fundamental principles of motion, energy, electricity, and magnetism. Equipped with advanced tools, the lab provides a platform for students to apply their theoretical knowledge through engaging experiments, fostering a deeper understanding of physical laws and phenomena.",
    imgSrc: "/images/facilities/facilities-physics.jpeg",
  },
  {
    category: "Technology",
    name: "Computer Lab",
    description:
      "Our Computer labs are equipped with the latest hardware and software to support both programming and digital literacy. With high-speed internet and a variety of applications, students are able to explore coding, software development, data analysis, and more, preparing them for the ever-evolving world of technology.",
    imgSrc: "/images/gallery/new-gallery-pictures/_DSC0210-Enhanced-NR.jpg",
  },
];

// Exam
export const examPolicyHeroCarouselItems = [
  {
    title: "Exam",
    subtitle: "Find all examination rules.",
    imgUrl: "/images/exam/exam-hero-carousel-slide-1.jpeg",
  },
  {
    title: "Exam",
    subtitle: "Find all examination rules.",
    imgUrl: "/images/exam/exam-hero-carousel-slide-2.jpeg",
  },
  {
    title: "Exam",
    subtitle: "Find all examination rules.",
    imgUrl: "/images/exam/exam-hero-carousel-slide-3.jpeg",
  },
  {
    title: "Exam",
    subtitle: "Find all examination rules.",
    imgUrl: "/images/exam/exam-hero-carousel-slide-4.jpeg",
  },
];

export const examPolicies = [
  {
    description:
      "Help evaluating children thoroughly on all course material taught during the academic year.",
  },
  {
    description:
      "Make examinations less hectic and help students to perform well by dividing the course material in smaller portions, yet ensuring that they are prepared to face advanced levels of the course in higher grades.",
  },
  {
    description:
      "Uniform division of course material over equal periods of time followed by well-timed monthly/mid-final terms examinations that ensures uniform distribution of marks across the course material.",
  },
  {
    description:
      "Having a unified and well planned examination policy across various sections of the school that helps in laying out standard rules for handling issues like new admissions, absentees, re-exams etc.",
  },
  {
    description:
      "Ensuring that the students take their homework/assignments seriously and also sharing the responsibility of HW surveillance between both home and school.",
  },
  {
    description:
      "A well-planned examination system supported by a well-planned back office system to ensure timely preparation of exam material, prompt checking/re-checking of papers and confusion to support fault free result preparation at all levels in all sections of the school.",
  },
  {
    description:
      "The entire yearly curriculum has been divided into two equal portions, and each portion is sub-divided into three segments. The two segments related to monthly examination represent 20% of the total syllabus (supplements assignment, class performance, homework presentation, formative assessments, whereas the third 30% segment includes terminal examination mostly summative assessment.",
  },
];

export const examRules = [
  {
    title: "Monthly Examination",
    content: [
      "Four monthly formative examinations are conducted during the academic year. The results are part of the evaluation at the time of final result preparation. The students missing 1st or 2nd monthly examination or part of it would only be examined after midterm if they do not obtain 30% marks in the midterm and for 3rd and 4th monthly examination if they do not obtain 50% aggregate marks during both terms. There is no re-examination for the monthly exams under any circumstances.",
      {
        note: "In order to maintain healthy competition among the students missing any monthly examination (for any reason) the student will automatically be out of competition and will not be ranked at the end of the year.",
      },
    ],
  },
  {
    title: "Mid-Term Examination",
    content: [
      "The students securing less than 50% marks (including 1st and 2nd monthly examinations) in the compulsory subjects Mathematics Science English and Arabic / Urdu) will be kept in abeyance in order for them to get aggregate 50%marks Mid + Final Terms) until final examination. No repetition is allowed under any circumstance.",
      {
        note: "The student missing complete First Term examination either due to joining late or any other reason (sick leave absent) will be examined for the First Term (compulsory subjects) within two weeks at the beginning of the second term.",
      },
    ],
  },
  {
    title: "Absentees",
    content: [
      "Students absent during terminal examinations for any reason (sick or otherwise) and missing any main subject examination will be examined for the missing subjects after one week from the final results. The students missing whole term (Mid or Final) for any reason (sick or otherwise) will be examined within two weeks after the final examination. A separate date sheet indicating dates and days will be issued immediately after the final examination.",
      {
        warning:
          "Warning: Many parents plan for vacation and reserve seats prior to announcing the results and it becomes very difficult to inform them about the supplementary examination. The students showing poor results during the terminal examination should not leave the country until they get confirmation from the school.",
      },
    ],
  },
  {
    title: "Late Admission",
    content: [
      "Students transferring from other schools after mid-term and joining late are required to produce Mid-Term Result Card. The school may take up the matter with the Ministry of Education for such cases and act according to the instructions received from the Ministry.",
    ],
  },
  {
    title: "Supplementary Examination",
    content: [
      "There is only one opportunity for the supplementary examination and any student getting less than 50% marks will repeat again REPEAT the grade.",
    ],
  },
  {
    title: "Final Term Examination",
    content: [
      "The students securing less than 50% marks in the compulsory subjects in the Final Term (including 3rd and 4th monthly examinations will have one chance to re-sit either for Mid or Final Term Re-examination within two weeks' time from the date final results are announced.",
    ],
  },
  {
    title: "Examination for students transferring from JARIS",
    content: [
      "The students who are moving from the school (during First Term) after two Monthly examinations (1st and 2nd) and prior to the Mid-Term Examination to other city or country due to force majeure will be assessed for the portion taught during their presence in the class along with the two monthly results and an examination result card will be issued. The Department of Education does not authenticate such result cards.",
      {
        note: "The student moving after first monthly examination will not be given any assessment but such students should give one month advance notice for school leaving certificates prior to leaving the school.",
      },
      "The students who are moving from the school (during second Term) after completing two monthly examinations (3rd and 4th) and prior to the Final Term Examination to other city or country will be assessed for the portion taught during their presence in the class along with the two monthly examination results and final results card will be issued but no authentication is guaranteed.",
      {
        note: "The student moving after 3rd monthly examination will only be given mid-term assessment card along with 3rd monthly examination result.",
      },
    ],
  },
];

export const curriculumDistribution = [
  {
    examination: "1st Monthly Examination",
    carryPercentage: "10%",
    totalTermCompletion: "10%",
  },
  {
    examination: "2nd Monthly Examination",
    carryPercentage: "10%",
    totalTermCompletion: "11 - 20%",
  },
  {
    examination: "Mid Monthly Examination",
    carryPercentage: "30%",
    totalTermCompletion: "21 - 50%",
  },
  {
    examination: "3rd Monthly Examination",
    carryPercentage: "10%",
    totalTermCompletion: "51 - 60%",
  },
  {
    examination: "4th Monthly Examination",
    carryPercentage: "10%",
    totalTermCompletion: "61 - 70%",
  },
  {
    examination: "Final Term Examination",
    carryPercentage: "30%",
    totalTermCompletion: "71 - 100%",
  },
];

// Payment
export const jarisBankDetails = {
  bank: "AL-RAJHI BANK",
  accountName: "JAWAHIR AL-RIYADH",
  accountNumber: "74800002606080810214448",
};

export const paymentContactDetails = {
  phone: "92-000-2961",
  email: "syed@jawahirschool.com",
  address:
    "Jawahir Al-Riyadh Educational Company, P.O. Box 19932, Riyadh 11465, Kingdom of Saudi Arabia.",
};

// Academy
export const academyHeroCarouselItems = [
  {
    title: "Nursery",
    subtitle: "Join US TO BRIGHTEN YOUR FUTURE",
    imgUrl: "/images/about/about-hero-carousel-slide-1.jpeg",
  },
  {
    title: "LKG",
    subtitle: "Join US TO BRIGHTEN YOUR FUTURE",
    imgUrl: "/images/about/about-hero-carousel-slide-2.jpeg",
  },
  {
    title: "UKG",
    subtitle: "Join US TO BRIGHTEN YOUR FUTURE",
    imgUrl: "/images/about/about-hero-carousel-slide-3.jpeg",
  },
  {
    title: "Montesoiree",
    subtitle: "Join US TO BRIGHTEN YOUR FUTURE",
    imgUrl: "/images/about/about-hero-carousel-slide-4.jpeg",
  },
];

export const academyNavItems = [
  {
    title: "Nursery",
    subtitle: "Our",
  },
  {
    title: "LKG",
    subtitle: "Our",
  },
  {
    title: "UKG",
    subtitle: "Our",
  },
  {
    title: "Montsoiree",
    subtitle: "Read Our Latest",
  },
];

export const montesoiree1Programs = [
  {
    title: "Form Character",
    description:
      "Montesoiree education not only caters to the bare essentials of preschool education but also provides the child with the opportunity of forming character.",
  },
  {
    title: "Curriculum",
    description:
      "The well-structured curriculum involves sensorial education, the child is learning by the five senses, touch, hearing, sight, taste, and smell.",
  },
  {
    title: "Sensorial Method",
    description:
      "The best results are known to be obtained by concentrating on one sense at a time. The sensorial material is designed to aid the mind in the development of the intellect.",
  },
  {
    title: "Material",
    description:
      "Montessori-1 classrooms are equipped with Montessori material and Montessori trained directress.",
  },
];

export const montesoiree2Subjects = [
  {
    title: "English",
    description: "Learning Alphabets, blending sounds and words.",
  },
  {
    title: "Mathematics",
    description: "Learning numbers, numbers names and counting.",
  },
  {
    title: "Exercises of Practical Life",
    description:
      "Practicing real life experience through interactive simulative learning methods.",
  },
  {
    title: "Sensorial Method",
    description: "Learning to utilise each senses.",
  },
];

export const montesoiree3Subjects = [
  {
    title: "English",
    description: "Learning blending sounds, words and sentence making.",
  },
  {
    title: "Mathematics",
    description: "Learning numbers, numbers name, addition and subtraction.",
  },
  {
    title: "Cultural Subjects",
    description: "Parts of the plant, jigsaw puzzles, Land and water moulds.",
  },
  {
    title: "Please Note...",
    description:
      "The presently followed method of teaching for Montessori guarantees the above skills are covered at the end of the academic year.",
  },
];

// Extracurricular
export const extracurricularHeroCarouselItems = [
  {
    title: "Art",
    subtitle: "Join US TO BRIGHTEN YOUR FUTURE",
    imgUrl: "/images/about/about-hero-carousel-slide-1.jpeg",
  },
  {
    title: "Botanic",
    subtitle: "Join US TO BRIGHTEN YOUR FUTURE",
    imgUrl: "/images/about/about-hero-carousel-slide-2.jpeg",
  },
  {
    title: "Baking",
    subtitle: "Join US TO BRIGHTEN YOUR FUTURE",
    imgUrl: "/images/about/about-hero-carousel-slide-3.jpeg",
  },
  {
    title: "Aerobics",
    subtitle: "Join US TO BRIGHTEN YOUR FUTURE",
    imgUrl: "/images/about/about-hero-carousel-slide-4.jpeg",
  },
];

export const extracurricularNavItems = [
  {
    title: "Art",
    subtitle: "Our",
  },
  {
    title: "Botanic",
    subtitle: "Our",
  },
  {
    title: "Baking",
    subtitle: "Our",
  },
  {
    title: "Aerobics",
    subtitle: "Read Our Latest",
  },
];

export const artOverview = {
  title: "Art Academy",
  description:
    "Welcome to the Art Academy at Jawahir Al-Riyadh International School (JARIS), where creativity knows no bounds! Our academy is dedicated to nurturing the artistic talents of students by providing them with the tools, guidance, and inspiration to explore their full potential.",
  imgSrc: "/images/extracurricular/art-overview.png",
};

export const artSubjects = [
  {
    level: "Tier 1: Beginner level",
    title: "Foundation of Art",
    description:
      "This tier focuses on introducing the basics of drawing, painting, and color theory. Students will learn how to work with various mediums and explore foundational techniques that are crucial to developing strong artistic skills.",
  },
  {
    level: "Tier 2: Intermediate level",
    title: "Foundation of Art",
    description:
      "This tier focuses on introducing the basics of drawing, painting, and color theory. Students will learn how to work with various mediums and explore foundational techniques that are crucial to developing strong artistic skills.",
  },
  {
    level: "Tier 3: Advanced level",
    title: "Foundation of Art",
    description:
      "This tier focuses on introducing the basics of drawing, painting, and color theory. Students will learn how to work with various mediums and explore foundational techniques that are crucial to developing strong artistic skills.",
  },
];

export const artSchedule = {
  schedule: [
    {
      key: "1",
      day: "Days",
      detail: "Sunday to Thursday",
    },
    {
      key: "2",
      day: "Time",
      detail: "6:30 AM - 12:30 PM",
    },
  ],
  description:
    "This daily schedule allows students to immerse themselves in various forms of art, from painting and drawing to digital design and sculpture. Each day is designed to focus on different aspects of creativity, ensuring that students gain a holistic art education while balancing their other academic commitments.",
};

export const artCTADescription =
  "Whether your child is a budding artist or a curious beginner, our Art Academy offers a structured, engaging, and dynamic environment to cultivate their skills and creativity.";

export const botanicOverview = {
  title: "Botany Academy",
  description:
    "Discover the wonders of nature with the Botany Academy at JARIS. This academy encourages students to explore the science of plants, fostering an appreciation for environmental conservation and sustainability. From understanding plant biology to hands-on gardening, the academy provides a mix of theoretical knowledge and practical application.",
  imgSrc: "/images/extracurricular/botanic-overview.png",
};

export const botanicSubjects = [
  {
    level: "Tier 1: Beginner level",
    title: "Introduction to Botany",
    description:
      "Students are introduced to plant life cycles, basic plant anatomy, and the importance of plants in the ecosystem. Hands-on activities like planting seeds and observing growth are incorporated.",
  },
  {
    level: "Tier 2: Intermediate level",
    title: "Intermediate Plant Care",
    description:
      "This tier covers topics such as plant genetics, soil science, and biodiversity. Students will also engage in small experiments and garden maintenance.",
  },
  {
    level: "Tier 3: Advanced level",
    title: "Advanced Botanical Studies",
    description:
      "Focuses on advanced topics like horticulture, botany research, and environmental science. Students will undertake independent projects such as cultivating rare plants or designing sustainable gardens.",
  },
];

export const botanicSchedule = {
  schedule: [
    {
      key: "1",
      day: "Days",
      detail: "Sunday to Thursday",
    },
    {
      key: "2",
      day: "Time",
      detail: "6:30 AM - 12:30 PM",
    },
  ],
  description:
    "This daily schedule allows students to immerse themselves in various forms of Botanical caring techniques. ",
};

export const botanicCTADescription =
  "Whether your child is a budding botanist or a curious beginner, our Botany Academy offers a structured, engaging, and dynamic environment to cultivate their skills and passion for the craft.";

export const bakingOverview = {
  title: "Baking Academy",
  description:
    "For students passionate about culinary arts, the Baking Academy at JARIS provides a fun and educational environment to learn baking from scratch. From bread and pastries to cakes and desserts, students will master techniques, recipes, and decoration skills to become creative bakers.",
  imgSrc: "/images/extracurricular/baking-overview.png",
};

export const bakingSubjects = [
  {
    level: "Tier 1: Beginner level",
    title: "Baking Basics",
    description:
      "Students will learn kitchen safety, measuring ingredients, and basic recipes like cookies and cupcakes. Hands-on practice ensures everyone gains confidence in the kitchen.",
  },
  {
    level: "Tier 2: Intermediate level",
    title: "Intermediate Baking",
    description:
      "More advanced techniques are introduced, such as bread-making, pie crusts, and cake decorating. Students will also learn about the science behind baking.",
  },
  {
    level: "Tier 3: Advanced level",
    title: "Advanced Baking Techniques",
    description:
      "Students will explore advanced pastry techniques, gourmet desserts, and complex recipes. They will also work on personalized projects, such as designing a multi-layered cake.",
  },
];

export const bakingSchedule = {
  schedule: [
    {
      key: "1",
      day: "Days",
      detail: "Sunday to Thursday",
    },
    {
      key: "2",
      day: "Time",
      detail: "6:30 AM - 12:30 PM",
    },
  ],
  description:
    "This daily schedule allows students to immerse themselves in various forms of Botanical caring techniques. ",
};

export const bakingCTADescription =
  "Whether your child is a budding baker or a curious beginner, our Baking Academy offers a structured, engaging, and dynamic environment to cultivate their skills and passion for the craft.";

export const aerobicsOverview = {
  title: "Aerobics Academy",
  description:
    "The Aerobics Academy at JARIS promotes physical fitness, energy, and well-being. Designed to enhance cardiovascular endurance, strength, and flexibility, the academy helps students build a love for staying active in a fun and dynamic way.",
  imgSrc: "/images/extracurricular/aerobics-overview.png",
};

export const aerobicsSubjects = [
  {
    level: "Tier 1: Beginner level",
    title: "Introduction to Aerobics",
    description:
      "Students will learn the basics of aerobic exercises, focusing on proper form, light cardio, and stretching routines.",
  },
  {
    level: "Tier 2: Intermediate level",
    title: "Intermediate Aerobics",
    description:
      "Students will engage in more complex routines, combining strength training with cardio, and learn about proper breathing techniques during workouts.",
  },
  {
    level: "Tier 3: Advanced level",
    title: "Advanced Aerobic Techniques",
    description:
      "This level involves high-intensity interval training (HIIT), endurance challenges, and complex routines that target multiple muscle groups for full-body fitness.",
  },
];

export const aerobicsSchedule = {
  schedule: [
    {
      key: "1",
      day: "Days",
      detail: "Sunday to Thursday",
    },
    {
      key: "2",
      day: "Time",
      detail: "6:30 AM - 12:30 PM",
    },
  ],
  description:
    "This daily schedule allows students to immerse themselves in various forms of Botanical caring techniques. ",
};

export const aerobicsCTADescription =
  "Whether your child is a budding baker or a curious beginner, our Baking Academy offers a structured, engaging, and dynamic environment to cultivate their skills and passion for the craft.";

// Sports
export const sportsHeroCarouselItems = [
  {
    title: "Football",
    subtitle: "Join US TO BRIGHTEN YOUR FUTURE",
    imgUrl: "/images/about/about-hero-carousel-slide-1.jpeg",
  },
  {
    title: "Basketball",
    subtitle: "Join US TO BRIGHTEN YOUR FUTURE",
    imgUrl: "/images/about/about-hero-carousel-slide-2.jpeg",
  },
  {
    title: "Karate",
    subtitle: "Join US TO BRIGHTEN YOUR FUTURE",
    imgUrl: "/images/about/about-hero-carousel-slide-3.jpeg",
  },
  {
    title: "Swimming",
    subtitle: "Join US TO BRIGHTEN YOUR FUTURE",
    imgUrl: "/images/about/about-hero-carousel-slide-4.jpeg",
  },
];

export const sportsNavItems = [
  {
    title: "Football",
    subtitle: "Play Hard",
  },
  {
    title: "Basketball",
    subtitle: "Hoop Dreams",
  },
  {
    title: "Karate",
    subtitle: "Stay Strong",
  },
  {
    title: "Swimming",
    subtitle: "Dive In",
  },
];

export const footballOverview = {
  title: "Foorball Academy",
  description:
    "The Football Academy at JARIS fosters teamwork, agility, and skill development in a supportive environment. With structured drills, strategy sessions, and match play, students improve their football techniques while learning the value of sportsmanship.",
  imgSrc: "/images/extracurricular/football-overview.jpeg",
};

export const footballSubjects = [
  {
    level: "Tier 1: Beginner level",
    title: "Football Fundamentals",
    description:
      "Students will learn basic football skills, such as dribbling, passing, and shooting, along with an introduction to game rules.",
  },
  {
    level: "Tier 2: Intermediate level",
    title: "Intermediate Football",
    description:
      "In this tier, students will focus on game strategy, team coordination, and advanced drills to improve ball control and stamina.",
  },
  {
    level: "Tier 3: Advanced level",
    title: "Advanced Football Techniques",
    description:
      "In this tier, students will focus on game strategy, team coordination, and advanced drills to improve ball control and stamina.",
  },
];

export const footballSchedule = {
  schedule: [
    {
      key: "1",
      day: "Days",
      detail: "Sunday to Thursday",
    },
    {
      key: "2",
      day: "Time",
      detail: "6:30 AM - 12:30 PM",
    },
  ],
  description:
    "This daily schedule allows students to immerse themselves in Football. Each day is designed to focus on different aspects of training, ensuring that students gain a holistic football education while balancing their other academic commitments.",
};

export const footballCTADescription =
  "Whether your child is a budding player or a curious beginner, our Football Academy offers a structured, engaging, and dynamic environment to cultivate their skills.";

export const basketballOverview = {
  title: "Basketball Academy",
  description:
    "The Basketball Academy at JARIS aims to enhance agility, coordination, and teamwork. With a combination of skills training and match play, students will improve their shooting, dribbling, and defensive techniques, all while learning to work cohesively with their team",
  imgSrc: "/images/extracurricular/aerobics-overview.png",
};

export const basketballSubjects = [
  {
    level: "Tier 1: Beginner level",
    title: "Basketball Basics",
    description:
      "Students are introduced to basic dribbling, shooting, and passing skills, along with understanding the game's fundamental rules.",
  },
  {
    level: "Tier 2: Intermediate level",
    title: "Intermediate Basketball",
    description:
      "In this tier, students will focus on game strategy, team coordination, and advanced drills to improve ball control and stamina.",
  },
  {
    level: "Tier 3: Advanced level",
    title: "Advanced Basketball Techniques",
    description:
      "In this tier, students will focus on game strategy, team coordination, and advanced drills to improve ball control and stamina.",
  },
];

export const basketballSchedule = {
  schedule: [
    {
      key: "1",
      day: "Days",
      detail: "Sunday to Thursday",
    },
    {
      key: "2",
      day: "Time",
      detail: "6:30 AM - 12:30 PM",
    },
  ],
  description:
    "This daily schedule allows students to immerse themselves in BasketBall. Each day is designed to focus on different aspects of training, ensuring that students gain a holistic education while balancing their other academic commitments.",
};

export const basketballCTADescription =
  "Whether your child is a budding player or a curious beginner, our Basketball Academy offers a structured, engaging, and dynamic environment to cultivate their skills.";

export const karateOverview = {
  title: "Karate Academy",
  description:
    "The Karate Academy at JARIS builds discipline, self-defense skills, and physical fitness. Students will learn karate techniques while gaining confidence, focus, and respect for themselves and others through structured training.",
  imgSrc: "/images/extracurricular/aerobics-overview.png",
};

export const karateSubjects = [
  {
    level: "Tier 1: Beginner level",
    title: "Introduction to Karate",
    description:
      "Basic karate stances, punches, and kicks are taught along with an understanding of martial arts philosophy and respect.",
  },
  {
    level: "Tier 2: Intermediate level",
    title: "Intermediate Karate Techniques",
    description:
      "Focuses on refining basic techniques, learning self-defense moves, and starting sparring practice to enhance coordination and discipline.",
  },
  {
    level: "Tier 3: Advanced level",
    title: "Advanced Karate Training",
    description:
      "Students will advance to more complex sparring, kata (form), and self-defense techniques. They will also develop mental focus and precision for higher-level belt tests.",
  },
];

export const karateSchedule = {
  schedule: [
    {
      key: "1",
      day: "Days",
      detail: "Sunday to Thursday",
    },
    {
      key: "2",
      day: "Time",
      detail: "6:30 AM - 12:30 PM",
    },
  ],
  description:
    "This daily schedule allows students to immerse themselves in Karate. Each day is designed to focus on different aspects of training, ensuring that students gain a holistic education while balancing their other academic commitments.",
};

export const karateCTADescription =
  "Whether your child is a budding future athlete or a curious beginner, our Karate offers a structured, engaging, and dynamic environment to cultivate their skills.";

export const swimmingOverview = {
  title: "Swimming Academy",
  description:
    "Dive into excellence at the Swimming Academy at JARIS. Students will learn the fundamentals of swimming, water safety, and advanced strokes in a safe and engaging environment, improving their confidence in the wate",
  imgSrc: "/images/extracurricular/aerobics-overview.png",
};

export const swimmingSubjects = [
  {
    level: "Tier 1: Beginner level",
    title: "Beginner Swimming Skills",
    description:
      "Students will learn water safety, floating techniques, and basic strokes such as freestyle and backstroke.",
  },
  {
    level: "Tier 2: Intermediate level",
    title: "Intermediate Swimming Skills",
    description:
      "Focuses on improving stroke technique, endurance, and introducing more advanced strokes like breaststroke and butterfly.",
  },
  {
    level: "Tier 3: Advanced level",
    title: "Advanced Swimming Skills",
    description:
      "Students will participate in competitive swim drills, improving speed, technique, and stamina for competitive or long-distance swimming.",
  },
];

export const swimmingSchedule = {
  schedule: [
    {
      key: "1",
      day: "Days",
      detail: "Sunday to Thursday",
    },
    {
      key: "2",
      day: "Time",
      detail: "6:30 AM - 12:30 PM",
    },
  ],
  description:
    "This daily schedule allows students to immerse themselves in Swimming. Each day is designed to focus on different aspects of training, ensuring that students gain a holistic education while balancing their other academic commitments.",
};

export const swimmingCTADescription =
  "Whether your child is a budding future athlete or a curious beginner, our Swimming offers a structured, engaging, and dynamic environment to cultivate their skills.";

// Special Needs
export const specialNeedsHeroCarouselItems = [
  {
    title: "Special Needs",
    subtitle: "Join US TO BRIGHTEN YOUR FUTURE",
    imgUrl: "/images/about/about-hero-carousel-slide-1.jpeg",
  },
  {
    title: "Special Needs",
    subtitle: "Join US TO BRIGHTEN YOUR FUTURE",
    imgUrl: "/images/about/about-hero-carousel-slide-2.jpeg",
  },
  {
    title: "Special Needs",
    subtitle: "Join US TO BRIGHTEN YOUR FUTURE",
    imgUrl: "/images/about/about-hero-carousel-slide-3.jpeg",
  },
  {
    title: "Special Needs",
    subtitle: "Join US TO BRIGHTEN YOUR FUTURE",
    imgUrl: "/images/about/about-hero-carousel-slide-4.jpeg",
  },
];

// Gallery
export const newsCarouselItems = [
  {
    title: "Gallery",
    subtitle: "Find out more about JARIS",
    imgUrl: "/images/gallery/new-gallery-pictures/_DSC0293-Enhanced-NR.jpg",
  },
  {
    title: "Need help?",
    subtitle: "We're here to help. Find our contact information below",
    imgUrl: "/images/gallery/new-gallery-pictures/_DSC0165-Enhanced-NR.jpg",
  },
  {
    title: "Culture",
    subtitle: "Celebrating Diverse Cultures",
    imgUrl: "/images/gallery/new-gallery-pictures/nursery.jpeg",
  },
  {
    title: "Sports",
    subtitle: "Fostering Competitive Sport Activities",
    imgUrl: "/images/gallery/new-gallery-pictures/_DSC0342-Enhanced-NR.jpg",
  },
];

export const newsNavItems = [
  {
    title: "Gallery",
    subtitle: "Explore Our",
  },
  {
    title: "News",
    subtitle: "Our",
  },
  {
    title: "Events",
    subtitle: "Our",
  },
  // {
  //   title: "Announcements",
  //   subtitle: "Check",
  // },
];

export const galleryPhotos = [
  {
    src: "/images/gallery/new-gallery-pictures/about-founder.jpeg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/basketball-field.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0165-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0170-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0175-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0186-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0188-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0191-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0201-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0210-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0213-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0219-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0221-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0223-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0228-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0233-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0238-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0244-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0247-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0253-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0254-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0256-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0257-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0258-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0261-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0264-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0266-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0274-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0276-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0277-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0280-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0282-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0293-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0295-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0300-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0302-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0305-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0308-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0309-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0311-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0312-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0315-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0320-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0321-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0329-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0337-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0342-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0348-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0352-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0354-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/_DSC0356-Enhanced-NR.jpg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/IMG_4879.jpeg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/montesoiree3.jpeg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
  {
    src: "/images/gallery/new-gallery-pictures/nursery.jpeg",
    width: 4,
    height: 3,
    sizes: "(min-width: 1024px) 33.3%, (min-width: 768px) 50%, 100%",
  },
];

export const newsBannerItems = [
  {
    title: "Annual Day",
    description:
      "Annual Day at Jawahir International School. The Baptist High School saw life and energy being propelled.",
    imgUrl: "/images/gallery/news-banners/news-annual-day.jpeg",
    modal: {
      insideImg: "/images/gallery/news-banners/modals/modal-annual-day.jpeg",
      longDescription:
        "Annual Day at Jawahir International School. The Baptist High School saw life and energy being propelled into an 'ethos inspiring vision' formulated by the school this year. Next came the Primary students with their depiction of compassionate mother nature being ravaged by the reckless insensitive actions of man. Through song and dance they inculcated Eco-friendly attitudes.",
    },
  },
  {
    title: "Sports Gala",
    description:
      "The much awaited Annual Sports Day was held on Saturday 16th March.",
    imgUrl: "/images/gallery/news-banners/news-sports-gala.jpeg",
    modal: {
      insideImg: "/images/gallery/news-banners/modals/modal-sports-gala.jpeg",
      longDescription:
        "The much awaited Annual Sports Gala was held on Saturday 16th March. The fantastic turnout from the parents and the pleasant weather were the perfect boost for the students on their very first sports day at the Jawahir International School.",
    },
  },
  {
    title: "Tablo",
    description:
      "Sports are a great way for kids to have fun, stay fit, improve skills, and make friends.",
    imgUrl: "/images/gallery/news-banners/news-tablo.jpeg",
    modal: {
      insideImg: "",
      longDescription: "",
    },
  },
];

export const eventsBannerItems = [
  {
    title: "Junior British / Pakistani (Boys) English Debate Competition",
    description:
      "Our junior graders were having a magnificent debate last week about the competency of their teachers ",
    imgUrl: "/images/gallery/events-banners/events-debate-1.jpeg",
    modal: {
      insideImg: "/images/gallery/events-banners/modals/modal-debate-1.jpeg",
      longDescription:
        "Our junior graders were having a magnificent debate last week about the competency of their teachers especially related to their treatment with the students. In form of various games to play, the students divided into two groups and spoke about the affection towards the teachers and resentment against them. The committee is finalising the report for our website which will be uploaded soon.",
    },
    details: {
      date: "29 Jun, 2022",
      time: "8am - 5pm",
      category: "Event",
    },
  },
  {
    title: "English Debate Competition British & Pakistani Section for Boys",
    description: "",
    imgUrl: "/images/gallery/events-banners/events-debate-2.jpeg",
    modal: {
      insideImg: "",
      longDescription: "",
    },
    details: {
      date: "29 Jun, 2022",
      time: "8am - 5pm",
      category: "Event",
    },
  },
  {
    title: "Edmodo",
    description:
      "We are pleased to inform you that we will be using Edmodo (www.edmodo.com) starting new academic year (2016-2017).",
    imgUrl: "/images/gallery/events-banners/events-edmodo.jpeg",
    modal: {
      insideImg: "/images/gallery/events-banners/events-edmodo.jpeg",
      longDescription:
        "We are pleased to inform you that we will be using Edmodo (www.edmodo.com) starting new academic year (2016-2017). The accounts for students have already been created which can easily be accessed by using student code both for username and password. The parents can create their own account and ask their children to provide their group code to add them in their account. This will facilitate daily follow-up between the faculty and the parents. You will notice great change by using this program. The more you will use, the more you will learn. Please don’t hesitate to contact our IT team leader Adeel Khaliq (4785300-226) in case of any difficulty, who will either himself or his team member will help and guide you.",
    },
    details: {
      date: "29 Jun, 2022",
      time: "8am - 5pm",
      category: "Event",
    },
  },
];
