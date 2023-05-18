import { check, sleep } from "k6";
import http from "k6/http";

export class LoadFunctions{

    static GetMethod(url){
        return()=>{
            const params={
                headers: {
                    'Content-Type' : 'application/json',
                },
            };
            const res=http.get(url,params);
            check(res,{'Status is 404 ' : (r)=>r.status===404});
            sleep(1);
        }
    }
    
}