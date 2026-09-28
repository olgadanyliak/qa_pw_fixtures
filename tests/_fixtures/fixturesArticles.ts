import { test as base } from '@playwright/test';
import { CreateArticlePage } from '../../src/ui/pages/article/CreateArticlePage';
import { EditArticlePage } from '../../src/ui/pages/article/EditArticlePage';
import { ViewArticlePage } from '../../src/ui/pages/article/ViewArticlePage';

type ArticleFixtures = {
  createArticlePage: CreateArticlePage;
  editArticlePage: EditArticlePage;
  viewArticlePage: ViewArticlePage;
  articleWithoutTags: { title: string; description: string; text: string };
  articleWithOneTag: { title: string; description: string; text: string; tags: string[] };
  articleWithTwoTags: { title: string; description: string; text: string; tags: string[] };
};

export const test = base.extend<ArticleFixtures>({
  createArticlePage: async ({ page }, use) => {
    await use(new CreateArticlePage(page));
  },
  editArticlePage: async ({ page }, use) => {
    await use(new EditArticlePage(page));
  },
  viewArticlePage: async ({ page }, use) => {
    await use(new ViewArticlePage(page));
  },
  articleWithoutTags: async ({}, use) => {
    await use({
      title: `Article ${Date.now()}`,
      description: 'Test description',
      text: 'Test article body',
    });
  },
  articleWithOneTag: async ({}, use) => {
    await use({
      title: `Article ${Date.now()}`,
      description: 'Test description',
      text: 'Test article body',
      tags: ['tag1'],
    });
  },
  articleWithTwoTags: async ({}, use) => {
    await use({
      title: `Article ${Date.now()}`,
      description: 'Test description',
      text: 'Test article body',
      tags: ['tag1', 'tag2'],
    });
  },
});