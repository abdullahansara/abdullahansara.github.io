---
layout: default
title: Curriculum Vitae
permalink: /cv/
description: "Curriculum vitae of Abdullah Ansar: education, publications, talks, and experience."
---
{% assign s = site.data.settings %}
<section class="page-hero">
  <div class="container">
    <div class="kicker">Curriculum vitae</div>
    <h1>Abdullah Ansar</h1>
    <p>{{ s.affiliation }} &middot; <a href="mailto:{{ s.email }}">{{ s.email }}</a>{% if s.cv_pdf != "" %} &middot; <a href="{{ s.cv_pdf | relative_url }}">Download PDF</a>{% endif %}</p>
  </div>
</section>

<section class="section">
  <div class="container readable-wide cv">

    <h2>Education</h2>
    <dl class="cv-list">
      <dt>B.A.</dt>
      <dd><strong>Carleton College</strong>, Philosophy and Cognitive Science, with additional work in religion, Arabic, and Middle Eastern studies.<br>
      Comprehensive projects: <em>The Jurist Par Excellence: Debating Khomeini's Political Thought and Its Philosophical Roots</em> (Philosophy); <em>Remembrance and Limitation: Oral Traditions, Memory and Verbatim Recall in Early Islam</em> (Cognitive Science).</dd>
      <dt>Classical</dt>
      <dd>Memorization of the Qur'an; sustained study of Arabic, hadith, jurisprudence, and philosophy.</dd>
    </dl>

    <h2>Publications</h2>
    <ul class="cv-pubs">
      {% assign all = site.publications | sort: "year" | reverse %}
      {% for item in all %}{% unless item.type == "Thesis" %}
      <li>{{ item.authors }}. {% if item.type == "Book Review" %}Review{% else %}&ldquo;{{ item.title }}&rdquo;{% endif %} <em>{{ item.venue }}</em>{% if item.year and item.year != "" %} ({{ item.year }}){% endif %}.</li>
      {% endunless %}{% endfor %}
    </ul>

    <h2>Talks and presentations</h2>
    <dl class="cv-list">
      <dt>2026</dt>
      <dd>&ldquo;The 'in-between' of brain, being, and faith: Metaxy, Islamic thought, and the neuroscience of liminal consciousness.&rdquo; Faith Across Fields, Spiritual Life Office, University of Chicago, 21 October.</dd>
      <dt>Earlier</dt>
      <dd>International Qur'anic Studies Association (IQSA) annual meeting; American Academy of Religion annual meeting.</dd>
    </dl>

    <h2>Experience</h2>
    <dl class="cv-list">
      <dt>2024</dt>
      <dd><strong>Cataloging intern</strong>, Hill Museum &amp; Manuscript Library (HMML), June to September.</dd>
      <dt>Carleton</dt>
      <dd><strong>Digital Humanities Associate</strong>, Carleton College.</dd>
    </dl>

    <h2>Languages</h2>
    <p>Arabic (classical, with training in hadith and fiqh sources), English.</p>

    <h2>Methods and skills</h2>
    <p>Close reading of Arabic and Persian sources; isnad and network analysis; phylogenetic and quantitative text analysis; Python (igraph, NetworkX, pandas); corpus construction for hadith and Qur'anic data.</p>
  </div>
</section>
