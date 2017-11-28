Promise.resolve("resolve")
  .then(val => {console.log(val);return "then"})
  .then(val => {console.log(val);throw new Error("catch")})
  .catch(err => {console.log(err.message)})
  .finally(() => {console.log("finally")});