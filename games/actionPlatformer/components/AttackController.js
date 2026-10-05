class AttackController extends Component{
    timer = 0
    update(){
        if(this.timer > 200){
            this.gameObject.destroy()
        }
        else{
            this.timer += 1
        }
        let myPosition = this.transform.position
        let enemyGameObjects = GameObject.findGameObjectsWithTag("Enemy")
        for(const enemyGameObject of enemyGameObjects){
            let enemyPosition = enemyGameObject.transform.position
            let distance = myPosition.minus(enemyPosition).magnitude
            if(distance < 50){
                if(enemyGameObject.tags.includes("Boss") && enemyGameObject.getComponent(BossEnemyController)){
                    SceneManager.loadScene(Win)
                }
                enemyGameObject.destroy()
            }
        }
    }
}