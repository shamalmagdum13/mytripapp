import { Component, OnInit } from '@angular/core';
import { SeatBookingService } from '../../services/seat-booking.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.css']
})

export class PassengerInfoComponent implements OnInit {
  passengerInfo: FormGroup = this.formBuilder.group({});
  submitted: boolean = false;
  journey: any;

  constructor(private formBuilder: FormBuilder,
    private seatBookingService: SeatBookingService,
    private router: Router) { }

  ngOnInit(): void {
    this.journey = this.seatBookingService.getJourneyObject();
    if (!this.journey) {
      this.router.navigate(['']);
    }
    else {
      this.passengerInfo = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(2)]],
        mobilenumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
        email: ['', [Validators.required, Validators.email]]
      });
    }
  }

  get f() {
    return this.passengerInfo.controls;
  }

  onFormSubmit() {
    this.submitted = true;
    if (this.passengerInfo.invalid)
      return;
    console.log(this.passengerInfo.value);
    this.seatBookingService.setPassengerInfo(this.passengerInfo.value);
    var ticketID = this.seatBookingService.confirmBooking();
    this.router.navigate(['/journeyDetails', ticketID]);
  }

}
