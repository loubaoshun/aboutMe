<template>
  <div style="height:100%" >
    <head-nav></head-nav>
    <Aside></Aside>
    <div class="reading-list-container main">
      <transition name="slide-fade">
        <div class="dialog-container" v-show="isDiaShow" @click="hideDialog($event)">
          <section class="dialog">
            <h5>输入书籍</h5>
            <star :score="score" id="score" @choose-star="chooseScore"></star>
            <input type="text" id="name" placeholder="输入书籍名称...">
            <input type="text" id="author" placeholder="输入作者...">
            <section class="btn-container">
              <button id="confirm" class="not-del" @click="confirmChange">确认</button>
              <button id="cancel" class="delete" @click="cancel">取消</button>
            </section>
          </section>
        </div>
      </transition>
      <h2>阅读列表 /
        <span>READING LIST</span>
      </h2>
      <hr>
      <main>
        <section class="btn-container">
          <button id="add" class="not-del" @click="addBook">添加书籍</button>
        </section>
        <table class="rd-list">
          <tr>
            <th>书名</th>
            <th>作者</th>
            <th>评分</th>
            <th>编辑/删除</th>
          </tr>
          <tr v-for="{ name, author, score },index in books">
            <td class="col-1">{{ name }}</td>
            <td class="col-2">{{ author }}</td>
            <td class="col-3">
              <star :score="score"></star>
            </td>
            <td class="col-4">
              <section class="btn-container">
                <button id="edit" class="not-del" @click="editBook(index)">编辑</button>
                <button id="delete" class="delete" @click="deleteBook(index)">删除</button>
              </section>
            </td>
          </tr>
        </table>
      </main>
    </div>

  </div>
</template>

<script>
  import request from '@/utils/request'
  import HeadNav from "@/components/common/HeadNav";
  import Aside from "@/components/common/Aside";
  import Star from "@/components/common/Star"
  export default {
    name:'ReadList',
    data(){
      return {
        isDiaShow:false,
        isEditing:true,
        score:0,
        books:[],
        editingId:'',
        editingIndex:''
      }
    },
    components:{
      HeadNav,
      Aside,
      Star,
    },
    created(){
      request({
        url:"/read/getread",
        method:"post"
      }).then(res=>{
        // console.log(res)
        this.books = res
        // console.log(this.books)
      }).catch(err=>{
        console.log(err)
      })
    },
    methods:{
      chooseScore({evt,width}){
        // console.log(evt,width)
        const offsetX = evt.offsetX
        // toFixed返回的是字符串...
        let score = (parseInt(evt.target.dataset.index, 10) + parseFloat(offsetX / width)).toFixed(2)
        if (score > 4.9) {
          score = 5
        }
        this.score = score
        // console.log(this.score)
      },
      // 创建新书
      confirmChange(){
        if(!this.isEditing){
          const name = document.getElementById('name').value
          const author = document.querySelector('#author').value
          // console.log(name,author)
          const score = this.score
          if(name&&author){
            request({
              url:"/read/addread",
              method:'post',
              data:{
                name,
                author,
                score
              }
            }).then(res=>{
              console.log(res)
              const id = res.insertId
              const book = {
                id,
                name,
                author,
                score
              }
              this.books.push(book)
              this.isDiaShow = false
            }).catch(err=>{
              console.log(err)
            })
          }else{
            alert('请填写全部内容')
          }
        }else{
          const name = document.getElementById('name').value
          const author = document.querySelector('#author').value
          const score = this.score
          const id = this.editingId
          if(name&&author){
            request({
              url:"/read/updateread",
              method:'post',
              data:{
                id,
                name,
                author,
                score
              }
            }).then(res=>{
              console.log(res)
              const id = res.insertId
              const book = {
                id,
                name,
                author,
                score
              }
              this.books.splice(this.editingIndex, 1, {id, name, author, score})
              this.isDiaShow = false
            }).catch(err=>{
              console.log(err)
            })
          }else{
            alert('请填写全部内容')
          }
        }
      },
      cancel(){
        this.score = 0
        document.getElementById('name').value = ''
        document.getElementById('author').value = ''
        this.isDiaShow = false
      },
      addBook(){
        this.isDiaShow = true
        this.isEditing = false
        this.score = 0
        document.getElementById('name').value = ''
        document.getElementById('author').value = ''
      },
      hideDialog(evt){
        // console.log(evt.target.className )
        if (evt.target.className === 'dialog-container' || evt.target.id === 'cancel') {
          this.isDiaShow = false
        }
      },
      editBook(index){
        this.isDiaShow = true
        this.isEditing = true
        this.score = this.books[index].score
        document.getElementById('name').value = this.books[index].name
        document.getElementById('author').value = this.books[index].author
        this.editingId = this.books[index].id
        this.editingIndex = index
        // console.log( this.editingId,this.editingIndex)
      },
      deleteBook(index){
        const id = this.books[index].id
        // console.log(id)
        request({
          url:'/read/delread',
          method:'post',
          data:{
            id
          }
        }).then(res=>{
          this.books.splice(index,1)
        }).catch(err=>{
          console.log(err)
        })
      }
    }
  }
</script>
<style type="text/scss" lang="scss" scoped>
  @import "../assets/style/variable";
  main {
    height: calc(100% - 48px);
    padding: 0.5em 0;
    overflow: auto;
  }
  .rd-list {
    width: 100%;
    border-collapse: collapse;
    th {
      height: 3em;
      font-size: 1.6rem;
      border-bottom: 1px solid $word;
    }
    td {
      text-align: center;
      height: 4em;
      border-bottom: 1px dotted $word;
    }
    .col-1,
    .col-2,
    .col-4 {
      width: 20%;
    }
    .col-2,
    .col-3 {
      border-left: 1px dotted $word;
      border-right: 1px dotted $word;
    }
  }
  .dialog-container {
    @include flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    min-width: 1024px;
    min-height: 900px;
    overflow: auto;
    background: rgba(0, 0, 0, 0.3);
    .dialog {
      @include flex($flow: column wrap, $justify: flex-start);
      width: 400px;
      height: 300px;
      background: $white;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
      border-top: 20px solid $base;
      border-radius: 5px;
      h5 {
        margin: 20px;
      }
      .star {
        margin-top: 0;
        /deep/ .star-item {
          width: 1.5em;
          height: 1.5em;
        }
      }
      input {
        margin-bottom: 15px;
        width: 200px;
        height: 2.5em;
        border-radius: 2px;
        border: 1px solid $special;
        outline-color: $base;
      }
      .btn-container {
        width: 200px;
        @include flex($justify: space-between);
      }
    }
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateY(-900px);
    opacity: 0;
  }
</style>
