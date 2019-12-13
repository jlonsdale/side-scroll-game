$( document ).ready(function() {

  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");


  const player_picture = document.getElementById("player");
  var player = new Player(0,0)

  setInterval(draw, 10);

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(player_picture,player.xPos,player.yPos)
  }

})
