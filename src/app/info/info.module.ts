import { NgModule } from "@angular/core";
import { InfoComponent } from "./info.component";
import { InfoRoutingModule } from "./info-routing.module";
import { CoreModule } from "../core-module/core-module";


@NgModule({
    imports: [
        InfoRoutingModule,
        CoreModule
    ],
    declarations: [InfoComponent]
})

export class InfoModule {

}