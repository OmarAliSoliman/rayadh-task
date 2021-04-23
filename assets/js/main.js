$(document).ready(function () {
  // choses-slider


  AOS.init();

  $(window).scroll(()=>{
    if($(this).scrollTop() > 10){
      $('.navbar').addClass('fixed-navbar');
    }else{
      $('.navbar').removeClass('fixed-navbar');
    }
  })

  $(window).scroll(() => {
    if ($(this).scrollTop() > 20) {
      // $(".navbar").addClass("fixed-navbar");
      $("#floating").css("opacity", "0.8");
    } else {
      // $(".navbar").removeClass("fixed-navbar");
      $("#floating").css("opacity", "0");
    }
  });

  $("#floating").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      50
    );
  });

  $(".sidenav").niceScroll({
    cursorcolor:"#a7abad",
    cursorborder: '1px solid #a7abad',
  });

  if($('.get-card-slider').length){
    $('.get-card-slider').slick({
      arrows: true,
    })
  }

});


function openNav() {
  document.getElementById("mySidenav").style.right = "0";
  document.querySelector('.bg-sidenavOpen').style.display = "block";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.right = "-300px";
  document.querySelector('.bg-sidenavOpen').style.display = "none";
}
