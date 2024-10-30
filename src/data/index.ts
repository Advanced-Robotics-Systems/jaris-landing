import { ICONS } from "@/utils/icons";

// Navbar
export const navItems = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Admission",
		link: "/admission",
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
						link: "/exam-policy",
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
				link: "/payment",
				sublinks: [
					{
						name: "Bank Details",
						link: "/payment",
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
				link: "/about",
			},
			{
				name: "Our Schools",
				link: "/schools",
				sublinks: [
					{
						name: "FJARIS",
						link: "/schools/fjaris",
					},
					{
						name: "SJARIS",
						link: "/schools/sjaris",
					},
					{
						name: "TJARIS",
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
		sublinks: [
			{
				name: "Contact Us",
				link: "/contact",
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
    imgSrc: "/images/facilities/facilities-computer.jpeg",
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
      { note: "In order to maintain healthy competition among the students missing any monthly examination (for any reason) the student will automatically be out of competition and will not be ranked at the end of the year." },
    ],
  },
  {
    title: "Mid-Term Examination",
    content: [
      "The students securing less than 50% marks (including 1st and 2nd monthly examinations) in the compulsory subjects Mathematics Science English and Arabic / Urdu) will be kept in abeyance in order for them to get aggregate 50%marks Mid + Final Terms) until final examination. No repetition is allowed under any circumstance.",
      { note: "The student missing complete First Term examination either due to joining late or any other reason (sick leave absent) will be examined for the First Term (compulsory subjects) within two weeks at the beginning of the second term." },
    ],
  },
  {
    title: "Absentees",
    content: [
      "Students absent during terminal examinations for any reason (sick or otherwise) and missing any main subject examination will be examined for the missing subjects after one week from the final results. The students missing whole term (Mid or Final) for any reason (sick or otherwise) will be examined within two weeks after the final examination. A separate date sheet indicating dates and days will be issued immediately after the final examination.",
      { warning: "Warning: Many parents plan for vacation and reserve seats prior to announcing the results and it becomes very difficult to inform them about the supplementary examination. The students showing poor results during the terminal examination should not leave the country until they get confirmation from the school." },
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
      { note: "The student moving after first monthly examination will not be given any assessment but such students should give one month advance notice for school leaving certificates prior to leaving the school." },
      "The students who are moving from the school (during second Term) after completing two monthly examinations (3rd and 4th) and prior to the Final Term Examination to other city or country will be assessed for the portion taught during their presence in the class along with the two monthly examination results and final results card will be issued but no authentication is guaranteed.",
      { note: "The student moving after 3rd monthly examination will only be given mid-term assessment card along with 3rd monthly examination result." },
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
  address: "Jawahir Al-Riyadh Educational Company, P.O. Box 19932, Riyadh 11465, Kingdom of Saudi Arabia.",
}
