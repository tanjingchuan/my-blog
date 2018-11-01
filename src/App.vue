<template>
  <div id="app">
    <!-- <add-blog></add-blog>  -->
    <!-- <show-blog></show-blog> -->
    <blogHeader></blogHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import AddBlog from "./components/AddBlog"
  import ShowBlogs from "./components/ShowBlogs"
  import BlogHeader from "./components/BlogHeader"
  export default {
    name: 'App',
    components: {
      "add-blog": AddBlog,
      "show-blog": ShowBlogs,
      "blogHeader": BlogHeader
    }
  }
</script>

<style>
  ul{
    list-style-type: none;
    margin: 0;
    text-align: center;
  }
  li{
    margin: 0 10px;
  }
</style>
