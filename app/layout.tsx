// app/layout.tsx
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "Francisco López Portfolio",
	description: "Application with portfolio professional profile",
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="es"
			className={`${geistSans.variable} ${geistMono.variable} antialiased`}
		>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
