import { NgModule } from "@angular/core";
import { AboutRoutingModule } from "./about.-routing.module";
import { AboutComponent } from "./about.component";
import { CardModule } from "primeng/card";
import { CoreModule } from "../core-module/core-module";


@NgModule({
    imports: [
        AboutRoutingModule,
        CardModule,
        CoreModule
    ],
    declarations: [AboutComponent]
})

export class AboutModule {

}