import { Faq, Hero, NavBar } from "@/sections";
import Pricing from "./../sections/pricing";

export default function Home() {
	return (
		<>
			<NavBar />
			<Hero />
			<Pricing />
			<Faq />
		</>
	);
}
