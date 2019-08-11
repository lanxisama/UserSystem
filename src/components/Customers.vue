<template>
  <div class="Customers container">
      <h2 class="page-header">用户管理系统</h2>
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
              <tr v-for="customer in customers">
              <td>{{customer.name}}</td>
              <td>{{customer.qq}}</td>
              <td>{{customer.gmail}}</td>
              <td> <router-link :to="'/edit/'+customer.id">编辑</router-link><a @click.prevent="deleteUser">删除</a> </td>
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
    deleteUser(){
      
    }
  },
  created(){
      var url="http://localhost:3000/users"
      this.$http.get(url).then(data=>{
        this.customers=data.body
        console.log(this.customers)
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
