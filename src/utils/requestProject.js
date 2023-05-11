import axios from 'axios';
import { inject } from './injectIntercepter';
const service = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0/',
  // baseURL: '/api', // api的base_url
  timeout: 20000, // 请求超时时间
});
inject(service);

export default service;
