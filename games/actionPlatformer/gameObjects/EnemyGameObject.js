class EnemyGameObject extends GameObject{
    constructor(){
        super("Enemy")
        this.addComponent(new EnemyController())
        this.addComponent(new Polygon(), {fillStyle:"red", points:Assets.triangle})
    }
}