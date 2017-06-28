(function($){

  "use strict";

  $(window).load(function() {

    // Preloader
    $('.loader').fadeOut();
    $('.loader-mask').delay(350).fadeOut('slow');

    $(window).trigger("resize");
    masonry();
    initOwlCarousel();
    initMasonry();
    wow.init();

  });


  $(window).resize(function(){

    container_full_height_init();
    $.stellar('refresh');
    megaMenu();
    megaMenuWide();
    
    var windowWidth = $(window).width();
    if (windowWidth <= 974) {
      $('.dropdown-toggle').attr('data-toggle', 'dropdown');
      $('.navigation').removeClass("sticky");
    }
    if (windowWidth > 974) {
      $('.dropdown-toggle').removeAttr('data-toggle', 'dropdown');
      $('.dropdown').removeClass('open');
    }

    /* Mobile Menu Resize
    -------------------------------------------------------*/
    $(".navbar .navbar-collapse").css("max-height", $(window).height() - $(".navbar-header").height() );
    
  });


  /* Sticky Navigation
  -------------------------------------------------------*/
  $(window).scroll(function(){

    var windowWidth = $(window).width();    
    if ($(window).scrollTop() > 190 & windowWidth > 974){
      $('.navigation').addClass("sticky");
      $('.logo-wrap').addClass("shrink");
    } else {
      $('.navigation').removeClass("sticky");
      $('.logo-wrap').removeClass("shrink");
    }

    if ($(window).scrollTop() > 200 & windowWidth > 974){
      $('.navigation').addClass("offset");
    } else {
      $('.navigation').removeClass("offset");
    }

    if ($(window).scrollTop() > 500 & windowWidth > 974){
      $('.navigation').addClass("scrolling");
    } else {
      $('.navigation').removeClass("scrolling");
    }


    if ($(window).scrollTop() > 190 ){
      $('.navbar-fixed-top').addClass("sticky");
    } else {
      $('.navbar-fixed-top').removeClass("sticky");
    }

  });

  /* Onepage Nav
  -------------------------------------------------------*/
  $('.onepage-nav .navbar-collapse ul li a').on('click',function() {
    $(".navbar-collapse").collapse('hide');
  });


  // Smooth Scroll Navigation
  $('.local-scroll').localScroll({offset: {top: -60},duration: 1500,easing:'easeInOutExpo'});


  /* Full screen Navigation
  -------------------------------------------------------*/
  $('#nav-icon, .overlay-menu').on("click", function(){
    $('#nav-icon, #overlay').toggleClass('open');

    $(function(){
   
    var delay = 0

      $('.overlay-menu > ul > li').each(function(){
        $(this).css({animationDelay: delay+'s'})
        delay += 0.1
      })
 
    })

  });


  /* Bootstrap Dropdown Navigation
  -------------------------------------------------------*/
  "use strict";!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function b(b){this.$element=a(b),this.$main=this.$element.closest(".dropdown, .dropup, .btn-group"),this.$menu=this.$element.parent(),this.$drop=this.$menu.parent().parent(),this.$menus=this.$menu.siblings(".dropdown-submenu");var d=this.$menu.find("> .dropdown-menu > "+c);this.$submenus=d.filter(".dropdown-submenu"),this.$items=d.not(".dropdown-submenu"),this.init()}var c=":not(.disabled, .divider, .dropdown-header)";return b.prototype={init:function(){this.$element.on({"click.bs.dropdown":this.click.bind(this),keydown:this.keydown.bind(this)}),this.$menu.on("hide.bs.submenu",this.hide.bind(this)),this.$items.on("keydown",this.item_keydown.bind(this)),this.$menu.nextAll(c+":first:not(.dropdown-submenu)").children("a").on("keydown",this.next_keydown.bind(this))},click:function(a){a.stopPropagation(),this.toggle()},toggle:function(){this.$menu.hasClass("open")?this.close():(this.$menu.addClass("open"),this.$menus.trigger("hide.bs.submenu"))},hide:function(a){a.stopPropagation(),this.close()},close:function(){this.$menu.removeClass("open"),this.$submenus.trigger("hide.bs.submenu")},keydown:function(a){if(/^(32|38|40)$/.test(a.keyCode)&&a.preventDefault(),/^(13|32)$/.test(a.keyCode))this.toggle();else if(/^(27|38|40)$/.test(a.keyCode))if(a.stopPropagation(),27==a.keyCode)this.$menu.hasClass("open")?this.close():(this.$menus.trigger("hide.bs.submenu"),this.$drop.removeClass("open").children("a").trigger("focus"));else{var b=this.$main.find("li:not(.disabled):visible > a"),c=b.index(a.target);if(38==a.keyCode&&0!==c)c--;else{if(40!=a.keyCode||c===b.length-1)return;c++}b.eq(c).trigger("focus")}},item_keydown:function(a){27==a.keyCode&&(a.stopPropagation(),this.close(),this.$element.trigger("focus"))},next_keydown:function(a){if(38==a.keyCode){a.preventDefault(),a.stopPropagation();var b=this.$drop.find("li:not(.disabled):visible > a"),c=b.index(a.target);b.eq(c-1).trigger("focus")}}},a.fn.submenupicker=function(c){var d=this instanceof a?this:a(c);return d.each(function(){var c=a.data(this,"bs.submenu");c||(c=new b(this),a.data(this,"bs.submenu",c))})}});
  $('.dropdown-submenu > a').submenupicker();


  /* Search
  -------------------------------------------------------*/
  $('.search-trigger').on('click',function(e){
    e.preventDefault();
    $('.search-wrap').animate({opacity: 'toggle'},500);
    $('.nav-search, #search-close').addClass("open");
    $('.search-wrap .form-control').focus();

  });

  $('.search-close').on('click',function(e){
    e.preventDefault();
    $('.search-wrap').animate({opacity: 'toggle'},500);
    $('.nav-search, #search-close').removeClass("open");

  });

  function closeSearch(){
    $('.search-wrap').fadeOut(200);
    $('.nav-search, #search-close').removeClass("open");
  }
    
  $(document.body).on('click',function(e) {
    closeSearch();
  });

  $(".search-wrap, .search-trigger").on('click',function(e) {
    e.stopPropagation();
  });



  /* Sidenav
  -------------------------------------------------------*/

  $(".nav-icon-trigger, #sidenav-close").on('click', function(e) {
    e.preventDefault();
    $(".sidenav").toggleClass('opened');
    $('.main-wrapper').toggleClass('sidenav-opened');
  });

  $("#sidenav-close").on('click', function() {
    $('#nav-icon').removeClass('open');
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() ){
      $(".sidenav").removeClass('opened');
      $('.main-wrapper').removeClass('sidenav-opened');
      $('#nav-icon').removeClass('open');
    } else {
      return false;
    }
  });


  /* Mobile Navigation 
  -------------------------------------------------------*/
  $('.dropdown-toggle').on('click', function(e){ e.preventDefault(); });
  

  /* Mobile Detect
  -------------------------------------------------------*/
  if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
     $("html").addClass("mobile");
     $('.dropdown-toggle').attr('data-toggle', 'dropdown');
  }
  else {
    $("html").removeClass("mobile");
  }

  /* IE Detect
  -------------------------------------------------------*/
  if(Function('/*@cc_on return document.documentMode===10@*/')()){ $("html").addClass("ie"); }


  /* Mega Menu
  -------------------------------------------------------*/
  function megaMenu(){

    $('.megamenu').each(function () {
      $(this).css('width', $('.container').width());
      var offset = $(this).closest('.dropdown').offset();
      offset = offset.left;
      var containerOffset = $(window).width() - $('.container').outerWidth();
      containerOffset = containerOffset /2;
      offset = offset - containerOffset - 15;
      $(this).css('left', -offset);
    });

  }

  function megaMenuWide(){

    $('.megamenu-wide').each(function () {
      $(this).css('width', $('.container-fluid').width());
      var offset = $(this).closest('.dropdown').offset();
      offset = offset.left;
      var containerOffset = $(window).width() - $('.container-fluid').outerWidth();
      containerOffset = containerOffset /2;
      offset = offset - containerOffset - 50;
      $(this).css('left', -offset);
    });

  }


  /* Text Rotator
  -------------------------------------------------------*/
  $(".rotate").textrotator({
    animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ",",
    speed: 3000 
  });


  /* Typing Text
  -------------------------------------------------------*/
  $(function(){
      $(".typing-text").typed({
        strings: ["Landing Page", "Startup Site", "Onepage"],
        typeSpeed: 30,
        backDelay: 1500,
        loop: true
      });
  });


  /* Counters
  -------------------------------------------------------*/
  $('.statistic').appear(function() {
    $('.timer').countTo({
      speed: 4000,
      refreshInterval: 60,
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      }
    });
  });


  /* Owl Carousel
  -------------------------------------------------------*/

  function initOwlCarousel(){
    (function($){
      "use strict";

      /* Promo with Laptop
      -------------------------------------------------------*/
      var owlpromo = $("#owl-promo")
      owlpromo.owlCarousel({

        pagination: false,
        singleItem: true

      })


      /* Featured Works
      -------------------------------------------------------*/
      $("#owl-featured-works").owlCarousel({

        pagination: false,
        navigation: true,
        navigationText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        itemsCustom: [
          [0, 1],      
          [550, 2],
          [700, 2],
          [850, 2],
          [1000, 3],
          [1200, 4],
          [1600, 4]
        ],

      })


      /* Testimonials
      -------------------------------------------------------*/

      $("#owl-testimonials").owlCarousel({
      
        navigation: true,
        navigationText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        autoHeight: true,
        slideSpeed: 300,
        pagination: true,
        paginationSpeed: 400,
        singleItem: true,
        stopOnHover: true
      
      })

      // 2 Boxes
      $("#owl-testimonials-boxes-2").owlCarousel({
      
        navigation: false,
        slideSpeed: 300,
        pagination: true,
        paginationSpeed: 400,
        stopOnHover: true,
        itemsCustom: [
          [0, 1],      
          [450, 1],
          [700, 2],
          [1200, 2]
        ],
      
      })

      // 1 Box
      $("#owl-testimonials-box").owlCarousel({
      
        navigation: false,
        slideSpeed: 300,
        pagination: true,
        singleItem: true,
        stopOnHover: true
      
      })

      // 3 Boxes
      $("#owl-testimonials-boxes-3").owlCarousel({
      
        navigation: false,
        slideSpeed: 300,
        pagination: true,
        paginationSpeed: 400,
        stopOnHover: true,
        itemsCustom: [
          [0, 1],      
          [450, 1],
          [700, 2],
          [1200, 3]
        ],
      
      })


      /* Partners Logo
      -------------------------------------------------------*/

      $("#owl-partners").owlCarousel({

        autoPlay: 3000,
        pagination: false,
        itemsCustom: [
          [0, 2],
          [370, 3],
          [550, 4],
          [700, 5],
          [1000, 6]
        ],

      })


      /* Shop Items Slider
      -------------------------------------------------------*/

      $("#owl-shop-items-slider").owlCarousel({

        pagination: false,
        navigation: true,
        navigationText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        itemsCustom: [
          [0, 1],
          [370, 2],
          [550, 3],
          [700, 4],
          [1000, 4]
        ],

      })


      /* Team Slider
      -------------------------------------------------------*/

      $("#owl-team-slider").owlCarousel({

        pagination: true,
        navigation: false,
        navigationText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        itemsCustom: [
          [0, 1],
          [370, 2],
          [550, 3],
          [700, 4],
          [1000, 4]
        ],

      })


      /* Single Image
      -------------------------------------------------------*/

      $("#owl-single").owlCarousel({
     
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
     
      })

      // Custom Navigation Events
      $(".next").on('click',function(){
        owlpromo.trigger('owl.next');
      })
      $(".prev").on('click',function(){
        owlpromo.trigger('owl.prev');
      });


    })(jQuery);
  };


  /* FlexSlider
  -------------------------------------------------------*/

  function masonry() {
    var $container = $('.masonry');
    $container.imagesLoaded( function() {
      $container.isotope({
        itemSelector: '.masonry-item',
        layoutMode: 'masonry'
      });
    });
  }


  // Tabs Slider
  $('#tabs-slider').flexslider({
    animation: "slide",
    manualControls: ".flex-control-nav li",
    useCSS: false, /* Chrome fix*/
    animationSpeed: 200,
    touch: true,
    directionNav: false,
    slideshow: false
  });

   
  // Flexslider / Masonry
  $('#flexslider').flexslider({
    animation: "slide",
    directionNav: true,
    touch: true,
    slideshow: false,
    prevText: ["<i class='ti-angle-left'></i>"],
    nextText: ["<i class='ti-angle-right'></i>"],
    start: function(){
      var $container = $('.masonry');
      $container.imagesLoaded( function() {
        $container.isotope({
          itemSelector: '.masonry-item',
          layoutMode: 'masonry'
        });
      });
    }
  });


  /* Flickity Slider
  -------------------------------------------------------*/

  var $gallery = $('#showcases-slider').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: false,
    percentPosition: true,
    imagesLoaded: true,
    lazyLoad: 1,
    pageDots: true,
    selectedAttraction : 0.1,
    friction: 0.6,
    rightToLeft: false,
    arrowShape: 'M 10,50 L 55,95 L 60,90 L 20,50  L 60,10 L 55,5 Z'
  });


  // main large image (shop product)
  var $gallery = $('#gallery-main').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: true,
    percentPosition: true,
    imagesLoaded: true,
    lazyLoad: 1,
    pageDots: false,
    selectedAttraction : 0.1,
    friction: 0.6,
    rightToLeft: false,
    arrowShape: 'M 10,50 L 60,100 L 65,95 L 20,50  L 65,5 L 60,0 Z'
  });

  // thumbs
  $('.gallery-thumbs').flickity({
    asNavFor: '#gallery-main',
    contain: true,
    cellAlign: 'left',
    wrapAround: false,
    autoPlay: false,
    prevNextButtons: false,
    percentPosition: true,
    imagesLoaded: true,
    pageDots: false,
    selectedAttraction : 0.1,
    friction: 0.6,
    rightToLeft: false
  });


  // magnific popup bug fix
  var popupItems = $.map( $gallery.find('.gallery-cell a'), function( link ) {
    return {
      src: link.href,
      type: $(link).attr('data-popup-type') || 'image'
    }
  });

  $gallery.on('staticClick', function(event, pointer, cellElement, cellIndex) {
    if (!cellElement) {
      return;
    }
    $.magnificPopup.open({
      items: popupItems,
      gallery: {
        enabled: true
      },
      callbacks: {
        open: function () {
          $.magnificPopup.instance.goTo( cellIndex );
        }
      }
    });
  });

  // prevent links from opening
  $gallery.on( 'click', 'a', function(event) {
    event.preventDefault();
  });


  /* Payment Method Accordion
  -------------------------------------------------------*/
  var Methods = $(".payment_methods > li > .payment_box").hide();
  Methods.first().slideDown("easeOutExpo");
  
  $(".payment_methods > li > input").change(function(){

    var current = $(this).parent().children(".payment_box");
    Methods.not(current).slideUp("easeInExpo");
    $(this).parent().children(".payment_box").slideDown("easeOutExpo");
    
    return false;
     
  });


  /* Quantity
  -------------------------------------------------------*/
  $(function() {

    // Increase
    jQuery(document).on('click', '.plus', function(e) {
      e.preventDefault();
      var quantityInput = jQuery(this).parents('.quantity').find('input.qty'),
        newValue = parseInt(quantityInput.val(), 10) + 1,
        maxValue = parseInt(quantityInput.attr('max'), 10);

      if (!maxValue) {
        maxValue = 9999999999;
      }

      if ( newValue <= maxValue ) {
        quantityInput.val(newValue);
        quantityInput.change();
      }
    });

    // Decrease
    jQuery(document).on('click', '.minus', function(e) {
      e.preventDefault();
      var quantityInput = jQuery(this).parents('.quantity').find('input.qty'),
        newValue = parseInt(quantityInput.val(), 10) - 1,
        minValue = parseInt(quantityInput.attr('min'), 10);
      
      if (!minValue) {
        minValue = 1;
      }

      if ( newValue >= minValue ) {
        quantityInput.val(newValue);
        quantityInput.change();
      }
    });

  });



  /* Progress Bars
  -------------------------------------------------------*/
  var $section = $('#animated-skills').appear(function() {

    var bar = $('.progress-bar');
    var bar_width = $(this);
  
    function loadDaBars() { 
         
      $(bar).each(function(){
        bar_width = $(this).attr('aria-valuenow');
        $(this).width(bar_width + '%');
      });
    }
    loadDaBars();
  });


  /* Pie Charts
  -------------------------------------------------------*/
  $('.chart').appear(function() {

    $(this).easyPieChart({

      animate:{
      duration:1500,
      enabled:true
      },
      scaleColor:false,
      trackColor:'#f5f5f5',
      easing: 'easeOutBounce',
      lineWidth: 3,
      size: 160,
      lineCap: 'square',

      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });
    var chart = window.chart = $('.chart').data('easyPieChart');
    $('.js_update').on('click', function() {
      chart.update(Math.random()*200-100);
    });
  });

  
  /* Accordion
  -------------------------------------------------------*/
  function toggleChevron(e) {
    $(e.target)
      .prev('.panel-heading')
      .find("a")
      .toggleClass('plus minus');
  }
  $('#accordion').on('hide.bs.collapse', toggleChevron);
  $('#accordion').on('show.bs.collapse', toggleChevron);


  /* Toggle
  -------------------------------------------------------*/
  var allToggles = $(".toggle > .panel-content").hide();
  
  $(".toggle > .acc-panel > a").on('click', function(){

    if ($(this).hasClass("active")) {
      $(this).parent().next().slideUp("easeOutExpo");
      $(this).removeClass("active");
    }

    else {
      $(this).parent().next(".panel-content");
      $(this).addClass("active");
      $(this).parent().next().slideDown("easeOutExpo");
    }
    
    return false;       
  });


  /* Nav Toggles
  -------------------------------------------------------*/
  $(".nav-item-submenu").hide();

  $(".nav-item-toggle > a").on('click', function(e){
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).next().slideUp("easeOutExpo");
      $(this).removeClass("active");
    }

    else {
      $(this).next(".nav-item-submenu");
      $(this).addClass("active");
      $(this).next().slideDown("easeOutExpo");
    }

  });

  /* Lightbox popup
  -------------------------------------------------------*/

  $('.lightbox-gallery').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    },
    image: {
      titleSrc: 'title',
      verticalFit: true
    }
  });


  $(".lightbox-video").magnificPopup();


  /* Tooltip
  -------------------------------------------------------*/
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


  /* Portfolio Isotope
  -------------------------------------------------------*/

  var $portfolio = $('#portfolio-container');
  $portfolio.imagesLoaded( function() {     
    $portfolio.isotope({
      isOriginLeft: true,
      stagger: 30
    });
    $portfolio.isotope();

  });

  // Isotope filter
  $('.portfolio-filter').on( 'click', 'a', function(e) {
    e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $portfolio.isotope({ filter: filterValue });

    $('.portfolio-filter a').removeClass('active');
    $(this).closest('a').addClass('active');

  });


  /* Masonry
  -------------------------------------------------------*/
  function initMasonry(){

      var $masonry = $('.masonry-grid');
      $masonry.imagesLoaded( function() {
          $masonry.isotope({
              itemSelector: '.work-item',
              layoutMode: 'masonry',
              percentPosition: true,
              resizable: false,
              isResizeBound: false,
              masonry: { columnWidth: '.work-item.quarter' }
          });

      });

      $masonry.isotope();
  }


  /* Grid/list Switch
  -------------------------------------------------------*/
  function get_grid(){
     $('.list').removeClass('list-active');
     $('.grid').addClass('grid-active');
     $('.product-item').animate({opacity:0},function(){
     $('.shop-catalogue').removeClass('list-view').addClass('grid-view');
     $('.product').addClass('product-grid').removeClass('product-list');
     $('.product-item').stop().animate({opacity:1});
     });
  }

  function get_list(){
    $('.grid').removeClass('grid-active');
    $('.list').addClass('list-active');
    $('.product-item').animate({opacity:0},function(){
      $('.shop-catalogue').removeClass('grid-view').addClass('list-view');
      $('.product').addClass('product-list').removeClass('product-grid');
      $('.product-item').stop().animate({opacity:1});
    });
  }

  $('#list').on('click', function(){   
    get_list();
  });

  $('#grid').on('click', function(){ 
    get_grid();
  });


  /* Price Slider
  -------------------------------------------------------*/

  /*! jQuery UI - v1.11.4 - 2015-07-16
  * http://jqueryui.com
  * Includes: core.js, widget.js, mouse.js, slider.js
  * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

  (function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var s=0,n=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,a=n.call(arguments,1),o=0,r=a.length;r>o;o++)for(i in a[o])s=a[o][i],a[o].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(a){var o="string"==typeof a,r=n.call(arguments,1),h=this;return o?this.each(function(){var i,n=e.data(this,s);return"instance"===a?(h=n,!1):n?e.isFunction(n[a])&&"_"!==a.charAt(0)?(i=n[a].apply(n,r),i!==n&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+a+"'")}):(r.length&&(a=e.widget.extend.apply(null,[a].concat(r))),this.each(function(){var t=e.data(this,s);t?(t.option(a||{}),t._init&&t._init()):e.data(this,s,new i(a,this))})),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var a=!1;e(document).mouseup(function(){a=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!a){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),a=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),a=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),e.widget("ui.slider",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!i),this._super(t,i),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),i=this.options.step,s=Math.floor(+(e-t).toFixed(this._precision())/i)*i;e=s+t,this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(t){var i,s,n,a,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),i=this._start(t,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(t,o,n)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}})});


  $(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1500,
      values: [ 160, 800 ],
      slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  });


  /* Parallax
  -------------------------------------------------------*/

  $.stellar({
    horizontalScrolling: false,
    hideDistantElements: false
  });


  $(window).load(function() {     

    setTimeout(function() {
      $.stellar('refresh');
    }, 1000);

  });


  // Wow Animations

  var wow = new WOW({
    offset: 50,
    mobile: false
  });

  

  /* FitVIds
  -------------------------------------------------------*/
  $(".video-wrap").fitVids();


  /* Contact Form
  -------------------------------------------------------*/

  var submitContact = $('#submit-message'),
    message = $('#msg');

  submitContact.on('click', function(e){
    e.preventDefault();

    var $this = $(this);
    
    $.ajax({
      type: "POST",
      url: 'contact.php',
      dataType: 'json',
      cache: false,
      data: $('#contact-form').serialize(),
      success: function(data) {

        if(data.info !== 'error'){
          $this.parents('form').find('input[type=text],input[type=email],textarea,select').filter(':visible').val('');
          message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
        } else {
          message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
        }
      }
    });
  });


})(jQuery);


/* Scroll to Top
-------------------------------------------------------*/

(function() {
  "use strict";

  var docElem = document.documentElement,
    didScroll = false,
    changeHeaderOn = 550;
    document.querySelector( '#back-to-top' );
  function init() {
    window.addEventListener( 'scroll', function() {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 50 );
      }
    }, false );
  }
  
})();

$(window).scroll(function(event){
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $("#back-to-top").addClass("show");
  } else {
    $("#back-to-top").removeClass("show");
  }

});

$('a[href="#top"]').on('click',function(){
  $('html, body').animate({scrollTop: 0}, 1350, "easeInOutQuint");
  return false;
});


/* Full Height Container
-------------------------------------------------------*/

function container_full_height_init(){
  (function($){
    $(".container-full-height").height($(window).height());
  })(jQuery);
}