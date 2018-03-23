// Modernizr.mq('(min-width: 1200px)')

var bXS = Modernizr.mq('(max-width: 767px)');
var bSM = Modernizr.mq('(min-width: 768px) and (max-width: 991px)');
var bMD = Modernizr.mq('(min-width: 992px) and (max-width: 1199px)');
var bLG = Modernizr.mq('(min-width: 1200px)');

    // if(mediaQ){

moveDOM();
contentPromoBox();
scaleMainBox();
filtrsBox();
partnersBox();
$('.image-fill').imgLiquid();

$(window).size(function() {
    moveDOM();
    contentPromoBox();
    scaleMainBox();
    filtrsBox();
    partnersBox();
    // $.fn.matchHeight._update();
});

$(window).load(function() {
    moveDOM();
    contentPromoBox();
    scaleMainBox();
    filtrsBox();
    partnersBox();
    // $.fn.matchHeight._update();

});

$('a.link-loop').mouseover(function() {
    $(this).parent().addClass('js-hover');
});

$('a.link-loop').mouseout(function() {
    $(this).parent().removeClass('js-hover');
});


function HomePageStart() {


    $('.container-cols.cc-with-last-numbers.cc-with-adsites').each(function() {
        $(this).find('.js-mh').matchHeight({
            byRow: true,
        });
    });
}

function scaleMainBox() {

    // $.fn.matchHeight._update();

    // $('.panel-newsletter-top').css('height', 'auto');

    // if ($('#hld-publications-apps').height() > $('#hld-number-newsletter').height()) {
    //     var diff = $('#hld-publications-apps').height() - $('#hld-number-newsletter').height();
    //     $('.panel-newsletter-top').height($('.panel-newsletter-top').height() + diff);
    // }

    // if ($(window).width() < 975) {

    // } else {

    //     HomePageStart();

    //     $('#hld-toolbox').each(function() {
    //         var toolboxHeight = $(this).height() - $(this).find('.hld-title').height() - 20;
    //         var numberNewsletterHeight = $('#hld-number-newsletter').height() - $('#hld-number-newsletter').find('.hld-title').height() - 20;
    //         $('#hld-toolbox').find('.panel-inner').height($('#hld-toolbox').find('.panel-inner').height(numberNewsletterHeight));
    //     });

    // }

    // $('#hld-toolbox').each(function() {
    //     var toolboxHeight = $(this).height() - $(this).find('.hld-title').height() - 20;
    // });

}



function contentPromoBox() {

    // $.fn.matchHeight._update();

    $('.box-site-content-promo').each(function() {

        var heightPrev = $(this).parent().prev().children('.box-site-content').height();
        var heightTags = $(this).find('.box-article-tags').height();
        var heightAuthors = $(this).find('.box-article-authors').height();

        if ($(this).children('.box-article-tags, .box-article-authors').length > 0) {
            heightBox = heightPrev - heightTags - heightAuthors - 10;
            console.log(heightBox + ' full');
        } else if ($(this).find('.box-article-tags').length > 0) {
            heightBox = heightPrev - heightTags;
            console.log(heightBox + 'tags');
        } else if ($(this).find('.box-article-authors').length > 0) {
            heightBox = heightPrev - heightAuthors;
            // heightBox = heightPrev + 200;
            console.log(heightBox + 'authors');
        } else {
            heightBox = heightPrev + 20;
            console.log(heightBox + 'nothing');
        }
        $(this).find('.box-article-header').height(heightBox);
    });

}


function filtrsBox() {

    $('.container-cols.cc-with-filtrs.cc-with-partners').each(function() {
        
        var heightPanelFiltrs = $('.panel-filtrs').find('.content-inner').height();
        var heightPanelFiltrsForm = $('.panel-filtrs').find('.form-aside-archive').height();
        var heightPanelPartners = $('.panel-partners').height();
        var heightArticleBox = $('.panel-articles[data-panel-articles="1"]').find('.box-site-content').height();
        var heightArticleData = $('.panel-articles[data-panel-articles="1"]').find('.box-site-content').find('.box-article-data').height();
        var heightArticleLead = $('.panel-articles[data-panel-articles="1"]').find('.box-site-content').find('.box-article-lead').height();

        var diffBox = heightPanelFiltrs + heightPanelPartners - heightArticleBox;
        var diffFiltrs = heightArticleBox - (heightPanelFiltrs + heightPanelPartners);

        // console.log(diffBox + ' diffBox');
        // console.log(diffFiltrs + ' diffFiltrs');
        // console.log(heightArticleBox + ' - heightArticleBox');
        // console.log(heightPanelFiltrs + ' - heightPanelFiltrs');
        // console.log(heightPanelPartners + ' - heightPanelPartners');

        if (heightArticleBox > (heightPanelFiltrs + heightPanelPartners)) {
            console.log('warunek 1');
            $('.panel-filtrs').find('.content-inner').height(heightPanelFiltrs + diffFiltrs - 20);
            var addMarginForm = ((heightPanelFiltrsForm - heightPanelFiltrs) / 4) * 2;
            var addMarginFormSection = ((addMarginForm * 2) / 3);
            console.log(addMarginForm + ' ddd');
            console.log((addMarginForm * 2) / 3 + ' margin');
            $('.panel-filtrs').find('.form-aside-archive').css('margin-top', addMarginForm + 'px');
            $('.panel-filtrs').find('.form-group').css('margin-bottom', 5 + addMarginFormSection + 'px');

        } else {
            console.log('warunek 2');
            $('.panel-articles[data-panel-articles="1"]').find('.box-article-data').height(heightArticleData + diffBox + 20);
            $('.panel-articles[data-panel-articles="1"]').find('.box-article-lead').height(heightArticleLead + diffBox + 20);
        }

    });
}

function partnersBox() {

    var lastNumbersInner = $('.panel-last-numbers').find('.content-inner');
    var panelPartnertsInner = $('.panel-partners').find('.content-inner');

    if (Modernizr.mq('(min-width: 768px) and (max-width: 991px)')) {

        if (lastNumbersInner.outerHeight() > panelPartnertsInner.outerHeight()) {
            panelPartnertsInner.height(lastNumbersInner.outerHeight());
        } else {
            lastNumbersInner.height(panelPartnertsInner.height());
        }

    }
}

function moveDOM() {

    if (Modernizr.mq('(max-width: 767px)')) {
        $('.panel-partners').insertAfter('.panel-last-numbers');
        $('#hld-publications-apps').insertAfter('#hld-number-newsletter');        
        $('#hld-toolbox').insertAfter('#hld-publications-apps'); 
        $('.panel-filtrs').insertBefore('.panel-articles[data-panel-articles="1"]');
        // console.log('xs ') + $(window).width();
    } else if (Modernizr.mq('(min-width: 768px) and (max-width: 991px)')) {
        $('.panel-partners').insertAfter('.panel-last-numbers');
        $('.panel-filtrs').insertBefore('.panel-articles[data-panel-articles="1"]');
        $('#hld-number-newsletter').insertAfter('#hld-publications-apps');        
        $('#hld-toolbox').insertAfter('#hld-number-newsletter');
        // $('#hld-number-newsletter').insertAfter('#hld-publications-apps');
        console.log('sm ' + $(window).width());
    } else if (Modernizr.mq('(min-width: 992px) and (max-width: 1199px)')) {
        $('.panel-partners').insertAfter('.panel-filtrs');
        $('.panel-articles[data-panel-articles="1"]').insertBefore('.panel-filtrs');
        $('#hld-number-newsletter').insertAfter('#hld-toolbox');        
        $('#hld-publications-apps').insertAfter('#hld-number-newsletter');        
        // console.log('md ' + $(window).width());
    } else {
        $('.panel-partners').insertAfter('.panel-filtrs');
        $('.panel-articles[data-panel-articles="1"]').insertBefore('.panel-filtrs');
        $('#hld-number-newsletter').insertAfter('#hld-publications-apps');
        $('#hld-toolbox').insertBefore('#hld-publications-apps');
        // console.log('orginal');
    }
}