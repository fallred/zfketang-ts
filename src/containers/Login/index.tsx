import * as React from 'react';
import NavHeader from '../../components/NavHeader';
import {Link} from 'react-router-dom';
let loginSrc = require('../../../images/profile.png');
import './index.less';
interface IProps {
    history: any
}
export default class Login extends React.Component<IProps> {
    render () {
        return (
            <div className="login">
                <NavHeader title="登录" history={this.props.history}/>
                <div className="login-logo">
                    <img src={loginSrc} alt="个人头像"/>
                </div>
                <input type="text" placeholder="手机号"/>
                <input type="text" placeholder="密码"/>
                <Link to="/reg">前往注册</Link>
                <button>登&nbsp;&nbsp;录</button>
            </div>
        )
    }
}