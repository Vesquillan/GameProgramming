class MainGameObject extends GameObject{
    constructor(){
        super("Player")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"purple", points:[
            new Vector2(0, -40),
            new Vector2(40, 40),
            new Vector2(-40, 40),
        ]})
    }
}