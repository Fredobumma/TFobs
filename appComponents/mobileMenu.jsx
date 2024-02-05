import Link from "next/link";
import { MenuIcon } from "lucide-react";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetOverlay,
	SheetTrigger,
} from "@/components/ui/sheet";

const MobileMenu = ({ links }) => {
	return (
		<div className="lg:hidden">
			<Sheet key="top">
				<SheetTrigger className="cursor-pointer" asChild>
					<MenuIcon size={30} className="m-5 lg:hidden" />
				</SheetTrigger>
				<SheetContent
					aria-modal="true"
					className="bg-black pb-10 pt-16 lg:hidden font-semibold text-lg"
					side="top"
				>
					<div className="relative pt-4 space-y-[30px] z-20">
						{links.map(({ path, name }, i) => (
							<div
								key={i}
								className="text-center list-none transition ease-in-out duration-300 hover:scale-95 focus:scale-95 hover:text-[#b69e57] focus:text-[#b69e57]"
							>
								<SheetClose asChild>
									<Link href={path}>{name}</Link>
								</SheetClose>
							</div>
						))}
						<SheetClose asChild>
							<button className="block mx-auto bg-gradient-to-tr from-[#815316] from-20% via-[#b69e57] to-95% to-[#815316] font-bold rounded-lg m-5 py-4 px-[30px] text-black hover:scale-95 focus:scale-95 transition ease-in-out duration-300">
								Get Started
							</button>
						</SheetClose>
					</div>
					<SheetOverlay className="bg-transparent" />
					<div className="gradient" />
					<div className="gradient-2" />
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileMenu;
