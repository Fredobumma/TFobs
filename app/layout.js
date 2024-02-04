import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "YTobs",
	description:
		"A tool wired to offer inspiration to easily setup your content/videos.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} overflow-x-hidden`}>{children}</body>
		</html>
	);
}
