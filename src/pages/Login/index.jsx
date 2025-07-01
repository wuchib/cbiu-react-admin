import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApi, registerApi } from '@/network/sys';
import { message } from 'antd';

const LoginRegister = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [tab, setTab] = useState('login'); // 'login' or 'register'
  const [loginForm, setLoginForm] = useState({ name: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ name: '', password: '', password_confirm: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
  const handleRegisterChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    if (!loginForm.name || !loginForm.password) {
      setError('请输入账号和密码');
      return;
    }
    // TODO: 登录逻辑
    const res = await loginApi(loginForm)
    if (res.code === 200) {
      messageApi.success('登录成功！')
      navigate('/layout');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    if (!registerForm.name || !registerForm.password || !registerForm.password_confirm) {
      setError('请填写所有字段');
      return;
    }
    if (registerForm.password !== registerForm.password_confirm) {
      setError('两次输入的密码不一致');
      return;
    }
    // TODO: 注册逻辑
    const res = await registerApi(registerForm)
    if (res.code === 200) {
      message.success('注册成功！')
      setTab('login');
    }
  };

  return (
    <>
      {contextHolder}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-80">
          <div className="flex mb-6">
            <button
              className={`flex-1 py-2 text-lg font-bold border-b-2 transition-colors ${tab === 'login' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-400'}`}
              onClick={() => { setTab('login'); setError(''); }}
            >
              登录
            </button>
            <button
              className={`flex-1 py-2 text-lg font-bold border-b-2 transition-colors ${tab === 'register' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-400'}`}
              onClick={() => { setTab('register'); setError(''); }}
            >
              注册
            </button>
          </div>
          {error && <div className="mb-4 text-red-500 text-sm text-center">{error}</div>}
          {tab === 'login' ? (
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="text"
                  name="name"
                  placeholder="账号"
                  value={loginForm.name}
                  onChange={handleLoginChange}
                  autoComplete="name"
                />
              </div>
              <div className="mb-6">
                <input
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="password"
                  name="password"
                  placeholder="密码"
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  autoComplete="current-password"
                />
              </div>
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition-colors"
                type="submit"
              >
                登录
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="text"
                  name="name"
                  placeholder="账号"
                  value={registerForm.name}
                  onChange={handleRegisterChange}
                  autoComplete="name"
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="password"
                  name="password"
                  placeholder="密码"
                  value={registerForm.password}
                  onChange={handleRegisterChange}
                  autoComplete="new-password"
                />
              </div>
              <div className="mb-6">
                <input
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="password"
                  name="password_confirm"
                  placeholder="确认密码"
                  value={registerForm.password_confirm}
                  onChange={handleRegisterChange}
                  autoComplete="new-password"
                />
              </div>
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition-colors"
                type="submit"
              >
                注册
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginRegister;
