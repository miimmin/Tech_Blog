
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags','0cc'),
    exact: true
  },
  {
    path: '/docs/tags/메트릭',
    component: ComponentCreator('/docs/tags/메트릭','072'),
    exact: true
  },
  {
    path: '/docs/tags/변수',
    component: ComponentCreator('/docs/tags/변수','9bc'),
    exact: true
  },
  {
    path: '/docs/tags/브랜치-전략',
    component: ComponentCreator('/docs/tags/브랜치-전략','726'),
    exact: true
  },
  {
    path: '/docs/tags/상수',
    component: ComponentCreator('/docs/tags/상수','014'),
    exact: true
  },
  {
    path: '/docs/tags/성능',
    component: ComponentCreator('/docs/tags/성능','cf1'),
    exact: true
  },
  {
    path: '/docs/tags/아보카도-에디션-라이트',
    component: ComponentCreator('/docs/tags/아보카도-에디션-라이트','e8d'),
    exact: true
  },
  {
    path: '/docs/tags/이모티콘',
    component: ComponentCreator('/docs/tags/이모티콘','64f'),
    exact: true
  },
  {
    path: '/docs/tags/최적화',
    component: ComponentCreator('/docs/tags/최적화','889'),
    exact: true
  },
  {
    path: '/docs/tags/branch',
    component: ComponentCreator('/docs/tags/branch','282'),
    exact: true
  },
  {
    path: '/docs/tags/cache',
    component: ComponentCreator('/docs/tags/cache','283'),
    exact: true
  },
  {
    path: '/docs/tags/const',
    component: ComponentCreator('/docs/tags/const','fdd'),
    exact: true
  },
  {
    path: '/docs/tags/css',
    component: ComponentCreator('/docs/tags/css','83f'),
    exact: true
  },
  {
    path: '/docs/tags/deep-copy',
    component: ComponentCreator('/docs/tags/deep-copy','2eb'),
    exact: true
  },
  {
    path: '/docs/tags/fork',
    component: ComponentCreator('/docs/tags/fork','dfd'),
    exact: true
  },
  {
    path: '/docs/tags/git',
    component: ComponentCreator('/docs/tags/git','994'),
    exact: true
  },
  {
    path: '/docs/tags/github',
    component: ComponentCreator('/docs/tags/github','326'),
    exact: true
  },
  {
    path: '/docs/tags/gitlab',
    component: ComponentCreator('/docs/tags/gitlab','dee'),
    exact: true
  },
  {
    path: '/docs/tags/hook',
    component: ComponentCreator('/docs/tags/hook','df2'),
    exact: true
  },
  {
    path: '/docs/tags/lcp',
    component: ComponentCreator('/docs/tags/lcp','cce'),
    exact: true
  },
  {
    path: '/docs/tags/let',
    component: ComponentCreator('/docs/tags/let','02a'),
    exact: true
  },
  {
    path: '/docs/tags/metrics',
    component: ComponentCreator('/docs/tags/metrics','394'),
    exact: true
  },
  {
    path: '/docs/tags/nextjs',
    component: ComponentCreator('/docs/tags/nextjs','062'),
    exact: true
  },
  {
    path: '/docs/tags/object-freeze',
    component: ComponentCreator('/docs/tags/object-freeze','5a4'),
    exact: true
  },
  {
    path: '/docs/tags/scrollbar-gutter',
    component: ComponentCreator('/docs/tags/scrollbar-gutter','868'),
    exact: true
  },
  {
    path: '/docs/tags/stale-while-revalidate',
    component: ComponentCreator('/docs/tags/stale-while-revalidate','84c'),
    exact: true
  },
  {
    path: '/docs/tags/tbd',
    component: ComponentCreator('/docs/tags/tbd','14f'),
    exact: true
  },
  {
    path: '/docs/tags/trunk-based-development',
    component: ComponentCreator('/docs/tags/trunk-based-development','c95'),
    exact: true
  },
  {
    path: '/docs/tags/variables',
    component: ComponentCreator('/docs/tags/variables','a20'),
    exact: true
  },
  {
    path: '/docs/tags/web-vital',
    component: ComponentCreator('/docs/tags/web-vital','12c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','6d4'),
    routes: [
      {
        path: '/docs/books/',
        component: ComponentCreator('/docs/books/','d48'),
        exact: true,
        'sidebar': "books"
      },
      {
        path: '/docs/books/effective-typescript/01',
        component: ComponentCreator('/docs/books/effective-typescript/01','91c'),
        exact: true,
        'sidebar': "books"
      },
      {
        path: '/docs/books/effective-typescript/02',
        component: ComponentCreator('/docs/books/effective-typescript/02','b75'),
        exact: true,
        'sidebar': "books"
      },
      {
        path: '/docs/books/effective-typescript/introduction',
        component: ComponentCreator('/docs/books/effective-typescript/introduction','2a7'),
        exact: true,
        'sidebar': "books"
      },
      {
        path: '/docs/books/frameworkless-front-end-development/01',
        component: ComponentCreator('/docs/books/frameworkless-front-end-development/01','8b5'),
        exact: true,
        'sidebar': "books"
      },
      {
        path: '/docs/books/frameworkless-front-end-development/02',
        component: ComponentCreator('/docs/books/frameworkless-front-end-development/02','ea8'),
        exact: true,
        'sidebar': "books"
      },
      {
        path: '/docs/books/frameworkless-front-end-development/03',
        component: ComponentCreator('/docs/books/frameworkless-front-end-development/03','397'),
        exact: true,
        'sidebar': "books"
      },
      {
        path: '/docs/books/frameworkless-front-end-development/04',
        component: ComponentCreator('/docs/books/frameworkless-front-end-development/04','47a'),
        exact: true,
        'sidebar': "books"
      },
      {
        path: '/docs/books/frameworkless-front-end-development/05',
        component: ComponentCreator('/docs/books/frameworkless-front-end-development/05','ca2'),
        exact: true,
        'sidebar': "books"
      },
      {
        path: '/docs/books/frameworkless-front-end-development/06',
        component: ComponentCreator('/docs/books/frameworkless-front-end-development/06','453'),
        exact: true,
        'sidebar': "books"
      },
      {
        path: '/docs/books/frameworkless-front-end-development/07',
        component: ComponentCreator('/docs/books/frameworkless-front-end-development/07','bfb'),
        exact: true
      },
      {
        path: '/docs/books/frameworkless-front-end-development/introduction',
        component: ComponentCreator('/docs/books/frameworkless-front-end-development/introduction','ca5'),
        exact: true,
        'sidebar': "books"
      },
      {
        path: '/docs/books/learning-typescript/01',
        component: ComponentCreator('/docs/books/learning-typescript/01','bf6'),
        exact: true,
        'sidebar': "books"
      },
      {
        path: '/docs/books/learning-typescript/02',
        component: ComponentCreator('/docs/books/learning-typescript/02','a68'),
        exact: true,
        'sidebar': "books"
      },
      {
        path: '/docs/books/learning-typescript/introduction',
        component: ComponentCreator('/docs/books/learning-typescript/introduction','7f9'),
        exact: true,
        'sidebar': "books"
      },
      {
        path: '/docs/dev/',
        component: ComponentCreator('/docs/dev/','694'),
        exact: true,
        'sidebar': "dev"
      },
      {
        path: '/docs/dev/cs/lcp/index',
        component: ComponentCreator('/docs/dev/cs/lcp/index','259'),
        exact: true,
        'sidebar': "dev"
      },
      {
        path: '/docs/dev/cs/metrics/index',
        component: ComponentCreator('/docs/dev/cs/metrics/index','0f0'),
        exact: true,
        'sidebar': "dev"
      },
      {
        path: '/docs/dev/cs/stale-while-revalidate/index',
        component: ComponentCreator('/docs/dev/cs/stale-while-revalidate/index','685'),
        exact: true,
        'sidebar': "dev"
      },
      {
        path: '/docs/dev/git/another-branch-push',
        component: ComponentCreator('/docs/dev/git/another-branch-push','ac4'),
        exact: true,
        'sidebar': "dev"
      },
      {
        path: '/docs/dev/git/sync-repository',
        component: ComponentCreator('/docs/dev/git/sync-repository','d70'),
        exact: true,
        'sidebar': "dev"
      },
      {
        path: '/docs/dev/git/trunk-based-development',
        component: ComponentCreator('/docs/dev/git/trunk-based-development','9c6'),
        exact: true,
        'sidebar': "dev"
      },
      {
        path: '/docs/dev/htmlcss/scrollbar-gutter/index',
        component: ComponentCreator('/docs/dev/htmlcss/scrollbar-gutter/index','e18'),
        exact: true,
        'sidebar': "dev"
      },
      {
        path: '/docs/dev/jsts/variables/index',
        component: ComponentCreator('/docs/dev/jsts/variables/index','d61'),
        exact: true,
        'sidebar': "dev"
      },
      {
        path: '/docs/dev/php/avocadoedition-light-add-emoticon/index',
        component: ComponentCreator('/docs/dev/php/avocadoedition-light-add-emoticon/index','008'),
        exact: true,
        'sidebar': "dev"
      },
      {
        path: '/docs/dev/react/hook/index',
        component: ComponentCreator('/docs/dev/react/hook/index','9af'),
        exact: true,
        'sidebar': "dev"
      },
      {
        path: '/docs/dev/react/nextjs-optimization/index',
        component: ComponentCreator('/docs/dev/react/nextjs-optimization/index','426'),
        exact: true,
        'sidebar': "dev"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','e84'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations','7ef'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post','2c8'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document','f0d'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page','ca5'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site','508'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features','f90'),
        exact: true
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions','d64'),
        exact: true
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site','16a'),
        exact: true
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
