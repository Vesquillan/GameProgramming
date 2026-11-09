class BossHandGameObject extends GameObject{
    constructor(){
        super("BossHand", ["Enemy", "BossPart"])
        this.addComponent(new BossHandEnemyController())
        this.addComponent(new Polygon(), {fillStyle:"red", points:Assets.triangle})
        this.addComponent(new Collider(), {isTrigger : true})
    }
}