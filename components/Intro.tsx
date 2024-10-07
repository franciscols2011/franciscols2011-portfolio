"use client";

import Image from "next/image";
import Particles from "@/components/ui/particles";

const Intro = () => {
	return (
		<div className="relative w-full bg-white p-8 rounded-lg shadow-lg">
			<Particles
				className="absolute inset-0 z-0 rounded-lg"
				color="rgba(0, 0, 0, 0.05)"
				quantity={50}
				size={1}
			/>
			<div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
				<div className="flex-shrink-0">
					<Image
						src="/images/franciscols2011.jpg"
						alt="Juan Francisco Lopez"
						width={120}
						height={120}
						className="rounded-full border border-gray-300 shadow-sm"
					/>
				</div>
				<div className="text-center md:text-left">
					<h1 className="text-3xl font-bold mb-2">Juan Francisco Lopez</h1>
					<p className="text-gray-700 leading-relaxed">
						Desarrollador de software con experiencia en JavaScript, React,
						Python y Java, especializado en diseñar aplicaciones intuitivas.
						Habilidad para resolver problemas complejos, respaldada por 3 años
						en atención al cliente. Excelentes habilidades de comunicación y
						trabajo en equipo, con enfoque en soluciones eficientes y
						colaboración técnica.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Intro;
