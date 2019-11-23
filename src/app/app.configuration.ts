import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StorageService } from './core/storage.service';


@Injectable()
export class AppConfiguration {

    private config: Object = null;
    private env: Object = null;
    private selectedEnv: string;
    constructor(private httpClient: HttpClient,
        private storage: StorageService,
    ) { }

    public getConfig(key: any) {
        return this.config[key];
    }

    public getEnv(key: any) {
        return this.env[key];
    }


    public loadEnv() {
        return new Promise((resolve, reject) => {
            this.selectedEnv = environment.env;
            let request: Observable<EnvFile> = null;

            switch (this.selectedEnv) {

                case 'local': {
                    request = this.httpClient.get<EnvFile>('assets/config.' + this.selectedEnv + '.json');
                } break;
                case 'default': {
                    console.error('Environment file is not set or invalid');
                    resolve(true);
                } break;
            }

                console.log("Env: " + this.selectedEnv);
                    if (request) {
                        request.subscribe(
                            env => {
                                this.storage.setSession(env.urlBase);
                                resolve(true);
                            }, err => {
                                console.error(err);
                                resolve(err);
                            }
                        )
                    } else {
                        console.error('Env config"' + this.selectedEnv + '" não é válido');
                        resolve(true);
                    }
        });
    }
}

class EnvFile {
    envDescription: string;
    urlBase: string;
    debugging: boolean;
}




