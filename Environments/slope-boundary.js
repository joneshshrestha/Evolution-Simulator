class SlopeBoundary {

    /**
     * @constructor
     */
    constructor() {
        this.ground = Matter.Bodies.rectangle(0, height, 2 * width, 40, {
            isStatic: true,
            angle: - PI / 36, // 10 degrees
            friction: 1,
            collisionFilter: {
                category: 0x0001
            }
        });

        this.roof = Matter.Bodies.rectangle(width / 2, 10, width, 20, {
            isStatic: true,
            friction: 1,
            collisionFilter: {
                category: 0x0001
            }
        });

        this.left_wall = Matter.Bodies.rectangle(10, height / 2, 20, height, {
            isStatic: true,
            friction: 1,
            collisionFilter: {
                category: 0x0001
            }
        });

        this.right_wall = Matter.Bodies.rectangle(width - 10, height / 2, 20, height, {
            isStatic: true,
            friction: 1,
            collisionFilter: {
                category: 0x0001
            }
        });

        this.ball = Matter.Bodies.circle(width/2, height * 0.8, 25, {
            friction: 0.1,
            density: 1,
            collisionFilter: {
                category: 0x0001
            }
        })
    }

    /**
     * Adds the current boundary to MatterJS World
     */
    add_to_world() {
        Matter.World.add(world, [this.ball, this.ground, this.roof, this.left_wall, this.right_wall]);
    }

    display() {
        fill(color(228, 210, 190))
        beginShape();
		for (let i = 0; i < 4; i++) {
			vertex(this.ground.vertices[i].x, this.ground.vertices[i].y);
		}
        endShape();
        ellipse(this.ball.position.x , this.ball.position.y, 50)
        rect(this.left_wall.position.x, this.left_wall.position.y, 20, height);
        rect(this.right_wall.position.x, this.right_wall.position.y, 20, height);
        rect(this.roof.position.x, this.roof.position.y, width, 20);
    }

    setBallPosition() {
        
    }
}