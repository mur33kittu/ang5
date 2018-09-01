import { NgModule } from "@angular/core";
import { FaqRoutingModule } from "./faq-routing.module";
import { FaqComponent } from "./faq.component";
import { CoreModule } from "../core-module/core-module";


@NgModule({
    imports: [
        FaqRoutingModule,
        CoreModule
    ],
    declarations: [FaqComponent]
})

export class FaqModule {

}