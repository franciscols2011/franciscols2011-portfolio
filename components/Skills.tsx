// components/Skills.tsx
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
	FaNodeJs,
	FaJsSquare,
	FaGitAlt,
	FaReact,
	FaJava,
	FaPython,
	FaAngular,
	FaDatabase,
} from "react-icons/fa";
import {
	SiSpringboot,
	SiSpring,
	SiTypescript,
	SiTailwindcss,
	SiMongodb,
	SiMysql,
	SiFlask,
	SiCloudinary,
} from "react-icons/si";
import Particles from "@/components/ui/particles";
import { useTranslation } from "react-i18next";

const skillsData = [
	{
		name: "Node.js",
		icon: <FaNodeJs />,
		iconColor: "text-green-500 dark:text-green-400",
		link: "https://nodejs.org/en/docs/",
	},
	{
		name: "JavaScript",
		icon: <FaJsSquare />,
		iconColor: "text-yellow-500 dark:text-yellow-400",
		link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
	},
	{
		name: "GIT",
		icon: <FaGitAlt />,
		iconColor: "text-orange-500 dark:text-orange-400",
		link: "https://git-scm.com/doc",
	},
	{
		name: "React.js",
		icon: <FaReact />,
		iconColor: "text-blue-500 dark:text-blue-400",
		link: "https://react.dev/docs/getting-started.html",
	},
	{
		name: "Java",
		icon: <FaJava />,
		iconColor: "text-red-500 dark:text-red-400",
		link: "https://docs.oracle.com/en/java/javase/21/",
	},
	{
		name: "Spring Boot",
		icon: <SiSpringboot />,
		iconColor: "text-green-500 dark:text-green-400",
		link: "https://spring.io/projects/spring-boot",
	},
	{
		name: "Spring Framework",
		icon: <SiSpring />,
		iconColor: "text-green-500 dark:text-green-400",
		link: "https://spring.io/projects/spring-framework",
	},
	{
		name: "Python",
		icon: <FaPython />,
		iconColor: "text-yellow-600 dark:text-yellow-500",
		link: "https://docs.python.org/es/3/",
	},
	{
		name: "Flask",
		icon: <SiFlask />,
		iconColor: "text-black dark:text-gray-200",
		link: "https://flask.palletsprojects.com/en/2.2.x/",
	},
	{
		name: "Angular 18",
		icon: <FaAngular />,
		iconColor: "text-red-600 dark:text-red-500",
		link: "https://angular.dev/",
	},
	{
		name: "TypeScript",
		icon: <SiTypescript />,
		iconColor: "text-blue-600 dark:text-blue-500",
		link: "https://www.typescriptlang.org/docs/",
	},
	{
		name: "Tailwind",
		icon: <SiTailwindcss />,
		iconColor: "text-teal-500 dark:text-teal-400",
		link: "https://tailwindcss.com/docs",
	},
	{
		name: "MongoDB",
		icon: <SiMongodb />,
		iconColor: "text-green-600 dark:text-green-500",
		link: "https://docs.mongodb.com/",
	},
	{
		name: "MySQL",
		icon: <SiMysql />,
		iconColor: "text-blue-700 dark:text-blue-600",
		link: "https://dev.mysql.com/doc/",
	},
	{
		name: "Cloudinary",
		icon: <SiCloudinary />,
		iconColor: "text-blue-300 dark:text-blue-200",
		link: "https://cloudinary.com/documentation",
	},
	{
		name: "SQLAlchemy",
		icon: <FaDatabase />,
		iconColor: "text-gray-700 dark:text-gray-400",
		link: "https://www.sqlalchemy.org/",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.1,
			ease: "easeInOut",
			staggerChildren: 0.1,
		},
	},
};

const skillVariants = {
	hidden: { opacity: 0, scale: 0.2 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.1, ease: "easeInOut" },
	},
};

function Skills() {
	const { t } = useTranslation();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

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
				<h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-800 dark:text-gray-200 tracking-wide text-center">
					{t("skills.title")}
				</h1>
				<motion.div
					className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 justify-items-center"
					variants={containerVariants}
				>
					{skillsData.map((skill, index) => (
						<motion.a
							key={index}
							href={skill.link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center justify-center w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm sm:text-base font-medium rounded-lg cursor-pointer shadow transition-transform"
							variants={skillVariants}
							whileHover={{ scale: 1.1 }}
							transition={{ type: "spring", stiffness: 260, damping: 20 }}
						>
							<div className={`text-4xl sm:text-5xl mb-2 ${skill.iconColor}`}>
								{skill.icon}
							</div>
							<span className="text-center">{skill.name}</span>
						</motion.a>
					))}
				</motion.div>
			</div>
		</motion.div>
	);
}

export default Skills;
