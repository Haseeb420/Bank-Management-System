function slider() {
    // body...
    $current=$('.slider .active');
    if($current.length==0){
        $('.slider .slider-item:first-child').addClass('active');
    }
    else{
        $next=$current.removeClass('active').next();
        if($next.length==0){
            $('.slider .slider-item:first-child').addClass('active');
        }
        else{
            #next.addClass('active');
        }
    }

}
setInterval(slider,5000);