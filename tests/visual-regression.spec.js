import { test, expect } from '@playwright/test';

const pagesToTest = [
  { name: 'Home', path: '/'},
  { name: 'Reservation', path: 'reservation/start'},
  { name: 'User SignIN', path: 'users/sign_in?from_sign_in=true'}
];

const viewports = [
 { name: 'desktop', width:1280, height: 720},
 { name: 'tablet', width:768, height:1024},
 { name: 'mobile', width: 375, height: 667}
];

test.describe(`Visual Regression Suite (Multi-Viewport)`, () => {
  for (const viewport of viewports) {
    test.describe(`${viewport.name} view`, () => {
      for (const pageInfo of pagesToTest) {
        test(`${pageInfo.name} page matches snapshot (${viewport.name})`, async ({ page }) => {
          await page.setViewportSize ({ width: viewport.width, height: viewport.height});
          await page.goto('https://example-marketing-site.com/${pageInfo.path}');
          await page.waitForLoadState('networkidle');

          expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(`${pageInfo.name.toLowerCase()}-${viewport.name}.png`, {
            maxDiffPixels: 200,
                });
              });
            }
          });
        }
      });