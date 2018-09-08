/* ------------------- calculation ----------------------- */

var stepCounter = +1;

var btnPrev = $("[data-it-btn='prev']");
var btnNext = $("[data-it-btn='next']");
var btnSend = $("[data-it-btn='send']");
var calcTitle = $("[data-calculation-title]");


function calculation() {

    $("[data-it-calculation-item]").hide();
    $("[data-it-calculation-item='" + stepCounter + "']").show();
    var dotLine = $("[data-dot-line='" + stepCounter + "']");
    var calculationText = $("[data-calculation-text='" + stepCounter + "']");
    switch (stepCounter) {
        case 1:
            btnPrev.removeClass("active");
            dotLine.next().removeClass("active");
            calculationText.addClass("active");
            calculationText.next().removeClass("active");
            calculationText.parent().next().find("[data-calculation-text]").removeClass("active");
            break;
        case 2:
            btnPrev.addClass("active");
            btnSend.removeClass("active");
            btnNext.addClass("active");
            dotLine.addClass("active");
            dotLine.next().removeClass("active");
            calculationText.addClass("active");
            calculationText.parent().next().find("[data-calculation-text]").removeClass("active");
            calculationText.parent().prev().find("[data-calculation-text]").removeClass("active");
            break;
        case 3:
            btnNext.removeClass("active");
            btnPrev.addClass("active");
            btnSend.addClass("active");
            dotLine.addClass("active");
            calculationText.addClass("active");
            calculationText.parent().prev().find("[data-calculation-text]").removeClass("active");
            getCalculationValue();
            break;
        case 4:
    }
}


btnNext.on("click", function (e) {
    $(".it-validate-color").removeClass("it-validate-color");
    $(".it-validate-error").removeClass("active");

    $("[data-it-calculation-item='" + stepCounter + "'] [required]").each(function () {
        var calcValidate = $(this).val();

        if (calcValidate == null || calcValidate == "") {
            $(this).addClass("it-validate-color");
            $(".it-validate-error").addClass("active");

        }
    });

    if (!$(".it-validate-error").hasClass("active")) {
        stepCounter++;
        calculation();
    }
});

btnPrev.on("click", function (e) {
    stepCounter--;
    calculation();
});
