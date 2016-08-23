---
title: "A New Era of Process Risk Management is Here"
layout: splash
author_profile: false
permalink: company

excerpt: We are a one-of-its-kind enterprise risk detection company, helping our customers improve their safety performance, increase bottom lines, and foster sustainability by addressing process risks in plant operations.  Powered by our expertise in risk management and large-scale machine learning, our unique approach has not only earned several patents but also a reputation as a disruptive technology that provides 'peripheral vision' to detect and address hidden risks.

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

<h2 id="leadership-team" class="archive__subtitle">Leadership Team</h2>
<br>

<div class="team__grid">

{% for category in group_names %}

  {% if category == "Leadership Team" %}
    {% include team-single.html %}
  {% endif %}

{% endfor %}
</div>

<a href="#main" class="btn btn--inverse align-right">Return to Top</a>
<br><br>

<h2 id="advisory-board" class="archive__subtitle">Advisory Board</h2>
<br>

<div class="team__grid">
{% for category in group_names %}

  {% if category == "Advisory Board" %}
    {% include team-single.html %}
  {% endif %}
  
{% endfor %}
</div>

<a href="#main" class="btn btn--inverse align-right">Return to Top</a>
<br><br>

<h2 id="academic-advisors" class="archive__subtitle">Academic Advisors</h2>
<br>
<div class="team__grid">
{% for category in group_names %}

  {% if category == "Academic Advisors" %}
    {% include team-single.html %}
  {% endif %}
    
{% endfor %}
</div>

<a href="#main" class="btn btn--inverse align-right">Return to Top</a>
<br><br>

