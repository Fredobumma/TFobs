const Hero = () => {
	return (
		<section className="w-full flex-center mt-20 lg:mt-[100px] flex-col">
			<h1 className="text-5xl font-extrabold max-w-[700px] mx-auto leading-tight sm:leading-snug text-white sm:text-6xl text-center">
				Find, Discover & Uncover{" "}
				<span className="bg-clip-text bg-gradient-to-tr from-[#815316] from-25% via-[#b69e57] to-60% to-[#815316] text-transparent">
					AI-Powered
				</span>{" "}
				Content Data
			</h1>
			<p className="mt-5 text-lg text-gray-300 opacity-80 sm:text-xl max-w-3xl lg:mt-[30px] mx-auto text-center">
				Access to generate your unique content data from AI or in-depth general
				resources. Scale up and boost your productivity with good data!
			</p>
		</section>
	);
};

export default Hero;
