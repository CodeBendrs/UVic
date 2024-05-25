import authService from "../services/getCredentials";

const puppeteer = require("puppeteer");

const scraper = async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	page.goto("https://uvic.ca");

	const html = await page.content();

	await browser.close();
	return html;
};

scraper();

// not working because it requires node js to work
// alternative is to use serverless function either amazon aws lambda or google functions
// i am gonna go ahead and set them up and will see what happens.
