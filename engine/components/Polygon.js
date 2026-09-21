class Polygon extends Component {
    fillStyle = "magenta"
    points = []
    draw(ctx) {
        let position = this.transform.position

        //Since we have an engine now, the canvas should already be
        //the right size and cleared


        //Signaling to the context that I'm going to draw something
        ctx.save()

        //Set center of our object
        ctx.translate(position.x, position.y)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)
        ctx.rotate(this.transform.rotation)

        //Move to the corners of the polygon representing our game object
        ctx.beginPath()
        for(const point of this.points){
            ctx.lineTo(point.x, point.y)
        }

        //Set the color of the fill
        ctx.fillStyle = this.fillStyle
        //Tell the canvas to draw the object
        ctx.fill()

        //Signaling that I'm done drawing
        ctx.restore()
    }
}