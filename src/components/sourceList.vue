<template>
	<div id="source">
		<ul>
			<li>
				<h3>每日登陆</h3>
				<p>2018-05-07 09:50:53</p>
			</li>
			<li>
				<h3>每日登陆</h3>
				<p>2018-05-07 09:50:53</p>
			</li>
			<li>
				<h3>每日登陆</h3>
				<p>2018-05-07 09:50:53</p>
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
    
    }
  },
  mounted() {
    document.title="源力记录";
  },
  methods: {


   
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