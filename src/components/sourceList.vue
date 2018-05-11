<template>
	<div id="source"  v-infinite-scroll="loadMoreM"
		  infinite-scroll-disabled="loadingM"
		  infinite-scroll-distance="10"
		  infinite-scroll-immediate-check="false">
		  <div class="topTitle"><router-link :to="{name:'home',query:{sid:token}}"></router-link>源力记录</div>
		  <div style="height:1.5rem"></div>
		<ul>
			<li v-for="item in msgList">
				<h3>{{item.source}}</h3>
				<p>{{item.createDate}}</p>
				<div>
					{{item.power}}
				</div>
			</li>
		</ul>
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
    	pageSize:10,
    	pageNo:1,
    	totalPage:0
    
    }
  },
  created(){
    this.token=this.$route.query.sid ;
    document.cookie='zstar_sid='+this.token;  
  },
  mounted() {
    document.title="源力记录";
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
		self.axios.get(api.powerOrder, {
		　　params: {pageSize:self.pageSize,pageNo:pageNo}
		}).then(function (res) {
			Indicator.close();
			 if(res.data.code==200){
		        self.totalPage= Math.ceil(res.data.result.count/self.pageSize)
		        for(var i=0;i<res.data.result.powerList.length;i++){
		          self.msgList.push(res.data.result.powerList[i]) ;
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
#source{
	padding:0.4rem 0.5rem;
	ul{
		border-radius:0.05rem;
		over-flow:hidden;
		li:first-of-type{
			border-radius:0.1rem 0.1rem 0 0;
		}
		li:last-of-type{
			border-radius: 0 0 0.1rem 0.1rem;
		}
		li{
			background:#fff;
			padding:0.3rem 0.4rem;
			border-bottom:0.01rem solid #e8e9eb;
			list-style-type: none;
			position: relative;
			div{
				position: absolute;
				height: 1.85rem;
				top: 0;
				right: 0.4rem;
				line-height: 1.85rem;
				font-size: 0.4rem;
				color: #fd5555;
			}
			h3{
				font-size:0.4rem;
				color:#333;
				line-height:0.7rem;
				font-weight:normal;
			}
			p{
				font-size:0.32rem;
				color:#999;
				line-height:0.55rem;
			}
		}
	}


}


</style>