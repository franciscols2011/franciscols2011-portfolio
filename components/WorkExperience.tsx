interface WorkExperienceItem {
	startDate: string;
	endDate: string;
	companyName: string;
	jobTitle: string;
	description: string[];
}

const workExperienceData: WorkExperienceItem[] = [
	{
		startDate: "Mayo 2024",
		endDate: "Present",
		companyName: "Integral Solutions",
		jobTitle: "Desarrollador de Software Genexus",
		description: [
			"Creé y mantuve paneles web intuitivos con Genexus y Descartes, automatizando procesos y generando reportes detallados para optimizar operaciones.",
			"Gestioné operaciones ABM, mejorando la integridad y precisión de los datos, desarrollando habilidades en la gestión eficiente de información",
		],
	},

	{
		startDate: "Agosto 2024",
		endDate: "Present",
		companyName: "RedPagos",
		jobTitle: "Cajero",
		description: [
			"Administro cobros y pagos, asegurando transacciones precisas y a tiempo.",
			"Brindo un soporte personalizado a clientes en pagos y facturación, mejorando su experiencia.",
			"Mantengo registros financieros exactos, garantizando la integridad contable.",
		],
	},

	{
		startDate: "Enero 2023",
		endDate: "Agosto 2023",
		companyName: "Salinas del Almirón Resort Termal",
		jobTitle: "Recepción",
		description: [
			"Interacción profesional con clientes, resolviendo dudas y gestionando solicitudes con empatía, mejorando su experiencia.",
			"Implementación de soluciones en Excel para el control de reservas y auditorías, optimizando la organización.",
			"Resolución rápida de problemas técnicos en el sistema de reservas, minimizando tiempos de inactividad",
			"Realización de ventas a través de la web y llamadas, empleando técnicas de persuasión para cumplir objetivos. ",
		],
	},
];

const WorkExperience = () => {
	return (
		<div className="w-full bg-white p-8 rounded-lg shadow-lg">
			<h1 className="text-2xl font-bold mb-4">Experiencia Profesional</h1>
			<div className="p-1">
				<ol className="relative border-l border-gray-200 dark:border-gray-700">
					{workExperienceData.map((item, index) => (
						<li key={index} className="mb-10 ml-4">
							<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
							<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
								{item.startDate} - {item.endDate}
							</time>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								{item.jobTitle} en {item.companyName}
							</h3>
							<ul className="text-base text-gray-700 list-disc ml-5 mt-2">
								{item.description.map((desc, idx) => (
									<li key={idx}>{desc}</li>
								))}
							</ul>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default WorkExperience;
