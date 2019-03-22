import * as React from 'react';
import HomeHeader from './components/HomeHeader';
import {connect} from 'react-redux';
import {Store,Home} from '../../types';
import actions from '../../store/actions/home';
import HomeSwiper from '../../containers/Home/components/HomeSwiper';
import HomeLessons from '../../containers/Home/components/HomeLessons';
import './index.less';
import { getSliders, getLessons } from '../../api/home';
interface IProps {
    category:string,
    sliders:string[],
    setCategory:any,
    getSliders:any,
    getLessons:any,
    lessons: any
};
class HomeC extends React.Component<IProps> {
    componentWillMount(){
        this.props.getSliders();
        this.props.getLessons();
    }
    render () {
        let {category, setCategory, sliders, lessons,getLessons} = this.props;
        return (
            <React.Fragment>
                <HomeHeader
                    category={category}
                    setCategory={setCategory}
                />
                <div className="main-content">
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