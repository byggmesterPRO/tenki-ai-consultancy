import { test, expect } from "@playwright/test";

const publicPages = [
  { path: "/philosophy", title: /Philosophy/i, heading: /Beyond the/i },
  { path: "/services", title: /Services/i, heading: /Precision tools/i },
  { path: "/approach", title: /Approach/i, heading: /Tenki Method/i },
  { path: "/contact", title: /Contact/i, heading: /Ready to optimize/i },
  { path: "/privacy", title: /Privacy/i, heading: /Privacy Policy/i },
  { path: "/impressum", title: /Impressum/i, heading: /Impressum/i },
];

test.describe("Page Navigation", () => {
  for (const page of publicPages) {
    test(`should load ${page.path} page`, async ({ page: p }) => {
      await p.goto(page.path);
      await expect(p).toHaveTitle(page.title);
      await expect(p.getByRole("heading", { level: 1 })).toContainText(
        page.heading
      );
    });
  }

  test("should navigate between pages via header links", async ({ page }) => {
    await page.goto("/");

    // Click Philosophy link
    await page.getByRole("link", { name: "Philosophy" }).first().click();
    await expect(page).toHaveURL("/philosophy");

    // Click Services link
    await page.getByRole("link", { name: "Services" }).first().click();
    await expect(page).toHaveURL("/services");

    // Click logo to go home
    await page.locator("header a").first().click();
    await expect(page).toHaveURL("/");
  });

  test("should navigate to blog page", async ({ page }) => {
    await page.goto("/blog");
    await expect(page).toHaveTitle(/Blog/i);
  });

  test("footer links should navigate to correct pages", async ({ page }) => {
    await page.goto("/");

    await page.locator("footer").getByText("Privacy Policy").click();
    await expect(page).toHaveURL("/privacy");

    await page.goto("/");
    await page.locator("footer").getByText("Impressum").click();
    await expect(page).toHaveURL("/impressum");
  });
});
