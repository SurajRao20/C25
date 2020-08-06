class Ball {
    constructor(x, y,diameter) {
      var options = {
          'restitution':0.8,
          'friction':4,
          'density':1.2
      }
      this.body = Bodies.circle(x,y,diameter,options);
      this.radius = diameter
      this.image = loadImage("paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      imageMode(CENTER)
      fill(215,255,255);      
      image(this.image,0, 0, this.diameter);
      pop();
    }
  };
