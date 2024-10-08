// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";
import { I18nextProvider } from "react-i18next";
import i18n from "@/locales/i18n";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class">
			<I18nextProvider i18n={i18n}> {children} </I18nextProvider>
		</ThemeProvider>
	);
}
