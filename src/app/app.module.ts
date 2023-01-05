import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { navbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BusListComponent } from './components/buslist/buslist.component';
import { SeatBookingService } from './services/seat-booking.service';
import { TicketGenerateService } from './services/ticket-generate.service';
import { SelectSeatsComponent } from './components/select-seats/select-seats.component';
import { SeatNamePipe } from './pipes/seatname.pipe';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';
import { JourneySummaryComponent } from './components/journey-summary/journey-summary.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { MyUpperPipe } from './pipes/myUpper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    navbarComponent,
    HomeComponent,
    BusListComponent,
    SelectSeatsComponent,
    SeatNamePipe,
    PassengerInfoComponent,
    JourneySummaryComponent,
    ViewTicketComponent,
    MyUpperPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SeatBookingService,
    TicketGenerateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
