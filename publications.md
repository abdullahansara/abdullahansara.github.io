---
layout: default
title: Publications
permalink: /publications/
description: "Peer-reviewed articles, reviews, public scholarship, and theses by Abdullah Ansar."
---
{% assign all = site.publications | sort: "year" | reverse %}
<section class="page-hero">
  <div class="container">
    <div class="kicker">Research and writing</div>
    <h1>Publications</h1>
  </div>
</section>

<section class="section">
  <div class="container readable-wide">
    {% assign groups = "Article,Book Chapter,Book Review,Public Essay,Thesis" | split: "," %}
    {% for g in groups %}
      {% assign items = all | where: "type", g %}
      {% if items.size > 0 %}
      <h2 class="group-title">{% case g %}{% when "Article" %}Peer-reviewed articles{% when "Book Chapter" %}Book chapters (research assistance){% when "Book Review" %}Reviews{% when "Public Essay" %}Public scholarship{% when "Thesis" %}Theses{% endcase %}</h2>
      <div class="publication-list">
        {% for item in items %}{% include publication_item.html item=item %}{% endfor %}
      </div>
      {% endif %}
    {% endfor %}
  </div>
</section>
