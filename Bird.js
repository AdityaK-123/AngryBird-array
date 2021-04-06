class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.Simg = loadImage("sprites/smoke.png");
    this.Trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    var position= [this.body.position.x,this.body.position.y];
    this.Trajectory.push(position);

    for(var a=0; a<this.Trajectory.length;a++){
      image(this.Simg,this.Trajectory[a][0],this.Trajectory[a][1]);

    }
  }
}
