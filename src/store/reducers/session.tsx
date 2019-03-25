import {Store,Session} from '../../types';
import {Action} from '../actions/session';
import * as types from '../action-types';
let initState:Session = {
    user: null,
    success:null,
    error:null
};
export default function(state:Session = initState,action:Action){
    switch(action.type){
        case types.SET_SESSION:
            return action.payload; 
        default:
            return state;
    }
}