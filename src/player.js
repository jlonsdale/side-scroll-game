class Player {

  constructor(xPos,yPos) {
    this.health = 3
    this.maxStam = 1000
    this.stamina = 1000
    this.xPos = xPos
    this.yPos = yPos-12
    this.yVel = 0
    this.g = 7
    this.dt = 0.1
    this.flying = false
    this.grounded = true
  }

  fly() {
    if (this.stamina>0) {
      this.flying = true
      this.grounded = false
    }
    else {this.stopFlying()}
  }

  stopFlying() {
    this.flying = false
  }

  regenStam() {
    if (this.stamina<=this.maxStam) {this.stamina+=5}
  }

  velocity() {
    if (this.flying==true) {
      this.yVel=-10
      this.stamina-=10}
    else {
      this.yVel+=this.g*this.dt
      this.regenStam()}
  }

  position() {
    console.log(this.grounded)
    this.velocity()
    this.checkCollision()
    this.yPos+=this.yVel*this.dt
  }

  checkCollision() {
    var canvas = document.getElementById("game");
    if(this.yPos+13>canvas.height) {
      this.grounded = true
      this.yPos=canvas.height-13
      this.yVel = -0.2*this.yVel
    }
    if(this.yPos<0) {
      this.yPos=0
      this.yVel = -0.2*this.yVel
    }
  }


}
