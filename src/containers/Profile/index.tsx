import * as React from 'react';
import {Link} from 'react-router-dom';
import './index.less'
import { connect } from 'react-redux';
import {Store,Session} from '../../types';
let profileSrc = require('../../../images/profile.png');
interface IProps {
    user:any
}
class Profile extends React.Component<IProps> {
    render () {
        return (
            <div className="profile">
                <div className="profile-bg">
                    <img src={profileSrc} alt=""/>
                    {
                        this.props.user ?<a>{this.props.user.username}</a> : <Link to="/login">登录</Link>
                    }
                </div>
            </div>
        );
    }
}
export default connect(
    (state:Store):Session=>state.session,
)(Profile);