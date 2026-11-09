class HeavyEnemyGameObject extends GameObject{
    constructor(){
        super("Enemy", ["Enemy"], "default")
        this.addComponent(new Polygon(), {fillStyle: 'black', points: Assets.triangle})
        this.addComponent(new Collider(), {isTrigger : true})
        //this.addComponent(new RigidBody())
        this.addComponent(new HeavyEnemyController)
        //this.transform.scale = new Vector2(1,1)
    }
}
