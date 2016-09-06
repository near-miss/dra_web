---
title: "Newsroom"
layout: splash
permalink: newsroom-dev
---

{% include base_path %}


<h1 class="page__title">Learn. Explore. Stay Informed.</h1>
{: .text-center}

<script src="http://localhost:4000/assets/js/main.min.js"></script>

<div class="button-group filters-button-group">
  <label for="filters-button-group">Filter by: </label>
  <button class="btn btn--inverse btn--news" data-filter="item-news">News</button>
  <button class="btn btn--inverse btn--events" data-filter="item-events">Events</button>
  <button class="btn btn--inverse btn--publications" data-filter="item-publications">Publications</button>
  <button class="btn btn--inverse btn--reset" data-filter="*">Show All</button>

</div>
<br>
<br>
<br>


<div class="grid__wrapper">
  {% for post in site.posts %}
  {% include news-single.html type="grid" %}
  
  {% endfor %}
</div>

<script>
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
</script>
