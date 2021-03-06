import * as React from 'react';
import './index.less';
import Loading from '../../../../components/Loading';
// import { getLessons } from '../../../../api/home';
import {Link} from 'react-router-dom';

interface IProps {
    lessons: any,
    getLessons:any
}
export default class HomeLessons extends React.Component<IProps> {
    render(){
        let {hasMore,list,loading} = this.props.lessons;
        return (
            <div className="home-lessons">
                <div className="all-lessons">
                    <i className="iconfont icon-kecheng-copy"></i>
                    <span>全部课程</span>
                </div>
                {
                    list.map((item,index:number)=>(
                        <Link key={index} to={{pathname:`/detail/${item.id}`, state:item}}>
                            <div className="lesson">
                                <img src={item.poster}/>
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                            </div>
                        </Link>
                    ))
                }
                {
                    loading ? <Loading /> :
                    (!hasMore && <div
                        className="load-more">我是有底线的</div>)
                }
            </div>
        );
    }
}