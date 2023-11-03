canvas = new fabric.canvas('myCanvas');

 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
fabric.image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(blockImageWidth);
	block_image_object.scaleToWidth(blockImageHeight)
	block_image_object.set({
		top:blockY,
		left:blockX
	});
	canvas.add(blockImageObject);
});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '75')
	{
		new_image('rr1.png');
		console.log("r");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image('rr.jpg');
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image('rr1.png');
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_image('yr.png');
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image('pr.png');
	}
	
}

