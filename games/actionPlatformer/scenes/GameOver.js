class GameOver extends Scene{
    constructor(){
        super()
        this.instantiate(new GameOverControllerGameObject(), new Vector2(0, 0))
    }
}