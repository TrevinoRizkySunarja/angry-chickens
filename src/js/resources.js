import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Bird: new ImageSource('images/bird.png'),
    Tree: new ImageSource('images/tree.png'),
    BG: new ImageSource('images/background.jpg'),
    Floor: new ImageSource('images/floor.jpg'),
    ChickenOne: new Sound('sounds/chicken1.mp3'),
}

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)

export { Resources, ResourceLoader }