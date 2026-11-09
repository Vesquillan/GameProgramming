class EnemyGameObject extends GameObject{
    constructor(){
        super("Enemy", ["Enemy"])
        this.addComponent(new EnemyController())
        this.addComponent(new Polygon(), {fillStyle:"darkgrey", points:Assets.triangle})
        this.addComponent(new Collider(), {isTrigger : true})
    }
}