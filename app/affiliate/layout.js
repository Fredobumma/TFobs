import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function affiliateLayout({ children }) {
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
			<div className="space-y-6 p-10 pt-20 pb-16">
				<div className="text-center -mb-5 space-y-0.5 md:mb-0">
					<h2 className="text-2xl font-bold tracking-tight">
						Send us a message
					</h2>
					<p className="text-muted-foreground">
						Want to be an affiliate or to make complaints?
					</p>
				</div>
				<Separator className="my-6" />
				<div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
					<aside className="-mx-4 lg:w-1/5"></aside>
					<div className="flex-1 lg:max-w-2xl">
						<div className="space-y-6">
							<Separator />
							{children}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
