<template>
  <div id="home">
    <div class="mainBox">
      <marquee class="title" scrollamount="2" behavior="scroll">
        首个区块链夺宝应用“今日在币得城开启”，现在关注公众号正品，参与获得积分的反间谍法
      </marquee>
      <div class="sl">当前挖宝算力 888</div>
      <div class="sm">72小时不领取宝藏将会消失</div>
      <div class="cz clearfix">
        <a href="">
          <img src="../assets/icon/icon01.png">
          <span>我的资产</span>
        </a>
        <a href="">
          <em>6</em>
          <img src="../assets/icon/icon02.png">
          <span>提升算力</span>
        </a>
        <a href="" style="float: right;">
          <img src="../assets/icon/icon03.png">
          <span>邀请好友</span>
        </a>
      </div>
      
    </div>
    <div class="wb">
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
    </div>
    <ul class="zxjl">
      <div><span>最新记录</span></div>
      <li>
        <span>获得</span>
        <span><em>0.005</em>GXS</span>
        <span>1小时前</span>
      </li>
      <li>
        <span>获得</span>
        <span><em>0.005</em>GXS</span>
        <span>1小时前</span>
      </li>
      <li>
        <span>获得</span>
        <span><em>0.005</em>GXS</span>
        <span>1小时前</span>
      </li>
      <a href="javascript:;">查看更多记录</a>
    </ul>
    <ul class="wbsj">
    <div>
      <span>挖宝数据</span>
    </div>
      <li><span>我当前的挖宝算力</span><em>21</em></li>
      <li><span>我的算力排名</span><em>1055740</em></li>
      <li><span>今日全民挖宝获利次数</span><em>2353088</em></li>
      <li><span>累计全民挖宝获利次数</span><em>2353088</em></li>
    </ul>
    <div class="phTit">
      <img src="../assets/icon/icon04.png">
    </div>
    <div class="table">
      <div class="thead">
        <div class="th">名次</div>
        <div class="th">账户</div>
        <div class="th">算力值</div>
      </div>
      <div class="tbody">
        <div class="tr">
          <div class="td"><img src="../assets/icon/icon05.png" alt=""></div>
          <div class="td">三秋桂子，十里荷花</div>
          <div class="td">657</div>
        </div>
        <div class="tr">
          <div class="td"><img src="../assets/icon/icon06.png" alt=""></div>
          <div class="td">嘻嘻哈哈</div>
          <div class="td">657</div>
        </div>  
        <div class="tr">
          <div class="td"><img src="../assets/icon/icon07.png" alt=""></div>
          <div class="td">嘻嘻哈哈</div>
          <div class="td">657</div>
        </div> 
        <div class="tr">
          <div class="td">4</div>
          <div class="td">嘻嘻哈哈</div>
          <div class="td">657</div>
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
      value:true

    }
  },
  mounted(){
    
  },
  methods:{

  }
}
</script>

<style lang="scss">
#home{
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
      color: #666;
      em{
        color: #fc5455;
      }
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
