// /api/sliders
// http://localhost:8080/api/sliders
const BASE_API = 'http://localhost:3000';
export function get(url:string){
    return fetch(BASE_API + url)
    .then(res=>res.json())
}