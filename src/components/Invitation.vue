<template>
<div id="invitation">
  <div class="topTitle"><router-link :to="{name:'home',query:{sid:token}}"></router-link>邀请好友</div>
  <div style="height:1.4rem"></div>
  <div class="codeBox">
    <p>我的邀请码</p>
    <h1>{{inviteCode}}</h1>
    <a href="javascript:;" @touchstart="copyFn(inviteCode)" v-if="share==0">复制</a>
    <a href="javascript:;" @touchstart="copyFn(shareUrl)"  v-if="share==0">分享</a>
    <div class="codeDiv">
      <p>扫描下边二维码下载正品星球</p>
    </div>
    
  </div>
  <div class="codeDiv">
      <img src="../assets/icon/icon17.png">
      <p>扫码进入正品星球</p>     
    </div>
  <div class="botBox">
    <!-- <div class="phTit">
      <img src="../assets/icon/icon19.png">
    </div> -->
    <!-- <div class="numBox">
      <div class="box1">
        <h3>累计获得ZIN</h3>
        <em>{{myZcoin}}</em>        
      </div>
      <div class="box2">
        <h3>累计获得源力</h3>
        <em>{{myPower}}</em>        
      </div>     
    </div> -->
    <div class="gzBox">
      <h3>奖励规则</h3>
      <p>每个账号获得邀请赠源力次数为10次，超过最大限制将不再增加源力</p>
    </div>
    
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
      inviteCode:"",
      shareUrl:"",
      share:0,
      isIOS:'ios'
    
    }
  },
  created(){
    this.token=this.$route.query.sid;
    this.inviteCode=this.$route.query.inviteCode;
    this.shareUrl=location.href.split("?")[0]+"?share=1&inviteCode="+this.inviteCode;
    if(this.$route.query.share){
      this.share=this.$route.query.share
    }
    document.cookie='zstar_sid='+this.token; 
    
  },
  mounted() {
    document.title="邀请好友"; 
    this.checkApp()  
  },
  methods: { 
    copyFn(s){
      var self=this;
      if(self.isIOS=='ios'){
           window.webkit.messageHandlers.getParames.postMessage("paste:"+s);

       }else if(self.isIOS=='android'){
            AndroidAndIosObj.getParames("paste:"+s);
       }
      
    },
    checkApp(){
      if(navigator.userAgent.split('platformParams=')[1]){
          var platformParams =  JSON.parse(navigator.userAgent.split('platformParams=')[1]);
          this.isIOS=platformParams.platform
        }else{
          return;
        }
    }
  }
}
</script>
<style lang="scss">
#invitation{
  .botBox{
    margin-top: 0.2rem;
    background: #fff;
    .gzBox{
      padding: 1rem 0.5rem;
      h3{
        font-size: 0.38rem;
        color: #6f7c85;
        font-weight: normal;
        margin-bottom: 0.6rem;
      }
      p{
        font-size: 0.28rem;
        color: #7b868e;
      }
    }
    .phTit{
      width: 5.6rem;
      margin: 0 auto;
      padding-top: 0.5rem;
      padding-bottom: 0.6rem;
      img{
        width: 5.6rem;
      }
    }
    .numBox{
      width: 9.8rem;
      margin: 0 auto;
      display: -webkit-flex; /* Safari */
      display: flex;
      justify-content:space-between;
      >div{
        box-sizing: border-box;
        background: #d2d9df;
        border-radius: 0.1rem;
        width: 4.6rem;
        height: 2rem;
        text-align: center;
        h3{
          font-size: 0.4rem;
          color: #6f7c85;
          font-weight: normal;
          line-height: 1.26rem;
        }
        em{
          color: #4881ec;
          font-size: 0.4rem;
        }
      }
    }
  }
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
    height: 6rem;
    box-sizing: border-box;
    background: linear-gradient(#6a60f7,#0ba4fd);
    color: #fff;
    text-align: center;
    padding-top:0.5rem;
    p{
      font-size: 0.38rem;
      padding-top: 0.2rem;
    }
    h1{
      font-size: 0.5rem;
      margin: 0.4rem 0 0.6rem 0;
    }
    a{
      display: inline-block;
      width: 1.3rem;
      height: 0.5rem;
      line-height: 0.5rem;
      font-size: 0.32rem;
      color: #fff;
      text-decoration: none;
      margin: 0 0.2rem;
      box-sizing: border-box;
      border: 0.02rem solid #fff;
      border-radius: 0.25rem;
    }
    .codeDiv{
      width: 10rem;
      margin: 0.5rem auto;
      border-top: 1px dashed #fff;
      padding-top: 0.5rem;
      text-align:center;
      
    }
   
  }
   .codeDiv{
      width: 10rem;
      margin: 0.5rem auto;
      // border-top: 1px dashed #fff;
      padding-top: 0.5rem;
      text-align:center;
      img{
        width: 2.88rem;
        height: 2.88rem;
      }
    }


}

</style>