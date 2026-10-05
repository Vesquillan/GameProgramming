class ChasingEnemyController extends Component{
    direction = 1
    yVelocity = 0
    xVelocity = 0
    maxVelocity = 100
    vulnerable = true
    update(){
        if(this.transform.position.y >= GameObject.find("Player").transform.position.y && this.yVelocity > -this.maxVelocity){
            this.yVelocity -= 1
        }
        else if(this.transform.position.y <= GameObject.find("Player").transform.position.y && this.yVelocity < this.maxVelocity){
            this.yVelocity += 1
        }
        if(this.transform.position.x >= GameObject.find("Player").transform.position.x && this.xVelocity > -this.maxVelocity){
            this.xVelocity -= 1
        }
        else if(this.transform.position.x <= GameObject.find("Player").transform.position.x && this.xVelocity < this.maxVelocity){
            this.xVelocity += 1
        }
        this.transform.position.y += this.yVelocity * Time.deltaTime
        this.transform.position.x += this.xVelocity * Time.deltaTime
    }
}