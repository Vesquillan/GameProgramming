class EnemyGameObject extends GameObject{
    constructor(){
        super("Enemy")
        this.addComponent(new Polygon(), {fillStyle: "green", points: Assets.triangle})
        this.addComponent(new EnemyController(), new Vector2(25, 150), Math.PI)
        this.addComponent(new Health(), {health:2})
    }
}