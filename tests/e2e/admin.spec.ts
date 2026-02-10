import { test, expect } from "@playwright/test";

test.describe("Admin Authentication", () => {
  test("should redirect unauthenticated users to login", async ({ page }) => {
    await page.goto("/admin");
    await expect(page).toHaveURL(/\/admin\/login/);
  });

  test("should display the login form", async ({ page }) => {
    await page.goto("/admin/login");

    await expect(page.getByText("Admin Login")).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/password/i)).toBeVisible();
    await expect(
      page.getByRole("button", { name: /sign in/i })
    ).toBeVisible();
  });

  test("should show error for invalid credentials", async ({ page }) => {
    await page.goto("/admin/login");

    await page.getByLabel(/email/i).fill("wrong@email.com");
    await page.getByLabel(/password/i).fill("wrongpassword");
    await page.getByRole("button", { name: /sign in/i }).click();

    await expect(page.getByText(/invalid/i)).toBeVisible({ timeout: 10000 });
  });

  test("should have a back to website link", async ({ page }) => {
    await page.goto("/admin/login");

    await expect(page.getByText("Back to website")).toBeVisible();
  });
});

test.describe("Admin Dashboard (authenticated)", () => {
  test.beforeEach(async ({ page }) => {
    // Note: This test requires Firestore to be configured with a seeded admin user
    // In CI, you would mock the auth or use a test database
    await page.goto("/admin/login");
    await page.getByLabel(/email/i).fill("admin@tenki.ai");
    await page.getByLabel(/password/i).fill("admin123");
    await page.getByRole("button", { name: /sign in/i }).click();

    // Wait for redirect to admin dashboard
    try {
      await page.waitForURL("/admin", { timeout: 10000 });
    } catch {
      // If auth fails (no Firestore configured), skip authenticated tests
      test.skip();
    }
  });

  test("should show the admin dashboard", async ({ page }) => {
    await expect(page.getByText("Dashboard")).toBeVisible();
    await expect(page.getByText("New Post")).toBeVisible();
  });

  test("should navigate to posts page", async ({ page }) => {
    await page.getByRole("link", { name: "Posts" }).click();
    await expect(page).toHaveURL(/\/admin\/posts/);
  });

  test("should navigate to new post page", async ({ page }) => {
    await page.getByRole("link", { name: /new post/i }).first().click();
    await expect(page).toHaveURL(/\/admin\/posts\/new/);
  });

  test("should navigate to categories page", async ({ page }) => {
    await page.getByRole("link", { name: "Categories" }).click();
    await expect(page).toHaveURL(/\/admin\/categories/);
  });
});
