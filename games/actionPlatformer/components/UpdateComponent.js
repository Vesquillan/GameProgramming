class UpdateComponent extends Component {

    yVelocity = 0

    start(){
        this.grounds = GameObject.findGameObjectsWithTag("Ground")
        this.facing = 1
        this.attacking = false
        this.timeSinceLastAttack = 0
        this.attackTimer = 0
        this.drag = 50
        this.xVelocity = 0
        this.dashes = 1
        this.maxDashes = 1
        this.speed = 700
        this.jumpPrepped = false
        this.dashTimer = 0
        this.maxDashTimer = 0
        this.lastJumpTime = -100
        //this.gameObject.transform.position = new Vector2(50,50)
    }
    fixedUpdate() {
        if(Input.keysDownThisFrame.includes("KeyP")){
            this.transform.position.y = -501
        }
        /*this.enemies = GameObject.findGameObjectsWithTag("Enemy")
        if(this.enemies.length > 0){
            for(const enemy of this.enemies){
                if((enemy.transform.position.minus(this.transform.position).magnitude < 70) && !this.attacking && !this.dashing && enemy.getComponent(EnemyController).dangerous){
                    this.die()
                }
            }
        }*/
       
        if(this.transform.position.y >= 1000){
            this.die()
        }
        this.timeSinceLastAttack += 1
        if(this.dashTimer > this.maxDashTimer){
            if(this.dashing){
                this.dashing = false
                //this.gameObject.getComponent(Collider).isTrigger = false
                if(this.yVelocity < -300){
                    this.yVelocity = -300
                }
                if(Math.abs(this.xVelocity) > this.drag * 2){
                    this.xVelocity = this.drag * 2 * this.facing
                }
            }
        }
        else{
            this.dashTimer += 1
        }
        //Check to see if the right arrow key is down.
        //If it is, move our character right
        if (!this.dashing && (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD"))){
            //this.transform.position.x = this.transform.position.x + 350 * Time.deltaTime
            this.xVelocity = this.speed
            if(!this.attacking){
                this.facing = 1
            }
        }

        //Check to see if the left arrow key is down.
        //If it is, move our character left
        else if (!this.dashing && (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA"))){
            this.xVelocity = -this.speed
            //this.transform.position.x = this.transform.position.x - 350 * Time.deltaTime
            if(!this.attacking){
                this.facing = -1
            }
        }

        else{
            if(Math.abs(this.xVelocity) < this.drag){
                this.xVelocity = 0
            }
            else{
                if(this.xVelocity > 0){
                    this.xVelocity -= this.drag
                }
                else{
                    this.xVelocity += this.drag
                }
            }
        }

        if(Input.keysDownThisFrame.includes("ShiftLeft") && !this.dashing && this.dashes > 0){
            this.dash(2400, "black", new Vector2(this.facing, 0))
        }

        if(!this.dashing){
            if(this.dashes > 0){
                this.gameObject.getComponent(Polygon).fillStyle = "rgb(0, 75, 0)"
                this.speed = 550
            }
            else{
                this.gameObject.getComponent(Polygon).fillStyle = "grey"
                this.speed = 175
            }
        }

        if(!this.isGrounded()){
            if(!this.dashing){
                this.yVelocity += 20
            }
        }
        else{
            //this.transform.position.y = this.isGrounded().transform.position.y - 79
            if(!this.dashing){
                this.yVelocity = 0
                this.dashes = this.maxDashes
            }
        }

        if(Input.keysDownThisFrame.includes("Space")){
            this.jumpPrepped = true
        }

        if(this.jumpPrepped && !this.dashing){
            if(this.isGrounded()){
                this.yVelocity -= 700
                this.lastJumpTime = Time.time
            }
            this.jumpPrepped = false
        }

        //this.transform.position.y += Time.deltaTime * this.yVelocity
        //this.transform.position.x += Time.deltaTime * this.xVelocity
        this.gameObject.getComponent(RigidBody).velocity = new Vector2(this.xVelocity, this.yVelocity)

        if(Input.mouseButtonsDownThisFrame.includes(0) && this.timeSinceLastAttack > 30 && !this.attacking){
            this.dash(2000, "blue", this.worldMousePos().minus(this.transform.position))
            this.attack = instantiate(new AttackGameObject(), new Vector2(10000, 10000), (Math.PI/2))
            this.attacking = true
            //this.attack.transform.scale = new Vector2(this.attack.transform.scale.x * this.facing, this.attack.transform.scale.y * this.facing)
            this.attackTimer = 0
        }
        if(this.attacking){
            this.attack.transform.position.x = this.transform.position.x
            this.attack.transform.position.y = this.transform.position.y
            console.log(this.attack.transform.rotation)
            if(this.attack.transform.rotation == Math.PI/2){
                let mouse = this.worldMousePos().minus(this.transform.position)
                if(mouse.x > 0){
                    this.attack.transform.rotation = Math.atan(mouse.y / mouse.x) + Math.PI/2
                }
                else{
                    this.attack.transform.rotation = Math.atan(mouse.y / mouse.x) + (3 * Math.PI/2)
                }
            }
            this.attackTimer += 1
        }
        if(this.attackTimer > 20){
            this.attack.transform.rotation = 0
            this.attacking = false
            this.attackTimer = 0
            this.timeSinceLastAttack = 0
            this.attack.transform.position.x = 10000
            this.attack.transform.position.y = 10000
        }
    }
    update(){
        
    }
    isGrounded() {
        for(const go of this.grounds){
            if(Collisions.isCollisionPointPolygon(this.transform.position.plus(new Vector2(30, 40)), go) || Collisions.isCollisionPointPolygon(this.transform.position.plus(new Vector2(-30, 40)), go) || Collisions.isCollisionPointPolygon(this.transform.position.plus(new Vector2(0, 40)), go)){
                return go
            }
            //if((go.transform.position.y > this.transform.position.y) && ((go.transform.position.y - this.transform.position.y) < 80) && (Math.abs(go.transform.position.x - this.transform.position.x) < (40 * go.transform.scale.x + 40))){
            //    return go
            //}
        }
        return null
    }
    die(){
        SceneManager.loadScene(GameOver)
        this.transform.position.x = 50
        this.transform.position.y = 550
        this.yVelocity = 0
    }
    dash(strength, color, target){
        //this.gameObject.getComponent(Collider).isTrigger = true
        this.xVelocity = 0
        this.yVelocity = 0
        this.maxDashTimer = strength / 300
        this.dashTimer = 0
        let angle = Math.atan(target.y / target.x)
        if(target.x == 0){
            angle = 0
        }
        if(target.y == 0){
            angle = 0
        }
        let direction = new Vector2(Math.cos(angle), Math.sin(angle))
        if(target.x == 0){
            direction.x = 0
        }
        if(target.y == 0){
            direction.y = 0
        }
        if(this.dashes > 0){
            if(target.x < 0){
                this.yVelocity = strength * direction.y * -1
                this.xVelocity = strength * direction.x * -1
                this.facing = -1
            }
            else{
                this.yVelocity = strength * direction.y
                this.xVelocity = strength * direction.x
                this.facing = 1
            }
            
            this.dashing = true
            this.dashes -= 1
        }
        this.gameObject.getComponent(Polygon).fillStyle = color
    }
    worldMousePos(){
        console.log()
        if(Input.mousePosition){
            let matrix = new DOMMatrix()
            matrix.translateSelf(Engine.canvas.width/2, Engine.canvas.height/2)
            matrix.multiplySelf(Camera.main.transform.getWorldMatrix().inverse())

            let worldPositionDOMPoint = matrix.inverse().transformPoint(Input.mousePosition)
            let worldPosition = new Vector2(worldPositionDOMPoint.x, worldPositionDOMPoint.y)
            return worldPosition
        }
        else{
            return new Vector2(0, 0)
        }
    }
    onCollisionStay(other){
        if(this.gameObject.getComponent(RigidBody).velocity.y > 0 && other.transform.position > this.transform.position){
            this.gameObject.getComponent(RigidBody).velocity.y = 0
        }
    }

    onTriggerStay(other){
        if(other.tags.includes("Enemy")){
            if(this.attacking){
                other.getComponent(EnemyController).hit()
            }
            else{
                if(other.getComponent(EnemyController).dangerous && !this.dashing){
                    this.die()
                }
            }
        }
    }
}