class Level01 extends Scene{
    constructor(){
        super()
        this.instantiate(new GroundGameObject(), new Vector2 (-325, 300))
        this.instantiate(new GroundGameObject(), new Vector2 (25, 300))
        this.instantiate(new GroundGameObject(), new Vector2 (325, 100))
        this.instantiate(new GroundGameObject(), new Vector2 (25, -75))
        this.instantiate(new GroundGameObject(), new Vector2 (325, -225))
        this.instantiate(new EnemyGameObject(), new Vector2 (-150, 0), Math.PI)
        this.instantiate(new LevelControllerGameObject())
    }
}