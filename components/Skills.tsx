import React from "react";

const skillsData = [
	"Node.js",
	"JavaScript",
	"GIT",
	"React.js",
	"Java",
	"Spring Boot",
	"Spring Framework",
	"Python",
	"Flask",
	"Angular 18",
	"TypeScript",
	"Tailwind",
	"MongoDB",
	"MySQL",
	"Cloudinary",
	"Genexus",
];

function Skills() {
	return (
		<div className="w-full bg-white p-8 rounded-lg shadow-lg">
			<h1 className="text-2xl font-bold mb-4">Hababilidades</h1>
			<div className="flex flex-wrap gap-2">
				{skillsData.map((skill, index) => (
					<span
						key={index}
						className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
					>
						{skill}
					</span>
				))}
			</div>
		</div>
	);
}

export default Skills;
