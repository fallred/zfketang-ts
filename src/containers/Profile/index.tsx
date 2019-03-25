import * as React from 'react';
import {Link} from 'react-router-dom';
import './index.less'
let profileSrc = require('../../../images/profile.png');
export default class Profile extends React.Component {
    render () {
        return (
            <div className="profile">
                <div className="profile-bg">
                    <img src={profileSrc} alt=""/>
                    <Link to="/login">登录</Link>                        
                </div>
            </div>
        );
    }
}