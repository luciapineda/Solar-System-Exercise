//Planet array
//Planet = radius, distance, speed, color
let planets = [];
let clicked = false;
let showText = false;
let center = 650;
var playBtn;
var planetClicked = false;


function setup(){
  createCanvas(1300, 1300);
  background(35,200);
   
  resetSketch();
  
  //play button creation
  playBtn = createButton("PLAY", "PLAY"); //button(label,value)
  playBtn.style('background-color', '#ffffff');
  playBtn.position(50, 1180);
  playBtn.style('font-size', '50px');
  playBtn.style('font-family', 'Verdana');
  playBtn.style('padding', '10px');
  playBtn.style('border-radius', '20px');
  playBtn.mousePressed(playPlanets);
  
}

function draw(){  
  var stars = { 
    locationX : random(width),
    locationY : random(height),
    size : random(1,6)
  }
  ellipse(stars.locationX, stars.locationY, stars.size, stars.size);
  
  
  //If the play button has not been pressed yet
  if(clicked == false){
    noLoop();
    background(35,255);
  }
    
  //Translating the sun to the center
  translate(width / 2, height / 2);
  fill(255, 204, 0);
  noStroke();
  ellipse(0, 0, 85); //x-coor,y-coor, width
  
  //Printing all planets
  for (let i in planets){
    planets[i].orbit();
    planets[i].show();
  }
  
  textSize(32);
  fill(255);
  text('Click a planet to find out more about it. Select the button below to see them in orbit.', -600, 500);
}


function resetSketch(){
  console.log('called resetSketch');
  background(35,255);

  let color_mercury = color(255, 237, 201);
  let color_venus = color(217, 107, 42);
  let color_earth = color(47, 82, 229);
  let color_mars = color(229, 53 ,32);
  let color_jupiter = color(229, 115, 33);
  let color_saturn = color(38, 194, 25);
  let color_uranus = color(136, 218, 229);
  let color_neptune = color(47, 204, 229);
  
  mercury = new Planet('mercury', 40, 80, 0.04, color_mercury);
  venus = new Planet('venus', 47, 130, 0.03, color_venus)
  earth = new Planet('earth', 48, 180, 0.03, color_earth);
  mars = new Planet('mars', 42, 240, 0.028, color_mars);
  jupiter = new Planet('jupiter', 69, 330, 0.02, color_jupiter);
  saturn = new Planet('saturn', 64, 390, 0.016, color_saturn);
  uranus = new Planet('uranus', 67, 470, 0.012, color_uranus);
  neptune = new Planet('neptune', 62, 580, 0.010, color_neptune);
  
  //nearest to furthest from the sun
  planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];  
  
  if(!planetClicked)
  redraw();
}


//play system when clicked
function playPlanets() {
   console.log("Button ", playBtn.html());
  
    if(playBtn.html() == 'PLAY'){
        background(35,255);
        console.log("play planets");
        clicked = true;
        loop();
        playBtn.html("RESTART");  
    }else{
      noLoop();
      resetSketch();
      playBtn.html("PLAY");  
    }
}


//for checking if a planet was clicked
function mousePressed(){
  planetClicked = false;
  resetSketch();
  for (let i in planets){
    planets[i].clicked();
  }
  console.log("Was a planet clicked? ", planetClicked);
}
