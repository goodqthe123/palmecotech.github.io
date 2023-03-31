(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({"position": "relative", "height": "160px"});
    
    
    // Blogs carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

//防火防水.....

$(document).ready(function() {
    // Define the text mappings
    const textMappings = {
      '防潮': { h2: '防水', p: '與其他傳統的建築材料相比，棕櫚環保板會對腐爛和生物污染更具抵抗力。 棕櫚環保板會是迄今為止五年內最低水吸收百分比最低的生物材料。 這樣可以防止表面油漆，層壓板，防水膜和牆紙的腫脹，凸起，破裂和剝離。' },
      '環保': { h2: '環保', p: '製造棕櫚環保板需要的生產能量少於一半，最終導致碳足跡較低，對環境的影響較小。 棕櫚樹材料也完全可回收，從而減少了垃圾填埋場的影響。棕櫚板的生產中沒有樹木砍伐。 相反，使用了可生物降解的棕櫚纖維廢物。' },
      '防火': { h2: '防火', p: '當暴露於極高的熱量（超過1000度）時，棕櫚環保板沒有顯示損害。 它的2小時消防認證證實了這一點。棕櫚環保板沒有釋放任何有害的煙霧或氣味，因為板沒有油含量，因此可以安全地安裝室內和室外裝置。' },
      '防蟲': { h2: '抗害蟲和抗白蟻', p: '棕櫚環保板由棕櫚纖維製成，棕櫚纖維不作為白蟻和其他以木材為食的害蟲的食物。 板上的其他礦物質，粘合劑和纖維網狀使其耐用且難以抵抗囓齒動物和其他害蟲。' },
      '5': { h2: 'Palmeco', p: 'Text for 5' },
      '隔音': { h2: '隔音，隔熱', p: '聲音吸收和分散率平均減少25分貝。 非常適合BPO / Office隔間，會議室，室隔板，圖書館，快餐連鎖店，旅館走廊和通道等。 它還具有醫院，工廠和採礦廠的輻射，熱吸收和熱驅蟲特性。 唯一可以替換屋頂材料的板，與瓦楞鍍鋅屋頂材料不同，由於極端的濕度和突然的溫度變化，它們會生鏽和降解。' },
      '防霉': { h2: '防霉', p: '棕櫚環保板專為熱帶地區設計，可在一天內承受突然的干熱天氣和雨水天氣。' },
      '易用': { h2: '易於使用和增加成本效益', p: '棕櫚環保板可用作：天花板、地板、牆壁、屋頂基材和家具。 這使得該板成為辦公室、家庭、倉庫、貿易攤位和櫃檯的絕佳材料。棕櫚環保板幾乎不需要維護，最終減少了未來的維修和人工成本。' },
      '無毒': { h2: '不含有害物質，不揮發有害氣體', p: '棕櫚環保板不含有害物質，例如揮發性有機化合物 (VOC)、甲醛、石棉或矽塵。 該板還不需要任何特定的處置規定，因為它未被歸類為危險物質。' },
    };
    
    // Function to change the text based on the hovered element
    function changeText(event) {
        const value = $(event.target).text();
        const mapping = textMappings[value];
        $('#my-heading').text(mapping.h2);
        $('#my-paragraph').text(mapping.p);
      }
      
      // Attach the hover event to all <div class="adv"> elements
      $('.adv').hover(changeText);
    });

