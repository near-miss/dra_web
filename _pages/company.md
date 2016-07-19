---
title: "Company"
layout: archive
author_profile: false
permalink: company
---

<!-- TODO: isolate mission-statement.md include -->
> Our mission is to open a new era in process risk management through pioneering techniques and innovative solutions based on the concept of hidden near-misses, which can only be identified through thorough analysis of total process and alarm data. Our products and services help companies improve their safety performance, increase their bottom line, and foster their sustainability by addressing process risks in plant operations.



{% for member in site.data.members %}
<img src="http://placehold.it/200x200">
<h3>{{ member.name }} <em>{{ member.title }}</em></h3>

<a href="mailto:{{ member.email }}">{{ member.email }}</a>
<p>{{ member.bio }}</p>

{% endfor %}


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>



<ul>
  {% for org_hash in site.data.members %}
  {% assign org = org_hash[1] %}

  <li>

    <p>
      {{ org.name }} (<em>{{ org.members | size }} members</em>)
      
      <br>

      {% assign total = org.members | size %}
      {% assign count = 0 %}

      {% for mems in total %}
      {% assign count = count | plus: 1 %}
      {% endfor %}

      


      <h3>{{ org.members[mem].name }}</h3>
      
      {% increment foo %}
      {{ org.members[foo].name }}<br>
      {{ org.members[foo].email }}
      <!-- {{ org }} -->
    </p>

    <br>

    <br>


    {% for member in org org.members %}
    <!-- <p>{{ org.members }}</p> -->
    <br>
    <p>member: {{ member }}</p>
    <br>
    <p>members: {{ member.name }}</p>
    <br>
    
    <br>
    <!-- <p>org.member: {{ org.member }}</p> -->


    <br>
    <br>

    {% endfor %}
  </li>
  {% endfor %}
</ul>