---
title: "Company"
layout: single
sitemap: true
permalink: /company.html
---

> Our mission is to open a new era in process risk management through pioneering techniques and innovative solutions based on the concept of hidden near-misses, which can only be identified through thorough analysis of total process and alarm data. Our products and services help companies improve their safety performance, increase their bottom line, and foster their sustainability by addressing process risks in plant operations.


{% for member in site.data.members %}
<img src="http://placehold.it/200x200">
<h3>{{ member.name }} <em>{{ member.title }}</em></h3>

<a href="mailto:{{ member.email }}">{{ member.email }}</a>
<p>{{ member.bio }}</p>

{% endfor %}


