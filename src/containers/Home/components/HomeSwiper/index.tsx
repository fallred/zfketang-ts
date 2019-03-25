import * as React from 'react';
import SwiperItems from './SwiperItems';
import SwiperDots from './SwiperDots';
import './index.less';
interface IProps{
    sliders: string[]
}
interface IState {
    selectedIndex:number
}
export default class HomeSwiper extends React.Component<IProps,IState> {
    state={selectedIndex:0}
    changeIndex=(selectedIndex:number)=>{
        // this.setState({
        //     selectedIndex: index
        // });
        // console.log('index:',index);
        // this.refs.swiperDots.changeIndex(selectedIndex);
        (this.refs.swiperDots as any).changeIndex(selectedIndex);
    }
    render() {
        let {sliders}=this.props;
        return (
          <div className="home-swiper">
                <SwiperItems
                    sliders={sliders}
                    changeIndex={(index)=>{
                        this.changeIndex(index);
                    }}
                />
                <SwiperDots ref="swiperDots" sliders={sliders} />
          </div> 
        );
    }
}