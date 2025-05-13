import { Actor, Engine, Vector } from "excalibur"
import { Resources } from './resources'

export class Chicken extends Actor {

    constructor() {
        super({width: Resources.Bird.width, height: Resources.Bird.height })
        this.pos = new Vector(200,400)
    }
    onInitialize(engine) {
        this.graphics.use(Resources.Bird.toSprite())
    }
    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            Resources.ChickenOne.play() 
            console.log("player pressed space")
        }
    }
}