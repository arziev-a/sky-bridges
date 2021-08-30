// menu scroll

var onScrollFunction = function(){
    window.onscroll = function() {
        if ((window.pageYOffset) >= 240) {
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            var nav = document.getElementById("nav");
            var logo = document.getElementById("logo");
            function normal(){
                nav.style.height = "130px";
                logo.style.width = "200px";
                nav.style.backgroundColor = "transparent";
            }
            if (prevScrollpos > currentScrollPos)  {
                normal();
            } else if(currentScrollPos < 240) {
                normal();
            }
            else {
                nav.style.height = "80px";
                nav.style.backgroundColor = "rgba(0,0,0, .8)";
                logo.style.width = "120px";

            }
            prevScrollpos = currentScrollPos;
            }
        };
    }
};
onScrollFunction();
console.log(window.pageYOffset);

//slider
$('.home').slick({ dots: false,
    slidesToShow: 1,
    autoplay: true,
    infinite: true,
    arrows:false,
    fade:true,
    autoplaySpeed: 6000,
    
});
