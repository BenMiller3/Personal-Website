 function init() {
   var stage = new createjs.Stage("demoCanvas");
   var circle = new createjs.Shape();
circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
circle.x = 100;
circle.y = 100;
stage.addChild(circle);
var background = new createjs.Bitmap("img/splashes.png");
stage.addChild(background);

background.addEventListener("click", function(event) { alert("clicked"); })
stage.update();
  }
