<template>

    <nav class="navbar navbar-inverse">
        
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
        <a class="navbar-brand" href="#">Brand</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul class="nav navbar-nav">

                <li v-for='(item,index) in routes' :class="{active:index==currentIndex}" @click='activeHandler(index)'>
    
                    <router-link :to="item.url">{{ item.title }}</router-link>

                </li>


            </ul>

        </div><!-- /.navbar-collapse -->

    </div><!-- /.container-fluid -->

    </nav>

</template>

<script>
    export default {
        name: "VHeader",
        data() {
            return {
            routes: [
                { url: "/", title: "我的首页" },
                { url: "/note", title: "我的笔记" }
            ],
            currentIndex: 0
            };
        },
        methods: {
            activeHandler(index) {
            this.currentIndex = index;
            }
        },
        created(){
            console.log(11111111)
            console.log(this.$route)

            // 刷新可以返回到首页
            for(var i=0; i<this.routes.length; i++){
                if(this.routes[i].url == this.$route.path){
                    this.currentIndex = i;
                    return;
                }
            }   
        }
        };
</script>

<style scoped>
</style>
