import * as React from 'react';
import './index.less';
interface IProps {
    title:string,
    history: any
};
export default class NavHeader extends React.Component<IProps> {
    render(){
        return (
            <div className="nav-header">
                <i
                    className="iconfont icon-fanhui"
                    onClick={()=>{
                        this.props.history.goBack();
                    }}
                >
                </i>
                {this.props.title}
            </div>
        );
    }
}