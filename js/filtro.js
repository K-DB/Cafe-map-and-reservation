
// changing

$(function(){
    $('.filter').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        let valor = $(this).attr('data-name');

        if(valor == 'all') {
            $('.cont-cafe').show('1000')
        } else {
            $('.cont-cafe').not('.' + valor).hide('1000');
            $('.cont-cafe').filter('.' + valor).show('1000');
        }

    });

    let about = $('#about').offset().top,
        map = $('#map').offset().top,
        find = $('#find').offset().top,
        recipe = $('#recipe').offset().top,
        contact = $('#contact').offset().top;
    
    window.addEventListener('resize', function(){
        letabout = $('#about').offset().top,
        map = $('#map').offset().top,
        find = $('#find').offset().top,
        recipe = $('#recipe').offset().top,
        contact = $('#contact').offset().top;
    });

    $('#link-intro').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $('#link-about').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: about + 10
        }, 600);
    });

    $('#link-map').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: map - 35
        }, 600);
    });

    $('#link-find').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: find - 35
        }, 600);
    });

    $('#link-recipe').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: recipe - 35
        }, 600);
    });

    $('#link-contact').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contact - 40
        }, 600);
    });
});

