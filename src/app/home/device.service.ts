import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor(private httpClient: HttpClient) {}

  getDevice(endpoint: string): Observable<string> {
    return this.httpClient.get(endpoint).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load joke :-('))
    );
  }
}
