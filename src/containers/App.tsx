import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Mine from './Mine';
import Profile from './Profile';
import '../common/index.less';
import Tab from '../components/Tab';
import Detail from './Detail';
import Login from './Login';
import Reg from './Reg';
import PrivateRoute from './PrivateRoute';
export default class App extends React.Component {
    render () {
        // dom diff 算法 导致，PrivateRoute组件，属性没有变化，不会重新渲染
        // 不管访问那个路由，都会渲染PrivateRoute组件，登录成功后再次渲染profile路由时，则不会重新渲染
        // 解决方法1 给privateRoute新增一个属性pathname <PrivateRoute pathname={window.location.pathname} path="/profile" component={Profile}/>
        // 解决方法2 Switch嵌套在路由外面

        // Route路由组件，属性没有变化，为什么可以加载，是因为Route路由组件内部，有监听location变化，重新渲染组件
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/detail/:id" component={Detail}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/reg" component={Reg}/>
                    <PrivateRoute path="/profile" component={Profile}/>
                    <PrivateRoute path="/mine" component={Mine}/>
                </Switch>
                <Tab />
            </React.Fragment>
        );
    }
}