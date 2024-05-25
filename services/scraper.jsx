import puppeteer from "puppeteer-core";
import * as SecureStore from "expo-secure-store";
import authService from "./getCredentials";

const scraper = async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	page.goto("https://uvic.ca");

	const html = await page.content();

	await browser.close();
	return html;
};

export default scraper;
