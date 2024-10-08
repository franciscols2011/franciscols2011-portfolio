// components/WorkExperience.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaBuilding, FaCashRegister, FaHotel } from "react-icons/fa";
import Particles from "./ui/particles";
import { useEffect, useState } from "react";

interface WorkExperienceItem {
	startDate: string;
	endDate: string;
	companyName: string;
	jobTitle: string;
	description: string[];
	icon?: React.ReactNode;
	iconColor?: string;
}

const WorkExperience = () => {
	const { t } = useTranslation();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const workExperienceData: WorkExperienceItem[] = [
		{
			startDate: t("work_experience.items.0.startDate"),
			endDate: t("work_experience.items.0.endDate"),
			companyName: t("work_experience.items.0.companyName"),
			jobTitle: t("work_experience.items.0.jobTitle"),
			description: t("work_experience.items.0.description", {
				returnObjects: true,
			}) as string[],
			icon: <FaBuilding />,
			iconColor: "text-blue-500 dark:text-blue-400",
		},
		{
			startDate: t("work_experience.items.1.startDate"),
			endDate: t("work_experience.items.1.endDate"),
			companyName: t("work_experience.items.1.companyName"),
			jobTitle: t("work_experience.items.1.jobTitle"),
			description: t("work_experience.items.1.description", {
				returnObjects: true,
			}) as string[],
			icon: <FaCashRegister />,
			iconColor: "text-green-500 dark:text-green-400",
		},
		{
			startDate: t("work_experience.items.2.startDate"),
			endDate: t("work_experience.items.2.endDate"),
			companyName: t("work_experience.items.2.companyName"),
			jobTitle: t("work_experience.items.2.jobTitle"),
			description: t("work_experience.items.2.description", {
				returnObjects: true,
			}) as string[],
			icon: <FaHotel />,
			iconColor: "text-orange-500 dark:text-orange-400",
		},
	];

	const listVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut",
				staggerChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -50, rotate: -5 },
		visible: {
			opacity: 1,
			x: 0,
			rotate: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<motion.div
			className="relative w-full p-6 sm:p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden"
			initial="hidden"
			animate="visible"
			variants={listVariants}
		>
			<Particles
				className="absolute inset-0 z-0"
				color="rgba(0, 0, 0, 0.02)"
				quantity={100}
				size={2}
			/>
			<div className="relative z-10 w-full p-4 sm:p-6 rounded-lg">
				<h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800 dark:text-gray-200 tracking-wide">
					{t("work_experience.title")}
				</h1>
				<motion.ol
					className="relative border-l border-gray-300 dark:border-gray-700 ml-4 sm:ml-6"
					variants={listVariants}
				>
					{workExperienceData.map((item, index) => (
						<motion.li
							key={index}
							className="mb-8 sm:mb-12 ml-4 sm:ml-6"
							variants={itemVariants}
						>
							<div className="flex items-center gap-4 sm:gap-5">
								<motion.div
									className={`text-3xl sm:text-4xl ${item.iconColor}`}
									whileHover={{ scale: 1.2 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									{item.icon}
								</motion.div>
								<div>
									<time className="mb-1 text-sm sm:text-base font-normal leading-none text-gray-500 dark:text-gray-400">
										{item.startDate} - {item.endDate}
									</time>
									<h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
										{item.jobTitle} {t("work_experience.at")} {item.companyName}
									</h3>
								</div>
							</div>
							<ul className="text-base sm:text-lg text-gray-700 dark:text-gray-300 list-disc ml-5 mt-3 space-y-2">
								{item.description.map((desc, idx) => (
									<li key={idx}>{desc}</li>
								))}
							</ul>
						</motion.li>
					))}
				</motion.ol>
			</div>
		</motion.div>
	);
};

export default WorkExperience;
