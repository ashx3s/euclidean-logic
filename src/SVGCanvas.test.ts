import { initializeSVG } from "./SVGCanvas";

test('create new svg file', () => {
  try {
    initializeSVG('test', 500, 500)
    console.log('new File written successfully')
  } catch(err) {
    console.error(err)
  }
})