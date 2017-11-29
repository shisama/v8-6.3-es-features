const axios = require('axios');

async function* gen() {
  while (true) {
    const res = await axios.get('https://www.random.org/decimal-fractions/?num=1&dec=10&col=1&format=plain&rnd=new');
    const num = await res.data;
    yield Number(num);
  }
}

(async() => {
  const BREAK = 0.8;
  for await (const num of gen()) {
    console.log(num);
    if (num > BREAK) {
      console.log("over", BREAK)
      break;
    }
  }
})();