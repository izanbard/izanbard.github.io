var showHide = function(element) {
    $('img').hide();
    $('#'+element).show();
};

$(document).ready(function () {
    $('img[usemap]').rwdImageMaps();

    $('area').mouseenter(function(){
        element = $(this).attr('class');
        showHide(element);
    });
});
