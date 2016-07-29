---
title: "We Are Near-Miss Management"
layout: archive
author_profile: true
permalink: company

excerpt: A new era in process risk management is here—through pioneering techniques and innovative solutions based on the concept of hidden near-misses.

header: 
  overlay_image: https://mmistakes.github.io/minimal-mistakes/images/unsplash-gallery-image-4.jpg
  overlay_filter: 0.45
  cta_label: "Request a Demo"
  cta_url: "#"
  
---

{% include base_path %}



{% include group-by-array collection=site.team field="org" %}

{% for category in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ category | slugify }}" class="archive__subtitle">{{ category }}</h2>
  {% for post in posts %}

<img src="http://placehold.it/200x200"> 
<h3>{{ post.full-name }}</h3>
<em>{{ post.title }}</em>
<p>{{ post.content }}</p>
<button><i class="fa fa-envelope"></i> <a href="mailto:{{ post.email }}">Contact {{ post.name }}</a></button>

  {% endfor %}
{% endfor %}




<!-- {% for member in site.data.team %}
  <img src="http://placehold.it/200x200">
  <h3>{{ member.full-name }}</h3>
  <em>{{ member.title }}</em>
  <p>{{ member.bio }}</p>

<button><i class="fa fa-envelope"></i> <a href="mailto:{{ member.email }}">Contact {{ member.name }}</a></button>

{% endfor %}


 -->

<!-- TODO: move contact info to partial -->