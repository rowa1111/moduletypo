class Module{
  // 생성자함수
  constructor(pos){
    this.pos = pos; // 위치
    this.vel = new p5.Vector(0,0); // 속도
    
    this.angle = random( radians(360) );
    this.defaultSize = 10;
    
    this.size = this.defaultSize;
    this.isMoving=false;
    this.origin=this.pos.copy();
  }
  
  update(){
    let mouse = new p5.Vector(mouseX,mouseY);
    let d = mouse.dist(this.pos);
    
    if(mouseIsPressed && d < 20){
      this.isMoving=true;
    
      //target-기준점->방향
    let dir=mouse.copy();        
    dir.sub(this.pos);
    dir.mult(0.1)  
      
    this.vel.add(dir);
    }
    
    else{
      let dir=this.origin.copy();
      dir.sub(this.pos);
      dir.mult(0.1);
      
      this.vel.add(dir);
    }
if(this.isMoving){
  this.vel.mult(0.9);
    this.pos.add(this.vel);
    }
    
    
    }
    
  
  
  display(){
    push();
      translate(this.pos.x,this.pos.y);
      rotate(this.angle);
      rectMode(CENTER);
      rect(0,0,this.size,this.size);
    pop();
  }
}