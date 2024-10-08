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
	link: string;
}

interface Project {
	title: string;
	description: string;
	code: string;
	technologies: Technology[];
}

const Projects = () => {
	const { t } = useTranslation();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

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
					link: "https://tailwindcss.com/docs",
				},
				{
					name: "React",
					icon: <FaReact />,
					iconColor: "text-blue-500 dark:text-blue-400",
					link: "https://react.dev/docs/getting-started.html",
				},
				{
					name: "Express.js",
					icon: <SiExpress />,
					iconColor: "text-gray-800 dark:text-gray-300",
					link: "https://expressjs.com/",
				},
				{
					name: "MongoDB",
					icon: <SiMongodb />,
					iconColor: "text-green-600 dark:text-green-500",
					link: "https://www.mongodb.com/docs/",
				},
				{
					name: "JavaScript",
					icon: <FaJsSquare />,
					iconColor: "text-yellow-500 dark:text-yellow-400",
					link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
				},
				{
					name: "PayPal API",
					icon: <SiPaypal />,
					iconColor: "text-blue-700 dark:text-blue-600",
					link: "https://developer.paypal.com/docs/api/overview/",
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
					link: "https://react.dev/docs/getting-started.html",
				},
				{
					name: "Bootstrap",
					icon: <FaBootstrap />,
					iconColor: "text-purple-600 dark:text-purple-500",
					link: "https://getbootstrap.com/docs/5.2/getting-started/introduction/",
				},
				{
					name: "CSS3",
					icon: <FaCss3Alt />,
					iconColor: "text-blue-600 dark:text-blue-500",
					link: "https://developer.mozilla.org/es/docs/Web/CSS",
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
					name: "SQLAlchemy",
					icon: <FaDatabase />,
					iconColor: "text-gray-700 dark:text-gray-400",
					link: "https://www.sqlalchemy.org/",
				},
			],
		},
	];

	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
				staggerChildren: 0.2,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
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
				quantity={80}
				size={1.5}
			/>
			<div className="relative z-10 w-full p-4 sm:p-6 rounded-lg">
				<h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-800 dark:text-gray-200 tracking-wide text-center">
					{t("projects.title")}
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{projectsData.map((project, index) => (
						<motion.div
							key={index}
							className="flex flex-col rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-700"
							variants={cardVariants}
							whileHover={{
								y: -5,
								boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
							}}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<div className="p-4 sm:p-6 flex-grow flex flex-col">
								<h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800 dark:text-gray-200">
									{project.title}
								</h2>
								<p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
									{project.technologies.map((tech, idx) => (
										<motion.a
											key={idx}
											href={tech.link}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium px-3 py-2 rounded cursor-pointer shadow"
											variants={{
												hidden: { opacity: 0, scale: 0.8 },
												visible: { opacity: 1, scale: 1 },
											}}
											whileHover={{ scale: 1.1, rotate: 2 }}
											transition={{ type: "spring", stiffness: 300 }}
										>
											<div className={`text-lg sm:text-xl ${tech.iconColor}`}>
												{tech.icon}
											</div>
											<span>{tech.name}</span>
										</motion.a>
									))}
								</div>
								<div className="mt-auto">
									<a
										href={project.code}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center w-full text-center bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-200"
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
