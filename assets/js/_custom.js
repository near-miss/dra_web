/* ==========================================================================
   Custom scripts
   ========================================================================== */

var gridWrapper = $('.grid__wrapper');
var gridItems = gridWrapper.children();
$('.filters-button-group').children().each(function() {
  $(this).click(function() {
    var filter = $(this).attr('data-filter');
    gridWrapper.fadeOut(400,function() {
      gridWrapper.empty();
      if (filter === '*')
        gridWrapper.append(gridItems);
      else {
        gridWrapper.append(gridItems.filter(function() {
          return $(this).hasClass(filter);
        }))
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