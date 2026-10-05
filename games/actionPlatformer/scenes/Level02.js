class Level02 extends Scene{
    constructor(){
        super()
        this.instantiate(new GroundGameObject(), new Vector2 (-325, 300))
        this.instantiate(new GroundGameObject(), new Vector2 (325, 100))
        this.instantiate(new GroundGameObject(), new Vector2 (-325, -75))
        this.instantiate(new GroundGameObject(), new Vector2 (325, -225))
        this.instantiate(new ChasingEnemyGameObject(), new Vector2 (0, 200), Math.PI)
        this.instantiate(new LevelControllerGameObject())
    }
}