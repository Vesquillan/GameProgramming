class MainGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"black", points:[
            new Vector2(0, -40),
            new Vector2(40, 40),
            new Vector2(-40, 40),
        ]})
    }
}