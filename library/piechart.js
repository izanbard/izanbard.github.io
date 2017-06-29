var showHide = function(element) {
    $('img').hide();
    $('#'+element).show();
};

$(document).ready(function () {
    $('img[usemap]').rwdImageMaps();
    $('#main').show();
    $('area').mouseenter(function(){
        element = $(this).attr('class');
        showHide(element);
    });
});
