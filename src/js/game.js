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
            width: 1200, 
            height: 600, 
            maxFps: 60, 
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Arcade,
                gravity: new Vector(0, 800),
            }
         })
         this.showDebug(true)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add(new Background())

        this.add(new Floor())

// Left wall
this.add(new Tree(570, 340, 90));    // Left wall
this.add(new Tree(730, 340, 90));    // Right wall
this.add(new Tree(650, 235, 0));     // Roof base
this.add(new Tree(570, 130, 90));   // Left roof slope
this.add(new Tree(730, 130, 90));    // Right roof slope
this.add(new Tree(650, 25, 0));     // Roof base




        this.add(new Chicken())
    }
}

new Game()
