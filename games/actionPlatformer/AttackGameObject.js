class AttackGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new AttackController())
        this.addComponent(new Polygon(), {fillStyle:"red", points:[
            new Vector2(-50, 20),
            new Vector2(-50, 0),
            new Vector2(50, 10),
        ]})
    }
}