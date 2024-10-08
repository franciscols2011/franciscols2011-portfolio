// components/Education.tsx
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import Particles from "@/components/ui/particles";
import { useTranslation } from "react-i18next";

interface EducationItem {
	startDate: string;
	endDate?: string;
	collegeName?: string;
	schoolName?: string;
	courseName: string;
	address?: string;
	icon?: React.ReactNode;
	iconColor?: string;
}

const Education = () => {
	const { t } = useTranslation();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const educationData: EducationItem[] = [
		{
			startDate: t("education.items.0.startDate"),
			endDate: t("education.items.0.endDate"),
			collegeName: t("education.items.0.collegeName"),
			courseName: t("education.items.0.courseName"),
			icon: <FaCode />,
			iconColor: "text-red-500 dark:text-red-400",
		},
		{
			startDate: t("education.items.1.startDate"),
			endDate: t("education.items.1.endDate"),
			schoolName: t("education.items.1.schoolName"),
			address: t("education.items.1.address"),
			courseName: t("education.items.1.courseName"),
			icon: <FaLaptopCode />,
			iconColor: "text-yellow-500 dark:text-yellow-400",
		},
		{
			startDate: t("education.items.2.startDate"),
			endDate: t("education.items.2.endDate"),
			schoolName: t("education.items.2.schoolName"),
			address: t("education.items.2.address"),
			courseName: t("education.items.2.courseName"),
			icon: <FaGraduationCap />,
			iconColor: "text-blue-500 dark:text-blue-400",
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
		hidden: { opacity: 0, x: -20 },
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
					{t("education.title")}
				</h1>
				<motion.ol
					className="relative border-l border-gray-300 dark:border-gray-700 ml-4 sm:ml-6"
					variants={listVariants}
				>
					{educationData.map((item, index) => (
						<motion.li
							key={index}
							className="mb-8 sm:mb-10 ml-4 sm:ml-6"
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
										{item.startDate} - {item.endDate || t("education.present")}
									</time>
									<h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
										{item.courseName} {t("education.at")}{" "}
										{item.collegeName || item.schoolName}
									</h3>
									{item.address && (
										<p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
											{item.address}
										</p>
									)}
								</div>
							</div>
						</motion.li>
					))}
				</motion.ol>
			</div>
		</motion.div>
	);
};

export default Education;
