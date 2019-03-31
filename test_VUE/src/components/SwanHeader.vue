<template>
<div>
            <font-awesome-icon icon="user-secret" />
    <h3>这是header</h3>

</div>
</template>
<script>
export default {
    name:"SwanHeader",
    data(){
        return {
            msg:'this is header'
        }
    },
    created() {
        // // 发送get请求
        // this.$axios.get("http://localhost:8080/test",{
        //     params: { 'a': 1,'b':2 }
        // })
        // .then(function(res){
        //     console.log(res.data);
        // });
    },
}
</script>

<style scoped>

</style>
