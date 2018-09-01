import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginUser } from "../modals/index";
import { Observable } from "rxjs/Observable";
import { environment } from "../../../environments/environment";
import { Upload } from "../modals/fileUpload";

@Injectable()
export class ApiService {
    private loginUserUrl = "/security/authorization";
    constructor(private http: HttpClient) {

    }
    public getLoginUserDetails(uId: string): Observable<LoginUser> {
        return this.http.get<LoginUser>(this.loginUserUrl);
    }

    // public getLargeCarJson() : Observable<any>
    // {
    //     // return this.http.get("https://github.com/primefaces/primeui/blob/master/showcase/resources/data/cars-large.json");
    // }

}