class AttackGameObject extends GameObject{
    constructor(){
        super("Attack")
        this.addComponent(new AttackController())
        this.addComponent(new Polygon(), {fillStyle:"blue", points:Assets.triangle})
        this.transform.scale = new Vector2(1.25, 0.25)
        this.transform.rotation = Math.PI/2
    }
}