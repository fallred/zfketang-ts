import * as React from 'react';
import * as ReactSwipe from 'react-swipe';
interface IProps{
    sliders: string[],
    changeIndex: any
}
export default class SwiperItems extends React.Component<IProps> {
    render() {
        let {sliders, changeIndex}=this.props;
        let swipeOptions = {
            continuous:true,
            auto: 1000,
            callback: (index: number)=>{
                console.log('index:',index);
                changeIndex(index);
            }
        };
        return (
            <ReactSwipe
                className="carousel"
                swipeOptions={swipeOptions}
            >
                {
                    sliders.map((item:string,index:number)=>(
                        <div key={index}>
                            <img src={item} style={{width: '100%'}} />
                        </div>
                    ))
                }
            </ReactSwipe>
        );
    }
}