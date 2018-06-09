$(document).ready(function() {
  
  var counter = 0;
  var c = 0;
  var i = setInterval(function(){
      $(".loading-page  .counter h1").html(c + "%"); // Changing the text as the time increases 
      $(".loading-page  .counter hr").css("width", c + "%"); // Changing the <hr/> as the time increases 
      
    counter++;
    c++;
      
    
    if(counter == 101) {
        clearInterval(i);
    }
  }, 15); // Duration of the load
  
 setTimeout(function() { $('.loading-page').remove(); 
       },1700); // closes the loading page
  
});

var size = 1;
		var percent = 1;
		var key = true;
		var deg = 0;
		var img = document.getElementById("logo");
		setInterval(big,50);
		function big(){
			percent++;
			if ( key == true ){
				size+=0.01;
				deg +=50;
				if ( size > 1.25){
					key = false;
				}
			}
			else if ( key == false ){
				size -=0.01;
				deg-=50;
				if (size <= 1){
					key = true;
				}
			}
			if (percent>=100){
				percent = 0;
			}
			img.style.transform = "scale(" + size + "," + size +")";
		}