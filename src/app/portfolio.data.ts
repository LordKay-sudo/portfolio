/**
 * Portfolio copy for the public site.
 * Name is the brand signal; email is the only contact detail shown.
 */

export const BRAND_NAME = 'Lordwill Kandiro';

export const CONTACT_EMAIL = 'lkandiro@gmail.com';

export const GITHUB_PROFILE_URL = 'https://github.com/LordKay-sudo';

export const PORTFOLIO_SITE_URL = 'https://portfolio.lordkay.com';

export const GITHUB_REPO_URL = 'https://github.com/LordKay-sudo/portfolio';

export const HERO_HEADLINE = 'Java, Spring Boot & Angular for production systems';

export const HERO_SUBTITLE =
  'I ship enterprise platforms (ERP workflows, secure APIs, integrations) and contribute upstream to Angular, Spring Boot and Embabel.';

export const SUMMARY =
  'More than five years building and supporting enterprise web platforms on Spring Boot, Spring Data JPA, Hibernate, Angular and relational databases. Day-to-day work covers order flows, approvals, logistics, multi-tenant modules, document-linked transactions and the APIs that keep them connected. Outside that delivery, I contribute merged fixes and features to major open-source projects. I care about release safety, clear access control and code other people can still run months later.';

export type SkillCategory = 'Backend' | 'Frontend' | 'Data' | 'Cloud' | 'Tools' | 'AI';

export interface SkillChip {
  readonly title: string;
  /** Official docs or home; omit for plain chips. */
  readonly link: string | null;
  readonly category: SkillCategory;
}

export const SKILL_CATEGORIES = ['All', 'Backend', 'Frontend', 'Data', 'Cloud', 'Tools', 'AI'] as const;

export type SkillFilter = (typeof SKILL_CATEGORIES)[number];

export const SKILL_CHIPS: readonly SkillChip[] = [
  { title: 'Java', link: 'https://dev.java', category: 'Backend' },
  { title: 'Spring Boot', link: 'https://spring.io/projects/spring-boot', category: 'Backend' },
  { title: 'Spring Security', link: 'https://spring.io/projects/spring-security', category: 'Backend' },
  { title: 'Spring Data / JPA', link: 'https://spring.io/projects/spring-data-jpa', category: 'Backend' },
  { title: 'REST APIs', link: null, category: 'Backend' },
  { title: 'Angular', link: 'https://angular.dev', category: 'Frontend' },
  { title: 'TypeScript', link: 'https://www.typescriptlang.org', category: 'Frontend' },
  { title: 'HTML / CSS', link: null, category: 'Frontend' },
  { title: 'MySQL', link: 'https://www.mysql.com', category: 'Data' },
  { title: 'PostgreSQL', link: 'https://www.postgresql.org', category: 'Data' },
  { title: 'MongoDB', link: 'https://www.mongodb.com', category: 'Data' },
  { title: 'Flyway', link: 'https://flywaydb.org', category: 'Data' },
  { title: 'AWS', link: 'https://aws.amazon.com', category: 'Cloud' },
  { title: 'GCP', link: 'https://cloud.google.com', category: 'Cloud' },
  { title: 'Maven', link: 'https://maven.apache.org', category: 'Tools' },
  { title: 'Git', link: 'https://git-scm.com', category: 'Tools' },
  { title: 'Jenkins', link: 'https://jenkins.io', category: 'Tools' },
  { title: 'Linux / Windows ops', link: null, category: 'Tools' },
  { title: 'Python', link: 'https://www.python.org', category: 'Backend' },
  { title: 'Vector databases', link: 'https://aws.amazon.com/what-is/vector-databases/', category: 'AI' },
  { title: 'Embabel', link: 'https://github.com/embabel/embabel-agent', category: 'AI' },
  { title: 'Spring AI', link: 'https://spring.io/projects/spring-ai', category: 'AI' },
  { title: 'LangGraph', link: 'https://langchain-ai.github.io/langgraph/', category: 'AI' },
  { title: 'Amazon Bedrock', link: 'https://aws.amazon.com/bedrock/', category: 'AI' },
  { title: 'Amazon Knowledge Bases', link: 'https://aws.amazon.com/bedrock/knowledge-bases/', category: 'AI' },
];

/** Public / open-source pieces that hiring managers can click through. */
export interface FeaturedWork {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly stack: string;
}

/** Open-source: upstream merged PRs first, then personal projects. */
export const FEATURED_WORK: readonly FeaturedWork[] = [
  {
    title: 'Angular compiler-cli',
    description:
      'Merged bug fix in angular/angular: stop a TypeScript 5.9 crash during incremental rebuilds so diagnostics keep working after files change.',
    href: 'https://github.com/angular/angular/pull/69548',
    stack: 'TypeScript / compiler-cli / merged PR',
  },
  {
    title: 'Spring Boot Micrometer lifecycle',
    description:
      'Merged fix in spring-projects/spring-boot: stop Micrometer registries from pinning application contexts on shutdown (memory leak under heavy test and runtime load).',
    href: 'https://github.com/spring-projects/spring-boot/pull/50886',
    stack: 'Java / Micrometer / merged PR',
  },
  {
    title: 'Spring Boot metrics test defaults',
    description:
      'Merged follow-up in spring-projects/spring-boot: disable the Micrometer global registry in tests by default so cached contexts stay isolated.',
    href: 'https://github.com/spring-projects/spring-boot/pull/51142',
    stack: 'Java / Spring Boot Test / merged PR',
  },
  {
    title: 'Embabel MCP Actuator health',
    description:
      'Merged feature in embabel/embabel-agent: expose MCP server readiness through Spring Boot Actuator with configurable tool thresholds.',
    href: 'https://github.com/embabel/embabel-agent/pull/1773',
    stack: 'Kotlin / Actuator / merged PR',
  },
  {
    title: 'Embabel Dice context-scoped history',
    description:
      'Merged fix in embabel/dice: scope chunk deduplication and analysis bookmarks by context so multi-session runs do not leak state.',
    href: 'https://github.com/embabel/dice/pull/33',
    stack: 'Kotlin / Agents / merged PR',
  },
  {
    title: 'OntoHarness',
    description:
      'Competency-question contracts for agent workflows: closed-world vocab gate and SHACL validation before graph commits, with Spring AI Advisor and GapForge human-in-the-loop integration.',
    href: 'https://github.com/LordKay-sudo/ontoharness',
    stack: 'Python / SHACL / Spring AI',
  },
  {
    title: 'BioInsight Graph',
    description:
      'Disease-target knowledge graph with FastAPI, Neo4j and a React explorer: ranked associations, provenance and literature-aware retrieval demos.',
    href: 'https://github.com/LordKay-sudo/bioinsight-graph',
    stack: 'FastAPI / Neo4j / React',
  },
  {
    title: 'GapForge',
    description:
      'Translational gap hunter that proposes literature- and graph-backed hypotheses for stalled programs. Agents propose; humans decide.',
    href: 'https://github.com/LordKay-sudo/gapforge',
    stack: 'Python / Agents / Graph',
  },
  {
    title: 'PeerLens',
    description:
      'Open infrastructure for research quality signals: explainable automated checks, Crossref/arXiv ingest and cited retrieval Q&A on papers.',
    href: 'https://github.com/LordKay-sudo/peerlens',
    stack: 'FastAPI / RAG / Web UI',
  },
  {
    title: 'SSE operations dashboards',
    description:
      'Server-sent events pattern for live operations dashboards: push updates without polling noise.',
    href: 'https://github.com/LordKay-sudo/server-sent-events-dashboards',
    stack: 'Spring Boot / SSE',
  },
  {
    title: 'AI support copilot API',
    description:
      'Support-copilot style API sketch: retrieval-backed answers with clear request/response boundaries for ops tooling.',
    href: 'https://github.com/LordKay-sudo/ai-support-copilot-api',
    stack: 'Spring Boot / APIs',
  },
  {
    title: 'gRPC billing platform sketch',
    description:
      'Spring Boot gRPC billing platform sketch for service-to-service billing flows and contract-first APIs.',
    href: 'https://github.com/LordKay-sudo/spring-boot-grpc-billing-platform',
    stack: 'Spring Boot / gRPC',
  },
];

/** Enterprise production delivery highlights. */
export interface SelectedProject {
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
}

export const SELECTED_PROJECTS: readonly SelectedProject[] = [
  {
    title: 'Order-to-cash & procure-to-pay',
    description:
      'Built and maintained ERP sales and purchase order flows with multi-stage approvals, status traceability and operational controls used daily in production.',
    tags: ['ERP', 'Workflows'],
  },
  {
    title: 'Document-integrated transactions',
    description:
      'Tied order and invoice upload paths to approval stages, compliance records and audit-ready history so finance and ops share one trail.',
    tags: ['Documents', 'Compliance'],
  },
  {
    title: 'Approval & notification automation',
    description:
      'Role-based approval pipelines with event-driven email notifications, escalation visibility and controlled action paths across business units.',
    tags: ['Automation', 'RBAC'],
  },
  {
    title: 'Cloud-connected integrations',
    description:
      'Wired enterprise workflows to GCP-connected components for secure data exchange, automation and reporting continuity under production load.',
    tags: ['GCP', 'Integrations'],
  },
  {
    title: 'Logistics & fleet operations',
    description:
      'Delivered process modules for dispatch, tracking visibility and multi-step transport operations running in live logistics environments.',
    tags: ['Logistics', 'Operations'],
  },
  {
    title: 'RFID & NFC-enabled workflows',
    description:
      'Integrated RFID and NFC capture into logistics and event-style operations for faster tracking and cleaner field data.',
    tags: ['RFID', 'NFC'],
  },
  {
    title: 'Hardware-assisted inventory',
    description:
      'Linked stock workflows to readers, scanners and weight-linked stations so movement verification matches what the floor actually sees.',
    tags: ['Hardware', 'Inventory'],
  },
  {
    title: 'Multi-tenant operational platforms',
    description:
      'Shipped configurable, tenant-aware modules with role-based access and process separation across organizations on shared platforms.',
    tags: ['Multi-tenant', 'SaaS'],
  },
  {
    title: 'Financial infrastructure monitoring',
    description:
      'Production support and ongoing improvements for a monitoring platform used by banks and payment processors.',
    tags: ['Monitoring', 'Financial services'],
  },
];

export const WORK_PREVIEW_COUNT = 5;
