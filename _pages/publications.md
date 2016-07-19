---
title: "Resources"
layout: archive
sitemap: true
author_profile: false
permalink: publications
type: posts
---
{% include base_path %}
<!-- {% include base_path %}

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts }}</h3>

{% for post in posts %}
  {% include archive-single.html %}
  {{ post.title }}
{% endfor %}

-->

<!-- {% include paginator.html %} -->



<h3 class="archive__subtitle">Publications</h3>



{% for post in site.posts %}
{% include archive-single.html %}
{% endfor %}
