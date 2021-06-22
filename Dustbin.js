class Dustbin
{
	constructor(x,y)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.rWall=Bodies.rectangle(x+150,y-100,20,400, options);
        this.lWall=Bodies.rectangle(x-100,y-100,20,500,options);
        this.base=Bodies.rectangle(x,y,200,20,options);
        this.dustbinImg=loadImage("sprites/dustbingreen.png");
        World.add(world, this.base);
        World.add(world,this.rWall);
        World.add(world,this.lWall);

	}
	display()
	{
			
			var pos=this.base.position;		
            var lPos=this.lWall.position;		
            var rPos=this.rWall.position;		

    	    push()
    	    translate(pos.x,pos.y-200);
			imageMode(CENTER)
			image(this.dustbinImg,0,0,300,400);

			pop()
            rectMode(CENTER);
            rect(pos.x,pos.y,200,20)

	}

}