class MainMenuController extends Component{
    update(){
        if(Input.keysDown.includes("Enter")){
            Globals.currentLevel = "0"
            SceneManager.loadScene(Level00)
        }
    }
}