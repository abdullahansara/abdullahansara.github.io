---
layout: default
title: Publications
permalink: /publications/
description: "Publications, essays, chapters, and academic projects by Abdullah Ansar."
---

<section class="page-hero">
  <div class="container">
    <div class="kicker">Research and writing</div>
    <h1>Publications</h1>
    <p>This page gathers published articles, collaborative works, public writing, and major academic projects in philosophy, cognitive science, Islamic intellectual history, Qur'anic studies, and related fields.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="publication-list">
      {% assign publication_items = site.publications | sort: "year" | reverse %}
      {% for item in publication_items %}
      <article class="publication-item">
        <div class="kicker">{{ item.type | default: "Publication" }}</div>
        <h3>{{ item.title }}</h3>
        <div class="meta">
          {{ item.authors }}{% if item.venue %}, <em>{{ item.venue }}</em>{% endif %}{% if item.year %}, {{ item.year }}{% endif %}
        </div>
        {{ item.content }}
        <div class="link-list">
          {% if item.external_url %}<a href="{{ item.external_url }}">Read online</a>{% endif %}
          {% if item.pdf %}<a href="{{ item.pdf | relative_url }}">PDF</a>{% endif %}
          {% if item.doi %}<a href="https://doi.org/{{ item.doi }}">DOI</a>{% endif %}
        </div>
      </article>
      {% endfor %}
    </div>
  </div>
</section>
