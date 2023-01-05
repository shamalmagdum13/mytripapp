import { Component, OnInit } from '@angular/core';
import { SeatBookingService } from '../../services/seat-booking.service';
import { Bus } from '../../models/bus';
import { Location } from '@angular/common'

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css']
})
export class BusListComponent implements OnInit {

  BusList: Bus[] | undefined = undefined;
  keys = ["Bus Name", "Departure Time", "Coach Type", "seats_available", "Fare"];
  constructor(private seatBookingService: SeatBookingService,
    private location: Location) { }

  ngOnInit(): void {
    this.BusList = this.seatBookingService.getFilteredBuses();
  }

  navigateBack() {
    this.location.back();
  }
}