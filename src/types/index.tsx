export interface Store {
    counter1:Counter1,
    counter2:Counter2,
    home: Home
}
// let lesson = {
//     id: 20,
//     title: '20.Vue从入门到项目实战',
//     video:"http://7xil5b.com1.z0.glb.clouddn.com/zhufengpeixun.mp4",
//     poster:"http://www.zhufengpeixun.cn/vue/img/vue.png",
//     url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/vue.png',
//     price: '¥1000.00元',
//     category:'vue'
// };
interface Lesson {
    id: number,
    title: string,
    video:string,
    poster:string,
    url: string,
    price: string,
    category: string
};
export interface Home {
    //当前分页
    category?: string,
    sliders?: string[],
    lessons:{
        //是否还有更多数据
        hasMore: boolean,
        // 列表
        list: Lesson[],
        // 偏移量
        offset: number,
        // 每页条数
        limit: number,
        // 如果当前正在加载数据，则会有一个loading加载动画
        loading: false
    }
}
export interface Counter1 {
    number:number
}
export interface Counter2 {
    number:number
}