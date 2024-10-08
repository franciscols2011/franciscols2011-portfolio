// components/ContactMe.tsx
"use client";
import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "@/components/ui/particles";

function ContactMe() {
	return (
		<motion.div
			className="relative w-full p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden"
			initial={{ opacity: 0, y: -30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 2.3 }}
		>
			<Particles
				className="absolute inset-0 z-0"
				color="rgba(0, 0, 0, 0.02)"
				quantity={100}
				size={2}
			/>
			<div className="relative z-10 w-full p-8 rounded-lg">
				<motion.h1
					className="text-3xl font-extrabold mb-4 text-gray-800 dark:text-gray-200 tracking-wider"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					¡Ponte en Contacto!
				</motion.h1>
				<motion.p
					className="text-gray-700 dark:text-gray-300 mb-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
				>
					Si deseas ponerte en contacto conmigo, puedes enviarme un correo
					electrónico o seguirme en mis redes sociales.
				</motion.p>
				<div className="flex flex-col md:flex-row items-center gap-4">
					<motion.a
						href="mailto:franciscols2011@gmail.com"
						className="relative flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold rounded-md overflow-hidden group transition-colors duration-300"
						whileHover={{
							scale: 1.05,
						}}
					>
						<span className="relative flex items-center">
							<FaEnvelope className="mr-2 text-xl" />
							Enviar Email
						</span>
					</motion.a>
					<motion.a
						href="https://www.linkedin.com/in/franciscolopez05/"
						target="_blank"
						rel="noopener noreferrer"
						className="relative flex items-center px-6 py-3 bg-blue-700 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold rounded-md overflow-hidden group transition-colors duration-300"
						whileHover={{
							scale: 1.05,
						}}
					>
						<span className="relative flex items-center">
							<FaLinkedin className="mr-2 text-xl" />
							LinkedIn
						</span>
					</motion.a>
					<motion.a
						href="https://github.com/franciscols2011"
						target="_blank"
						rel="noopener noreferrer"
						className="relative flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold rounded-md overflow-hidden group transition-colors duration-300"
						whileHover={{
							scale: 1.05,
						}}
					>
						<span className="relative flex items-center">
							<FaGithub className="mr-2 text-xl" />
							GitHub
						</span>
					</motion.a>
				</div>
			</div>
		</motion.div>
	);
}

export default ContactMe;
