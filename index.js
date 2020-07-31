$(window).scroll(function(){
    if($(window).scrollTop()){   
/*        $(".navbar").removeClass("navbar-dark");             *//*removing this causes responsive toggle link to become transparent*/
        $("navbar").addClass("transparentLook");
    }
    else{
        $("navbar").removeClass("transparentLook");
    }
});



ityped.init(document.querySelector(".ityped"), {
    showCursor: true,
    strings: ['Web', 'Front End', 'Full Stack']
});