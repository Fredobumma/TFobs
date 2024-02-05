import Image from "next/image";
import Link from "next/link";

import { MobileMenu } from "@/appComponents";

const NavBar = () => {
	const links = [
		{ path: "#product", name: "Product" },
		{ path: "#pricing", name: "Pricing" },
		{ path: "#faq", name: "F.A.Q" },
		{ path: "/affiliate", name: "Affiliate" },
	];

	return (
		<nav className="flex justify-between items-center">
			<Link href="/" className="m-5">
				<Image
					alt="Logo"
					className="w-auto"
					src="/tobs-logo.png"
					width={120}
					height={54}
				/>
			</Link>
			<ul className="hidden lg:inline-flex gap-10 font-semibold text-lg">
				{links.map(({ path, name }, i) => (
					<li
						key={i}
						className="transition ease-in-out duration-300 hover:scale-95 focus:scale-95 hover:text-[#b69e57] focus:text-[#b69e57]"
					>
						<Link href={path}>{name}</Link>
					</li>
				))}
			</ul>
			<button className="hidden lg:block bg-gradient-to-tr from-[#815316] from-20% via-[#b69e57] to-95% to-[#815316] font-bold rounded-lg m-5 py-4 px-[30px] text-black hover:scale-95 focus:scale-95 transition ease-in-out duration-300">
				Get Started
			</button>
			<MobileMenu links={links} />
		</nav>
	);
};

export default NavBar;
