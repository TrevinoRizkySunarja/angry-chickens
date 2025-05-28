import { Actor, Keys, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class Chicken extends Actor {
    constructor() {
        super({ 
            width: Resources.Bird.width, 
            height: Resources.Bird.height,
            collisionType: CollisionType.Active
        });
        this.pos = new Vector(200, 360);
        this.launched = false;
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Bird.toSprite());
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Space) && !this.launched) {
            Resources.ChickenOne.play();
            this.vel = new Vector(400, -400); // Launch speed and direction
            this.launched = true;
        }

        if (this.pos.y > engine.drawHeight || this.pos.x > engine.drawWidth) {
            // Reset chicken position after leaving the screen
            this.resetPosition();
        }
    }

    resetPosition() {
        this.pos = new Vector(200, 360);
        this.vel = Vector.Zero;
        this.launched = false;
    }
}
