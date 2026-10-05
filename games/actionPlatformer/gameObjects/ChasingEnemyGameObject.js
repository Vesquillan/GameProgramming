class ChasingEnemyGameObject extends GameObject{
    constructor(){
        super("Enemy", ["Enemy"])
        this.addComponent(new ChasingEnemyController())
        this.addComponent(new Polygon(), {fillStyle:"darkgrey", points:Assets.triangle})
    }
}