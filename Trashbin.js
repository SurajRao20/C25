class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'isStatic': true,
          'friction' : 0
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width
      this.height = height
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push ();
      translate (pos.x, pos.y);
      rotate (this.body.angle)
      rectMode(CENTER);
      stroke(255,255,255)
      strokeWeight(4);
      fill(255,255,255);
      rect(0, 0, this.width, this.height);
      pop();
      
    }
  };