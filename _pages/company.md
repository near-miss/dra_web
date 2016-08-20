---
title: "We Are Near-Miss Management"
layout: archive
author_profile: true
permalink: company

excerpt: A new era in process risk management is here—through pioneering techniques and innovative solutions based on the concept of hidden near-misses.

header: 
  overlay_image: splash-01.jpg
  overlay_filter: 0.45
  cta_label: "Request a Demo"
  cta_url: "/contact"

---

{% include base_path %}

<a class="btn btn--inverse" href="#leadership-team">Leadership Team</a>
<a class="btn btn--inverse" href="#advisory-board">Advisory Board</a>
<a class="btn btn--inverse" href="#academic-advisors">Academic Advisors</a>

<br>

{% include group-by-array collection=site.team field="org" %}



{% for category in group_names %}

  {% if category == "Leadership Team" %}
    {% include team-single.html %}
  {% endif %}
    
{% endfor %}


<a href="#site-nav" class="btn btn--inverse align-right">Return to Top</a>
<br>


{% for category in group_names %}

  {% if category == "Advisory Board" %}
    {% include team-single.html %}
  {% endif %}
  
{% endfor %}


<a href="#site-nav" class="btn btn--inverse align-right">Return to Top</a>
<br>


{% for category in group_names %}

  {% if category == "Academic Advisors" %}
    {% include team-single.html %}
  {% endif %}
    
{% endfor %}


<a href="#site-nav" class="btn btn--inverse align-right">Return to Top</a>
<br>

