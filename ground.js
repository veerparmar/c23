class Ground{
    constructor(x,y,width,height) {
        var options = {
            isStatic : true

        }
        this.width = width
        this.hieght = height
        
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body) 
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        push();
        fill("green");
        stroke("yellow");
        rect(pos.x, pos.y, this.width, this.height);
       pop(); 
    }
    
}