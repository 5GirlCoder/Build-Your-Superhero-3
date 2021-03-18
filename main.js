
var canvas = new fabric.Canvas("myCanvas");
var Player_x = 50;
var Player_y = 50;
var blockWidth = 80;
var blockHeight = 80;
var playerObject = "";
var blockObject = "";
function playerUpdate()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top : Player_y,
            left : Player_x
        });
        canvas.add(playerObject);
    });
}
function new_image(get_image)
{
    console.log("Comming inside new_image()")
    fabric.Image.fromURL(get_image, function(Img)
    {
        blockObject = Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({
            top : Player_y,
            left : Player_x
        });
        canvas.add(blockObject);
    });
}

window.addEventListener("keydown", my_Keydown);
function my_Keydown(e)
{
    keypressed = e.keyCode;

    if (keypressed == '38')
    {
        console.log("Up pressed");
        up();
    }
    if (keypressed == '40')
    {
        console.log("Down pressed");
        down();
    }
    if (keypressed == '39')
    {
        console.log("Right pressed");
        right();
    }
    if (keypressed == '37')
    {
        console.log("Left pressed");
        left();
    }
    
    if (keypressed == '65')
    {
        //a
        console.log("Hulk Body");
        new_image('hulkd_body.png');
    }
    if (keypressed == '66')
    {
        //b
        console.log("Spiderman Legs");
        new_image('spiderman_legs.png');
    }
    if (keypressed == '67')
    {
        //c
        console.log("Hulk Face");
        new_image('hulk_face.png');
    }
    if (keypressed == '68')
    {
        //d
        console.log("Thor Right Hand");
        new_image('thor_right_hand.png');
    }
    if (keypressed == '69')
    {
        //e
        console.log("Hulk Left Hand");
        new_image('hulk_left_hand.png');
    }
    if (keypressed == '70')
    {
        //f
        console.log("Hulk Legs");
        new_image('hulk_legs.png');
    }
    if (keypressed == '71')
    {
        //g
        console.log("Ironman Legs");
        new_image('ironman_legs.png');
    }
    if (keypressed == '72')
    {
        //h
        console.log("Ironman Face");
        new_image('ironman_face.png');
    }
    if (keypressed == '73')
    {
        //i
        console.log("Ironman Left Hand");
        new_image('ironman_left_hand.png');
    }
    if (keypressed == '74')
    {
        //j
        console.log("Ironman Body");
        new_image('ironman_body.png');
    }
    if (keypressed == '75')
    {
        //k
        console.log("Thor Left Hand");
        new_image('thor_left_hand.png');
 
   }
   if (keypressed == '76')
   {
       //l
       console.log("CaptianAmerica Left Hand");
       new_image('captain_america_left_hand.png');
   }
   if (keypressed == '77')
   {
       //m
       console.log("Thor Face");
       new_image('thor_face.png');
   }
   if (keypressed == '78')
   {
       //n
       console.log("Hulk Right Hand");
       new_image('hulk_right_hand.png');
   }
   if (keypressed == '79')
   {
       //o
       console.log("Spiderman Body");
       new_image('spiderman_body.png');
   }
   if (keypressed == '80')
   {
       //p
       console.log("Spiderman Left Hand");
       new_image('spiderman_left_hand.png');
   }
   if (keypressed == '81')
   {
       //q
       console.log("Spiderman Face");
       new_image('spiderman_face.png');
   }
   if (keypressed == '82')
   {
       //r
       console.log("Ironman Right Hand");
       new_image('ironman_right_hand.png');
   }
   if (keypressed == '83')
   {
       //s
       console.log("Spiderman Right Hand");
       new_image('spiderman_right_hand.png');
   }

}
//Functions
function up()
{
    if(Player_y >= 0)
    {
        Player_y = Player_y - blockHeight;
        console.log("Y location =" + Player_y);
        console.log("X location =" + Player_x);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function down()
{
    if(Player_y <= 500)
    {
        Player_y = Player_y + blockHeight;
        console.log("Y location =" + Player_y);
        console.log("X location =" + Player_x);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right()
{
    if(Player_x <= 850)
    {
        Player_x = Player_x + blockHeight;
        console.log("Y location =" + Player_y);
        console.log("X location =" + Player_x);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function left()
{
    if(Player_x >= 0)
    {
        Player_x = Player_x - blockHeight;
        console.log("Y location =" + Player_y);
        console.log("X location =" + Player_x);
        canvas.remove(playerObject);
        playerUpdate();
    }
}