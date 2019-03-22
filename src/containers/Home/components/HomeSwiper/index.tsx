import * as React from 'react';
import * as ReactSwipe from 'react-swipe';
interface IProps{
    sliders: string[]
}
export default class HomeSwiper extends React.Component<IProps> {
    render() {
        let {sliders}=this.props;
        return (
           sliders.length ? (
            <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous:true }}
            >
                {
                    sliders.map((item:string,index:number)=>(
                        <div key={index}>
                            <img src={item} style={{width: '100%'}} />
                        </div>
                    ))
                }
            </ReactSwipe>
           ) : null
        );
    }
}