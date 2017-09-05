var pause = 3000;  // interval, in milliseconds, between transitions
var pic = document.getElementById("pic");  // the <img> element in the HTML file

// define an array of images
var imgs = new Array("images/vansstar.jpg", "images/louise.jpg", "images/ottgat.jpg", "images/algonquin.jpg");

// preload the images
for (var i = 0; i < imgs.length; i++)
{
   var obj = new Image();
   obj.src = imgs[i];
}

// rotates between the images in the "imgs" array
function rotate()
{
   // get the value of the current image displayed
   var imageSrc = pic.getAttribute("src");
   // make sure that "src" is present
   if (imageSrc != null && imageSrc != "")
   {
      // get the index of the "imageSrc" in the imgs array
      var index = imgs.indexOf(imageSrc);
      // reset or increment the index so the next
      // image is displayed 
      if (index == imgs.length-1)
      {
         index = 0;
      }
      else
      {
         index++;
      }
      
      // set the "src" attribute to be the next image in the "imgs" array
      pic.setAttribute("src", imgs[index]); 
   
      setTimeout("rotate()", pause);
   }
}
 
window.onload = rotate;
