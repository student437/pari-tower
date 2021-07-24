class Polygon{
    constructor(x, y, width, height, angle) {
        var options = {
            'isStatic':false,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY; 
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}