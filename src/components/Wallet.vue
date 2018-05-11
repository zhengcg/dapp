<template>
	<div id="wallet">
    <div id="createWallet" v-show="!isCreate">
      <img src="../assets/icon/icon09.png">
      <p>暂未绑定ZIN钱包</p>
      <a href="javascript:;" @click="createWa">创建钱包</a>      
    </div>
    <div id="myWallet" v-show="isCreate">
      <div class="listItem">
      <div class="listTitle"><img src="../assets/icon/icon08.png">ZIN</div>
      <div class="listNum">{{zcoin}}</div>
    </div>
    </div>

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
      isCreate:false,
      zcoin:0   
    }
  },
  created(){
    this.token=this.$route.query.sid 
    document.cookie='zstar_sid='+this.token;  
  },
  mounted() {
    document.title="我的钱包";
    this.getDetail()
  },
  methods: {
    createWa(){
      var self=this;
      MessageBox.prompt('请输入钱包私钥').then(({ value, action }) => {
        if(value){
             Indicator.open();               
              self.axios.get(api.createWallet, {params: {privateKey:value}}).then(function (res) {
                Indicator.close();
                if(res.data.code==200){
                    Toast("创建成功！");
                    self.isCreate=true;
                    self.getDetail();
                  }else if(res.data.code==201){
                    window.webkit.messageHandlers.getParames.postMessage("login")
                  }else{
                  Toast(res.data.message)
                }
                

              }).catch(function (error) {
              　　Toast(error);
              });

        }

        },()=>{});
    },
    getDetail(){
        var self=this;
        Indicator.open();               
        this.axios.get(api.wallet).then(function (res) {
          Indicator.close();
          if(res.data.code==200){
              self.isCreate=true
              self.zcoin=res.data.result.balance
            }else if(res.data.code==201){
              window.webkit.messageHandlers.getParames.postMessage("login")
            }else if(res.data.code==501){
              self.isCreate=false
            }else{
            Toast(res.data.message)
          }
          

        }).catch(function (error) {
        　　Toast(error);
        });

      }
   
  }
}
</script>
<style lang="scss">
#wallet{
  .listItem{
  display: -webkit-flex; /* Safari */
    display: flex;
    justify-content:space-between;
    align-items:center;
    background: #fff;
    height: 1.5rem;
    line-height: 1.5rem;
    padding: 0 0.5rem;
    margin-bottom: 0.2rem;
    .listTitle{
      img{
        width: 0.8rem;
        height: 0.8rem;
        margin-right: 0.3rem;       
        vertical-align: middle;
      }
      color: #333;
      font-size: 0.4rem;


    }
    .listNum{
      font-size: 0.4rem;
      color: #fd5555;
    }

}
  #createWallet{
    text-align: center;
    padding-top: 2.94rem;
    img{
      width: 3rem;
      height: 3rem;
      margin-bottom: 0.8rem;
    }
    p{
      font-size: 0.5rem;
      color: #999;
      margin-bottom: 3rem;
    }
    a{
      display: block;
      width: 7.1rem;
      height: 1.2rem;
      line-height: 1.2rem;
      text-align: center;
      margin: 0 auto;
      font-size: 0.42rem;
      color: #fff;
      background: #4982e6;
      border-radius: 0.05rem;
      text-decoration: none;
    }
  }


}



</style>