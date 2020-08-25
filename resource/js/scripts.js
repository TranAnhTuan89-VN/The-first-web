$(document).ready{
    function(){
        $('.about-section').waypoin(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');
                }else{
                    $('nav').removeClass('sticky');
                }
            }, {
                offset: '100px'
            }
        )
        //Mobile navigation
        $('.mobile-nav-icon').click(
            function(){
                $('.main-nav').slideToggle(200);
            }
        )
    }
}