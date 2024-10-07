import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function ContactMe() {
	return (
		<div className="w-full bg-white p-8 rounded-lg shadow-lg">
			<h1 className="text-2xl font-bold mb-4">Contacto</h1>
			<p className="text-gray-700 mb-6">
				Si deseas ponerte en contacto conmigo, puedes enviarme un correo
				electrónico o seguirme en mis redes sociales.
			</p>
			<div className="flex flex-col md:flex-row items-center gap-4">
				<a
					href="mailto:franciscols2011@gmail.com"
					className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
				>
					<FaEnvelope className="mr-2" />
					Enviar Email
				</a>
				<a
					href="https://www.linkedin.com/in/franciscolopez05/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors duration-300"
				>
					<FaLinkedin className="mr-2" />
					LinkedIn
				</a>
				<a
					href="https://github.com/franciscols2011"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors duration-300"
				>
					<FaGithub className="mr-2" />
					GitHub
				</a>
			</div>
		</div>
	);
}

export default ContactMe;
