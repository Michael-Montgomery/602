var stickyOffset = $('.sticky').offset().top;

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= stickyOffset) {
      sticky.addClass('fixed');
      $('header nav a').css('color', 'white');
      $('header nav a img').hide()
      
  } else {
      sticky.removeClass('fixed');
      $('header nav a').css('color', 'black');
      $('header nav a img').show();
  }
});


$('#toggle-responsive').click(function(e) {
    e.preventDefault()
    $('#mobile-menu').toggle();
    
})

var menuItems = document.getElementsByClassName('experience-wrapper');

for(var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function(e) {
        console.log(e.currentTarget)
    })
}
