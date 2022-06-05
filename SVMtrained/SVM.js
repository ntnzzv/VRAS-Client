export default function getSVMmodel() {
  const fs = require("fs");
  const path = require("path");
  return fs.readFileSync(path.resolve(__dirname, "../../../SVMtrained/model.txt"), "utf8");
}
