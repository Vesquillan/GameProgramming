class GameOverControllerGameObject extends GameObject{
    constructor(){
        super("GameOverControllerGameObject")
        this.addComponent(new GameOverController())
        this.addComponent(new TextLabel(), {text: "You ded lol      R to return to main menu"})
    }
}