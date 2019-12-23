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
    this.grounded = false
  }

  canStartFlying() {
    if(this.stamina>0 && this.grounded == true) {return true}
    return false
  }

  fly() {
    if (this.canStartFlying()) {
      this.flying = true
      this.grounded = false
    }
  }

  stopFlying() {
    this.flying = false
  }

  regenStam() {
    if (this.stamina<=this.maxStam) {this.stamina+=2}
  }

  decayStam() {
    if (this.stamina>10) {this.stamina-=7}
  }

  velocity() {
    if (this.flying==true) {
      if(this.stamina<=10) {
        this.flying=false
      }
      this.yVel=-10
      this.decayStam() }
    else {
      this.yVel+=this.g*this.dt
      this.regenStam()}
  }

  position() {
    this.checkCollision()
    this.velocity()
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
