async function dynamic_import() {
  for (let i = 1; i <= 3; i++) {
    const module = await import(`./import_modules/hello${i}.js`);
    module.hello();
  }
}

dynamic_import();