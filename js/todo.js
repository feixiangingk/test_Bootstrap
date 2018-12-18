var log = function(){
	console.log.apply(console,arguments)
}

var el = function(sel){
	return document.querySelector(sel)
}

var b = el('#id-button-add')
b.addEventListener('click',function(){
	log('yes')
})
