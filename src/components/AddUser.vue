<template>
  <div class="adduser">
      <h2 class="page-header">新加用户</h2>
      <form action="" @submit.prevent="addCustomer">
          <div class="well">
              <h4>用户信息</h4>
              <div class="form-group">
                  <label>姓名</label>
                  <input type="text" class="form-control" placeholder="name" v-model="customer.name">
              </div>
              <div class="form-group">
                  <label>QQ</label>
                  <input type="text" class="form-control" placeholder="qq" v-model="customer.qq">
              </div>
              <div class="form-group">
                  <label>邮箱</label>
                  <input type="text" class="form-control" placeholder="xxxxx@gmail.com" v-model="customer.gmail">
              </div>
              <div class="form-group">
                  <label>年龄</label>
                  <input type="text" class="form-control" placeholder="age" v-model="customer.age">
              </div>
              <div class="form-group">
                  <label>公司</label>
                  <input type="text" class="form-control" placeholder="company" v-model="customer.company">
              </div>
              <div class="form-group">
                  <label>个人介绍</label>
                  <textarea class="form-control" id="" cols="20" rows="8" placeholder="个人介绍" v-model="customer.introduction"></textarea>  
              </div>
              <button type="submit" class="btn btn-primary">添加</button>
              <!-- 如果form中不声明submit事件则 按钮会调用系统默认submit函数
              如果form中有了自定义的submit方法，则系统在按钮点击时候会调用自定义的
              submit方法 -->
          </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'adduser',
  data () {
    return {
      customer:{
          name:"",
          qq:"",
          gmail:"",
          age:"",
          company:"",
          introduction:""
      }
    }
  },
  methods:{
      addCustomer:function(event)
      {
        /*   @submit.prevent 组织默认事件 防止点击按钮页面刷新*/
            var url="http://localhost:3000/users"
            this.$http.post(url,this.customer).then(data=>{
            alert("信息添加成功");
            this.$router.push("/")
      })
       
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
