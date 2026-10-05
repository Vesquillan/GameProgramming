class GenericLevel extends Scene{
    constructor(){
        super()
        this.instantiate(new MainGameObject(), new Vector2(-325, 250))
        Camera.main.backgroundColor = "lightgrey"
    }
}