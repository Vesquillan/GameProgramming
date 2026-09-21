class EnemyController extends Component{
    direction = 1
    update(){
        if(this.transform.position.y >= 500){
            this.direction = -1
        }
        else if(this.transform.position.y <= 200){
            this.direction = 1
        }
        this.transform.position.y += Time.deltaTime * 60 * this.direction
    }
}