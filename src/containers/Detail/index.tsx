import * as React from 'react';
import NavHeader from '../../components/NavHeader';
import { Redirect } from 'react-router-dom';
import './index.less';
interface IProps {
    location: any,
    history: any,
    match: any
}
export default class Detail extends React.Component<IProps> {
    render(){
        const lesson = this.props.location.state;
        const {history} = this.props;
        // 如果状态里有，则直接渲染,如果没有则先获取id，然后重新调用接口获取数据进行渲染
        let id = this.props.match.param.id;
        return lesson ? (
            <React.Fragment>
                <div className="lesson-detail">
                    <NavHeader title="课程详情" history={history}/>
                    <img src={lesson.poster}/>
                    <p>{lesson.title}</p>
                    <p>{lesson.price}</p>
                </div>
            </React.Fragment>
        ) : <Redirect to="/"/>
    }
}