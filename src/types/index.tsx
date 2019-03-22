export interface Store {
    counter1:Counter1,
    counter2:Counter2,
    home: Home
}
export interface Home {
    //当前分页
    category?: string,
    sliders?: string[]
}
export interface Counter1 {
    number:number
}
export interface Counter2 {
    number:number
}