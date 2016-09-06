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
<br>
<br>


<div class="grid__wrapper">
  {% for post in site.posts %}
  {% include news-single.html type="grid" %}
  
  {% endfor %}
</div>
