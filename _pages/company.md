---
title: "Pioneering a New Era of Proactive Risk Detection"
layout: splash
author_profile: false
permalink: company

excerpt: We are a one-of-its-kind enterprise risk detection company. We help our customers improve their safety performance, increase bottom lines, and foster sustainability by averting process problems at plant operations.  Powered by our expertise in risk management and large-scale machine learning, our unique approach has not only earned several patents but also a reputation as a disruptive technology that provides 'peripheral vision' to detect hidden risks.

header: 
  overlay_image: splash-03.jpg
  overlay_filter: 0.45
  cta_label: "Request a Demo"
  cta_url: "/contact"

---

{% include base_path %}

<a class="btn btn--inverse btn--large" href="#leadership-team">Leadership Team</a>
<a class="btn btn--inverse btn--large" href="#advisory-board">Advisory Board</a>
<a class="btn btn--inverse btn--large" href="#academic-advisors">Academic Advisors</a>
{: .text-center}


{% include group-by-array collection=site.team field="org" %}

<h2 id="leadership-team" class="page__section-title">Leadership Team</h2>
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

<h2 id="advisory-board" class="page__section-title">Advisory Board</h2>
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

<h2 id="academic-advisors" class="page__section-title">Academic Advisors</h2>
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

