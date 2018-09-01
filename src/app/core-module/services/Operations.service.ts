import { LoginUser } from "../modals";
import { OnInit, Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ApiService } from "./ApiService.service";

@Injectable()
export class OperationService implements OnInit {

    private loginUser: LoginUser;
    constructor(private apiService: ApiService) {

    }

    ngOnInit(): void {

    }


    public loadLoginUser(UId: string): Observable<LoginUser> {
        return this.apiService.getLoginUserDetails(UId);
    }
    // public getLargeCarJson() : Observable<any>
    // {
    //     return this.apiService.getLargeCarJson();
    // }

}