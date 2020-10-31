class Bob {
    constructor(x, y) {
      var Boptions = {
          'isStatic':false,
          'restitution':1,
          'friction':0.1,
          'density':1.2
      }
      this.x = x;
      this.y = y;
      this.radius = 30;
      this.body = Bodies.circle(x, y,this.radius, Boptions);
      
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y)
      ellipseMode(RADIUS);
      stroke(244, 0, 252)
      fill(244, 0, 252);
      ellipse(0,0, this.radius,this.radius);
      pop();
    }
  };