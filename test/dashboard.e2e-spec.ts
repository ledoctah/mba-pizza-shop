import { expect, test } from '@playwright/test';

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  expect(page.getByText('20', { exact: true })).toBeVisible();
  expect(
    page.getByText('+10% em relação a ontem', { exact: true }),
  ).toBeVisible();
});

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  expect(page.getByText('400', { exact: true })).toBeVisible();
  expect(
    page.getByText('-2% em relação ao mês passado', { exact: true }),
  ).toBeVisible();
});

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  expect(page.getByText('10', { exact: true })).toBeVisible();
  expect(
    page.getByText('-20% em relação ao mês passado', { exact: true }),
  ).toBeVisible();
});

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  expect(page.getByText('R$ 23.652,00', { exact: true })).toBeVisible();
  expect(
    page.getByText('+10.72% em relação ao mês passado', { exact: true }),
  ).toBeVisible();
});
