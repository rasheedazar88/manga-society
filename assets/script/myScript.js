console.log("WELCOME")

function dropDownOpen(){
    document.getElementById("mobileMenu").classList.toggle("show");
}

$(document).ready(function() {
    console.log($(window).width());
    $('.faq_questions').on('click', function() {
        if($(this).hasClass('active') == true){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
            $(this).nextAll('.faq_questions').removeClass("active");
            $(this).prevAll('.faq_questions').removeClass("active");
        }
        $(this).next().slideToggle(500).siblings('.faq_answers').slideUp();
    });
});