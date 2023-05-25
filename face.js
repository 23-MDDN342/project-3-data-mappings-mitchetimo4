/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = true;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 3;

// other variables can be in here too
// here's some examples for colors used
//my name is tim

const stroke_color = [95, 52, 8];


// example of a global function
// given a segment, this returns the average point [x, y]
function segment_average(segment) {
  let sum_x = 0;
  let sum_y = 0;
  let s_len = segment.length;
  for (let i=0; i<s_len; i++) {
    sum_x = sum_x + segment[i][0];
    sum_y = sum_y + segment[i][1];
  }
  return [sum_x / s_len , sum_y / s_len ];
}

// This where you define your own face object
function Face() {
  // these are state variables for a face
  // (your variables should be different!)
  this.detailColour = [204, 136, 17];
  this.mainColour = [51, 119, 153];
  this.num_eyes = 2;    // can be either 1 (cyclops) or 2 (two eyes)
  this.eye_shift = -1;   // range is -10 to 10
  this.mouth_size = 1;  // range is 0.5 to 8

  this.chinColour = [153, 153, 51]
  this.lipColour = [136, 68, 68]
  this.eyebrowColour = [119, 85, 17]

  this.neonBlue = ["#1F51FF"];
  this.neonYellow = ["#faed27"];
  this.neonPink = ["#FF10F0"];
  this.neonRed = ["#FF3131"];

  const neonBlue = ["#1F51FF"];
  const neonPurple = ["#9D00FF"];
  const neonPink = ["#FF10F0"];
  const neonYellow = ["#faed27"];
  
  /*
   * Draw the face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {
    console.log()
    // HEAD
    //ellipseMode(CENTER);
    //stroke(stroke_color);
    //fill(this.mainColour);
    //ellipse(segment_average(positions.chin)[0], 0, 3, 4);
    //noStroke();


    // MOUTH
    //fill(this.detailColour);
    //ellipse(segment_average(positions.bottom_lip)[0], segment_average(positions.bottom_lip)[1], 1.36, 0.25 * this.mouth_size);

    this.tipOfNose =positions.nose_tip[0];
    noFill();
    stroke(this.neonBlue);
    strokeWeight(0.15);
    //arc(segment_average(positions.bottom_lip)[0], segment_average(positions.bottom_lip)[1], 3, 2, 360, 180, CHORD);
    
    //arc(this.tipOfNose[0]+0.2, this.tipOfNose[1], 3, 2, 360, 180, CHORD); //MOUTH

      //line(positions.right_eye[4][0],positions.right_eye[4][1], positions.chin[16][0],positions.chin[16][1]);
    
    /*
   * Draw the face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  

      //this.midCheek = segment_average([positions.right_eye[4], positions.chin[11]]);
       
      // this.jokerSmileLeft = segment_average([positions.chin[4], positions.top_lip[0]]); //LEFT MOUTH EDGE
      // this.jokerSmileRight = segment_average([positions.chin[12], positions.top_lip[6]]); //RIGHT MOUTH EDGE
      
      this.jokerSmileLeft = segment_average([positions.chin[3], positions.top_lip[0]]); //LEFT MOUTH EDGE
      this.jokerSmileRight = segment_average([positions.chin[13], positions.top_lip[6]]); //RIGHT MOUTH EDGE
      
      this.jokerSmileLeftMid = segment_average([positions.chin[6], positions.bottom_lip[4]]); //LEFT MOUTH MIDDLE POINT
      this.jokerSmileLeftMidU = segment_average([positions.chin[5], positions.top_lip[0]]); //LEFT MOUTH UPPER MIDDLE POINT

      this.jokerSmileRightMid = segment_average([positions.chin[10], positions.bottom_lip[1]]); //RIGHT MOUTH MIDDLE POINT
      this.jokerSmileRightMidU = segment_average([positions.chin[11], positions.top_lip[6]]); //RIGHT MOUTH UPPER MIDDLE POINT

      this.jokerSmileBottom = segment_average([positions.chin[8], positions.bottom_lip[2]]); //MOUTH BOTTOM POINT

      //POINTS FOR TEETH PLACEMENT
      this.topLipMiddle = segment_average([this.jokerSmileLeft, this.jokerSmileRight]);
      this.topLipLeftMid = segment_average([this.jokerSmileLeft, this.topLipMiddle]);
      this.topLipRightMid = segment_average([this.jokerSmileRight, this.topLipMiddle]);



      // moouthShape 
      beginShape()
      //vertex(this.jokerSmileLeft[0],this.jokerSmileLeft[1] )
      //curveVertex( this.jokerSmileLeft[0],this.jokerSmileLeft[1])
      //curveVertex( this.jokerSmileRight[0], this.jokerSmileRight[1])
      //curveVertex( this.jokerSmileLeft[0],this.jokerSmileLeft[1])
      //curveVertex( this.jokerSmileLeftMid[0], this.jokerSmileLeftMid[1])


      //curveVertex( this.jokerSmileLeftMid[0],this.jokerSmileLeftMid[1])
      //curveVertex( this.jokerSmileBottom[0], this.jokerSmileBottom[1])

      //curveVertex(this.jokerSmileBottom[0],this.jokerSmileBottom[1])
      //curveVertex(this.jokerSmileRightMid[0], this.jokerSmileRightMid[1])

      //curveVertex(this.jokerSmileRight[0],this.jokerSmileRight[1])
      //curveVertex(this.jokerSmileRightMid[0], this.jokerSmileRightMid[1])

      //DRAW MOUTH SHAPE
     line(this.jokerSmileLeft[0],this.jokerSmileLeft[1],this.jokerSmileRight[0], this.jokerSmileRight[1]); //STRAIGHT LINE FOR TOP LIP

     line(this.jokerSmileLeft[0],this.jokerSmileLeft[1],this.jokerSmileLeftMidU[0], this.jokerSmileLeftMidU[1]);
     line(this.jokerSmileLeftMidU[0],this.jokerSmileLeftMidU[1],this.jokerSmileLeftMid[0], this.jokerSmileLeftMid[1]);
     line(this.jokerSmileLeftMid[0],this.jokerSmileLeftMid[1],this.jokerSmileBottom[0], this.jokerSmileBottom[1]);
     line(this.jokerSmileBottom[0],this.jokerSmileBottom[1],this.jokerSmileRightMid[0], this.jokerSmileRightMid[1]);
     line(this.jokerSmileRightMid[0],this.jokerSmileRightMid[1],this.jokerSmileRightMidU[0], this.jokerSmileRightMidU[1]);
     line(this.jokerSmileRight[0],this.jokerSmileRight[1],this.jokerSmileRightMidU[0], this.jokerSmileRightMidU[1]);

      //DRAW TEETH (left to right)
      line(this.jokerSmileLeftMidU[0], this.jokerSmileLeftMidU[1], this.topLipLeftMid[0], this.topLipLeftMid[1]);
      line(this.topLipLeftMid[0], this.topLipLeftMid[1], this.jokerSmileBottom[0], this.jokerSmileBottom[1]);
      line(this.jokerSmileBottom[0], this.jokerSmileBottom[1], this.topLipRightMid[0], this.topLipRightMid[1]);
      line(this.topLipRightMid[0], this.topLipRightMid[1], this.jokerSmileRightMidU[0], this.jokerSmileRightMidU[1]);
      endShape()      
      //console.log(this.midCheek)
     // this.midCheekY = segment_average([positions.right_eye[4][1], positions.chin[11][1]]);

      //line(positions.chin[16][0],positions.chin[16][1], this.midCheek[0], this.midCheek[1]);

    // eyebrows
    //fill( this.eyebrowColour);
    //stroke( this.eyebrowColour);
    //strokeWeight(0.08);
    //this.draw_segment(positions.top_lip);
    //this.draw_segment(positions.right_eyebrow);

    this.avLeftEyebrow = positions.left_eyebrow[0];
    this.avRightEyebrow = positions.right_eyebrow[0];

    //line(this.avLeftEyebrow[0], this.avLeftEyebrow[1], this.avRightEyebrow[0], this.avRightEyebrow[1]);

    stroke(this.neonYellow);
    //stroke(this.neonPink);

    ellipse(this.avRightEyebrow[0]-0.5,this.avRightEyebrow[1]-1, 3, 1); //HALO

    stroke(this.neonRed);
    triangle(positions.chin[16][0], positions.chin[16][1], positions.chin[16][0], positions.chin[16][1]-0.8, positions.chin[16][0]+0.8, positions.chin[16][1]-1.2);
    triangle(positions.chin[0][0], positions.chin[0][1], positions.chin[0][0], positions.chin[0][1]-0.8, positions.chin[0][0]-0.8, positions.chin[0][1]-1.2);

    // draw the chin segment using points
    //fill(this.chinColour);
    //stroke(this.chinColour);
    //this.draw_segment(positions.chin);

    //fill(100, 0, 100);
    //stroke(100, 0, 100);
    //this.draw_segment(positions.nose_bridge);
    //this.draw_segment(positions.nose_tip);

    

    //strokeWeight(0.03);

    //fill(this.lipColour);
    //stroke(this.lipColour);
    //this.draw_segment(positions.top_lip);
    //this.draw_segment(positions.bottom_lip);

    let left_eye_pos = segment_average(positions.left_eye);
    let right_eye_pos = segment_average(positions.right_eye);

    //AVERAGES FOR LEFT EYE
    this.leftEyeCornerL = segment_average([positions.chin[4], positions.left_eyebrow[0]]);
    this.leftEyeCornerR = segment_average([positions.left_eye[3], positions.nose_tip[0]]);
    //AVERAGES FOR lEFT EYE PUPIL
    this.leftEyePupilR = segment_average([positions.left_eye[3], this.leftEyeCornerR]);
    this.leftEyePupilL = segment_average([positions.left_eye[3], positions.left_eyebrow[0]]);


    //AVERAGES FOR RIGHT EYE
    this.rightEyeCornerL = segment_average([positions.right_eye[0], positions.nose_tip[4]]);
    this.rightEyeCornerR = segment_average([positions.chin[12], positions.right_eyebrow[4]]);
    //AVERAGES FOR RIGHT EYE PUPIL
    this.rightEyePupilR = segment_average([positions.right_eyebrow[4], this.rightEyeCornerR]);
    this.rightEyePupilL = segment_average([positions.right_eyebrow[4], positions.right_eye[0]]);

    //DRAW EYE SHAPES
    stroke(this.neonBlue);
    quad(positions.left_eyebrow[0][0], positions.left_eyebrow[0][1], positions.left_eye[3][0], positions.left_eye[3][1], this.leftEyeCornerR[0], this.leftEyeCornerR[1], this.leftEyeCornerL[0], this.leftEyeCornerL[1]); //DRAW LEFT EYE
    quad(positions.right_eye[0][0], positions.right_eye[0][1], positions.right_eyebrow[4][0], positions.right_eyebrow[4][1], this.rightEyeCornerR[0], this.rightEyeCornerR[1], this.rightEyeCornerL[0], this.rightEyeCornerL[1]); //DRAW RIGHT EYE

    //DRAW PUPILS
    fill(this.neonBlue);
    strokeWeight(0.01);
    triangle(this.leftEyePupilL[0], this.leftEyePupilL[1], positions.left_eye[3][0], positions.left_eye[3][1], this.leftEyeCornerR[0], this.leftEyeCornerR[1]); //LEFT PUPIL
    triangle(this.rightEyePupilL[0], this.rightEyePupilL[1], positions.right_eyebrow[4][0], positions.right_eyebrow[4][1], this.rightEyeCornerR[0], this.rightEyeCornerR[1]); //RIGHT PUPIL
    noFill();

    //DRAW CROSS EYES
    stroke(this.neonPink);
    strokeWeight(0.15);
    line(positions.right_eye[0][0], positions.right_eye[0][1], this.rightEyeCornerR[0], this.rightEyeCornerR[1]);
    line(positions.right_eyebrow[4][0], positions.right_eyebrow[4][1], this.rightEyeCornerL[0], this.rightEyeCornerL[1]);

    line(positions.left_eyebrow[0][0], positions.left_eyebrow[0][1], this.leftEyeCornerR[0], this.leftEyeCornerR[1]);
    line(positions.left_eye[3][0], positions.left_eye[3][1], this.leftEyeCornerL[0], this.leftEyeCornerL[1]);



    // eyes
    noStroke();
    let curEyeShift = 0.04 * this.eye_shift;
    if(this.num_eyes == 2) {
      fill(this.detailColour);
      //ellipse(left_eye_pos[0], left_eye_pos[1], 0.5, 0.33);
      //ellipse(right_eye_pos[0], right_eye_pos[1], 0.5, 0.33);

      
      noFill();
      stroke(this.neonBlue);
      strokeWeight(0.15);
      //ellipse(left_eye_pos[0], left_eye_pos[1], 1, 1);
      //arc(left_eye_pos[0], left_eye_pos[1], 1.5, 1, 0, 200, CHORD);  //LEFT EYE
      //arc(right_eye_pos[0], right_eye_pos[1], 1.5, 1, 340, 180, CHORD);  //RIGHT EYE
      

      // fill(this.mainColour);
      // ellipse(left_eye_pos[0] + curEyeShift, left_eye_pos[1], 0.18);
      // ellipse(right_eye_pos[0] + curEyeShift, right_eye_pos[1], 0.18);
    }
    else {
      let eyePosX = (left_eye_pos[0] + right_eye_pos[0]) / 2;
      let eyePosY = (left_eye_pos[1] + right_eye_pos[1]) / 2;

      fill(this.detailColour);
      ellipse(eyePosX, eyePosY, 0.45, 0.27);

      fill(this.mainColour);
      ellipse(eyePosX - 0.1 + curEyeShift, eyePosY, 0.18);
    }
   // fill(0)
   //ellipse(0,0, 0.5,0.5) center point
   //rect(-2,-2,4.5,4) sizing debug 
  }

  // example of a function *inside* the face object.
  // this draws a segment, and do_loop will connect the ends if true
  this.draw_segment = function(segment, do_loop) {
    for(let i=0; i<segment.length; i++) {
        let px = segment[i][0];
        let py = segment[i][1];
        ellipse(px, py, 0.1);
        if(i < segment.length - 1) {
          let nx = segment[i+1][0];
          let ny = segment[i+1][1];
          line(px, py, nx, ny);
        }
        else if(do_loop) {
          let nx = segment[0][0];
          let ny = segment[0][1];
          line(px, py, nx, ny);
        }
    }
  };

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.num_eyes = int(map(settings[0], 0, 100, 1, 2));
    this.eye_shift = map(settings[1], 0, 100, -2, 2);
    this.mouth_size = map(settings[2], 0, 100, 0.5, 8);
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    settings[0] = map(this.num_eyes, 1, 2, 0, 100);
    settings[1] = map(this.eye_shift, -2, 2, 0, 100);
    settings[2] = map(this.mouth_size, 0.5, 8, 0, 100);
    return settings;
  }
}
