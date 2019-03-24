import * as React from 'react';
import HomeHeader from './components/HomeHeader';
import {connect} from 'react-redux';
import {Store,Home} from '../../types';
import actions from '../../store/actions/home';
import HomeSwiper from '../../containers/Home/components/HomeSwiper';
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
class HomeC extends React.Component<IProps> {
    mainContent: any
    componentDidMount(){
        this.props.getSliders();
        this.props.getLessons();
        loadMore(this.mainContent,this.props.getLessons);
        downRefresh(this.mainContent,this.props.refreshLessons);
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