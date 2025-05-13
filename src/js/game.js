import '../css/style.css'
import { Actor, Engine, DisplayMode, SolverStrategy, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Tree } from './tree'
import { Chicken } from './chicken'
import { Background } from './background.js'
import { Floor } from './floor.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1000, 
            height: 600, 
            maxFps: 60, 
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Arcade,
                gravity: new Vector(0, 800),
            }
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add(new Background())

        this.add(new Floor())

        this.add(new Tree(650, 234, 0))
        this.add(new Tree(650, 340, 90))

        this.add(new Chicken())
    }
}

new Game()
