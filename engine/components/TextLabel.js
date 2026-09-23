class TextLabel extends Component{
    fillStyle = "black"
    text = "[BLANK]"

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

        //Set the color of the fill
        ctx.fillStyle = this.fillStyle
        //Tell the canvas to draw the object
        ctx.fillText(this.text, 0, 0)

        //Signaling that I'm done drawing
        ctx.restore()
    }
}