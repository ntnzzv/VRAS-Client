export default function getSVMmodel() {
  const fs = require("fs");
  var path = require("path");
  const configDirectory = path.resolve(process.cwd(), "config");

  return fs.readFileSync(path.join(configDirectory, "./SVMtrained/model.txt"), "utf8");
}
