import { Injectable } from "@angular/core";
import { LoginUser } from "../modals/index";


@Injectable()
export class AppContext {
    public loginUser: LoginUser;
    public adminControl: boolean = false;
    constructor() {

    }

    public setAdminControl() {
        this.adminControl = (!this.adminControl);
    }

    public getAdminControl() {
        return this.adminControl;
    }

    public setLoginUser(loginUser) {
        this.loginUser = loginUser;
        //set localstorage here
    }

    public getLoginUser(): LoginUser {
        return this.loginUser;
    }
}