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

var confParts = $("[data-it-conf-part]"),
mainContPart = $("[data-it-main-content]"),
confDot = $("[data-it-dot]"),
confStep = $("[data-it-step]");
confModels = $("[data-it-models]");

function calculation() {
    var confActiveDot = $("[data-it-dot='" + stepCounter + "']"),
    confActiveParts = $("[data-it-conf-part='" + stepCounter + "']"),
    confActiveStep = $("[data-it-step='" + stepCounter + "']");

    switch (stepCounter) {
        case 1:
            addPartActive();
            mainContPart.addClass("active");
            btnNext.addClass("active");
            btnPrev.removeClass("active");
            moveArrowPrev.removeClass("active");
            addDotActive();
            addStepActive();
            break;
        case 2:
            addPartActive();
            moveArrowNext.addClass("active");
            moveArrowPrev.addClass("active");
            addDotActive();
            addStepActive();
            perfectScrollStart();
            break;
        case 3:
            addPartActive();
            btnNext.removeClass("active");
            btnPrev.addClass("active");
            moveArrowNext.removeClass("active");
            addDotActive();
            addStepActive();

            // getCalculationValue();
            break;
        case 4:
    }

    function addDotActive() {
        confDot.removeClass("active");
        confActiveDot.addClass("active");
    }

    function addStepActive() {
        confStep.removeClass("active");
        confActiveStep.addClass("active");
    }

    function addPartActive() {
        confParts.removeClass("active");
        confActiveParts.addClass("active");
    }
}

confModels.on("click", function () {
    var $this = $(this);
    setTimeout(function () {
        confModels.removeClass("active");
        $this.addClass("active");
    }, 50)

})

function stepCounterPlus() {
    stepCounter++;
    calculation();
}

function stepCounterMinus() {
    stepCounter--;
    calculation();
}

moveArrowNext.on("click", function (e) {
    stepCounterPlus();
});

moveArrowPrev.on("click", function (e) {
    stepCounterMinus();
});

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


/* ------------------- perfect-scrollbar  ------------------- */
/*
var perfectScrollContainers = document.querySelectorAll('[data-scroll-wrap]');

var PerfectScrollbarElement;

function perfectScrollStart() {
    if (perfectScrollContainers.length) {

        for (var i = 0; i < perfectScrollContainers.length; i++) {

            var perfectScrollContainersWidtn = +perfectScrollContainers[i].scrollWidth - +perfectScrollContainers[i].clientWidth;

            if (perfectScrollContainersWidtn && !perfectScrollContainers[i].classList.contains("ps")) {

                PerfectScrollbarElement = new PerfectScrollbar(perfectScrollContainers[i], {
                    maxScrollbarLength: 50,
                    wheelPropagation: true,
                    suppressScrollY: true,
                    wheelSpeed: 0.2
                    //   useBothWheelAxes: true

                });

            } else if (typeof PerfectScrollbarElement != "undefined") {
                PerfectScrollbarElement.destroy();
            }
        }
    }
}


*/

var perfectScrollContainer = document.querySelector('[data-scroll-wrap]');

function perfectScrollStart () {

    var PerfectScrollbarElement = new PerfectScrollbar(perfectScrollContainer, {
        maxScrollbarLength: 65,
        wheelPropagation: true,
        suppressScrollX: true,
        wheelSpeed: 0.2
          // useBothWheelAxes: true
    });
}


var checkboxItem = $("[data-checkbox-item]");

checkboxItem.each(function (indx, elem) {
    var $this = $(elem);
    $this.on("click", function () {
        var numberActiveItem = $this.data("checkbox-item");
        
        if ($this.prop("checked")) {
            $("[data-checkbox-item='" + numberActiveItem +  "']").prop("checked", "checked");
        } else {
            $("[data-checkbox-item='" + numberActiveItem + "']").prop("checked", false);
        }
    });

});



function mediaTransferBlocks(mediaSizeDescktop) {
    if (mediaSizeDescktop.matches) {
        var modelList =  $('[data-model-block]');
        modelList.prependTo($("[data-conf-half-left]"));

        var allSumBlock = $("[data-it-sum]");
        allSumBlock.prependTo($("[data-it-form-wrap]"));
    }
}

var mediaSizeDescktop = window.matchMedia("screen and (max-width: 576px)");
mediaSizeDescktop.addListener(mediaTransferBlocks);
mediaTransferBlocks(mediaSizeDescktop);
