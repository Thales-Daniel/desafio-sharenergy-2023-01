import fs from "fs"

const fileReader = (path: string) =>
  fs.readFileSync(path, { encoding: "utf-8" }).trim()

export default fileReader
