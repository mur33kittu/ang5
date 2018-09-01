import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpParams, HttpHeaders, HttpErrorResponse, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../../../environments/environment";
import { AppConfig } from "./index";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

export class HttpInterceptors implements HttpInterceptor {
    private appConfig: AppConfig;
    constructor() {
        // console.log("here");
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse |
        HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

        const clonedRequest: HttpRequest<any> = req.clone({
            url: environment.api + req.url + "&APPID=" + environment.apiKey
           
        });        
        // console.log(clonedRequest);

        // req = this.request(environment.api + "{path}&APPID=" + environment.apiKey);
        req = this.request(clonedRequest);
        // console.log(req.url);
        // console.log(environment.api + "{path}&APPID=" + environment.apiKey);
        return next.handle(req).do(event => {
            if (event instanceof HttpErrorResponse) {
                return this.handleErrors(event);
            }
            if (event instanceof HttpResponse) {

                return event.body;
            }
        }, (error: HttpErrorResponse) => {
            this.handleErrors(error);
        });
    }

    handleErrors(event: HttpErrorResponse) {
        let errorMsg: string;
        let err: string = "Unknown Error";

        if (event instanceof HttpErrorResponse) {
            console.log("JSON.stringify(event)" + event.error);

            let body: any = null;
            try {
                body = event.error.json();
                err = event.error || JSON.stringify(body);
            }
            catch (e) {
                body = event.error.text();
                err = body;
            }
            errorMsg = `${event.status} - ${event.statusText || ''} ${err}`;

        }
        else {
            errorMsg = errorMsg ? event : err;
        }
        return Observable.throw(err);

    }

    request(url: string | HttpRequest<any>) {
        let request: HttpRequest<any> = null;
        if (url instanceof HttpRequest) {
            if (url.url.startsWith("http") == false) {
                url = this.appConfig.getRestApiUrl() + url.url;
            }
            request = <HttpRequest<any>>url;
            request.headers.append('Cache-Control', 'no-cache');
            request.headers.append('Pragma', 'no-cache');
            request = this.setHeaders(request);
        }
        else {
            if (url.startsWith("http") == false) {
                url = this.appConfig.getRestApiUrl() + url;
            }
        }
        return request;
    }

    setHeaders(request: HttpRequest<any>): HttpRequest<any> {
        let headers: HttpHeaders = new HttpHeaders();
        let token = ""; //get authtoken from localstorage
        if (token != null) {
            request.headers.append("Accept", "application/json");
            request.headers.append("AUTO_TOKEN", token);
        }
        return request;
    }
}