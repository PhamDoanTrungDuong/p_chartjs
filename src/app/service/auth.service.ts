import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const API_KEY = "coinranking92f83f6d5ea6ac53771534130ff4a0d32ccc153c3d621870"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-My-Custom-Header': `${API_KEY}`,
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //API_PRICING_CRYPTO
  private API_CRYPTO_PRICING = "https://api.coinranking.com/v2/coins"
  private PROXY_URL = "https://cors-anywhere.herokuapp.com/"

  

  constructor(private _http: HttpClient) { }

  // cryptoData(){
  //   const URL = `${this.PROXY_URL}${this.API_CRYPTO_PRICING}`;
  //   return this._http.get(URL, httpOptions).toPromise().then((data) => {
  //     return data;
  //   })
  // }

  cryptoData(): Observable<any>{
    const URL = `${this.PROXY_URL}${this.API_CRYPTO_PRICING}`;
    return this._http.get(URL, httpOptions)
  }
}
