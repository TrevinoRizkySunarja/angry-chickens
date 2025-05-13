import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Floor extends Actor {
    constructor() {
        super()
        this.graphics.use(Resources.Floor.toSprite())
        this.pos = new Vector(0, 430)
        this.anchor = new Vector(0, 0)

    }
}