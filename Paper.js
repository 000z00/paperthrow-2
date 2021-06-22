class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution:0.7,
            friction:1,
            density:0.2
        }
        this.image=loadImage("sprites/paperImg.png");
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius

        World.add(world, this.body);
    }
    display(){
        //  image(this.image,0,0)
        ellipseMode(RADIUS);

        fill("magenta");
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,180);

    }       
};