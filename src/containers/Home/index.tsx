import * as React from 'react';
import HomeHeader from './components/HomeHeader';
import {connect} from 'react-redux';
import {Store,Home} from '../../types';
import actions from '../../store/actions/home';
import HomeSwiper from '../../containers/Home/components/HomeSwiper';
import SwiperItems from '../Home/components/HomeSwiper/SwiperItems';
import SwiperDots from '../Home/components/HomeSwiper/SwiperDots';

import HomeLessons from '../../containers/Home/components/HomeLessons';
import { loadMore,downRefresh } from '../../utils';
import './index.less';
import { getSliders, getLessons } from '../../api/home';
interface IProps {
    category:string,
    sliders:string[],
    setCategory:any,
    getSliders:any,
    getLessons:any,
    lessons: any,
    refreshLessons: any
};
interface IState {
    selectedIndex:number
}
class HomeC extends React.Component<IProps,IState> {
    state={selectedIndex:0}
    mainContent: any
    componentDidMount(){
        if (this.props.sliders.length > 0) {
            this.mainContent.scrollTop = sessionStorage.getItem('homeScrollTop');
        } else {
            this.props.getSliders();
            this.props.getLessons();
        }
        loadMore(this.mainContent,this.props.getLessons);
        downRefresh(this.mainContent,this.props.refreshLessons);
    }
    componentWillUnmount(){
        sessionStorage.setItem('homeScrollTop', this.mainContent.scrollTop);
    }
    changeSelectedIndex=(index:number)=>{
        this.setState({
            selectedIndex: index
        });
    }
    render () {
        let {category, setCategory, sliders, lessons,getLessons, refreshLessons} = this.props;
        return (
            <React.Fragment>
                <HomeHeader
                    category={category}
                    setCategory={setCategory}
                    refreshLessons={refreshLessons}
                />
                <div className="main-content" ref={element=>this.mainContent=element}>
                    {/* <div className="home-swiper">
                        <SwiperItems sliders={sliders} changeSelectedIndex={this.changeSelectedIndex}/>
                        <SwiperDots sliders={sliders} selectedIndex={this.state.selectedIndex}/>
                    </div>  */}
                    <HomeSwiper
                        sliders={sliders}
                   />
                   <HomeLessons
                        lessons={lessons}
                        getLessons={getLessons}
                   />
                </div>
            </React.Fragment>
        );
    }
}
export default connect(
    (state:Store):Home => state.home,
    actions
)(HomeC);