import { environment } from "../../../environments/environment.prod";
import { Environment } from "../modals/constants";
import { Injectable } from "@angular/core";

@Injectable()
export class AppConfig {
    private restApiUrl: string;
    private environment: Environment;
    constructor() {
        // this.restApiUrl = environment.api;
    }

    public getEnvironment(): Environment {
        return this.environment;
    }
    public getRestApiUrl(): string {
        return this.restApiUrl;
    }
}