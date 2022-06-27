jQuery(function ($) {
    new WOW().init();

    function reveal(className) {
        var reveals = document.querySelectorAll(className);
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;


            if (reveals[i]) {
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        }
    }
    window.addEventListener("scroll", scrolreval);
    function scrolreval() {
        reveal('.progress-bar');
        reveal('.suggestPar');
        reveal('.voteSec .lampIcon');
    }
        var flag=document.querySelector(".flag");
        TweenMax.set(flag, {x: 20})
        TweenMax.to(flag, 1, {x: 0, repeat:-3,ease:Linear.easeNone});
      
$(".headSec1").click(function(){
    $(".challengeTitle").addClass("active-Form-group")
});
$(".headSec2").click(function(){
    $(".descripChallengeForm-group").addClass("active-Form-group")
})
$(".headSec3").click(function(){
    $(".reasonhallengeForm-group").addClass("active-Form-group")
})
$(".headSec4").click(function(){
    $(".ProceduresChallenge-group").addClass("active-Form-group")
})
$(".headSec5").click(function(){
    $(".benfitChallenge-group").addClass("active-Form-group")
})
});

