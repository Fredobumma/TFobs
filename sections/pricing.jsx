import Link from "next/link";

const Pricing = () => {
	return (
		<section id="pricing" className="mt-20 pt-10">
			<h2 className="text-4xl font-extrabold max-w-[400px] mx-auto leading-tight sm:leading-snug text-white sm:max-w-[700px] text-center">
				Pricing Plans
			</h2>
			<p className="mt-5 mb-[30px] text-lg text-gray-300 opacity-80 sm:text-xl max-w-3xl sm:mb-10 lg:mt-[30px] mx-auto text-center">
				Choose a plan to get all amazing features!
			</p>
			<div
				className="p-4 sm:px-10 flex justify-center items-center text-base h-100vh mx-auto"
				id="pricing"
			>
				<div className="isolate text-white mx-auto grid max-w-md grid-cols-1 gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-[100px]">
					<div className="ring-1 ring-gray-200 rounded-3xl p-8 xl:p-10">
						<div className="flex items-center justify-between gap-x-4">
							<h3
								id="tier-standard"
								className=" text-2xl font-semibold leading-8"
							>
								Standard
							</h3>
						</div>
						<p className="mt-4 text-base leading-6">
							Full access to all content and outliers
						</p>
						<p className="mt-6 flex items-baseline gap-x-1">
							<span className="line-through text-2xl font-sans text-gray-300 opacity-80">
								$49
							</span>
							<span className="text-5xl font-bold tracking-tight ">$39</span>
						</p>
						<Link
							href="#not-available"
							aria-describedby="tier-standard"
							className="ring-1 ring-inset ring-white hover:ring-white mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b69e57] hover:outline-[#b69e57] hover:outline-offset-2 hover:outline-2 hover:outline transition ease-in-out duration-300"
						>
							Subscribe Now
						</Link>
						<ul
							role="list"
							className="mt-8 space-y-3 text-sm leading-6 xl:mt-10"
						>
							<li className="flex gap-x-3 text-base">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
								Monthly access
							</li>
							<li className="flex gap-x-3 text-base">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
								All AI features
							</li>
							<li className="flex gap-x-3 text-base">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
								Get unlimited outliers/content
							</li>
						</ul>
					</div>
					<div className="ring-2 ring-[#b69e57] rounded-3xl p-8 xl:p-10">
						<div className="flex items-center justify-between gap-x-4">
							<h3
								id="tier-extended"
								className="text-[#b69e57] text-2xl font-semibold leading-8"
							>
								Yearly
							</h3>
							<p className="rounded-full bg-[#b69e57]/10 px-2.5 py-1 text-center text-xs font-semibold leading-5 text-[#b69e57]">
								Most popular
							</p>
						</div>
						<p className="mt-4 text-base leading-6">Save 30% + Full access</p>
						<p className="mt-6 flex items-baseline gap-x-1">
							<span className="line-through text-2xl font-sans text-gray-300 opacity-80">
								$39
							</span>
							<span className="text-5xl font-bold tracking-tight ">$29</span>
						</p>
						<Link
							href="#not-available"
							aria-describedby="tier-standard"
							className="bg-white text-[#815316] mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b69e57] hover:outline-[#b69e57] hover:outline-offset-2 hover:outline-2 hover:outline transition ease-in-out duration-300"
						>
							Subscribe Now
						</Link>
						<ul
							role="list"
							className="mt-8 space-y-3 text-sm leading-6 xl:mt-10"
						>
							<li className="flex gap-x-3 text-base">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none text-[#b69e57]"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
								All year access
							</li>
							<li className="flex gap-x-3 text-base">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none text-[#b69e57]"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
								All AI features
							</li>
							<li className="flex gap-x-3 text-base">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none text-[#b69e57]"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
								Get unlimited outliers/content
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
