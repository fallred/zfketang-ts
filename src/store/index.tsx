import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {routerMiddleware} from 'connected-react-router';
// 使用路由中间件，可以拦截到路径跳转特殊的action,然后调用history实现路径跳转，并且把最新的路径信息写入仓库
import history from '../store/history';
let store = createStore(reducers,applyMiddleware(routerMiddleware(history),thunk,logger));
export default store;