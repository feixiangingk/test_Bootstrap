// 2017/03/05
//
// 此为第 9 课的上课内容
//
// 今天上课的主要内容有
//
// 如何在网页中引入 JavaScript 代码
// 需要掌握的 js 基础
// 什么是 DOM, 常用 DOM API 使用
// 什么是事件, 如何绑定事件
// JSON 格式
// 什么是后端 API, 怎么做后端 API
//
// 应该都能看懂, 不懂的稍微做个笔记, 等上课讲解


// 自己定义一个 log 函数
// 不需要知道这个函数的具体原理, 照抄拿来用即可
var log = function() {
    console.log.apply(console, arguments)
}

// 在 html 文件中, js 代码放在 script 标签中
// *** 一定要把 script 标签放到 body 最后面
// 原因上课解释
// 浏览器载入这个 html 文件后, 会执行我们写在 script 标签中的代码
log('代码开始')

// *** 注意, 要看到 log 的输出, 需要打开浏览器的终端
// chrome 右键 - 检查元素 - 上方的 tab 选择 终端(console)即可


// js 基础
// ===
// js 有两种注释
// 单行注释是 //
// 多行注释是 首尾 用 /* */
/*
这是多行注释
*/
// 定义变量必须使用 var 修饰符
var a = 1
var b = 'gua'

// 函数定义应该使用如下的方式
var greeting = function() {
    log('hello')
}

// 数组和 python 一样, 只是 append 变成了 push
var arr = [1, 2, 3]
arr.push(4)
log('array push', arr)
// 取长度用 arr.length
log('length', arr.length)


// js 的字典就是对象
// 并且可以省略 key 的引号
var obj = {
    'key': 'value',
    name: 'gua',
}
// 引用字典的值 可以用很简单的点语法(也可以用传统的用法)
// 引用不存在的值 不会报错 得到的结果是 undefined 而已
log('object key', obj.key, obj['name'], obj.gua)



/*
往下是使用 js 操作页面元素的方法
=====
DOM(文档对象模型) 是浏览器对 html 文件的描述方式
DOM API 是浏览器提供给 JavaScript 操作 html 页面内元素的方式
简而言之, 浏览器提供了一些内置函数来让我们操作页面(增删改查)
*/

// 查找元素
// ===
//
// 查找元素使用 document.querySelector() 函数
// document 是整个文档(包含了 html), 可以理解为 html 的父节点
// 这个函数的参数是一个选择器(和 CSS 选择器一样)
// 选择器语法和 CSS 选择器一样, 现在只用 3 个基础选择器
// 元素选择器
var body = document.querySelector('body')
// class 选择器, 用的是   .类名
var form = document.querySelector('.login-form')
// id 选择器, 用的是   #id
var loginButton = document.querySelector('#id-button-login')
// log 出来看看
log(body, form, loginButton)


// 操作元素的默认属性
// ===
//
// 获得特定属性值
var user = document.querySelector('#id-input-username')
var userValue = user.value
log('user value', userValue)
// 不存在的属性会返回 null, 它在 js 中代表不存在
// null 和 undefined 很相似
log('没有的属性', user.gua)

// 设置特定属性值
user.value = 'set value'



// 操作元素(创建, 删除, 修改)
// ===
//
// 修改
// 用 insertAdjacentHTML 给一个元素添加子元素
// 这里我们给 .login-form 添加一个 h1 标签
var form = document.querySelector('.login-form')
// 第一个参数表示插入的位置, 'beforeend' 表示插入在结束之前(也就是添加到标签末尾)
// 第二个参数是你想插入的 html 内容
form.insertAdjacentHTML('beforeend', '<h1 class="gua-h1">你好</h1>')

// 删除元素
var pwd = document.querySelector('#id-input-password')
pwd.remove()


// 事件
// ===
//
// 事件是用来处理响应的一个机制
// 这个响应可以来自于用户(点击, 鼠标移动, 滚动), 也可以来自于浏览器
//
// 下面的链接描述了所有事件, 不过我们先从最常用的事件学起, click 事件
// https://developer.mozilla.org/en-US/docs/Web/Events
//
// 常用例子, 给按钮添加一个点击的事件
// 1, 获得按钮
var loginButton = document.querySelector('#id-button-login')
// 2, 声明一个函数, 用于在按钮点击后执行
var clicked = function() {
    log('按钮被点击到了')
}
// 3, 添加事件, 使用 addEventListener 函数, 它有两个参数
// 第一个是事件的名字, 'click' 表示点击
// 第二个是事件发生后会被自动调用的函数
loginButton.addEventListener('click', clicked)
//
// 添加完成, 可以自己在浏览器试试, 记得打开 console



// 有一个常见的需求是在 字典/数组 和 字符串 之间相互转换
// 这个过程叫做 序列化/反序列化
// 在 js 中, 序列化使用 JSON 数据格式
// 全称 JavaScript Object Notation (js 对象标记)
// 这个格式已经是现在用于互联网数据交换的事实标准格式了
// python 也有内置的标准库进行这种转换

// js 中转换方式如下
// 注意 typeof 语句可以查看一个变量的类型
var s = JSON.stringify([1, 2, 3, 4])
log('序列化后的字符串', typeof s, s)
var a = JSON.parse(s)
log('反序列化后的数组', typeof a, a)
