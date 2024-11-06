"use client";
import { useEffect, useState } from "react";
import { navItems } from "@/data";
import { Image, Link } from "@nextui-org/react";
import { ICONS } from "@/utils/icons";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
	const [isOpen, setIsOpen] = useState<string | null>(null);
	const [isSubOpen, setIsSubOpen] = useState<string | null>(null);
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(
		null
	);
	const [openMobileSubSubMenu, setOpenMobileSubSubMenu] = useState<
		string | null
	>(null);

	const [isNavbarVisible, setNavbarVisible] = useState(true);
	const [lastScrollPos, setLastScrollPos] = useState(0);
	const [isScrolledPast, setScrolledPast] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			if (currentScrollPos > 0) {
				setScrolledPast(true);

				if (currentScrollPos < lastScrollPos) {
					setNavbarVisible(true);
				} else {
					setNavbarVisible(false);
				}
			} else {
				setScrolledPast(false);
				setNavbarVisible(true);
			}

			setLastScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollPos]);

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isMobileMenuOpen]);

	const handleMouseEnter = (name: string) => {
		setIsOpen(name);
	};

	const handleMouseLeave = () => {
		setIsOpen(null);
		setIsSubOpen(null);
	};

	const handleSubMouseEnter = (name: string) => {
		setIsSubOpen(name);
	};

	const toggleMobileSubMenu = (name: string) => {
		setOpenMobileSubMenu(openMobileSubMenu === name ? null : name);
		setOpenMobileSubSubMenu(null);
	};

	const toggleMobileSubSubMenu = (name: string) => {
		setOpenMobileSubSubMenu(openMobileSubSubMenu === name ? null : name);
	};

	// Animations for dropdown
	const dropdownVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
		exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
	};

	const subDropdownVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
		exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
	};

	const mobileMenuVariants = {
		hidden: { height: 0, opacity: 0 },
		visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
		exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
	};

	return (
		<nav
			className={`bg-bg-primary/50 backdrop-blur-lg w-full z-50 h-[70px] fixed top-0 transition-transform duration-300 ${
				isScrolledPast ? "" : "translate-y-0"
			} ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}
		>
			<div className="container mx-auto flex justify-between items-center h-full gap-10">
				<div className="navbar-brand flex items-center h-full">
					<Link href="/" className="text-2xl font-bold text-jaris-blue px-4">
						<Image
							src="/logos/jawahir-logo-full-new.png"
							alt="Jawahir International School"
							className="max-lg:hidden h-16"
						/>
						<Image
							src="/logos/jawahir-logo.png"
							alt="Jawahir International School"
							className="lg:hidden h-12"
						/>
					</Link>
				</div>

				{/* Desktop Menu */}
				<ul className="hidden md:flex items-center justify-center h-full">
					{navItems.map((item) => (
						<li
							key={item.name}
							className="relative group h-full"
							onMouseEnter={() => handleMouseEnter(item.name)}
							onMouseLeave={handleMouseLeave}
						>
							<Link
								size="lg"
								href={item.link}
								className="px-8 py-4 text-jaris-blue font-medium hover:bg-jaris-blue-hover transition duration-200 rounded h-full flex items-center justify-center"
							>
								{item.name}
							</Link>
							{item.sublinks && isOpen === item.name && (
								<motion.ul
									initial="hidden"
									animate="visible"
									exit="exit"
									variants={dropdownVariants}
									className="absolute left-0 top-full bg-bg-primary shadow-lg z-50 group-hover:block min-w-[200px]"
								>
									{item.sublinks.map((sub) => (
										<li
											key={sub.name}
											className="relative group"
											onMouseEnter={() => handleSubMouseEnter(sub.name)}
										>
											<Link
												size="lg"
												href={sub.link}
												className="px-4 py-3 text-jaris-blue hover:bg-jaris-blue-hover transition duration-200 flex gap-10"
											>
												<div>{sub.name}</div>
												{sub.sublinks && (
													<span
														className={`transition-transform duration-300 ${
															isSubOpen === sub.name ? "rotate-90 " : "rotate-0"
														}`}
													>
														{ICONS.link_right}
													</span>
												)}
											</Link>
											{sub.sublinks && isSubOpen === sub.name && (
												<motion.ul
													initial="hidden"
													animate="visible"
													exit="exit"
													variants={subDropdownVariants}
													className="absolute left-full top-0 bg-bg-primary shadow-lg z-50 group-hover:block min-w-[200px]"
												>
													{sub.sublinks.map((subSub) => (
														<li key={subSub.name}>
															<Link
																href={subSub.link}
																className="block px-4 py-2 text-jaris-gold-dark hover:bg-jaris-blue-hover transition duration-200"
															>
																{subSub.name}
															</Link>
														</li>
													))}
												</motion.ul>
											)}
										</li>
									))}
								</motion.ul>
							)}
						</li>
					))}
				</ul>

				{/* Mobile Menu Toggle */}
				<div className="md:hidden px-4">
					<button
						className="text-xl"
						onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
					>
						<motion.span
							key={isMobileMenuOpen ? "close" : "menu"}
							initial={{ opacity: 0, rotate: -90 }}
							animate={{ opacity: 1, rotate: 0 }}
							exit={{ opacity: 0, rotate: 90 }}
							transition={{ duration: 0.3 }}
							className="heading-md"
						>
							{isMobileMenuOpen ? ICONS.close : ICONS.menu}
						</motion.span>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="fixed top-[70px] inset-0 bg-jaris-blue bg-opacity-50 backdrop-blur-md z-40 h-screen"
							onClick={() => setMobileMenuOpen(false)}
						/>
						<motion.ul
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={mobileMenuVariants}
							className="md:hidden bg-bg-primary shadow-lg z-50 relative"
						>
							{navItems.map((item) => (
								<li key={item.name}>
									<div className="flex items-center">
										<Link
											size="lg"
											className="px-4 py-3 text-jaris-blue font-medium"
											href={item.link}
										>
											{item.name}
										</Link>
										{item.sublinks && (
											<button
												onClick={() => toggleMobileSubMenu(item.name)}
												className={`p-0 flex items-center justify-center transition-transform duration-300 ${
													openMobileSubMenu === item.name
														? "rotate-90 "
														: "rotate-0"
												}`}
											>
												<span className={` w-full text-left text-jaris-blue`}>
													{ICONS.link_right}
												</span>
											</button>
										)}
									</div>
									<AnimatePresence>
										{item.sublinks && openMobileSubMenu === item.name && (
											<motion.ul
												initial="hidden"
												animate="visible"
												exit="exit"
												variants={mobileMenuVariants}
												className="pl-4"
											>
												{item.sublinks.map((sub) => (
													<li key={sub.name}>
														<div className="flex items-center">
															<Link
																href={sub.link}
																size="lg"
																className="px-4 py-3 text-jaris-blue"
															>
																{sub.name}
															</Link>
															{sub.sublinks && (
																<button
																	onClick={() =>
																		toggleMobileSubSubMenu(sub.name)
																	}
																	className={`p-0 flex items-center justify-center transition-transform duration-300 ${
																		openMobileSubSubMenu === sub.name
																			? "rotate-90 "
																			: "rotate-0"
																	}`}
																>
																	<span
																		className={` w-full text-left text-jaris-blue`}
																	>
																		{ICONS.link_right}
																	</span>
																</button>
															)}
														</div>
														<AnimatePresence>
															{sub.sublinks &&
																openMobileSubSubMenu === sub.name && (
																	<motion.ul
																		initial="hidden"
																		animate="visible"
																		exit="exit"
																		variants={mobileMenuVariants}
																		className="pl-4"
																	>
																		{sub.sublinks.map((subSub) => (
																			<li key={subSub.name}>
																				<Link
																					href={subSub.link}
																					className="block px-4 py-2 text-jaris-blue"
																				>
																					{subSub.name}
																				</Link>
																			</li>
																		))}
																	</motion.ul>
																)}
														</AnimatePresence>
													</li>
												))}
											</motion.ul>
										)}
									</AnimatePresence>
								</li>
							))}
						</motion.ul>
					</>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Header;
