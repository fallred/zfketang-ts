import * as React from 'react';
import NavHeader from '../../components/NavHeader';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Store,Session} from '../../types';
import actions from '../../store/actions/session';
let loginSrc = require('../../../images/profile.png');
import './index.less';
interface IProps {
    history: any,
    login: any
}
class Login extends React.Component<IProps> {
    login=()=>{
        let username = (this.refs.username as any).value;
        let password = (this.refs.password as any).value;
        this.props.login({
            username,
            password
        });
    }
    render () {
        return (
            <div className="login">
                <NavHeader title="登录" history={this.props.history}/>
                <div className="login-logo">
                    <img src={loginSrc} alt="个人头像"/>
                </div>
                <input ref="username" type="text" placeholder="手机号"/>
                <input  ref="password" type="text" placeholder="密码"/>
                <Link to="/reg">前往注册</Link>
                <button onClick={this.login}>登&nbsp;&nbsp;录</button>
            </div>
        )
    }
}
export default connect(
    (state:Store):Session=>state.session,
    actions
)(Login);