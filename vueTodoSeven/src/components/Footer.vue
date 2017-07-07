<template>
  <div class="footer fixed">
    <ul>
        <li><router-link to='/'>首页</router-link></li>
        <li><router-link to='/reading'>阅读管理</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
    .footer {
        width: 100%;
        height: 50px;
        bottom: 0;
    }
    ul {
        display: flex;
        height: 100%;
        line-height: 50px;
    }

    ul li {
        flex: 1;
        background-color: #f1f1f1;
    }

    li a {
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    .isIndex li:first-child {
        background-color: #69c;
    }

    .isIndex li:first-child a {
        color: #fff;
    }

    .isReading li:last-child {
        background-color: #69c;
    }

    .isReading li:last-child a {
        color: #fff;
    }
</style>
