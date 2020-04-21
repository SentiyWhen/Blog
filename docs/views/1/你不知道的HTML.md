# 你不知道的HTML
## 同源策略
- [浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)
### 含义
`http://www.example.com` 
- 协议相同 `http://`
- 域名相同 `www.example.com`
- 端口相同 `80（默认端口可以省略）`

### 目的
是为了保证用户信息的安全，防止恶意的网站窃取数据
> 注意：`提交表单`不受同源政策的限制
### 限制范围
1. cookie、localstroage、indexDB无法读取
2. DOM无法读取
3. ajax请求不能发送
### 跨域解决方案
1. Cookie

 Cookie 是服务器写入浏览器的一小段信息，只有同源的网页才能共享。但是，两个网页一级域名相同，只是二级域名不同，浏览器允许通过设置`document.domain`共享 Cookie。
 ```js
 document.domain = 'example.com';
 ```
 注意，这种方法只适用于 `Cookie` 和 `iframe` 窗口，`LocalStorage` 和 `IndexDB` 无法通过这种方法，规避同源政策，而要使用下文介绍的`PostMessage API`。

2. iframe  postMessage
3. jsonp 
4. img
5. script
6. link(background)
7. CORS

## HTML语义化
### 语义化标签
 HTML标签有自己的含义
### 特点
- 代码结构清晰，方便阅读，有利于团队合作开发。
- 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以语义的方式来渲染网页。
- 有利于搜索引擎优化（SEO）。
- 便于团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
### 常见的语义化标签
`<title>`：页面主体内容。

`<hn>`：h1~h6，分级标题，`<h1>` 与 `<title>` 协调有利于搜索引擎优化。

`<ul>`：无序列表。

`<ol>`：有序列表。

`<header>`：页眉通常包括网站标志、主导航、全站链接以及搜索框。

`<nav>`：标记导航，仅对文档中重要的链接群使用。

`<main>`：页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。

`<article>`：定义外部的内容，其中的内容独立于文档的其余部分。

`<section>`：定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。

`<aside>`：定义其所处内容之外的内容。如侧栏、文章的一组链接、广告、友情链接、相关产品列表等。

`<footer>`：页脚，只有当父级是body时，才是整个页面的页脚。
### 书写HTML代码注意事项
- 尽可能少的使用无语义的标签div和span；
- 在语义不明显时，既可以使用div或者p时，尽量用p, 因为p在默认情况下有上下间距，对兼容特殊终端有利；
- 不要使用纯样式标签，如：b、font、u等，改用css设置。
- 需要强调的文本，可以包含在strong或者em标签中（浏览器预设样式，能用CSS指定就不用他们），strong默认样式是加粗（不要用b），em是斜体（不用i）；
- 使用表格时，标题要用caption，表头用thead，主体部分用tbody包围，尾部用tfoot包围。表头和一般单元格要区分开，表头用th，单元格用td；
- 每个input标签对应的说明文本都需要使用label标签，并且通过为input设置id属性，在lable标签中设置for=someld来让说明文本和相对应的input关联起来
