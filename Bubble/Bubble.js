class Bubble{
  constructor(x , y){
    this.x = x
    this.y = y
    // this.x = random(0, width)
    // this.y = random(0, height)
    this.diameter = random(0, 40)
    this.speed = 2
  }
  show(color1 = 50,color2 = 50, color3 = 50, alpha = 100){
    fill(color1, color2, color3, alpha)
    stroke(255)
    strokeWeight(2)
    ellipse(this.x, this.y, this.diameter, this.diameter)
  }

  collide(x, y){
    if (this.x >= width || this.x <= 0 || this.y >= height || this.y <= 0){
      this.x = x
      this.y = y
      // this.x = random(width)
      // this.y = random(height)
    }else {
      this.newX = random(-this.speed, this.speed)
      this.newY = random(-this.speed, this.speed)
      this.x += this.newX
     this.y += this.newY
    }
  }
  isMouseOnit(x, y){
    this.distance = dist(x, y, this.x, this.y)
    if (this.distance < this.diameter){
      return true;
    }else{
      return false;
    }
  }
  isInteracting(other){
    this.distance = dist(this.x, this.y, other.x, other.y)
    if (this.distance < this.diameter + other.diameter){
      return true
    }else{
      return false
    }

  }

}
