import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';

// 创建一个 Alova 实例
const api = createAlova({
  baseURL: '/api', // 替换为你的API地址
  timeout: 5000, // 可选，设置请求超时时间
  requestAdapter: adapterFetch(),
  responded: response => response.json()
});

// 封装 GET 请求
export const get = async (url, params) => {
  try {
    const response = await api.Get(url, { params });
    return response.data;
  } catch (error) {
    throw new Error(`GET request failed: ${error}`);
  }
};

// 封装 POST 请求
export const post = async (url, data) => {
  try {
    const response = await api.Post(url, data);
    return response.data;
  } catch (error) {
    throw new Error(`POST request failed: ${error}`);
  }
};

// 封装 PUT 请求
export const put = async (url, data) => {
  try {
    const response = await api.Put(url, data);
    return response.data;
  } catch (error) {
    throw new Error(`PUT request failed: ${error}`);
  }
};

// 封装 DELETE 请求
export const remove = async (url, params) => {
  try {
    const response = await api.Delete(url, { params });
    return response.data;
  } catch (error) {
    throw new Error(`DELETE request failed: ${error}`);
  }
};


