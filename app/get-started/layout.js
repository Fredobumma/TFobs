import Image from "next/image";
import Link from "next/link";

const layout = ({ children }) => {
	return (
		<>
			<Link href="/" className="inline-block m-5 lg:ml-10">
				<Image
					alt="Logo"
					className="w-auto"
					src="/tobs-logo.png"
					width={120}
					height={54}
				/>
			</Link>
			<div className="mx-auto mt-20 w-fit">{children}</div>
		</>
	);
};

export default layout;
