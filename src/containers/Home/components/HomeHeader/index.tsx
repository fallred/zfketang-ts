import * as React from 'react';
import './index.less';
// import {connect} from 'react-redux';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
// import store from '../../../../store';
// import {Store,Home} from '../../../../types';
// import actions from "../../../../store/actions/home";
const logo = require('../../../../../images/logo.png');
interface IProps {
    category: string,
    setCategory: any,
    refreshLessons: any,
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
    changeCategory=(event)=>{
        const category = event.target.dataset.category;
        this.setState({
            showList: false
        },()=>{
            // 设置仓库中的新分类
            this.props.setCategory(category);
            this.props.refreshLessons();
        });
        
    }
    render () {
        const {showList} = this.state;
        const {category} = this.props;
        return (
            <div className="home-header">
                <div className="header-menu">
                    <img  src={logo} alt="logo"/>
                    <div onClick={this.handleClick}>
                        {
                            showList ?
                            (<i className="iconfont icon-guanbi"></i>)
                            :
                            (<i className="iconfont icon-uilist"></i>)
                            
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
                                <ul className="menu-list"
                                    onClick={this.changeCategory}
                                >
                                    <li data-category="react" className={category == 'react'?'active': ''}>React分类</li>
                                    <li data-category="vue" className={category == 'vue'?'active': ''}>vue分类</li>
                                </ul>
                            </CSSTransition>
                        )
                    }
                </TransitionGroup>
            </div>
        );
    }
}
// export default connect(
//     (state:Store):Home=> state.home,
//     actions
// )(HomeHeader)