// https://github.com/zachey01/deepljs
// npm install free-deepl
// const deepljs = require("free-deepl");

const deepljs = require("free-deepl");

(async () => {
  let sourceLang = "en";
  let targetLang = "de";
  let text = "gut, und selbst?";

  console.log(await deepljs(sourceLang, targetLang, text));
})();