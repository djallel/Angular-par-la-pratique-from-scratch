import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {EveningEvent} from '../models/evening-event.interface';
import {debounceTime, map, switchMap, take, tap} from 'rxjs/operators';
import {ScheduleService} from '../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, OnDestroy {
  searchTerm = new FormControl();
  searchTerms$: Observable<string> = this.searchTerm.valueChanges; // $ veut dire c'est un obsevabe, c'est observable de string, car on va recevoir des string
  result: EveningEvent[] = [];
  searchSubscription: Subscription;

  constructor(private scheduleService: ScheduleService) {
  }

  ngOnInit() {

    this.getAllEvents();

    this.searchSubscription = this.searchTerms$
      .pipe(
        debounceTime(1000),
        switchMap(term => this.scheduleService.search(term))
      )
      .subscribe(data => (this.result = data), err => console.error(err));
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  getAllEvents() {
    this.scheduleService
      .getAllEvents()
      .pipe(take(1))
      .subscribe(
        data => (this.result = data),
        err => console.error(err),
        () => console.log('done')
      );
  }

}

