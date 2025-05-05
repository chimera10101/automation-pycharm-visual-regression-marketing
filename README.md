# Visual Regression Suite for Marketing Website

## Features
- Snapshots of key pages (Home, About, Services, Contact)
- Multi-Viewport Testing (Desktop, Tablet, Mobile)
- Visual diff detection (`maxDiffPixels: 200`)
- GitHub Actions CI integration

## Demo Site Example: `https://example-marketing-site.com`

## Setup
```bash
npm install
npx playwright install
npm run test:visual
```

## Output
- `/snapshots/*.png`: Baseline snapshots (all viewports)
- Playwright HTML report shows diffs (if visual changes happen)

## Update Snapshots (if site layout changes intentionally)
```bash
npx playwright test --update-snapshots
```

## CI Integration
This project includes **GitHub Actions** workflow (`.github/workflows/playwright.yml`) to:
- Auto-run visual tests on push & PR
- Upload Playwright report artifacts