class Ground{
    constructor (x, y, width, height) {
    var options =
        
        {
            isStatic: true,
            restitution: 0
            
            
            }
    
            
    
    this.body = Bodies.rectangle (x,y, width, height, options);
    World.add(akhilWorld, this.body);
    this.width = width;
    this.height = height;
    
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    
        rectMode(CENTER);
    rect(0, 0, this.width, this.height );
    
    pop();
    }
    }
    
    