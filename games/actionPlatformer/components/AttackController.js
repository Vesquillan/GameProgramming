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
        let enemyGameObject = GameObject.find("Enemy")
        if(enemyGameObject){
            let enemyPosition = enemyGameObject.transform.position
            let distance = myPosition.minus(enemyPosition).magnitude
            if(distance < 50){
                enemyGameObject.destroy()
            }
        }
    }
}