import { expect, test } from "@playwright/test"

test("home page renders and hydrates @smoke", async ({ page }) => {
  const pageErrors: Array<Error> = []
  page.on("pageerror", (error) => pageErrors.push(error))

  await page.goto("/")

  await expect(
    page.getByRole("heading", { name: "Project ready!" })
  ).toBeVisible()

  const button = page.getByRole("button", { name: "Button" })
  await expect(button).toBeEnabled()
  await button.click()
  await expect(
    page.getByRole("button", { name: "Clicked 1 time" })
  ).toBeVisible()

  expect(pageErrors).toEqual([])
})
