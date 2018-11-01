<template>
    <div id="blogHeader">
        <nav>
            <ul>
                <li>
                    <router-link to="/" exact>博客</router-link>
                    <router-link to="/add" exact>写博客</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default{
        name: "blogHeader",
        data: function(){
            return {

            }
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        text-align: center;
    }

    li {
        margin: 0 10px;
    }

    a{
        color: #fff;
        text-decoration: none;
        padding: 12px;
        border-radius: 5px;
    }

    nav{
        background: crimson;
        padding: 30px 0;
        margin-bottom: 20px;
    }

    .router-link-active{
        background: rgba(255,255,255,0.8);
        color: #444;    
    }
</style>