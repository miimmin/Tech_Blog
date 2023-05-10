
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tech-blog/',
    component: ComponentCreator('/tech-blog/','cf4'),
    exact: true
  },
  {
    path: '/tech-blog/blog',
    component: ComponentCreator('/tech-blog/blog','d34'),
    exact: true
  },
  {
    path: '/tech-blog/blog/archive',
    component: ComponentCreator('/tech-blog/blog/archive','78e'),
    exact: true
  },
  {
    path: '/tech-blog/blog/first-blog-post',
    component: ComponentCreator('/tech-blog/blog/first-blog-post','124'),
    exact: true
  },
  {
    path: '/tech-blog/blog/long-blog-post',
    component: ComponentCreator('/tech-blog/blog/long-blog-post','4c1'),
    exact: true
  },
  {
    path: '/tech-blog/blog/mdx-blog-post',
    component: ComponentCreator('/tech-blog/blog/mdx-blog-post','8ac'),
    exact: true
  },
  {
    path: '/tech-blog/blog/tags',
    component: ComponentCreator('/tech-blog/blog/tags','893'),
    exact: true
  },
  {
    path: '/tech-blog/blog/tags/docusaurus',
    component: ComponentCreator('/tech-blog/blog/tags/docusaurus','551'),
    exact: true
  },
  {
    path: '/tech-blog/blog/tags/facebook',
    component: ComponentCreator('/tech-blog/blog/tags/facebook','bd9'),
    exact: true
  },
  {
    path: '/tech-blog/blog/tags/hello',
    component: ComponentCreator('/tech-blog/blog/tags/hello','0a6'),
    exact: true
  },
  {
    path: '/tech-blog/blog/tags/hola',
    component: ComponentCreator('/tech-blog/blog/tags/hola','248'),
    exact: true
  },
  {
    path: '/tech-blog/blog/welcome',
    component: ComponentCreator('/tech-blog/blog/welcome','f90'),
    exact: true
  },
  {
    path: '/tech-blog/docs/tags',
    component: ComponentCreator('/tech-blog/docs/tags','0ed'),
    exact: true
  },
  {
    path: '/tech-blog/markdown-page',
    component: ComponentCreator('/tech-blog/markdown-page','b92'),
    exact: true
  },
  {
    path: '/tech-blog/docs',
    component: ComponentCreator('/tech-blog/docs','e76'),
    routes: [
      {
        path: '/tech-blog/docs/intro',
        component: ComponentCreator('/tech-blog/docs/intro','4d6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tech-blog/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/tech-blog/docs/tutorial-basics/congratulations','565'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tech-blog/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/tech-blog/docs/tutorial-basics/create-a-blog-post','8d2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tech-blog/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/tech-blog/docs/tutorial-basics/create-a-document','528'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tech-blog/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/tech-blog/docs/tutorial-basics/create-a-page','816'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tech-blog/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/tech-blog/docs/tutorial-basics/deploy-your-site','f10'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tech-blog/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/tech-blog/docs/tutorial-basics/markdown-features','af6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tech-blog/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/tech-blog/docs/tutorial-extras/manage-docs-versions','bb9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tech-blog/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/tech-blog/docs/tutorial-extras/translate-your-site','2c8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
