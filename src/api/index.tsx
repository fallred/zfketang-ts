// /api/sliders
// http://localhost:8080/api/sliders
const BASE_API = 'http://localhost:3000';
export function get(url:string){
    return fetch(BASE_API + url, {
        method: 'GET',
        credentials: 'include'
    })
    .then(res=>res.json())
}
export function post(url:string, payload){
    return fetch(BASE_API + url, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
}