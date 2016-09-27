---
title: "Publications"
layout: splash
permalink: /newsroom/publications/
---

{% include base_path %}


<h1 class="page__title">Learn. Explore. Stay Informed.</h1>
{: .text-center}


<div class="button-group filters-button-group">
  <label>Filter by: </label>  
  <button class="btn btn--inverse btn--events" data-filter="item-events">Events</button>
  <button class="btn btn--inverse btn--news" data-filter="item-news">News</button>
  <button class="btn btn--inverse btn--publications is-checked" data-filter="item-publications">Publications</button>
  <button class="btn btn--inverse btn--reset" data-filter="*">Show All</button>
</div>


<div class="grid__wrapper">
  {% for post in site.posts %}
  {% if post.category == 'Publications' %}
  {% include news-single.html type="grid" %}
  {% endif %}
  {% endfor %}
</div>

<div class="hidden" id="grid__full">
  {% for post in site.posts %}
  {% include news-single.html type="grid" %}
  {% endfor %}
</div>
