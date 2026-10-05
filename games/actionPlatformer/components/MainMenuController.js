class MainMenuController extends Component{
    update(){
        if(Input.keysDown.includes("Enter")){
            SceneManager.loadScene(Level01)
        }
    }
}