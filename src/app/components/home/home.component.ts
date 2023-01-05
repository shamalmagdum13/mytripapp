import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Route } from '@angular/router';
import { SeatBookingService } from 'src/app/services/seat-booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  journeyInfo: FormGroup = this.fb.group({});
  submitted: boolean = false;
  sourceCities: string[] = [];
  destinationCities: string[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private seatBookingService: SeatBookingService
  ) { }

  ngOnInit(): void {
    this.sourceCities = this.seatBookingService.getSourceCitiesLocation();
    this.destinationCities = this.seatBookingService.getDestinationCitiesLocation();
    this.journeyInfo = this.fb.group({
      sourceLocation: ['', Validators.required],
      destination: ['', Validators.required],
      departureDate: ['', Validators.required]
    },
      {
        validators: [this.validJourney('sourceLocation', 'destination'),
        this.validDate('departureDate')]
      })
  }

  get f() {
    return this.journeyInfo.controls
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.journeyInfo.value);
    if (this.journeyInfo.invalid) { return; }

    this.seatBookingService.setJourneyEndpoints(this.journeyInfo.value)

    this.router.navigate(['/buslist']);
  }

  validJourney(src: string, dst: string) {
    return (formGroup: FormGroup) => {
      const source = formGroup.controls[src];
      const destination = formGroup.controls[dst];
      if (destination.value != "" && source.value === destination.value) {
        destination.setErrors(
          { invalidJourney: true }
        );
      }
    }
  }

  validDate(date: string) {
    return (formGroup: FormGroup) => {
      const dateControl = formGroup.controls[date];
      const journeydate = new Date(dateControl.value);
      const currentdate = new Date()
      currentdate.setHours(0, 0, 0, 0);
      if (journeydate.getTime() < currentdate.getTime()) {
        dateControl.setErrors({
          oldDate: true
        });
      }
    }
  }

}
