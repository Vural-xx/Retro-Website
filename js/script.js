 $(document).ready(function() {
    /**
    * Skript liest die Scrollposition beim scrollvorgang und weist dem banner die css-Klasse
    * 'banner-hidden' zu oder entfernt sie je nach scrollposition wieder. Dadurch klappt der Banner
    * beim runterscrollen zusammen und beim hochscrollen wieder auf.
    */
    $(window).scroll(function () {
      var tempScrollTop = $(window).scrollTop();
      if (tempScrollTop > 100){
        $("#banner").addClass("banner-hidden"); 
      }else if (tempScrollTop < 30){
         $("#banner").removeClass("banner-hidden"); 
      }
    });
  });