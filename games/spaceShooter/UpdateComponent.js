class UpdateComponent extends Component {

    start(){
        this.timeSinceLastLaser = 0
        //this.gameObject.transform.position = new Vector2(50,50)
    }
    update() {
        this.timeSinceLastLaser += 1
        //Check to see if the right arrow key is down.
        //If it is, move our character right
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x = this.transform.position.x + 1

        //Check to see if the left arrow key is down.
        //If it is, move our character left
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x = this.transform.position.x - 1

        //Check to see if the up arrow key is down.
        //If it is, move our character up
        if (Input.keysDown.includes("ArrowUp"))
            this.gameObject.transform.position.y = this.transform.position.y - 1

        //Check to see if the down arrow key is down.
        //If it is, move our character down
        if (Input.keysDown.includes("ArrowDown"))
            this.transform.position.y = this.transform.position.y + 1

        if(this.timeSinceLastLaser > 20){
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone())
        }
    }
}