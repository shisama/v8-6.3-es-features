(async() => {
    let count = 0;
    let id = setInterval(async() => {
      const i = Math.floor(Math.random() * 3) + 1;
      const module = await import(`./import_modules/hello${i}.js`);
      module.hello();
      count++;
      if (count === 10) {
        clearInterval(id);
      }
    }, 1000);
})();