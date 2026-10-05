class BossEnemyController extends Component{
    direction = 1
    yVelocity = 0
    xVelocity = 0
    maxVelocity = 100
    slamming = false
    vulnerable = false
    update(){
        if(Math.abs(this.transform.position.x - GameObject.find("Player").transform.position.x) < 10 && !this.slamming){
            this.slamming = true
            this.yVelocity = 2500
        }
        else{
            if(this.transform.position.x >= GameObject.find("Player").transform.position.x && this.xVelocity > -this.maxVelocity){
                this.xVelocity -= 1
            }
            else if(this.transform.position.x <= GameObject.find("Player").transform.position.x && this.xVelocity < this.maxVelocity){
                this.xVelocity += 1
            }
        }
        if(this.transform.position.y > 200){
            this.yVelocity = -this.maxVelocity
            this.vulnerable = true
        }
        if(this.transform.position.y < -200){
            this.slamming = false
            this.vulnerable = false
            this.transform.position.y = -200
        }
        this.transform.position.y += this.yVelocity * Time.deltaTime
        this.transform.position.x += this.xVelocity * Time.deltaTime
    }
}