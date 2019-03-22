import * as types from '../action-types';
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
    }
}