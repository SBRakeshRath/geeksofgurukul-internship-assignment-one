import * as fs from "fs";

const commentData = JSON.parse(fs.readFileSync("./comment.json", "utf-8"));
const iitSectionData = JSON.parse(
  fs.readFileSync("./iitSectionData.json", "utf-8")
);

const mergedData =[]

commentData.forEach((comment, i) => {
  mergedData.push({
    ...comment,
    ...iitSectionData[i],
  });
});

fs.writeFileSync("mergedData.json", JSON.stringify(mergedData));
