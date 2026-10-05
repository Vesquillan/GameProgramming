class MainMenuControllerGameObject extends GameObject{
    constructor(){
        super("MainMenuControllerGameObject")
        this.addComponent(new MainMenuController())
        this.addComponent(new TextLabel(), {text: "Tower Game: Enter to start"})
    }
}