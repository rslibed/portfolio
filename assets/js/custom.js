$(window).scroll(() => {
  //   console.log('The page has been scrolled');
  //   $('#site-nav').css('height', '1px');
  $('#site-nav').attr('aria-expanded', false);
  $('#site-nav').removeClass('in');
});
$('#main-content').click(() => {
  //   console.log('The page has been scrolled');
  //   $('#site-nav').css('height', '1px');
  $('#site-nav').attr('aria-expanded', false);
  $('#site-nav').removeClass('in');
});
// $(window).scroll(() => {
//     console.log('The page has been scrolled');
//     $('#site-nav').css('height', '1px');
//   });
