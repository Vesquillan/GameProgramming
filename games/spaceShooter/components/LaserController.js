class LaserController extends Component{
    update(){
        this.facing = 1
        this.speed = 180
        this.transform.position.y -= Time.deltaTime * this.speed

        if(this.transform.position.y < 1000){
            this.gameObject.destroy()
        }
        
        let myPosition = this.transform.position
        let enemyGameObject = GameObject.find("Enemy")
        if(enemyGameObject){
            let enemyPosition = enemyGameObject.transform.position
            let distance = myPosition.minus(enemyPosition).magnitude
            if(distance < 20){
                this.gameObject.destroy()
                enemyGameObject.destroy()
            }
        }
    }
}