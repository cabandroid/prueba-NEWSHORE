import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/model/flight';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  headers: Headers;

  constructor(private http: HttpClient
    ) { 
    this.headers = new Headers({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Custom-header",
    });
  }

  /**
   * Consultar datos de los vuelos
   * 
   */
   private url: string = `${environment.API}/flights/`;

  getUniqueDataFlights(): Observable<Flight[]>{

    return this.http.get<Flight[]>(this.url + '0');
  }

}
