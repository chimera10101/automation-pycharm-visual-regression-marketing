import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  snapshotDir: './snapshots',
  retries: 0,
  fullyParallel: true,
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  },
  reporter: [['html'], ['list']]
});