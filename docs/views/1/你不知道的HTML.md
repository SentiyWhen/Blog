## 你不知道的HTML

### 同源策略
#### 含义
- 协议相同
- 域名相同
- 端口相同
#### 目的
为了保证用户的安全，防止恶意的网站窃取数据
#### 限制范围
1. cookie、localstroage、indexDB无法读取
2. DOM无法读取
3. ajax请求不能发送
#### 跨域解决方案
1. domain
2. iframe 
3. jsonp 
4. img
5. script
6. link(background)