$(function() {
    // Hide address bar on IOs
    // hideBar();

    // Apply background images from data attributes
    // backgoundInit();

    // Affix
    // affixInit();

    // Portfolio hovers
    // portfolioHovers();

    // Portfolio filters
    // portfolioFilters();


    // Icon hovers
    // iconHovers();

    // setup contact form
    // setupContactForm();

    // creeate twitter feeds
    // createTwitter();

    initMap();

});

$(window).load(function() {
    // Initallize flexslider
    // flexInit();

    // selector for ie rounded images fallback
    if (window.PIE) {
        $('.img-circle , .flex-control-nav a , .well-package-heading , span.tag').each(function() {
            PIE.attach(this);
        });

        $('.img-circle').on('mouseenter',function(){
            $(this).prev().addClass('opaque');
        });
        $('.img-circle').on('mouseleave',function(){
           if (!$(this).closest('li').hasClass('inactive'))
                $(this).prev().removeClass('opaque');
        });
        //extra case for squeared portfolio.
        $('.post-media img , .no-rounded a').on('mouseenter',function(){
            $(this).addClass('opaque');
        });
        $('.post-media img').on('mouseleave',function(){
            $(this).removeClass('opaque');
        });
        // extra case for squared portfolio.
        $('.no-rounded a').on('mouseleave',function(){
            if (!$(this).closest('li').hasClass('inactive'))
                $(this).removeClass('opaque');
        });

        // timeline ie8 selectors fix
        $('#timeline .timeline-item:nth-child(even)').addClass('pull-right');
        $('#timeline .timeline-item:nth-child(even) .post').css({'margin-left': '80px' ,'margin-right': '0'});
        $('#timeline .timeline-item:nth-child(even) .post-info').css({'left': 'auto' ,'right': '100%'});
        $('#timeline .timeline-item:nth-child(even) .post-arrow').css({'left': 'auto' ,'right': '100%','background-image':'url("images/timeline-arrow-left.png")'});
        $('.thumbnails > .span2:nth-child(2n+1), .thumbnails > .span3:nth-child(4n+1), .thumbnails > .span4:nth-child(3n+1)').css({'margin-left':'0','clear':'both'});
    }
});

function initMap() {
    var styles = [
      {
          stylers: [
              { saturation: -85 }
          ]
      },{
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
              { hue: "#002bff" },
              { visibility: 'simplified' }
          ]
      },{
          featureType: 'road',
          elementType: 'labels',
          stylers: [
              { visibility: 'off' }
          ]
      }
    ],
    // put locations lat and long here
    lat = 34.4208,
    lng = -119.6972,

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    styledMap = new google.maps.StyledMapType(styles,
        {name: 'Styled Map'}),

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    mapOptions = {
        zoom: 14,
        scrollwheel: false,
        center: new google.maps.LatLng( lat, lng ),
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        }
    },
    map = new google.maps.Map(document.getElementById('map'), mapOptions),
    charlotte = new google.maps.LatLng( lat, lng ),

    marker = new google.maps.Marker({
      position: charlotte,
      map: map,
      title: "Hello World!"
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
}

function flexInit() {
    $('.flexslider[id]').each(function() {
        // We use data atributes on the flexslider items to control the behaviour of the slideshow
        var slider = $(this),

            //data-slideshow: defines if the slider will start automatically (true) or not
            sliderShow = slider.attr('data-flex-slideshow') == "false" ? false : true,

            //data-flex-animation: defines the animation type, slide (default) or fade
            sliderAnimation = !slider.attr('data-flex-animation') ? "slide" : slider.attr('data-flex-animation'),

            //data-flex-speed: defines the animation speed, 7000 (default) or any number
            sliderSpeed = !slider.attr('data-flex-speed') ? 7000 : slider.attr('data-flex-speed'),

            //data-flex-directions: defines the visibillity of the nanigation arrows, hide (default) or show
            sliderDirections = slider.attr('data-flex-directions') == "hide" ? false : true,

            //data-flex-directions-type: defines the type of the direction arrows, fancy (with bg) or simple
            sliderDirectionsType = slider.attr('data-flex-directions-type') == "fancy" ? "flex-directions-fancy" : "",

            //data-flex-directions-position: defines the positioning of the direction arrows, default (inside the slider) or outside the slider
            sliderDirectionsPosition = slider.attr('data-flex-directions-position') == "outside" ? "flex-directions-outside" : "",

            //data-flex-controls: defines the visibillity of the nanigation controls, hide (default) or show
            sliderControls = slider.attr('data-flex-controls') == "hide" ? false : true,

            //data-flex-controlsposition: defines the positioning of the controls, inside (default) absolute positioning on the slideshow, or outside
            sliderControlsPosition = slider.attr('data-flex-controlsposition') == "inside" ? "flex-controls-inside" : "flex-controls-outside",

            //data-flex-controlsalign: defines the alignment of the controls, center (default) left or right
            sliderControlsAlign = !slider.attr('data-flex-controlsalign') ? "flex-controls-center" : 'flex-controls-' + slider.attr('data-flex-controlsalign'),

            //data-flex-itemwidth: the width of each item in case of a multiitem carousel, 0 (default for 100%) or a nymber representing pixels
            sliderItemWidth = !slider.attr('data-flex-itemwidth') ? 0 : parseInt(slider.attr('data-flex-itemwidth')),

            //data-flex-itemmax: the max number of items in a carousel
            sliderItemMax = !slider.attr('data-flex-itemmax') ? 0 : parseInt(slider.attr('data-flex-itemmax')),

            //data-flex-itemmin: the max number of items in a carousel
            sliderItemMin = !slider.attr('data-flex-itemmin') ? 0 : parseInt(slider.attr('data-flex-itemmin'));

        //assign the positioning classes to the navigation
        slider.addClass(sliderControlsPosition).addClass(sliderControlsAlign).addClass(sliderDirectionsType).addClass(sliderDirectionsPosition);

        slider.flexslider({
            slideshow: sliderShow,
            animation: sliderAnimation,
            animationSpeed: 2000,
            slideshowSpeed: sliderSpeed,
            itemWidth: sliderItemWidth,
            minItems: sliderItemMin,
            maxItems: sliderItemMax,
            controlNav: sliderControls,
            directionNav: sliderDirections,
            prevText: "",
            nextText: "",
            smoothHeight: true,
            useCSS : false
        });

        $('.flex-active-slide figcaption').css('backgound', 'red');
    });
}

// function to init the affix
function affixInit() {
    $('.docs-sidebar-nav').affix({
        offset: {
            top: function() {
                return $('#docs-start-here').offset().top;
            }
            //bottom:250
        }
    });
}

// funcrion to hide the address bar on mobile devices
function hideBar() {
    if( ( navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i) ) ) {
        if(window.addEventListener){
            window.addEventListener("load",function() {
                // Set a timeout...
                setTimeout(function(){
                    // Hide the address bar!
                    window.scrollTo(0, 1);
                }, 0);
            });
        }
    }
}

// Function to set data background images
function backgoundInit() {
    $('[data-background]').each(function() {
        var element = $(this);

        element.css('background', element.attr('data-background'));

        if ( element.attr('data-background-size') == "full" ) {
            element.css('background-size', '100%');
            element.css('background-attachment', 'fixed');
        };

    } );
}

// Function to handle the popovers in portfolio
function portfolioHovers() {
    $('.portfolio figure').find('a').on('mouseenter', function(){
        $(this).find('i').animate({
            top: '50%'
            }, 300
        );
    });
    $('.portfolio figure').find('a').on('mouseleave', function(){
        $(this).find('i').animate({
            top: '120%'
            }, 300, function() {
                $(this).css('top', '-100px');
            }
        );
    });
}

// Function to change Social icon colors on hover
function iconHovers(){
    $('[data-iconcolor]').each(function(){
        var element         = $(this);
        var original_color  =$(element).css('color');
        element.on('mouseenter', function(){
            element.css('color' , element.attr('data-iconcolor'));
        });
        element.on('mouseleave', function(){
            element.css('color' ,original_color);
        })

    });
}

// Function to handle the portfolio filters
function portfolioFilters() {
    var filters = $('.portfolio-filters');

    filters.on('click', 'a', function(e) {
        var active = $(this),
            portfolio = filters.next().find('.portfolio');
            activeClass = active.data('filter');


        filters.find('a').removeClass('active');
        active.addClass('active');

        if ( activeClass == 'all') {
            portfolio.find('li').removeClass('inactive');
        } else {
            portfolio.find('li').removeClass('inactive').not('.filter-' + activeClass ).addClass('inactive');
        }

        // manage PIE filters in case of ie8
        if (window.PIE) {
            // remove opacity from all PIE images
            $('ul.portfolio li a.box-inner').each(function(index,val){
            $(this).children().first().removeClass('opaque'); });
            // add opacity to the inactive ones
            $('ul.portfolio li.inactive a.box-inner').each(function(index,val){
            $(this).children().first().addClass('opaque'); });

            // for the squeared portfolio.
            $('ul.portfolio li .no-rounded a').each(function(index,val){
            $(this).removeClass('opaque'); });
            // add opacity to the inactive ones
            $('ul.portfolio li.inactive .no-rounded a').each(function(index,val){
            $(this).addClass('opaque'); });
        }
        e.preventDefault();
    });
}

function setupContactForm() {
    // bind submit handler to form
    $('#contactForm').on('submit', function(e) {
        // prevent native submit
        e.preventDefault();
        // clear all inputs tooltips
        $( ':input' ).tooltip( 'destroy' );
        // clear all errors
        $( '.control-group' ).removeClass( 'error' );

        // submit the form
        $(this).ajaxSubmit({
            url: 'contact_me.php',
            type: 'post',
            dataType: 'json',
            beforeSubmit: function() {
                // disable submit button
                $( ':input[name="submitButton"]' ).attr( 'disabled','disabled' );
            },
            success: function( response, status, xhr, form ) {
                if( response.status == "ok" ) {
                    // mail sent ok - display sent message
                    for( var msg in response.messages ) {
                        showInputMessage( response.messages[msg], 'success' );
                    }
                    // clear the form
                    form[0].reset();
                }
                else {
                    for( var error in response.messages ) {
                        showInputMessage( response.messages[error], 'error' );
                    }
                }
                // make button active
                $( ':input[name="submitButton"]' ).removeAttr( 'disabled' );
            },
            error: function() {
                for( var error in response.messages ) {
                    showInputMessage( response.messages[error], 'error' );
                }
                // make button active
                $( ':input[name="submitButton"]' ).removeAttr( 'disabled' );
            }
        })
        return false;
    });
}

function showInputMessage( message, status ) {
    var $input = $(':input[name="' + message.field + '"]');
    $input.tooltip( { title: message.message, placement : message.placement, trigger: 'manual' } );
    $input.tooltip( 'show' );
    $input.parents( '.control-group' ).addClass( status );
}

function createTwitter() {
    $( '.twitter-feed' ).each( function() {
        $( this ).tweet({
            count: 3,
            username: 'tweepsum',
            loading_text: "searching twitter...",
            template: '<i class="icon-twitter"></i>{text} <small class="info text-italic"> {time}</small>'
        });
    });
}
;
