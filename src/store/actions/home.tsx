import * as types from '../action-types';
import {getSliders} from '../../api/home';
interface setCategoryAction {
    type: string,
    payload: string
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
    }
}