const https = require("https");
const fs = require("fs");

const titles = [
  "Concepts of Physics Vol 1 by H.C. Verma",
  "NCERT Biology Class 12",
  "R.D. Sharma Mathematics Class 10",
  "Introduction to Algorithms, 3rd Edition",
  "The Alchemist Paulo Coelho",
  "Oswaal CBSE Question Bank Class 12 Physics",
  "Complete JEE Main & Advanced Bundle",
  "Allen Career Biology",
  "S. Chand Physics Class 9",
  "Higher Engineering Mathematics B.S. Grewal",
  "D.C. Pandey Physics"
];

const fetchThumb = (title) => {
  return new Promise((resolve) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}&maxResults=1`;
    https.get(url, (res) => {
      let body = "";
      res.on("data", chunk => body += chunk);
      res.on("end", () => {
        try {
          const data = JSON.parse(body);
          if (data && data.items && data.items.length > 0 && data.items[0].volumeInfo && data.items[0].volumeInfo.imageLinks) {
            let img = data.items[0].volumeInfo.imageLinks.thumbnail;
            img = img.replace("http://", "https://").replace("&edge=curl", "");
            resolve({ title, url: img });
          } else {
            resolve({ title, url: "https://via.placeholder.com/400x600?text=" + encodeURIComponent(title) });
          }
        } catch (e) {
            resolve({ title, url: "https://via.placeholder.com/400x600?text=" + encodeURIComponent(title) });
        }
      });
    }).on("error", () => resolve({ title, url: "https://via.placeholder.com/400x600?text=" + encodeURIComponent(title) }));
  });
};

(async () => {
  const results = {};
  for (const t of titles) {
    console.log("Fetching for:", t);
    const res = await fetchThumb(t);
    results[t] = res.url;
  }
  fs.writeFileSync("found_images.json", JSON.stringify(results, null, 2));
  console.log("Done");
})();
