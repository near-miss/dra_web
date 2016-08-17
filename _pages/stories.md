---
title: "Success Stories"
layout: splash
permalink: stories
---

{% include base_path %}

<h1>{{ page.title }}</h1>
{: .text-center }

<div class="grid__wrapper">
  {% for post in site.posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>