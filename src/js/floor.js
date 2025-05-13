import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'

export class Floor extends Actor {
    constructor() {
        super({ width: Resources.Floor.width, height: Resources.Floor.height })
        this.graphics.use(Resources.Floor.toSprite())
        this.pos = new Vector(500, 512)
        this.body.collisionType = CollisionType.Fixed
    }
}