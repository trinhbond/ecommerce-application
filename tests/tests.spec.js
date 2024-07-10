// @ts-check
/* eslint-disable */

const { test, expect } = require("@playwright/test");

test("navigate to a product page", async ({ page }) => {
  const product = `http://localhost:3000/prod_gvRjwO8V1Vo4mN/Dark%20Green%20Shorts`;

  await page.goto(product);

  const response = await page.request.get(product);
  expect(response).toBeOK();

  // Wait for page to details
  await page.waitForSelector("img", { state: "visible", timeout: 10000 });
  await page
    .locator("p", { hasText: "Dark Green Shorts" })
    .waitFor({ timeout: 10000 });

  // Expect page to contain product name
  await expect(
    page.locator("p.MuiTypography-root", { hasText: "Dark Green Shorts" })
  ).toBeVisible({ timeout: 5000 });
});

test("add product to cart", async ({ page }) => {
  const product = `http://localhost:3000/prod_gvRjwO8V1Vo4mN/Dark%20Green%20Shorts`;

  await page.goto(product);

  const response = await page.request.get(product);
  expect(response).toBeOK();

  // Wait for page to load details
  await page.waitForSelector("img", { state: "visible", timeout: 10000 });
  await page
    .locator("p", { hasText: "Dark Green Shorts" })
    .waitFor({ timeout: 10000 });

  // Add product to cart
  await page.getByRole("button", { name: "Add to cart" }).click();

  // Get request URL
  const requestURL = `https://api.chec.io/v1/`;

  const requestResponse = await page.waitForResponse(
    (response) => response.url().includes(requestURL),
    { timeout: 75000 }
  );

  // Assert the response status and body
  const responseBody = await requestResponse.json();
  expect(requestResponse.status()).toBe(200);
});
