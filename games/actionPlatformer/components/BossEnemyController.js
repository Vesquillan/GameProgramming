class BossEnemyController extends EnemyController{
    direction = 1
    yVelocity = 0
    xVelocity = 0
    maxVelocity = 200
    slamming = false
    vulnerable = false
    health = 3
    hitStun = false
    hitStunTimer = 0
    hitStunTracker = 1
    startDelay = 0
    active = false
    update(){
        if(!GameObject.find("BossHand") && this.startDelay <= 5){
            this.startDelay += Time.deltaTime
            if(this.hitStunTimer > 0.25){
                this.hitStunTimer = 0
                this.hitStunTracker *= -1
                if(this.hitStunTracker == 1){
                    this.gameObject.getComponent(Polygon).fillStyle = "red"
                }
                else if(this.hitStunTracker == -1){
                    this.gameObject.getComponent(Polygon).fillStyle = "cyan"
                }
            }
            else{
                this.hitStunTimer += Time.deltaTime
            }
        }
        if(this.startDelay > 5 && !this.active){
            this.active = true
            this.hitStunTimer = 0
        }
        if(this.active){
            if(this.transform.position.y >= 200){
                super.dangerous = true
                this.yVelocity = -this.maxVelocity
                this.vulnerable = true
                this.gameObject.getComponent(Polygon).fillStyle = "darkgrey"
                this.transform.position.y = 200
            }
            if(this.transform.position.y <= -200){
                this.hitStun = false
                this.gameObject.getComponent(Polygon).fillStyle = "red"
                this.slamming = false
                this.vulnerable = false
                this.transform.position.y = -200
            }
            if(Math.abs(this.transform.position.x - GameObject.find("Player").transform.position.x) < 10 && !this.slamming){
                this.slamming = true
                this.yVelocity = 2500
            }
            else{
                if(this.transform.position.x >= GameObject.find("Player").transform.position.x && this.xVelocity > -this.maxVelocity){
                    this.xVelocity -= 3
                }
                else if(this.transform.position.x <= GameObject.find("Player").transform.position.x && this.xVelocity < this.maxVelocity){
                    this.xVelocity += 3
                }
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
            }
            this.transform.position.y += this.yVelocity * Time.deltaTime
            this.transform.position.x += this.xVelocity * Time.deltaTime
        }
    }
    hit(){
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
        SceneManager.loadScene(Win)
    }
}