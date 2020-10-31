class Rope
{
    constructor(bodyA, bodyB, offsetX, offsetY)
    {

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
           pointB: {x : this.offsetX, y : this.offsetY}
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);

    }
    display()
    {

        var a = this.rope.bodyA.position;
        var b = this.rope.bodyB.position;

        var point_1x = a.x;
        var point_1y = a.y;

        var point_2x = b.x + this.offsetX;
        var point_2x = b.y + this.offsetY;

        line(point_1x, point_1y, point_2x, point_2y);
    }
}