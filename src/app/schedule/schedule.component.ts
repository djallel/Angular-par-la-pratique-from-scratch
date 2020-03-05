import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {EveningEvent} from '../models/evening-event.interface';
import {debounceTime, map, switchMap, take} from 'rxjs/operators';

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

  constructor() {
  }

  ngOnInit() {

    this.searchTerms$
      .pipe(
        debounceTime(1000),
        map(x=> x.toUpperCase())
      )
      .subscribe(data => console.log(data), err => console.error(err));
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }


}

