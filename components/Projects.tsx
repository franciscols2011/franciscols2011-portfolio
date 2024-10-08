// components/Projects.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
	FaReact,
	FaJsSquare,
	FaBootstrap,
	FaCss3Alt,
	FaPython,
	FaDatabase,
	FaGithub,
} from "react-icons/fa";
import {
	SiTailwindcss,
	SiExpress,
	SiMongodb,
	SiFlask,
	SiPaypal,
} from "react-icons/si";
import Particles from "@/components/ui/particles";
import { useTranslation } from "react-i18next";

interface Technology {
	name: string;
	icon: React.ReactNode;
	iconColor: string;
}

interface Project {
	title: string;
	description: string;
	code: string;
	technologies: Technology[];
}

const Projects = () => {
	const { t } = useTranslation();

	const projectsData: Project[] = [
		{
			title: t("projects.items.0.title"),
			description: t("projects.items.0.description"),
			code: "https://github.com/franciscols2011/mern",
			technologies: [
				{
					name: "Tailwind CSS",
					icon: <SiTailwindcss />,
					iconColor: "text-teal-500 dark:text-teal-400",
				},
				{
					name: "React",
					icon: <FaReact />,
					iconColor: "text-blue-500 dark:text-blue-400",
				},
				{
					name: "Express.js",
					icon: <SiExpress />,
					iconColor: "text-gray-800 dark:text-gray-300",
				},
				{
					name: "MongoDB",
					icon: <SiMongodb />,
					iconColor: "text-green-600 dark:text-green-500",
				},
				{
					name: "JavaScript",
					icon: <FaJsSquare />,
					iconColor: "text-yellow-500 dark:text-yellow-400",
				},
				{
					name: "PayPal API",
					icon: <SiPaypal />,
					iconColor: "text-blue-700 dark:text-blue-600",
				},
			],
		},
		{
			title: t("projects.items.1.title"),
			description: t("projects.items.1.description"),
			code: "https://github.com/franciscols2011/Therapy-Time",
			technologies: [
				{
					name: "React.js",
					icon: <FaReact />,
					iconColor: "text-blue-500 dark:text-blue-400",
				},
				{
					name: "Bootstrap",
					icon: <FaBootstrap />,
					iconColor: "text-purple-600 dark:text-purple-500",
				},
				{
					name: "CSS3",
					icon: <FaCss3Alt />,
					iconColor: "text-blue-600 dark:text-blue-500",
				},
				{
					name: "Python",
					icon: <FaPython />,
					iconColor: "text-yellow-600 dark:text-yellow-500",
				},
				{
					name: "Flask",
					icon: <SiFlask />,
					iconColor: "text-black dark:text-gray-200",
				},
				{
					name: "SQLAlchemy",
					icon: <FaDatabase />,
					iconColor: "text-gray-700 dark:text-gray-400",
				},
			],
		},
	];

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
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
				quantity={80}
				size={1.5}
			/>
			<div className="relative z-10 w-full p-4 sm:p-6 rounded-lg">
				<h1 className="text-2xl sm:text-3xl font-extrabold mb-3 text-gray-800 dark:text-gray-200 tracking-wide">
					{t("projects.title")}
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{projectsData.map((project, index) => (
						<motion.div
							key={index}
							className="flex flex-col rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-700"
							whileTap={{ scale: 0.98 }}
							variants={cardVariants}
						>
							<div className="p-4 sm:p-6 flex-grow flex flex-col">
								<h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
									{project.title}
								</h2>
								<p className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-3 sm:gap-4 mb-3 sm:mb-4">
									{project.technologies.map((tech, idx) => (
										<motion.div
											key={idx}
											className="flex items-center gap-2 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium px-3 py-1 rounded cursor-pointer shadow"
											whileTap={{ scale: 0.95 }}
										>
											<div className={`text-lg sm:text-xl ${tech.iconColor}`}>
												{tech.icon}
											</div>
											<span>{tech.name}</span>
										</motion.div>
									))}
								</div>
								<div className="mt-auto">
									<a
										href={project.code}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center w-full text-center bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-md transition-colors duration-200"
									>
										<FaGithub className="inline-block mr-2" />
										{t("projects.code")}
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default Projects;
