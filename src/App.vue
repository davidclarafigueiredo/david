<script setup lang="ts">
import { ref } from 'vue'
import projectListPdf from './assets/Projektliste.pdf'

const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }

const projects = [
  {
    id: 'template-generator',
    title: 'Template Generator für Spring-Boot-Services',
    client: 'Deutsche Telekom IT',
    technologies: ['Java', 'Spring Boot', 'Mustache', 'Spring Initializr', 'REST', 'Git'],
    summary: 'Ein interner Generator, der neue Spring-Boot-Services mit einheitlicher Struktur, vorkonfigurierten Dependencies und sinnvollen Grundeinstellungen erstellt.',
    highlights: ['Weiterentwicklung des Template Generators', 'Erstellung und Pflege von Mustache-Templates', 'Standardisierung des initialen Projektaufbaus'],
  },
  {
    id: 'openshift-deployment',
    title: 'Deployment von Spring-Boot-Services in OpenShift',
    client: 'Deutsche Telekom IT',
    technologies: ['Docker', 'Kubernetes', 'OpenShift', 'CI/CD', 'Git'],
    summary: 'Automatisierung des Deployments von Spring-Boot-basierten Services inklusive der benötigten Konfiguration und Betriebsressourcen.',
    highlights: ['CI/CD-Pipelines für Builds und Deployments', 'Secrets und Konfigurationsdaten verwalten', 'Kubernetes- und OpenShift-CronJobs einrichten'],
  },
  {
    id: 'sporttrainer',
    title: 'Verwaltungsprogramm für Sporttrainer',
    client: 'Hochschulprojekt · Product Owner / Entwickler',
    technologies: ['Go', 'Gin', 'REST', 'Frontend', 'Backend', 'Git'],
    summary: 'Webanwendung zur Verwaltung von Sporttrainern – von der fachlichen Priorisierung bis zur Integration des Go-Backends in die Deployment-Umgebung.',
    highlights: ['Product Backlog strukturieren und priorisieren', 'Go-/Gin-Backend in die Deployment-Umgebung integrieren', 'REST-Schnittstellen zwischen Frontend und Backend abstimmen'],
  },
  {
    id: 'go-fiber-migration',
    title: 'Migration eines Spring-Boot-Services zu Go/Fiber',
    client: 'Deutsche Telekom IT',
    technologies: ['Go', 'Fiber', 'Java', 'Spring Boot', 'Kubernetes', 'AWS'],
    summary: 'Migration eines bestehenden Spring-Boot-Services zu einer schlankeren Umsetzung mit Go und Fiber – inklusive Bereitstellung auf einem Kubernetes-Cluster in AWS.',
    highlights: ['Service auf Go und Fiber migrieren', 'Bereitstellung auf Kubernetes in AWS', 'Bestehende Abläufe und Schnittstellen weiterführen'],
  },
  {
    id: 'bestreads',
    title: 'Eine Goodreads Alternative für Bücherliebhaber',
    client: 'Hochschulprojekt · Product Owner / Entwickler',
    technologies: ['Go', 'Fiber', 'Self-Hosting', 'OpenLibrary'],
    summary: 'Entwicklung einer Goodreads-Alternative für Bücherliebhaber – inklusive Bereitstellung auf einem Self-Hosting-Server.',
    highlights: ['Service auf Go und Fiber migrieren', 'Bereitstellung auf Self-Hosting-Server', 'Bestehende Abläufe und Schnittstellen weiterführen'],
  },
]

const activeProject = ref<string | null>(null)
const toggleProject = (id: string) => {
  activeProject.value = activeProject.value === id ? null : id
}
</script>

<template>
  <main>
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Startseite" @click="closeMenu"><span class="brand-mark"><img src="/src/assets/me.jpeg" alt="David" /></span><span>David</span></a>
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
      <div class="section-heading"><p class="section-label">02 / PROJEKTE</p><p>Ein Einblick in Projekte aus Backend-Entwicklung, Automatisierung und Produktarbeit.</p></div>
      <div class="project-list">
        <article v-for="(project, index) in projects" :key="project.id" class="project" :class="`project-${index + 1}`">
          <div class="project-topline"><span class="project-number">0{{ index + 1 }}</span><span class="project-client">{{ project.client }}</span></div>
          <div class="project-monogram" aria-hidden="true">0{{ index + 1 }}</div>
          <div class="project-info"><h3>{{ project.title }}</h3><p>{{ project.technologies.slice(0, 3).join(' · ') }}</p></div>
          <button class="project-toggle" type="button" :aria-expanded="activeProject === project.id" :aria-controls="`${project.id}-details`" @click="toggleProject(project.id)">Details <span>{{ activeProject === project.id ? '−' : '+' }}</span></button>
          <div :id="`${project.id}-details`" class="project-details" :class="{ open: activeProject === project.id }">
            <p>{{ project.summary }}</p>
            <ul><li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li></ul>
            <div class="technology-list"><span v-for="technology in project.technologies" :key="technology">{{ technology }}</span></div>
          </div>
        </article>
      </div>
      <a class="project-list-link" :href="projectListPdf" target="_blank" rel="noopener">Komplette Projektliste öffnen <span>↗</span></a>
    </section>

    <section id="kontakt" class="contact section-shell">
      <p class="section-label">03 / KONTAKT</p><div class="contact-content"><h2>Lass uns etwas<br /><em>Schlechtes machen.</em></h2><a class="mail-link" href="mailto:hallo@david.de">hallo@david.de <span>↗</span></a></div>
      <div class="contact-footer"><p>© 2024 David</p><div><a href="#top">LinkedIn</a><a href="#top">Instagram</a></div></div>
    </section>
  </main>
</template>
