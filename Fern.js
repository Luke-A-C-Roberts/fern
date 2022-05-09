let slider1;
let slider2;
let slider3;
let slider4;

let sliderR;
let sliderG;
let sliderB;

function setup()
{
  createCanvas(800,800);
  background(30,30,30);
  
  slider1 = createSlider(0, 10, 1, 0);
  slider2 = createSlider(0, 10, 1, 0);
  slider3 = createSlider(1, 3, 1.5, 0);
  slider4 = createSlider(-4, 4, 0, 0);
  sliderR = createSlider(0, 255, 0, 0);
  sliderG = createSlider(0, 255, 0, 0);
  sliderB = createSlider(0, 255, 0, 0);
  
  slider1.position(10, 10);
  slider2.position(10, 30);
  slider3.position(10, 50);
  slider4.position(10, 70);
  
  sliderR.position(10, height - 90);
  sliderG.position(10, height - 70);
  sliderB.position(10, height - 50);
  
  
}

function tree(n, x, y, l, a, v1, v2, v3, v4)
{
  strokeWeight(n);
  if (n >= 0)
  {
    line(x, y, x + l * cos(a), y + l * sin(a));
    
    tree(n - 1, x + l * cos(a), y + l * sin(a),
         (l / v3) + v4, a + 0.1 * v1 + n * 0.05,
         v1, v2, v3, v4);
    
    tree(n - 1, x + l * cos(a), y + l * sin(a),
         (l / v3) + v4, a - 0.1 * v2 - n * 0.05,
         v1, v2, v3, v4);
  }
}

function draw()
{
  background(30,30,30);
  stroke(sliderR.value(),sliderG.value(),sliderB.value(),50);
  
  let val1 = slider1.value();
  let val2 = slider2.value();
  let val3 = slider3.value();
  let val4 = slider4.value();
  
  tree(8, 400, 600, -200, PI / 2, val1, val2, val3, val4)
}
