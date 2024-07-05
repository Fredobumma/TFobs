"use client";

import { useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import { searchYt } from "@/app/searchyt";
import Link from "next/link";
import Loading from "@/app/loading";

const Product = () => {
	const [videos, setVideos] = useState([]);
	const [loading, setLoading] = useState(false);

	const { toast } = useToast();

	const handleSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();

		try {
			const videos = await searchYt(e.target[0].value);
			setVideos(videos);
		} catch (error) {
			toast({ title: "Unable to get youtube content." });
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{loading && <Loading />}
			<section id="product" className="pt-2.5">
				<form onSubmit={handleSubmit}>
					<label
						className="mx-auto mt-10 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
						htmlFor="search-bar"
					>
						<input
							name="search"
							type="search"
							id="search-bar"
							placeholder="Enter your keyword here"
							className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white text-[#3d3d3d]"
							minLength={3}
							required
							maxLength={50}
						/>
						<button className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white hover:scale-95 active:scale-95 border will-change-transform overflow-hidden relative rounded-lg transition ease-in-out duration-300 disabled:opacity-70">
							<div className="relative">
								<div className="flex items-center transition-all opacity-1 valid:">
									<span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
										Search
									</span>
								</div>
							</div>
						</button>
					</label>
				</form>
				<div
					className={`flex gap-5 justify-center flex-wrap transition ease-in-out duration-300 ${
						videos.length ? "mt-20" : ""
					}`}
				>
					{videos.map(
						(
							{
								thumbnail,
								channel,
								link,
								title,
								duration_raw,
								uploaded,
								views,
							},
							i,
						) => (
							<div
								key={i}
								className="p-4 max-h-fit min-w-[250px] max-w-sm border border-blue-600/30 rounded-2xl hover:shadow-xl flex flex-col items-center"
								href="#"
							>
								<img
									src={thumbnail}
									className="shadow mb-5 rounded-lg overflow-hidden border"
								/>
								<div className="mt-auto">
									<h4 className="font-bold text-xl">Channel: {channel.name}</h4>
									<p className="mt-2.5 mb-[30px]">{title}</p>
									<div class="flex justify-center">
										<p>
											Duration:
											<span class="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-gray-300 opacity-80 mr-2 mb-2">
												{duration_raw}
											</span>
										</p>
										<p>
											Uploaded:
											<span class="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-gray-300 opacity-80 mr-2 mb-2">
												{uploaded}
											</span>
										</p>
										<p>
											views:
											<span class="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-gray-300 opacity-80 mr-2 mb-2">
												{views.toLocaleString("en-US")}
											</span>
										</p>
									</div>

									<div className="my-5">
										<Link
											href={link}
											target="_blank"
											className="block text-center rounded-lg border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-[#3d3d3d] shadow-sm hover:scale-95 focus:scale-95 transition ease-in-out duration-300"
										>
											open
										</Link>
									</div>
								</div>
							</div>
						),
					)}
				</div>
			</section>
		</>
	);
};

export default Product;
