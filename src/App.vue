<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { siteContent } from './content'

const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }

const availabilityLabel = computed(() => (
  siteContent.hero.isAvailable
    ? siteContent.hero.availableLabel
    : siteContent.hero.unavailableLabel
))

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
const legalContent = computed(() => {
  if (legalPage.value === 'impressum') return siteContent.legal.imprint
  if (legalPage.value === 'datenschutz') return siteContent.legal.privacy
  return null
})
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
      <a class="brand" href="#top" :aria-label="siteContent.navigation.homeAriaLabel" @click="setLegalPage(null)"><span class="brand-mark"><img src="/src/assets/me.jpeg" :alt="siteContent.person.name" /></span><span>{{ siteContent.person.shortName }}</span></a>
      <button class="menu-button" type="button" :aria-expanded="menuOpen" :aria-label="siteContent.navigation.menuAriaLabel" @click="menuOpen = !menuOpen"><span></span><span></span></button>
      <nav v-if="!legalPage" :class="{ open: menuOpen }" :aria-label="siteContent.navigation.mainAriaLabel">
        <a href="#ueber-mich" @click="closeMenu">{{ siteContent.navigation.about }}</a><a href="#projekte" @click="closeMenu">{{ siteContent.navigation.projects }}</a><a href="#kontakt" class="nav-cta" @click="closeMenu">{{ siteContent.navigation.contact }}</a>
      </nav>
      <nav v-else :aria-label="siteContent.navigation.mainAriaLabel"><a href="#top" @click="setLegalPage(null)">{{ siteContent.navigation.backToHome }}</a></nav>
    </header>

    <template v-if="!legalPage">
    <section id="top" class="hero section-shell">
      <div class="hero-copy">
        <p class="eyebrow" :class="{ unavailable: !siteContent.hero.isAvailable }"><span class="status-dot"></span> {{ availabilityLabel }}</p>
        <h1><em>{{ siteContent.person.name }}</em><br />{{ siteContent.hero.role }}</h1>
        <p class="intro">{{ siteContent.hero.intro }}</p>
        <div class="hero-actions"><a class="button button-primary" href="#projekte">{{ siteContent.hero.projectsLink }} <span>↓</span></a><a class="text-link" href="#ueber-mich">{{ siteContent.hero.aboutLink }} <span>↗</span></a></div>
      </div>
      <div class="hero-image"><img class="me"src="/src/assets/me.jpeg" :alt="siteContent.hero.imageAlt" /></div>
    </section>

    <section id="ueber-mich" class="about section-shell">
      <p class="section-label">{{ siteContent.about.label }}</p>
      <div class="about-grid">
        <h2>{{ siteContent.about.heading[0] }}<br /><em>{{ siteContent.about.heading[1] }}</em></h2>
        <div class="about-copy"><p v-for="paragraph in siteContent.about.paragraphs" :key="paragraph">{{ paragraph }}</p><a class="text-link" :href="`mailto:${siteContent.person.email}`">{{ siteContent.about.mailLink }} <span>↗</span></a></div>
      </div>
      <div class="facts">
        <div v-for="fact in siteContent.about.facts" :key="fact.label" class="fact"><span>{{ fact.label }}</span><strong>{{ fact.value[0] }}<br />{{ fact.value[1] }}</strong></div>
      </div>
    </section>

    <section id="projekte" class="work section-shell">
      <div class="section-heading"><p class="section-label">{{ siteContent.projectsSection.label }}</p><p>{{ siteContent.projectsSection.intro }}</p></div>
      <div class="project-list">
        <article v-for="(project, index) in siteContent.projects" :key="project.id" class="project" :class="`project-${index + 1}`">
          <div class="project-topline"><span class="project-number">0{{ index + 1 }}</span><span class="project-client">{{ project.client }}</span></div>
          <div class="project-monogram" aria-hidden="true">0{{ index + 1 }}</div>
          <div class="project-info"><h3>{{ project.title }}</h3><p>{{ project.technologies.slice(0, 3).join(' · ') }}</p></div>
          <button class="project-toggle" type="button" :aria-expanded="activeProject === project.id" :aria-controls="`${project.id}-details`" @click="toggleProject(project.id)">{{ siteContent.projectsSection.detailsButton }} <span>{{ activeProject === project.id ? '−' : '+' }}</span></button>
          <div :id="`${project.id}-details`" class="project-details" :class="{ open: activeProject === project.id }">
            <p>{{ project.summary }}</p>
            <ul><li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li></ul>
            <div class="technology-list"><span v-for="technology in project.technologies" :key="technology">{{ technology }}</span></div>
          </div>
        </article>
      </div>
    </section>

    <section id="kontakt" class="contact section-shell">
      <p class="section-label">{{ siteContent.contact.label }}</p><div class="contact-content"><h2>{{ siteContent.contact.heading }}</h2><a class="mail-link" :href="`mailto:${siteContent.person.email}`">{{ siteContent.person.email }} <span>↗</span></a></div>
      <div class="contact-footer"><p>{{ siteContent.contact.copyright }}</p><div><a :href="siteContent.contact.linkedInUrl" rel="external">{{ siteContent.contact.linkedInLabel }}</a><a href="#impressum" @click="setLegalPage('impressum')">{{ siteContent.contact.imprintLabel }}</a><a href="#datenschutz" @click="setLegalPage('datenschutz')">{{ siteContent.contact.privacyLabel }}</a></div></div>
    </section>
    </template>

    <section v-else class="legal-page section-shell" :aria-labelledby="`${legalPage}-title`">
      <template v-if="legalContent">
        <p class="section-label">{{ siteContent.legal.label }}</p>
        <h1 :id="`${legalPage}-title`">{{ legalContent.title }}</h1>
        <div class="legal-content">
          <template v-for="section in legalContent.sections" :key="section.title">
            <h2>{{ section.title }}</h2>
            <p>
              <template v-for="(line, index) in section.lines" :key="line">
                <template v-if="line === `E-Mail: ${siteContent.person.email}`">E-Mail: <a :href="`mailto:${siteContent.person.email}`">{{ siteContent.person.email }}</a></template>
                <template v-else>{{ line }}</template><br v-if="index < section.lines.length - 1" />
              </template>
              <template v-if="section.link"> <a :href="section.link.url" rel="external">{{ section.link.label }}</a></template>
            </p>
          </template>
        </div>
      </template>
      <p class="legal-back"><a class="button button-primary" href="#top" @click="setLegalPage(null)">{{ siteContent.legal.backButton }} <span>↑</span></a></p>
    </section>
  </main>
</template>
