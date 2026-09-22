<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

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
    id: 'sau-portal',
    title: 'Universitätsportal für Studierende und Lehrende',
    client: 'Hochschulprojekt · Entwickler',
    technologies: ['Spring Boot', 'Keycloak', 'User Management', 'Java', 'REST'],
    summary: 'Entwicklung eines universitätsweiten Portals für Studierende und Lehrende – spezialisiert auf User-Management, Authentifizierung und Berechtigungen.',
    highlights: ['Keycloak-Integration', 'Schnittstellen anbieten', 'Mantainer für Spring Boot backends'],
  },
  {
    id: 'bestreads',
    title: ' Goodreads Alternative für Bücherliebhaber',
    client: 'Hochschulprojekt · Product Owner / Entwickler',
    technologies: ['Go', 'Fiber', 'Self-Hosting', 'OpenLibrary'],
    summary: 'Entwicklung einer Goodreads-Alternative für Bücherliebhaber – inklusive Bereitstellung auf einem Self-Hosting-Server.',
    highlights: ['Konnektivität und Integration', 'Bereitstellung auf Self-Hosting-Server', 'REST-Schnittstellen zwischen Frontend und Backend abstimmen'],
  },
]

const activeProject = ref<string | null>(null)
const toggleProject = (id: string) => {
  activeProject.value = activeProject.value === id ? null : id
}

type LegalPage = 'impressum' | 'datenschutz' | null

const pageFromHash = (): LegalPage => {
  const hash = window.location.hash.slice(1)
  return hash === 'impressum' || hash === 'datenschutz' ? hash : null
}

const legalPage = ref<LegalPage>(pageFromHash())
const setLegalPage = (page: LegalPage) => {
  window.location.hash = page ?? 'top'
  legalPage.value = page
  closeMenu()
}
const syncLegalPage = () => { legalPage.value = pageFromHash() }

onMounted(() => window.addEventListener('hashchange', syncLegalPage))
onUnmounted(() => window.removeEventListener('hashchange', syncLegalPage))
</script>

<template>
  <main>
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Startseite" @click="setLegalPage(null)"><span class="brand-mark"><img src="/src/assets/me.jpeg" alt="David Clara Figueiredo" /></span><span>David</span></a>
      <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-label="Menü öffnen" @click="menuOpen = !menuOpen"><span></span><span></span></button>
      <nav v-if="!legalPage" :class="{ open: menuOpen }" aria-label="Hauptnavigation">
        <a href="#ueber-mich" @click="closeMenu">Über mich</a><a href="#projekte" @click="closeMenu">Projekte</a><a href="#kontakt" class="nav-cta" @click="closeMenu">Kontakt</a>
      </nav>
      <nav v-else aria-label="Hauptnavigation"><a href="#top" @click="setLegalPage(null)">Zur Startseite</a></nav>
    </header>

    <template v-if="!legalPage">
    <section id="top" class="hero section-shell">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> Verfügbar für neue Projekte</p>
        <h1><em>David Clara Figueiredo</em><br />Softwareentwickler</h1>
        <p class="intro">Studierter Informatiker mit Leidenschaft für moderne Backend-Entwicklung.</p>
        <div class="hero-actions"><a class="button button-primary" href="#projekte">Meine Arbeit <span>↓</span></a><a class="text-link" href="#ueber-mich">Mehr über mich <span>↗</span></a></div>
      </div>
      <div class="hero-image"><img class="me"src="/src/assets/me.jpeg" alt="David" /></div>
<!--       <div class="hero-art" aria-label="Abstrakte geometrische Illustration">
        <div class="arch arch-one"></div><div class="arch arch-two"></div><div class="sun"></div><div class="ground-line"></div>
        <p class="art-note">based in<br /><strong>Germany</strong></p><p class="art-year">20<br />FOREVER</p>
      </div> -->
    </section>

    <section id="ueber-mich" class="about section-shell">
      <p class="section-label">01 / ÜBER MICH</p>
      <div class="about-grid">
        <h2>Neugierig bleiben.<br /><em>Bewusst gestalten.</em></h2>
        <div class="about-copy"><p>Ich bin David – jemand, der gerne zuhört, Fragen stellt und aus losen Gedanken etwas macht, das man verstehen und nutzen kann.</p><p>Ob Konzept, Design oder Umsetzung: Mir sind ehrliche Zusammenarbeit, die kleinen Details und ein gutes Gefühl beim Ergebnis wichtig.</p><a class="text-link" href="mailto:david.clara.figueiredo@gmail.com">Schreib mir eine Nachricht <span>↗</span></a></div>
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
      <!-- <a class="project-list-link" :href="projectListPdf" target="_blank" rel="noopener">Komplette Projektliste öffnen <span>↗</span></a> -->
    </section>

    <section id="kontakt" class="contact section-shell">
      <p class="section-label">03 / KONTAKT</p><div class="contact-content"><h2>Jederzeit erreichbar</h2><a class="mail-link" href="mailto:david.clara.figueiredo@gmail.com">david.clara.figueiredo@gmail.com <span>↗</span></a></div>
      <div class="contact-footer"><p>© 2026 David Clara Figueiredo</p><div><a href="https://www.linkedin.com/in/david-clara-figueiredo/" rel="external">LinkedIn</a><a href="#impressum" @click="setLegalPage('impressum')">Impressum</a><a href="#datenschutz" @click="setLegalPage('datenschutz')">Datenschutz</a></div></div>
    </section>
    </template>

    <section v-else class="legal-page section-shell" :aria-labelledby="`${legalPage}-title`">
      <template v-if="legalPage === 'impressum'">
        <p class="section-label">RECHTLICHES</p>
        <h1 id="impressum-title">Impressum</h1>
        <div class="legal-content">
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>David Clara Figueiredo<br />
            Endenicher Str. 334<br />
            53121 Bonn<br />
            Deutschland</p>
          <h2>Kontakt</h2>
          <p>E-Mail: <a href="mailto:david.clara.figueiredo@gmail.com">david.clara.figueiredo@gmail.com</a></p>
          <h2>Hinweis zu den Inhalten</h2>
          <p>Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Diese Website enthält keine Angebote zum unmittelbaren Vertragsschluss.</p>
        </div>
      </template>

      <template v-else>
        <p class="section-label">RECHTLICHES</p>
        <h1 id="datenschutz-title">Datenschutz&shy;erklärung</h1>
        <div class="legal-content">
          <h2>1. Verantwortlicher</h2>
          <p>David Clara Figueiredo<br />
            Endenicher Str. 334<br />
            53121 Bonn<br />
            Deutschland<br />
            E-Mail: <a href="mailto:david.clara.figueiredo@gmail.com">david.clara.figueiredo@gmail.com</a></p>

          <h2>2. Hosting und Zugriffsdaten</h2>
          <p>Diese Website wird über GitHub Pages bereitgestellt. Beim Aufruf verarbeitet der Hosting-Anbieter technisch erforderliche Zugriffsdaten, insbesondere IP-Adresse, Datum und Uhrzeit des Abrufs, angeforderte Datei, Referrer-URL sowie Angaben zu Browser und Betriebssystem. Die Verarbeitung dient der sicheren und zuverlässigen Bereitstellung der Website und erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen stellt GitHub in seiner <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="external">Datenschutzerklärung</a> bereit.</p>

          <h2>3. E-Mail-Kontakt</h2>
          <p>Wenn du per E-Mail Kontakt aufnimmst, verarbeite ich die von dir übermittelten Daten ausschließlich zur Bearbeitung deiner Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf einen Vertrag gerichtet ist, andernfalls Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>

          <h2>4. Externe Links</h2>
          <p>Diese Website verlinkt auf LinkedIn. Erst wenn du den Link aktiv anklickst, wird eine Verbindung zu LinkedIn hergestellt. Ab diesem Zeitpunkt gilt die Datenschutzerklärung von LinkedIn.</p>

          <h2>5. Keine Analyse- oder Marketingdienste</h2>
          <p>Diese Website verwendet keine eigenen Cookies, kein Tracking, keine Analyse- oder Marketingdienste und keine extern eingebundenen Schriftarten. Daher wird kein Cookie-Banner eingesetzt.</p>

          <h2>6. Deine Rechte</h2>
          <p>Du hast nach Maßgabe der DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen. Außerdem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.</p>
        </div>
      </template>
      <p class="legal-back"><a class="button button-primary" href="#top" @click="setLegalPage(null)">Zur Startseite <span>↑</span></a></p>
    </section>
  </main>
</template>
