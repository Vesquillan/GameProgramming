class BossLevel extends Scene{
    constructor(){
        super()
        this.instantiate(new GroundGameObject(), new Vector2 (0, 300)).transform.scale = new Vector2(10, 1)
        this.instantiate(new BossGameObject(), new Vector2 (0, -201), Math.PI).transform.scale = new Vector2(2, 2)
        this.instantiate(new BossHandGameObject(), new Vector2 (-200, -201)).transform.scale = new Vector2(1.5, 1.5)
        this.instantiate(new BossHandGameObject(), new Vector2 (200, -201)).transform.scale = new Vector2(1.5, 1.5)
        this.instantiate(new LevelControllerGameObject())
    }
}