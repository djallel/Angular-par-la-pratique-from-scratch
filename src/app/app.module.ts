import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {HomeComponent} from './home/home.component';
import {CarteComponent} from './carte/carte.component';
import {ReserveComponent} from './reserve/reserve.component';
import {ContactComponent} from './contact/contact.component';
import {MainDashComponent} from './main-dash/main-dash.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {DishTableComponent} from './dish-table/dish-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {QuickLunchService} from './services/quick-lunch.service';
import {MatDividerModule} from '@angular/material/divider';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'carte', component: CarteComponent},
  {path: 'reserve', component: ReserveComponent},
  //{ path: "schedule", component: ScheduleComponent },
  {path: 'contact', component: ContactComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    CarteComponent,
    ReserveComponent,
    ContactComponent,
    MainDashComponent,
    DishTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule
  ],
  providers: [QuickLunchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
