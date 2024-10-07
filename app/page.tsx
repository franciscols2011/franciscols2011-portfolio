import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
	return (
		<div className="w-full mx-auto flex items-center justify-center min-h-screen p-8 sm:p-20 font-sans overflow-hidden bg-gray-100">
			<main className="flex flex-col items-center justify-center gap-8 w-full max-w-3xl">
				<Intro />
				<WorkExperience />
				<Education />
				<Skills />
				<Projects />
				<ContactMe />
			</main>
		</div>
	);
}
