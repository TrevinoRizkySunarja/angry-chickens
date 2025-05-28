import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources'

export class Tree extends Actor {
    constructor(x, y, degrees) {
        super({
            x, y, 
            width: Resources.Tree.width, 
            height: Resources.Tree.height,
            collisionType: CollisionType.Fixed
        })
        this.graphics.use(Resources.Tree.toSprite())
        this.rotation = (degrees * Math.PI) / 180
        this.health = 3
    }

    takeDamage() {
        this.health -= 1
        this.graphics.opacity = this.health / 3

        if (this.health <= 0) {
            this.kill()
        }
    }
}
