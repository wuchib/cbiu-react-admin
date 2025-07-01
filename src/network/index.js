import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';
import { message } from 'antd';

// 创建一个 Alova 实例，添加请求和响应拦截器
const api = createAlova({
  baseURL: '/api', // 替换为你的API地址
  timeout: 5000, // 可选，设置请求超时时间
  requestAdapter: adapterFetch(),
  // 响应拦截
  responded: async (response, method) => {
    // 这里可以统一处理响应，比如全局错误处理
    if (!response.ok) {
      console.log(message);
      message.error('请求失败')
    }
    return response.json();
  },
  // 请求拦截
  beforeRequest: (method) => {
    // 这里可以统一加token等
    // method.config.headers = { ...method.config.headers, Authorization: 'Bearer token' };
    // 简单打印日志
    // console.log('请求拦截:', method.url, method.data || method.params);
  },
});

// 封装 GET 请求
export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    api.Get(url, { params })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

// 封装 POST 请求
export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    api.Post(url, data)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

// 封装 PUT 请求
export const put = (url, data) => {
  return new Promise((resolve, reject) => {
    api.Put(url, data)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

// 封装 DELETE 请求
export const remove = (url, params) => {
  return new Promise((resolve, reject) => {
    api.Delete(url, { params })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};


