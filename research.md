---
layout: default
title: Research
permalink: /research/
description: "Research interests and current projects of Abdullah Ansar."
---
<section class="page-hero">
  <div class="container">
    <div class="kicker">Research</div>
    <h1>Research</h1>
    <p>My work combines classical Islamic training (memorization of the Qur'an and sustained study of Arabic, hadith, jurisprudence, and philosophy) with cognitive science and computational methods.</p>
  </div>
</section>

<section class="section">
  <div class="container readable-wide prose">
    <h2>Areas</h2>
    {% for theme in site.data.home.themes %}
    <h3>{{ theme.title }}</h3>
    <p>{{ theme.description }}</p>
    {% endfor %}

    <h2>Current projects</h2>
    <h3>Isnads, common links, and the spread of chains</h3>
    <p>A computational test of whether later-generation common links preserve original transmission while Companion-level corpora show the spread of isnads, comparing isnad trees against text trees across a large hadith database.</p>
    <h3>Temporal themes across Qur'anic chronology</h3>
    <p>A quantitative study of how time-related vocabulary and themes develop across Qur'anic chronology, using Bazargan's block division and Sadeghi's stylometric ordering.</p>
    <h3>Prophecy, sainthood, and the seal of prophethood</h3>
    <p>A history of the esoteric view of prophecy from the Imams to Ibn 'Arabi and later Twelver philosophy, and the tension between the continuation of perfection and <em>khatm al-nubuwwa</em>.</p>
    <h3>Graded being, distributed cognition, and artificial minds</h3>
    <p>Islamic philosophical perspectives on AI, distributed cognition, and political cyber-ethics, drawing on Mulla Sadra and the Akbarian tradition.</p>
    <h3>Metaxy, liminal consciousness, and faith</h3>
    <p>An interdisciplinary study of the "in-between" in Islamic thought and the neuroscience of liminal states such as dreams.</p>
  </div>
</section>
