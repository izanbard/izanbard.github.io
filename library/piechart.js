var showHide = function(element) {
    $('img').hide();
    $('#'+element).show();
};

$(document).ready(function () {
    $('area').mouseenter(function(){
        element = $(this).attr('class');
        showHide(element);
    });
});
