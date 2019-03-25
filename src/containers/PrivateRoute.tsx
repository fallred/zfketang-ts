import * as React from 'react';
import {connect} from 'react-redux';
import {Store,Session} from '../types';
import {Redirect,Route} from 'react-router-dom';
interface IProps {
    user:any,
    path:string,
    component: any,
    // pathname: string
}
// 受保护的路由是一个高阶组件，并不提供界面，只是实现权限判断的
class PrivateRoute extends React.Component<IProps> {
    render () {
        let {user,path,component:Component}=this.props; 
        /**
         if (user) {
            // return <Component {...this.props}/>
            return (
                <Route path={path} component={Component} />
            );
        } else {
            return <Redirect to="login"/>
        }
         */
        // 路由渲染组件有三种方式：1.component 2.render 3.children
        return (
            <Route
                path={path}
                render={(props)=>user?<Component {...this.props} /> : <Redirect to="login"/> }
            />
        );
    }
}
export default connect(
    (state:Store):Session => state.session
)(PrivateRoute)