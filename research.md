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
    <p>My work combines classical Islamic training (memorization of the Qurʾān and sustained study of Arabic, ḥadīth, jurisprudence, and philosophy) with cognitive science and computational methods.</p>
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
    <h3>The Caliphal incursion into the House of Fāṭima</h3>
    <p>An isnād-cum-matn study of the tradition across the extant sources, arguing that a core report can be traced to Mūsā b. ʿUqba and possibly to al-Zuhrī.</p>
    <h3>The historical Jaʿfar al-Ṣādiq</h3>
    <p>A taxonomy of the reports attributed to the sixth Imām by chain and provenance, and a methodological assessment of how to separate the historical Jaʿfar from legend and polemic. An Urdu translation is available.</p>
    <h3>ICMA and the Imām's hypomnēma</h3>
    <p>Applying isnād-cum-matn analysis to sīrah and tafsīr narratives from al-Bāqir and al-Ṣādiq, with the hypomnēma as a model of how the Imām's notes mediated between oral teaching and written transmission.</p>
    <h3>Docetism and the Imām in the Ghūlāt</h3>
    <p>How early Ghūlāt works such as <em>Kitāb al-Haft wa-l-Aẓilla</em> conceive the Imām as a timeless theophany whose death is a veil, and how this compares with early Christian docetism.</p>
    <h3>Isnads, common links, and the spread of chains</h3>
    <p>A computational test of whether later common links preserve original transmission while Companion-level corpora show the spread of isnads, comparing isnād trees with text trees across a large hadith database.</p>
    <h3>Temporal themes across Qurʾānic chronology</h3>
    <p>A quantitative study of time-related vocabulary and themes across Qurʾānic chronology, using Bazargan's blocks and Sadeghi's stylometric ordering.</p>
    <h3>Prophecy, sainthood, and the seal of prophethood</h3>
    <p>The esoteric view of prophecy from the Imāms to Ibn ʿArabī and later Twelver philosophy, and the tension between continued perfection and <em>khatm al-nubuwwa</em>.</p>
    <h3>Graded being and artificial minds; Metaxy and liminal consciousness</h3>
    <p>Islamic philosophical perspectives on AI and distributed cognition, and on the "in-between" in Islamic thought and the neuroscience of dreams.</p>
  </div>
</section>
