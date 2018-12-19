var log = function(){
	console.log.apply(console,arguments)
}

var el = function(sel){

	return document.querySelector(sel)
}

var todoTemplate =function(todo){
 var t = `<div class="todo-cell">
         <button class="todo-delete">删除</button>
         <span>${todo}</span>
     </div>`;
 return t
}

// var todoTemplate = function(todo){
//     var t = `
//         <div class="todo-cell">
//             <button class="todo-delete">删除</button>
//             <span>${todo}</span>
//         </div>`;
//     return t
// }


var b = el('#id-button-add')

b.addEventListener('click',function(){
	log('yes')
	var input = el("#id-input-todo")
	var todo = input.value
	log("todo: " +todo)
})
