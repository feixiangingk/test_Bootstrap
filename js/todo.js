var log = function(){
	console.log.apply(console,arguments)
}

var el = function(sel){

	return document.querySelector(sel)
}

//var todoTemplate =function(todo){
//  var t = '<div class="todo-cell">
//          <button class="todo-delete">删除</button>
//          <span>${todo}</span>
//      </div>'
//  return t
//}

var todoTemplate = function(todo){
    var t = `
        <div class="todo-cell">
            <button class="todo-delete">删除</button>
            <span>${todo}</span>
        </div>`;
    return t
}


var b = el('#id-button-add')

var todoList = el('.todo-list')

todoList.addEventListener('click',function(event){
	// log('click',event)
	var self = event.target
	log("被点击的元素是：",self,self)
	if(self.classList.contains('todo-delete'))
	{
		log("点到了删除按钮")
		//删除父节点
		self.parentElement.remove()
	}else{
		log(" 点击的不是删除键。。")
	}
})

var insertTodo = function(todo){
	var  todoCell = todoTemplate(todo)
	var todoList = el('.todo-list') 
	todoList.insertAdjacentHTML('beforeend',todoCell)
}

b.addEventListener('click',function(){
	log('yes')
	var input = el("#id-input-todo")
	var todo = input.value
	log("todo: " ,todo)
	insertTodo(todo)
})
