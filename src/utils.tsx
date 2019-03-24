export function loadMore(element:HTMLDivElement,callback:any):void{
    element.addEventListener('scroll', ()=>{
        let clientHeight = element.clientHeight;
        let scrollHeight = element.scrollHeight;
        let scrollTop = element.scrollTop;
        if (clientHeight + scrollTop >= scrollHeight) {
            callback();
        }
    });
}