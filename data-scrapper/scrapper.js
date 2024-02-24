import puppeteer from "puppeteer";

const getIITSectionData = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  await page.goto("https://www.geeksofgurukul.com/", {
    waitUntil: "domcontentloaded",
  });

  // Wait for the required DOM to be rendered

  await page.waitForSelector(
    "#root > div > div.dark > div > div.relative.md\\:px-\\[65px\\].px-\\[20px\\] > div.mb-\\[120px\\].mt-\\[60px\\] > div > div > div:nth-child(1) > div"
  );
  const data = await page.evaluate(() => {
    // const root = document.getElementById("root");
    const childContainer = document.querySelector(
      "#root > div > div.dark > div > div.relative.md\\:px-\\[65px\\].px-\\[20px\\] > div.mb-\\[120px\\].mt-\\[60px\\] > div > div > div:nth-child(1) > div"
    );

    const children = childContainer.querySelectorAll(".child");
    const data = [];

    children.forEach(async (child, i) => {
      const pushData = {
        image: child.querySelector("img").src,
        name: child.querySelector("h4").innerText,
        role: child.querySelector("h6").innerText,
        qualification: child.querySelector("p").innerHTML,
        imageAlt: child.querySelector("img").alt,
        logo1: child.querySelectorAll("img")[1].src,
        logo2: child.querySelectorAll("img")[2].src,
        log1Alt: child.querySelectorAll("img")[1].alt,
        log2Alt: child.querySelectorAll("img")[2].alt,
      };

      data.push(pushData);
    });

    return data;
  });

  await browser.close();

  return data;
};

const data = await getIITSectionData();

//save json data to file

import * as fs from "fs";

fs.writeFileSync("iitSectionData.json", JSON.stringify(data));
