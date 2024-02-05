import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "TFobs",
	description:
		"A tool wired to offer inspiration to easily setup your content/videos.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} overflow-x-hidden`}>
				<main className="min-h-dvh p-4 relative">
					<div className="gradient" />
					<div className="gradient-2" />
					<div className="gradient-3" />
					{children}
				</main>
			</body>
		</html>
	);
}
