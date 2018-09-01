import { Injectable } from "@angular/core";
import { LoginUser } from "../modals/index";


@Injectable()
export class StorageService {

    constructor() {

    }
    public getLoginuser(): LoginUser {
        return null;
    }

    public setItem(key, value) {        
        window.localStorage.setItem(key, value);
    }
    public getItem(key) {        
        return window.localStorage.getItem(key);
    }
}