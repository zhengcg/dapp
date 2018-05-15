
<template>
  <div id="home">
    <div class="mainBox">
      <marquee class="title" scrollamount="2" behavior="scroll" v-if="notification">
      <a :href="notification.url" style="color:#fff;text-decoration:none" >
        {{notification.content}}
      </a>
      </marquee>
      <div class="sl"><router-link :to="{name:'sourceList',query:{sid:token}}" style="text-decoration:none;color:#fff;">源力值 {{myPower}}</router-link></div>
      <div class="sr"><router-link :to="{name:'myAssets',query:{sid:token,isIndex:1}}" style="text-decoration:none;color:#fff;">正币 {{myZcoin}}</router-link></div>
      <div class="sm">72小时不领取宝藏将会消失</div>
      <div class="wkBox">
        <a href="javascript:;" class="kuang" v-for="(item,index) in kuang" @touchstart="wa(item.id,index,item.mineral)">{{item.mineral}}</a>
        
      </div>
      
      <div class="cz clearfix">
        <!-- <router-link :to="{name:'myAssets',query:{sid:token,isIndex:1}}">
          <img src="../assets/icon/icon01.png">
          <span>我的资产</span>
        </router-link> -->
        <router-link :to="{name:'source',query:{sid:token,power:myPower}}" style="margin-left:0">
          <img src="../assets/icon/icon02.png">
          <span>提升源力</span>
        </router-link>
        <router-link :to="{name:'invitation',query:{sid:token,inviteCode:inviteCode}}" style="float: right;">
          <img src="../assets/icon/icon03.png">
          <span>邀请好友</span>
        </router-link>
      </div>
      
    </div>
    <div class="rankDiv">
      {{curText}}
      <a href="javascript:;" @click="tabFn">{{tabText}} &gt;</a>
    </div>
   <!--  <div class="wb">
      <em>自动挖宝</em><span>挖宝中</span>
      <mt-switch v-model="value"></mt-switch>
    </div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <div class="tt">
      <span>头条</span>
      <em>【小秘书专访】星球又有新岗位啦！小伙伴们赶快加入</em>
    </div> -->
    <!-- <ul class="zxjl">
      <div><span>最新记录</span></div>
      <li v-for="item in powerList">
        <span>{{item.source}}</span>
        <span><em>{{item.power}}</em>GXS</span>
        <span>{{item.createDate}}</span>
      </li>
      <router-link :to="{name:'sourceList',query:{sid:token}}">查看更多记录</router-link>
    </ul> -->
    <div class="phTit" v-show="cur==0">
      <img src="../assets/icon/icon20.png">
    </div>
    <div  v-show="cur==0" class="table" style="margin-bottom:0.2rem;">
      <div class="thead">
        <div class="th">名次</div>
        <div class="th">账户</div>
        <div class="th">正币数量</div>
      </div>
      <div class="tbody">
        <div class="tr" v-for="item in zcoinList">
          <div class="td" v-if="item.rank==1"><img src="../assets/icon/icon05.png" alt=""></div>
          <div class="td" v-else-if="item.rank==2"><img src="../assets/icon/icon06.png" alt=""></div>
          <div class="td" v-else-if="item.rank==3"><img src="../assets/icon/icon07.png" alt=""></div>
          <div class="td" v-else>{{item.rank}}</div>
          <div class="td">{{item.name}}</div>
          <div class="td">{{item.zcoin}}</div>
        </div>  
      </div>     
    </div>
   <!--  <ul class="wbsj" style="margin-top:0.2rem;">
    <div>
      <span>挖宝数据</span>
    </div>
      <li><span>我当前的挖宝源力</span><em>{{myPower}}</em></li>
      <li><span>我的源力排名</span><em>{{myRankNo}}</em></li>
    </ul> -->
    <div class="phTit"  v-show="cur==1">
      <img src="../assets/icon/icon04.png">
    </div>
    <div class="table"  v-show="cur==1">
      <div class="thead">
        <div class="th">名次</div>
        <div class="th">账户</div>
        <div class="th">源力值</div>
      </div>
      <div class="tbody">
        <div class="tr" v-for="item in list">
          <div class="td" v-if="item.rank==1"><img src="../assets/icon/icon05.png" alt=""></div>
          <div class="td" v-else-if="item.rank==2"><img src="../assets/icon/icon06.png" alt=""></div>
          <div class="td" v-else-if="item.rank==3"><img src="../assets/icon/icon07.png" alt=""></div>
          <div class="td" v-else>{{item.rank}}</div>
          <div class="td">{{item.name}}</div>
          <div class="td">{{item.power}}</div>
        </div>  
      </div>     
    </div>
    
    
  </div>
</template>

<script>
import api from '../api/api';
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
  name: 'home',
  data () {
    return {
      value:true,
      kuang:[],
      token:"",
      // powerList:[],
      list:[],
      myRankNo:"",
      myPower:"",
      myZcoin:"",
      myZcoinNo:"",
      inviteCode:"",
      audioSrc:api.audio,
      notification:{},
      zcoinList:[],
      curText:"正币排行榜",
      tabText:"按源力排行",
      cur:0

    }
  },
  created(){
    this.token=this.$route.query.sid
    document.cookie='zstar_sid='+this.token;  
  },
  mounted(){        
    this.getDetail();
    this.getRank();
    this.getZcoinRank();     
  },
  methods:{
    tabFn(){
      if(this.cur==0){
        this.cur=1;
        this.curText="源力排行榜"
        this.tabText="按正币排行"

      }else{
        this.cur=0;
        this.curText="正币排行榜"
        this.tabText="按源力排行"

      }

    },
    wa(id,i,coin){
      var self=this;
      
      let audio = new Audio();
      audio.src = self.audioSrc;
      this.axios.get(api.wakuang, {params:{mineralId:id}})
          .then(function (res) {
            Indicator.close();
            if(res.data.code==200){
              audio.play();
              self.animateFn(i)
              // self.myZcoin=(parseFloat(self.myZcoin)+parseFloat(coin)).toFixed(5)    
              self.getRank();
              self.getZcoinRank();            
              
            }else if(res.data.code==201){
              window.webkit.messageHandlers.getParames.postMessage("login")
            }else{
              Toast(res.data.message);
            }
            
          })
          .catch(function (error) {
            Toast(error);
          });
     

    },
    animateFn(i){
      
      $(".wkBox a").eq(i).animate({left: "0.5rem", top: "10rem",opacity:0.3}, 500,function(){
        $(this).hide()
      });
      

    },
    getDetail(){
        var self=this;
        Indicator.open();               
        this.axios.get(api.getInfo).then(function (res) {
          Indicator.close();
          if(res.data.code==200){
              self.kuang=res.data.result.minerals;
              self.myZcoin=res.data.result.zcoin;
              self.inviteCode=res.data.result.inviteCode;
              self.notification=res.data.result.notification
            }else if(res.data.code==201){
              window.webkit.messageHandlers.getParames.postMessage("login")
            }else{
            Toast(res.data.message)
          }
          

        }).catch(function (error) {
        　　Toast(error);
        });

      },
    getRank(){
       var self=this;
        Indicator.open();               
        this.axios.get(api.rank).then(function (res) {
          Indicator.close();
          if(res.data.code==200){
            self.myPower=res.data.result.power;
            self.myRankNo=res.data.result.rankNo;
            self.list=res.data.result.powerRankList;

          }else if(res.data.code==201){
              window.webkit.messageHandlers.getParames.postMessage("login")
          }else{
            Toast(res.data.message)
          }
          

        }).catch(function (error) {
        　　Toast(error);
        });

    },
    getZcoinRank(){
       var self=this;
        Indicator.open();               
        this.axios.get(api.zcoinRank).then(function (res) {
          Indicator.close();
          if(res.data.code==200){
            self.myZcoin=res.data.result.zcoin;
            self.myZcoinNo=res.data.result.rankNo;
            self.zcoinList=res.data.result.zcoinRankList;

          }else if(res.data.code==201){
              window.webkit.messageHandlers.getParames.postMessage("login")
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
#home{
  .rankDiv{
    height:1.5rem;
    line-height:1.5rem;
    padding:0 0.5rem;
    backkground:#fff;
    font-size:0.4rem;
    a{
      float:right;
      text-decoration: none;
    }
  }
  background: #efefef;
.clearfix:after{clear: both;content: '';display: block;height: 0;}
input[type="text"] {
-webkit-appearance: none;

}
input[type="tel"] {
-webkit-appearance: none;
}
textarea{
-webkit-appearance: none;
}
.mainBox{

}
.mainBox{
  width: 10.8rem;
  height: 12.96rem;
  overflow: hidden;
  background: url("../assets/bg/main.jpg") no-repeat center;
  background-size: contain;
  position: relative;
  .title{
    height: 0.8rem;
    width: 100%;
    position: absolute;
    line-height: 0.8rem;
    color: #fff;
    font-size: 0.32rem;
    background: rgba(39,111,198,0.5);
    top: 0.5rem;
  }
  .sl{
    position: absolute;
    left: 0.5rem;
    height: 0.9rem;
    line-height: 0.9rem;
    color: #fff;
    font-size: 0.4rem;
    background: rgba(33,99,178,0.7);
    padding: 0 0.4rem;
    border-radius: 0.45rem;
    top: 1.7rem;
    z-index:100000;
  }
  .sr{
    position: absolute;
    left: 0.5rem;
    height: 0.9rem;
    line-height: 0.9rem;
    color: #fff;
    font-size: 0.4rem;
    background: rgba(33,99,178,0.7);
    padding: 0 0.4rem;
    border-radius: 0.45rem;
    top: 0.5rem;
    z-index:100000;
  }
  .sm{
    padding: 0 0.5rem;
    color: #fff;
    font-size: 0.32rem;
    position: absolute;
    top: 2.6rem;
    height: 0.9rem;
    line-height: 0.9rem;
  }
  .cz{
    width: 10.2rem;
    position: absolute;
    left: 0.3rem;
    bottom: 0.4rem;
    a{
      display: inline-block;
      width: 1.8rem;
      text-align: center;
      color: #fff;
      font-size: 0.42rem;
      text-decoration: none;
      position: relative;
      margin-left: 0.5rem;
      span{
        margin-top: 0.25rem;
      }
      img{
      width: 1.6rem;
      height: 1.6rem;
      }
      em{
        position: absolute;
        font-style: normal;
        color: #fff;
        font-style: 0.32rem;
        padding: 0 0.2rem;
        display: block;
        height: 0.5rem;
        line-height: 0.5rem;
        border-radius: 0.25rem;
        background: #fc5455;
        top:0;
        left: 1.3rem;
      }

    }
    
  }
}
.wb{
  height: 1.25rem;
  line-height: 1.25rem;
  background: #fff;
  padding: 0 0.5rem;
  font-size: 0.42rem;
  color: #333;
  >em{
    vertical-align: middle;

  }
  >span{
    // display: inline-block;
    padding: 0.05rem 0.2rem;
    color: #fff;
    font-size: 0.24rem;
    // height: 0.4rem;
    border-radius: 0.2rem;
    background: #4880ec;
    margin-left: 0.25rem;
    vertical-align: middle;
  }
  .mint-switch{
    float: right;
    margin-top: 0.325rem;
  }
}

.mint-swipe{
  width: 10.8rem;
  height: 2.8rem;
  .mint-swipe-item{
    
    background: #f1343a
  }
}
.tt{
  height: 1.12rem;
  line-height: 1.12rem;
  background: #efefef;
  padding: 0 0.5rem;
  color: #4880ec;
  font-size: 0.32rem;
  span{
    color: #fff;
    padding: 0.1rem 0.2rem;
    background: #4880ec;
    border-radius: 0.05rem;
    vertical-align: middle;
    margin-right: 0.3rem;
  }
  em{
    vertical-align: middle;
  }
}
.zxjl{
  
  background: #fff;
  padding: 0 0.5rem;
  padding-bottom: 0.2rem;
  list-style-type: none;
  margin-bottom: 0.2rem;
  div{
    border-bottom: 0.01rem solid #e8e9eb;
    height: 0.96rem;
    line-height: 0.96rem;
    font-size: 0.4rem;
    color: #4880ec;
    margin-bottom: 0.2rem;
    span{
      border-left: 0.1rem solid #45db5e;
      padding-left: 0.3rem;

    }
  }
  li{
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.32rem;
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content:space-between;
    align-items:center;
    span{
      display:block;
      width:33.3333333333333%;
      color: #666;
      em{
        color: #fc5455;
      }
    }
    span:nth-child(2){
      text-align:center

    }
    span:nth-child(3){
      text-align:right

    }
  }
  a{
    display: block;
    margin-top: 0.2rem;
    width: 2.28rem;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    color: #999;
    border: 0.01rem solid #999;
    text-decoration: none;
    margin-left: auto;
    margin-right: auto;
  }
}
.wbsj{
  background: #fff;
  padding: 0 0.5rem;
  list-style-type: none;
  div{
    height: 0.96rem;
    line-height: 0.96rem;
    font-size: 0.4rem;
    color: #4880ec;
    border-bottom: 0.01rem solid #e8e9eb;
    margin-bottom: 0.2rem;
    span{
      border-left: 0.1rem solid #45db5e;
      padding-left: 0.3rem;
    }
  }
  li{
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.32rem;
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content:space-between;
    align-items:center;

  }
  li:last-of-type{
    padding-bottom: 0.2rem;
    border-bottom: 0.01rem solid #e8e9eb; 
  }

}
.phTit{
  background: #fff;
  padding:0.42rem 0 0.27rem 0;
  display: block;
  text-align: center;
  img{
    width: 5.52rem;
  }
  
}
.table{
  // width: 9.8rem;
  padding: 0 0.5rem;
  margin: 0 auto;
  background: #fff;
  .thead{
    height: 1rem;
    line-height: 1rem;
    background: #95a2ab;
    color: #fff;
    font-size: 0.4rem;
    text-align: center;
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content:space-between;
    align-items:center;
    .th{
      width: 33.33333333%
    }
  }
  .tbody{
    
    .tr{
      padding-top: 0.2rem;
      height: 0.8rem;
      line-height: 0.8rem;
      background: #efefef;
      color: #2775ab;
      font-size: 0.32rem;
      text-align: center;
      display: -webkit-flex; /* Safari */
      display: flex;
      justify-content:space-between;
      align-items:center;
      .td{
        width: 33.33333333%;
        background: #fff;
      }
      .td:first-of-type{
        color: #95a2ab;
        img{
          width: 0.62rem;
          height: 0.52rem;
          vertical-align: middle;
        }

      }

    }

  }
}


}

</style>
