"use client";
import { whatsappData } from "@/data";
import { ICONS } from "@/utils/icons";
import { Button, Link } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const WhatsappWidget = () => {
	const [showWidget, setShowWidget] = useState(false);
	const [isPanelOpen, setIsPanelOpen] = useState(false);

	const togglePanel = () => {
		setIsPanelOpen(!isPanelOpen);
	};

	const checkScroll = () => {
		if (window.scrollY > window.innerHeight * 0.2) {
			setShowWidget(true);
		} else {
			setShowWidget(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScroll);

		return () => {
			window.removeEventListener("scroll", checkScroll);
		};
	}, []);

	return (
		<>
			<AnimatePresence>
				{showWidget && (
					<motion.div
						className="fixed bottom-5 right-5 z-50"
						initial={{ opacity: 0, rotate: 0 }}
						animate={{ opacity: 1, rotate: isPanelOpen ? 180 : 0 }}
						exit={{ opacity: 0, rotate: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Button
							size="lg"
							color="success"
							isIconOnly
							radius="full"
							onPress={togglePanel}
							startContent={
								isPanelOpen ? (
									<span className="text-jaris-white text-2xl">
										{ICONS.close}
									</span>
								) : (
									<span className="text-jaris-white text-2xl">
										{ICONS.whatsapp}
									</span>
								)
							}
						/>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Slide content */}
			<AnimatePresence>
				{isPanelOpen && (
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 20, opacity: 0 }}
						transition={{ duration: 0.5 }}
						className="fixed bottom-20 lg:bottom-30 right-5 w-96 max-w-[90%] bg-white shadow-lg border border-gray-200 rounded-lg z-[100]"
					>
						<div className="p-4 bg-whatsapp-green text-white rounded-t-lg">
							<div className="flex items-center space-x-4">
								<div className="text-2xl w-8">{ICONS.whatsapp}</div>
								<div>
									<h2 className="text-lg font-bold">Start a Conversation</h2>
									<p className="text-sm">
										Hi! Click one of our members below to chat on{" "}
										<strong>WhatsApp</strong>
									</p>
								</div>
							</div>
						</div>
						<div className="p-4 space-y-4 overflow-y-auto max-h-[65vh]">
							{whatsappData.map((contact, index) => (
								<Link
									isDisabled={!contact.active}
									key={index}
									href={contact.link}
									isExternal
									className="flex items-center space-x-4 hover:bg-gray-100 rounded-lg p-2 transition"
								>
									<div className="w-8 h-8 flex items-center justify-center text-2xl text-whatsapp-green">
										{ICONS.whatsapp}
									</div>
									<div>
										<p className="font-semibold text-jaris-black cursor-pointer">
											{contact.name}
										</p>
										<p className="text-sm text-gray-500 cursor-pointer">
											{contact.role}
										</p>
										<p className="text-sm text-gray-500 cursor-pointer">
											{contact.language}
										</p>
									</div>
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default WhatsappWidget;
