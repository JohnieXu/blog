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
│   ├── common // 组件公共文件css js
│   ├── components // 全局组件目录
│   ├── router // 路由控制
│   ├── store // store状态管理
│   └── views // 视图组件目录
└── static // 静态文件，原样build到dist中
```
# 技术栈
- vue全家桶vue + vue-router + vuex
- element-UI vueUI框架
- vue-markdown-loader .md文件转换为vue单文件组件
- offline-plugin 离线缓存
- highlight.js 代码高亮
