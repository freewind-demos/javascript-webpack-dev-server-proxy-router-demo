Webpack-dev-server Proxy Demo
============================

在webpack-dev-server中可以设置proxy，据推测，当向dev-server绑定的port中访问文件时，
它会自动根据proxy设置，在后台拿到相应的数据发过来。

所以不论是被webpack打包过的，还是直接在html中引用的，只要被proxy规则匹配上，
就可以生效。

这是一个相当好用的功能，不需要nginx之类，就能快速实现一个反向代理。

```
npm install
npm run static-server
npm run demo
```
