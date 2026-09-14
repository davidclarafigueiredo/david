<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
</script>

<template>
  <main>
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Startseite" @click="closeMenu"><span class="brand-mark">D.</span><span>David</span></a>
      <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-label="Menü öffnen" @click="menuOpen = !menuOpen"><span></span><span></span></button>
      <nav :class="{ open: menuOpen }" aria-label="Hauptnavigation">
        <a href="#ueber-mich" @click="closeMenu">Über mich</a><a href="#projekte" @click="closeMenu">Projekte</a><a href="#kontakt" class="nav-cta" @click="closeMenu">Kontakt</a>
      </nav>
    </header>

    <section id="top" class="hero section-shell">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> Verfügbar für neue Projekte</p>
        <h1>Hallo, ich bin <em>David.</em><br />Ich mache Ideen sichtbar.</h1>
        <p class="intro">Kreativer Kopf mit einem Faible für klare Gestaltung, gute digitale Erlebnisse und Dinge, die einen Unterschied machen.</p>
        <div class="hero-actions"><a class="button button-primary" href="#projekte">Meine Arbeit <span>↓</span></a><a class="text-link" href="#ueber-mich">Mehr über mich <span>↗</span></a></div>
      </div>
      <div class="hero-art" aria-label="Abstrakte geometrische Illustration">
        <div class="arch arch-one"></div><div class="arch arch-two"></div><div class="sun"></div><div class="ground-line"></div>
        <p class="art-note">based in<br /><strong>Germany</strong></p><p class="art-year">2024—<br />FOREVER</p>
      </div>
    </section>

    <section id="ueber-mich" class="about section-shell">
      <p class="section-label">01 / ÜBER MICH</p>
      <div class="about-grid">
        <h2>Neugierig bleiben.<br /><em>Bewusst gestalten.</em></h2>
        <div class="about-copy"><p>Ich bin David – jemand, der gerne zuhört, Fragen stellt und aus losen Gedanken etwas macht, das man verstehen und nutzen kann.</p><p>Ob Konzept, Design oder Umsetzung: Mir sind ehrliche Zusammenarbeit, die kleinen Details und ein gutes Gefühl beim Ergebnis wichtig.</p><a class="text-link" href="mailto:hallo@david.de">Schreib mir eine Nachricht <span>↗</span></a></div>
      </div>
      <div class="facts">
        <div class="fact"><span>FOKUS</span><strong>Digital &amp;<br />Kreativ</strong></div><div class="fact"><span>ARBEITSWEISE</span><strong>Neugierig &amp;<br />nahbar</strong></div><div class="fact"><span>STANDORT</span><strong>Deutschland<br />+ remote</strong></div>
      </div>
    </section>

    <section id="projekte" class="work section-shell">
      <div class="section-heading"><p class="section-label">02 / AUSGEWÄHLTE ARBEIT</p><p>Ein kleiner Einblick in Dinge, an denen ich zuletzt gearbeitet habe.</p></div>
      <div class="project-list">
        <a class="project project-amber" href="#kontakt"><div class="project-number">01</div><div class="project-visual visual-orbit"><i></i><b></b><span></span></div><div class="project-info"><h3>Nordlicht</h3><p>Branding · Digital</p></div><span class="project-arrow">↗</span></a>
        <a class="project project-blue" href="#kontakt"><div class="project-number">02</div><div class="project-visual visual-card"><i>form<br />follows<br />feeling.</i></div><div class="project-info"><h3>Studio Form</h3><p>Webdesign · Strategie</p></div><span class="project-arrow">↗</span></a>
        <a class="project project-rose" href="#kontakt"><div class="project-number">03</div><div class="project-visual visual-shapes"><i></i><b></b><span></span></div><div class="project-info"><h3>Miteinander</h3><p>Konzept · Kampagne</p></div><span class="project-arrow">↗</span></a>
      </div>
    </section>

    <section id="kontakt" class="contact section-shell">
      <p class="section-label">03 / KONTAKT</p><div class="contact-content"><h2>Lass uns etwas<br /><em>Gutes machen.</em></h2><a class="mail-link" href="mailto:hallo@david.de">hallo@david.de <span>↗</span></a></div>
      <div class="contact-footer"><p>© 2024 David</p><div><a href="#top">LinkedIn</a><a href="#top">Instagram</a></div></div>
    </section>
  </main>
</template>
