const axios = require('axios');

async function* gen() {
  const tags = [
    "Node.js",
    "JavaScript",
    "npm"
  ];
  const promises = [];

  for (const tag of tags) {
    promises.push(axios.get(`https://qiita.com/api/v2/tags/${tag}`),)
  }

  for (const promise of promises) {
    yield promise;
  }
}

(async() => {
  for await (const res of gen()) {
    console.log(res.data);
  }
})();