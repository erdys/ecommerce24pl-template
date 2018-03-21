resize();
scaleMainBox();

$(document).ready(function() {

    resize();
    scaleMainBox();
    HomePageStart();

    $('.image-fill').imgLiquid();

});

$(window).resize(function() {
    resize();
    scaleMainBox();
});

$(window).load(function() {
    resize();
    scaleMainBox();
});

$('a.link-loop').mouseover(function() {
    $(this).parent().addClass('js-hover');
});

$('a.link-loop').mouseout(function() {
    $(this).parent().removeClass('js-hover');
});


function HomePageStart() {
    //     $('.container-cols.cc-with-filtrs.cc-with-partners').each(function() {
    //     var heightPanelFiltrs = $('.panel-filtrs').height();
    //     var heightPanelPartners = $('.panel-partners').find('.content-inner').height(true);
    //     var heightArticleBox = $('.box-site-content').height();
    //     var heightArticleData = $('.box-site-content').find('.box-article-data').height();

    //     $(this).find('.panel-partners').children('.content-inner').height(heightArticleBox - heightPanelFiltrs - 20);

    // });

    // $('.container-cols.cc-with-last-numbers.cc-with-adsites').each(function() {
    //     $(this).find('.js-mh').matchHeight({
    //         byRow: true,
    //     });
    // });
}

function scaleMainBox() {

    $.fn.matchHeight._update();

    $('.panel-newsletter-top').css('height', 'auto');

    if ($('#hld-publications-apps').height() > $('#hld-number-newsletter').height()) {
        var diff = $('#hld-publications-apps').height() - $('#hld-number-newsletter').height();
        $('.panel-newsletter-top').height($('.panel-newsletter-top').height() + diff);
    }

    if ($(window).width() < 975) {

    } else {

        HomePageStart();

        $('#hld-toolbox').each(function() {
            var toolboxHeight = $(this).height() - $(this).find('.hld-title').height() - 20;
            var numberNewsletterHeight = $('#hld-number-newsletter').height() - $('#hld-number-newsletter').find('.hld-title').height() - 20;
            $('#hld-toolbox').find('.panel-inner').height($('#hld-toolbox').find('.panel-inner').height(numberNewsletterHeight));
        });

    }

    $('#hld-toolbox').each(function() {
        var toolboxHeight = $(this).height() - $(this).find('.hld-title').height() - 20;
    });

}


// alert('dupa');

function resize() {

    $.fn.matchHeight._update();

    if (Modernizr.mq('(max-width: 767px)')) {
        // $('#hld-number-newsletter').insertBefore('#hld-publications-apps');
        // $('#hld-toolbox').insertAfter('#hld-publications-apps');
        // $('.panel-partners').insertAfter('.panel-last-numbers');
        console.log('xs ') + $(window).width();
    } else if (Modernizr.mq('(min-width: 768px) and (max-width: 991px)')) {
        $('.panel-partners').insertAfter('.panel-last-numbers');
        // $('#hld-number-newsletter').insertAfter('#hld-publications-apps');
        // $('#hld-toolbox').insertAfter('#hld-number-newsletter');
        // $('.panel-filtrs').insertBefore('.panel-articles[data-panel-articles="1"]');

        console.log('sm ' + $(window).width());
    } else if (Modernizr.mq('(min-width: 992px) and (max-width: 1199px)')) {
        $('.panel-partners').insertAfter('.panel-filtrs');
        // $('#hld-number-newsletter').insertAfter('#hld-toolbox');
        // $('#hld-publications-apps').insertAfter('#hld-number-newsletter');
        // $('.panel-articles[data-panel-articles="1"]').insertBefore('.panel-filtrs');
        console.log('md ' + $(window).width());
    } else {
        $('.panel-partners').insertAfter('.panel-filtrs');
        // $('#hld-toolbox').insertBefore('#hld-publications-apps');
        // $('#hld-number-newsletter').insertAfter('#hld-publications-apps');
        // $('.panel-articles[data-panel-articles="1"]').insertBefore('.panel-filtrs');
        console.log('orginal');
    }
    // if ($(window).width() < 751) {

    //     $('#hld-number-newsletter').insertBefore('#hld-publications-apps');
    //     $('#hld-toolbox').insertAfter('#hld-publications-apps');
    //     $('.panel-partners').insertAfter('.panel-last-numbers');
    //     // console.log('xs ') + $(window).width();

    // } else if ($(window).width() < 975) {

    //     $('#hld-number-newsletter').insertAfter('#hld-publications-apps');
    //     $('#hld-toolbox').insertAfter('#hld-number-newsletter');
    //     $('.panel-partners').insertAfter('.panel-last-numbers');
    //     $('.panel-filtrs').insertBefore('.panel-articles[data-panel-articles="1"]');
    //     // console.log('sm ' + $(window).width());

    // } else if ($(window).width() < 1183) {
    //     $('#hld-number-newsletter').insertAfter('#hld-toolbox');
    //     $('#hld-publications-apps').insertAfter('#hld-number-newsletter');
    //     $('.panel-partners').insertAfter('.panel-filtrs');
    //     $('.panel-articles[data-panel-articles="1"]').insertBefore('.panel-filtrs');
    //     // console.log('md ' + $(window).width());

    // } else {

    //     $('.panel-partners').insertAfter('.panel-filtrs');
    //     $('#hld-toolbox').insertBefore('#hld-publications-apps');
    //     $('#hld-number-newsletter').insertAfter('#hld-publications-apps');
    //     $('.panel-articles[data-panel-articles="1"]').insertBefore('.panel-filtrs');
    //     // console.log('orginal');
    // }
    
    $.fn.matchHeight._update();

    $('.box-site-content-promo').each(function() {

        var heightPrev = $(this).parent().prev().children('.box-site-content').height();
        var heightTag = $(this).find('.box-article-tags').height();

        if ($(this).find('.box-article-tags')) {
            heightPrev = heightPrev - heightTag - 5;
        }

        $(this).find('.box-article-header').height( heightPrev);
    });

}


function partnersBox() {
    var lastNumbersHeight = $('.panel-last-numbers').find('.content-inner').height();
    $('#hld-toolbox').find('.panel-inner').css('height', 'auto');
    $('.panel-partners').find('.content-inner').height($('.panel-partners').find('.content-inner').height(lastNumbersHeight));
}

