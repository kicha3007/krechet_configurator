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


var stepCounter = 1;

var btnNext = $("[data-it-btn='next']"),
    btnPrev = $("[data-it-btn='prev']");


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


function calculation() {
    var dotLine = $("[data-it-dot-line='" + stepCounter + "']");
    var confActiveParts = $("[data-it-conf-part='" + stepCounter + "']");
    var prevConfParts = $("[data-it-conf-part='" + (stepCounter - +1) + "']");

    switch (stepCounter) {
        case 1:

            confActiveParts.addClass("active");

            // btnPrev.removeClass("active");
            // dotLine.next().removeClass("active");
            // calculationText.addClass("active");
            // calculationText.next().removeClass("active");
            // calculationText.parent().next().find("[data-calculation-text]").removeClass("active");
            break;
        case 2:
            confActiveParts.addClass("active");
            prevConfParts.removeClass("active");
            // btnPrev.addClass("active");
            // btnSend.removeClass("active");
            // btnNext.addClass("active");
            // dotLine.addClass("active");
            // dotLine.next().removeClass("active");
            // calculationText.addClass("active");
            // calculationText.parent().next().find("[data-calculation-text]").removeClass("active");
            // calculationText.parent().prev().find("[data-calculation-text]").removeClass("active");
            break;
        case 3:
            confActiveParts.addClass("active");
            prevConfParts.removeClass("active");

            // btnNext.removeClass("active");
            // btnPrev.addClass("active");
            // btnSend.addClass("active");
            // dotLine.addClass("active");
            // calculationText.addClass("active");
            // calculationText.parent().prev().find("[data-calculation-text]").removeClass("active");
            // getCalculationValue();
            break;
        case 4:
    }
}


btnNext.on("click", function (e) {
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
    stepCounter++;
    calculation();
    // }
});

btnPrev.on("click", function (e) {
    stepCounter--;
    calculation();
});
