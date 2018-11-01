<template>
    <div id="singleBlog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
    </div>
</template>

<script>
    export default{
        name: "singleBlog",
        data(){
            return { 
                id: this.$route.params.id,
                blog: {}
            }
        },
        created(){
            this.$http.get("https://my-blog-db4c5.firebaseio.com/posts/" + this.id + ".json")
            .then(function(data){
                return data.json();
            })
            .then(function(data){
                console.log(data);
                this.blog = data;
            })
        }
    }
</script>

<style scoped   >
    #singleBlog{
        max-width: 960px;
        margin: 0 auto;
        background: #ccc;
        padding: 20px;
        border: 1px dotted #aaa;
    }
</style>