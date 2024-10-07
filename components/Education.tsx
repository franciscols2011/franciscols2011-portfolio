import React from "react";

interface EducationItem {
	startDate: string;
	endDate?: string;
	collegeName?: string;
	schoolName?: string;
	courseName: string;
	address?: string;
}

const educationData: EducationItem[] = [
	{
		startDate: "Noviembre 2023",
		endDate: "Marzo 2024",
		collegeName: "4Geeks Academy",
		courseName: "Full Stack Software Developer",
	},
	{
		startDate: "2019",
		endDate: "2019",
		schoolName: "ORT",
		address: "Uruguay",
		courseName: "Analista Programador",
	},
];

function Education() {
	return (
		<div className="w-full bg-white p-8 rounded-lg shadow-lg">
			<h1 className="text-2xl font-bold mb-4">Educación</h1>
			<div className="p-1">
				<ol className="relative border-l border-gray-200 dark:border-gray-700">
					{educationData.map((item, index) => (
						<li key={index} className="mb-10 ml-4">
							<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
							<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
								{item.startDate} - {item.endDate || "Present"}
							</time>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								{item.courseName} en {item.collegeName || item.schoolName}
							</h3>
							{item.address && (
								<p className="text-base text-gray-700">{item.address}</p>
							)}
						</li>
					))}
				</ol>
			</div>
		</div>
	);
}

export default Education;
