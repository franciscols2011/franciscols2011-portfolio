// app/page.tsx
"use client";
import ContactMe from "@/components/ContactMe";
import CustomDock from "@/components/CustomDock";
import Education from "@/components/Education";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
	return (
		<div className="w-full mx-auto flex items-center justify-center min-h-screen p-4 sm:p-8 lg:p-20 font-sans overflow-hidden bg-gray-100 dark:bg-gray-900">
			<main className="flex flex-col items-center justify-center gap-6 sm:gap-8 w-full max-w-3xl">
				<Intro />
				<WorkExperience />
				<Education />
				<Skills />
				<Projects />
				<ContactMe />
				<CustomDock orientation="vertical" />
			</main>
		</div>
	);
}
