import * as types from '../action-types';
import {getSliders,getLessons} from '../../api/home';
interface setCategoryAction {
    type: string,
    payload: any
}
export type Action = setCategoryAction;

export default {
   setCategory(category):setCategoryAction {
        return {
            type: types.SET_CATEGORY,
            payload: category
        };
    },
    getSliders(){
        return function(dispatch,getState){
            return getSliders().then(result=>{
                let {code,data} = result;
                if(code == 0){
                    dispatch({
                        type: types.SET_HOME_SLIDERS,
                        payload: data
                    });
                }
            })
        }
    },
    getLessons(){
        return function(dispatch,getState){
            const {category,lessons:{offset,limit,loading,hasMore}} = getState().home;
            // 如果正在加载中则不要再次请求数据
            if (!loading && hasMore) {
                dispatch({
                    type: types.SET_HOME_LESSONS_LOADING,
                    payload: true
                });
                getLessons(category,offset,limit).then(result=>{
                    let {code,data} = result;
                    if(code == 0){
                        dispatch({
                            type: types.SET_HOME_LESSONS,
                            payload: data
                        });
                    }
                })
            }
        }
    }
}