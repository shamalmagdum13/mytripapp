import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { TicketGenerateService } from '../../services/ticket-generate.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  ticketId: any;
  ticket: Ticket | undefined;


  constructor(private route: ActivatedRoute,
    private ticketService: TicketGenerateService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.ticketId = params.get('id');
      this.ticket = this.ticketService.getTicketById(this.ticketId);
      // console.log(this.ticket)
      if (!this.ticket)
        this.router.navigate(['notfound']);
    })
  }
}
