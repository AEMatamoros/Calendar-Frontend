import env from "react-dotenv";

const fetchSinToken = (endpoint,data,method = 'GET') =>{
    const url = `${env.API_URL}/${endpoint}`;

    if ( method=== 'GET' ){
        return fetch(url)
    }else{
        return fetch(url,{
            method,
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
    }
}

const fetchConToken = (endpoint,data,method = 'GET') =>{
    const url = `${env.API_URL}/${endpoint}`;
    let token = ""

    if(localStorage.getItem('token')){
         token = localStorage.getItem('token');
    }
    

    if ( method=== 'GET' ){
        return fetch(url,{
            method,
            headers:{
                'x-token':token
        }})
    }else{
        return fetch(url,{
            method,
            headers:{
                'Content-Type': 'application/json',
                'x-token':token
            },
            body:JSON.stringify(data)
        })
    }
}

export {
    fetchSinToken,
    fetchConToken
}