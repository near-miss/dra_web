---
title: "Stories"
layout: splash
permalink: stories
---

{% include base_path %}

<div class="grid__wrapper">
  {% for post in site.posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>