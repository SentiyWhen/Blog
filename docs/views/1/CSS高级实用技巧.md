# CSS高级实用技巧
## 圣杯布局和双飞翼布局
圣杯布局和双飞翼布局都是实现三栏布局的方法，左右定宽，中间自适应，是很常见的布局，其原理差不多，都有负边距的应用
> 圣杯布局
````html
<div class="header"></div>
<div class="content">
  <div class="middle"></div>
  <div class="left"></div>
  <div class="right"></div>
</div>
<div class="footer"></div>
````
```` css
.header {
  width: 100%;
  height: 30px;
  background: blue;
}

.content {
  overflow: hidden;
  padding: 0 100px;
}

.footer {
  width: 100%;
  height: 30px;
  background: red;
}

.middle {
  position: relative;
  width: 100%;
  float: left;
  height: 80px;
  background: green;
}

.left {
  position: relative;
  width: 100px;
  float: left;
  left: -100px;
  height: 80px;
  margin-left: -100%;
  background: yellow;
}

.right {
  position: relative;
  width: 100px;
  float: left;
  right: -100px;
  height: 80px;
  margin-left: -100px;
  background: pink
}
````
这里有几点需要留意：
1. 先写middle,然后是left和right，因为需要先渲染middle
2. left、right需设置position:relative以及相应的left、right值
3. 理解负边距的作用，left的margin-left:-100%使它上移一行，同时right向左移占据left原先位置，同理，right的margin-left:-100px使它上移并靠右

> 双飞翼布局
````html
<div class="header"></div>
<div class="content">
  <div class="middle">
    <div class="inner-middle"></div>
  </div>
  <div class="left"></div>
  <div class="right"></div>
</div>
<div class="footer"></div>
````
````css
.header {
  width: 100%;
  height: 30px;
  background: red;
}

.content {
  overflow: hidden;
}

.footer {
  width: 100%;
  height: 30px;
  background: red;
}

.middle {			
  width: 100%;
  float: left;
}
.inner-middle{
  width:100%;
  height: 80px;
  background: green;			
}
.left {
  width: 100px;
  float: left;
  height: 80px;
  margin-left: -100%;
  background: yellow;
}

.right {			
  width: 100px;
  float: left;
  height: 80px;
  margin-left: -100px;
  background: pink
}
````
跟圣杯布局没多大区别，就是middle的实现不一样，圣杯布局是middle+padding，双飞翼采用子元素+margin，最主要的还是负边距的使用

## flex