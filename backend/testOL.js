const https = require("https");

const urls = [
  "https://m.media-amazon.com/images/I/71hw51BfK3L.jpg",
  "https://m.media-amazon.com/images/I/61A1M3m7S4L.jpg",
  "https://m.media-amazon.com/images/I/71u9t23MbpL.jpg",
  "https://m.media-amazon.com/images/I/41T2o83cOLL.jpg",
  "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
  "https://m.media-amazon.com/images/I/81B4W3+B1TL.jpg",
  "https://m.media-amazon.com/images/I/71Y+P0fD5fL.jpg",
  "https://m.media-amazon.com/images/I/51wXkG2S-eL.jpg",
  "https://m.media-amazon.com/images/I/71G1PDKQ4fL.jpg",
  "https://m.media-amazon.com/images/I/81a+xH4jK8L.jpg"
];

urls.forEach((url) => {
  https.get(url, (res) => {
    console.log(`${url}: Status ${res.statusCode}`);
  });
});
