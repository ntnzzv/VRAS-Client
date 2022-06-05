export default function getSVMmodel() {
  const fs = require("fs");
  return fs.readFileSync("./SVMtrained/model.txt", "utf8");
}
