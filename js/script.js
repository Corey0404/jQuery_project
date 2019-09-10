$(document).ready(function(){
    $('.main_btna').on('click', function(){
        $('.overlay').show('slow');
        $('.modal').slideDown("slow");
    });

    $('span').on('click', function(){
        $('.overlay').hide('slow');
        $('.modal').slideUp("slow");
    });

    $('.main_btn').on('click', function(){
        $('.overlay').show('slow');
        $('.modal').slideDown("slow");
    });

    $('li:nth-child(2)').on('click', function(){
        $('.overlay').show('slow');
        $('.modal').slideDown("slow");
    });
});