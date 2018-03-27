import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
    apiBaseUrl: string;
    apiUsername: string;
    apiPassword: string;
    pageParamName: string;
}

export const APP_DI_CONFIG: AppConfig = {
    apiBaseUrl: environment.apiBaseUrl,
    apiUsername: environment.apiUsername,
    apiPassword: environment.apiPassword,
    pageParamName: environment.pageParamName
};

@NgModule({
    providers: [{
        provide: APP_CONFIG,
        useValue: APP_DI_CONFIG
    }]
})
export class AppConfigModule { }