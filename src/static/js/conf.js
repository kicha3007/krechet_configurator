/* ------------------- calculation ----------------------- */

$(function () {

    // Слайдер синхронизированный

    $('.slider-for').slick({
        // slidesToShow: 1,
        // slidesToScroll: 1,
        arrows: false,
        fade: true,
        // // asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        // centerMode: true,
        focusOnSelect: true
    });

})



// const conf = {
//     character:  $("[data-it-character]"),
//     facts:  $("[data-it-facts]"),
//     model:  $("[data-it-model]"),
//     prepayment:  $("[data-it-prepayment]"),
//     print:  $("[data-it-print]"),
//     options:  $("[data-it-options]"),
//     mainContent:  $("[data-it-main-content]"),
//     form:  $("[data-it-form]"),
//     allSum:  $("[data-it-all-sum]"),
// }


// var btnSend = $("[data-it-btn='send']");
// var calcTitle = $("[data-calculation-title]");

var stepCounter = 1;

var btnNext = $("[data-it-btn='next']"),
    btnPrev = $("[data-it-btn='prev']"),
    moveArrowNext = $("[data-it-move-arrow='next']"),
    moveArrowPrev = $("[data-it-move-arrow='prev']");

var mainContPart = $("[data-it-main-content]");
var confDot = $("[data-it-dot]");

function calculation() {
    var confActiveDot = $("[data-it-dot='" + stepCounter + "']");
    var confActiveParts = $("[data-it-conf-part='" + stepCounter + "']");
    var prevConfParts = $("[data-it-conf-part='" + (stepCounter - +1) + "']");
    var nextConfParts = $("[data-it-conf-part='" + (stepCounter + +1) + "']");

    switch (stepCounter) {
        case 1:
            confActiveParts.addClass("active");
            nextConfParts.removeClass("active");
            mainContPart.addClass("active");
            btnNext.addClass("active");
            btnPrev.removeClass("active");
            moveArrowPrev.removeClass("active");
            addDotActive()
            break;
        case 2:
            confActiveParts.addClass("active");
            prevConfParts.removeClass("active");
            nextConfParts.removeClass("active");
            addDotActive()
            moveArrowNext.addClass("active");
            moveArrowPrev.addClass("active");
            break;
        case 3:
            confActiveParts.addClass("active");
            prevConfParts.removeClass("active");
            btnNext.removeClass("active");
            btnPrev.addClass("active");
            moveArrowNext.removeClass("active");
            addDotActive()


            // getCalculationValue();
            break;
        case 4:
    }

    function addDotActive() {
        confDot.removeClass("active");
        confActiveDot.addClass("active");
    }

}

function stepCounterPlus() {
    stepCounter++;
    calculation();
}

function stepCounterMinus() {
    stepCounter--;
    calculation();
}

btnNext.on("click", function (e) {
    stepCounterPlus();

    // $(".it-validate-color").removeClass("it-validate-color");
    // $(".it-validate-error").removeClass("active");
    //
    // $("[data-it-calculation-item='" + stepCounter + "'] [required]").each(function () {
    //     var calcValidate = $(this).val();
    //
    //     if (calcValidate == null || calcValidate == "") {
    //         $(this).addClass("it-validate-color");
    //         $(".it-validate-error").addClass("active");
    //
    //     }
    // });
    //
    // if (!$(".it-validate-error").hasClass("active")) {

    // }
});

btnPrev.on("click", function (e) {
    stepCounterMinus();
});
