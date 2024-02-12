const Faq = () => {
	const faqs = [
		{
			question: "What does Tfobs do?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.",
		},
		{
			question: "How can this boost my content creation?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.",
		},
		{
			question: "What am I getting as a Premium Member?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.",
		},
		{
			question: "Can I cancel my subscription if I don't enjoy the services?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.",
		},
		{
			question: "What payment methods are availbale to me for payment/subs?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.",
		},
		{
			question: "How can I become an affiliate?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.",
		},
		{
			question: "What's the best way to contact TFobs if I have challenges",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.",
		},
	];

	return (
		<section id="faq" className="mt-20 pt-10">
			<h2 className="text-4xl font-extrabold max-w-[400px] mx-auto leading-tight mb-[30px] sm:mb-10 sm:leading-snug text-white sm:max-w-[700px] text-center">
				Frequently Asked{" "}
				<span className="bg-clip-text bg-gradient-to-tr from-[#815316] from-25% via-[#b69e57] to-60% to-[#815316] text-transparent">
					Questions
				</span>{" "}
			</h2>
			<ul className="max-w-3xl mx-auto divide-y shadow shadow-blue-600/30 rounded-xl">
				{faqs.map(({ question, answer }, i) => (
					<li key={i}>
						<details className="group">
							<summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer focus:text-[#b69e57] hover:text-[#b69e57]">
								<svg
									className="w-4 h-4 text-gray-400 transition group-open:rotate-90"
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path
										fillRule="evenodd"
										d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
									></path>
								</svg>
								<p>{question}</p>
							</summary>

							<article className="px-4 pl-11 pb-4 text-sm">
								<p>{answer}</p>
							</article>
						</details>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Faq;
