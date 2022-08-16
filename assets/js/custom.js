$(".auto-switch input").keyup(function () {
    if (this.value.length == this.maxLength) {
        var $next = $(this).next('.auto-switch input');
        if ($next.length)
            $(this).next('.auto-switch input').focus();
        else
            $(this).blur();
    }
});

$(".auto-switch input").focus(function () {
    $(this).val('');
});
///////////////////////////
//btn hover
//////////////////////////
$(function () {
    $('.btn-hover')
        .on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top: relY, left: relX})
        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top: relY, left: relX})
        });
});

new WOW().init();

$(document).ready(function () {
    //$('[data-toggle="tooltip"]').tooltip();
    $('.group select').niceSelect();
});

$('.pipe').click(function () {
    $('.pipe-inner').toggleClass('move');
    $('.pipe-inner i').toggleClass('fa-sun').toggleClass('fa-moon');
    $('body').toggleClass('dark-mode');
});

//new PerfectScrollbar('.custom-scroll');



/////////////////
//upload file
var $fileInput = $('.file-input');
var $droparea = $('.file-drop-area');

// highlight drag area
$fileInput.on('dragenter focus click', function() {
    $droparea.addClass('is-active');
});

// back to normal state
$fileInput.on('dragleave blur drop', function() {
    $droparea.removeClass('is-active');
});

// change inner text
$fileInput.on('change', function() {
    var filesCount = $(this)[0].files.length;
    var $textContainer = $(this).prev();

    if (filesCount === 1) {
        // if single file is selected, show file name
        var fileName = $(this).val().split('\\').pop();
        $textContainer.text(fileName);
    } else {
        // otherwise show number of files
        $textContainer.text(filesCount + ' files selected');
    }
});

$('.right .buy-order').click(function () {
    let child = $(this).parent().children();
    if(child.hasClass('active')){
        $(child).removeClass('active');
    }
    $(this).addClass('active');
    $('.sell-table').hide('slow');
    $('.buy-table').show('slow');
});
$('.right .sell-order').click(function () {
    let child = $(this).parent().children();
    if(child.hasClass('active')){
        $(child).removeClass('active');
    }
    $(this).addClass('active');
    $('.buy-table').hide('slow');
    $('.sell-table').show('slow');
});

$('.right .order-book').click(function () {
    let child = $(this).parent().children();
    if(child.hasClass('active')){
        $(child).removeClass('active');
    }
    $(this).addClass('active');
    $('.buy-table').show('slow');
    $('.sell-table').show('slow');
});

$('.range-slider__range').click(function () {
    let rslider = $(this).val();
    $(this).next().width(rslider + '%');
});

$('.change-money .toman').click(function () {
    let child = $(this).parent().children();
    if(child.hasClass('active')){
        $(child).removeClass('active');
    }
    $(this).addClass('active');
    $('.teter-price').hide();
    $('.toman-price').show();
});
$('.change-money .teter').click(function () {
    let child = $(this).parent().children();
    if(child.hasClass('active')){
        $(child).removeClass('active');
    }
    $(this).addClass('active');
    $('.teter-price').show();
    $('.toman-price').hide();
});

$('.sell-open-btn').click(function () {
    $('#mobile-fixed').addClass('sell-trade-open').removeClass('buy-trade-open');
    $('.dark-bg').addClass('d-block');
});
$('.dark-bg').click(function () {
    $(this).next().removeClass('buy-trade-open').removeClass('sell-trade-open');
    $(this).removeClass('d-block');
});
$('.buy-open-btn').click(function () {
    $('#mobile-fixed').addClass('buy-trade-open').removeClass('sell-trade-open');
    $('.dark-bg').addClass('d-block');
});