<template>
	<div id="putForward">
    <div class="topTitle" v-if="isIndex==1"><router-link :to="{name:'myAssets',query:{sid:token,isIndex:isIndex}}"></router-link>提现</div>
    <div style="height:1.5rem" v-if="isIndex==1"></div>
    <div class="formBox">
      <mt-field label="提取到地址" placeholder="请输入账户地址" v-model="walletAddress"></mt-field>
      <mt-field label="提取金额" placeholder="请输入提取金额"  v-model="num"></mt-field>
      <p class="ky">当前可用余额：{{zcoin}}</p>
    </div>
    <a href="javascript:;" class="subBtn" @click="tx">提现</a>
    
	</div>
</template>
<script>
import api from '../api/api';
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default {
  name: 'hello',
  data() {
    return {
      token:"",
      walletAddress:"",
      num:0,
      zcoin:0,
      isIndex:0
    }
  },
  created(){
    this.token=this.$route.query.sid;
    this.zcoin=this.$route.query.zcoin;
    this.isIndex=this.$route.query.isIndex;
    document.cookie='zstar_sid='+this.token;  
  },
  mounted() {
    document.title="提现";
    this.getAddress()
  },
  methods: {
      getAddress(){     
        var self=this;
         Indicator.open();          
      self.axios.get(api.getAddress).then(function (res) {
        Indicator.close();
        if(res.data.code==200){
          self.walletAddress=res.data.result.walletAddress   

        }else if(res.data.code==201){
           window.webkit.messageHandlers.getParames.postMessage("login")
        }
          
            
      }).catch(function (error) {
      　　Toast(error);
      });
       
      },
      tx(){
        var self=this;
        console.log(parseFloat(self.num));
        if(parseFloat(self.num)<=0){
          MessageBox('提示', '请输入提现金额');
        }else if(parseFloat(self.num)>self.zcoin){
          MessageBox('提示', '提现金额不能大于可用余额');
        }else if(self.walletAddress==""){
          MessageBox('提示', '请输入账户地址');
        }else{
          Indicator.open();
           this.axios.get(api.tx, {params:{value:self.num,walletAddress:self.walletAddress}})
          .then(function (res) {
            Indicator.close();
            if(res.data.code==200){
               MessageBox('提示', '提取成功');
            }else if(res.data.code==201){
              window.webkit.messageHandlers.getParames.postMessage("login")
            }else{
              Toast(res.data.message);
            }
            
          })
          .catch(function (error) {
            Toast(error);
          });
          
        }
      }

   
  }
}
</script>
<style lang="scss">
#putForward{
  .ky{
    color: #999;
    font-size: 0.32rem;
    line-height: 0.8rem;
    text-align: right;
    padding-right: 0.5rem;
  }
  .subBtn{
    display: block;
    width: 8.8rem;
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    text-align: center;
    font-size: 0.5rem;
    text-decoration: none;
    background: #a8a8a9;
    height: 1.12rem;
    line-height: 1.12rem;
    border-radius: 0.56rem;
    color: #fff;
  }


}



</style>