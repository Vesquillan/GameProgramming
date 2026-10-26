class MainMenuController extends Component{
    update(){
        if(Input.keysDown.includes("Enter")){
            Globals.currentLevel = "1"
            SceneManager.loadScene(Level01)
        }
    }
}