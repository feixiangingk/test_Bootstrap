<template>
<el-container class="mainC">
  <el-header>
    <swan_header></swan_header>
  </el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main
        <el-button @click="send"> dddd</el-button>
        <el-button id="jqsend"> button2</el-button>
        <el-button  @click="join"> join</el-button>
        <el-button  @click="leave"> leave</el-button>
        {{result}}
        <h1 id="t">0</h1>
<input id="text" type="button" value="开始"/>
    </el-main>
  
  </el-container>
</el-container>

</template>


<script>
// import io from "."
import io from "../../static/socketio.js"
import swan_header from '@/components/SwanHeader'
import $ from 'jquery'
export default {
  name: 'Layout',
  components:{
    swan_header,
  },
  data () {
    return {
      msg: 'this is layout',
      result:0
    }
  },
  methods:{
    send(){
      console.log('1111111');
      // this.$socket.emit('message','1111111111');
      this.$socket.emit('message','vue is msg');

    },
    join(){
      console.log("in vue join");
      this.$socket.emit('join',{'room':"room name"})
    },
    leave(){
      console.log("client leave room");
      this.$socket.emit("leave",{'room':"room name","username":"client1"})
    }
  },
  sockets:{
    connect: function(){
      console.log('socket connected')

    },
    message: function(val){
      console.log('返回:'+val)
    },

    server_response:function(val){
      console.log("server_response:"+val.data);
    }

  }
}

    // $(document).ready(function() {
    //     console.log("in jquery");     
    //     var namespace = '/test_conn';
    //         // var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port + namespace);
    //     var socket = io.connect("http://192.168.86.1:5000" + namespace);

    //     $("#text").bind("click",function(){

    //       socket.on('server_response', function(res) {
    //           console.log(res.data);
    //           $('#t').text(res.data);
    //       });
    //     });

        
    //      $("#jqsend").bind("click",function(){
    //        console.log("in jqsend");
    //        socket.emit('my_event', "im send msg");
    //        return false;
         
    //     });

    // })
</script>


<style>
  .mainC{
    height: 900px;

  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>