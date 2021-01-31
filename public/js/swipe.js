if(screen && screen.width < 800){
    let mainBox =document.getElementById('mainBox');
    let onlineList = document.getElementsByClassName('onlineList');
    let roomList = document.getElementById('roomList');
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);
    
    var xDown = null;                                                        
    var yDown = null;
    
    function getTouches(evt) {
      return evt.touches ||             // browser API
             evt.originalEvent.touches; // jQuery
    }                                                     
    
    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                
    
    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }
    
        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;
    
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
    
        (Math.abs(xDiff) > Math.abs(yDiff)) ? (xDiff > 0) ? document.getElementsByClassName('roomList')[0].style.width === '0px'? document.getElementsByClassName(`onlineList`)[0].style.width = `240px` : document.getElementsByClassName(`roomList`)[0].style.width = "0px" : document.getElementsByClassName('onlineList')[0].style.width === '0px'? document.getElementsByClassName('roomList')[0].style.width = '240px' : document.getElementsByClassName('onlineList')[0].style.width = '0px' : null ;
       

        // if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        //     if ( xDiff > 0 ) {
        //         /* left swipe */

                
        //     } else {
        //         /* right swipe */
            
        //     }                       
        // } else {
        //     if ( yDiff > 0 ) {
        //         /* up swipe */ 
        //     } else { 
        //         /* down swipe */
        //     }                                                                 
     }
        /* reset values */
        xDown = null;
        yDown = null;  
    
    function hideSideBars(){
        document.getElementsByClassName('onlineList')[0].style.width = '0px';
        document.getElementsByClassName('roomList')[0].style.width = '0px';
    }
    };
    
    
  
      
    
    
   
    