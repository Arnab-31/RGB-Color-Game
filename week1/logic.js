var d=1;
var i;
var colors=generateRandomColors(6);
var colorboxes=document.querySelectorAll(".color-box");
var message=document.querySelector("#message");
var winningColor=pickColor();
var rgb=document.querySelector("#rgb");
rgb.textContent=winningColor;
function generateRandomColors(n)
{
  var RandomColors=[n];
  for(var i=0;i<n;i++)
  {
    RandomColors[i]=newColor();
  }
  return RandomColors;
}
function newColor()
{
  c1=Math.floor(Math.random()*256);
  c2=Math.floor(Math.random()*256);
  c3=Math.floor(Math.random()*256);
  return "rgb("+c1+", "+c2+", "+c3+")";
}



function pickColor()
{
  random=Math.floor(Math.random()*colors.length)
  return colors[random];
}


for( i=0;i<colorboxes.length;i++)
{
  colorboxes[i].style.backgroundColor=colors[i];
  colorboxes[i].addEventListener("click",function(){
    var clickedColor=this.style.backgroundColor;
    if( clickedColor === winningColor)
    {
      for( var j=0;j<colors.length;j++)
        colorboxes[j].style.backgroundColor=winningColor;
      var titlebox=document.querySelector(".title");
      titlebox.style.backgroundColor=winningColor;
      message.textContent="Correct!";
    }
    else {
      this.style.backgroundColor="#232323";
      message.textContent="Incorrect!Try Again";
    }
  });

  var newColors=document.querySelector(".btn-left");
  newColors.addEventListener("click",function()
  {
    newGame(d);
  });
  function newGame(m)
  {
    var s;
    if(m==1){
      s=6;
    }
    else {
      s=3;
    }
    colors=generateRandomColors(s);
    winningColor=pickColor();
    rgb.textContent=winningColor;
    for( i=0;i<colorboxes.length;i++)
    {
      colorboxes[i].style.backgroundColor=colors[i];
    }
    if(m==0)
    {
      for( i=3;i<colorboxes.length;i++)
      {
        colorboxes[i].style.backgroundColor="rgb(35, 35, 35)";
      }
    }
    document.querySelector(".title").style.background="rgba(66, 135, 245)";
    message.textContent="";
  }

  var easy=document.querySelector(".easy");
  var hard=document.querySelector(".hard");
  easy.addEventListener("click",function()
  {
    if(d==1)
    {
      hard.classList.toggle("selected");
      easy.classList.toggle("selected");
      d=0;
      newGame(d);
    }
  })
  hard.addEventListener("click",function()
  {
    if(d==0)
    {
      hard.classList.toggle("selected");
      easy.classList.toggle("selected");
      d=1;
      newGame(d);
    }
  })
}
