import { expect, test } from '@playwright/test';

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Pizza Shop' }).click();
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click();

  await page.getByLabel('Nome').fill('Pizza Shop 2.0');
  await page.getByLabel('Descrição').fill('Another description');

  await page.getByRole('button', { name: 'Salvar' }).click();

  await page.waitForLoadState('networkidle');

  const toast = page.getByText('Perfil atualizado com sucesso');

  expect(toast).toBeVisible();

  await page.getByRole('button', { name: 'Close' }).click();

  await page.waitForTimeout(250);

  expect(page.getByRole('button', { name: 'Pizza Shop 2.0' })).toBeVisible();
});
