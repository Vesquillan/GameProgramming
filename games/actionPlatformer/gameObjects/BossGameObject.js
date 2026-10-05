class BossGameObject extends GameObject{
    constructor(){
        super("BossEnemy", ["Boss", "Enemy"])
        this.addComponent(new BossEnemyController())
        this.addComponent(new Polygon(), {fillStyle:"red", points:Assets.triangle})
    }
}