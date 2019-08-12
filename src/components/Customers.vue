<template>
  <div class="Customers container">
      <h2 class="page-header">用户管理系统</h2>
      <input type="text" placeholder="Search..." v-model="search">
      <br>
        <router-link :to="{name:'adduser'}">新增用户</router-link>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>QQ</th>
                  <th>邮箱</th>
                  <th></th>
                </tr>
              </thead>
            <tbody>
              <tr v-for="customer in filterUser">
              <td>{{customer.name}}</td>
              <td>{{customer.qq}}</td>
              <td>{{customer.gmail}}</td>
              <td> 
              <router-link :to="'/edit/'+customer.id">编辑</router-link>
              <button class="btn btn-link" style="  color: #42b983;" @click.prevent="deleteUser(customer.id)">删除</button> 
              </td>
              </tr>
             </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Customers',
  data () {
    return {
        search:"",
        customers:[],
    }
  },
  methods:{
    // fetchCustomers(){
    //   var url="http://localhost:3000/users"
    //   this.$http.get(url).then(data=>{
    //     console.log(data.body)
    //     this.cunstomers=data.body
    //   })
    // }
    deleteUser(id){
      var url="http://localhost:3000/users/"+id
      this.$http.delete(url).then(data=>{
          alert("删除成功");
          this.$router.push("/")
      })
      console.log(id)
    }
  },
  computed:{
    filterUser(){
      //实现搜索
        return this.customers.filter((user)=>{
            return user.name.match(this.search)
        })
    }
  },
  created(){
      if(this.$route.query.message)
        alert(this.$route.query.message);
      var url="http://localhost:3000/users"
      this.$http.get(url).then(data=>{
        this.customers=data.body
        // console.log(this.customers)
      })
  },
  //数据变化时候调用
  updated(){
    var url="http://localhost:3000/users"
      this.$http.get(url).then(data=>{
        this.customers=data.body
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  margin-left: 15px;
}
 
</style>
