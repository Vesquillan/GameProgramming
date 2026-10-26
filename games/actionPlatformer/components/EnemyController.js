class EnemyController extends Component{
    direction = 1
    vulnerable = true
    dangerous = true
    update(){
        if(this.transform.position.y >= 300){
            this.direction = -1
        }
        else if(this.transform.position.y <= 0){
            this.direction = 1
        }
        this.transform.position.y += Time.deltaTime * 60 * this.direction
    }
    hit(){
        this.die()
    }
    die(){
        this.gameObject.destroy()
    }
}