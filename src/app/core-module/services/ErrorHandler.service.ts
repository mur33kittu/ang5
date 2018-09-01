import { Injectable, ErrorHandler, Injector } from "@angular/core";
import { AlertService } from "./Alert.service";



@Injectable()
export class ErrorHandlerService implements ErrorHandler {
    constructor(private _injector: Injector, private alertService: AlertService) {

    }

    handleError(error: any): void {
        console.log(error);
        this.alertService = this._injector.get(AlertService);

        const message = error.message ? error.message.toString() : error.toString();
        console.log(message);
        this.alertService.error(message, "Unknown Error Occured");
        //logger print stract trace

    }

}