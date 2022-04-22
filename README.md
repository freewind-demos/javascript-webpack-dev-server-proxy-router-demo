Webpack-dev-server Proxy Router Demo
============================

如果需要动态的proxy target，可以使用 router

注意：
1. router最后返回的是一个target base url, 而不是完整url，因为proxy会自动把pathname再加在后面
2. 巨坑：一定要加一个`target` key，内容随便，但是一定要有，[否则不会传给 http-proxy-middleware](https://webpack.js.org/configuration/dev-server/#devserverproxy)
3. context如果使用 exclude 模式，则首个path需要以`**`结尾，比如 `['/**', '!**/**.js']`
4. 多个proxy有顺序，依次匹配

```
npm install
npm run static-server
npm run demo
```

将会打开有内容的页面，但是需要注意：
1. 点击 `data.json` 会正常匹配 proxy rule 1，正常显示
2. 点击 `hello.js` 会被跳到proxy rule 2，无法显示


