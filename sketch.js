let walkers=[];

function setup() {
  createCanvas(400, 400);
  
  for (var i = 0; i<100; i++){
    var x = random (windowWidth)
    var y = random (windowHeight)
       walkers[i]= new Walker(x,y,"purple")
  }
}

function draw() {
  background(143, 180, 144);
  
  for(var i = 0; i<100; i++){
    walkers[i].tampil();
    walkers[i].gerak();
    walkers[i].lihatBatas();
  }
}


class Walker {
  constructor(x,y){
    this.location = createVector(x,y);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.01);
  }
  
  tampil(){
    stroke('black');
    fill('purple');
    rect(this.location.x, 
         this.location.y, 
         20, 
         20);
  }
  
  gerak(){
    var mouse = createVector(mouseX, mouseY);
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = 6;
    
    arahMouse.normalize();
    arahMouse.mult(0.2); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
    
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.location.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.location.y = 0;
    }
    else if (this.location.y < 0){
      this.location.y = windowHeight;
    }
  }
  
  lihatBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}