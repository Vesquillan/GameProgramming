class UpdateComponent extends Component {

    speed = 120
    start(){
        this.timeSinceLastLaser = 0
        //this.gameObject.transform.position = new Vector2(50,50)
    }
    update() {
        this.timeSinceLastLaser += 1
        //Check to see if the right arrow key is down.
        //If it is, move our character right
        if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD"))
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed

        //Check to see if the left arrow key is down.
        //If it is, move our character left
        if (Input.keysDown.includes("ArrowLeft")  || Input.keysDown.includes("KeyA"))
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed

        //Check to see if the up arrow key is down.
        //If it is, move our character up
        if (Input.keysDown.includes("ArrowUp")  || Input.keysDown.includes("KeyW"))
            this.gameObject.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed

        //Check to see if the down arrow key is down.
        //If it is, move our character down
        if (Input.keysDown.includes("ArrowDown")  || Input.keysDown.includes("KeyS"))
            this.transform.position.y = this.transform.position.y + Time.deltaTime * this.speed

        if(this.timeSinceLastLaser > 20){
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone())
        }
    }
}