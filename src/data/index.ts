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
	},
	{
		name: "About",
		link: "/about",
	},
	{
		name: "Contact",
		link: "/contact",
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
