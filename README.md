# Portfolio

Public portfolio site for **Lordwill Kandiro**: Java / Spring Boot / Angular engineer building enterprise production platforms, with merged upstream contributions and public OSS projects.

**Live site:** [https://portfolio.lordkay.com](https://portfolio.lordkay.com)

**Source:** [github.com/LordKay-sudo/portfolio](https://github.com/LordKay-sudo/portfolio)

Open-source proof on the site includes merged PRs in [Angular](https://github.com/angular/angular/pull/69548), [Spring Boot](https://github.com/spring-projects/spring-boot/pull/50886) and [Embabel](https://github.com/embabel/embabel-agent/pull/1773), plus personal projects such as [OntoHarness](https://github.com/LordKay-sudo/ontoharness), [GapForge](https://github.com/LordKay-sudo/gapforge), [BioInsight Graph](https://github.com/LordKay-sudo/bioinsight-graph) and [PeerLens](https://github.com/LordKay-sudo/peerlens).

---

## Deploy (GitHub Pages)

Pushes to `main` run [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml) and publish to GitHub Pages.

- **Custom domain:** `portfolio.lordkay.com` (see [`public/CNAME`](public/CNAME))
- **Build:** `npm ci && npm run build -- --configuration production`
- **Artifact:** `dist/portfolio/browser`

After changing `portfolio.data.ts`, push to `main` and the live site updates in ~1 minute.

---

## Development

```bash
npm install
ng serve
```

Open [http://localhost:4200](http://localhost:4200).

### Production build

```bash
npm run build -- --configuration production
```

---

## Content

Copy and featured projects live in [`src/app/portfolio.data.ts`](src/app/portfolio.data.ts).

---

## Additional resources

- [Angular CLI documentation](https://angular.dev/tools/cli)
