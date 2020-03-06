import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient: HttpClient) {
  }


  search(term): Observable<Object> {
    console.log('search');
    return this.httpClient.get('assets/schedules.json');
  }
}
