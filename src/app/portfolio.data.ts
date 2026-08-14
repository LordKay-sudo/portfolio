/**
 * Portfolio copy derived from CV (generic no-references resume / PDF).
 * Name is the brand signal; email is the only contact detail on the public site.
 */

export const BRAND_NAME = 'Lordwill Kandiro';

export const CONTACT_EMAIL = 'lkandiro@gmail.com';

export const GITHUB_PROFILE_URL = 'https://github.com/LordKay-sudo';

export const PORTFOLIO_SITE_URL = 'https://portfolio.lordkay.com';

export const GITHUB_REPO_URL = 'https://github.com/LordKay-sudo/portfolio';

export const HERO_HEADLINE = 'Full-stack engineer';

export const HERO_SUBTITLE =
  'I build production platforms with Spring Boot, Angular, and secure APIs—ERP workflows, integrations, and AI-assisted document systems that stay reliable in live environments.';

export const SUMMARY =
  'Full-stack developer with 5+ years building and supporting enterprise web platforms using Spring Boot, Spring Data JPA, Hibernate, Angular, and relational databases. Delivers ERP modules, financial and operations workflows, and secure API-driven integrations across multiple domains—with solid backend architecture, frontend delivery, cloud-enabled deployments, and long-term production support.';

export interface SkillChip {
  readonly title: string;
  /** Official docs or home; omit for plain chips. */
  readonly link: string | null;
}

export const SKILL_CHIPS: readonly SkillChip[] = [
  { title: 'Java', link: 'https://dev.java' },
  { title: 'Spring Boot', link: 'https://spring.io/projects/spring-boot' },
  { title: 'Spring Security', link: 'https://spring.io/projects/spring-security' },
  { title: 'Spring Data / JPA', link: 'https://spring.io/projects/spring-data-jpa' },
  { title: 'REST APIs', link: null },
  { title: 'Angular', link: 'https://angular.dev' },
  { title: 'TypeScript', link: 'https://www.typescriptlang.org' },
  { title: 'HTML / CSS', link: null },
  { title: 'MySQL', link: 'https://www.mysql.com' },
  { title: 'PostgreSQL', link: 'https://www.postgresql.org' },
  { title: 'MongoDB', link: 'https://www.mongodb.com' },
  { title: 'Flyway', link: 'https://flywaydb.org' },
  { title: 'Amazon Bedrock', link: 'https://aws.amazon.com/bedrock/' },
  { title: 'Knowledge Bases & RAG', link: 'https://aws.amazon.com/bedrock/knowledge-bases/' },
  { title: 'Spring AI', link: 'https://spring.io/projects/spring-ai' },
  { title: 'AWS', link: 'https://aws.amazon.com' },
  { title: 'GCP', link: 'https://cloud.google.com' },
  { title: 'Maven', link: 'https://maven.apache.org' },
  { title: 'Git', link: 'https://git-scm.com' },
  { title: 'Jenkins', link: 'https://www.jenkins.io' },
  { title: 'Linux / Windows ops', link: null },
  { title: 'Python', link: 'https://www.python.org' },
];

/** Public / open-source pieces that hiring managers can click through. */
export interface FeaturedWork {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly stack: string;
}

export const FEATURED_WORK: readonly FeaturedWork[] = [
  {
    title: 'Angular compiler-cli',
    description:
      'Merged bugfix in angular/angular: stop a TypeScript 5.9 crash during incremental rebuilds so diagnostics keep working after files change.',
    href: 'https://github.com/angular/angular/pull/69548',
    stack: 'TypeScript · compiler-cli · merged PR',
  },
  {
    title: 'OntoHarness',
    description:
      'Competency-question contracts for AI agents—closed-world vocab gate plus SHACL validation before graph commits, with Spring AI Advisor and GapForge HITL integration.',
    href: 'https://github.com/LordKay-sudo/ontoharness',
    stack: 'Python · SHACL · Spring AI',
  },
  {
    title: 'BioInsight Graph',
    description:
      'Disease–target knowledge graph with FastAPI, Neo4j, and a React explorer—ranked associations, provenance, and literature-aware retrieval demos.',
    href: 'https://github.com/LordKay-sudo/bioinsight-graph',
    stack: 'FastAPI · Neo4j · React',
  },
  {
    title: 'GapForge',
    description:
      'Translational gap hunter that proposes literature- and graph-backed hypotheses for stalled programs—agents propose, humans dispose.',
    href: 'https://github.com/LordKay-sudo/gapforge',
    stack: 'Python · Agents · Graph',
  },
  {
    title: 'PeerLens',
    description:
      'Open infrastructure for transparent research quality signals—explainable automated checks, Crossref/arXiv ingest, and cited RAG Q&A on papers.',
    href: 'https://github.com/LordKay-sudo/peerlens',
    stack: 'FastAPI · RAG · Web UI',
  },
];

/** Selected projects — aligned with generic resume (PDF) “Selected Projects”. */
export interface SelectedProject {
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
}

export const SELECTED_PROJECTS: readonly SelectedProject[] = [
  {
    title: 'Order-to-cash & procure-to-pay',
    description:
      'ERP flows for sales and purchase orders—approvals, status traceability, and operational controls in live environments.',
    tags: ['ERP', 'Workflows'],
  },
  {
    title: 'Document-integrated transactions',
    description:
      'Order and invoice upload paths tied to approval stages, compliance records, and audit-ready history.',
    tags: ['Documents', 'Compliance'],
  },
  {
    title: 'Approval & notification automation',
    description:
      'Role-based approval pipelines with event-driven email notifications, escalation visibility, and controlled action paths.',
    tags: ['Automation', 'RBAC'],
  },
  {
    title: 'Cloud-connected integrations',
    description:
      'Enterprise workflows wired to GCP-connected components for secure data exchange, automation, and reporting continuity.',
    tags: ['GCP', 'Integrations'],
  },
  {
    title: 'Logistics & fleet operations',
    description:
      'Process modules for dispatch, tracking visibility, and multi-step transport operations in production.',
    tags: ['Logistics', 'Operations'],
  },
  {
    title: 'RFID & NFC-enabled workflows',
    description:
      'RFID and NFC capture integrated into logistics and event-style operations for faster tracking and cleaner data.',
    tags: ['RFID', 'NFC'],
  },
  {
    title: 'Hardware-assisted inventory',
    description:
      'Stock workflows linked to readers, scanners, and weight-linked stations for reliable movement verification.',
    tags: ['Hardware', 'Inventory'],
  },
  {
    title: 'Multi-tenant operational platforms',
    description:
      'Configurable, tenant-aware modules with role-based access and process separation across organizations.',
    tags: ['Multi-tenant', 'SaaS'],
  },
  {
    title: 'Financial infrastructure monitoring',
    description:
      'Production support and ongoing improvements for a monitoring platform used by banks and payment processors to maintain operational visibility.',
    tags: ['Monitoring', 'Financial services'],
  },
];
