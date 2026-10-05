class GroundGameObject extends GameObject{
    constructor(){
        super("Ground", ["Ground"])
        if(Math.random() > .5)
            this.addComponent(new Polygon(), {fillStyle:"grey", points:Assets.square})
        else
            this.addComponent(new Polygon(), {fillStyle:"turquoise", points:Assets.square})
    }
}