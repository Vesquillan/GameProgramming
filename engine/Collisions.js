class Collisions{
    static isCollisionPointPolygon(point, gameObject){
        //to worldspace
        let worldSpacePoints = []
        for(let point of gameObject.getComponent(Collider).points){
            worldSpacePoints.push(
                new Vector2(gameObject.transform.getWorldMatrix().transformPoint(point).x, gameObject.transform.getWorldMatrix().transformPoint(point).y)
            )
        }
        //axes of projection
        for(let i = 0; i < worldSpacePoints.length; i++){
            let point1 = worldSpacePoints[i]
            let point2 = worldSpacePoints[(i+1)%worldSpacePoints.length]
            let edge = point1.minus(point2)
            let axis = edge.orthogonal()
            
            //overlap?
            let pointProjection = point.dot(axis)
            let polygonProjections = worldSpacePoints.map(p=>p.dot(axis))
            if(pointProjection < Math.min(...polygonProjections) || pointProjection > Math.max(...polygonProjections)){
                return false
            }
        }
        return true
    }

    static isCollisionPolygonPolygon(gameObject, gameObjectTwo){
        //to worldspace
        let worldSpacePoints = []
        for(let point of gameObject.getComponent(Collider).points){
            worldSpacePoints.push(
                new Vector2(gameObject.transform.getWorldMatrix().transformPoint(point).x, gameObject.transform.getWorldMatrix().transformPoint(point).y)
            )
        }
        let worldSpacePointsTwo = []
        for(let point of gameObjectTwo.getComponent(Collider).points){
            worldSpacePointsTwo.push(
                new Vector2(gameObjectTwo.transform.getWorldMatrix().transformPoint(point).x, gameObjectTwo.transform.getWorldMatrix().transformPoint(point).y)
            )
        }

        let axes = []
        //axes of projection
        for(let i = 0; i < worldSpacePoints.length; i++){
            let point1 = worldSpacePoints[i]
            let point2 = worldSpacePoints[(i+1)%worldSpacePoints.length]
            let edge = point1.minus(point2)
            let axis = edge.orthogonal()
            axes.push(axis)
        }

        for(let i = 0; i < worldSpacePointsTwo.length; i++){
            let point1 = worldSpacePointsTwo[i]
            let point2 = worldSpacePointsTwo[(i+1)%worldSpacePointsTwo.length]
            let edge = point1.minus(point2)
            let axis = edge.orthogonal()
            axes.push(axis)
        }
            
        for(const axis of axes){
            //overlap?
            let polygonProjections = worldSpacePoints.map(p=>p.dot(axis))
            let polygonProjectionsTwo = worldSpacePointsTwo.map(p=>p.dot(axis))
            if(Math.max(...polygonProjectionsTwo) < Math.min(...polygonProjections) || Math.min(...polygonProjectionsTwo) > Math.max(...polygonProjections)){
                return false
            }
        }
        return true
    }
}