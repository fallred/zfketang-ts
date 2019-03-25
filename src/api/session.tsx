import {get,post} from './index';
export function reg(payload){
    return post('/api/reg',payload);
}