class WinControllerGameObject extends GameObject{
    constructor(){
        super("MainMenuControllerGameObject")
        this.addComponent(new WinController())
        this.addComponent(new TextLabel(), {text: "You win!!!!!      R to return to main menu"})
    }
}