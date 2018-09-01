import {
    Component, OnInit, Input, ElementRef, ChangeDetectionStrategy, NgZone, EventEmitter,
    QueryList, TemplateRef
} from "@angular/core";
import { TableModel, Car } from "../modals";
import { Table, TableService } from "primeng/table";
import { DomHandler, FilterMetadata, PrimeTemplate, SortMeta } from "primeng/primeng";
import { ObjectUtils } from "primeng/components/utils/objectutils";

@Component({
    selector: 'p-table-comp',
    templateUrl: './p-table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PTableComponent {    
    @Input() loadTable: TableModel;
    selectedRow;
    constructor() {

    }
    onRowSelect(event) {
        console.log("here");
        console.log(event);
    }
}