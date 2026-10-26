class LevelController extends Component{
    start(){
        SceneManager.loadScene(GenericLevel, true)
    }
    update(){
        let playerGameObject = GameObject.find("Player")
        let enemyGameObject = GameObject.find("Enemy")
        if(playerGameObject.transform.position.y <= -500){
            console.log(Globals.currentLevel)
            switch(Globals.currentLevel){
                case "1":
                    Globals.currentLevel = "2"
                    SceneManager.loadScene(Level02)
                    break
                case "2":
                    Globals.currentLevel = "Boss1"
                    SceneManager.loadScene(BossLevel)
                    break
            }
        }
    }
}