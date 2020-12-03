
function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

function adjustStyle(getWidth) {
    width = parseInt(getWidth);
    if (width < 700) {
        $("#size-stylesheet").attr("href", "css/narrow.css");
    } else if ((width >= 701) && (width < 900)) {
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

console.log(getWidth())
