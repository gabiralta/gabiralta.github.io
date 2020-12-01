function adjustStyle(width) {
    width = parseInt(width);
    if (width < 400) {
        $("#size-stylesheet").attr("href", "css/narrow.css");
    } else if ((width >= 401) && (width < 900)) {
        $("#size-stylesheet").attr("href", "css/style.css");
    } else {
       $("#size-stylesheet").attr("href", "css/style.css"); 
    }
}

$(function() {
    adjustStyle($(this).width());
    $(window).resize(function() {
        adjustStyle($(this).width());
    });
});

