function hello() {
  return "Hello, World!";
}

function add(a, b) {
  return a + b;
}

if (require.main === module) {
  console.log(hello());
}

module.exports = { hello, add };
