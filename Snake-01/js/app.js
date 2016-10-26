(function (window, document, drawModule, mouseEvent, undefined) {

var btn = document.getElementById('btn');
btn.addEventListener("click", function(){ drawModule.init();});
    
var btnReload = document.getElementById('btnReload');
btnReload.addEventListener("click", function(){ window.location.reload();});
   
	document.onkeydown = function(event) {

        keyCode = window.event.keyCode; 
        keyCode = event.keyCode;

        switch(keyCode) {
        
        case 37: 
          if (direction != 'right') {
            direction = 'left';
          }
          console.log('left'); 
          break;

        case 39:
          if (direction != 'left') {
          direction = 'right';
          console.log('right');
          }
          break;

        case 38:
          if (direction != 'down') {
          direction = 'up';
          console.log('up');
          }
          break;

        case 40:
          if (direction != 'up') {
          direction = 'down';
          console.log('down');
          }
          break;
          }
      }

  addEventListener("mousemove", function() {
      if (event.clientX < w || event.clientY < h){
          var mX = Math.round(event.clientX / (w/30));
          var mY = Math.round(event.clientY / (h/30));
          var k = Math.abs ((mY - snY)/(mX - snX));
          
        if (event.clientX > 0 || event.clientX < w || event.clientY > 0 || event.clientY < h){  
          if (mX > snX & k < 1){
            direction = 'right';
            console.log('right');
          } if (mX < snX & k < 1){
            direction = 'left';  
            console.log('left');
          } if (mY > snY & k > 1){
            direction = 'down';
            console.log('down');
          } if (mY < snY & k > 1){
            direction = 'up';
            console.log('up');
          }
        } 
      }
  });
})(window, document, drawModule);
