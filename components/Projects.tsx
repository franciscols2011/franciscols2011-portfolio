import React from "react";

const projectsData = [
	{
		title: "Ecommerce",
		description:
			"Una aplicación de ecommerce que permite a los usuarios una experiencia de compra rápida y sencilla, agregando productos y realizando pagos a través de PayPal. También cuenta con una sección de valoración del producto.",
		code: "https://github.com/franciscols2011/mern",
		technologies: [
			"Tailwind CSS",
			"React",
			"Express.js",
			"MongoDB",
			"JavaScript",
		],
	},
	{
		title: "Therapy Time",
		description:
			"Therapy Time es una aplicación web diseñada para agilizar la programación, comunicación y gestión de pacientes para terapeutas y sus clientes. Construida con tecnologías de punta, ofrece una plataforma segura y conveniente.",
		code: "https://github.com/franciscols2011/Therapy-Time",
		technologies: [
			"React.js",
			"Bootstrap",
			"CSS3",
			"Python",
			"Flask",
			"SQLAlchemy",
		],
	},
];

function Projects() {
	return (
		<div className="w-full bg-white p-8 rounded-lg shadow-lg">
			<h1 className="text-2xl font-bold mb-4">Proyectos</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{projectsData.map((project, index) => (
					<div
						key={index}
						className="flex flex-col border border-gray-200 rounded-lg p-4 hover:shadow-md hover:-translate-y-1 transition-transform duration-300"
					>
						<h2 className="text-xl font-semibold mb-2">{project.title}</h2>
						<p className="text-gray-600 mb-4">{project.description}</p>
						<div className="flex flex-wrap gap-2 mb-4">
							{project.technologies.map((technology, index) => (
								<span
									key={index}
									className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded"
								>
									{technology}
								</span>
							))}
						</div>
						<div className="mt-auto">
							<a
								href={project.code}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
							>
								Ver Código
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;
