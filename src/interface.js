$( document ).ready(function() {

  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");

  var player = document.getElementById("player");

  ctx.drawImage(player, 10, 50)

})
