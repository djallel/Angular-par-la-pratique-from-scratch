import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Schedule} from '../models/schedule.interface';
import {EveningEvent} from '../models/evening-event.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient: HttpClient) {
  }

  getAllEvents(): Observable<EveningEvent[]> {
    return this.httpClient
      .get<Schedule>('assets/schedules.json')
      .pipe(
        map(res => res.events)
      );
  }
  search(term): Observable<EveningEvent[]> {
    console.log('search');
    const termLowerCase = term.toLocaleLowerCase();
    return this.httpClient
      .get<Schedule>('assets/schedules.json')
      .pipe(
        map(res => res.events.filter(evt => evt.title.toLocaleLowerCase().indexOf(termLowerCase) > -1 || evt.description.toLocaleLowerCase().indexOf(termLowerCase) > -1))
      );
  }
}
