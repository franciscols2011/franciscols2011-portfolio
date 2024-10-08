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
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -15 },
		visible: { opacity: 1, x: 0 },
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
				quantity={80}
				size={1.5}
			/>
			<div className="relative z-10 w-full p-4 sm:p-6 rounded-lg">
				<h1 className="text-2xl sm:text-3xl font-extrabold mb-3 text-gray-800 dark:text-gray-200 tracking-wide">
					{t("work_experience.title")}
				</h1>
				<motion.ol
					className="relative border-l border-gray-300 dark:border-gray-700 ml-4 sm:ml-6"
					variants={listVariants}
				>
					{workExperienceData.map((item, index) => (
						<motion.li
							key={index}
							className="mb-6 sm:mb-8 ml-4 sm:ml-6"
							variants={itemVariants}
						>
							<div className="flex items-center gap-3 sm:gap-4">
								<motion.div
									className={`text-2xl sm:text-3xl ${item.iconColor}`}
									whileTap={{ scale: 0.9 }}
								>
									{item.icon}
								</motion.div>
								<div>
									<time className="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
										{item.startDate} - {item.endDate}
									</time>
									<h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
										{item.jobTitle} {t("work_experience.at")} {item.companyName}
									</h3>
								</div>
							</div>
							<ul className="text-sm sm:text-base text-gray-700 dark:text-gray-300 list-disc ml-5 mt-2 space-y-1">
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
