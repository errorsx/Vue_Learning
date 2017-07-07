<template>
    <div class="reading tc">
        <button @click="add" v-show="addbtn">新增</button>
        <div class="input-area" v-show="showAdd">
          <input type="text" placeholder="请输入书名" v-model="nameValue">
          <button @click="addName">确定</button> 
          <button @click="addCancel">取消</button> 
        </div>
        <table>
          <tr>
            <th>书名</th>
            <th>操作</th>
          </tr>
          <tr v-for="(item,index) in books">
            <td>
              《{{item.name}}》
            </td>
            <td :id="index">
              <span @click="edit">编辑</span>
              <span @click="del">删除</span>
            </td>
          </tr>
        </table>
        <div class="wrap" v-show="showEdit">
          <div class="content">
            <input type="text" placeholder="请输入书名" v-model="newName">
            <button @click="cancel">取消</button> 
            <button @click="editName">确定</button> 
          </div>
        </div>
        <footer-nav v-bind:class="{'isReading': isNowPage}"></footer-nav>
    </div>
  
</template>

<script>
  import FooterNav from '../../components/Footer.vue'
  export default {
    name: 'reading',
    components: {
      FooterNav
    },
    data () {
      return {
        isNowPage: true,
        addbtn: true,
        showAdd: false,
        showEdit: false,
        books: [
          {
            'name': 'vue入门指南'
          },
          {
            'name': 'react技术栈'
          }
        ],
        nameValue: '',
        newName: '',
        editId: 0
      }
    },
    methods: {
      add () {
        this.showAdd = true
        this.addbtn = false
      },
      addName () {
        let v = this.nameValue
        if (v.trim() === '') {
          alert('请输入新增的书名')
        } else {
          let data = {}
          data.name = v
          this.books.push(data)
          this.nameValue = ''
        }
      },
      addCancel () {
        this.showAdd = false
        this.addbtn = true
      },
      del (e) {
        let id = e.target.offsetParent.id
        this.books.splice(id, 1)
      },
      edit (e) {
        let id = e.target.offsetParent.id
        this.showEdit = true
        this.editId = id
        this.newName = this.books[id].name
      },
      cancel () {
        this.showEdit = false
      },
      editName () {
        let v = this.newName
        if (v.trim() === '') {
          alert('请输入书名')
        } else {
          this.books[this.editId].name = this.newName
          this.showEdit = false
        }
      }
    }
  }
</script>

<style>
  .reading {
    padding-bottom: 50px;
  }
  .reading button {
    width: 100px;
    height: 30px;
    line-height: 30px;
    background-color: #69c;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
    outline: none;
  }
  .reading button:hover {
    background-color: #ff9292
  }
  table {
    width: 100%;
    max-height: 500px;
    margin: 0 auto;
    margin-top: 20px;
  }
  .input-area input {
    width: 175;
    height: 38px;
    font-size: 16px;
    line-height: 38px;
    margin: 20px 0;
    padding-left: 15px;
    outline: none;
    border: 1px solid #69c;
    border-radius: 5px;
    margin-right: 10px;
  }
  .input-area button {
    width: 60px;
    height: 40px;
    line-height: 40px;
    background-color: #69c;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
    margin-right: 10px;
  }
  th,td {
    width: 100px;
  }
  .wrap {
    display: table;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.8);
    z-index: 10;
  }
  .wrap .content {
    display: table-cell;
    vertical-align: middle;
  }
  .wrap .content input {
    width: 200px;
    height: 40px;
    line-height: 40px;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #69c;
    padding-left: 15px;
    border-radius: 10px;
    outline: none;
  }
  .wrap .content button {
    width: 100px;
    height: 40px;
    line-height: 40px;
    background-color: #69c;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
    margin-right: 5px;
    margin-left: 5px;
  }
</style>
