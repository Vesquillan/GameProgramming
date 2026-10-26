class MainGameObject extends GameObject{
    constructor(){
        super("Player")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"rgb(0, 50, 0)", points:[
            new Vector2(0, -40),
            new Vector2(40, 40),
            new Vector2(-40, 40),
        ]})
    }
}