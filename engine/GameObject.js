class GameObject{
    components = []
    markForDestroy = false

    name

    get transform(){
        return this.components[0];
    }

    constructor(name){
        this.addComponent(new Transform())
        this.name = name
    }

    addComponent(component, parameters){
        Object.assign(component, parameters)
        this.components.push(component)
        component.gameObject = this
    }

    start(){
        for(const component of this.components){
            component.start?.()
        }
    }
    update(){
        for(const component of this.components){
            component.update?.()
        }
    }
    draw(ctx){
        for(const component of this.components){
            component.draw?.(ctx)
        }
    }

    destroy(){
        this.markForDestroy = true
    }

    getComponent(type){
        return this.components.find(c => c instanceof type)
    }

    static find(name){
        return Engine.currentScene.gameObjects.find(go=>go.name == name)
    }
    static findAll(name){
        let tempList = []
        for(let i = 0; i < Engine.currentScene.gameObjects.length; i++){
            if(Engine.currentScene.gameObjects[i].name == name){
                tempList.push(Engine.currentScene.gameObjects[i])
            }
        }
        return tempList
    }
}