class BossGameObject extends GameObject{
    constructor(){
        super("BossEnemy", ["Boss", "Enemy"])
        this.addComponent(new BossEnemyController())
        this.addComponent(new Polygon(), {fillStyle:"cyan", points:Assets.triangle})
        this.addComponent(new Collider(), {isTrigger : true})
    }
}