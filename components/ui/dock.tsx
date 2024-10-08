// components/ui/dock.tsx
"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
	className?: string;
	children: React.ReactNode;
	orientation?: "horizontal" | "vertical";
}

const dockVariants = cva("");

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
				className,
				{
					"flex-col": orientation === "vertical",
					"flex-row": orientation === "horizontal",
				},
				"flex relative"
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
			whileHover={{ scale: 1.2, rotate: 5 }}
			whileTap={{ scale: 0.95, rotate: -5 }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
			{...props}
		>
			{children}
		</motion.div>
	);
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
