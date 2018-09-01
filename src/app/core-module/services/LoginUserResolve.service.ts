import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AppContext, AppConfig, OperationService, StorageService } from './index';
import { LoginUser } from '../modals/index';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class LoginUserResolve implements Resolve<LoginUser>
{

    public UId: string = null;

    constructor(private appContext: AppContext, private appConfig: AppConfig, private operations: OperationService, private storageService: StorageService) {

    }

    resolve(route: ActivatedRouteSnapshot): any {
        // console.log("here");
        this.UId = this.storageService.getItem("LOGIN_USER");

        if (this.UId == null || this.UId.trim() == null) {
            let redirectUrl = "";
            window.location.href = redirectUrl;
            return Observable.throw("user not logged in");
        }
        else {
            //this is temporary. please ignore this later
            let loginUser: LoginUser = {
                firstName: "Murthy",
                lastName: "Guruswamy",
                email: "mur33kittu@gmail.com",
                UId: "m687787",
                admin: true,
                isAdmin: true,
                jwtToken: null,
                roles: ["admin", "contractor"]
            };
            this.appContext.setLoginUser(loginUser);
        }

        let loginUser: LoginUser = <LoginUser>this.appContext.getLoginUser();
        // console.log(loginUser);
        if (loginUser == null) {
            if (this.UId != null) {
                let observable: Observable<LoginUser> = this.operations.loadLoginUser(this.UId);
                return observable.map(appLoginUser => {
                    this.appContext.setLoginUser(appLoginUser);
                    //set to local storage
                    loginUser = appLoginUser;
                }).catch(error => {
                    return Observable.throw(error);
                });
            }
            else {
                Observable.throw("User Not logged In");
            }
        }
        else {
            return loginUser;
        }

    }
}