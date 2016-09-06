/* ==========================================================================
   Custom scripts
   ========================================================================== */

var gridWrapper = $('.grid__wrapper');
var gridItems = gridWrapper.children();
$('.filters-button-group').children().each(function() {
  $(this).click(function() {
    var filter = $(this).attr('data-filter');
    gridWrapper.empty();
    if (filter === '*')
      gridWrapper.append(gridItems);
    else {
      gridWrapper.append(gridItems.filter(function() {
        return $(this).hasClass(filter);
      }))
    }
  })
})
