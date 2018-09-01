import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { LoginUser } from "../core-module/modals";
import { CoreModule } from "../core-module/core-module";
import {FormsModule} from '@angular/forms';
import { CommonModule } from "@angular/common";
import { CarouselModule, ButtonModule } from "primeng/primeng";

@NgModule({
    imports: [
        HomeRoutingModule,
        CoreModule,
        CommonModule,
        CarouselModule,
        ButtonModule
    ],
    declarations: [HomeComponent]
})

export class HomeModule {
    constructor()
    {

    }
}