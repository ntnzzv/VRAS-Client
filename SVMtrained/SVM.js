export default function getSVMmodel() {
  const fs = require("fs");
  var path = require("path");
  const configDirectory = path.resolve(process.cwd(), "SVMtrained");
  return fs.readFileSync(path.join(configDirectory, "model.txt"), "utf8");
}
