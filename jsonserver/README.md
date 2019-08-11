http://localhost:3000


获取users中的所有数据
http://localhost:3000/users

获取id是1的单条数据
http://localhost:3000/users/1

根据指定条件获取数据
http://localhost:3000/users?name=Yukinosita

多条件查询
http://localhost:3000/users?companyId=3&&name=Dubi

获取公司id是3的用户信息
http://localhost:3000/companies/3/users

获取一页种只有两条数据
http://localhost:3000/users?_page=1&_limit=2


根据name排序 排序方式是 asc升序 desc是降序
http://localhost:3000/users?_sort=name&_order=asc


获取年龄大于等于20
http://localhost:3000/users?age_gte=20

获取年龄大于等于18小于等于22
http://localhost:3000/users?age_gte=18&age_lte=22

搜索信息中包含yuki的信息
http://localhost:3000/users?q=Yuki




官方文档
https://github.com/typicode/json-server


GET请求信息
POST新增信息
PATCH更新信息
DELETE删除信息


package.json中

{
  "name": "jsonserver",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "json-server --watch db.json"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "json-server": "^0.15.0"
  }
}


使用cnpm run test 请求数据 test为自定义名字

