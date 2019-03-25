import * as React from 'react';
interface IProps{
    sliders: string[],
    // selectedIndex: number
}
interface IState{
    selectedIndex: number
}
export default class SwiperDots extends React.Component<IProps,IState> {
    state = {selectedIndex: 0}
    changeIndex(selectedIndex:number){
        this.setState({
            selectedIndex
        });
    }
    render() {
        const {sliders} = this.props;
        let {selectedIndex}=this.state;
        return (
            <div className="dots">
                {
                    sliders.map((item:string,index:number)=>(
                        <span key={index} className={"dot "+(selectedIndex == index ? 'active': '')}>
                        </span>
                    ))
                }
            </div>
        );
    }
}