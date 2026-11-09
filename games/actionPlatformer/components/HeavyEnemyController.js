class HeavyEnemyController extends EnemyController{
    start(){
        this.health = 2
        this.speed = 30
    }
    update(){
        if(this.transform.position.y >= 300){
            this.direction = -1
        }
        else if(this.transform.position.y <= 0){
            this.direction = 1
        }
        if(this.hitStun){
                if(this.hitStunTimer > 0.5){
                    this.hitStun = false
                    this.vulnerable = true
                    super.dangerous = true
                }
                else{
                    this.hitStunTimer += Time.deltaTime
                }
            }
        this.transform.position.y += Time.deltaTime * this.speed * this.direction
        if(this.health == 1){
            this.gameObject.getComponent(Polygon).fillStyle = "darkgrey"
            this.speed = 60
        }
        else{
            this.gameObject.getComponent(Polygon).fillStyle = "black"
        }
    }
}
