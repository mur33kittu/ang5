import { ModuleWithProviders, NgModule, ErrorHandler } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHandler, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppConfig, HttpInterceptors, ApiService, AuthGuardService, AlertService, AppContext, ErrorHandlerService, OperationService, StorageService } from "./services/index";
import { Environment } from "./modals";
import { LoginUserResolve } from "./services/LoginUserResolve.service";
import { CardModule } from "primeng/card";
// import { ToastrModule, ToastrService } from "ngx-toastr";
import { ToasterModule, ToasterService } from 'angular5-toaster';
import { TableModule } from "primeng/table";
import { PTableComponent, CardComponent } from "./components";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MultiSelectModule, DialogModule } from "primeng/primeng";

@NgModule({
    imports: [
        HttpClientModule,
        CardModule,
        TableModule,
        FormsModule,
        CommonModule,
        MultiSelectModule,
        DialogModule
    ],
    declarations: [PTableComponent, CardComponent],
    exports: [PTableComponent, CardComponent]
})

export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                ApiService, AuthGuardService, AlertService, ApiService, AppConfig, AppContext,
                LoginUserResolve, OperationService, StorageService,
                { provide: ErrorHandler, useClass: ErrorHandlerService },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpInterceptors,
                    multi: true
                }
            ]
        }
    }
}