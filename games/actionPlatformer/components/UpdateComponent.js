class UpdateComponent extends Component {

    yVelocity = 0

    start(){
        this.grounds = GameObject.findAll("Ground")
        this.facing = 1
        this.attacking = false
        this.timeSinceLastAttack = 0
        this.attackTimer = 0
        this.drag = 50
        this.xVelocity = 0
        this.dashes = 1
        //this.gameObject.transform.position = new Vector2(50,50)
    }
    update() {
        if(this.transform.position.y >= 1000){
            this.die()
        }
        this.timeSinceLastAttack += 1
        //Check to see if the right arrow key is down.
        //If it is, move our character right
        if (!this.dashing && (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD"))){
            //this.transform.position.x = this.transform.position.x + 350 * Time.deltaTime
            this.xVelocity = 350
            if(!this.attacking){
                this.facing = 1
            }
        }

        //Check to see if the left arrow key is down.
        //If it is, move our character left
        else if (!this.dashing && (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA"))){
            this.xVelocity = -350
            //this.transform.position.x = this.transform.position.x - 350 * Time.deltaTime
            if(!this.attacking){
                this.facing = -1
            }
        }

        else{
            if(Math.abs(this.xVelocity) < this.drag){
                this.xVelocity = 0
                this.dashing = false
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

        if(Input.keysDown.includes("ShiftLeft") && !this.dashing && this.dashes > 0){
            this.dash(1425, "black")
        }

        if(!this.dashing){
            if(this.dashes > 0){
                this.gameObject.getComponent(Polygon).fillStyle = "purple"
            }
            else{
                this.gameObject.getComponent(Polygon).fillStyle = "grey"
            }
        }

        if(!this.isGrounded()){
            if(!this.dashing){
                this.yVelocity += 20
            }
        }
        else{
            this.transform.position.y = this.isGrounded().transform.position.y - 79
            this.yVelocity = 0
            this.dashes = 1
        }

        if(Input.keysDown.includes("Space") && this.isGrounded()){
            this.yVelocity -= 700
        }

        this.transform.position.y += Time.deltaTime * this.yVelocity
        this.transform.position.x += Time.deltaTime * this.xVelocity

        if(Input.keysDown.includes("KeyE") && this.timeSinceLastAttack > 30 && !this.attacking){
            this.dash(1250, "blue")
            this.attack = instantiate(new AttackGameObject(), new Vector2(10000, 10000), (Math.PI/2))
            this.attacking = true
            this.attack.transform.scale = new Vector2(this.attack.transform.scale.x * this.facing, this.attack.transform.scale.y * this.facing)
            this.attackTimer = 0
        }
        if(this.attacking){
            this.attack.transform.position.x = this.transform.position.x + (70 * this.facing)
            this.attack.transform.position.y = this.transform.position.y
            this.attackTimer += 1
        }
        if(this.attackTimer > 20){
            this.attacking = false
            this.attackTimer = 0
            this.timeSinceLastAttack = 0
            this.attack.transform.position.x = 10000
            this.attack.transform.position.y = 10000
        }
    }
    isGrounded() {
        for(const go of this.grounds){
            if((go.transform.position.y > this.transform.position.y) && ((go.transform.position.y - this.transform.position.y) < 80) && (Math.abs(go.transform.position.x - this.transform.position.x) < 80)){
                return go
            }
        }
        return null
    }
    die(){
        this.transform.position.x = 50
        this.transform.position.y = 50
        this.yVelocity = 0
    }
    dash(strength, color){
        if(this.dashes > 0){
            this.xVelocity = strength * this.facing
            this.dashing = true
            this.dashes -= 1
            this.yVelocity = 0
        }
        this.gameObject.getComponent(Polygon).fillStyle = color
    }
}