import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer>
			<div className="container px-4 mx-auto pt-32 pb-11 max-w-4xl">
				<Link className="block mx-auto mb-10 max-w-max lg:mb-[60px]" href="/">
					<Image
						alt="Logo"
						className="w-auto"
						src="/tobs-logo.png"
						width={120}
						height={54}
					/>
				</Link>
				<div className="flex flex-wrap justify-center gap-5 text-center -mx-3 lg:gap-10 lg:-mx-6">
					<Link
						href="#product"
						className="inline-block text-lg text-gray-300 opacity-80 hover:text-white hover:opacity-100 font-medium"
					>
						Product
					</Link>

					<Link
						href="#pricing"
						className="inline-block text-lg text-gray-300 opacity-80 hover:text-white hover:opacity-100 font-medium"
					>
						Pricing
					</Link>

					<Link
						className="inline-block text-lg text-gray-300 opacity-80 hover:text-white hover:opacity-100 font-medium"
						href="#faq"
					>
						F.A.Q
					</Link>

					<Link
						href="/affiliate"
						className="inline-block text-lg text-gray-300 opacity-80 hover:text-white hover:opacity-100 font-medium"
					>
						Affiliate
					</Link>
				</div>
			</div>
			<div className="border-b border-blue-600/30 shadow"></div>
			<div className="container px-4 mx-auto">
				<p className="py-10 text-md text-gray-300 opacity-80 font-medium text-center">
					© {year} TFobs. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
