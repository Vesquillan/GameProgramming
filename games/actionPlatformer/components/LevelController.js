class LevelController extends Component{
    start(){
        SceneManager.loadScene(GenericLevel, true)
    }
    update(){
        let playerGameObject = GameObject.find("Player")
        let enemyGameObject = GameObject.find("Enemy")
        if(playerGameObject.transform.position.y <= -500){
            if(!enemyGameObject){
                SceneManager.loadScene(BossLevel)
            }
            else{
                SceneManager.loadScene(Level02)
            }
        }
    }
}