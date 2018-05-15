<template>
	<div id="myAssets"  v-infinite-scroll="loadMoreM"
      infinite-scroll-disabled="loadingM"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check="false">
      <div class="topTitle" v-if="isIndex==1"><router-link :to="{name:'home',query:{sid:token}}"></router-link>我的资产</div>
      <div style="height:1.5rem" v-if="isIndex==1"></div>
      <div class="listBox" >
      <div class="listTitle"> 正币总量</div>
      <div class="Zl">{{zcoin}}</div>
      <!-- <div class="listNum" style="font-weight: bold"></div> -->
      <router-link :to="{name:'putForward',query:{sid:token,zcoin:zcoin,isIndex:isIndex}}" class="dateBox" style="text-decoration: none">提现 &gt;</router-link>
    </div>
		<div class="listItem" v-for="item in msgList">
			<div class="listTitle"><img src="../assets/icon/icon08.png"> {{item.source}}</div>
			<div class="listNum">{{item.zcoin}}</div>
      <div class="dateBox">{{item.createDate}}</div>
		</div>
	</div>
</template>
<script>
import api from '../api/api';
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
  name: 'hello',
  data() {
    return {
      token:"",
      msgList:[],
      pageSize:15,
      pageNo:1,
      totalPage:0,
      zcoin:0,
      isIndex:0
    
    }
  },
  created(){
    this.token=this.$route.query.sid;
    this.isIndex= this.$route.query.isIndex;
   document.cookie='zstar_sid='+this.token;  
  },
  mounted() {
    document.title="我的资产";
    this.getMsg(1)
  },
  methods: {
    
      loadMoreM(){
      var self=this;
      if (self.pageNo<self.totalPage) {
        if(!self.loadingM){
          Indicator.open(); 
          self.loadingM=true;
          self.pageNo++
          setTimeout(function(){
            self.getMsg(self.pageNo);
          },500)        
          
        }         
                          
        }
    },
    getMsg(pageNo){     
      var self=this;
       Indicator.open();          
    self.axios.get(api.zcoinOrder, {
    　　params: {pageSize:self.pageSize,pageNo:pageNo}
    }).then(function (res) {
      Indicator.close();
      if(res.data.code==200){
        self.zcoin=res.data.result.zcoin
        self.totalPage= Math.ceil(res.data.result.count/self.pageSize)
        for(var i=0;i<res.data.result.zcoinList.length;i++){
          self.msgList.push(res.data.result.zcoinList[i]) ;
        } 
        self.loadingM=false;    

      }else if(res.data.code==201){
         window.webkit.messageHandlers.getParames.postMessage("login")
      }
        
          
    }).catch(function (error) {
    　　Toast(error);
    });

                      
        
      
    }


   
  }
}
</script>
<style lang="scss">
#myAssets{
  background: #efefef;
}
.listBox{
  background: linear-gradient(#6a60f7,#0ba4fd);
  height:2rem;
  position:relative;
  padding:0.5rem;
  color:#fff;
  .listTitle{
    font-size:0.28rem;

  }
  .Zl{
    font-size:0.8rem;
    margin-top:0.5rem;

  }
  .dateBox{
    position:absolute;
    right:0.5rem;
    bottom:0.8rem;
    color:#fff;
    font-size:0.4rem;
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
    .dateBox{
      font-size: 0.4rem;
    }

}



</style>