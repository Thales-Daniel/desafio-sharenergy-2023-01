import fs from "fs"

export const fileReader = (path: string) =>
  fs.readFileSync(path, { encoding: "utf-8" }).trim()
