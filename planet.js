class Planet {
  constructor(name, radius, distance, speed, color){
    this.name = name;
    this.radius = radius; //size of planet
    //this.angle = random(TWO_PI);
    this.angle = 0;
    this.distance = distance; //x-coordinate
    this.speed = speed;
    this.color = color;
    let circle;
  }
  
  show(){
    //push,pop is creating a state and ending it without having to save it
    push();
    fill(this.color);
    rotate(this.angle);
    //translate(this.distance, 0); //The translate() function allows objects to be moved to any location within the window. 
                                   //The first parameter sets the x-axis offset and the second parameter sets the y-axis offset.*/
    //ellipse(this.distance, 650, this.radius, this.radius); //no need for x and y bcos of translate
    stroke(35, 200)
    //  background(0,0,35,25); 

    strokeWeight(10)
    ellipse(this.distance, 0, this.radius, this.radius);
    pop();
  }
  
  orbit(){
    this.angle += this.speed;
  }
  //can also just do rotate(this.speed) in show() if u don't need them to start  at random places
  
  
  //If there was a click
  clicked(){
    console.log("clicked");
    
    let d = dist(mouseX, mouseY, this.distance+650, 650);
    
    //If a planet was clicked
    if (d < this.radius/2){
      
      console.log(this.name,"was clicked!");
      planetClicked = true;
      redraw();
      
      //circle around clcicked planet
      push();
      noFill();
      stroke('rgb(0,200,0)');
      strokeWeight(4);
      this.circle = ellipse(this.distance, 5, this.radius + 50, this.radius + 50);
      
      //Name, Strength of Gravity, length of orbit (time & circumference), distance from earth
      let name;
      let gravity;
      let orbitalPeriod;
      let orbitalRadius;
      let distEarth;
      
     switch (this.name) {
          case 'mercury':
            name = 'Mercury';
            gravity = '3.7 m/s2';
            orbitalPeriod = '88 days';
            orbitalRadius = '0.39 AU';
            distEarth = '91,691,000 km';
            break;
          case 'venus':
            name = 'Venus';
            gravity = '8.9 m/s2';
            orbitalPeriod = '224.7 days';
            orbitalRadius = '0.72 AU';
            distEarth = '232,780,000 km';
            break;
          case 'earth':
            name = 'Earth';
            gravity = '9.8 m/s2';
            orbitalPeriod = '365.2 days';
            orbitalRadius = '1.0 AU';
            distEarth = '-';
            break;
          case 'mars':
            name = 'Mars';
            gravity = '3.7 m/s2';
            orbitalPeriod = '687.0 days';
            orbitalRadius = '1.5 AU';
            distEarth = '113,430,000 km';
            break;
          case 'jupiter':
            name = 'Jupiter';
            gravity = '23.1 m/s2';
            orbitalPeriod = '4331 days';
            orbitalRadius = '5.2 AU';
            distEarth = '786,550,000 km';
            break;
          case 'saturn':
            name = 'Saturn';
            gravity = '9.0 m/s2';
            orbitalPeriod = '10,747 days';
            orbitalRadius = '9.5 AU';
            distEarth = '1,597,800,000 km';
            break;
          case 'uranus':
            name = 'Uranus';
            gravity = '8.7 m/s2';
            orbitalPeriod = '30,589 days';
            orbitalRadius = '19.2 AU';
            distEarth = '2,891,800,000 km';
            break;
          case 'neptune':
            name = 'Neptune';
            gravity = '11.0 m/s2';
            orbitalPeriod = '59,800 days';
            orbitalRadius = '30.1 AU';
            distEarth = '4,553,200,000 km';
            break;
          default:
            //  */
        }
      
        noStroke();
        textSize(32);
        textStyle(BOLD);
        fill(this.color);
        text('NAME', -600, -210);
        text('GRAVITY', -600, -140);
        text('ORBITAL PERIOD', -600, -70);
        text('ORBITAL RADIUS', -600, 0);
        text('DISTANCE FROM EARTH', -600, 70);
      
      
        textStyle(NORMAL);
        fill(250);
        text(name, -600, -175);
        text(gravity, -600, -105);
        text(orbitalPeriod, -600, -35);
        text(orbitalRadius, -600, 35);
        text(distEarth, -600, 105);
      
      pop();
    }
    
  }
  
}