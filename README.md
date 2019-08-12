# usersystem

> A Vue.js project




## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#Run jsonserver first
cd jsonserver

cnpm run test


## 搜索功能实现
  filterUser(){
      //实现搜索
        return this.customers.filter((user)=>{
            return user.name.match(this.search)
        })
    }

