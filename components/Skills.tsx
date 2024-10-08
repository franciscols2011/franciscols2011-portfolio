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
		link: "react.dev",
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
];
const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.05,
		},
	},
};

const skillVariants = {
	hidden: { opacity: 0, scale: 0 },
	visible: { opacity: 1, scale: 1 },
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
			className="relative w-full p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden"
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
			<div className="relative z-10 w-full p-8 rounded-lg">
				<h1 className="text-3xl font-extrabold mb-4 text-gray-800 dark:text-gray-200 tracking-wider">
					{t("skills.title")}
				</h1>
				<div className="flex flex-wrap gap-6 justify-center">
					{skillsData.map((skill, index) => (
						<motion.a
							key={index}
							href={skill.link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-6 py-4 rounded-lg cursor-pointer shadow"
							variants={skillVariants}
							whileHover={{ scale: 1.1 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<div className={`text-4xl mb-2 ${skill.iconColor}`}>
								{skill.icon}
							</div>
							<span>{skill.name}</span>
						</motion.a>
					))}
				</div>
			</div>
		</motion.div>
	);
}

export default Skills;
