class Polygon{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.poly = Constraint.create(options);
        this.poly = Bodies.circle(50,200,20);
        World.add(world, this.poly);
    }

    fly(){
        this.poly.bodyA = null;
    }

    display(){
        if(this.poly.bodyA){
            image(this.poly,200,20);
      
            var pointA = this.poly.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
            if(pointA.x<220){
               strokeWeight(7);
               line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
               line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);

            }
            else{
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-3);
           
            }
            pop();
        }

    }
    
}