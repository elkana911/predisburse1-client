import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PCPUploadResult } from '../pcpupload-result';

@Injectable({
  providedIn: 'root'
})
export class PCPServiceService {

  constructor(private httpClient: HttpClient) { }

  getPCPUploads(){
    console.log("test get pcp");
    return this.httpClient.get<PCPUploadResult[]>('http://localhost:8090/api/pcp_processlist');
  }

  getLOVAgreements(){
    return this.httpClient.get<String[]>('http://localhost:8090/api/lov_agreement');
  }

  getLOVScheme(){
    return this.httpClient.get<String[]>('http://localhost:8090/api/lov_scheme');
  }
}
