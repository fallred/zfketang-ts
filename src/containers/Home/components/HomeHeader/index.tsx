import * as React from 'react';
import './index.less';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
const logo = require('../../../../../images/logo.png');
interface IProps {

}
interface IState {
    showList:boolean
}
export default class HomeHeader extends React.Component<IProps,IState> {
    state = {
        showList: false
    }
    handleClick =()=>{
        this.setState({
            showList: !this.state.showList
        });
    }
    render () {
        const {showList} = this.state;
        return (
            <div className="home-header">
                <div className="header-menu">
                    <img  src={logo} alt="logo"/>
                    <div onClick={this.handleClick}>
                        {
                            showList ?
                            <i className="iconfont icon-uilist"></i>
                            :
                            <i className="iconfont icon-guanbi"></i>
                        }
                    </div>
                </div>
                <TransitionGroup>
                    {
                        showList && (
                            <CSSTransition
                                classNames="fade"
                                timeout={500}
                            >
                                <ul className="menu-list">
                                    <li data-category="react">React分类</li>
                                    <li data-category="vue">vue分类</li>
                                </ul>
                            </CSSTransition>
                        )
                    }
                </TransitionGroup>
            </div>
        );
    }
}