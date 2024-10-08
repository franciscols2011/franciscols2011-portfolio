// components/ContactMe.tsx
"use client";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "@/components/ui/particles";
import { useTranslation } from "react-i18next";

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
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.5 }}
		>
			<Particles
				className="absolute inset-0 z-0"
				color="rgba(0, 0, 0, 0.02)"
				quantity={80}
				size={1.5}
			/>
			<div className="relative z-10 w-full p-4 sm:p-6 rounded-lg">
				<motion.h1
					className="text-2xl sm:text-3xl font-extrabold mb-3 text-gray-800 dark:text-gray-200 tracking-wide"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					{t("contact.title")}
				</motion.h1>
				<motion.p
					className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					{t("contact.description")}
				</motion.p>
				<div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
					<motion.a
						href="mailto:franciscols2011@gmail.com"
						className="relative flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold rounded-md transition-transform duration-200"
						whileTap={{ scale: 0.95 }}
					>
						<FaEnvelope className="mr-2 text-lg sm:text-xl" />
						{t("contact.email")}
					</motion.a>
					<motion.a
						href="https://www.linkedin.com/in/franciscolopez05/"
						target="_blank"
						rel="noopener noreferrer"
						className="relative flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-700 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-transform duration-200"
						whileTap={{ scale: 0.95 }}
					>
						<FaLinkedin className="mr-2 text-lg sm:text-xl" />
						{t("contact.linkedin")}
					</motion.a>
					<motion.a
						href="https://github.com/franciscols2011"
						target="_blank"
						rel="noopener noreferrer"
						className="relative flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-200"
						whileTap={{ scale: 0.95 }}
					>
						<FaGithub className="mr-2 text-lg sm:text-xl" />
						{t("contact.github")}
					</motion.a>
				</div>
			</div>
		</motion.div>
	);
}

export default ContactMe;
