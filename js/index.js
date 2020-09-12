$(window).on('scroll', function(){
    if($(window).scrollTop()) {
        $('header').addClass('black');
    }
    else {
        $('header').removeClass('black');
    }
})

// var counter = 1;
//     setInterval(function(){
//       document.getElementById('radio' + counter).checked = true;
//       counter++;
//       if(counter > 5){
//         counter = 1;
//       }
//     }, 2500);


    $(document).ready(function() {
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
      });
});

// Scrolling Effect

$(window).on("scroll", function() {
      if($(window).scrollTop()) {
            $('nav').addClass('col');
      }

      else {
            $('nav').removeClass('col');
      }
});


var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 5){
        counter = 1;
      }
    }, 4000);


    $(document).ready(function() {
      $("a.nav-link").click(function () { 
          $("html, body").animate ({  
          scrollTop: $($(this).attr("href")).offset().top + "px"}, {duraction:1000,
              easing: "swing"
          });
          return false;
      });
  });


