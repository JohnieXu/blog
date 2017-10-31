console.log('Watching dirs...')
const { resolve, basename } = require('path')
const chokidar = require('chokidar')
const { readFileSync, writeFileSync } = require('fs')
const MarkdownContents = require('markdown-contents')

const articleInfoObj = {}

function getArticleInfo (path) {
  const fileName = basename(path)
  let _content, content, markdownContents, articleContents
  if (/\.md/.test(fileName)) {
    _content = readFileSync(resolve(__dirname, `../articles/${fileName}`)).toString()
    content = _content.replace(/[\n\r]/g, '')
    markdownContents = MarkdownContents(_content)
    articleContents = markdownContents.tree()
    const articlesInfo = JSON.parse(readFileSync(resolve(__dirname, '../articles/articles.json')).toString())
    try {
      const info = content.match(/\{(.*?)\}/)[1]
      articleInfoObj[fileName] = JSON.parse(`{${info}}`)
      articleInfoObj[fileName]['contents'] = articleContents
      writeFileSync(resolve(__dirname, '../articles/articles.json'), JSON.stringify(articleInfoObj, null, 2))
      console.log('articles.json has been updated.')
    } catch (__) {}
  }
}

function deleteArticles (path) {
  const fileName = basename(path)
  let articlesInfo
  if (/\.md/.test(fileName)) {
    articlesInfo = JSON.parse(readFileSync(resolve(__dirname, '../articles/articles.json')).toString())
    delete(articlesInfo[fileName])
    writeFileSync(resolve(__dirname, '../articles/articles.json'), JSON.stringify(articlesInfo, null, 2))
    console.log(`${fileName} has been removed`)
  }
}

function getContents (path) {
  const filename = basename(path)
  let content
  if (/\.md$/.test(filename)) {
    content = readFileSync(resolve(__dirname, `../articles/${filename}`)).toString().replace(/[\n\r]/g, '')
    try {

    } catch (__) {}
  }
}

const watcher = chokidar.watch(resolve(__dirname, '../articles'))

watcher
  .on('add', (path) => {
    console.log('add:' + path)
    getArticleInfo(path)
  })
  .on('change', (path) => {
    console.log('change: ' + path)
    getArticleInfo(path)
  })
  .on('unlink', (path) => {
    console.log('delete: ' + path)
    deleteArticles(path)
  })

module.exports = watcher
