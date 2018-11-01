<template>
    <div id="show-blog">
        <h1>博客总览</h1>
        <input type="text" v-model="search" placeholder="搜索">
        <div id="single-blog" v-for="blog in filteredBlogs">
            <router-link v-bind:to="'/blog/'+blog.id">
                <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
            </router-link>
            <article>{{blog.content}}</article>
        </div>
    </div>
</template>

<script>
    export default {
        name: "show-blog",
        data: function(){
            return {
                blogs: [],
                search: ""
            }
        },
        created: function(){
            this.$http.get("https://my-blog-db4c5.firebaseio.com/posts.json")
            .then(function(data){
                return data.json();
            })
            .then(function(data){
                var blogsArray = [];
                for(let key in data){
                    data[key].id = key;
                    blogsArray.push(data[key]);
                    console.log(1);
                }
                this.blogs = blogsArray;
            })
        },
        computed:{
            filteredBlogs: function(){
                return this.blogs.filter((blog) => {
                    return blog.title.match(this.search);
                })
            }
        },
        filters: {
            "to-uppercase": function(value){
                return value.toUpperCase(); 
            }
        }   
    }
</script>

<style scoped>
    #show-blog{
        max-width: 800px;
        margin: 0 auto;
    }

    #single-blog{
        margin: 10px 0;
        padding: 20px;
        box-sizing: border-box;
        background: #eee;
    }

    #show-blog a{
        text-decoration: none;
    }

    input[type="text"]{
        padding: 8px;
        box-sizing: border-box;
        width: 100%;
    }
</style>