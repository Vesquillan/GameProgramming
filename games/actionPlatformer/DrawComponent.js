class DrawComponent extends Component {
    draw(ctx) {
        let position = this.transform.position

        //Since we have an engine now, the canvas should already be
        //the right size and cleared


        //Signaling to the context that I'm going to draw something
        ctx.save()

        //Set center of our object
        ctx.translate(position.x, position.y)

        //Move to the corners of the polygon representing our game object
        ctx.beginPath()
        ctx.lineTo(0, -20)
        ctx.lineTo(10, 10)
        ctx.lineTo(-10, 10)
        // ctx.lineTo(50, -40)
        // ctx.lineTo(60, -50)
        // ctx.lineTo(500, 0)
        // ctx.lineTo(0, 40)

        //Set the color of the fill
        ctx.fillStyle = "black"
        //Tell the canvas to draw the object
        ctx.fill()

        //Signaling that I'm done drawing
        ctx.restore()
    }
}