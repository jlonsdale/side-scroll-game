class Player {

  constructor(xPos,yPos) {
    this.health = 3
    this.xPos = xPos-7
    this.yPos = yPos-7
    this.yVel = 0
  }

  giveVelocity() {
    this.yPos+=10
  }


}
