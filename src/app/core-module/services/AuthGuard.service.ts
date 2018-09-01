import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { StorageService } from "./Storage.service";

@Injectable()
export class AuthGuardService implements CanActivate {


    public UId: string = null;

    constructor(private storageService: StorageService) {

    }

    canActivate(r): boolean | Observable<boolean> | Promise<boolean> {
        //setLocalstorage
        this.UId = "m687787";
        this.storageService.setItem("LOGIN_USER", this.UId);
        this.UId = this.storageService.getItem("LOGIN_USER");
        if (this.UId == null || this.UId.trim() == "") {
            let redirectUrl = "";
            console.log(this.UId);
            //pass for any authentication 
            // window.location.href = redirectUrl;
            return false;
        }
        // console.log("|" + this.storageService.getItem("LOGIN_USER") + "|");
        return true;
    }

}