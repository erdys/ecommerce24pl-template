scaleBtnNextPage();
randomBackground();
slickVertical();

$(document).ready(function() {
    slickVertical();
});

$(window).resize(function() {
    slickVertical();
});

$(window).load(function() {
    slickVertical();
});

$('select').selectpicker();

function scaleBtnNextPage() { 

    $('.box-site-content-nextpage').each(function() {

        var heightPrev = $(this).parent().prev().children('.box-site-content').height();
        console.log(heightPrev);
        $(this).children('.box-nextpage').height( heightPrev - 15);
    });

}

function randomBackground() {
    $('.box-article-header .image-hld').each(function(){

        var x = Math.floor(Math.random() * 100) + 1;
        var y = Math.floor(Math.random() * 100) + 1;
        var summary = x + '% ' + y + '%';
        
        $(this).css('background-position' , summary);

    });
}

function slickVertical() { 
    $('.panel-partners').each(function(){
        var slickHeight = $(this).find('.js-slick-items').eq(0).height();
        var slickHolderHeight = $(this).find('.content-inner').height();
        console.log(slickHeight);
        console.log(slickHolderHeight);
        var diff = Math.floor((slickHolderHeight - slickHeight) / 2);
        $(this).find('.js-slick-items').css('margin-top' , diff + 'px');
    });
}

$('.btn-icon-search').click(function(){
    $('.section-search-hld').slideToggle();
});