/**
 * Created by superman on 17/2/16.
 * http配置
 */

import axios from 'axios'
import store from '../store/store'
import * as types from '../store/types'
import router from '../router'

// axios 配置
axios.defaults.timeout = 50000;

// http request 拦截器
// axios.interceptors.request.use(
//     config => {
        
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     });

export default axios;
