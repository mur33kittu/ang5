import { NgModule } from "@angular/core";
import { CoreModule } from "../core-module/core-module";
import { CommonModule } from "@angular/common";
import { CarouselModule, ButtonModule, ChartModule, ListboxModule } from "primeng/primeng";
import { DashBoardComponent } from "./dash-board.component";
import { DashBoardRoutingModule } from "./dash-board-routing.module";
import { FormsModule } from "@angular/forms";


@NgModule({
    imports: [
        DashBoardRoutingModule,
        CoreModule,
        CommonModule,
        CarouselModule,
        ButtonModule,
        ChartModule,
        ListboxModule,
        FormsModule
    ],
    declarations: [DashBoardComponent]
})

export class DashBoardModule {

}