import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {QuickLunchService} from '../services/quick-lunch.service';
import {Food} from '../models/food.interface';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {

  burgers: Food[];
  pizzas: Food[];
  galettes: Food[];

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return [
          { title: "Burgers", cols: 2, rows: 1, id: 'brg' },
          { title: "Galettes/crêpes", cols: 2, rows: 1, id: 'glt' },
          { title: "Pizza", cols: 2, rows: 1, id: 'pzz' }
        ];
      }

      return [
        { title: "Burgers", cols: 2, rows: 1, id: 'brg' },
        { title: "Galettes/crêpes", cols: 2, rows: 1, id: 'glt' },
        { title: "Pizza", cols: 2, rows: 1, id: 'pzz' }
      ];
    })
  );

  constructor(private breakpointObserver?: BreakpointObserver, private qls?: QuickLunchService) {
  }

  ngOnInit(): void {
    this.burgers = this.qls.burgers;
    this.pizzas = this.qls.pizzas;
    this.galettes = this.qls.galettes;
  }
}
