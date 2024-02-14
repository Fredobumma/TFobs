"use server";

const Scraper = require("@yimura/scraper").default;

const youtube = new Scraper();

export const searchYt = async (value) => {
	const res = await youtube.search(value);
	return res.videos;
};
