---
title: "Newsroom"
layout: splash
permalink: newsroom-dev
---

{% include base_path %}


<h1 class="page__title">Learn. Explore. Stay Informed.</h1>
{: .text-center}



<div class="button-group filters-button-group">
  <label for="filters-button-group">Filter by: </label>
  <button class="btn btn--inverse btn--news" data-filter=".archive__item-news">News</button>
  <button class="btn btn--inverse btn--events" data-filter=".archive__item-events">Events</button>
  <button class="btn btn--inverse btn--publications" data-filter=".archive__item-publications">Publications</button>
  <button class="btn btn--inverse btn--reset" data-filter="*">Show All</button>

</div>
<br>


<div class="grid__wrapper">
  {% for post in site.posts %}
    {% include news-single.html type="grid" %}
  {% endfor %}
</div>



<script language="JavaScript" type="text/javascript" src="http://localhost:4000/assets/js/main.min.js"></script>


<script>
  

var $grid = $('.grid__wrapper').isotope({
  itemSelector: '.archive__item',
  // set layoutMode
  layoutMode: 'cellsByRow',
  // options for cellsByRow layout mode
  cellsByRow: {
    columnWidth: 200,
    rowHeight: 150
  }
})


// filter functions
var filterFns = {
  // show if number is greater than 50
  // numberGreaterThan50: function() {
  //   var number = $(this).find('.number').text();
  //   return parseInt( number, 10 ) > 50;
  // },
  // show if name ends with -ium
  // ium: function() {
  //   var name = $(this).find('.name').text();
  //   return name.match( /ium$/ );
  // }
};

// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
// $('#sorts').on( 'click', 'button', function() {
//   var sortByValue = $(this).attr('data-sort-by');
//   $grid.isotope({ sortBy: sortByValue });
// });

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  



</script>


<style>
/*  .grid__wrapper {
   either of these will work for horizontal Isotope layouts 
  height: 80%;
  height: 480px;
}*/
</style>







