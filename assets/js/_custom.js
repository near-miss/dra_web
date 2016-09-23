/* ==========================================================================
   Custom scripts
   ========================================================================== */

var basePath = '/' + window.location.pathname.split('/')[1] + '/';
var baseUrl = window.location.origin + basePath;
var gridWrapper = $('.grid__wrapper');
var gridFull = $('#grid__full');
var gridItems = gridFull.children();

$('.filters-button-group').children().each(function() {
  $(this).click(function() {
    var filter = $(this).attr('data-filter');
    var btnText = $(this).text().toLowerCase()
    gridWrapper.fadeOut(400,function() {
      gridWrapper.empty();
      if (filter === '*') {
        gridWrapper.append(gridItems);
        history.replaceState(null, null, baseUrl);
      }
      else {
        gridWrapper.append(gridItems.filter(function() {
          return $(this).hasClass(filter);
        }));
        history.replaceState(null, null, baseUrl + btnText.toLowerCase() + '/');
      }
      gridWrapper.fadeIn(300);
    })
  })
})


// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


$(function(){
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('#stickyheader').offset().top;

    $(window).scroll(function(){
            if( $(window).scrollTop() > stickyHeaderTop ) {
                    $('#stickyheader').css({position: 'fixed', top: '0px'});
                    $('#stickyalias').css('display', 'block');
            } else {
                    $('#stickyheader').css({position: 'static', top: '0px'});
                    $('#stickyalias').css('display', 'none');
            }
    });
});