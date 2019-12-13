$( document ).ready(function() {


  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");
  console.log(canvas.width)

  const player_picture = document.getElementById("player");
  var player = new Player(canvas.width/2,0)

  setInterval(draw, 10);

  document.addEventListener('keydown', function(event){
    if(event.keyCode==83)(
      player.giveVelocity()
    )
  });

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(player_picture,player.xPos,player.yPos)
  }


})
