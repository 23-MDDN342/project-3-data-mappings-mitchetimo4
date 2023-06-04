var x=300;
var y=300;
var a=100;
var b=100;


let FirstRun = true
let img;
function draw_one_frame(cur_frac) {
if(FirstRun){
	img = loadImage('cloudsPyra.png');
	
	FirstRun = false
} 

	let sun_size = height/2; //Set Sun width and height variable
  
	noStroke();
	// CREATE SKY
	fill(0, 204, 255);
	rect(0, 0, width, height);
  
	
	stroke(0);
	fill(100, 100, 100);
  
	let b1_y = 0.55 * height;
	let b2_y = 0.85 * height;
  
	let b1_size = height/12;
	let b2_size = height/6;

	push()
	if (width == 960){
		scale(0.5);
	image(img, 0, 0);
	}else if (width == 1920){
		scale(1);
		image(img, 0, 0);
	}else if (width == 2250){
		scale(1.17187);
		image(img, 0, 0);
	}
	pop()


	// CREATE SUN	
	noStroke();
	fill('#ff5492');
	ellipse(0.5 * width, 0.02 * height, sun_size);
	fill('#ff2977');
	ellipse(0.5 * width, 0.02 * height, sun_size*0.5);
	noFill();
	stroke("#ffa9c9");
	strokeWeight(height/40);
	ellipse(0.5 * width, 0.02 * height, sun_size);


	if (debugView) {
	  stroke(255, 0, 0);
	  strokeWeight(height/100);
	  noFill();
	  for(let i=0; i<grid_points1.length; i++) {
		rect(grid_points1[i], b1_y, b1_size, 2*b1_size);
	  }    
	}
  
	/*fill(100, 100, 100);
	noStroke();
	for(let i=0; i<grid_points1.length-1; i++) {
	  let cur_x_pos = map(cur_frac, 0, 1, grid_points1[i], grid_points1[i+1])
	  rect(cur_x_pos, b1_y, b1_size, 2*b1_size);
	}*/
  
	//Grid points / keyframes
	let grid_points2 = [
	 -0.425 * width,
	  0.125 * width,
	  0.625 * width,
	  1.125 * width
	]

	let grid_points3 = [
		1.125 * width,
		 0.625 * width,
		 0.125 * width,
		 -0.425 * width
	   ]
  
	if(debugView) {
	  stroke(255, 0, 0);
	  strokeWeight(height/100);
	  noFill();
	  for(let i=0; i<grid_points2.length; i++) {
		rect(grid_points2[i], b2_y, 2*b2_size, b2_size);
	  }    
	}

	/*Pyramid build guides*/
	/*fill("ffffff");
	triangle(0, height, width/2, height, width/4, height/5);
	triangle(width/2, height, width, height, (width/4)*3, height/5);*/

	let slabOuts = height/70; 

	/*Draw Slabs*/
	fill('#ec7100'); //BOTTOM LAYER
	noStroke();
	for(let i=0; i<grid_points2.length-1; i++) {
	  let cur_x_pos = map(cur_frac, 0, 1, grid_points2[i], grid_points2[i+1])
	  let base_coord = cur_x_pos-(width/15.5);
	  let width_rect = (4*b2_size);
	  

	  rect(base_coord, (height/5)*4, 4*b2_size, height/5);
	  triangle(base_coord,(height/5)*4,base_coord,(height/5)*5,cur_x_pos-(height/5)-10,(height/5)*5);
	  triangle(base_coord+width_rect,(height/5)*4,base_coord+width_rect+(height/9)+10,height,base_coord+width_rect,height);

	  /*noFill();
	  stroke("#ffffff");
	  quad(base_coord,(height/5)*4,cur_x_pos-(height/5)-10,(height/5)*5,base_coord+width_rect,(height/5)*4,base_coord+width_rect+(height/9)+10,height);*/

		
	}
	noFill(); //outlines for BOTTOM LAYER
	stroke('#ffffff');
	strokeWeight(slabOuts);
	for(let i=0; i<grid_points2.length-1; i++) {
		let cur_x_pos = map(cur_frac, 0, 1, grid_points2[i], grid_points2[i+1])
		let base_coord = cur_x_pos-(width/16.5);
		let width_rect = (4*b2_size);

		
	  quad(base_coord,(height/5)*4,base_coord+width_rect,(height/5)*4,base_coord+width_rect+(height/9)+10,(height/5)*5,cur_x_pos-(height/5)-10,height);
	  //line(cur_x_pos+(height/9)*2,(height/5)*4,cur_x_pos+(height/9)*2,(height/5)*5);
	  //line(cur_x_pos+(height/9)*.0005,(height/5)*4,cur_x_pos+(height/9)*0.0005,(height/5)*5);
	  //line(cur_x_pos+(height/9)*4,(height/5)*4,cur_x_pos+(height/9)*4,(height/5)*5);


	}

	fill('#ec7100'); //second from bottom layer
	noStroke();
	for(let i=0; i<grid_points3.length-1; i++) {
	  let cur_x_pos = map(cur_frac, 0, 1, grid_points3[i], grid_points3[i+1])
	  base_coord2= cur_x_pos;
	  let width_rect2 = (2.65*b2_size);


	  rect(cur_x_pos, (height/5)*3, 2.655*b2_size, height/5);
	  triangle(base_coord2,(height/5)*3,base_coord2,(height/5)*4,base_coord2-width_rect2/4,(height/5)*4);
	  triangle(base_coord2+width_rect2,(height/5)*3,base_coord2+width_rect2+(height/9),(height/5)*4,base_coord2+width_rect2,(height/5)*4);
	}
	noFill(); //outlines for SECOND FROM BOTTOM LAYER
	stroke('#ffffff');
	strokeWeight(slabOuts);
	for(let i=0; i<grid_points2.length-1; i++) {
	  let cur_x_pos = map(cur_frac, 0, 1, grid_points3[i], grid_points3[i+1])
	  base_coord2= cur_x_pos;
	  let width_rect2 = (2.65*b2_size);

	  quad(base_coord2,(height/5)*3,base_coord2+width_rect2,(height/5)*3,base_coord2+width_rect2+(height/9),(height/5)*4,base_coord2-width_rect2/4,(height/5)*4);
	  //line(cur_x_pos+(height/9),(height/5)*3,cur_x_pos+(height/9),(height/5)*4);
	  //line(cur_x_pos+(height/9)*3,(height/5)*3,cur_x_pos+(height/9)*3,(height/5)*4);


	}

	fill('#ec7100'); //second to top layer
	noStroke();
	for(let i=0; i<grid_points2.length-1; i++) {

	  let cur_x_pos = map(cur_frac, 0, 1, grid_points2[i], grid_points2[i+1])
	  
	  /*rect(cur_x_pos, (height/5)*2, 1.5*b2_size, height/5);*/
	  quad(cur_x_pos+(height/3),(height/5)*2,cur_x_pos+(height/9),(height/5)*2,cur_x_pos,(height/5)*3,cur_x_pos+(height/5)*2.21,(height/5)*3);
	}
	noFill(); //outlines for SECOND TO TOP LAYER
	stroke('#ffffff');
	strokeWeight(slabOuts);
	for(let i=0; i<grid_points2.length-1; i++) {
		let cur_x_pos = map(cur_frac, 0, 1, grid_points2[i], grid_points2[i+1])

		quad(cur_x_pos+(height/3),(height/5)*2,cur_x_pos+(height/9),(height/5)*2,cur_x_pos,(height/5)*3,cur_x_pos+(height/5)*2.21,(height/5)*3);
		//line(cur_x_pos+(height/9)*2,(height/5)*2,cur_x_pos+(height/9)*2,(height/5)*3);
	}

	fill('#ec7100'); //top layer
	noStroke();
	for(let i=0; i<grid_points3.length-1; i++) {
	  let cur_x_pos = map(cur_frac, 0, 1, grid_points3[i], grid_points3[i+1])

	  /*rect(cur_x_pos, (height/5), 2.6*b2_size, height/5);*/
	  triangle(cur_x_pos+height/4.5,height/5,cur_x_pos+height/9,(height/5)*2,cur_x_pos+height/3,(height/5)*2);
	}
	noFill(); //outlines for TOP LAYER
	stroke('#ffffff');
	strokeWeight(slabOuts);
	for(let i=0; i<grid_points2.length-1; i++) {
		let cur_x_pos = map(cur_frac, 0, 1, grid_points3[i], grid_points3[i+1])

		triangle(cur_x_pos+height/4.5,height/5,cur_x_pos+height/9,(height/5)*2,cur_x_pos+height/3,(height/5)*2);

	}
  }
  
  
