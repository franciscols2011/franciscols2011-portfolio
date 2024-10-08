// components/CustomDock.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun, MailIcon } from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

import { FaLinkedin, FaGithub, FaHome } from "react-icons/fa";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
	navbar: [{ href: "#", icon: FaHome, label: "Home" }],
	social: [
		{
			name: "GitHub",
			url: "https://github.com/franciscols2011",
			icon: FaGithub,
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/franciscolopez05/",
			icon: FaLinkedin,
		},
		{
			name: "Email",
			url: "mailto:franciscols2011@gmail.com",
			icon: MailIcon,
		},
	],
};

export function CustomDock({}: { orientation?: "vertical" | "horizontal" }) {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const { i18n, t } = useTranslation();

	const isLargeScreen = useMediaQuery("(min-width: 1024px)");
	const currentOrientation = isLargeScreen ? "vertical" : "horizontal";

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const toggleLanguage = () => {
		const newLang = i18n.language === "es" ? "en" : "es";
		i18n.changeLanguage(newLang);
	};

	const flagSize = isLargeScreen ? "1.2em" : "1em";

	return (
		<TooltipProvider>
			<motion.div
				className={cn(
					"fixed",
					isLargeScreen
						? "top-1/2 left-4 transform -translate-y-1/2"
						: "bottom-4 left-1/2 transform -translate-x-1/2",
					"flex",
					currentOrientation === "vertical"
						? "flex-col space-y-2 sm:space-y-3 items-center"
						: "flex-row space-x-2 sm:space-x-3 items-center",
					"bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70",
					"backdrop-filter backdrop-blur-md",
					"p-2 sm:p-3",
					"rounded-lg lg:rounded-2xl",
					"shadow-md",
					"z-50",
					isLargeScreen ? "" : "max-w-[90%]"
				)}
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<Dock orientation={currentOrientation}>
					{DATA.navbar.map((item) => (
						<DockIcon key={item.label}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										href={item.href}
										aria-label={item.label}
										className="p-1 sm:p-2 rounded-full transition-colors flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700"
									>
										<item.icon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p>{item.label}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}

					{DATA.social.map((social) => (
						<DockIcon key={social.name}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										href={social.url}
										aria-label={social.name}
										target="_blank"
										rel="noopener noreferrer"
										className="p-1 sm:p-2 rounded-full transition-colors flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700"
									>
										<social.icon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p>{social.name}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}

					<DockIcon>
						<Tooltip>
							<TooltipTrigger asChild>
								<button
									aria-label={t("theme")}
									className="p-1 sm:p-2 rounded-full transition-colors flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700"
									onClick={() =>
										setTheme(resolvedTheme === "light" ? "dark" : "light")
									}
								>
									{resolvedTheme === "light" ? (
										<Moon className="w-5 h-5 text-gray-800" />
									) : (
										<Sun className="w-5 h-5 text-gray-200" />
									)}
								</button>
							</TooltipTrigger>
							<TooltipContent>
								<p>{t("theme")}</p>
							</TooltipContent>
						</Tooltip>
					</DockIcon>

					<DockIcon>
						<Tooltip>
							<TooltipTrigger asChild>
								<button
									aria-label={t("language")}
									className="p-1 sm:p-2 rounded-full transition-colors flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700"
									onClick={toggleLanguage}
								>
									{i18n.language === "es" ? (
										<ReactCountryFlag
											countryCode="US"
											svg
											style={{
												width: flagSize,
												height: flagSize,
											}}
											title="English"
										/>
									) : (
										<ReactCountryFlag
											countryCode="ES"
											svg
											style={{
												width: flagSize,
												height: flagSize,
											}}
											title="Español"
										/>
									)}
								</button>
							</TooltipTrigger>
							<TooltipContent>
								<p>{t("language")}</p>
							</TooltipContent>
						</Tooltip>
					</DockIcon>
				</Dock>
			</motion.div>
		</TooltipProvider>
	);
}

export default CustomDock;
