const Koa = require('Koa');
var router = require('koa-router')();

var app = new Koa();

router.get('/todo',(ctx)=>{
    ctx.body="Todo page"
});

//获取get传值
//http://localhost:3000/tsp
router.get('/tsp',(ctx)=>{
    console.log(ctx.query);
    console.log(ctx.querystring);
    console.log(ctx.url);
    console.log(ctx.request.url);
    console.log(ctx.request.query);
    console.log(ctx.request.querystring);
    var id = ctx.request.query.id;
    console.log("my id:"+id);
    ctx.body =  " test param page"
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000,()=>{
    console.log("starting at port 3000");
});