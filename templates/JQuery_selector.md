# JQuery Selectors
## Basics
$('code')  按标签
$('#myid') 按ID
$('.byCss') 按CSS
$('*') 全选
$('code,#myid, .myclass')  多选

## hierarchy 等级
$('div code')  div标签下的code
$('li>ul')   严格父子关系
$('strong + em') 兄弟选择器 仅一个
$('strong ~ em') 兄弟选择器 满足条件都选中

## basic filters 筛选器
$('li:first') /第一个
$('li:last') 	/最后一个
$('li:not(li:first)') /not中可以放表达式 
$('li:even') /奇数
$('li:odd') /偶数
$('li:eq(4)')  /选择li序号为4的元素
$('li:gt(4)')  /选择li序号大于4的元素
$('li:lt(4)')  /选择li序号小于4的元素

## content filters 内容选择器
$('li:cantains(second-level)')
$(':empty')
$('li:has(a)')
$('p:parent')



