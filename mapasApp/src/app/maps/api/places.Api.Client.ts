import { HttpClient, HttpHandler, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";




@Injectable({
    providedIn:'root'
})
export class PlacesApiClient extends HttpClient{

    public baseUrl:string= 'https://api.mapbox.com/geocoding/v5/mapbox.places';

    constructor(handler:HttpHandler){
        super(handler)
    }

    // sobreescrivimos el get para personalizarlo
    public override get<T>(url:string, options:{
        params?:HttpParams |{
            [params:string]:string|number|boolean|ReadonlyArray<string|number|boolean>;
        }
    }){
        url= this.baseUrl+ url;

        return super.get<T>(url, {
            params:{
                limit:5,
                lenguage:'es',
                access_token: environment.apiKey,
                ...options.params
            }
        });
    }
}