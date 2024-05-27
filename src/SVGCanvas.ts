
import fs from "fs/promises"

async function createSVGFile(containerID: string, width: number, heigth: number, options?: string[]) {

const svgFile = await fs.open(`${containerID}.svg`, "w")

svgFile.close()
}

export {createSVGFile}