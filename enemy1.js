class Enemy1 extends BaseClass{
    constructor(x,y){
        super(x,y,90,90);
        this.visibility = 255;
        this.image = loadImage("sprites/Dhairya Pic.png");
    }

    display(){
        if(this.body.speed < 8){
           super.display();
        }
        else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255,this.visibility);
            image(this.image,this.body.position.x,this.body.position.y,90,90)
            pop();
        }
    }

    score(){
        if(this.visibility < 0 && this.visibility > -100){
            score++;
        }
    }
}