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

<!-- Stock photo: usplash.com -->
<!-- TODO: isolate mission-statement.md include -->
<!-- > Our mission is to open a new era in process risk management through pioneering techniques and innovative solutions based on the concept of hidden near-misses, which can only be identified through thorough analysis of total process and alarm data. Our products and services help companies improve their safety performance, increase their bottom line, and foster their sustainability by addressing process risks in plant operations.
 -->

{% include base_path %}


{% for member in site.data.team %}
  <img src="http://placehold.it/200x200">
  <h3>{{ member.full-name }}</h3>
  <em>{{ member.title }}</em>
  <p>{{ member.bio }}</p>

<button><i class="fa fa-envelope"></i> <a href="mailto:{{ member.email }}">Contact {{ member.name }}</a></button>

{% endfor %}




