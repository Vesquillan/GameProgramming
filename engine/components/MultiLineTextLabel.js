class MultiLineTextLabel extends Component{
    fillStyle = "black"
    text  = "[BLANK]"
    font = "10px Arial"
    maxWidth = 200
    draw(ctx) {
        ctx.save()
        ctx.fillStyle = this.fillStyle
        ctx.font = this.font
        let fontHeight = ctx.measureText("").fontBoundingBoxAscent + ctx.measureText("").fontBoundingBoxDescent
        let y = 0
        let safeLine = ""
        let possibleLine = ""
        for(let word of this.text.split(" ")){
            possibleLine = safeLine +  word + " "
            if(ctx.measureText(possibleLine) > this.maxWidth){
                ctx.fillText(possibleLine, 0, y)
                y += fontHeight
                safeLine = word + " "
            }
            else{
                safeLine = possibleLine
            }
        }
        ctx.fillText(safeLine, 0, y)
        ctx.restore()
    }
}