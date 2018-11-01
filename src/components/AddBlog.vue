<template>
    <div id="addBlog">
        <h2>添加博客</h2>
        <form action="" v-if="!submitted">
            <label for="">博客标题</label>
            <input type="text" v-model="blog.title" required>

            <label for="">博客内容</label>
            <textarea name="" id="" cols="30" rows="10" v-model="blog.content"></textarea>

            <div id="checkboxes">
                    <label for="">Vue.js</label>
                    <input type="checkbox" value="vue.js" v-model="blog.categories">
                    <label for="">Node.js</label>
                    <input type="checkbox" value="node.js" v-model="blog.categories">
                    <label for="">JavaScript</label>
                    <input type="checkbox" value="javascript" v-model="blog.categories">
                    <label for="">Html+Css</label>
                    <input type="checkbox" value="html+css" v-model="blog.categories">
            </div>

            <label for="">作者:</label>
            <input type="text" v-model="blog.author">
            <button v-on:click.prevent="post">添加博客</button>
        </form>

        <div v-if="submitted">
            <h3>您的博客发布成功</h3>
        </div>

        <div id="preview">
            <h3>博客总览</h3>
            <p>博客标题:{{blog.title}}</p>
            <p>博客内容</p>
            <p>{{blog.content}}</p>
            <ul>
                <li v-for="category in blog.categories">
                    {{category}}
                </li>
            </ul>
            <p>作者:{{blog.author}}</p>
        </div>

        
    </div>
  </template>
  
  <script>
  export default {
    name: "add-blog",
    data () {
      return {
          blog: {
              title: "",
              content: "",
              categories: [],
              author: ""
          },
          submitted: false
      }
    },
    methods: {
        post: function(){
            this.submitted = true;
            this.$http.post("https://my-blog-db4c5.firebaseio.com/posts.json",this.blog)
            .then(function(data){
                console.log(data);
            });
        }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
      #addBlog *{
          box-sizing: border-box;
      }
      #addBlog{
          margin: 20px auto;
          padding: 20px;
          max-width: 600px;
      }
      
      label{
          margin:20px 0 10px;
          display: block;
      }

      input[type="text"],textarea,select{
          display: block;
          width: 100%;
          padding: 8px;
      }

      textarea{
          height: 200px;
      }

      #checkboxes label{
          display: inline-block;
          margin-top: 0;
      }

      button{
          display: block;
          margin: 20px 0;
          background: crimson;
          color: white;
          font-size: 18px;
          padding: 8px;
          border-radius: 5px;
          border: 0;
          cursor: pointer;
      }

      #preview{
          margin: 30px 0;
          padding: 10px 20px;
          border: 1px dotted #ccc;
      }

      h3{
          margin-top: 10px;
      }
  </style>
  