let person = new Person (50, 20, 50, 10, 100, 50);
var ground = Matter.Bodies.rectangle(0, 480, 1600, 100, { 
	collisionFilter: {
		category: 0x0001 | 0x0002,
	},
	isStatic: true 
});

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World

// create an engine
var engine = Engine.create();


function setup() {
	person.init();
	rectMode(CENTER)
	let canvas = createCanvas(800, 500);

	// add all of the bodies to the world
	World.add(engine.world, [ground, person.lower_left_leg, person.lower_right_leg, person.upper_left_leg, person.upper_right_leg]);
	World.add(engine.world, person.left_joint)
	World.add(engine.world, person.right_joint)
	World.add(engine.world, person.main_joint)
	// run the engine
	Engine.run(engine);

	Render.run(Render.create({
		element: document.body,
		engine: engine
	}));

	// Mouse Constraint
	let canvasMouse = Matter.Mouse.create(canvas.elt)
	canvasMouse.pixelRatio = pixelDensity();
	let m = Matter.MouseConstraint.create(engine, {
		mouse: canvasMouse
	})
	Matter.World.add(engine.world, m)
}

function draw() {
	background(51);
	person.show();
	fill("#ebebeb")
	beginShape();
		for (let i = 0; i < 4; i++) {
			vertex(ground.vertices[i].x, ground.vertices[i].y);
		}
    endShape();
}