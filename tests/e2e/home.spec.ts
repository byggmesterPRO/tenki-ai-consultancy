import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load the home page with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Tenki/);
  });

  test("should display the header with logo and navigation", async ({
    page,
  }) => {
    await page.goto("/");

    // Logo should be visible
    const logo = page.locator("header img[alt='Tenki logo']");
    await expect(logo).toBeVisible();

    // Brand text should be visible
    const brandText = page.locator("header").getByText("tenki");
    await expect(brandText).toBeVisible();

    // Navigation links should be present
    await expect(page.getByRole("link", { name: "Philosophy" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Services" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Approach" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
  });

  test("should display the hero section", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByText("Unlocking intelligence.")
    ).toBeVisible();
    await expect(
      page.getByText("Start the Conversation")
    ).toBeVisible();
  });

  test("should display the footer with links", async ({ page }) => {
    await page.goto("/");

    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer.getByText("Privacy Policy")).toBeVisible();
    await expect(footer.getByText("Terms of Service")).toBeVisible();
  });
});
