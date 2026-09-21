class GroundGameObject extends GameObject{
    constructor(){
        super("Ground")
        this.addComponent(new Polygon(), {fillStyle:"green", points:Assets.square})
    }
}