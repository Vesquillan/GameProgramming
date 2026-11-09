class EnemyController extends Component{
    direction = 1
    vulnerable = true
    dangerous = true
    vulnerable = true
    health = 1
    hitStun = false
    hitStunTimer = 0
    hitStunTracker = 1
    speed = 60
    maxHitStun = 1
    start(){

    }
    update(){
        if(this.transform.position.y >= 300){
            this.direction = -1
        }
        else if(this.transform.position.y <= 0){
            this.direction = 1
        }
        if(this.hitStun){
                if(this.hitStunTimer > 0.25){
                    this.hitStunTimer = 0
                    this.hitStunTracker *= -1
                    if(this.hitStunTracker == 1){
                        this.gameObject.getComponent(Polygon).fillStyle = "rgba(255, 255, 255, 1)"
                    }
                    else if(this.hitStunTracker == -1){
                        this.gameObject.getComponent(Polygon).fillStyle = "rgba(255, 255, 255, 0)"
                    }
                }
                else{
                    this.hitStunTimer += Time.deltaTime
                }
                if(this.hitStunTimer > maxHitStun){
                    this.hitStun = false
                    this.vulnerable = true
                    super.dangerous = true
                }
            }
        this.transform.position.y += Time.deltaTime * this.speed * this.direction
    }
    hit(){
        console.log("HIT")
        if(this.vulnerable){
            this.hitStun = true
            this.gameObject.getComponent(Polygon).fillStyle = "rgba(255, 255, 255, 1)"
            super.dangerous = false
            this.vulnerable = false
            this.health -= 1
            if(this.health <= 0){
                this.die()
            }
        }
    }
    die(){
        this.gameObject.destroy()
    }
}