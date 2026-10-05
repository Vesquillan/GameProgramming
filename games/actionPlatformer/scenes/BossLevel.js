class BossLevel extends Scene{
    constructor(){
        super()
        this.instantiate(new GroundGameObject(), new Vector2 (0, 300)).transform.scale = new Vector2(9, 1)
        this.instantiate(new BossGameObject(), new Vector2 (0, -200), Math.PI).transform.scale = new Vector2(2, 2)
        this.instantiate(new LevelControllerGameObject())
    }
}