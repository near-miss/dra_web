---
title: "Events"
layout: splash
permalink: /newsroom/events/
---

{% include base_path %}


<h1 class="page__title">Learn. Explore. Stay Informed.</h1>
{: .text-center}


<div class="button-group filters-button-group">
  <label>Filter by: </label>  
  <button class="btn btn--inverse btn--news" data-filter="item-news">News</button>
  <button class="btn btn--inverse btn--events is-checked" data-filter="item-events">Events</button>
  <button class="btn btn--inverse btn--publications" data-filter="item-publications">Publications</button>
  <button class="btn btn--inverse btn--reset" data-filter="*">Show All</button>
</div>


<div class="grid__wrapper">
  {% for post in site.posts %}
  {% include news-single.html type="grid" %}
  
  {% endfor %}
</div>

