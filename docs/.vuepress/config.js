module.exports = {
  title: 'Ben首页', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: 'Ben的前端记录', // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  markdown: {
    lineNumbers: true,
  },
  head: [
    [
      'link', {
        rel: 'icon',
        href: '/bull.png' //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
      }
    ],
    [
      "script", {
        "language": "javascript",
        "type": "text/javascript",
        "src": "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
      }
    ],
    [
      "script", {
        "language": "javascript",
        "type": "text/javascript",
        "src": "/js/MouseClickEffect.js"
      }
    ]
  ],
  //下面涉及到的md文件和其他文件的路径下一步再详细解释
  themeConfig: {
    logo: '/bull.png', //网页顶端导航栏左上角的图标
    //顶部导航栏
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      {
        text: '首页',
        link: '/'
      },

      //格式二：添加下拉菜单，link指向的文件路径
      {
        text: '分类', //默认显示        
        ariaLabel: '分类', //用于识别的label
        items: [
          {
            text: '手写代码',
            link: '/pages/write-code/write-new.md'
          },
          {
            text: '专题一E卷',
            link: '/pages/examination/1.md'
          },
          {
            text: '网络相关',
            link: '/pages/http/1.md'
          },
          //点击标签会跳转至link的markdown文件生成的页面
        ]
      },
      {
        text: '功能演示',
        link: '/pages/write-code/test3.md'
      },

      //格式三：跳转至外部网页，需http/https前缀
      {
        text: 'Github',
        link: 'https://github.com/SentiyWhen'
      },
    ],

    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      '/pages/write-code/': [{
          title: '手写代码', // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ['write-new.md', '1.手写一个new操作符'], //菜单名称为'子菜单1'，跳转至/pages/write-code/test1.md
            ['test3.md', '2.手写xxx']
          ]
        },
        {
          title: '测试菜单2',
          collapsable: false,
          children: [
            ['test2.md', '子菜单1']
          ]
        }
      ],
      '/pages/examination/': [{
          title: '专题一E卷', 
          collapsable: false, 
          sidebarDepth: 1, 
          children: [
            ['1.md','1.[] {}等数据类型转换'],
            ['2.md','2.this、作用域'],
            ['3.md','3.eval'],
            ['4.md','4.原型链'],
            ['5.md','5.Symbol'],
            ['6.md','6.元编程'],
            ['7.md','7.async await generator'],
          ]
        },
      ],
      '/pages/http/': [{
        title: '网络相关', 
        collapsable: false, 
        sidebarDepth: 1, 
        children: [
          ['1.md','http协议那些事'],
        ]
      },
    ],
      //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
    }
  }
}