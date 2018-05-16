<template>
	<div id="wallet">
    <div id="createWallet" v-show="!isCreate">
      <img src="../assets/icon/icon09.png">
      <p>暂未绑定正币钱包</p>
      <a href="javascript:;" @click="createWa">创建钱包</a>      
    </div>
    <div id="myWallet" v-show="isCreate">
      <!-- <div class="listItem">
      <div class="listTitle"><img src="../assets/icon/icon08.png">正币</div>
      <div class="listNum">{{zcoin}}</div> -->
      <div class="myHead">
       <!--  <div class="headBox"><img :src="img" v-if="img"><img v-else src="../assets/icon/icon08.png"></div>
        <div class="nickName">{{nickName}}</div> -->
        <div class="zcBox">
          <div class="box1" >
            
            <em>{{zcoin}}</em>
            <p>ZIN</p>
          </div>
          <!-- <div class="box2" style="text-align:center;font-size:0.42rem">≈</div>
          <div class="box3" style="text-align:right">
            <p>价值 (RMB)</p>
            <em>{{(0.1*zcoin).toFixed(2)}}</em>
          </div> -->
        </div>
        
      </div>
      <div class="btnBox">
        <a href="javascript:;" @click="sendFn">发送</a>
        <a href="javascript:;" @click="sendFn">接收</a>
      </div>
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
      zcoin:0,
      isIOS:'ios'
    }
  },
  created(){
    this.token=this.$route.query.sid 
    document.cookie='zstar_sid='+this.token;  
  },
  mounted() {
    document.title="我的钱包";
    this.getDetail();
    this.checkApp(); 
  },
  methods: {
    checkApp(){
      if(navigator.userAgent.split('platformParams=')[1]){
          var platformParams =  JSON.parse(navigator.userAgent.split('platformParams=')[1]);
          this.isIOS=platformParams.platform
        }else{
          return;
        }
      },
    createWa(){
      var self=this;
      MessageBox.prompt('请输入钱包私钥').then(({ value, action }) => {
        if(value){
             Indicator.open();               
              self.axios.get(api.createWallet, {params: {privateKey:value}}).then(function (res) {
                Indicator.close();
                if(res.data.code==200){
                    Toast("创建成功！");
                    self.getDetail();
                  }else if(res.data.code==201){
                    if(self.isIOS=='ios'){
                      window.webkit.messageHandlers.getParames.postMessage("login")

                    }else if(self.isIOS=='android'){
                      AndroidAndIosObj.getParames("login");
                    }
                  }else{
                  Toast(res.data.message)
                }
                

              }).catch(function (error) {
              　　Toast(error);
              });

        }

        },()=>{});
    },
    sendFn(){
      MessageBox('提示', '暂未开通');

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
              if(self.isIOS=='ios'){
                    window.webkit.messageHandlers.getParames.postMessage("login")

                  }else if(self.isIOS=='android'){
                    AndroidAndIosObj.getParames("login");
                  }
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
  .btnBox{
    height:1.5rem;
    background:#fff;
    display: -webkit-flex; /* Safari */
    display: flex;
    box-sizing:border-box;
    padding:0.22rem 0;
    a{
      display:block;
      width:50%;
      text-align:center;
      height:1.06rem;
      line-height:1.06rem;
      color:#4880ed;
      font-size:0.5rem;
      text-decoration:none;
    }
    a:first-of-type{
      border-right:0.01rem solid #e8e9eb;
    }
  }
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



  .myHead{
    height:7.88rem;
    box-sizing: border-box;
    background: linear-gradient(#6a60f7,#0ba4fd);
    color: #fff;
    position:relative;
    .headBox{
      position:absolute;
      width:2rem;
      height:2rem;
      over-flow:hidden;
      border-radius:50%;
      left:50%;
      margin-left:-1rem;
      top:1.75rem;
      img{
        width:2rem;
        height:2rem;
      }
    }
    .nickName{
      font-size:0.45rem;
      text-align:center;
      width:100%;
      position:absolute;
      top:3.85rem;

    }
    .zcBox{
      position:absolute;
      top:2.5rem;
      width:100%;
      left:0rem;
      text-align:center;
      >div{
        width:100%;
        text-align:center;
        p{
          font-size:0.38rem;
          line-height:0.9rem;
          margin-top:0.2rem;
        }
        em{
          font-size:1.5rem;

        }
      }
    }
  }


}



</style>