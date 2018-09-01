import { Injectable, ViewChild, OnInit } from "@angular/core";
import { ToasterService, Toast, BodyOutputType, ToasterConfig } from 'angular5-toaster';

@Injectable()
export class AlertService implements OnInit {
    constructor(private toastr: ToasterService) {

    }

    ngOnInit() {

    }

    private getToast(type, title, body): Toast {        
        return {
            type: type,
            title: title,
            body : body,
            showCloseButton: false,
            bodyOutputType: BodyOutputType.TrustedHtml,
            positionClass : "toast-top-left"
        };
    }
    private showToast(toast: Toast): void {
        this.toastr.pop(toast);
        // this.toastr.showToast(toast);
    }
    success(message: string, title?: string) {
        this.showToast(this.getToast('success', title, message));
    }
    error(message: string, title?: string) {
        this.showToast(this.getToast('error', title, message));
    }
    info(message: string, title?: string) {
        this.showToast(this.getToast('info', title, message));
    }
    warning(message: string, title?: string) {
        this.showToast(this.getToast('warning', title, message));
    }
    handleTimeOut(message: string, title?: string) {
        // this.toastr.success(title, message);
    }
    clearAll() {
        // this.toastr.success(title, message);
    }
}