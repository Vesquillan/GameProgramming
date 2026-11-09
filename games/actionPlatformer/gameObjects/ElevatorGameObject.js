class ElevatorGameObject extends GameObject{
    constructor(){
        super("ElevatorGameObject", ["Ground", "Elevator"], "default")
        this.addComponent(new Polygon(), {fillStyle: 'grey', points: Assets.square})
        this.addComponent(new Collider())
        //this.addComponent(new RigidBody())
        this.addComponent(new ElevatorGameObjectController)
        this.transform.scale = new Vector2(2,1)
    }
}
