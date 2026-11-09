class ElevatorGameObjectController extends Component{
    start(){
        this.active = false
    }
    update(){
        if(this.active && this.transform.position.y > -500){
            this.transform.position.y -= 50 * Time.deltaTime
        }
        else if(!this.active && this.transform.position.y < 300){
            this.transform.position.y += 50 * Time.deltaTime
        }
        if(this.transform.position.y > 300){
            this.transform.position.y = 300
        }
        if(this.transform.position.y < -500){
            this.transform.position.y = -500
        }
        
        if(GameObject.find("Player").transform.position.y > this.transform.position.y){
            this.active = false
        }
    }
    onCollisionStay(other){
        if(other.tags.includes("Player") && other.transform.position.y < this.transform.position.y){
            this.active = true
        }
    }
}
