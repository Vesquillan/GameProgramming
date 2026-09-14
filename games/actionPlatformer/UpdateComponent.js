class UpdateComponent extends Component {

    yVelocity = 0

    start(){
        //this.gameObject.transform.position = new Vector2(50,50)
    }
    update() {
        //Check to see if the right arrow key is down.
        //If it is, move our character right
        if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD"))
            this.transform.position.x = this.transform.position.x + 5

        //Check to see if the left arrow key is down.
        //If it is, move our character left
        if (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA"))
            this.transform.position.x = this.transform.position.x - 5

        if(this.yVelocity < 20 && this.transform.position.y < 600)
            this.yVelocity += 0.5
        else if(this.transform.position.y == 600)
            this.yVelocity = 0

        if(Input.keysDown.includes("Space") && this.transform.position.y >= 600)
            this.yVelocity -= 15

        this.transform.position.y += this.yVelocity
    }
}