## mac安装vue-cli

1、首页检查mac里是否安装了node <br />
2、然后执行：sudo npm install -g vue-cli<br />
3、输入：vue list 查看可以用的模版<br />
4、执行： vue init webpack '项目名称' <br />
5、输入：cd sell。执行：sudo npm install <br />
6、执行：npm run dev <br />

## vue-router 安装与不安装的区别

```
// 有router
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

import router from './router'
</script>
```

```
// 没有router
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

```
