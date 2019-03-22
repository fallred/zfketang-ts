import {Home} from '../../types';
import {Action} from '../actions/home';
import * as types from '../action-types';
let initState:Home = {
    // 全部分类
    category: 'all',
    // 轮播图
    sliders: []
};
export default function(state:Home = initState,action:Action){
    switch(action.type){
        case types.SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            };
        case types.SET_HOME_SLIDERS:
            return {
                ...state,
                sliders:action.payload
            };
        default:
            return state;
    }
}