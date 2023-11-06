canvas = new fabric.Canvas('myCanvas');

 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function new_image(getImage)
{
fabric.Image.fromURL(getImage, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(blockImageWidth);
	block_image_object.scaleToWidth(blockImageHeight)
	block_image_object.set({
		top:blockY,
		left:blockX
	});
	canvas.add(block_image_object);
});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69')
	{
		
		new_image('rr1.png');
	}
	if(keyPressed == '86')
	{
		blockX = 400;
		new_image('gr.png');
	}
	
	if(keyPressed == '65')
	{
		blockX =750;
		new_image('yr.png');
	}
	if(keyPressed == '82')
	{
		blockX = 1100;
		new_image('pr.png');
	}
	if(keyPressed == '73')
	{
		blockX = 1400;
		new_image('br.png');
	}
	
}

