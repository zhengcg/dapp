<template>
<div id="invitation">
  <div class="topTitle"><router-link :to="{name:'home',query:{sid:token}}"></router-link>邀请好友</div>
  <div style="height:1.4rem"></div>
  <div class="codeBox">
    <p>我的邀请码</p>
    <h1>{{inviteCode}}</h1>
    <a href="javascript:;" @touchstart="copyFn(inviteCode)">复制</a>
  </div>
  <div class="scanCode">
    <img src="../assets/icon/icon17.png">
    <p>扫码下载APP</p>
  </div>
</div>
	
</template>
<script>
import api from '../api/api';
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      token:"",
      inviteCode:""
    
    }
  },
  created(){
    this.token=this.$route.query.sid;
    this.inviteCode=this.$route.query.inviteCode;
    document.cookie='zstar_sid='+this.token;  
  },
  mounted() {
    document.title="邀请好友";
  },
  methods: { 
    copyFn(s){
      window.webkit.messageHandlers.getParames.postMessage("paste:"+s);
    }
  }
}
</script>
<style lang="scss">
#invitation{
  .scanCode{
    margin-top: 2rem;
    text-align: center;
    font-size: 0.28rem;
    color: #666;
    p{
      margin-top: 0.2rem;
    }
    img{
      width: 4rem;
      height: 4rem;
    }
  }
  .codeBox{
    height: 3.8rem;
    box-sizing: border-box;
    background: linear-gradient(#6a60f7,#0ba4fd);
    color: #fff;
    text-align: center;
    p{
      font-size: 0.38rem;
      padding-top: 0.8rem;
    }
    h1{
      font-size: 0.5rem;
      margin: 0.4rem 0 0.6rem 0;
    }
    a{
      display: block;
      width: 1.3rem;
      height: 0.5rem;
      line-height: 0.5rem;
      font-size: 0.32rem;
      color: #fff;
      text-decoration: none;
      margin: 0 auto;
      box-sizing: border-box;
      border: 0.02rem solid #fff;
      border-radius: 0.25rem;
    }
  }


}

</style>