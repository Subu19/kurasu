swipe = {
    init: (swipe_args) => {
        document.addEventListener('touchstart', handleTouchStart, false);
        document.addEventListener('touchmove', handleTouchMove, false);
        let xDown = null;
        let yDown = null;
        const getTouches = (evt) => {return evt.touches || evt.originalEvent.touches;} // jQuery
        function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];
            xDown = firstTouch.clientX;
            yDown = firstTouch.clientY;
        }
        ;
        function handleTouchMove(evt) {
            if (!xDown || !yDown) return;
            const xUp = evt.touches[0].clientX;
            const yUp = evt.touches[0].clientY;
            const xDiff = xDown - xUp;
            const yDiff = yDown - yUp;

            (Math.abs(xDiff) > Math.abs(yDiff)) ? (xDiff > 0) ? document.getElementsByClassName(`${swipe_args.open}`)[0].style.width = `${swipe_args.openWidth}px` : document.getElementById(`${swipe_args.open}`).style.width = "0" :null /*(yDiff > 0)? swipeup- down*/;
        }
            /**
             * leave null this part like this hae
             * vertical + horizental scroll lai left or right hunna dinna
             * 
             */
            xDown = null;
            yDown = null;
        }
    }
// }

//initialize 
swipe.init({ open: 'mySidenav', openWidth: 250 })