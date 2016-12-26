// DOCUMENT READY
$(document).ready(function () {
    // delete animation
    $(function () {
        if ($(window).width() <= 767) {
            $('.wow').removeClass('wow');
        }
    });
    // delete animation end

    // animation register/enter
    $('.enter_edit').bind('input', function () {
       $(this).siblings('.line_input').addClass('line_inp_width');
    });
    // animation register/enter

    // forget password
    $('.open_foreget').click(function () {
       $('.forgot').slideToggle(300);
    });
    // forget password end

    // bucket inputs change
    $('.change_lab').click(function () {
        $(this).siblings('.change_lab').children('.change_it').removeClass('chanched');
       $(this).children('.change_it').addClass('chanched');
    });
    // bucket inputs change end

    // delivery map toggle
    $('#kiev_map').click(function () {
        $('#odessa_map').removeClass('active');
        $(this).addClass('active');
        $('.close_map').fadeOut(0);
        $('.kiev_map').fadeIn(500);
    });
    $('#odessa_map').click(function () {
        $('#kiev_map').removeClass('active');
        $(this).addClass('active');
        $('.close_map').fadeOut(0);
        $('.odessa_map').fadeIn(500);
    });
    // delivery map toggle end

    // prod menu points
    $('.prod_info_menu p').click(function () {
        $('.prod_info_menu p').removeClass('active');
        $(this).addClass('active');
    });
    $('#aboutProductOpen').click(function () {
       $('.all_info').fadeOut(0);
        $('#aboutProduct').fadeIn(300);
    });
    $('#characteristicsOpen').click(function () {
        $('.all_info').fadeOut(0);
        $('#characteristics').fadeIn(300);
    });
    $('#aboutManufacturerOpen').click(function () {
        $('.all_info').fadeOut(0);
        $('#aboutManufacturer').fadeIn(300);
    });
    // prod menu points end

    // menu button
        $('#open_menu').click(function () {
           $('.menu_point').slideToggle(500);
        });
    // menu button end

    // product count
    $(function () {
        $(".btn_plus").bind("click", chandelierAdd);
        $(".btn_minus").bind("click", chandelierRemove);
        function chandelierAdd(){
            var $input = $(this).parent().children('input');
            $input.val(+$input.val() + 1);
        }
        function chandelierRemove(){
            var $input = $(this).parent().children('input');
            var count = +($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        }
    });
    // product count end

    // menu
    $(function menuSlides() {
        if ($(window).width() > 768) {
            $('.menu_point').hover(function () {
                $(this).children('.slide_menu').slideToggle(0);
            });
        }
    });
    // menu end
    // owl carousel
    $(document).ready(function() {

        $("#banners").owlCarousel({
            autoPlay: 3000,
            items : 1,
            responsive: false
        });

    });
    // owl carousel end

    // scrollbar
    (function($){
        $('.scroll_window').on("load",function(){
            $(".content").mCustomScrollbar();
        });
    })(jQuery);
    // scrollbar end

    // input search window
    $('#search').bind('input', function () {
        $('.window_search').fadeIn(300);
    });
    $(window).click(function () {
        $('.window_search').fadeOut(300);
    });
    // input search window end
    // opening modal windows
    $('#order_recall').click(function () {
        $('.modal_fog').fadeIn(300);
       $('.recall').fadeIn(300);
    });
    $('.bucket_btn').click(function () {
        $('.modal_fog').fadeIn(300);
       $('.bucket_products').fadeIn(300);
    });
    $('.continue_buying').click(function () {
        $('.modal_fog').fadeOut(300);
        $('.bucket_products').fadeOut(300);
    });
    $('.modal_fog').click(function () {
        $('.modal_fog').fadeOut(300);
        $('.bucket_products').fadeOut(300);
        $('.recall').fadeOut(300);
    });
    // opening modal windows end

    // owl carousel
    $(document).ready(function() {

        var sync1 = $("#sync1");
        var sync2 = $("#sync2");

        sync1.owlCarousel({
            singleItem : true,
            slideSpeed : 1000,
            navigation: false,
            pagination:true,
            afterAction : syncPosition,
            responsiveRefreshRate : 200
        });

        sync2.owlCarousel({
            items : 3,
            itemsDesktop      : [1199,3],
            itemsDesktopSmall     : [979,3],
            itemsTablet       : [768,3],
            itemsMobile       : [479,3],
            pagination:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });

        function syncPosition(el){
            var current = this.currentItem;
            $("#sync2")
                .find(".owl-item")
                .removeClass("synced")
                .eq(current)
                .addClass("synced")
            if($("#sync2").data("owlCarousel") !== undefined){
                center(current)
            }
        }

        $("#sync2").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
        });

        function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
                if(num === sync2visible[i]){
                    var found = true;
                }
            }

            if(found===false){
                if(num>sync2visible[sync2visible.length-1]){
                    sync2.trigger("owl.goTo", num - sync2visible.length+2)
                }else{
                    if(num - 1 === -1){
                        num = 0;
                    }
                    sync2.trigger("owl.goTo", num);
                }
            } else if(num === sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
                sync2.trigger("owl.goTo", num-1)
            }

        }

    });
    // owl carousel end
    // owl carousel card
    $(document).ready(function() {

        $("#owl-card").owlCarousel({
            autoPlay: 3000,
            items : 4,
            itemsDesktop      : [1199,3],
            itemsDesktopSmall     : [979,2],
            itemsTablet       : [768,1],
            itemsMobile       : [479,1],
            navigation: true,
            navigationText: false,
            pagination: false
        });

    });
    // owl carousel card end
    // ion slider
    // PRICE SLIDER

    $("#example_id").ionRangeSlider({
        type: "double",
        grid: false,
        hide_min_max: true,
        hide_from_to:true,
        min: 0,
        max: 30000,
        from: 300,
        to: 10000,

        onChange: function (data) {
            var $range = $("#example_id");

            $range.on("change", function () {
                var $this = $(this),
                    value = $this.prop("value").split(";");

                $('#price_inner_1').val(value[0]);
                $('#price_inner_2').val(value[1]);
            });
        }
    });

    var slider = $("#example_id").data("ionRangeSlider");

    $('#price_inner_1').bind('input', function(){
        var value = $(this).val();

        slider.update({
            from: value
        });
    });
    $('#price_inner_2').bind('input', function(){
        var value = $(this).val();

        slider.update({
            to: value
        });
    });

    // ios slider end

    // checkboxes
    $('.filter_check').bind('click', function(e) {
        e.preventDefault();
       $(this).toggleClass('active');
    });
    $('.color_check').bind('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
    // checkboxes end

    // open sort
    $('#open_sort').click(function () {
       $('.sort_it').slideToggle(100);
    });
    // open sort end
    // delete product
    $('.delete_product').click(function () {
       $(this).parent().remove();
    });
    // delete product end
    // private cab animation
    $('.priv_col_name').click(function () {
       $(this).parent().children('.priv_col_open').slideToggle(300);
    });
    // input animation
    $('.private_input').bind('input', function () {
        $(this).parent().children('span').css('width', '100%');
    });
    // private cab animation end

    // wish_delete animation
    $('.wish_prod').hover(function () {
       $(this).children('.delete_product').toggleClass('wish_del_hov');
    });
    // wish_delete animation end
});

// DOCUMENT RESIZE
$(window).resize(function () {

});

$('.fancybox').fancybox({
    padding : 0,
    openEffect  : 'elastic',
    closeBtn: true
});

new WOW().init();

