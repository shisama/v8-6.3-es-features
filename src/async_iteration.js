const axios = require('axios');

async function* gen() {
  const promises = [
    axios.get('https://qiita.com/api/v2/tags/Node'),
    axios.get('https://qiita.com/api/v2/tags/JavaScript')
  ];

  for (const promise of promises) {
    yield promise;
  }
}

async function printIter() {
  for await (const res of gen()) {
    console.log(res.data);
  }
}

printIter();