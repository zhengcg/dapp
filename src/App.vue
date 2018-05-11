<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    // import * as types from './store/types'
    // import {mapState} from 'vuex'
    import { Indicator } from 'mint-ui';
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
            }
        },
        watch:{
            '$route':function(to,from){
　　　　　　　　　　 document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0; 
           }
        },
   /*     computed: mapState({
            title: state => state.title,
            token: state => state.token
        }),*/
          
        methods: {
   
        }
    }
</script>

<style>
html,body{height: 100%;padding: 0;margin: 0;}
*{margin: 0;padding: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 10.8rem;
  margin: 0 auto;
  position: relative;
  height: 100%;
/*  overflow: auto;
  -webkit-overflow-scrolling : touch; */
  font-size: 0.271rem;
  background: #efefef;
}
.clearfix:after{content: '';display: block;height: 0;clear: both;-ms-zoom: 1;}
em,i{
  font-style: normal;;
}
.topTitle{
  height: 1.4rem;
  line-height: 1.4rem;
  text-align: center;
  color: #333;
  font-size: 0.4rem;
  position: fixed;
  top: 0;
  background: #fff;
  width: 10.8rem;
  left: 50%; 
  margin-left: -5.4rem;
  z-index: 10000;
}
.topTitle a{
  display: block;
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
  top: 0.5rem;
  left: 0.5rem;
  background: url("assets/icon/icon10.png") no-repeat center;
  background-size: contain;
}
</style>
