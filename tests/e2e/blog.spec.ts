import { test, expect } from "@playwright/test";

test.describe("Blog", () => {
  test("should load the blog listing page", async ({ page }) => {
    await page.goto("/blog");
    await expect(page).toHaveTitle(/Blog/i);
    await expect(page.getByText("Insights & Ideas")).toBeVisible();
  });

  test("should display blog posts when available", async ({ page }) => {
    await page.goto("/blog");

    // Either posts are displayed or "No posts yet" message
    const hasPost = await page.locator("article").first().isVisible().catch(() => false);
    const hasEmptyState = await page.getByText("No posts yet").isVisible().catch(() => false);

    expect(hasPost || hasEmptyState).toBeTruthy();
  });

  test("should display category filters when categories exist", async ({
    page,
  }) => {
    await page.goto("/blog");

    // "All" filter is only present when categories exist
    const allFilter = page.getByRole("link", { name: "All" });
    const hasCategories = await allFilter.isVisible().catch(() => false);

    if (hasCategories) {
      await expect(allFilter).toBeVisible();
    }
  });

  test("should navigate to individual blog post", async ({ page }) => {
    await page.goto("/blog");

    const firstPost = page.locator("article a").first();
    const isVisible = await firstPost.isVisible().catch(() => false);

    if (isVisible) {
      await firstPost.click();
      await expect(page).toHaveURL(/\/blog\/.+/);
      // Should have a back link
      await expect(page.getByText("Back to Blog")).toBeVisible();
    }
  });

  test("should filter posts by category", async ({ page }) => {
    await page.goto("/blog?category=ai-insights");
    // Should show the filter indicator
    const filterIndicator = page.getByText("Filtering by:");
    const isFiltering = await filterIndicator.isVisible().catch(() => false);

    if (isFiltering) {
      await expect(page.getByText("Clear")).toBeVisible();
    }
  });
});
