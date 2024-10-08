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

const projectsData = [
	{
		title: "Ecommerce",
		description:
			"Una aplicación de ecommerce que permite a los usuarios una experiencia de compra rápida y sencilla, agregando productos y realizando pagos a través de PayPal. También cuenta con una sección de valoración del producto.",
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
		title: "Therapy Time",
		description:
			"Therapy Time es una aplicación web diseñada para agilizar la programación, comunicación y gestión de pacientes para terapeutas y sus clientes. Construida con tecnologías de punta, ofrece una plataforma segura y conveniente.",
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
			staggerChildren: 0.3,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0 },
};

function Projects() {
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
					Proyectos
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projectsData.map((project, index) => (
						<motion.div
							key={index}
							className="flex flex-col rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-700"
							whileHover={{ scale: 1.02 }}
							variants={cardVariants}
						>
							<div className="p-6 flex-grow flex flex-col">
								<h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
									{project.title}
								</h2>
								<p className="text-gray-700 dark:text-gray-300 mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-4 mb-4">
									{project.technologies.map((tech, idx) => (
										<motion.div
											key={idx}
											className="flex items-center gap-2 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm font-medium px-3 py-2 rounded cursor-pointer shadow"
											whileHover={{ scale: 1.1, rotate: 5 }}
											transition={{ type: "spring", stiffness: 300 }}
										>
											<div className={`text-xl ${tech.iconColor}`}>
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
										className="inline-block w-full text-center bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300"
									>
										<FaGithub className="inline-block mr-2" />
										Código
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
}

export default Projects;
