$( document ).ready(function() {


  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");

  const player_picture = document.getElementById("player");
  var player = new Player(canvas.width/2,150)

  setInterval(draw, 10);

  document.addEventListener('keydown', (event) => {
    if(event.keyCode==87) {player.fly()}
  });

  document.addEventListener('keyup', (event) => {
    if(event.keyCode==87) {player.stopFlying()}
  });

  function draw() {
    console.log(player)
    $(".stam").width((player.stamina/player.maxStam)*345);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.position()
    ctx.drawImage(player_picture,player.xPos,player.yPos)
  }

  function drawStamBar() {

  }


})
