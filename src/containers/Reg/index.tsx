import * as React from 'react';
import NavHeader from '../../components/NavHeader';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Store,Session} from '../../types';
import actions from '../../store/actions/session';
import './index.less';
let loginSrc = require('../../../images/profile.png');
interface IProps {
    history: any,
    reg: any
}
class Reg extends React.Component<IProps> {
    reg=()=>{
        let username = (this.refs.username as any).value;
        let password = (this.refs.password as any).value;
        this.props.reg({
            username,
            password
        });
    }
    render () {
        return (
            <div className="reg">
                <NavHeader title="注册" history={this.props.history}/>
                <div className="reg-logo">
                    <img src={loginSrc} alt="个人头像"/>
                </div>
                <input ref="username" type="text" placeholder="手机号"/>
                <input ref="password" type="text" placeholder="密码"/>
                <Link to="/login">前往登录</Link>
                <button onClick={this.reg}>注&nbsp;&nbsp;册</button>
            </div>
        )
    }
}
export default connect(
    (state:Store):Session=>state.session,
    actions
)(Reg)