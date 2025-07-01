import { post } from './index'

export function loginApi(data){
    return post('/auth/login' , data)
}

export function registerApi(data){
    return post('/auth/register' , data)
}

