
let bubbles = [];
bubbleNumber = 200
function setup() {
  createCanvas(1440, 900)
  for(i = 0; i < bubbleNumber; i ++){
    let bubble = new Bubble()
    bubbles.push(bubble)
  }
}

function draw() {
  background(50)
  for (let bubble of bubbles){
   bubble.show()
   bubble.collide()
   if (bubble.isMouseOnit(mouseX, mouseY)){
     bubble.show(200, 200, 200)
   }
   for (let other of bubbles){
     if (bubble != other && bubble.isInteracting(other)){
      bubble.show(30, 60, 120)
    }
   }
 }
  if (bubbles.length > 5){
    bubbles.splice(0, 1)
  }
}
function mouseDragged(){
    let bubble = new Bubble(mouseX, mouseY)
    bubbles.push(bubble)
}

function mousePressed(){
  for (i = 0; i < bubbles.length; i ++){
    if (bubbles[i].isMouseOnit(mouseX, mouseY)){
      bubbles.splice(i, 1)
    }
  }


}
