class Person {
  constructor(Ul, Uw, Ll, Lw, x, y) {
    this.upper_left_leg = Matter.Bodies.rectangle(x, y, Ul, Uw);
    this.upper_right_leg = Matter.Bodies.rectangle(x, y, Ul, Uw);
    this.lower_left_leg = Matter.Bodies.rectangle(x, y + Ul, Ll, Lw);
    this.lower_right_leg = Matter.Bodies.rectangle(x, y + Ul, Ll, Lw);
    this.Ul = Ul;
    this.Ll = Ll;
    this.Lw = Lw;
    this.x = x;
    this.y = y;
    this.Uw = Uw;
  }

  init() {
    //joining leg with matrix.js constraints
    let join_left = {
      bodyA: this.upper_left_leg,
      bodyB: this.lower_left_leg,
      stiffness: 0.4
    }

    this.joint_left = Matter.Constraint.create (join_left);

    let join_right = {
      bodyA: this.upper_right_leg,
      bodyB: this.lower_right_leg,
      stiffness: 0.4
    }

    this.joint_right = Matter.Constraint.create (join_right);
  }
  
  show() {
    rect(this.upper_left_leg.position.x, this.upper_left_leg.position.y, this.Uw, this.Ul)
    rect(this.lower_left_leg.position.x, this.lower_left_leg.position.y, this.Lw, this.Ll)
  }
}