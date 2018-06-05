class SlopeBoundary {

    /**
     * @constructor
     */
    constructor() {
        this.ground = Matter.Bodies.polygon(width / 2 + 200, height, 3, 780, {
            isStatic: true,
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
    }

    /**
     * Adds the current boundary to MatterJS World
     */
    add_to_world() {
        Matter.World.add(world, [this.ground, this.roof, this.left_wall, this.right_wall]);
    }

    display() {
        fill(color(228, 210, 190))
        triangle(this.ground.position.x -790, this.ground.position.y, width, height, width, 10);
        rect(this.left_wall.position.x, this.left_wall.position.y, 20, height);
        rect(this.right_wall.position.x, this.right_wall.position.y, 20, height);
        rect(this.roof.position.x, this.roof.position.y, width, 20);
    }
}