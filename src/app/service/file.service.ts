import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private url: UrlService, private http: HttpClient) { }

  upload(files: File[], fileName: any, type: string): Observable<any> {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`file${i}`, files[i], fileName);
    }
    formData.append(`type`, type);
    return this.http.post<any>(this.url.getUrl('upload'), formData);
  }

}
