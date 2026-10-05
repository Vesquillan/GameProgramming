class GameOverController extends Component{
    update(){
        if(Input.keysDown.includes("KeyR")){
            SceneManager.loadScene(MainMenu)
        }
    }
}