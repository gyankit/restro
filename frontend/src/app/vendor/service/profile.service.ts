import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from 'src/app/models/vendor';
import { UrlService } from 'src/app/service/url.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _url: any;

  constructor(private http: HttpClient, private url: UrlService) { }

  getRequest(): Observable<any> {
    this._url = this.url.getVendorUrl('profile');
    return this.http.post<any>(this._url, {});
  }

  putRequest(profile: Vendor): Observable<Vendor> {
    this._url = this.url.getVendorUrl('profile-update');
    return this.http.put<Vendor>(this._url, profile);
  }
}