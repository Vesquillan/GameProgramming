class Scene{
    gameObjects = []

    instantiate(gameObject, position = new Vector2(0,0)){
        this.gameObjects.push(gameObject)
        gameObject.transform.position = position
    }

    start(){
        for(const gameObject of this.gameObjects){
            gameObject.start()
        }
    }
    update(){
        for(const gameObject of this.gameObjects){
            gameObject.update()
        }
    }
    draw(ctx){
        for(const gameObject of this.gameObjects){
            gameObject.draw(ctx)
        }
    }
}

function instantiate(gameObject, position = new Vector2(0,0)){
    Engine.currentScene.instantiate(gameObject, position)
}