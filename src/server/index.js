/**
 * Created by superman on 17/2/16.
 * http配置
 */

import axios from 'axios'
import store from '../store/store'
import * as types from '../store/types'
import router from '../router'

// axios 配置
axios.defaults.timeout = 5000;


export default axios;
