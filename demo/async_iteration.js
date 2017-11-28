const axios = require('axios');

async function* gen(tags) {
  const promises = [];
  for (const tag of tags) {
    promises.push(axios.get(`https://qiita.com/api/v2/tags/${tag}`),)
  }

  for (const promise of promises) {
    yield promise;
  }
}

(async() => {
  const tags = [
    "Node.js",
    "JavaScript",
    "npm"
  ];
  for await (const res of gen(tags)) {
    console.log(res.data);
  }
})();