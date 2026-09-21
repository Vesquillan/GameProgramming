class MainScene extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2(50, 50))
        this.instantiate(new GroundGameObject(), new Vector2 (50, 600))
        this.instantiate(new GroundGameObject(), new Vector2 (400, 600))
        this.instantiate(new GroundGameObject(), new Vector2 (600, 400))
        this.instantiate(new EnemyGameObject(), new Vector2 (225, 350), Math.PI)
    }
}