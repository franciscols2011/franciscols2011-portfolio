// components/Intro.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Particles from "@/components/ui/particles";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0 },
};

const Intro = () => {
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
			<div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
				<motion.div
					className="flex-shrink-0"
					variants={itemVariants}
					whileHover={{ scale: 1.1, rotate: 5 }}
					transition={{ type: "spring", stiffness: 300 }}
				>
					<Image
						src="/images/franciscols2011.jpg"
						alt={t("intro.name")}
						width={150}
						height={150}
						className="rounded-full border-4 border-gray-300 dark:border-gray-600 shadow-lg"
					/>
				</motion.div>
				<motion.div
					className="text-center sm:text-left text-gray-800 dark:text-gray-200"
					variants={itemVariants}
				>
					<h1 className="text-3xl sm:text-4xl font-extrabold mb-2 tracking-wide">
						{t("intro.name")}
					</h1>
					<p className="text-lg leading-relaxed">{t("intro.description")}</p>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Intro;
