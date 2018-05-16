<template>
<div id="source">
  <div class="topTitle"><router-link :to="{name:'home',query:{sid:token}}"></router-link>提升源力</div>
  <div style="height:1.4rem"></div>
  <div class="sourceTitle">
    <h1>当前源力：<em>{{power}}</em></h1>
    <h3>提升源力任务栏</h3>
    <div>授权一下平台的账户信息，可快速提升源力，并同时获得ZIN奖励</div>
  </div>
  <div class="sourceList clearfix">
    <div>
      <a href="javascript:;" class="ksy">
        <h3>关注微信公众号</h3>
        <div class="imgbox"><img src="../assets/icon/icon11.png"></div>      
        <p>挖宝源力提升<em>+50</em></p>
      </a>
    </div>
    <div>
      <a href="javascript:;" class="wkt">
        <h3>人脸识别</h3>
        <div class="imgbox"><img src="../assets/icon/icon12.png"></div>   
        <p>挖宝源力提升<em>+50</em></p>
      </a>
    </div>
    <div>
      <a href="javascript:;" class="ywc">
        <h3>绑定钱包</h3>
        <div class="imgbox"><img src="../assets/icon/icon13.png"></div>   
        <p>挖宝源力提升<em>+50</em></p>
      </a>
    </div>
    <div>
      <a href="javascript:;" class="ywc">
        <h3>备份钱包</h3>
        <div class="imgbox"><img src="../assets/icon/icon14.png"></div>   
        <p>挖宝源力提升<em>+50</em></p>
      </a>
    </div>
    <div>
      <a href="javascript:;" class="ywc">
        <h3>身份证ORC识别</h3>
        <div class="imgbox"><img src="../assets/icon/icon15.png"></div>   
        <p>挖宝源力提升<em>+50</em></p>
      </a>
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
      power:0
    
    }
  },
  created(){
    this.token=this.$route.query.sid;
    this.power=this.$route.query.power;
    document.cookie='zstar_sid='+this.token;  
  },
  mounted() {
    document.title="提升算力";

  },
  methods: {
    
    


   
  }
}
</script>
<style lang="scss">
#source{
  background: #efefef;
  .sourceList{
    width: 10.1rem;
    margin: 0.15rem auto 0 auto;
    padding-bottom:0.3rem;
    background: #efefef;
    >div{
      float: left;
      width: 50%;
      padding: 0.15rem;
      overflow: hidden;
      box-sizing: border-box;
      a{
        display: block;
        height: 4.2rem;
        background: #fff;
        border-radius: 0.15rem;
        text-decoration: none;
        h3{
          color: #6f7b82;
          font-size: 0.4rem;
          font-weight: normal;
          text-align: center;
          height: 1.2rem;
          line-height: 1.2rem;
        }
        p{
          color: #6f7b82;
          font-size: 0.32rem;
          margin-top: 0.3rem;
          text-align: center;

        }
        
        .imgbox{
          height: 1.5rem;
          width: 1.5rem;
          margin: 0 auto;
          border-radius: 0.1rem;
          padding: 0.2rem;
          text-align: center;
          background: #4780ec;
          
          overflow: hidden;
          img{
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
      a.ksy .imgbox{
        background: #4780ec;

      }
      a.wkt .imgbox{
        background: #ccc;
      }
      a.ywc .imgbox{
        background: #eee;
      }
      a.ywc{
        background:#fff url("../assets/icon/icon18.png") no-repeat right bottom;
        background-size: 1rem 1rem;
        
      }
    }
  }
  .sourceTitle{
    width: 9.8rem;
    margin: 0.3rem auto;
    height: 3.9rem;
    background: linear-gradient(#695ff6,#0aa4ff);
    border-radius: 0.08rem;
    color: #fff;
    box-sizing: border-box;
    padding: 0.4rem;
    h3{
      font-size: 0.4rem;
      line-height: 0.8rem;
      font-weight: normal;

    }
    div{
      line-height: 0.7rem;
      font-size: 0.38rem;
    }
  }

}

</style>