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
]
