// components/ui/dock.tsx
"use client";

import React, { PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
	className?: string;
	children: React.ReactNode;
	orientation?: "horizontal" | "vertical";
}

const dockVariants = cva(
	"flex gap-3 rounded-2xl p-4 bg-white/25 dark:bg-gray-800/25 backdrop-blur-md shadow-lg border border-white/10 dark:border-gray-700/25 transition-all"
);

const Dock: React.FC<DockProps> = ({
	className,
	children,
	orientation = "vertical",
	...props
}) => {
	return (
		<motion.div
			{...props}
			className={cn(
				dockVariants({ className }),
				{
					"flex-col": orientation === "vertical",
					"flex-row": orientation === "horizontal",
				},
				"relative"
			)}
		>
			{children}
		</motion.div>
	);
};

Dock.displayName = "Dock";

export interface DockIconProps {
	className?: string;
	children?: React.ReactNode;
}

const DockIcon: React.FC<DockIconProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<motion.div
			className={cn(
				"flex cursor-pointer items-center justify-center rounded-full transition-transform",
				className
			)}
			whileHover={{ scale: 1.3, rotate: 10 }}
			whileTap={{ scale: 0.95, rotate: -10 }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
			{...props}
		>
			{children}
		</motion.div>
	);
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };