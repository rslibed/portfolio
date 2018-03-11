$(window).scroll(() => {
  $('#site-nav').attr('aria-expanded', false);
  $('.navbar-toggle').attr('aria-expanded', false);
  $('.navbar-toggle').addClass('collapsed');
  $('#site-nav').removeClass('in');
});
$('#main-content').click(() => {
  $('#site-nav').attr('aria-expanded', false);
  $('.navbar-toggle').attr('aria-expanded', false);
  $('.navbar-toggle').addClass('collapsed');
  $('#site-nav').removeClass('in');
});
