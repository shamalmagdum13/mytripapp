import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketGenerateService {

  tickets: Ticket[] = [];
  constructor() { }

  generateTicket(journey: any, bus: any) {
    let newTicket: Ticket = {
      "id": Date.now(),
      "Bus Name": bus['Bus Name'],
      "Date": journey["departureDate"],
      "Departure Time": bus['Departure Time'],
      "Source": journey["sourceLocation"],
      "Destination": journey["destination"],
      "Coach Type": bus['Coach Type'],
      "Total Fare": journey["fare"],
      "Seat No": this.convertSeatNumber(journey['selectedSeats']),
      "Passenger Details": journey["passenger"]
    };
    this.tickets.push(newTicket);
    return newTicket.id;
  }

  getTicketById(id: any) {
    return this.tickets.find((ticket) => {
      return ticket.id == id;
    })
  }

  convertSeatNumber(seatNumbers: number[]) {
    let seatNames = [];
    for (let num of seatNumbers) {
      if (seatNumbers.length == 1) {
        let name = String.fromCharCode(65 + Math.floor(num / 4));
        name = name + (1 + num % 4)
        seatNames.push(name);
      } else {
        let name = String.fromCharCode(65 + Math.floor(num / 4));
        name = name + (1 + num % 4)
        seatNames.push(name + ',' + ' ');
      }

    }
    return seatNames;
  }
}
