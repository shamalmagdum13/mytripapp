import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusListComponent } from './components/buslist/buslist.component';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';
import { JourneySummaryComponent } from './components/journey-summary/journey-summary.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { SelectSeatsComponent } from './components/select-seats/select-seats.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'buslist', component: BusListComponent },
  { path: 'buses/:id', component: SelectSeatsComponent },
  { path: 'passengerInfo', component: PassengerInfoComponent },
  { path: 'journeyDetails/:id', component: JourneySummaryComponent },
  { path: 'viewticket/:id', component: ViewTicketComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }