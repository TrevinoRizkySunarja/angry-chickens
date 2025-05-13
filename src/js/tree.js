import { Actor, Engine, Vector, CollisionType } from "excalibur"
import { Resources } from './resources'
import { Chicken } from './chicken'

export class Tree extends Actor {
    constructor(x, y, degrees) {
        super({x,y,width:Resources.Tree.width, height:Resources.Tree.height})
        this.graphics.use(Resources.Tree.toSprite())

        const radians = (degrees * Math.PI) / 180;
        this.rotation = radians
    }

}