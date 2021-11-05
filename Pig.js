class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255;
  }
  Score(){
    if(this.visibility<0 && this.visibility>-1005){
      Score+=5;
      
    }
  }
display(){
  if(this.body.speed<3){
    super.display();
      }
  else{
    World.remove(world,this.body);
    this.visibility-=5;
    push ();
    tint (255,this.visibility);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop ()
  }
}


};