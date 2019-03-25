import {combineReducers} from 'redux';
import counter1 from './counter1';
import counter2 from './counter2';
import session from './session';
import home from './home';
import {connectRouter} from 'connected-react-router';
// 1.合并reducers 为了将当前的路径信息写入仓库
import history from '../history';
let reducers = combineReducers({
    counter1,
    counter2,
    router: connectRouter(history),
    home,
    session
})
export default reducers;