class Level00 extends Scene{
    constructor(){
        super()
        this.instantiate(new GroundGameObject(), new Vector2 (0, 300)).transform.scale = new Vector2(15, 1)
        this.instantiate(new LevelControllerGameObject())
        this.instantiate(new ElevatorGameObject(), new Vector2 (0, 300))
    }
}
