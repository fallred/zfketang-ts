import {Home} from '../../types';
import {Action} from '../actions/home';
import * as types from '../action-types';
let initState:Home = {
    // 全部分类
    category: 'all',
    // 轮播图
    sliders: [],
    lessons:{
        hasMore:true,
        list: [],
        offset:0,
        limit: 5,
        loading:false
    }
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
        case types.SET_HOME_LESSONS:
            return {
                ...state,
                lessons:{
                    ...state.lessons,
                    hasMore:action.payload.hasMore,
                    list: [...state.lessons.list,...action.payload.list],
                    offset: state.lessons.offset + action.payload.list.length,
                    loading: false
                }
            };
        case types.SET_HOME_LESSONS_LOADING:
            return {
                ...state,
                lessons:{
                    ...state.lessons,
                    loading: action.payload
                }
            };
        default:
            return state;
    }
}