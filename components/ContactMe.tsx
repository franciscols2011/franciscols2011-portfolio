// components/ContactMe.tsx
"use client";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "@/components/ui/particles";
import { useTranslation } from "react-i18next";

const containerVariants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.8,
			ease: "easeOut",
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function ContactMe() {
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
				quantity={100}
				size={2}
			/>
			<div className="relative z-10 w-full p-4 sm:p-6 rounded-lg">
				<motion.h1
					className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800 dark:text-gray-200 tracking-wide text-center"
					variants={itemVariants}
				>
					{t("contact.title")}
				</motion.h1>
				<motion.p
					className="text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base text-center"
					variants={itemVariants}
					transition={{ delay: 0.2 }}
				>
					{t("contact.description")}
				</motion.p>
				<motion.div
					className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center"
					variants={containerVariants}
				>
					<motion.a
						href="mailto:franciscols2011@gmail.com"
						className="flex items-center justify-center px-4 sm:px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold rounded-md shadow-lg transition-transform duration-200"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						variants={itemVariants}
					>
						<FaEnvelope className="mr-2 text-lg sm:text-xl" />
						{t("contact.email")}
					</motion.a>
					<motion.a
						href="https://www.linkedin.com/in/franciscolopez05/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center px-4 sm:px-6 py-3 bg-blue-700 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold rounded-md shadow-lg transition-transform duration-200"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						variants={itemVariants}
					>
						<FaLinkedin className="mr-2 text-lg sm:text-xl" />
						{t("contact.linkedin")}
					</motion.a>
					<motion.a
						href="https://github.com/franciscols2011"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center px-4 sm:px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold rounded-md shadow-lg transition-transform duration-200"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						variants={itemVariants}
					>
						<FaGithub className="mr-2 text-lg sm:text-xl" />
						{t("contact.github")}
					</motion.a>
				</motion.div>
			</div>
		</motion.div>
	);
}

export default ContactMe;
