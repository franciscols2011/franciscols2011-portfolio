// components/Education.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import Particles from "@/components/ui/particles";

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

const educationData: EducationItem[] = [
	{
		startDate: "Noviembre 2023",
		endDate: "Marzo 2024",
		collegeName: "4Geeks Academy",
		courseName: "Full Stack Software Developer",
		icon: <FaCode />,
		iconColor: "text-red-500 dark:text-red-400",
	},
	{
		startDate: "2019",
		endDate: "2019",
		schoolName: "ORT",
		address: "Uruguay",
		courseName: "Analista Programador",
		icon: <FaLaptopCode />,
		iconColor: "text-yellow-500 dark:text-yellow-400",
	},
];

const listVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: -30 },
	visible: { opacity: 1, x: 0 },
};

function Education() {
	return (
		<motion.div
			className="relative w-full p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden"
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
			<div className="relative z-10 w-full p-8 rounded-lg">
				<h1 className="text-3xl font-extrabold mb-4 text-gray-800 dark:text-gray-200 tracking-wider">
					Educación
				</h1>
				<motion.ol
					className="relative border-l border-gray-300 dark:border-gray-700 ml-6"
					variants={listVariants}
				>
					{educationData.map((item, index) => (
						<motion.li
							key={index}
							className="mb-10 ml-6"
							variants={itemVariants}
						>
							<div className="flex items-center gap-4">
								<motion.div
									className={`text-3xl ${item.iconColor}`}
									whileHover={{ scale: 1.2, rotate: 10 }}
									transition={{ type: "spring", stiffness: 300 }}
								>
									{item.icon}
								</motion.div>
								<div>
									<time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
										{item.startDate} - {item.endDate || "Presente"}
									</time>
									<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
										{item.courseName} en {item.collegeName || item.schoolName}
									</h3>
									{item.address && (
										<p className="text-base text-gray-700 dark:text-gray-300">
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
}

export default Education;
