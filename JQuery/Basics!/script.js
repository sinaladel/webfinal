$(document).ready(() => {
    $('#content1').hide();
    $('#content2').css({
        "background-color": "#000",
        "color": "#fff"
    });
    $('#content2').on('click', event => {
        $(event.target).fadeOut('slow');
    });
    $('#content3').on('dblclick', function () {
        $('#content2').fadeIn('slow');
    });
    let fourIsBig = false;
    $('#content4').on('click', function () {
        if (fourIsBig) {
            $(this).width('50px');
            $(this).height('50px');
            fourIsBig = false;
        } else {
            $(this).width('400px');
            $(this).height('400px');
            fourIsBig = true;
        }
    });
    $('#content5').on('click', function () {
        $('content1').show();
    });
    $('.box').on('mouseover', function () {
        $(this).css({
            "background-color": "#ff0",
            "color": "#000"
        });
    });
    $('.box').on('mouseout', function () {
        $(this).css({
            "background-color": "cyan"
        });
    });
    // JQueryUI
    $('#content4').draggable();
});