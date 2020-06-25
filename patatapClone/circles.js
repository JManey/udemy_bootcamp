var circles = [];

function onKeyDown(event) {
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  // When a key is pressed, set the content of the text item:
  var newCircle = new Path.Circle(point, 20);
  newCircle.fillColor = "blue";

  circles.push(newCircle);
}

var animatedCircle = new Path.Circle(new Point(300, 300), 100);
animatedCircle.fillColor = "red";

function onFrame(event) {
  for (var i = 0; i < circles.length; i++) {
    // console.log(circles[i]);
    circles[i].fillColor.hue += 1;
  }
  animatedCircle.fillColor.hue += 1;
  //   animatedCircle.scale(0.95);
}
