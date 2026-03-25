// @ts-check

/** @type {import('@docusaurus/types').Config} */
const githubOwner = process.env.GITHUB_OWNER || 'YOUR_GITHUB_USERNAME';
const githubRepo = process.env.GITHUB_REPO || 'AF-wiki';
const isUserPagesRepo = githubRepo.toLowerCase() === `${githubOwner.toLowerCase()}.github.io`;
const siteUrl = process.env.SITE_URL || `https://${githubOwner}.github.io`;
const baseUrl = process.env.BASE_URL || (isUserPagesRepo ? '/' : `/${githubRepo}/`);

const config = {
  title: 'AzureFlow Wiki',
  tagline: '面向实际写配置用户的 AF 全量手册',
  url: siteUrl,
  baseUrl,
  favicon: 'img/af-logo-sky.svg',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },
  future: {
    v4: true
  },
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans']
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  themeConfig: {
    navbar: {
      title: 'AzureFlow Wiki',
      logo: {
        alt: 'AzureFlow Logo',
        src: 'img/af-logo-sky.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'quick-start',
          position: 'left',
          label: '快速开始'
        },
        {
          type: 'doc',
          docId: 'item-structure',
          position: 'left',
          label: '配置结构'
        },
        {
          type: 'doc',
          docId: 'expressions-and-text',
          position: 'left',
          label: '表达式'
        },
        {
          type: 'doc',
          docId: 'actions',
          position: 'left',
          label: '动作'
        },
        {
          type: 'docSidebar',
          sidebarId: 'wikiSidebar',
          position: 'right',
          label: '完整目录'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '开始使用',
          items: [
            {
              label: '快速开始',
              to: '/quick-start'
            },
            {
              label: '命令与工作流',
              to: '/commands-and-workflow'
            }
          ]
        },
        {
          title: '配置参考',
          items: [
            {
              label: '配置结构',
              to: '/item-structure'
            },
            {
              label: 'Display 与外观',
              to: '/display-and-options'
            },
            {
              label: '表达式与文本',
              to: '/expressions-and-text'
            }
          ]
        },
        {
          title: '动作系统',
          items: [
            {
              label: '触发器',
              to: '/triggers'
            },
            {
              label: '动作参考',
              to: '/actions'
            },
            {
              label: '稳定写法与限制',
              to: '/stability-and-limits'
            }
          ]
        }
      ],
      copyright: `AzureFlow Wiki · AF 配置参考站`
    }
  }
};

module.exports = config;
