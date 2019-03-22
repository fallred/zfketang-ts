export interface Store {
    counter1:Counter1,
    counter2:Counter2,
    home: Home
}
export interface Home {
    currentCategory:string
}
export interface Counter1 {
    number:number
}
export interface Counter2 {
    number:number
}