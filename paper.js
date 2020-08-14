class Paper {
  constructor() {
    var options = {
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2
    }
  this.body = Bodies.circle(100,376,20,options);
  this.image = loadImage("photo/paper.png");
  //this.body = loadImage("sprites/paper.js");

  World.add(world, this.body);
  }
 display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y); 
    ellipseMode(CENTER);
    fill("yellow");
    ellipse(0, 0, this.width );
    pop();
  }
};
