<template>
	<div id="myAssets"  v-infinite-scroll="loadMoreM"
      infinite-scroll-disabled="loadingM"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check="false">
      <div class="topTitle"><router-link :to="{name:'home',query:{sid:token}}"></router-link>我的资产</div>
      <div style="height:1.5rem"></div>
		<div class="listItem" v-for="item in msgList">
			<div class="listTitle"><img src="../assets/icon/icon08.png"> {{item.source}}</div>
			<div class="listNum">{{item.zcoin}}</div>
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
      totalPage:0
    
    }
  },
  created(){
    this.token=this.$route.query.sid 
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



</style>