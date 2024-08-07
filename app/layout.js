import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "TFobs",
	description:
		"A tool wired to offer inspiration to easily setup your content/videos.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth lg:overflow-y-auto">
			<body className={`${inter.className} max-w-[1440px] mx-auto`}>
				<Toaster />
				<main className="min-h-dvh p-4">
					<div className="gradient" />
					<div className="gradient-2" />
					<div className="gradient-3" />
					{children}
				</main>
			</body>
		</html>
	);
}
