import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/components/common/menuitem";
import { AppConfig, AppContext } from "../core-module";
import { LoginUser } from "../core-module/modals";
import { ToasterConfig } from 'angular5-toaster';
import { NgProgress } from 'ngx-progressbar';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: "layout-comp",
    templateUrl: "./layout.component.html",
    styleUrls: ["./layout.component.css"],
    animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(100%, 0, 0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ]),
    ]
})

export class LayoutComponent implements OnInit {
    private page: string = "home";
    loginUser: LoginUser;
    baseUrl: string = 'https://api.cdnjs.com/libraries';
    queryUrl: string = '?search=';

    menuState: string = 'out';
    constructor(private appContext: AppContext, public ngProgress: NgProgress) {

    }
    public toasterconfig: ToasterConfig =
        new ToasterConfig({
            showMethod: 'fadeIn',
            hideMethod: "fadeOut",
            limit: 5,
            tapToDismiss: true,
            showCloseButton: true,
            newestOnTop: true,
            timeout: 10000,
            positionClass: 'toast-top-full-width',
            progressBar: true,
            showEasing: "swing"
        });

    ngOnInit() {
        this.loginUser = this.getLoginUser();
    }
    setPage(page) {
        this.page = page;
    }
    getLoginUser() {
        if (this.loginUser == null) {
            this.loginUser = this.appContext.getLoginUser();
        }
        return this.loginUser;
    }

    toggleMenu() {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }
}