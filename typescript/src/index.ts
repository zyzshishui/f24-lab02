import {newRenderer} from "./renderer.js"
import {square} from "./shapes/square";

const shape: Shape = square(3)
const renderer = newRenderer(shape)
renderer.draw();