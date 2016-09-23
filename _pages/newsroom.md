---
title: "Newsroom"
layout: splash
permalink: /newsroom/
---

{% include base_path %}


<h1 class="page__title">Learn. Explore. Stay Informed.</h1>
{: .text-center}

hello5

<div class="button-group filters-button-group">
  <label>Filter by: </label>  
  <button class="btn btn--inverse-news btn--news" data-filter="item-news">News</button>
  <button class="btn btn--inverse-events btn--events" data-filter="item-events">Events</button>
  <button class="btn btn--inverse-publications btn--publications" data-filter="item-publications">Publications</button>
  <button class="btn btn--inverse btn--reset" data-filter="*">Show All</button>
</div>


<div class="grid__wrapper">
  {% for post in site.posts %}
  {% include news-single.html type="grid" %}
  
  {% endfor %}
</div>

<div class="hidden" id="grid__full">
  {% for post in site.posts %}
  {% include news-single.html type="grid" %}
  {% endfor %}
</div>
