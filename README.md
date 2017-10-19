# blog2

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 目录结构
```
├── articles // 文章
├── docs // 最终部署的静态资源
├── index.html // 入口html文件
├── package.json
├── src
│   ├── assets // 组件中使用的静态文件，经过file-loader处理
│   ├── components // 全局组件目录
│   ├── router // 路由控制
│   ├── store // store状态管理
│   └── views // 视图组件目录
└── static // 静态文件，原样build到dist中
```
