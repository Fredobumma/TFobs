import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-dvh p-4 relative before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:top-1/3 after:absolute after:h-[180px] after:w-full after:translate-x-1/4 after:bg-gradient-conic after:from-sky-200/30 after:via-blue-200/30 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/30 before:dark:opacity-10 after:dark:from-sky-900/30 after:dark:via-[#0141ff]/30 after:dark:opacity-40 before:lg:h-[360px] before:-z-10 after:z-10">
			<div className="gradient" />
			<div className="gradient-2" />
			<nav className="flex">
				<Link href="/" className="m-5">
					<Image alt="Logo" src="/tobs-logo.png" width={120} height={54} />
				</Link>
			</nav>
			<section className="w-full flex-center mt-20 flex-col">
				<h1 className="text-5xl font-extrabold max-w-[700px] mx-auto leading-tight sm:leading-snug text-white sm:text-6xl text-center">
					Find, Discover & Uncover AI-Powered Content Data
				</h1>
				<p className="mt-5 text-lg text-gray-300 opacity-80 sm:text-xl max-w-3xl lg:mt-[30px] mx-auto text-center">
					Access to generate your unique content data from AI or in-depth
					general resources. Scale Up and boost your productivity with good
					data!
				</p>
			</section>
		</main>
	);
}
