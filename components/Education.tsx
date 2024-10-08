// components/Education.tsx
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
	FaCode,
	FaLaptopCode,
	FaGraduationCap,
	FaLanguage,
} from "react-icons/fa";
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
			startDate: t("education.items.3.startDate"),
			endDate: t("education.items.3.endDate"),
			schoolName: t("education.items.3.schoolName"),
			address: t("education.items.3.address"),
			courseName: t("education.items.3.courseName"),
			icon: <FaLanguage />,
			iconColor: "text-green-500 dark:text-green-400",
		},
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

	const containerVariants = {
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
			variants={containerVariants}
		>
			<Particles
				className="absolute inset-0 z-0"
				color="rgba(0, 0, 0, 0.02)"
				quantity={100}
				size={2}
			/>
			<div className="relative z-10 w-full p-4 sm:p-6 rounded-lg">
				<h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800 dark:text-gray-200 tracking-wide">
					{t("education.title")}
				</h1>
				<motion.ol
					className="relative border-l border-gray-300 dark:border-gray-700 ml-4 sm:ml-6"
					variants={containerVariants}
				>
					{educationData.map((item, index) => (
						<motion.li
							key={index}
							className="mb-8 sm:mb-12 ml-4 sm:ml-6"
							variants={itemVariants}
						>
							<div className="flex items-center gap-4 sm:gap-5">
								<motion.div
									className={`text-3xl sm:text-4xl ${item.iconColor}`}
									whileHover={{ scale: 1.2, rotate: 10 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									{item.icon}
								</motion.div>
								<div>
									<time className="mb-1 text-sm sm:text-base font-normal leading-none text-gray-500 dark:text-gray-400">
										{item.startDate} - {item.endDate || t("education.present")}
									</time>
									<h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
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
