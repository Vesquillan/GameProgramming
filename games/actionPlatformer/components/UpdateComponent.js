class UpdateComponent extends Component {

    yVelocity = 0

    start(){
        this.grounds = GameObject.findAll("Ground")
        this.facing = 1
        this.attacking = false
        this.timeSinceLastAttack = 0
        this.attackTimer = 0
        //this.gameObject.transform.position = new Vector2(50,50)
    }
    update() {
        if(this.transform.position.y >= 1000){
            this.die()
        }
        this.timeSinceLastAttack += 1
        //Check to see if the right arrow key is down.
        //If it is, move our character right
        if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD")){
            this.transform.position.x = this.transform.position.x + 350 * Time.deltaTime
            if(!this.attacking){
                this.facing = 1
            }
        }

        //Check to see if the left arrow key is down.
        //If it is, move our character left
        if (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA")){
            this.transform.position.x = this.transform.position.x - 350 * Time.deltaTime
            if(!this.attacking){
                this.facing = -1
            }
        }

        if(!this.isGrounded())
            this.yVelocity += 20
        else{
            this.transform.position.y = this.isGrounded().transform.position.y - 79
            this.yVelocity = 0
        }

        if(Input.keysDown.includes("Space") && this.isGrounded()){
            this.yVelocity -= 700
        }

        this.transform.position.y += Time.deltaTime * this.yVelocity

        if(Input.keysDown.includes("KeyE") && this.timeSinceLastAttack > 30 && !this.attacking){
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
}