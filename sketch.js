let person = new Person (50, 20, 50, 10, 50, 50);

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World

// create an engine
var engine = Engine.create();


function setup() {
	person.init();
	createCanvas(800, 500);

	// add all of the bodies to the world
	var ground = Matter.Bodies.rectangle(0, 480, 800, 100, { isStatic: true });
	World.add(engine.world, [ground, person.lower_left_leg, person.lower_right_leg, person.upper_left_leg, person.upper_right_leg]);
	World.add(engine.world, person.joint_left)
	World.add(engine.world, person.joint_right)
	// run the engine
	Engine.run(engine);

}

function draw() {
	background(51);
	person.show();
}