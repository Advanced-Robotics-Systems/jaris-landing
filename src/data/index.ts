import { ICONS } from "@/utils/icons";

// Navbar
export const navItems = [
  {
    name: "Home",
    link: "/",
    sublinks: [
      {
        name: "Who we are",
        link: "/",
      },
      {
        name: "Our Schools",
        link: "/",
        sublinks: [
          {
            name: "FJARIS",
            link: "/",
          },
          {
            name: "SJARIS",
            link: "/",
          },
          {
            name: "TJARIS",
            link: "/",
          },
        ],
      },
      {
        name: "Facilities",
        link: "/",
      },
    ],
  },
  {
    name: "Admission",
    link: "/admission",
    sublinks: [
      {
        name: "Admission Info",
        link: "#",
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
        link: "#",
      },
      {
        name: "Curriculum",
        link: "#",
        sublinks: [
          {
            name: "British",
            link: "#",
          },
          {
            name: "American",
            link: "#",
          },
          {
            name: "Pakistan",
            link: "#",
          },
          {
            name: "Sudan",
            link: "#",
          },
          {
            name: "Egypt",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    name: "Portal",
    link: "",
    sublinks: [
      {
        name: "Gallery",
        link: "#",
      },
      {
        name: "Academy",
        link: "#",
        sublinks: [
          {
            name: "Kindergarten",
            link: "#",
          },
          {
            name: "Extracurricular",
            link: "#",
          },
          {
            name: "Sports",
            link: "#",
          },
          {
            name: "Special needs",
            link: "#",
          },
        ],
      },
      {
        name: "News",
        link: "#",
        sublinks: [
          {
            name: "News",
            link: "#",
          },
          {
            name: "Events",
            link: "#",
          },
          {
            name: "Announcements",
            link: "#",
          },
        ],
      },
      {
        name: "Student",
        link: "#",
        sublinks: [
          {
            name: "Login",
            link: "#",
          },
          {
            name: "Classera Login",
            link: "#",
          },
          {
            name: "Online Results",
            link: "#",
          },
          {
            name: "Exam Policies",
            link: "#",
          },
          {
            name: "Classera Support",
            link: "#",
          },
          {
            name: "Withdrawal",
            link: "#",
          },
        ],
      },
      {
        name: "Teacher",
        link: "#",
        sublinks: [
          {
            name: "Login",
            link: "#",
          },
          {
            name: "Staff Contact",
            link: "#",
          },
        ],
      },
      {
        name: "Payment Portal",
        link: "#",
        sublinks: [
          {
            name: "Bank Details",
            link: "#",
          },
          {
            name: "Online Payment",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    name: "About",
    link: "/about",
    sublinks: [
      {
        name: "Who We Are",
        link: "#",
      },
      {
        name: "Our Schools",
        link: "#",
        sublinks: [
          {
            name: "FJARIS",
            link: "#",
          },
          {
            name: "SJARIS",
            link: "#",
          },
          {
            name: "TJARIS",
            link: "#",
          },
        ],
      },
      {
        name: "Facilities",
        link: "#",
      },
    ],
  },
  {
    name: "Contact",
    link: "/contact",
    sublinks: [
      {
        name: "Contact Us",
        link: "#",
      },
      {
        name: "My Email Login",
        link: "#",
      },
    ],
  },
];

// Footer
export const footerLinks = {
  contact: [
    { name: "Contact Us", link: "/contact" },
    { name: "Staff Contact", link: "/staff-contact" },
    { name: "Our Schools", link: "/schools" },
    { name: "FAQ", link: "/faq" },
  ],
  explore: [
    { name: "About", link: "/about" },
    { name: "Admission", link: "/admission" },
    { name: "Academy", link: "/academy" },
    { name: "Photo Gallery", link: "/gallery" },
    { name: "News", link: "/news" },
  ],
  login: [
    { name: "Student Login", link: "/student-login" },
    { name: "Teacher Login", link: "/teacher-login" },
    { name: "Staff Login", link: "/staff-login" },
  ],
};

export const footerSocials = [
  {
    icon: ICONS.instagram,
    link: "https://www.instagram.com",
  },
  {
    icon: ICONS.twitter,
    link: "https://www.twitter.com",
  },
  {
    icon: ICONS.youtube,
    link: "https://www.youtube.com",
  },
  {
    icon: ICONS.linkedin,
    link: "https://www.linkedin.com",
  },
];

// Shared
export const exploreItems = [
  {
    title: "News",
    description:
      "Stay in the Loop! Explore the Latest Updates and Discover What's Happening Now!",
  },
  {
    title: "Our Schools",
    description:
      "Take the First Step Toward Excellence. Explore Our Schools and Find the Perfect Fit for Your Future!",
  },
  {
    title: "Academy",
    description:
      "Unlock Your True Potential! Discover Our Academy and Start Shaping Your Success Today!",
  },
];

// Home
export const homeCarouselItems = [
  {
    subtitle: "DISCOVER",
    subtitleColored: "YOUR",
    title: "TALENTS",
    imgUrl: "/images/home/home-hero-slide-1.jpeg",
  },
  {
    subtitle: "DISCOVER",
    subtitleColored: "YOUR",
    title: "TALENTS",
    imgUrl: "/images/home/home-hero-slide-2.jpeg",
  },
  {
    subtitle: "DISCOVER",
    subtitleColored: "YOUR",
    title: "TALENTS",
    imgUrl: "/images/home/home-hero-slide-3.png",
  },
];

export const homeExperiences = [
  {
    title: "20 Nationalities Represented",
    subtitle:
      "Our campus proudly represents 20 nationalities, fostering a tapestry of cultures and viewpoints. This multicultural environment enriches education, nurtures global awareness and promotes unity among students.",
  },
  {
    title: "90% School Attendance rate",
    subtitle:
      "With a remarkable 90% attendance rate, our school empowers students for successful futures, Our education equips graduates with skills, knowledge and confidence to excel in higher education and beyond.",
  },
];

export const homePartnerSlides = [
  {
    title: "Islamabad Board",
    imgUrl: "/images/home/islamabad-board.png",
  },
  {
    title: "Egypt Education Board",
    imgUrl: "/images/home/egypt-ministry-education.png",
  },
  {
    title: "Cambridge",
    imgUrl: "/images/home/cambridge.png",
  },
  {
    title: "College Board",
    imgUrl: "/images/home/collegeboard.png",
  },
  {
    title: "Sudan Education Board",
    imgUrl: "/images/home/sudan-ministry-education.png",
  },
];

export const counts = [
  {
    title: "Our Students",
    count: 750,
    icon: ICONS.student,
  },
  {
    title: "Our Teachers",
    count: 360,
    icon: ICONS.teacher,
  },
  {
    title: "Our Staff",
    count: 750,
    icon: ICONS.staff,
  },
];

export const ctaSchoolsCarouselItems = [
  {
    title: "INSPIRATION",
    subtitle: "I fell in love with photography in ninth grade at HW.",
    imgUrl: "/images/home/cta-school-carousel-slide-1.png",
  },
  {
    title: "LEADERSHIP",
    subtitle:
      "I have grown so much as an entrepreneur and person leading the HW Inc. summer entrepreneurship camp.",
    imgUrl: "/images/home/cta-school-carousel-slide-2.jpeg",
  },
  {
    title: "TEAMWORK",
    subtitle: "I tried tackle football this year and really enjoyed it.",
    imgUrl: "/images/home/cta-school-carousel-slide-3.jpeg",
  },
  {
    title: "RESILIENCE",
    subtitle:
      "I have definitely grown academically at Harvard-Westlake and learned how to manage my time better.",
    imgUrl: "/images/home/cta-school-carousel-slide-4.jpeg",
  },
];

// About
export const aboutHeroCarouselItems = [
  {
    title: "About Us",
    subtitle: "Find out more about JARIS",
    imgUrl: "/images/about/about-hero-carousel-slide-1.jpeg",
  },
  {
    title: "About Us",
    subtitle: "Find out more about JARIS",
    imgUrl: "/images/about/about-hero-carousel-slide-2.jpeg",
  },
  {
    title: "About Us",
    subtitle: "Find out more about JARIS",
    imgUrl: "/images/about/about-hero-carousel-slide-3.jpeg",
  },
  {
    title: "About Us",
    subtitle: "Find out more about JARIS",
    imgUrl: "/images/about/about-hero-carousel-slide-4.jpeg",
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
    imgUrl: "/images/about/facility-computer.jpeg",
  },
];

export const fJarisCurriculumImages = [
  {
    title: "Jawahir",
    imgSrc: "/logos/jaris-logo-solid.jpeg",
  },
  {
    title: "Islamabad",
    imgSrc: "/images/home/islamabad-board.png",
  },
  {
    title: "Cambridge",
    imgSrc: "/images/about/cambridge-white.png",
  },
];

export const sJarisCurriculumImages = [
  {
    title: "Jawahir",
    imgSrc: "/logos/jaris-logo-solid.jpeg",
  },
  {
    title: "College Board",
    imgSrc: "/images/home/collegeboard.png",
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
  {
    title: "Jawahir",
    imgSrc: "/logos/jaris-logo-solid.jpeg",
  },
  {
    title: "Islamabad",
    imgSrc: "/images/home/islamabad-board.png",
  },
  {
    title: "Edexcel",
    imgSrc: "/images/home/edexcel.png",
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
    subtitle: "Find out more about JARIS",
    imgUrl: "/images/about/about-hero-carousel-slide-1.jpeg",
  },
  {
    title: "Admission",
    subtitle: "Find out more about JARIS",
    imgUrl: "/images/about/about-hero-carousel-slide-2.jpeg",
  },
  {
    title: "Admission",
    subtitle: "Find out more about JARIS",
    imgUrl: "/images/about/about-hero-carousel-slide-3.jpeg",
  },
  {
    title: "Admission",
    subtitle: "Find out more about JARIS",
    imgUrl: "/images/about/about-hero-carousel-slide-4.jpeg",
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
    imgUrl: "/images/contact/contact-slide-2.jpeg",
  },
  {
    title: "Whatsapp",
    subtitle: "WhatsApp us and immediately get your info.",
    imgUrl: "/images/contact/contact-slide-3.jpeg",
  },
  {
    title: "Join US",
    subtitle: "Join our community and grow to your highest potential.",
    imgUrl: "/images/contact/contact-slide-4.jpeg",
  },
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
    role: "Principal SJARIS",
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
    title: "JARIS",
    subtitle: ["aftabahmad_vp@jawahirschool.com", "zahid.jaris@gmail.com"],
  },
  {
    icon: ICONS.email,
    title: "SJARIS",
    subtitle: ["liaqat.ali.khan_vp@jawahirschool.com"],
  },
  {
    icon: ICONS.email,
    title: "TJARIS (NI)",
    subtitle: ["zahid.jaris@gmail.com"],
  },
  {
    icon: ICONS.clock,
    title: "Opening Hours",
    subtitle: ["SUN - THU : 6.30AM - 12.30PM", "FRI - SAT : closed"],
  },
];
