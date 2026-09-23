// Alle redaktionellen Inhalte der Website werden hier gepflegt.
// Änderungen an diesem Objekt erscheinen automatisch auf der Seite.
export const siteContent = {
  person: {
    name: 'David Clara Figueiredo',
    shortName: 'David',
    email: 'david.clara.figueiredo@gmail.com',
    location: ['Endenicher Str. 334', '53121 Bonn', 'Deutschland'],
  },
  navigation: {
    homeAriaLabel: 'Startseite',
    menuAriaLabel: 'Menü öffnen',
    mainAriaLabel: 'Hauptnavigation',
    about: 'Über mich',
    projects: 'Projekte',
    contact: 'Kontakt',
    backToHome: 'Zur Startseite',
  },
  hero: {
    // Auf `false` setzen, wenn keine neuen Projekte angenommen werden.
    isAvailable: false,
    availableLabel: 'Verfügbar für neue Projekte',
    unavailableLabel: 'Derzeit nicht verfügbar',
    role: 'Softwareentwickler',
    intro: 'Studierter Informatiker mit Leidenschaft für moderne Backend-Entwicklung.',
    projectsLink: 'Meine Arbeit',
    aboutLink: 'Mehr über mich',
    imageAlt: 'David',
  },
  about: {
    label: '01 / ÜBER MICH',
    heading: ['Neugierig bleiben.', 'Software gestalten.'],
    paragraphs: [
      'Ich bin David, Softwareentwickler mit Fokus auf moderne Backend-Systeme. Besonders gerne arbeite ich mit Java, Spring Boot und Cloud-Technologien und entwickle Lösungen, die verständlich, zuverlässig und langfristig wartbar sind.',
      'Neben der technischen Umsetzung interessieren mich Softwarearchitektur, agile Zusammenarbeit und neue Technologien wie generative KI. Wichtig sind mir dabei saubere Lösungen, kontinuierliches Lernen und der Blick über den Code hinaus.',
    ],
    mailLink: 'Schreib mir eine Nachricht',
    facts: [
      { label: 'FOKUS', value: ['Digital &', 'Kreativ'] },
      { label: 'ARBEITSWEISE', value: ['Neugierig &', 'nahbar'] },
      { label: 'STANDORT', value: ['Deutschland', '+ remote'] },
    ],
  },
  projectsSection: {
    label: '02 / PROJEKTE',
    intro: 'Ein Einblick in Projekte aus Backend-Entwicklung, Automatisierung und Produktarbeit.',
    detailsButton: 'Details',
  },
  projects: [
    {
      id: 'template-generator', title: 'Template Generator für Spring-Boot-Services', client: 'Deutsche Telekom IT',
      technologies: ['Java', 'Spring Boot', 'Mustache', 'Spring Initializr', 'REST', 'Git'],
      summary: 'Ein interner Generator, der neue Spring-Boot-Services mit einheitlicher Struktur, vorkonfigurierten Dependencies und sinnvollen Grundeinstellungen erstellt.',
      highlights: ['Weiterentwicklung des Template Generators', 'Erstellung und Pflege von Mustache-Templates', 'Standardisierung des initialen Projektaufbaus'],
    },
    {
      id: 'openshift-deployment', title: 'Deployment von Spring-Boot-Services in OpenShift', client: 'Deutsche Telekom IT',
      technologies: ['Docker', 'Kubernetes', 'OpenShift', 'CI/CD', 'Git'],
      summary: 'Automatisierung des Deployments von Spring-Boot-basierten Services inklusive der benötigten Konfiguration und Betriebsressourcen.',
      highlights: ['CI/CD-Pipelines für Builds und Deployments', 'Secrets und Konfigurationsdaten verwalten', 'Kubernetes- und OpenShift-CronJobs einrichten'],
    },
    {
      id: 'sporttrainer', title: 'Verwaltungsprogramm für Sporttrainer', client: 'Hochschulprojekt · Product Owner / Entwickler',
      technologies: ['Go', 'Gin', 'REST', 'Frontend', 'Backend', 'Git'],
      summary: 'Webanwendung zur Verwaltung von Sporttrainern – von der fachlichen Priorisierung bis zur Integration des Go-Backends in die Deployment-Umgebung.',
      highlights: ['Product Backlog strukturieren und priorisieren', 'Go-/Gin-Backend in die Deployment-Umgebung integrieren', 'REST-Schnittstellen zwischen Frontend und Backend abstimmen'],
    },
    {
      id: 'go-fiber-migration', title: 'Migration eines Spring-Boot-Services zu Go/Fiber', client: 'Deutsche Telekom IT',
      technologies: ['Go', 'Fiber', 'Java', 'Spring Boot', 'Kubernetes', 'AWS'],
      summary: 'Migration eines bestehenden Spring-Boot-Services zu einer schlankeren Umsetzung mit Go und Fiber – inklusive Bereitstellung auf einem Kubernetes-Cluster in AWS.',
      highlights: ['Service auf Go und Fiber migrieren', 'Bereitstellung auf Kubernetes in AWS', 'Bestehende Abläufe und Schnittstellen weiterführen'],
    },
    {
      id: 'sau-portal', title: 'Universitätsportal für Studierende und Lehrende', client: 'Hochschulprojekt · Entwickler',
      technologies: ['Spring Boot', 'Keycloak', 'User Management', 'Java', 'REST'],
      summary: 'Entwicklung eines universitätsweiten Portals für Studierende und Lehrende – spezialisiert auf User-Management, Authentifizierung und Berechtigungen.',
      highlights: ['Keycloak-Integration', 'Schnittstellen anbieten', 'Mantainer für Spring Boot backends'],
    },
    {
      id: 'bestreads', title: 'Goodreads Alternative für Bücherliebhaber', client: 'Hochschulprojekt · Product Owner / Entwickler',
      technologies: ['Go', 'Fiber', 'Self-Hosting', 'OpenLibrary'],
      summary: 'Entwicklung einer Goodreads-Alternative für Bücherliebhaber – inklusive Bereitstellung auf einem Self-Hosting-Server.',
      highlights: ['Konnektivität und Integration', 'Bereitstellung auf Self-Hosting-Server', 'REST-Schnittstellen zwischen Frontend und Backend abstimmen'],
    },
  ],
  contact: {
    label: '03 / KONTAKT',
    heading: 'Jederzeit erreichbar',
    copyright: '© 2026 David Clara Figueiredo',
    linkedInLabel: 'LinkedIn',
    linkedInUrl: 'https://www.linkedin.com/in/david-clara-figueiredo/',
    imprintLabel: 'Impressum',
    privacyLabel: 'Datenschutz',
  },
  legal: {
    label: 'RECHTLICHES',
    imprint: {
      title: 'Impressum',
      sections: [
        { title: 'Angaben gemäß § 5 DDG', lines: ['David Clara Figueiredo', 'Endenicher Str. 334', '53121 Bonn', 'Deutschland'], link: undefined },
        { title: 'Kontakt', lines: ['E-Mail: david.clara.figueiredo@gmail.com'], link: undefined },
        { title: 'Hinweis zu den Inhalten', lines: ['Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Diese Website enthält keine Angebote zum unmittelbaren Vertragsschluss.'], link: undefined },
      ],
    },
    privacy: {
      title: 'Datenschutzerklärung',
      sections: [
        { title: '1. Verantwortlicher', lines: ['David Clara Figueiredo', 'Endenicher Str. 334', '53121 Bonn', 'Deutschland', 'E-Mail: david.clara.figueiredo@gmail.com'], link: undefined },
        { title: '2. Hosting und Zugriffsdaten', lines: ['Diese Website wird über GitHub Pages bereitgestellt. Beim Aufruf verarbeitet der Hosting-Anbieter technisch erforderliche Zugriffsdaten, insbesondere IP-Adresse, Datum und Uhrzeit des Abrufs, angeforderte Datei, Referrer-URL sowie Angaben zu Browser und Betriebssystem. Die Verarbeitung dient der sicheren und zuverlässigen Bereitstellung der Website und erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen:'], link: { label: 'GitHub-Datenschutzerklärung', url: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement' } },
        { title: '3. E-Mail-Kontakt', lines: ['Wenn du per E-Mail Kontakt aufnimmst, verarbeite ich die von dir übermittelten Daten ausschließlich zur Bearbeitung deiner Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf einen Vertrag gerichtet ist, andernfalls Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.'], link: undefined },
        { title: '4. Externe Links', lines: ['Diese Website verlinkt auf LinkedIn. Erst wenn du den Link aktiv anklickst, wird eine Verbindung zu LinkedIn hergestellt. Ab diesem Zeitpunkt gilt die Datenschutzerklärung von LinkedIn.'], link: undefined },
        { title: '5. Keine Analyse- oder Marketingdienste', lines: ['Diese Website verwendet keine eigenen Cookies, kein Tracking, keine Analyse- oder Marketingdienste und keine extern eingebundenen Schriftarten. Daher wird kein Cookie-Banner eingesetzt.'], link: undefined },
        { title: '6. Deine Rechte', lines: ['Du hast nach Maßgabe der DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen. Außerdem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.'], link: undefined },
      ],
    },
    backButton: 'Zur Startseite',
  },
} as const
