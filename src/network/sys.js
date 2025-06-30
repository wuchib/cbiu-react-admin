import { post } from './index'

export function loginApi(data){
    return post('/auth/login' , data)
}
