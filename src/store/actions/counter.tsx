import * as types from '../action-types';
import {push} from 'connected-react-router';
export interface increment {
    type: typeof types.INCREMENT
}
export interface decrement {
    type: typeof types.DECREMENT
}
// type用来给类型起别名的、
export type Action = increment|decrement;
export default {
    increment(): increment{
        return {
            type: types.INCREMENT
        };
    },
    incrementDelay(): any{
        // return {
        //     type: types.INCREMENT
        // };
        return function(dispatch:any,getState:any){
            setTimeout(function(){
                dispatch({
                    type: types.INCREMENT
                });
            }, 1000)
        }
    },
    decrement():decrement{
        return {
            type: types.DECREMENT
        }
    },
    goto(){
        // 如何通过派发action的方式跳转路径
        return push('/2');
    }
}